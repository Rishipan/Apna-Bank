import React from "react";
import NavBar from "../navbar/NavBarHome";
import "./Page.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import bankLogo from "../assets/apna-bank-logo.png";

import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const handleTransfer = () => {
    navigate("/transfer-money");
  };

  const handleTransactions = () => {
    navigate("transactions");
  };

  const handleCards = () => {
    navigate("/cards");
  };

  const handleBills = () => {
    navigate("/bills");
  };

  const handleLoans = () => {
    navigate("/loans");
  };

  const handleUpdateProfile = () => {
    toast.info("This service is unavailable");
  };

  return (
    <div>
      <NavBar />
      <div className="picture">
        <img src={bankLogo} alt="Logo" />
      </div>
      <div className="box-options">
        <div className="box-option" onClick={handleTransfer}>
          <h3>Transfer Amount</h3>
          <p>
            Send money to anyone, anywhere. We offer secure and fast transfer
            services to ensure your funds reach their destination safely.
          </p>
        </div>

        <div className="box-option" onClick={handleTransactions}>
          <h3>Transactions </h3>
          <p>
            View your recent transactions. Keep track of your financial
            activities and stay informed about your account movements.
          </p>
        </div>
        <div className="box-option" onClick={handleCards}>
          <h3>Cards</h3>
          <p>
            Manage your credit and debit cards. Easily access and control your
            card settings, including limits, PIN changes, and more.
          </p>
        </div>
      </div>
      <div className="box-options">
        <div className="box-option" onClick={handleBills}>
          <h3>Bills</h3>
          <p>
            Pay your bills easily. Our bill payment system allows you to
            conveniently settle your bills without hassle, saving you time and
            effort.
          </p>
        </div>
        <div className="box-option" onClick={handleLoans}>
          <h3>Loans</h3>
          <p>
            Explore our loan options. Whether you need a home loan, study loan,
            or custom loan, we have flexible options to suit your needs.
          </p>
        </div>
        <div className="box-option" onClick={handleUpdateProfile}>
          <h3>Update Profile</h3>
          <p>
            Keep your profile information up to date. Update your personal
            details and preferences with ease to ensure accurate records.
          </p>
        </div>
      </div>

      {/*

        <div className="box-options" onClick={handleTransactions}>
          
        </div>

        <div className="box-options" onClick={handleCards}>
          
        </div>
      </div>

      <div className="container">
        <div className="note" onClick={handleBills}>
          
        </div>

        <div className="note" onClick={handleLoans}>
          
        </div>

        <div className="note" >
          
        </div>
      </div> */}

      <ToastContainer />
    </div>
  );
}
