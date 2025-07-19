import React, { useState } from "react";
import "./Header.css"; // Import the header CSS file
import "./Tooltip.css";
import { removeToken } from "../../auth/auth.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Popover } from "antd";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  // Handle hamburger menu toggle
  const navigate = useNavigate();

  const content = (
    <div>
      <button
        className="text-[10px] text-medium px-3 py-1 rounded-sm bg-black text-white"
        onClick={() => {
          removeToken(), navigate("/login");
        }}
      >
        LogOut
      </button>
    </div>
  );
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
              <Link to="/mens">Men</Link>
            </li>
            <li>
              <Link to="/women">Women</Link>
            </li>
            <li>
              <Link to="/teenguy">TeenGuy</Link>
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
              <Popover
                content={content}
                trigger="click"
                className="cursor-pointer"
              >
                <img src="/Images/profileicon.png" alt="Profile Icon" />
              </Popover>
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div
        className={`hameburger ${menuActive ? "active" : ""} cursor-pointer`}
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
