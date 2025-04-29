import { useState } from "react";
import { useEfficiency } from "../context/EfficiencyContext";

function EfficiencyInput() {
  const { efficiency, setEfficiency } = useEfficiency();
  const [efficiencyValue, setEfficiencyValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEfficiencyValue(value);

    const numberValue = parseFloat(value);
    if (!isNaN(numberValue)) {
      setEfficiency(numberValue);
    } else {
      setEfficiency(0.2);
    }
  };
  return (
    <input
      type="number"
      className="form-control"
      placeholder="Example: 0.2"
      id="efficiencyValue"
      value={efficiencyValue}
      onChange={handleInputChange}
    />
  );
}

export default EfficiencyInput;
