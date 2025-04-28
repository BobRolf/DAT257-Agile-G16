import React from "react";
import Navbar from "../components/Navbar";
import FactsCard from "../components/FactsCard";

const Facts: React.FC = () => {
  return (
    <div>
      <Navbar /> {/* Add Navbar */}
      <h1>Facts</h1>
      <div className="container mt-5 d-flex justify-content-center">
        <FactsCard /> {/* Add AboutCard */}
      </div>
    </div>
  );
};

export default Facts;
