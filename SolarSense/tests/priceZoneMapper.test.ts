import { beforeEach, describe, it, expect, vi } from 'vitest';
import priceZoneMapper, { Point } from '../src/utility/priceZoneMapper';

const geoJsonData = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            properties: { PriceZone: "SE1" },
            geometry: {
                coordinates: [
                    [
                        [69.15344293423237, 20.157239722173358],
                        [68.31147271009723, 16.782476506832893],
                        [66.14768349081154, 14.242053089505362],
                        [64.44181135949347, 21.585012813433906],
                        [65.57171855463949, 24.361071418494873],
                        [68.12103202478059, 24.127390045537766],
                        [69.15344293423237, 20.157239722173358],
                    ],
                ],
                type: "Polygon",
            },
        },
        {
            type: "Feature",
            properties: { PriceZone: "SE2" },
            geometry: {
                coordinates: [
                    [
                        [64.45227993919721, 21.610210483554226],
                        [64.44090328835358, 21.585990989732665],
                        [66.13114585024775, 14.244735366979171],
                        [64.46980307655974, 11.678886466062067],
                        [61.248282557062765, 11.99606913405745],
                        [60.16806864169493, 13.825273350450885],
                        [59.81819667040179, 15.363669059900502],
                        [60.219516639013676, 17.210820410612484],
                        [60.6466179868184, 17.38036570367254],
                        [64.065091886364, 21.914724831698607],
                        [64.45227993919721, 21.610210483554226],
                    ],
                ],
                type: "Polygon",
            },
        },
        {
            type: "Feature",
            properties: { PriceZone: "SE3" },
            geometry: {
                coordinates: [
                    [
                        [61.248199042343344, 11.996049025467727],
                        [58.09389216976558, 10.474581263462198],
                        [56.4328317062631, 12.885676791861385],
                        [56.76217821908628, 13.34049043346127],
                        [57.067595691611245, 13.628911183216019],
                        [57.375752705134175, 15.928254188460585],
                        [57.38236122118141, 17.163143144263216],
                        [56.62964244066194, 18.162971638132802],
                        [57.83144646825036, 19.69665972810813],
                        [60.539783310140564, 19.690386807740936],
                        [60.642389906466946, 17.38608897627634],
                        [60.22085324014151, 17.250917414334253],
                        [59.81744980420376, 15.364446981650502],
                        [60.168028832076686, 13.825112102728696],
                        [61.248199042343344, 11.996049025467727],
                    ],
                ],
                type: "Polygon",
            },
        },
        {
            type: "Feature",
            properties: { PriceZone: "SE4" },
            geometry: {
                coordinates: [
                    [
                        [56.43288024388508, 12.88466021260217],
                        [56.50388194465137, 12.754224820889164],
                        [56.44699817646898, 12.261638121351439],
                        [55.260710614351865, 12.834829917176819],
                        [55.276018418714386, 14.496190512891616],
                        [56.12117743467948, 14.948458504060255],
                        [55.92949851106394, 16.571485067788274],
                        [57.35978673531338, 17.185415244230313],
                        [57.377655226312754, 17.04986919696239],
                        [57.37547842607336, 15.928529110917225],
                        [57.06680042526344, 13.629968701041946],
                        [56.75910183690877, 13.342282252243734],
                        [56.43288024388508, 12.88466021260217],
                    ],
                ],
                type: "Polygon",
            },
        },
    ],
};

beforeEach(() => {
    // Mock the fetch to return the hardcoded geoJSON data
    global.fetch = vi.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => geoJsonData,
    });
});

describe("priceZoneMapper", () => {
    it("should return correct price zone for coordinates inside the polygon", async () => {
        const coordinates: Point = [19.842176389143297, 68.06964764417636]; // Coordinates inside SE1 polygon (Switched order)
        const zone = await priceZoneMapper(coordinates);
        expect(zone).toBe("SE1");
    });

    it("should return SE3 if coordinates are outside of any price zone", async () => {
        const coordinates: Point = [70.0, 30.0]; // Coordinates outside all polygons
        const zone = await priceZoneMapper(coordinates);
        expect(zone).toBe("SE3");
    });

    it("should return 'SE2' when coordinates are inside the SE2 polygon", async () => {
        const coordinates: Point = [15.0, 63.0]; // Coordinates inside SE2 polygon
        const zone = await priceZoneMapper(coordinates);
        expect(zone).toBe("SE2");
    });

    it("should return 'SE4' when coordinates are inside the SE4 polygon", async () => {
        const coordinates: Point = [13.824214427249398, 56.00879050486492]; // Coordinates inside SE4 polygon
        const zone = await priceZoneMapper(coordinates);
        expect(zone).toBe("SE4");
    });

    it("should return 'SE3' when the GeoJSON does not contain any zones", async () => {
        // Mock empty GeoJSON for this specific test
        global.fetch = vi.fn().mockResolvedValueOnce({
            ok: true,
            json: async () => ({ features: [] }), // No price zones
        });
        const coordinates: Point = [16.917299346019757, 60.83061922048006]; // Outside all polygons
        const zone = await priceZoneMapper(coordinates);
        expect(zone).toBe("SE3");
    });
});
