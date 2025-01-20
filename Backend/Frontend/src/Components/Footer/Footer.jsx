import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Your Company. All Rights Reserved.</p>
        <nav>
          <a href="/privacy-policy" className="footer-link">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="footer-link">
            Terms of Service
          </a>
          <a href="/contact" className="footer-link">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
