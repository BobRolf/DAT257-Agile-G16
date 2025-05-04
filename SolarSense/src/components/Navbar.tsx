//Navbar component
import { NavLink } from "react-router-dom"; // Import NavLink for active state

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          SolarSense
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
                to="/home"
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
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Log out
              </NavLink>
            </li>{" "}
            {/* logout button */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
