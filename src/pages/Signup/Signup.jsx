import React, { useState } from "react";
import "../login/Auth.css";

import { Link, useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { PiPasswordBold } from "react-icons/pi";

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

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!formData.terms) {
      alert("Please accept Terms & Conditions.");
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
                className="login-image"
              />

              <h2>Create Account 🚀</h2>

              <p className="description">
                Join Invoice Generator today and start creating professional
                invoices in just a few clicks.
              </p>

              <ul>
                <li>Create Unlimited Invoices</li>
                <li>Manage Customers</li>
                <li>Track Payments</li>
                <li>Professional Reports</li>
              </ul>
            </div>
          </div>

          {/* Right Section */}

          <div className="right-section">
            <div className="login-container">
              <h2>Sign Up</h2>

              <p className="description">Create your account to get started.</p>

              <form onSubmit={handleSubmit}>
                <label className="input-heading">
                  Full Name
                  <div className="input-container">
                    <FaUser className="input-icon" />

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </label>

                <label className="input-heading">
                  Email Address
                  <div className="input-container">
                    <IoIosMail className="input-icon" />

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </label>

                <label className="input-heading">
                  Password
                  <div className="input-container">
                    <PiPasswordBold className="input-icon" />

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Create a password"
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
                      placeholder="Confirm your password"
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

                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                  />
                  I agree to the <Link to="#">Terms of Service</Link> and{" "}
                  <Link to="#">Privacy Policy</Link>
                </label>

                <input type="submit" value="Sign Up" />
              </form>

              <p className="Sign">or continue using</p>

              <div className="social-icons">
                <img
                  src="/Assets/Google-Icon.png"
                  alt="Google"
                  className="social-img"
                />

                <img
                  src="/Assets/Facebook-Icon.png"
                  alt="Facebook"
                  className="social-img"
                />

                <img
                  src="/Assets/Twitter-Icon.png"
                  alt="Twitter"
                  className="social-img"
                />

                <img
                  src="/Assets/Discord-Icon.png"
                  alt="Discord"
                  className="social-img"
                />

                <img
                  src="/Assets/LinkedIn-Icon.png"
                  alt="LinkedIn"
                  className="social-img"
                />
              </div>

              <p className="Sign">Already have an account?</p>

              <Link to="/login">
                <button type="button" className="signup">
                  Login Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
