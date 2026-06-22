import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { TbLockPassword } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

export default function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, confirmPassword, terms } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!terms) {
      alert("Please accept Terms of Service & Privacy Policy.");
      return;
    }

    alert("Account Created Successfully!");

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
                src="/Assets/Signup-Illustration.png"
                alt="Signup Illustration"
                className="signup-image"
              />

              <h2>Create Account 🚀</h2>

              <p className="description">
                Join us and start managing your invoices like a pro.
              </p>

              <div className="feature-list">
                <div className="feature-item">
                  <FaFileInvoice className="feature-icon" />
                  <span>Create & Manage Invoices</span>
                </div>

                <div className="feature-item">
                  <FaMoneyCheckAlt className="feature-icon" />
                  <span>Track Payments</span>
                </div>

                <div className="feature-item">
                  <FaChartBar className="feature-icon" />
                  <span>Professional Reports</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}

          <div className="right-section">
            <div className="header-container">
              <h2>Sign Up</h2>

              <p className="form-description">
                Create your account to get started.
              </p>

              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="signup-form"
              >
                {/* Full Name */}

                <label className="input-heading">
                  Full Name
                  <div className="input-container">
                    <CiUser className="input-icon" />

                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </label>

                {/* Email */}

                <label className="input-heading">
                  Email Address
                  <div className="input-container">
                    <MdOutlineEmail className="input-icon" />

                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </label>

                {/* Password */}

                <label className="input-heading">
                  Password
                  <div className="input-container">
                    <TbLockPassword className="input-icon" />

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      autoComplete="new-password"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleChange}
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

                {/* Confirm Password */}

                <label className="input-heading">
                  Confirm Password
                  <div className="input-container">
                    <TbLockPassword className="input-icon" />

                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      autoComplete="new-password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
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

                {/* Terms */}

                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                  />

                  <span>
                    I agree to the <Link to="#">Terms of Service</Link> and{" "}
                    <Link to="#">Privacy Policy</Link>
                  </span>
                </label>

                {/* Submit */}

                <button type="submit" className="signup-button">
                  Sign Up
                </button>
              </form>

              <p className="login-link">
                <span>Already have an account? </span>
                <Link to="/login"> Login</Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
