import Card from "../Card";
//The card that displays on the home page

const FirstResultCard: React.FC = () => {
  return (
    <Card
      image=""
      title="First Results"
      text={
        "This is the first result card." +
        "\n" +
        "This card is used to display the first result of the calculation."
      }
      buttonText="Back to Calculator"
      buttonLink="/Calculator"
    />
  );
};

export default FirstResultCard;
