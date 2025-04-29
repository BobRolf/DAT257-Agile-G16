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
  it("returns correct result string with mocked dependencies", async () => {
    const result = await resultCalculator(59.3, 18.0, 20);

    expect(result).toContain("Coordinates: 59.3, 18");
    expect(result).toContain("Area: 20");
    expect(result).toContain("Result: 15 avg. kWh/day");
    expect(result).toContain("Electrical price area: S1");

    // (15 kWh/day) * 365 * (0.9 SEK/kWh) = 4927.5
    expect(result).toContain("Avg money saved per year: 4927.5");
  });
});
