import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../components/Navbar";

import LocationSelector from "../components/LocationSelector";
import AreaInput from "../components/AreaInput";
import { useArea } from "../context/AreaContext";
import { useCoordinates } from "../context/CoordinatesContext";
import solarFetch from "../solarFetch"; // Assuming you have a function to fetch solar data

const Calculator: React.FC = () => {
  const { coordinates } = useCoordinates();
  const { area } = useArea();
  const [result, setResult] = useState<{ text: string }>({
    text: "",
  });

  const handleCalculation: () => Promise<void> = async () => {
    setResult({ text: "Loading..." }); // Reset result before calculation
    const resultDescription = `Coordinates: ${coordinates?.lat}, ${
      coordinates?.lng
    } Area: ${area} m²
    Result: ${await solarFetch(
      coordinates?.lat ?? undefined,
      coordinates?.lng ?? undefined,
      area ?? undefined
    )}`; // Example description // Example usage of solarFetch
    setResult({ text: resultDescription });
  };

  return (
    <>
      <div>
        <Navbar />
        <h1>Calculator</h1>
        <p>This is the Calculator page.</p>
        <label htmlFor="squareMeterValue">
          Please insert a location using the address finder or by entering
          coordinates:
        </label>
        <LocationSelector></LocationSelector>
        <label htmlFor="squareMeterValue">
          Please insert how many square meters of solarpanels you would like to
          install:
        </label>
        <AreaInput></AreaInput>
        <button className="btn btn-primary" onClick={handleCalculation}>
          Calculate
        </button>
      </div>
    </>
  );
};

export default Calculator;
