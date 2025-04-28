import { useState } from "react";
import { useArea } from "../../context/AreaContext";

function AreaInput() {
  const { area, setArea } = useArea();
  const [squareMeterValue, setsquareMeterValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setsquareMeterValue(value);

    const numberValue = parseFloat(value);
    if (!isNaN(numberValue)) {
      setArea(numberValue);
    } else {
      setArea(NaN);
    }
}
  return (
    <input
      type="number"
      className="form-control"
      placeholder="Example: 3.2"
      id="squareMeterValue"
      value={squareMeterValue}
      onChange={handleInputChange}
    />
  );
}

export default AreaInput;

/*<input
type="number"
className="form-control"
placeholder="Example: 3.2"
id="squareMeterValue"
value={squareMeterValue}
onChange={(e) =>
  setsquareMeterValue(
    e.target.value === "" ? "" : Number(e.target.value)
  )
}
/>*/