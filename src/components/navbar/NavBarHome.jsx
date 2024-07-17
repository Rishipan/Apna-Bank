// import { React, useState, useEffect } from "react";
import React from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaUser } from "react-icons/fa";

const notifySuccess = (message) => toast.success(message);
const notifyError = (message) => toast.error(message);

const Navbar = () => {
  const navigate = useNavigate();

  const userSignOut = async () => {
    await signOut(auth)
      .then(() => {
        notifySuccess("Signed Out Succesfully!!!");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        notifyError(error.message);
      });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <FaUser className="user-icon" />
              <Link to="/user-profile">Profile</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/transfer-money">Transfer Money</Link>
            </li>
            <li className="navbar-item">
              <Link to="/transactions">Transactions</Link>
            </li>
            <li className="navbar-item">
              <Link to="/cards">Cards</Link>
            </li>
            <li className="navbar-item">
              <Link to="/bills">Bills</Link>
            </li>
            <li className="navbar-item">
              <Link to="/loans">Loans</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact-us-h">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-button">
          <button className="btn-login" onClick={userSignOut}>
            LogOut
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
