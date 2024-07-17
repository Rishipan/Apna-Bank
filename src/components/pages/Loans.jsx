import React from "react";
import NavBarHome from "../navbar/NavBarHome";
import "./Page.css";

export default function Loans() {
  return (
    <div>
      <NavBarHome />
      <div className="welcome-container">
        <h2>No Active Loans</h2>
        <p>
          Explore our loan options below to find the perfect fit for your needs:
        </p>
        <div className="box-options">
          <div className="box-option">
            <h3>Home Loans</h3>
            <p>
              Make your dream home a reality with our affordable home loan
              options.
            </p>
          </div>
          <div className="box-option">
            <h3>Study Loans</h3>
            <p>Invest in your future with our flexible study loan plans.</p>
          </div>
          <div className="box-option">
            <h3>Custom Loans</h3>
            <p>
              Need something different? Our custom loans can be tailored to your
              unique requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
