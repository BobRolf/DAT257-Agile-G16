import Card from './Card'
//The card that displays on the home page

function HomeCard(){
    return <Card
    image="/src/assets/SolarPanels.jpg"
    title="SolarSense"
    text="Welcome to SolarSense. This is a project to help further informationabout the financial and enviromental benefits of solar power.
This website enables you to explore how your personal benefits from Solar Panelwould look like. Do this by using our Solar Calculator.
You can also vist our fact page to learn more about solar power and the importance of it for UN Sutainability Goal number 7, afforadble and clean energy."
    buttonText="To Solar Calculator"
    buttonLink="/Calculator"
  />
}

export default HomeCard;