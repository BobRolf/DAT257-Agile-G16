import { useState } from "react";
import { useArea } from "../context/AreaContext";

function AreaInput() {
  const { setArea } = useArea();
  const [squareMeterValue, setSquareMeterValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow empty string for input clearing
    if (value === "") {
      setSquareMeterValue("");
      return;
    }

    const numberValue = parseFloat(value);

    // Block invalid or negative input
    if (isNaN(numberValue) || numberValue < 0) {
      return;
    }

    // Valid input
    setSquareMeterValue(value);
    setArea(numberValue);
  };

  return (
    <input
      type="number"
      className="form-control"
      placeholder="Example: 3.2"
      id="squareMeterValue"
      value={squareMeterValue}
      onChange={handleInputChange}
      min="0"
      step="0.5"
    />
  );
}

export default AreaInput;
