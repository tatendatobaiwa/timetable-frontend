import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import darkmodelogo from "../../assets/schedulemasterlogo.png";
import minilogo from "../../assets/schedulemastermini.png";

import "./Header.css";
const Header = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("");
  };

  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

  return (
    <header>
      <nav>
        <div className="container">
          <div className="nav-content">
            <div>
              <button
                onClick={handleLogoClick}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <img
                  src={darkmodelogo}
                  alt="ScheduleMaster Logo"
                  className="logo"
                />
              </button>
            </div>
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              ☰
            </button>
            <ul className={`nav-links ${isMenuActive ? "active" : ""}`}>
              <li className={`nav-item ${isMenuActive ? "visible" : ""}`}>
                <a href="/home">
                  <span>Home</span>
                </a>
              </li>
              <li className={`nav-item ${isMenuActive ? "visible" : ""}`}>
                <a href="/timetable-maker">
                  <img
                    src={minilogo}
                    alt="Mini Logo"
                    className="mini-logo"
                    height="35"
                    width="35"
                  />
                  <span>Make Your Timetable</span>
                </a>
              </li>
              <li className={`nav-item ${isMenuActive ? "visible" : ""}`}>
                <a href="/about-us">
                  <span>About Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
