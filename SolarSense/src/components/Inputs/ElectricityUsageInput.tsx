import { useState } from "react";
import { useElectricityUsage } from "../../context/ElectricityUsageContext";

function ElectricityUsage() {
  const { setElectricityUsage } = useElectricityUsage();
  const [electricityUsage, setElectricityUsageValue] = useState<
    string | number
  >("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow empty string for erasing input
    if (value === "") {
      setElectricityUsageValue("");
      return;
    }

    const numberValue = parseFloat(value);

    // Reject input outside bounds
    if (isNaN(numberValue) || numberValue < 0) {
      return;
    }

    // Valid input within bounds
    setElectricityUsageValue(value);
    setElectricityUsage(numberValue);
  };

  return (
    <input
      type="number"
      className="form-control"
      placeholder="Example: 1667"
      id="electricityUsageValue"
      value={electricityUsage}
      onChange={handleInputChange}
      min="0"
      step="50"
    />
  );
}

export default ElectricityUsage;
