import React, { useState } from "react";
// import "../login/Auth.css";
import { Link } from "react-router-dom";

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
                We've sent a 6-digit OTP to your email.
                Please enter it below to verify.
              </p>

              <ul>
                <li>Secure Verification</li>
                <li>6-Digit OTP</li>
                <li>Time Sensitive</li>
              </ul>
            </div>
          </div>

          {/* Right Section */}

          <div className="right-section">
            <div className="login-container">

              <h2>Verify OTP</h2>

              <p>Enter the 6-digit code sent to your email.</p>

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
                      onChange={(e) =>
                        handleChange(e.target.value, index)
                      }
                      className="otp-input"
                    />
                  ))}
                </div>

                <input type="submit" value="Verify OTP" />

              </form>

              <p className="Sign">
                Didn't receive the code?{" "}
                <Link to="/verifyotp" className="signup">
                  Resend OTP
                </Link>
              </p>

              <p className="Sign">
                <Link to="/login" className="signup">
                  Back to Login
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