import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="linksmain-container">
          <div className="links-container">
            <h3>SHOP</h3>
            <div className="links">
              <li>Women</li>
              <li>Men</li>
              <li>Children</li>
              <li>Kids</li>
              <li>Sports</li>
            </div>
          </div>
          <div className="links-container">
            <h3>HELP</h3>
            <div className="links">
              <li>Customer Service</li>
              <li>Legal & Privacy</li>
              <li>Contact</li>
              <li>Report a scam</li>
            </div>
          </div>
        </div>
        <div className="links-container">
          <h3>NEWSLETTER</h3>
          <div className="links">
            <div className="newsletter">
              <input type="text" />
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
