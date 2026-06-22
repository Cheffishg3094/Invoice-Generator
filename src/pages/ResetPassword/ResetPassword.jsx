import React, { useState } from "react";
import "./ResetPassword.css";

import { Link, useNavigate } from "react-router-dom";
import { TbLockPassword } from "react-icons/tb";
import { GoShieldLock } from "react-icons/go";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { GoLock } from "react-icons/go";
import { MdOutlinePerson } from "react-icons/md";


export default function ResetPassword() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      alert("Password must contain at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Password Reset Successfully!");

    navigate("/login");
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
                alt="Reset Password"
                className="login-image"
              />

              <h2>Reset Password 🔒</h2>

              <p className="description">
                Set a new password for your account to keep it secure.
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
              <h2>Reset Password</h2>

              <p className="form-description">Enter your new password below.</p>

              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="reset-form"
              >
                <label className="input-heading">
                  New Password
                  <div className="input-container">
                    <MdOutlinePerson className="input-icon" />

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter new password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />

                    <span
                      className="eye-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </label>
                <div className="password-rules">
                  <p>
                    <strong>Password must contain:</strong>
                  </p>

                  <div className="rule-item">
                    <FiCheckCircle className="rule-icon" />
                    <span> At least 8 characters</span>
                  </div>

                  <div className="rule-item">
                    <FiCheckCircle className="rule-icon" />
                    <span> One uppercase letter</span>
                  </div>

                  <div className="rule-item">
                    <FiCheckCircle className="rule-icon" />
                    <span> One lowercase letter</span>
                  </div>

                  <div className="rule-item">
                    <FiCheckCircle className="rule-icon" />
                    <span> One number</span>
                  </div>
                </div>
                <label className="input-heading">
                  Confirm Password
                  <div className="input-container">
                    <MdOutlinePerson className="input-icon" />

                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm new password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />

                    <span
                      className="eye-icon"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </label>

                <input
                  type="submit"
                  value="Reset Password"
                  className="reset-button"
                />
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
