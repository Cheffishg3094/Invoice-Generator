import React, { useState } from "react";
import "./ChangePassword.css";

import { Link, useNavigate } from "react-router-dom";
import { TbLockPassword } from "react-icons/tb";
import { GoShieldLock, GoLock } from "react-icons/go";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

import { useAuth } from "../../context/AuthContext";

export default function ResetPassword() {
  const navigate = useNavigate();

  const { changePassword } = useAuth();

  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!currentPassword) {
      setError("Please enter your current password.");
      return;
    }

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }

    if (!/[0-9]/.test(password)) {
      setError("Password must contain at least one number.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (currentPassword === password) {
      setError("New password must be different from your current password.");
      return;
    }

    try {
      setLoading(true);

      await changePassword(currentPassword, password);

      alert("Password changed successfully!");

      navigate("/profile");
    } catch (err) {
      console.error(err);

      switch (err.code) {
        case "auth/invalid-credential":
        case "auth/wrong-password":
          setError("Current password is incorrect.");
          break;

        case "auth/weak-password":
          setError("Password is too weak.");
          break;

        case "auth/requires-recent-login":
          setError(
            "For security reasons, please log in again before changing your password.",
          );
          break;

        default:
          setError("Unable to change password. Please try again.");
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
                src="/Assets/Reset-Illustration.png"
                alt="Change Password"
                className="login-image"
              />

              <h2>Change Password 🔒</h2>

              <p className="description">
                Update your password to keep your account secure.
              </p>

              <div className="feature-list">
                <div className="feature-item">
                  <TbLockPassword className="feature-icon" />
                  <span>Strong Password</span>
                </div>

                <div className="feature-item">
                  <GoShieldLock className="feature-icon" />
                  <span>Secure and Encrypted</span>
                </div>

                <div className="feature-item">
                  <GoLock className="feature-icon" />
                  <span>Account Protection</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}

          <div className="right-section">
            <div className="header-container">
              <h2>Change Password</h2>

              <p className="form-description">
                Enter your current password and create a new one.
              </p>

              {error && <p className="auth-error">{error}</p>}

              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="reset-form"
              >
                {/* Current Password */}

                <label className="input-heading">
                  Current Password
                  <div className="input-container">
                    <TbLockPassword className="input-icon" />

                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      name="currentPassword"
                      placeholder="Enter current password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      required
                    />

                    <button
                      type="button"
                      className="eye-icon"
                      onClick={() =>
                        setShowCurrentPassword(!showCurrentPassword)
                      }
                    >
                      {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </label>

                {/* New Password */}

                <label className="input-heading">
                  New Password
                  <div className="input-container">
                    <TbLockPassword className="input-icon" />

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter new password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />

                    <button
                      type="button"
                      className="eye-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </label>

                {/* Password Rules */}

                <div className="password-rules">
                  <p>
                    <strong>Password must contain:</strong>
                  </p>

                  <div className="rule-item">
                    <FiCheckCircle className="rule-icon" />
                    <span>At least 8 characters</span>
                  </div>

                  <div className="rule-item">
                    <FiCheckCircle className="rule-icon" />
                    <span>One uppercase letter</span>
                  </div>

                  <div className="rule-item">
                    <FiCheckCircle className="rule-icon" />
                    <span>One lowercase letter</span>
                  </div>

                  <div className="rule-item">
                    <FiCheckCircle className="rule-icon" />
                    <span>One number</span>
                  </div>
                </div>

                {/* Confirm Password */}

                <label className="input-heading">
                  Confirm Password
                  <div className="input-container">
                    <TbLockPassword className="input-icon" />

                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />

                    <button
                      type="button"
                      className="eye-icon"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </label>

                {/* Submit */}

                <button
                  type="submit"
                  className="reset-button"
                  disabled={loading}
                >
                  {loading ? "Changing Password..." : "Change Password"}
                </button>
              </form>

              <div className="login">
                <Link to="/profile">
                  <span>Back to Profile</span>
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
