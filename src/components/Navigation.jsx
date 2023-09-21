import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="nav-container">
      <NavLink to="/Introduction" className="nav-link">
        Introduction
      </NavLink>
      <NavLink to="/About" className="nav-link">
        Skills
      </NavLink>
      <NavLink to="/Portfolio" className="nav-link">
        Portfolio
      </NavLink>
      <NavLink to="/Contact" className="nav-link">
        Contact
      </NavLink>
    </nav>
  );
}
