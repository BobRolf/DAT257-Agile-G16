import React from "react";
import Card from "../Card";

interface FourthResultCardProps {
  carbonSavedPerYear: number; // Carbon saved per year in kg CO2
}

const FourthResultCard: React.FC<FourthResultCardProps> = ({
  carbonSavedPerYear,
}) => {
  let carbonSavedText: string = "";
  if (carbonSavedPerYear === 0) {
    carbonSavedText = `You are not saving any carbon emissions with your current setup.`;
  } else if (carbonSavedPerYear < 1000) {
    carbonSavedText = `You are saving a small amount of carbon emissions with your current setup.`;
  } else if (carbonSavedPerYear < 5000) {
    carbonSavedText = `You are saving a moderate amount of carbon emissions with your current setup.`;
  } else {
    carbonSavedText = `You are saving a significant amount of carbon emissions with your current setup.`;
  }
  let planeFacts: string =
    "Your carbon savings are equal to about " +
    (carbonSavedPerYear / 167).toFixed(2) +
    " plane rides from Stockholm, Arlanda Airport to Gothenburg, Landvetter Airport.";
  let carFacts: string =
    "Your carbon savings are equal to about " +
    (carbonSavedPerYear / 2.4).toFixed(2) +
    " car rides from Stockholm to Gothenburg.";
  let treeFacts: string =
    "Your carbon savings are equal to about " +
    (carbonSavedPerYear / 22).toFixed(2) +
    " trees planted.";

  return (
    <Card
      image=""
      title="Carbon Emissions Savings"
      text={`Here is your carbon emissions impact:\n\n
      - Carbon Saved Per Year: ${carbonSavedPerYear.toFixed(2)} kg CO2
      \n
      ${carbonSavedText}\n\n
      - ${planeFacts}\n
      - ${carFacts}\n
      - ${treeFacts}\n`}
      buttonText="Back to Calculator"
      buttonLink="/calculator"
    />
  );
};

export default FourthResultCard;
