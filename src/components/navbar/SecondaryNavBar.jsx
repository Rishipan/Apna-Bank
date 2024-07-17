import React from "react";
import "./SecondaryNavBar.css";

const SecondaryNavBar = () => {
  return (
    <nav className="secondary-navbar">
      <div className="navbar-container">
        <ul className="secondary-navbar-menu">
          <li className="secondary-navbar-item">
            <a href="/">Transactions</a>
          </li>
          <li className="secondary-navbar-item">
            <a href="/about-us-h">Cards</a>
          </li>
          <li className="secondary-navbar-item">
            <a href="/services-h">Bills</a>
          </li>
          <li className="secondary-navbar-item">
            <a href="/contact-us-h">Loans</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SecondaryNavBar;
