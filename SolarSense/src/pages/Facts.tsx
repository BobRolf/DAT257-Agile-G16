import React from "react";
import Navbar from "../components/Navbar";
import FactsCard from "../components/FactsCard";

const Facts: React.FC = () => {
  return (
    <div>
      <Navbar /> {/* Add Navbar */}
      <div className="container mt-5 d-flex justify-content-center">
        <h1>Facts</h1>
      </div>
      <h5
        className="text-center"
        style={{ lineHeight: "1.5", maxWidth: "700px", margin: "0 auto" }}
      >
        In this page we will display some facts and information about solar
        panels and their impact on the environment.
      </h5>
      <div className="container mt-5 d-flex justify-content-center">
        <FactsCard /> {/* Add AboutCard */}
      </div>
    </div>
  );
};

export default Facts;
