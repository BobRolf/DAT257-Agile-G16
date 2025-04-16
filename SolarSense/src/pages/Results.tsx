import React, { useState } from "react";
import Navbar from "../components/Navbar";
import FirstResultCard from "../components/ResultCards/FirstResultCard";
import SecondResultCard from "../components/ResultCards/SecondResultCard";

const Results: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(1); // State to track the current card

  const handleNext = () => {
    setCurrentCard((prevCard) => prevCard + 1); // Increment the card index
  };

  const handleBack = () => {
    setCurrentCard((prevCard) => (prevCard > 1 ? prevCard - 1 : 1)); // Decrement the card index
  };

  return (
    <div>
      <Navbar />
      <h1>Results</h1>
      <p>This is the Results page.</p>
      <div className="container mt-5 d-flex justify-content-center">
        {currentCard === 1 && <FirstResultCard />}
        {currentCard === 2 && <SecondResultCard />}
      </div>
      <div className="mt-3 d-flex justify-content-center">
        {currentCard > 1 && (
          <button className="btn btn-primary me-2" onClick={handleBack}>
            Back
          </button>
        )}
        {currentCard < 2 && (
          <button className="btn btn-primary" onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Results;
