// tests/averagePrice.test.ts
import { describe, it, expect, beforeEach, vi, Mock } from "vitest";
import { dailyAverage, averagePrice } from "../src/utility/averagePrice";

describe("dailyAverage", () => {
    beforeEach(() => {
        global.fetch = vi.fn(); // Reset and mock fetch before each test
    });

    it("should calculate the daily average price correctly", async () => {
        const mockResponse = [
            { SEK_per_kWh: 0.50 },
            { SEK_per_kWh: 0.60 },
            { SEK_per_kWh: 0.55 },
        ];

        (global.fetch as Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => mockResponse,
        });

        const area = "SE1";
        const date = new Date("2025-05-09");
        const average = await dailyAverage(area, date);

        expect(average).toBeCloseTo(0.55, 2);
    });

    it("should return undefined if no prices are available", async () => {
        (global.fetch as Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => [],
        });

        const area = "SE1";
        const date = new Date("2025-05-09");
        const average = await dailyAverage(area, date);

        expect(average).toBeUndefined();
    });

    it("should throw an error if the fetch request fails", async () => {
        (global.fetch as Mock).mockResolvedValueOnce({
            ok: false,
            status: 500,
            json: async () => ({}),
        });

        const area = "SE1";
        const date = new Date("2025-05-09");

        await expect(dailyAverage(area, date)).rejects.toThrow("HTTP 500");
    });
});

describe("averagePrice", () => {
    beforeEach(() => {
        global.fetch = vi.fn();
    });

    it("should calculate the average price over the last two years correctly", async () => {
        const mockResponse = [
            { SEK_per_kWh: 0.50 },
            { SEK_per_kWh: 0.60 },
            { SEK_per_kWh: 0.55 },
        ];

        (global.fetch as Mock).mockResolvedValue({
            ok: true,
            json: async () => mockResponse,
        });

        const area = "SE1";
        const average = await averagePrice(area);

        expect(average).toBeCloseTo(0.55, 2);
    });

    it("should return null if no valid price data is available", async () => {
        (global.fetch as Mock).mockResolvedValue({
            ok: true,
            json: async () => [],
        });

        const area = "SE1";
        const average = await averagePrice(area);

        expect(average).toBeNull();
    });

    it("should throw if dailyAverage fails internally", async () => {
        (global.fetch as Mock).mockResolvedValue({
            ok: false,
            status: 500,
            json: async () => ({}),
        });

        const area = "SE1";

        await expect(averagePrice(area)).rejects.toThrow("HTTP 500");
    });

    it("should return null if all days return undefined", async () => {
        (global.fetch as Mock).mockResolvedValue({
            ok: true,
            json: async () => [],
        });

        const area = "SE1";
        const average = await averagePrice(area);

        expect(average).toBeNull();
    });
});
