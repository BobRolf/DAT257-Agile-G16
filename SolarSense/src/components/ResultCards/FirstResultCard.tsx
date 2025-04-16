import Card from "../Card";
import { useCoordinates } from "../../context/CoordinatesContext";
import { useArea } from "../../context/AreaContext"; // Import the AreaContext
//The card that displays on the home page

const FirstResultCard: React.FC = () => {
  const { coordinates } = useCoordinates();
  const result1 = `Coordinates: ${coordinates?.lat}, ${coordinates?.lng}`; // Example result 1
  const { area } = useArea(); // Get the area from the context
  const result2 = `Area: ${area} m²`; // Example result 2
  return (
    <>
      <Card
        image=""
        title="First Results"
        text={
          "This is the first result card." +
          "\n" +
          "This card is used to display the first result of the calculation." +
          "\n" +
          result1 +
          "\n" +
          result2
        }
        buttonText="Back to Calculator"
        buttonLink="/Calculator"
      />
    </>
  );
};

export default FirstResultCard;
