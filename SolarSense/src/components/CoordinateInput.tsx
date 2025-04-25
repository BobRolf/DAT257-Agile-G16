import { useEffect, useState } from "react";
import { useCoordinates } from "../context/CoordinatesContext";

function CoordinateInput() {
  const { coordinates, setCoordinates, lastUpdatedBy } = useCoordinates();
  const [coordinateValue, setCoordinateValue] = useState("");

  useEffect(() => {
    if (coordinates && lastUpdatedBy === "finder") {
      setCoordinateValue(`${coordinates.lat}, ${coordinates.lng}`);
    }
  }, [coordinates, lastUpdatedBy]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCoordinateValue(value);

    const [latStr, lngStr] = value.split(",").map((v) => v.trim());
    const lat = parseFloat(latStr);
    const lng = parseFloat(lngStr);

    if (!isNaN(lat) && !isNaN(lng)) {
      setCoordinates({ lat, lng }, "input");
    }
  };

  return (
    <input
      style={{
        width: "100%",
        maxWidth: "500px",
        display: "block",
        padding: "0.5rem",
        fontSize: "1rem"
      }}
      className="form-control"
      placeholder="Example: 57.67814383911258, 11.98354723252873"
      type="text"
      id="CoordinateValue"
      value={coordinateValue}
      onChange={handleInputChange}
    />
  );
}

export default CoordinateInput;
