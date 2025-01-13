import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/projects">Projekt</Link>
            </li>
            <li>
              <Link to="/about">Om mig</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
