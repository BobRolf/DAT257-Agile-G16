import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../components/Navbar";
import AddressFinder from "../components/AddressFinder"; // Importing the AddressFinder component

const Calculator: React.FC = () => {
  const [CoordinateValue, setCoordinateValue] = useState<string | "">("");
  const [squareMeterValue, setsquareMeterValue] = useState<number | "">("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCalculation = () => {
    if (CoordinateValue !== "" && squareMeterValue !== "") {
      // Navigate to the Results page and pass data via state
      navigate("/Results", {
        state: {
          text: `Coordinates: ${CoordinateValue}`,
          number: squareMeterValue,
        },
      });
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <h1>Calculator</h1>
        <p>This is the Calculator page.</p>
        <AddressFinder />
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
      </div>
    </>
  );
};

export default Calculator;
