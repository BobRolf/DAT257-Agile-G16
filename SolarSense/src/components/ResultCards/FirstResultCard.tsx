import React from "react";
import Card from "../Card";

interface FirstResultCardProps {
  zone: string | null;
  price: number;
  electricityUsagePerYear: number;
  electricityTotalCost: number;
}

//This resultcard displays how much you spend on electricity per year

const FirstResultCard: React.FC<FirstResultCardProps> = ({
  zone,
  price,
  electricityUsagePerYear,
  electricityTotalCost,
}) => {
  return (
    <Card
      image=""
      title="Your current spendings on electricity"
      text={`
        The amount of energy you use per year is around: ${electricityUsagePerYear.toFixed(
          2
        )} kWh\n
        In the price zone ${zone}, the average price of electricity is: ${price.toFixed(
        2
      )} SEK/kWh\n
        This means that you spend around: ${electricityTotalCost.toFixed(
          2
        )} SEK per year on electricity\n
        \n`}
      buttonText="Back to Calculator"
      buttonLink="/calculator"
    />
  );
};

export default FirstResultCard;
