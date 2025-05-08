import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import FirstResultCard from "../components/ResultCards/FirstResultCard";
import SecondResultCard from "../components/ResultCards/SecondResultCard";
import CalculationInfoCard from "../components/ResultCards/CalculationInfoCard";

const Results: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(1);
  const [previousCard, setPreviousCard] = useState<number | null>(null); // Track the previous card
  const location = useLocation();
  const {
    zone,
    price,
    givenArea,
    effectPerDay,
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
            givenArea={givenArea}
            effectPerDay={effectPerDay}
            savedPerYear={savedPerYear}
            electricityUsagePerYear={electricityUsagePerYear}
            salesPerYear={salesPerYear}
            amountNotUsedPerYear={amountNotUsedPerYear}
            amountUsedPerYear={amountUsedPerYear}
            amountGainedTotal={amountGainedTotal}
            electricityTotalCost={electricityTotalCost}
            electricityTotalSavings={electricityTotalSavings}
          />
        )}
        {currentCard === 2 && <SecondResultCard />}
        {currentCard === 3 && <CalculationInfoCard />}
      </div>
      <div className="mt-3 d-flex justify-content-center">
        {currentCard === 2 && (
          <button className="btn btn-primary me-2" onClick={handleBack}>
            Back
          </button>
        )}
        {currentCard === 1 && (
          <button className="btn btn-primary me-2" onClick={handleNext}>
            Next
          </button>
        )}
        {currentCard === 3 && (
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
        {currentCard !== 3 && (
          <button
            className="btn btn-primary me-2"
            onClick={() => {
              setPreviousCard(currentCard); // Update the previous card
              setCurrentCard(3);
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
