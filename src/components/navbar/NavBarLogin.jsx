import React from "react";
import "./NavBar.css";

import bankLogo from "../assets/apna-bank-logo.png";
import Logo from "../assets/apna-bank-logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/register");
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={bankLogo} alt="Logo" />
          </div>
          <ul className="navbar-menu">
            <li className="navbar-item">🏦🏦🏦</li>
            <li className="navbar-item">
              <Link to="/about">About Us</Link>
            </li>
            <li className="navbar-item">
              <Link to="/services">Services</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="navbar-item">🏦🏦🏦</li>
          </ul>
          <div className="navbar-button">
            <button className="btn-signup" onClick={handleSignup}>
              SignUp
            </button>
          </div>
        </div>
      </nav>
      <div className="navbar-logo-login">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Navbar;
