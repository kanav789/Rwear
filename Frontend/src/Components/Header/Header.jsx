import React, { useState } from "react";
import "./Header.css"; // Import the header CSS file
import "./Tooltip.css";
import { removeToken } from "../../auth/auth.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  // Handle hamburger menu toggle
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="header-container">
      {/* Header */}
      <div className="header">
        {/* Logo */}
        <div className="logo">
          <img src="/Images/headericon.png" alt="RwEaRs Logo" />

          <Link to="/">
            <h2>RwEaRs</h2>
          </Link>
        </div>

        {/* Navigation Items */}
        <div className={`item ${menuActive ? "active" : ""}`} id="item">
          <div className="variety-item" id="variety-item">
            <li>
              <a href="/mens">Men</a>
            </li>
            <li>
              <a href="/women">Women</a>
            </li>
            <li>
              <a href="/teenguy">TeenGuy</a>
            </li>
          </div>

          {/* Profile Section */}
          <div className="profile">
            <div className="cart">
              <a href="/cart">
                <img src="/Images/cart.png" alt="Cart Icon" />
              </a>
            </div>
            <div className="profile-icon">
              <img src="/Images/profileicon.png" alt="Profile Icon" />
              <span className="tooltiplogout">
                <Link onClick={() => removeToken()} to="/login">
                  LogOut
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div
        className={`hameburger ${menuActive ? "active" : ""}`}
        id="hameburger"
        onClick={toggleMenu}
      >
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
    </div>
  );
};

export default Header;
