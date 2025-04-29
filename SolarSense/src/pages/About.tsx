import React from "react";
import Navbar from "../components/Navbar";
import AboutCard from "../components/AboutCard"; // Import AboutCard

const About: React.FC = () => {
  return (
    <div>
      <Navbar /> {/* Add Navbar */}
      <div className="container mt-5 d-flex justify-content-center">
        <AboutCard /> {/* Add AboutCard */}
      </div>
    </div>
  );
};

export default About;
