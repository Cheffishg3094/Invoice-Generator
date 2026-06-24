import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1>Welcome to Invoice Generator</h1>
        <p>Create beautiful invoices in seconds.</p>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/verify">
          <button>Verify OTP</button>
        </Link>
        <Link to="/forgotpassword">
          <button>Forgot Password</button>
        </Link>
        <Link to="/resetpassword">
          <button>Reset Password</button>
        </Link>
        <Link to="/logout">
          <button>Logout</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
