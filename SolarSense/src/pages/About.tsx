import React from "react";
import Navbar from "../components/Navbar";
import AboutCard from "../components/AboutCard"; // Import AboutCard
import Footer from "../components/Footer"; // Import Footer

const About: React.FC = () => {
  return (
    <>
      <div>
        <Navbar /> {/* Add Navbar */}
        <div className="container mt-5 d-flex justify-content-center">
          <AboutCard /> {/* Add AboutCard */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
