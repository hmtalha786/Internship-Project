import React from "react";
import "./css/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <input id="nav-toggle" type="checkbox" />
        <div className="logo">
          <strong>S</strong>cientific<strong>Bit</strong>
        </div>
        <ul className="links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
        <label for="nav-toggle" class="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
    </div>
  );
};

export default Header;
