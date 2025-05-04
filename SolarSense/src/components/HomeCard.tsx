import Card from "./Card";
//The card that displays on the home page

function HomeCard() {
  return (
    <Card
      image="/src/assets/solarpanels.jpg"
      title="SolarSense"
      text="Welcome to SolarSense. This is a project to help further information about the financial and environmental benefits of solar power.
This website enables you to explore how your personal benefits from Solar Panels would look like. Do this by using our Solar Calculator.
You can also vist our fact page to learn more about solar power and the importance of it for UN Sustainability Goal number 7, affordable and clean energy."
      buttonText="To Solar Calculator"
      buttonLink="/Calculator"
    />
  );
}

export default HomeCard;
