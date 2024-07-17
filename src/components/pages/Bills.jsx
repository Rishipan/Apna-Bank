import React from "react";
import NavBar from "../navbar/NavBarHome";
import "./Page.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BillPage() {
  const handleBillClick = (billType) => {
    toast.info("Coming soon...");
  };

  return (
    <div>
      <NavBar />
      <div className="welcome-container">
        <h2>No Bills</h2>
        <p>
          Explore your bill options below to find the perfect fit for your
          needs:
        </p>
      </div>

      <div className="box-options">
        <div className="box-option" onClick={handleBillClick}>
          <h3>Electricity Bill</h3>
          <p>Pay your electricity bill conveniently and on time.</p>
        </div>

        <div className="box-option" onClick={handleBillClick}>
          <h3>Water Bill</h3>
          <p>
            Effortlessly settle your water bill with our easy payment options.
          </p>
        </div>

        <div className="box-option" onClick={handleBillClick}>
          <h3>Internet Bill</h3>
          <p>Stay connected by paying your internet bill without hassle.</p>
        </div>
      </div>

      <div className="box-options">
        <div className="box-option" onClick={handleBillClick}>
          <h3>Phone Bill</h3>
          <p>Keep in touch by paying your phone bill seamlessly.</p>
        </div>

        <div className="box-option" onClick={handleBillClick}>
          <h3>Credit Card Bill</h3>
          <p>Manage your finances by paying your credit card bill easily.</p>
        </div>

        <div className="box-option" onClick={handleBillClick}>
          <h3>Other Bills</h3>
          <p>
            Handle various other bills with our efficient bill payment system.
          </p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
