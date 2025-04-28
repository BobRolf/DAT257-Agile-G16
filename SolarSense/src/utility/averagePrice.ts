// Retrieve a JSON file from elprisetjustnu API with hourly recordings from a set date and electrical price area, calculate the average price over 24h
async function averagePrice(area: string): Promise<number | undefined>{
    const date = new Date();
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const url = `https://www.elprisetjustnu.se/api/v1/prices/${year}/${month}-${day}_${area}.json`;
    console.log("URL:", url);

    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const prices: number[] = data.map((entry: any) => entry.SEK_per_kWh);

    if (prices.length === 0) return undefined;

    const dailyAverage = prices.reduce((sum, p) => sum + p, 0) / prices.length;
    return dailyAverage
}

//Calculate the average electrical price from the last two years, this is to be used as an estimate for the electrical price over time.
//Because of limitations in the API, we cannot retrieve older historical data than the last two years.
export async function fetchTwoYearSpanAveragePrice(today: Date, area: string): Promise<number | null>{
    const dates: Date[] = []

    for (let i = 0; i < 24; i++) {
        const date = new Date(today);
        date.setMonth(today.getMonth() - i);
        date.setDate(1);
        dates.push(date);
    }
    const fetches = dates.map(date => averagePrice(date, area));
    const results = (await Promise.all(fetches)).filter((r): r is number => r !== null);

    const total = results.reduce((sum, val) => sum + val, 0);

    return total / results.length;
}
export default averagePrice;
