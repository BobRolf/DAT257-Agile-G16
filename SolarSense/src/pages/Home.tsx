import Navbar from "../components/Navbar"; // Import Navbar
import HomeCard from "../components/HomeCard"; // Import HomeCard
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <div>
        <Navbar /> {/* Add Navbar */}
        <div className="container mt-5 d-flex justify-content-center">
          <HomeCard /> {/* Add Homecard */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
