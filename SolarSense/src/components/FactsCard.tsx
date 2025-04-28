import Card from "./Card";
//The card that displays on the home page

const FactsCard: React.FC = () => {
  return (
    <Card
      image="/src/assets/solar-chart.PNG"
      title="Facts about Solar-panels and enviromental impacts"
      text={`1. How Solar Panels Impact the Environment

Positive Impacts:

    - Reduce Greenhouse Gas Emissions: Unlike fossil fuels (coal, oil, natural gas), solar panels produce electricity without releasing carbon dioxide (CO₂) or other harmful gases into the atmosphere.

    - Decrease Air Pollution: Solar energy helps cut down smog, acid rain, and respiratory health issues caused by burning fossil fuels.

    - Reduce Water Usage: Traditional power plants (especially nuclear and coal) require enormous amounts of water for cooling. Solar panels, especially rooftop solar, use minimal to no water during operation.

    - Promote Land Use Efficiency: Solar installations can coexist with farming (e.g., "agrivoltaics" — growing crops under solar panels), making more efficient use of land.

Negative Impacts (but generally smaller compared to fossil fuels):

    - Manufacturing Footprint: Making solar panels requires mining materials like silicon, silver, and rare earth metals. This can cause habitat disruption and pollution if not managed properly.

    - Waste and Recycling Challenges: At the end of their 25–30 year lifespan, solar panels must be disposed of or recycled. Currently, recycling infrastructure for old panels is still developing in many parts of the world.

    - Land Use (for large solar farms): Large-scale solar farms can disrupt local ecosystems if not carefully planned.`}
      buttonText="Back to Home"
      buttonLink="/"
    />
  );
};

export default FactsCard;
