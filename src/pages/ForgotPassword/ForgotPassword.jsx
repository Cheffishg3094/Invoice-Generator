import React, { useState } from "react";
import "./ForgotPassword.css";

import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { PiTimerLight } from "react-icons/pi";
import { SiSpringsecurity } from "react-icons/si";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

import { useAuth } from "../../context/AuthContext";

export default function ForgotPassword() {
  const { forgotPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      setLoading(true);

      await forgotPassword(email);

      setSuccess(
        "Password reset email sent successfully. Please check your inbox."
      );
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          setError("No account found with this email.");
          break;

        case "auth/invalid-email":
          setError("Please enter a valid email address.");
          break;

        default:
          setError("Unable to send password reset email.");
      }
    } finally {
      setLoading(false);
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

              <h2>Forgot Password? 🔒</h2>

              <p className="description">
                No worries! Enter your email and we'll send you a password reset
                link.
              </p>

              <div className="feature-list">
                <div className="feature-item">
                  <AiOutlineSecurityScan className="feature-icon" />
                  <span>Secure Verification</span>
                </div>

                <div className="feature-item">
                  <SiSpringsecurity className="feature-icon" />
                  <span>Safe Password Recovery</span>
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

              {error && <p className="auth-error">{error}</p>}

              {success && <p className="auth-success">{success}</p>}

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

                <button
                  type="submit"
                  className="forgot-button"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>
              </form>

              <div className="forgotp-link">
                <span>Remember your password? </span>

                <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}