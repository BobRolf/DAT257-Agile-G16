import priceZoneMapper from "./priceZoneMapper";
import averagePrice from "./averagePrice";
import solarFetch from "./solarFetch";

async function resultCalculator(
  lat: number,
  lng: number,
  area: number
): Promise<string> {
  const zone = await priceZoneMapper([lat, lng]);
  const price = await averagePrice(zone ?? "S3");
  const effectPerDay = await solarFetch(lat, lng, area);
  const savedPerYear = (effectPerDay ?? 0) * 365 * (price ?? 0);

  const resultDescription = `Coordinates: ${lat}, ${lng} 
    Area: ${area} m²<A
    Result: ${effectPerDay} avg. kWh/day
    Electrical price area: ${zone} 
    Avg money saved per year: ${savedPerYear}`; // Example description // Example usage of solarFetch
  return resultDescription;
}

export default resultCalculator;
