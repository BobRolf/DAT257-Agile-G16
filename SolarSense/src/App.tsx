import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Facts from "./pages/Facts";
import Calculator from "./pages/Calculator";
import Results from "./pages/Results";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/facts" element={<Facts />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}

export default App;
