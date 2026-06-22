import React, { useState } from "react";
// import "../login/Auth.css";

import { Link, useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { PiPasswordBold } from "react-icons/pi";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

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
                Create a new strong password to keep your account safe and
                secure.
              </p>

              <ul>
                <li>Minimum 8 Characters</li>
                <li>Use Upper & Lowercase Letters</li>
                <li>Include Numbers</li>
                <li>Add Special Characters</li>
              </ul>
            </div>
          </div>

          {/* Right Section */}

          <div className="right-section">
            <div className="login-container">
              <h2>Create New Password</h2>

              <p className="description">
                Enter your new password.
              </p>

              <form onSubmit={handleSubmit}>
                <label className="input-heading">
                  New Password

                  <div className="input-container">
                    <PiPasswordBold className="input-icon" />

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter New Password"
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

                <label className="input-heading">
                  Confirm Password

                  <div className="input-container">
                    <PiPasswordBold className="input-icon" />

                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm Password"
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
                      {showConfirmPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}
                    </span>
                  </div>
                </label>

                <div className="password-rules">
                  <p><strong>Password Requirements:</strong></p>

                  <ul>
                    <li>Minimum 8 characters</li>
                    <li>At least one uppercase letter</li>
                    <li>At least one lowercase letter</li>
                    <li>At least one number</li>
                    <li>At least one special character</li>
                  </ul>
                </div>

                <input type="submit" value="Reset Password" />
              </form>

              <p className="Sign">
                Remember your password?{" "}
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