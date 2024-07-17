import React from "react";
import NavBarHome from "../navbar/NavBarHome";
import "./Page.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cards() {
  const handleEdit = async () => {
    toast.info("This feature is unavailable at this moment");
  };

  return (
    <div>
      <ToastContainer />
      <NavBarHome />
      <h2>Apply For Your Card</h2>
      <div className="edit-btn">
        <button onClick={handleEdit}>Apply 💳</button>
      </div>
    </div>
  );
}
