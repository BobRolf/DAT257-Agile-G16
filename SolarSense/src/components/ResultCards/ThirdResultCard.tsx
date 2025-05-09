import Card from "../Card";
//The card that displays on the home page

interface ThirdResultCardProps {
  savedPerYear: number;
  salesPerYear: number;
  amountNotUsedPerYear: number;
  amountUsedPerYear: number;
  electricityTotalSavings: number;
}

const ThirdResultCard: React.FC<ThirdResultCardProps> = ({
  savedPerYear,
  salesPerYear,
  amountNotUsedPerYear,
  amountUsedPerYear,
  electricityTotalSavings,
}) => {
  let electricitysavedtext: string;
  if (amountNotUsedPerYear === 0) {
    electricitysavedtext = `your electricity-usage still excedes the amount gained from your solarpanels, that means you wont need to install a battery and wont be able to sell any of your produced electricity`;
  } else {
    electricitysavedtext = `the amount not used equals to ${amountNotUsedPerYear.toFixed(
      2
    )}. You can sell the excess electricity produced by your solar panels to the grid, which means you can earn money from it. The amount you would gain is around: ${salesPerYear.toFixed(
      2
    )} SEK per year. This would result in a total savings of: ${electricityTotalSavings.toFixed(
      2
    )} SEK per year`;
  }

  return (
    <Card
      image=""
      title="Summary of your savings"
      text={`
        By using the electricity produced by your solar panels instead of buying electricity you save around: ${savedPerYear.toFixed(
          2
        )} SEK per year\n
        The amount of energy used from your solar panels is around: ${amountUsedPerYear.toFixed(
          2
        )} kWh per year\n
        This means that ${electricitysavedtext}\n`}
      buttonText="Back to Calculator"
      buttonLink="/Calculator"
    />
  );
};

export default ThirdResultCard;
