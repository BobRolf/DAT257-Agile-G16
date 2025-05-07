import React from "react";
import Card from "../Card";

interface FirstResultCardProps {
  zone: string | null;
  price: number;
  givenArea: number;
  effectPerDay: number;
  savedPerYear: number;
  electricityUsagePerYear: number;
  salesPerYear: number;
  amountNotUsedPerYear: number;
  amountUsedPerYear: number;
  amountGainedTotal: number;
  electricityTotalCost: number;
  electricityTotalSavings: number;
}

const FirstResultCard: React.FC<FirstResultCardProps> = ({
  zone,
  price,
  givenArea,
  effectPerDay,
  savedPerYear,
  electricityUsagePerYear,
  salesPerYear,
  amountNotUsedPerYear,
  amountUsedPerYear,
  amountGainedTotal,
  electricityTotalCost,
  electricityTotalSavings,
}) => {
  return (
    <Card
      image=""
      title="First Results"
      text={`Here are your results:\n\n
      - Electrical Price Area: ${zone ?? "Unknown"}\n
      - given area: ${givenArea.toFixed(2) ?? 0}\n
      - Average Price: ${price.toFixed(2)} SEK/kWh\n
      - Average Energy Output: ${effectPerDay.toFixed(2)} kWh/day\n
      - Money Saved Per Year: ${savedPerYear.toFixed(2)} SEK\n
      - Yearly Electricity Usage: ${electricityUsagePerYear.toFixed(2)} kWh\n
      - Money Earned from Selling Excess Energy: ${salesPerYear.toFixed(
        2
      )} SEK\n
      - Amount of Energy Not Used Per Year: ${amountNotUsedPerYear.toFixed(
        2
      )} kWh\n
      - Amount of Energy Used Per Year: ${amountUsedPerYear.toFixed(2)} kWh\n
      - Total Amount Gained from Solar Energy: ${amountGainedTotal.toFixed(
        2
      )} kWh\n
      - Total Cost of Electricity Per Year: ${electricityTotalCost.toFixed(
        2
      )} SEK\n
      - Total Savings from Solar Energy Per Year: ${electricityTotalSavings.toFixed(
        2
      )} SEK`}
      buttonText="Back to Calculator"
      buttonLink="/calculator"
    />
  );
};

export default FirstResultCard;
