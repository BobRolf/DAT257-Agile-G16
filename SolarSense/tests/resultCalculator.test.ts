import { describe, it, expect, vi } from "vitest";
import resultCalculator from "../src/utility/resultCalculator";

// Mock dependencies
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

// Mock SolarSales.json
vi.mock("../src/assets/SolarSales.json", () => ({
  default: {
    SalesRevenue: 0.5,
  },
}));

// Mock CarbonSavings.json
vi.mock("../src/assets/CarbonSavings.json", () => ({
  default: {
    CarbonOffset: 0.2,
  },
}));

describe("resultCalculator", () => {
  it("calculates all results correctly for normal inputs", async () => {
    const lat = 59.3;
    const lng = 18.0;
    const area = 20;
    const efficiency = 0.2;
    const electricityUsage = 500; // Monthly electricity usage in kWh

    const result = await resultCalculator(lat, lng, area, efficiency, electricityUsage);

    // Calculate expected values
    const solarSavingsTotal = 0.49 + 0.02 + 0.305 + 0.445; // Sum of SolarSavings
    const solarSalesTotal = 0.5; // Sales revenue
    const carbonSavingsTotal = 0.2; // Carbon offset

    const electricityUsagePerYear = electricityUsage * 12; // Convert monthly usage to yearly
    const effectPerYear = 15 * 365; // Daily effect to yearly
    const amountUsedPerYear = Math.min(electricityUsagePerYear, effectPerYear);
    const amountNotUsedPerYear = Math.max(0, effectPerYear - electricityUsagePerYear);
    const savedPerYear = amountUsedPerYear * (0.9 + solarSavingsTotal);
    const salesPerYear = amountNotUsedPerYear * (0.9 + solarSalesTotal);
    const electricityTotalCost = electricityUsagePerYear * 0.9;
    const electricityTotalSavings = savedPerYear + salesPerYear;
    const carbonSavedPerYear = effectPerYear * carbonSavingsTotal;

    // Assertions
    expect(result.zone).toBe("S1");
    expect(result.price).toBe(0.9);
    expect(result.effectPerDay).toBe(15);
    expect(result.electricityUsagePerYear).toBe(electricityUsagePerYear);
    expect(result.amountUsedPerYear).toBe(amountUsedPerYear);
    expect(result.amountNotUsedPerYear).toBe(amountNotUsedPerYear);
    expect(result.savedPerYear).toBeCloseTo(savedPerYear, 2);
    expect(result.salesPerYear).toBeCloseTo(salesPerYear, 2);
    expect(result.electricityTotalCost).toBeCloseTo(electricityTotalCost, 2);
    expect(result.electricityTotalSavings).toBeCloseTo(electricityTotalSavings, 2);
    expect(result.carbonSavedPerYear).toBeCloseTo(carbonSavedPerYear, 2);
  });

  it("handles zero electricity usage correctly", async () => {
    const lat = 59.3;
    const lng = 18.0;
    const area = 20;
    const efficiency = 0.2;
    const electricityUsage = 0; // Zero electricity usage

    const result = await resultCalculator(lat, lng, area, efficiency, electricityUsage);

    // Calculate expected values
    const solarSavingsTotal = 0.49 + 0.02 + 0.305 + 0.445;
    const solarSalesTotal = 0.5;
    const carbonSavingsTotal = 0.2;

    const electricityUsagePerYear = electricityUsage * 12;
    const effectPerYear = 15 * 365;
    const amountUsedPerYear = Math.min(electricityUsagePerYear, effectPerYear);
    const amountNotUsedPerYear = Math.max(0, effectPerYear - electricityUsagePerYear);
    const savedPerYear = amountUsedPerYear * (0.9 + solarSavingsTotal);
    const salesPerYear = amountNotUsedPerYear * (0.9 + solarSalesTotal);
    const electricityTotalCost = electricityUsagePerYear * 0.9;
    const electricityTotalSavings = savedPerYear + salesPerYear;
    const carbonSavedPerYear = effectPerYear * carbonSavingsTotal;

    // Assertions
    expect(result.zone).toBe("S1");
    expect(result.price).toBe(0.9);
    expect(result.effectPerDay).toBe(15);
    expect(result.electricityUsagePerYear).toBe(electricityUsagePerYear);
    expect(result.amountUsedPerYear).toBe(amountUsedPerYear);
    expect(result.amountNotUsedPerYear).toBe(amountNotUsedPerYear);
    expect(result.savedPerYear).toBeCloseTo(savedPerYear, 2);
    expect(result.salesPerYear).toBeCloseTo(salesPerYear, 2);
    expect(result.electricityTotalCost).toBeCloseTo(electricityTotalCost, 2);
    expect(result.electricityTotalSavings).toBeCloseTo(electricityTotalSavings, 2);
    expect(result.carbonSavedPerYear).toBeCloseTo(carbonSavedPerYear, 2);
  });

  it("handles high electricity usage correctly", async () => {
    const lat = 59.3;
    const lng = 18.0;
    const area = 20;
    const efficiency = 0.2;
    const electricityUsage = 2000; // High electricity usage

    const result = await resultCalculator(lat, lng, area, efficiency, electricityUsage);

    // Calculate expected values
    const solarSavingsTotal = 0.49 + 0.02 + 0.305 + 0.445;
    const solarSalesTotal = 0.5;
    const carbonSavingsTotal = 0.2;

    const electricityUsagePerYear = electricityUsage * 12;
    const effectPerYear = 15 * 365;
    const amountUsedPerYear = Math.min(electricityUsagePerYear, effectPerYear);
    const amountNotUsedPerYear = Math.max(0, effectPerYear - electricityUsagePerYear);
    const savedPerYear = amountUsedPerYear * (0.9 + solarSavingsTotal);
    const salesPerYear = amountNotUsedPerYear * (0.9 + solarSalesTotal);
    const electricityTotalCost = electricityUsagePerYear * 0.9;
    const electricityTotalSavings = savedPerYear + salesPerYear;
    const carbonSavedPerYear = effectPerYear * carbonSavingsTotal;

    // Assertions
    expect(result.zone).toBe("S1");
    expect(result.price).toBe(0.9);
    expect(result.effectPerDay).toBe(15);
    expect(result.electricityUsagePerYear).toBe(electricityUsagePerYear);
    expect(result.amountUsedPerYear).toBe(amountUsedPerYear);
    expect(result.amountNotUsedPerYear).toBe(amountNotUsedPerYear);
    expect(result.savedPerYear).toBeCloseTo(savedPerYear, 2);
    expect(result.salesPerYear).toBeCloseTo(salesPerYear, 2);
    expect(result.electricityTotalCost).toBeCloseTo(electricityTotalCost, 2);
    expect(result.electricityTotalSavings).toBeCloseTo(electricityTotalSavings, 2);
    expect(result.carbonSavedPerYear).toBeCloseTo(carbonSavedPerYear, 2);
  });
});