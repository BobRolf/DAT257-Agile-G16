import React from "react";
import Card from "../Card";

const CalculationInfoCard: React.FC = () => {
  return (
    <Card
      image=""
      title="Calculation Info"
      text={`The calculations are done in the following way:
        - The average solar irradation in the past 5 years is taken from NASA.
        - The effect per day is calculated by taking the solar irradation multiplyied with the area and the efficiency of the solar panels.
        - The average price of electricity the past 2 years is taken from elprisetjustnu.se.
        - Other savings per kWh are taken from solcellskollen.se
        - Money saved per year is effect per day * 365 * (average price of electricity + other savings per kWh).
        Limitations:
        - This calculator assumes that electricity sold is sold for the average price the past 2 years.
            - This is not the case in reality as you are more likely to sell electricity during the summer.`}
      buttonText="Back to Calculator"
      buttonLink="/calculator"
    />
  );
};

export default CalculationInfoCard;
