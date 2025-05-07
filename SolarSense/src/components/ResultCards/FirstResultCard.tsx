import React from "react";
import Card from "../Card";

interface FirstResultCardProps {
  zone: string | null;
  price: number;
  givenArea: number;
  effectPerDay: number;
  savedPerYear: number;
  electricityUsagePerYear: number;
  savedPerYearWithUsage: number;
}

const FirstResultCard: React.FC<FirstResultCardProps> = ({
  zone,
  price,
  givenArea,
  effectPerDay,
  savedPerYear,
  electricityUsagePerYear,
  savedPerYearWithUsage,
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
      - Money Saved Per Year After Usage: ${savedPerYearWithUsage.toFixed(
        2
      )} SEK`}
      buttonText="Back to Calculator"
      buttonLink="/calculator"
    />
  );
};

export default FirstResultCard;
