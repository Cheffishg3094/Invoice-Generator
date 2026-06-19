import React, { useState } from "react";
import "../login/Auth.css";

import { Link, useNavigate } from "react-router-dom";
import { IoIosMail } from "react-icons/io";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const dummyEmail = "admin@gmail.com";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === dummyEmail) {
      alert("OTP has been sent to your email.");
      navigate("/verify");
    } else {
      alert("Email not found.");
    }
  };

  return (
    <>
      <Navbar />

      <main className="page-container">
        <div className="auth-container">
          {/* Left Section */}

          <div className="left-section">
            <div className="intro-container">
              <img
                src="/Assets/Forgot-Illustration.png"
                alt="Forgot Password"
                className="login-image"
              />

              <h2>Forgot Password 🔒</h2>

              <p className="description">
                Don't worry! Enter your registered email address and we'll send
                you a One-Time Password (OTP) to reset your password securely.
              </p>

              <ul>
                <li>Secure Verification</li>
                <li>OTP Based Recovery</li>
                <li>Quick & Easy Process</li>
              </ul>
            </div>
          </div>

          {/* Right Section */}

          <div className="right-section">
            <div className="login-container">
              <h2>Forgot Password</h2>

              <p className="description">
                Enter your registered email address.
              </p>

              <form onSubmit={handleSubmit}>
                <label className="input-heading">
                  Email Address

                  <div className="input-container">
                    <IoIosMail className="input-icon" />

                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </label>

                <input type="submit" value="Send OTP" />
              </form>

              <p className="Sign">
                Remember your password?{" "}
                <Link to="/login" className="signup">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}