import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Calculator: React.FC = () => {
  const [CoordinateValue, setCoordinateValue] = useState<string | "">("");
  const [squareMeterValue, setsquareMeterValue] = useState<number | "">("");
  const [result, setResult] = useState<{ text: string; number: number | null }>(
    {
      text: "",
      number: null,
    }
  );

  const handleCalculation = () => {
    if (CoordinateValue !== "" && squareMeterValue !== "") {
      const resultText = `Coordinates: ${CoordinateValue}`;
      const resultNumber = squareMeterValue;
      setResult({ text: resultText, number: resultNumber });
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <h1>Calculator</h1>
        <p>This is the Calculator page.</p>
        <div className="form-group">
          <label htmlFor="CoordinateValue">
            Please insert your Coordinates:
          </label>
          <input
            className="form-control"
            placeholder="Example: 57.67814383911258, 11.98354723252873"
            type="text"
            id="CoordinateValue"
            value={CoordinateValue}
            onChange={(e) =>
              setCoordinateValue(e.target.value === "" ? "" : e.target.value)
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="squareMeterValue">
            Please insert how many square meters of solarpanels you would like
            to install:
          </label>
          <input
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
          />
        </div>
        <button className="btn btn-primary" onClick={handleCalculation}>
          Calculate
        </button>
        {result.text && result.number !== null && (
          <div className="result">
            <h3>Result:</h3>
            <p>{result.text}</p>
            <p>Square Meters: {result.number}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Calculator;
