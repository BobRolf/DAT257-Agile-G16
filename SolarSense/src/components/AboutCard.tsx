import Card from "./Card";
//The card that displays on the home page

const AboutCard: React.FC = () => {
  return (
    <Card
      image=""
      title="About SolarSense"
      text={`This is a project created for the course Agile Software Project Management at Chalmers University of Technology. In this course, we are tasked to create a project that is related to the UN Sustainability Goals. We chose to create a website that helps people understand the financial and environmental benefits of solar power.
        
For this, we have created a Solar Calculator that helps you find how adding solar panels to your home would impact both you and the environment.

We also have a facts page that helps you understand the importance of solar power and its significance for UN Sustainability Goal number 7, affordable and clean energy.

This project was created by Group 16 and consists of the following members:
Simon Victor, Erik Hakeröd, Simon Bergström, Oliver Anderzén, and Gustav Hartwig.`}
      buttonText="Back to Home"
      buttonLink="/"
    />
  );
};

export default AboutCard;
