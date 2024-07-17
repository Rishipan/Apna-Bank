import React from "react";
import "./Notes.css";
import Navbar from "../navbar/NavBarHome";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="gap"></div>
      <div className="container">
        <div className="note">
          <h2>Contact Us</h2>
          <p>
            We value open communication with our customers and welcome your
            feedback, questions, and inquiries. If you need assistance or would
            like to learn more about our products and services, please don't
            hesitate to reach out to us using the contact information provided
            below:
          </p>
        </div>
      </div>
      <div className="container">
        <div className="note">
          <h3>Apna Bank Headquarters</h3>
          <h3>Narula Institute Of Technology</h3>
          <h3>81,Nilgunj Road, Agarpara</h3>
          <h3>Kolkata, West Bengal, PIN-700108</h3>
        </div>
      </div>
      <div className="container">
        <div className="note">
          <h3>Customer Service:</h3>
          <h3>Phone: 2500 6683</h3>
          <h3>Email:support@apnabank.ac.in</h3>
        </div>
      </div>
      <div className="container">
        <div className="note">
          <p>
            For branch locations, hours of operation, and additional contact
            information, please visit our website or use our convenient branch
            locator tool. We look forward to hearing from you and serving your
            banking needs.
          </p>
        </div>
      </div>

      <footer
        style={{
          backgroundColor: "#333",
          color: "#fff",
          textAlign: "center",
          padding: "10px 0",
        }}
      >
        <p>&copy; 2024 Apna Bank. All rights reserved.</p>
      </footer>
    </div>
  );
}
