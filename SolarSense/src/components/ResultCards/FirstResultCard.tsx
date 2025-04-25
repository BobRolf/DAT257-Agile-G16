import React from "react";
import Card from "../Card";

interface FirstResultCardProps {
  result: string;
}

const FirstResultCard: React.FC<FirstResultCardProps> = ({ result }) => {
  return (
    <Card
      image=""
      title="First Results"
      text={`This is the first result card.\n\n${result}`}
      buttonText="Back to Calculator"
      buttonLink="/calculator"
    />
  );
};

export default FirstResultCard;
