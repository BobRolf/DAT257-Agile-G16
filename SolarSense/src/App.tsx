import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Facts from "./pages/Facts";
import Calculator from "./pages/Calculator";
import Settings from "./pages/Settings";
import Results from "./pages/Results";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/results" element={<Results />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
