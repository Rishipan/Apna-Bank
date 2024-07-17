import React, { useState } from "react";
import "./RegisterForm.css";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaAddressBook,
} from "react-icons/fa6";
import NavBar from "../navbar/NavBarRegister";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";

import { Link, useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [accountType, setAccountType] = useState("");
  const navigate = useNavigate();

  const signUp = async (e) => {
    toast.info("Registering ...");
    e.preventDefault();
    try {
      let savingAccountNumber = 7000 + phone;
      let currentAccountNumber = 8000 + phone;

      const accountRef1 = doc(db, "AccountNumbers", savingAccountNumber);
      const accountSnap1 = await getDoc(accountRef1);

      const accountRef2 = doc(db, "AccountNumbers", currentAccountNumber);
      const accountSnap2 = await getDoc(accountRef2);

      if (accountSnap1.exists() || accountSnap2.exists()) {
        toast.error("Account already exist on this email or phone no.");
        throw new Error("Account exist already");
      } else if (phone.length !== 10) {
        toast.error("Phone number must be 10 digits.");
        throw new Error("Invalid phone number");
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        localStorage.setItem("token", user.accessToken);
        localStorage.setItem("user", JSON.stringify(user));

        const accountNumber =
          accountType === "saving" ? savingAccountNumber : currentAccountNumber;
        const initialBalance = accountType === "saving" ? 7000.0 : 8000.0;

        // Details
        const userDetails = {
          username: username,
          phone: phone,
          accountType: accountType.toLowerCase(),
          accountNumber: accountNumber,
          address: address,
        };
        await setDoc(doc(db, "UserDetails", user.uid), userDetails);

        // AccountNumbers
        let accountDetails = {
          balance: initialBalance,
        };
        await setDoc(doc(db, "Balance", accountNumber), accountDetails);

        // UID and Name
        let UID = {
          username: username,
          UID: user.uid,
        };
        await setDoc(doc(db, "UID", accountNumber), UID);

        // Initial transaction
        let initialTransaction = {
          transactions: [
            {
              type: "Initial Deposit",
              amount: initialBalance,
              date: new Date().toISOString(),
              accountNumber: accountNumber,
            },
          ],
        };
        await setDoc(
          doc(db, "Transactions", accountNumber),
          initialTransaction
        );

        toast.success("Successfully Logged In");
        navigate("/");
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("The email address is already in use");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <NavBar></NavBar>
      <div className="register-container">
        <form onSubmit={signUp}>
          <h1>Let's Create Your Account</h1>
          <div className="register-input-box">
            <FaUser className="register-icon" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="register-input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaEnvelope className="register-icon" />
          </div>
          <div className="register-input-box">
            <input
              type="number"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <FaPhone className="register-icon" />
          </div>
          <div className="register-input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="register-icon" />
          </div>
          <div className="register-input-box">
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <FaAddressBook className="register-icon" />
          </div>
          <div className="register-input-box">
            <select
              id="accountType"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              required
            >
              <option value="" disabled hidden>
                Select Account Type
              </option>
              <option value="saving">Saving</option>
              <option value="current">Current</option>
            </select>
          </div>
          <div className="register-forgot-password">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>

          <div>
            <button type="submit">Register To Apna Bank</button>
          </div>
        </form>
      </div>
    </div>
  );
}
