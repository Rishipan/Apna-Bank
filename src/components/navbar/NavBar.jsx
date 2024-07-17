import React from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";

import bankLogo from "../assets/apna-bank-mini-logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/register");
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={bankLogo} alt="Logo" />
        </div>
        <div>
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
        </div>
        <div className="navbar-button">
          <button className="btn-login" onClick={handleLogin}>
            Login
          </button>
          <button className="btn-signup" onClick={handleSignup}>
            SignUp
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
