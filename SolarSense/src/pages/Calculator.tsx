import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useCoordinates } from "../context/CoordinatesContext";
import { useEfficiency } from "../context/EfficiencyContext";
import { useArea } from "../context/AreaContext";
import { useElectricityUsage } from "../context/ElectricityUsageContext"; // Assuming you have a context for electricity usage
import LocationSelector from "../components/LocationComponents/LocationSelector";
import AreaInput from "../components/Inputs/AreaInput";
import resultCalculator from "../utility/resultCalculator";
import EfficiencyInput from "../components/EfficiencyInput";
import { useAdvancedMode } from "../context/AdvancedModeContext";
import Switch from "react-switch";
import ElectricityUsageInput from "../components/Inputs/ElectricityUsageInput"; // Assuming you have a component for electricity usage input

const Calculator: React.FC = () => {
  const navigate = useNavigate();
  const { coordinates } = useCoordinates();
  const { area } = useArea();
  const { efficiency } = useEfficiency();
  const { electricityUsage } = useElectricityUsage(); // Assuming you have a context for electricity usage
  const [isLoading, setIsLoading] = useState(false);
  const { isAdvancedMode, toggleAdvancedMode } = useAdvancedMode(); // Access properties from the returned object

  const handleCalculation: () => Promise<void> = async () => {
    if (!coordinates || !area) {
      alert("Please provide both coordinates and area.");
      return;
    }
    setIsLoading(true);

    // Perform the calculation and get the results
    const {
      zone,
      price,
      effectPerDay,
      carbonSavedPerYear,
      savedPerYear,
      electricityUsagePerYear,
      salesPerYear,
      amountNotUsedPerYear,
      amountUsedPerYear,
      amountGainedTotal,
      electricityTotalCost,
      electricityTotalSavings,
    } = await resultCalculator(
      coordinates.lat,
      coordinates.lng,
      area,
      efficiency ?? 0.2,
      electricityUsage ?? 1667
    );

    setIsLoading(false);

    // Redirect to the Results page and pass the results as separate variables
    navigate("/results", {
      state: {
        zone,
        price,
        area,
        efficiency,
        effectPerDay,
        carbonSavedPerYear,
        savedPerYear,
        electricityUsagePerYear,
        salesPerYear,
        amountNotUsedPerYear,
        amountUsedPerYear,
        amountGainedTotal,
        electricityTotalCost,
        electricityTotalSavings,
      },
    });
  };

  return (
    <>
      <div className="card py-1 px-3">
        <h1 className="mb-1">Calculator</h1>

        {/* flex container: text on left, switch+label on right */}
        <div className="d-flex align-items-center mb-3">
          <p className="mb-0">
            Using this calculator you can find out how much energy your solar
            panels will produce on average. At the moment, calculating monetary
            savings is only supported in Sweden.
          </p>
          <div className="ms-auto d-flex align-items-center">
            <Switch
              onChange={toggleAdvancedMode}
              checked={isAdvancedMode}
              onColor="#0d6efd"
              offColor="#ddd"
              uncheckedIcon={false}
              checkedIcon={false}
            />
            <span
              className="ms-2 d-inline-block text-end"
              style={{ width: "14ch" }}
            >
              {isAdvancedMode ? "Advanced Mode" : "Basic Mode"}
            </span>
          </div>
        </div>

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
            {/* Area Card */}{" "}
            <div className="card p-4">
              <h5 className="card-title mb-3">Solar Panel Area</h5>
              <p>
                Please insert how many square meters of solar panels you would
                like to install:
              </p>
              <AreaInput />
            </div>
            {isAdvancedMode && (
              <div className="card p-4">
                <h5 className="card-title mb-3">Solar Panel Efficiency</h5>
                <p>
                  Please insert the efficiency of your solar panels, leave blank
                  for default of 0.2:
                </p>
                <EfficiencyInput />
              </div>
            )}
            {isAdvancedMode && (
              <div className="card p-4">
                <h5 className="card-title mb-3">Current Electrical Usages</h5>
                <p>
                  Please insert how much electricity you spend per month in kWh,
                  leave blank for default of 1667 kWh (average for a Swedish
                  household):
                </p>
                <ElectricityUsageInput />
              </div>
            )}
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
