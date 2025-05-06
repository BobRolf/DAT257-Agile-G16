import { get } from "http";

// Retrieve a JSON file from elprisetjustnu API with hourly recordings from a set date and electrical price area, calculate the average price over 24h
async function dailyAverage(
  area: string,
  date: Date
): Promise<number | undefined> {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const url = `https://www.elprisetjustnu.se/api/v1/prices/${year}/${month}-${day}_${area}.json`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const prices: number[] = data.map((entry: any) => entry.SEK_per_kWh);
  if (prices.length === 0) return undefined;

  const dailyAverage = prices.reduce((sum, p) => sum + p, 0) / prices.length;
  return dailyAverage;
}

function getLastDayOfMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

//Calculate the average electrical price from the last two years, this is to be used as an estimate for the electrical price over time.
//Because of limitations in the API, we cannot retrieve older historical data than the last two years.
export async function averagePrice(area: string): Promise<number | null> {
  const dates: Date[] = [];

  const today = new Date();
  for (let i = 0; i < 24; i++) {
    const baseDate = new Date(today);
    baseDate.setMonth(today.getMonth() - i); // Automatically adjusts the year if needed
    for (
      let j = 1;
      j < getLastDayOfMonth(baseDate.getFullYear(), baseDate.getMonth());
      j++
    ) {
      const dailyDate = new Date(baseDate); // Create a new Date object for each day
      dailyDate.setDate(j); // Set the day of the month
      if (dailyDate > today) continue; // Skip future dates
      dates.push(dailyDate);
    }
  }

  const fetches = dates.map((date) => dailyAverage(area, date));
  const results = (await Promise.all(fetches)).filter(
    (r): r is number => r !== undefined
  );

  const total = results.reduce((sum, value) => sum + value, 0);

  if (results.length === 0) return null;

  return total / results.length;
}
export default averagePrice;
