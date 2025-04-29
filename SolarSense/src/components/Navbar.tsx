//Navbar component
import { NavLink } from "react-router-dom"; // Import NavLink for active state

function Navbar() {
  const brandStyle = {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "1.5rem",
    color: "#ffffff",
    marginLeft: "0.5rem",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink 
          className="navbar-brand d-flex align-items-center"
          to="/"
          style={{ padding: '0px' }}>
        <img
            src="/Solarsense_icon.png"
            alt="SolarSense Logo"
            width="42"
            height="42"
            className="me-2 align-middle"
          />
          <span style={brandStyle}>SolarSense</span>
        </NavLink>{" "}
        {/* Use NavLink for branding */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>{" "}
        {/* Toggler for mobile view */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                end // 'end' ensures exact matching for the root page
              >
                Home
              </NavLink>
            </li>
            {/* Home Button */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/calculator">
                Calculator
              </NavLink>
            </li>{" "}
            {/* Calculator button */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/facts">
                Facts
              </NavLink>
            </li>{" "}
            {/* Facts Button */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            {/* About button*/}
            <li className="nav-item">
              <NavLink className="nav-link" to="/settings">
                Settings
              </NavLink>
            </li>{" "}
            {/* settings button */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
