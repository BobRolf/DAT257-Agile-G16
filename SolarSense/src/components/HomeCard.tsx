import Card from "./Card";
//The card that displays on the home page

function HomeCard() {
  return (
    <Card
      image="/src/assets/solarpanels.jpg"
      title="SolarSense"
      text="Welcome to SolarSense. This is a project to provide information about the financial and environmental benefits of solar power.

This website enables you to explore how your personal benefits from solar panels would look. You can do this by using our Solar Calculator.

You can also visit our facts page to learn more about solar power and its significance for UN Sustainability Goal number 7, affordable and clean energy."
      buttonText="To Solar Calculator"
      buttonLink="/Calculator"
    />
  );
}

export default HomeCard;
