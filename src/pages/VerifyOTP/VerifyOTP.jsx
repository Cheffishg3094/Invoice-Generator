import React from "react";
import "./VerifyOTP.css";
import { Link } from "react-router-dom";
import { MdSecurity } from "react-icons/md";
import { TiDeviceDesktop } from "react-icons/ti";
import { MdOutlineTimer } from "react-icons/md";

export default function VerifyOTP() {
  return (
    <>
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

              <form>
                <div className="otp-container">
                  <input
                    type="text"
                    maxLength={1}
                    className="otp-input"
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />

                  <input
                    type="text"
                    maxLength={1}
                    className="otp-input"
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />

                  <input
                    type="text"
                    maxLength={1}
                    className="otp-input"
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />

                  <input
                    type="text"
                    maxLength={1}
                    className="otp-input"
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />

                  <input
                    type="text"
                    maxLength={1}
                    className="otp-input"
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />

                  <input
                    type="text"
                    maxLength={1}
                    className="otp-input"
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                </div>

                <div className="resend-link">
                  <span>Didn't receive the code? </span>
                  <Link to="/verify">Resend OTP</Link>
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
    </>
  );
}
