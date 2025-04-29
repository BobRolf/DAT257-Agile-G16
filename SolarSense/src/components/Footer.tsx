function Footer() {
  return (
    <footer className="py-1">
      <ul className="nav justify-content-center border-bottom py-1 mb-3">
        <li className="nav-item">
          <a href="/" className="nav-link px-2 text-body-secondary">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/Calculator" className="nav-link px-2 text-body-secondary">
            Calculator
          </a>
        </li>
        <li className="nav-item">
          <a href="/Facts" className="nav-link px-2 text-body-secondary">
            Facts
          </a>
        </li>
        <li className="nav-item">
          <a href="/About" className="nav-link px-2 text-body-secondary">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/Settings" className="nav-link px-2 text-body-secondary">
            Settings
          </a>
        </li>
      </ul>
      <p className="text-center text-body-secondary">© 2025 SolarSense</p>
    </footer>
  );
}
export default Footer;
