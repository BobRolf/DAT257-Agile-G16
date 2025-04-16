import Card from "../Card";
//The card that displays on the home page

const SecondResultCard: React.FC = () => {
  return (
    <Card
      image=""
      title="Second Results"
      text={
        "This is the Second result card." +
        "\n" +
        "Here we see other fun and interresting facts about the data we just Calculated."
      }
      buttonText="Back to Calculator"
      buttonLink="/Calculator"
    />
  );
};

export default SecondResultCard;
