import React, { useState } from "react";
import "./ForgotPassword.css";

import { Link, useNavigate } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { PiTimerLight } from "react-icons/pi";

import { SiSpringsecurity } from "react-icons/si";

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

              <h2>Forgot Password? 🔒</h2>

              <p className="description">
                No worries! Enter your email and we'll send you a link to reset
                your password.
              </p>

              <div className="feature-list">
                <div className="feature-item">
                  <AiOutlineSecurityScan className="feature-icon" />
                  <span>Secure Verification</span>
                </div>

                <div className="feature-item">
                  <SiSpringsecurity className="feature-icon" />
                  <span>OTP Based Recovery</span>
                </div>

                <div className="feature-item">
                  <PiTimerLight className="feature-icon" />
                  <span>Quick & Easy Process</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}

          <div className="right-section">
            <div className="header-container">
              <h2>Forgot Password</h2>

              <p className="form-description">
                Enter your registered email address.
              </p>

              <form onSubmit={handleSubmit} className="forgot-form">
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

                <input
                  type="submit"
                  value="Send OTP"
                  className="forgot-button"
                />
              </form>

              <div className="forgotp-link">
                <span>Remember your password? </span>
                <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
