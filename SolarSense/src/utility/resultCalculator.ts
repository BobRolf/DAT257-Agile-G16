import priceZoneMapper from "./priceZoneMapper";
import averagePrice from "./averagePrice";
import solarFetch from "./solarFetch";
import SolarSavings from "../assets/SolarSavings.json";
import CarbonSavings from "../assets/CarbonSavings.json";
import SolarSales from "../assets/SolarSales.json";

interface ResultCalculatorOutput {
  zone: string | null; // Electrical price area
  price: number; // Average price in the zone
  effectPerDay: number; // Average kWh/day
  carbonSavedPerYear: number; // Carbon saved per year in kg CO2
  savedPerYear: number; // Money saved per year
  electricityUsagePerYear: number; // Yearly electricity usage in kWh
  salesPerYear: number; // Money earned from selling excess energy
  amountNotUsedPerYear: number; // Amount of energy not used per year
  amountUsedPerYear: number; // Amount of energy used per year
  amountGainedTotal: number; // Total amount gained from solar energy
  electricityTotalCost: number; // Total cost of electricity per year
  electricityTotalSavings: number; // Total savings from solar energy per year
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
  const effectPerDay = await solarFetch(lat, lng, area, efficiency);
  const electricityUsagePerYear = electricityUsage * 12; // Monthly usage to yearly

  const solarSavingsTotal = Object.values(SolarSavings).reduce((sum, value) => {
    return typeof value === "number" ? sum + value : sum + 0;
  }, 0);

  const solarSalesTotal = Object.values(SolarSales).reduce((sum, value) => {
    return typeof value === "number" ? sum + value : sum + 0;
  }, 0);
  const carbonSavingsTotal = Object.values(CarbonSavings).reduce(
    (sum, value) => {
      return typeof value === "number" ? sum + value : sum + 0;
    },
    0
  );

  const amountGainedTotal = (effectPerDay ?? 0) * 365;
  const amountUsedPerYear = Math.min(
    electricityUsagePerYear,
    (effectPerDay ?? 0) * 365
  );
  const amountNotUsedPerYear = Math.max(
    0,
    ((effectPerDay ?? 0) * 365) - electricityUsagePerYear
  );
  const savedPerYear =
    (amountUsedPerYear ?? 0) * ((price ?? 0) + solarSavingsTotal);
  const salesPerYear = amountNotUsedPerYear * ((price ?? 0) + solarSalesTotal);
  const electricityTotalCost = electricityUsagePerYear * (price ?? 0);
  const electricityTotalSavings = savedPerYear + salesPerYear;

  const carbonSavedPerYear = (effectPerDay ?? 0) * 365 * carbonSavingsTotal; //Gives savings in kg CO2 per year
  return {
    zone,
    price: price ?? 0,
    effectPerDay: effectPerDay ?? 0,
    carbonSavedPerYear,
    savedPerYear: savedPerYear ?? 0,
    electricityUsagePerYear: electricityUsagePerYear ?? 0,
    salesPerYear: salesPerYear ?? 0,
    amountNotUsedPerYear: amountNotUsedPerYear ?? 0,
    amountUsedPerYear: amountUsedPerYear ?? 0,
    amountGainedTotal: amountGainedTotal ?? 0,
    electricityTotalCost: electricityTotalCost ?? 0,
    electricityTotalSavings: electricityTotalSavings ?? 0,
  };
}

export default resultCalculator;
