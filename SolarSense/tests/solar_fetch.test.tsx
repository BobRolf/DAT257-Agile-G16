import { describe, it, expect, vi, beforeEach } from 'vitest'
import solarFetch from '../src/solarFetch.tsx' // adjust path if needed

// Re-export helper functions for testability
import { avgSolarIrradiance, solarPanelElectricityProduction } from '../src/solarFetch'

global.fetch = vi.fn()

const mockResponse = {
  properties: {
    parameter: {
      ALLSKY_SFC_SW_DWN: {
        "2001": 3.2,
        "2002": 4.1,
        "2003": 3.5,
        "2004": 3.8
      }
    }
  }
}

describe('solarFetch', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should fetch and log solar data successfully', async () => {
    const json = vi.fn().mockResolvedValue(mockResponse)
    ;(fetch as any).mockResolvedValue({ json })

    console.log = vi.fn()

    await solarFetch(57.0, 11.0)

    expect(fetch).toHaveBeenCalled()
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('solar irradiance per day'),
      expect.stringContaining('avg solar panel output')
    )
  })

  it('should handle fetch error gracefully', async () => {
    ;(fetch as any).mockRejectedValue(new Error('Failed to fetch'))

    console.error = vi.fn()

    await solarFetch()

    expect(console.error).toHaveBeenCalledWith('couldnt fetch solar data')
  })
})

describe('avgSolarIrradiance', () => {
  it('calculates correct average', () => {
    const res = {
      properties: {
        parameter: {
          ALLSKY_SFC_SW_DWN: {
            jan: 2,
            feb: 4,
            mar: -1, // should be filtered out
            apr: 6
          }
        }
      }
    }

    const avg = avgSolarIrradiance(res)
    expect(avg).toBeCloseTo(4) // (2 + 4 + 6) / 3
  })
})

describe('solarPanelElectricityProduction', () => {
  it('calculates electricity output correctly', () => {
    const output = solarPanelElectricityProduction(5, 2, 0.2)
    expect(output).toBeCloseTo(2)
  })
})