import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <h1>Welcome to Invoice Generator</h1>
      <p>Create beautiful invoices in seconds.</p>
      <Link to="/Signup">
        <button>Sign Up</button>
      </Link>
      <Link to="/Login">
        <button>Login</button>
      </Link>
      <Link to="/VerifyOTP">
        <button>Verify OTP</button>
      </Link>
      <Link to="/ForgotPassword">
        <button>Forgot Password</button>
      </Link>
      <Link to="/ResetPassword">
        <button>Reset Password</button>
      </Link>
      <Link to="/Logout">
        <button>Logout</button>
      </Link>
      <Footer />
    </div>
  );
}
