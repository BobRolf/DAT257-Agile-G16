import priceZoneMapper from "./priceZoneMapper";
import averagePrice from "./averagePrice";
import solarFetch from "./solarFetch";

interface ResultCalculatorOutput {
  zone: string | null; // Electrical price area
  price: number; // Average price in the zone
  givenArea: number; // Area of solar panels in square meters
  effectPerDay: number; // Average kWh/day
  savedPerYear: number; // Money saved per year
  electricityUsagePerYear: number; // Yearly electricity usage in kWh
  savedPerYearWithUsage: number; // Money saved per year after electricity usage
}

async function resultCalculator(
  lat: number,
  lng: number,
  area: number,
  efficiency: number,
  electricityUsage: number
): Promise<ResultCalculatorOutput> {
  const zone = await priceZoneMapper([lat, lng]);
  const price = await averagePrice(zone ?? "S3");
  const givenArea = area ?? 0;
  const effectPerDay = await solarFetch(lat, lng, area, efficiency);
  const savedPerYear = (effectPerDay ?? 0) * 365 * (price ?? 0);
  const electricityUsagePerYear = electricityUsage * 12; // Monthly usage to yearly
  const savedPerYearWithUsage = savedPerYear - electricityUsagePerYear * (price ?? 0);

  return {
    zone,
    price: price ?? 0,
    givenArea: givenArea,
    effectPerDay: effectPerDay ?? 0,
    savedPerYear: savedPerYear ?? 0,
    electricityUsagePerYear: electricityUsagePerYear,
    savedPerYearWithUsage: savedPerYearWithUsage ?? 0,
  };
}

export default resultCalculator;
