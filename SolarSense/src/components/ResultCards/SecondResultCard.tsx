import Card from "../Card";
//The card that displays on the home page

interface SecondResultCardProps {
  givenArea: number;
  givenEfficiency: number;
  effectPerDay: number;
  amountGainedTotal: number;
}

const SecondResultCard: React.FC<SecondResultCardProps> = ({
  givenArea,
  givenEfficiency,
  effectPerDay,
  amountGainedTotal,
}) => {
  return (
    <Card
      image=""
      title="Efficiency and Effectiveness of your Solar Panels"
      text={`
        In your selected location the amount of energy produced by the installed solarpanels would be around: ${effectPerDay.toFixed(
          2
        )} kWh per day\n
        This is based on the area of ${givenArea} m2 and an efficiency of ${
        (givenEfficiency ?? 0.2) * 100
      }%\n
        By summerizing the average day effect the amount of energy produced would be around: ${amountGainedTotal.toFixed(
          2
        )} kWh per year \n\n`}
      buttonText="Back to Calculator"
      buttonLink="/Calculator"
    />
  );
};

export default SecondResultCard;
