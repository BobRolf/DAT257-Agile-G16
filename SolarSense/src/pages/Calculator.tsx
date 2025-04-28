import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../components/Navbar";
import { useCoordinates } from "../context/CoordinatesContext";
import { useArea } from "../context/AreaContext";
import LocationSelector from "../components/LocationComponents/LocationSelector";
import AreaInput from "../components/LocationComponents/AreaInput";
import resultCalculator from "../utility/resultCalculator";

const Calculator: React.FC = () => {
  const navigate = useNavigate();
  const { coordinates } = useCoordinates();
  const { area } = useArea();
  const [isLoading, setIsLoading] = useState(false);

  const handleCalculation: () => Promise<void> = async () => {
    if (!coordinates || !area) {
      alert("Please provide both coordinates and area.");
      return;
    }
    setIsLoading(true);
    const resultDescription = await resultCalculator(
      coordinates.lat,
      coordinates.lng,
      area
    );
    setIsLoading(false);
    // Redirect to the Results page and pass the result as state
    navigate("/results", { state: { result: resultDescription } });
  };

  return (
    <>
      <Navbar />

      <div className="card py-1 px-3">
        <h1 className="mb-1">Calculator</h1>
        <p className="mb-2">
          Using this calculator you can find out how much energy your solar
          panels will produce on average. At the moment, calculating monetary
          savings is only supported in Sweden.
        </p>

        <div className="row">
          {/* Location Card */}
          <div className="col-md-6 mb-4">
            <div className="card p-4 h-100">
              <h5 className="card-title mb-3">Location</h5>
              <p>
                Please insert a location using the address finder or the map:
              </p>
              <LocationSelector />
            </div>
          </div>

          {/* Area Card + Button tightly grouped */}
          <div className="col-md-6 mb-4">
            <div className="card p-4">
              <h5 className="card-title mb-3">Solar Panel Area</h5>
              <p>
                Please insert how many square meters of solar panels you would
                like to install:
              </p>
              <AreaInput />
            </div>

            {/* Button + Loading Bar grouped together */}
            <div className="d-flex flex-column align-items-center mt-2">
              <button
                className="btn btn-primary w-75"
                onClick={handleCalculation}
              >
                Calculate
              </button>

              {/* Loading bar appears directly under button */}
              {isLoading && (
                <div className="progress w-75 mt-3" style={{ height: "20px" }}>
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
