import React, { useEffect, useState } from "react";
import NavBarHome from "../navbar/NavBarHome";
import { db } from "../../firebase";
import { setDoc, doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function T() {
  const navigate = useNavigate();
  const [senderBalance, setSenderBalance] = useState(0);
  const [sendingBalance, setSendingBalance] = useState("");
  const [senderAccountNumber, setSenderAccountNumber] = useState("");
  const [receiverAccountNumber, setReceiverAccountNumber] = useState("");

  useEffect(() => {
    async function fetchSenderAccountNumber() {
      const user = JSON.parse(localStorage.getItem("user"));
      const userDocRef = doc(db, "UserDetails", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      const userData = userDocSnap.data();
      setSenderAccountNumber(userData.accountNumber);
    }
    fetchSenderAccountNumber();
  }, []);

  useEffect(() => {
    async function fetchSenderBalance() {
      if (senderAccountNumber) {
        const balanceDocRef = doc(db, "Balance", senderAccountNumber);
        const balanceDocSnap = await getDoc(balanceDocRef);
        if (balanceDocSnap.exists()) {
          const balanceData = balanceDocSnap.data();
          setSenderBalance(balanceData.balance);
        }
      }
    }
    fetchSenderBalance();
  }, [senderAccountNumber]);

  const updateBalances = async () => {
    const sendingAmount = parseFloat(sendingBalance);
    if (isNaN(sendingAmount) || sendingAmount <= 0) {
      toast.error("Invalid transfer amount");
      return;
    }

    try {
      const receiverDocRef = doc(db, "Balance", receiverAccountNumber);
      const receiverDocSnap = await getDoc(receiverDocRef);

      if (!receiverDocSnap.exists()) {
        toast.error("Invalid Account Number");
        return;
      }

      if (senderBalance < sendingAmount) {
        toast.error("Insufficient balance");
        return;
      } else {
        toast.info("Transferrring Money....");
      }

      const receiverData = receiverDocSnap.data();
      const newSenderBalance = senderBalance - sendingAmount;
      const newReceiverBalance = receiverData.balance + sendingAmount;

      let updateSender = {
        balance: newSenderBalance,
      };
      let updateReceiver = {
        balance: newReceiverBalance,
      };

      await setDoc(doc(db, "Balance", senderAccountNumber), updateSender);
      await setDoc(doc(db, "Balance", receiverAccountNumber), updateReceiver);

      // Log transaction for sender
      let senderTransaction = {
        type: "Transfer",
        amount: -sendingAmount,
        date: new Date().toISOString(),
        fromAccount: senderAccountNumber,
        toAccount: receiverAccountNumber,
      };
      await updateDoc(doc(db, "Transactions", senderAccountNumber), {
        transactions: arrayUnion(senderTransaction),
      });

      // Log transaction for receiver
      let receiverTransaction = {
        type: "Transfer",
        amount: sendingAmount,
        date: new Date().toISOString(),
        fromAccount: senderAccountNumber,
        toAccount: receiverAccountNumber,
      };
      await updateDoc(doc(db, "Transactions", receiverAccountNumber), {
        transactions: arrayUnion(receiverTransaction),
      });

      setSenderBalance(newSenderBalance);

      toast.success("Amount transferred successfully");
      navigate("/");
    } catch (error) {
      console.error("Error updating balances: ", error);
      toast.error("An error occurred during the transfer");
    }
  };

  const transfer = (e) => {
    e.preventDefault();
    updateBalances();
  };

  return (
    <div>
      <ToastContainer />
      <NavBarHome />
      <div className="transfer-container">
        <form onSubmit={transfer}>
          <h1>Transfer Money</h1>
          <div className="transfer-input-box">
            <input
              type="text"
              placeholder="Account Number"
              value={receiverAccountNumber}
              onChange={(e) => setReceiverAccountNumber(e.target.value)}
              required
            />
          </div>
          <div className="transfer-input-box">
            <input
              type="text"
              placeholder="Transferring Amount"
              value={sendingBalance}
              onChange={(e) => setSendingBalance(e.target.value)}
              required
            />
          </div>
          <div className="balance">You have: ₹ {senderBalance}</div>
          <div>
            <button type="submit">Transfer</button>
          </div>
        </form>
      </div>
    </div>
  );
}
