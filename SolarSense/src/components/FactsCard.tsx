import Card from "./Card";

const FactsCard: React.FC = () => {
  return (
    <Card
      image="/src/assets/solar-chart.PNG"
      title="Facts about Solar-panels and environmental impacts"
      text={`Solar panels are a great way to reduce your carbon footprint.`}
      buttonText="Back to Home"
      buttonLink="/"
    >
      {/* Add a new div inside the card */}
      <div className="additional-info" style={{ marginTop: "1rem" }}>
        <h6>Did you know?</h6>
        <p>
          Solar energy is one of the cleanest sources of energy and has a
          minimal impact on the environment.
        </p>
      </div>
    </Card>
  );
};

export default FactsCard;
