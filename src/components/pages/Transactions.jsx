import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import NavBarHome from "../navbar/NavBarHome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Transactions.css";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [accountNumber, setAccountNumber] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAccountNumber() {
      const user = JSON.parse(localStorage.getItem("user"));
      const userDocRef = doc(db, "UserDetails", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        setAccountNumber(userData.accountNumber);
      }
    }
    fetchAccountNumber();
  }, []);

  useEffect(() => {
    async function fetchTransactions() {
      if (accountNumber) {
        setLoading(true); // Set loading state to true when fetching data
        const transactionsDocRef = doc(db, "Transactions", accountNumber);
        const transactionsDocSnap = await getDoc(transactionsDocRef);
        if (transactionsDocSnap.exists()) {
          const transactionsData = transactionsDocSnap.data();
          const transactionsArray = transactionsData.transactions || [];

          // Modify transaction type display based on amount
          const modifiedTransactions = transactionsArray.map((transaction) => {
            if (transaction.type === "Initial Deposit") {
              return transaction;
            }
            if (transaction.amount < 0) {
              transaction.type = "Sent";
            } else {
              transaction.type = "Received";
            }
            return transaction;
          });

          setTransactions(modifiedTransactions.reverse());
        } else {
          toast.error("No transactions found for this account");
        }
        setLoading(false); // Set loading state to false after fetching data
      }
    }
    fetchTransactions();
  }, [accountNumber]);

  return (
    <div>
      <ToastContainer />
      <NavBarHome />
      <div className="transactions-container">
        <h1>Transaction History</h1>
        {loading ? (
          <p>Loading transactions...</p> // Display loading text while fetching data
        ) : transactions.length === 0 ? (
          <p>No transactions found</p>
        ) : (
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Amount</th>
                <th>From Account</th>
                <th>To Account</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{new Date(transaction.date).toLocaleString()}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.fromAccount}</td>
                  <td>{transaction.toAccount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
