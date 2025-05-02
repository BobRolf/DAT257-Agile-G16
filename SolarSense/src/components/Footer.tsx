import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-1">
      <ul className="nav justify-content-center border-bottom py-1 mb-3">
        <li className="nav-item">
          <NavLink className="nav-link px-2 text-body-secondary" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link px-2 text-body-secondary"
            to="/Calculator"
          >
            Calculator
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link px-2 text-body-secondary" to="/Facts">
            Facts
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link px-2 text-body-secondary" to="/About">
            About
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link px-2 text-body-secondary" to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>
      <p className="text-center text-body-secondary">© 2025 SolarSense</p>
    </footer>
  );
}
export default Footer;
