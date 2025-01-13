import "../styles/header.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
    <>
      <header>
        <nav>
          <ul>
            <li
              className={`navLink ${location.pathname === "/" ? "focus" : ""}`}
            >
              <Link to="/">Hem</Link>
            </li>
            <li
              className={`navLink ${
                location.pathname === "/projects" ? "focus" : ""
              }`}
            >
              <Link to="/projects">Projekt</Link>
            </li>
            <li
              className={`navLink ${
                location.pathname === "/about" ? "focus" : ""
              }`}
            >
              <Link to="/about">Om mig</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
