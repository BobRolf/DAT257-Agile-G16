import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../components/Navbar";

import LocationSelector from "../components/LocationSelector";
import AreaInput from "../components/AreaInput";
import { useArea } from "../context/AreaContext";
import { useCoordinates } from "../context/CoordinatesContext";
import solarFetch from "../solarFetch"; // Assuming you have a function to fetch solar data
import priceZoneMapper from "../priceZoneMapper"; // Assuming you have a function to find the electrical price zone
import averagePrice from "../averagePrice";

const Calculator: React.FC = () => {
  const { coordinates } = useCoordinates();
  const { area } = useArea();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleCalculation: () => Promise<void> = async () => {
    if (!coordinates || !area) {
      alert("Please provide both coordinates and area.");
      return;
    }
    setIsLoading(true);
    const zone = await priceZoneMapper([
      coordinates?.lat ?? 0,
      coordinates?.lng ?? 0,
    ]);
    const price = await averagePrice(zone ?? "S3");
    const effectPerDay = await solarFetch(
      coordinates?.lat ?? undefined,
      coordinates?.lng ?? undefined,
      area ?? undefined
    );
    const savedPerYear = (effectPerDay ?? 0) * 365 * (price ?? 0);

    const resultDescription = `Coordinates: ${coordinates?.lat}, ${coordinates?.lng} Area: ${area} m²
    Result: ${effectPerDay} avg. kWh/day
    Electrical price area: ${zone}, Avg money saved per year: ${savedPerYear}`; // Example description // Example usage of solarFetch

    setIsLoading(false); // Stop loading
    // Redirect to the Results page and pass the result as state
    navigate("/results", { state: { result: resultDescription } });
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

        {isLoading && (
          <div className="mt-3">
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Calculator;
