async function solarFetch(latitude=57.000, longitude=11.000, area = 5.0): Promise<string | undefined> {
    //Get the date
    const date = new Date();
    const currentYear = date.getFullYear()
    const fiveYearsAgo = currentYear - 20

    //url for fetching
    const URL = `https://power.larc.nasa.gov/api/temporal/monthly/point?start=${fiveYearsAgo}&end=${currentYear}&latitude=${latitude}&longitude=${longitude}&community=re&parameters=ALLSKY_SFC_SW_DWN&format=json&header=true`

    try {
        //fetch data object from 
        const response = await fetch(URL)
        //only get the json data
        const res = await response.json()

        //calculate with the data
        const asi = avgSolarIrradiance(res)
        const ep = solarPanelElectricityProduction(asi, area, 0.20)

        console.log('solar irradiance per day ' + asi.toFixed(4) + ' kWh/m^2.', 'avg solar panel output ' + ep.toFixed(4) + ' kWh.')
        return ('solar irradiance per day ' + asi.toFixed(4) + ' kWh/m^2.', 'avg solar panel output ' + ep.toFixed(4) + ' kWh.')
    }
    catch (error) {
        console.error('couldnt fetch solar data')
    }

    return undefined;
}

//res is the json response object
function avgSolarIrradiance(res: any) {
    //Get only solar irradiance
    res = res.properties.parameter.ALLSKY_SFC_SW_DWN
    //Convert to array of numbers
    var resArr = Object.values(res).map(Number)
    //Filter out negative values which represent bad data
    resArr = resArr.filter(val => (val >= 0))
    //calculate average solar irradiance over 5 years
    var avg = resArr.reduce((a, b) => a + b) / resArr.length;
    return avg
}

//panelArea in m^2, locIrradiance in kWh/m^2 (avg per day), panelEfficieny in percentage.
function solarPanelElectricityProduction(locIrradiance: number, panelArea: number, panelEfficiency: number) {
    const dailyElectricOutput = locIrradiance * panelArea * panelEfficiency
    return dailyElectricOutput
}

export default solarFetch