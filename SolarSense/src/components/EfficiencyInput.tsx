import { useState } from "react";
import { useEfficiency } from "../context/EfficiencyContext";

function EfficiencyInput() {
  const { setEfficiency } = useEfficiency();
  const [efficiencyValue, setEfficiencyValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow empty string for erasing input
    if (value === "") {
      setEfficiencyValue("");
      return;
    }

    const numberValue = parseFloat(value);

    // Reject input outside bounds
    if (isNaN(numberValue) || numberValue < 0 || numberValue > 1) {
      return;
    }

    // Valid input within bounds
    setEfficiencyValue(value);
    setEfficiency(numberValue);
  };

  return (
    <input
      type="number"
      className="form-control"
      placeholder="Example: 0.2"
      id="efficiencyValue"
      value={efficiencyValue}
      onChange={handleInputChange}
      min="0"
      max="1"
      step="0.01"
    />
  );
}

export default EfficiencyInput;
