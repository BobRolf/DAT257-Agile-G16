// tests/resultCalculator.test.ts
import { describe, it, expect, vi } from "vitest";
import resultCalculator from "../src/utility/resultCalculator";

// Mock the three dependencies
vi.mock("../src/utility/priceZoneMapper", () => ({
  default: vi.fn(() => Promise.resolve("S1")),
}));

vi.mock("../src/utility/averagePrice", () => ({
  default: vi.fn(() => Promise.resolve(0.9)),
}));

vi.mock("../src/utility/solarFetch", () => ({
  default: vi.fn(() => Promise.resolve(15)),
}));

// Mock SolarSavings.json
vi.mock("../src/assets/SolarSavings.json", () => ({
  default: {
    ElectricityCost: 0.49,
    ElectrcityCertificate: 0.02,
    YearlyCharge: 0,
    ElectrcityTransfer: 0.305,
    ElectrcityTax: 0.445,
    SubscribtionFee: 0,
  },
}));

// Mock the fetch function globally
declare const global: any;
global.fetch = vi.fn(async (url) => {
  if (
    url === "/src/assets/PriceZones.geojson" ||
    url === "../assets/PriceZones.geojson"
  ) {
    return {
      json: async () => ({
        features: [
          {
            geometry: {
              coordinates: [
                [
                  [0, 0],
                  [1, 1],
                  [1, 0],
                  [0, 0],
                ],
              ],
            },
            properties: { PriceZone: "S1" },
          },
        ],
      }),
    };
  }
  throw new Error(`Unhandled fetch URL: ${url}`);
});

describe("resultCalculator", () => {
  it("returns correct results", async () => {
    const result = await resultCalculator(59.3, 18.0, 20, 0.2);

    // Calculate the total SolarSavings
    const solarSavingsTotal = 0.49 + 0.02 + 0.305 + 0.445;

    // Expected savedPerYear calculation:
    // (15 kWh/day) * 365 * (0.9 SEK/kWh + solarSavingsTotal)
    const expectedSavedPerYear = 15 * 365 * (0.9 + solarSavingsTotal);

    expect(result.zone).toBe("S1");
    expect(result.price).toBe(0.9);
    expect(result.givenArea).toBe(20);
    expect(result.effectPerDay).toBe(15);
    expect(result.savedPerYear).toBeCloseTo(expectedSavedPerYear, 2); // Allow small floating-point differences
  });
});
