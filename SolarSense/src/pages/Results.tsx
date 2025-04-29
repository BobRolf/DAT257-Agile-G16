import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import FirstResultCard from "../components/ResultCards/FirstResultCard";
import SecondResultCard from "../components/ResultCards/SecondResultCard";
import Footer from "../components/Footer"; // Import Footer

const Results: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(1);
  const location = useLocation();
  const { result } = location.state || { result: "No result available" }; // Fallback if no result is passed

  const handleNext = () => {
    setCurrentCard((prevCard) => prevCard + 1); // Increment the card index
  };

  const handleBack = () => {
    setCurrentCard((prevCard) => (prevCard > 1 ? prevCard - 1 : 1)); // Decrement the card index
  };

  return (
    <div>
      <h1>Results</h1>
      <p>This is the Results page.</p>
      <div className="container mt-5 d-flex justify-content-center">
        {currentCard === 1 && <FirstResultCard result={result} />}
        {currentCard === 2 && <SecondResultCard />}
      </div>
    </div>
  );
};

export default Results;
