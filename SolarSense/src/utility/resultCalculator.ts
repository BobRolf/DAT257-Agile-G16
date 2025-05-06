import priceZoneMapper from "./priceZoneMapper";
import averagePrice from "./averagePrice";
import solarFetch from "./solarFetch";
import SolarSavings from "../assets/SolarSavings.json";

interface ResultCalculatorOutput {
  zone: string | null; // Electrical price area
  price: number; // Average price in the zone
  givenArea: number; // Area of solar panels in square meters
  effectPerDay: number; // Average kWh/day
  savedPerYear: number; // Money saved per year
}

async function resultCalculator(
  lat: number,
  lng: number,
  area: number,
  efficiency: number
): Promise<ResultCalculatorOutput> {
  const zone = await priceZoneMapper([lat, lng]);
  const price = await averagePrice(zone ?? "S3");
  const givenArea = area ?? 0;
  const effectPerDay = await solarFetch(lat, lng, area, efficiency);
  const solarSavingsTotal = Object.values(SolarSavings).reduce((sum, value) => {
    return typeof value === "number" ? sum + value : sum + 0;
  }, 0);
  const savedPerYear =
    (effectPerDay ?? 0) * 365 * ((price ?? 0) + solarSavingsTotal);

  return {
    zone,
    price: price ?? 0,
    givenArea: givenArea,
    effectPerDay: effectPerDay ?? 0,
    savedPerYear,
  };
}

export default resultCalculator;
