import { React, useState, useEffect } from "react";
import NavBarHome from "../navbar/NavBarHome";

import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [balance, setBalance] = useState(0);
  const [accountType, setAccountType] = useState("");
  const [accountNumber, setaccountNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDetails() {
      const user = JSON.parse(localStorage.getItem("user"));
      const userDocRef = doc(db, "UserDetails", user.uid);

      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        setUsername(userData.username);
        setAccountType(userData.accountType);
        setaccountNumber(userData.accountNumber);
        setAddress(userData.address);
        setPhone(userData.phone);
      }
      setLoading(false);
    }
    fetchDetails();
  }, []);

  useEffect(() => {
    async function fetchBalance() {
      if (accountNumber) {
        const balanceDocRef = doc(db, "Balance", accountNumber);
        const balanceDocSnap = await getDoc(balanceDocRef);
        if (balanceDocSnap.exists()) {
          const balanceData = balanceDocSnap.data();
          setBalance(balanceData.balance);
        }
      }
    }
    fetchBalance();
  }, [accountNumber]);

  const handleEdit = async () => {
    toast.info("This feature is unavailable at this moment");
  };

  return (
    <div>
      <ToastContainer />
      <NavBarHome />
      {loading ? ( // Display loading message while fetching data
        <div className="loading-container">
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <div className="userprofile">
            <div>
              <h1>{username}</h1>
            </div>
            <div>
              <h2>Amount: ₹ {balance} </h2>
            </div>
            <div>
              <h3>Account Type: {accountType}</h3>
            </div>
            <div>
              <h3>Account Number: {accountNumber}</h3>
            </div>
            <div>
              <h3>Phone Number: {phone}</h3>
            </div>
            <div>
              <h3>Address: {address}</h3>
            </div>
          </div>
          <div className="edit-btn">
            <button onClick={handleEdit}>✒️ Update Details</button>
          </div>
        </div>
      )}
    </div>
  );
}
