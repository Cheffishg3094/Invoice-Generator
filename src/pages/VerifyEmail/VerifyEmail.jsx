import React, { useState } from "react";
import "./VerifyEmail.css";

import { useNavigate } from "react-router-dom";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

import { useAuth } from "../../context/AuthContext";

export default function VerifyEmail() {
  const navigate = useNavigate();

  const {
    currentUser,
    resendVerificationEmail,
    isEmailVerified,
    syncEmailVerificationStatus,
  } = useAuth();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleCheckVerification = async () => {
    setError("");
    setMessage("");

    try {
      setLoading(true);

      const verified = await isEmailVerified();

      if (verified) {
        await syncEmailVerificationStatus();
        setMessage("Email verified successfully!");

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        setError(
          "Your email is not verified yet. Please check your inbox and click the verification link.",
        );
      }
    } catch (err) {
      console.error(err);

      setError("Unable to check email verification. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendEmail = async () => {
    setError("");
    setMessage("");

    try {
      setLoading(true);

      await resendVerificationEmail();

      setMessage(
        "Verification email has been sent again. Please check your inbox.",
      );
    } catch (err) {
      console.error(err);

      setError("Unable to send verification email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!currentUser) {
    return null;
  }

  return (
    <>
      <Navbar />

      <main className="verify-email-page">
        <div className="verify-email-container">
          <div className="verify-email-icon">✉️</div>

          <h2>Verify Your Email</h2>

          <p>We've sent a verification link to:</p>

          <strong>{currentUser.email}</strong>

          <p className="verify-description">
            Please check your inbox and click the verification link to verify
            your email address.
          </p>

          {message && <p className="auth-success">{message}</p>}

          {error && <p className="auth-error">{error}</p>}

          <button
            type="button"
            className="verify-button"
            onClick={handleCheckVerification}
            disabled={loading}
          >
            {loading ? "Checking..." : "I've Verified My Email"}
          </button>

          <button
            type="button"
            className="resend-button"
            onClick={handleResendEmail}
            disabled={loading}
          >
            Resend Verification Email
          </button>

          <p className="login-link">
            Already verified?{" "}
            <button type="button" onClick={() => navigate("/dashboard")}>
              Continue
            </button>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
