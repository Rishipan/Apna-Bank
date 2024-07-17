import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RegisterForm from "./components/Auth/RegisterForm";
import LoginForm from "./components/Auth/LoginForm";
import Protected from "./components/Protected";
import HomePage from "./components/pages/HomePage";
import ForgotPassword from "./components/Auth/ForgotPassword";
import AboutUs from "./components/notes/AboutUs";
import ContactUs from "./components/notes/ContactUs";
import Services from "./components/notes/Services";

import NotFoundPage from "./components/pages/NotFoundPage";
import ContactUsH from "./components/notes/ContactUsH";

import TransferMoney from "./components/pages/TransferMoney";
import Transactions from "./components/pages/Transactions";
import Cards from "./components/pages/Cards";
import Bills from "./components/pages/Bills";
import Loans from "./components/pages/Loans";
import UserProfile from "./components/pages/UserProfile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App></App>}>
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/" element={<Protected />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/transfer-money" element={<TransferMoney />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/contact-us-h" element={<ContactUsH />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />{" "}
      {/* Catch-all route for 404 */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
