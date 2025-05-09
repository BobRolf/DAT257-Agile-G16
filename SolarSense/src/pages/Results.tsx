import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import FirstResultCard from "../components/ResultCards/FirstResultCard";
import SecondResultCard from "../components/ResultCards/SecondResultCard";
import ThirdResultCard from "../components/ResultCards/ThirdResultCard";
import FourthResultCard from "../components/ResultCards/FourthResultCard"; // Import the new card
import CalculationInfoCard from "../components/ResultCards/CalculationInfoCard";

const Results: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(1);
  const [previousCard, setPreviousCard] = useState<number | null>(null); // Track the previous card
  const location = useLocation();
  const {
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
  } = location.state;

  const handleNext = () => {
    setCurrentCard((prevCard) => prevCard + 1); // Increment the card index
  };

  const handleBack = () => {
    setCurrentCard((prevCard) => (prevCard > 1 ? prevCard - 1 : 1)); // Decrement the card index
  };

  return (
    <div>
      <h1>Results</h1>
      <div className="container mt-5 d-flex justify-content-center">
        {currentCard === 1 && (
          <FirstResultCard
            zone={zone}
            price={price}
            electricityUsagePerYear={electricityUsagePerYear}
            electricityTotalCost={electricityTotalCost}
          />
        )}
        {currentCard === 2 && (
          <SecondResultCard
            givenArea={area}
            givenEfficiency={efficiency}
            effectPerDay={effectPerDay}
            amountGainedTotal={amountGainedTotal}
          />
        )}
        {currentCard === 3 && (
          <ThirdResultCard
            savedPerYear={savedPerYear}
            salesPerYear={salesPerYear}
            amountNotUsedPerYear={amountNotUsedPerYear}
            amountUsedPerYear={amountUsedPerYear}
            electricityTotalSavings={electricityTotalSavings}
          />
        )}
        {currentCard === 4 && (
          <FourthResultCard
            carbonSavedPerYear={carbonSavedPerYear} // Pass carbon emissions data
          />
        )}
        {currentCard === 0 && <CalculationInfoCard />}
      </div>
      <div className="mt-3 d-flex justify-content-center">
        {currentCard > 1 && (
          <button className="btn btn-primary me-2" onClick={handleBack}>
            Back
          </button>
        )}
        {currentCard < 4 && currentCard > 0 && (
          <button className="btn btn-primary me-2" onClick={handleNext}>
            Next
          </button>
        )}
        {currentCard === 0 && (
          <button
            className="btn btn-primary me-2"
            onClick={() => {
              if (previousCard !== null) {
                setCurrentCard(previousCard);
              }
            }}
          >
            Back
          </button>
        )}
        {currentCard !== 0 && (
          <button
            className="btn btn-primary me-2"
            onClick={() => {
              setPreviousCard(currentCard); // Update the previous card
              setCurrentCard(0);
            }}
          >
            How is this calculated?
          </button>
        )}
      </div>
    </div>
  );
};

export default Results;
