import React, { useState } from "react";
import "./VerifyOTP.css";
import { Link } from "react-router-dom";
import { MdSecurity } from "react-icons/md";
import { TiDeviceDesktop } from "react-icons/ti";
import { MdOutlineTimer } from "react-icons/md";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

export default function VerifyOTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredOTP = otp.join("");

    console.log("OTP:", enteredOTP);

    // Backend API call yaha aayegi
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
                src="./Assets/verify-Illustration.png"
                alt="Verify Illustration"
                className="login-image"
              />

              <h2>Verify OTP 🔑</h2>

              <p className="description">
                We've sent a 6-digit OTP to your email. Please enter it below to
                verify.
              </p>
              <div className="feature-list">
                <div className="feature-item">
                  <MdSecurity className="feature-icon" />
                  <span>Secure Verification</span>
                </div>

                <div className="feature-item">
                  <TiDeviceDesktop className="feature-icon" />
                  <span>6-Digit OTP</span>
                </div>

                <div className="feature-item">
                  <MdOutlineTimer className="feature-icon" />
                  <span>Time Sensitive</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}

          <div className="right-section">
            <div className="header-container">
              <h2>Verify OTP</h2>

              <p className="form-description">
                Enter the 6-digit code sent to your email.
              </p>

              <h4>Enter OTP</h4>

              <form onSubmit={handleSubmit}>
                <div className="otp-container">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(e.target.value, index)}
                      className="otp-input"
                    />
                  ))}
                </div>

                <div className="resend-link">
                  <span>Didn't receive the code? </span>
                  <Link to="/verifyotp">Resend OTP</Link>
                </div>
                <input type="submit" value="Verify OTP" className="verify" />
              </form>

              <div className="login">
                <Link to="/login">
                  <span>Back to Login</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
