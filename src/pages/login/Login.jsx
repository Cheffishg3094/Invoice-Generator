import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { FaFileInvoice } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dummyUser = {
    email: "admin@gmail.com",
    password: "Admin@123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === dummyUser.email && password === dummyUser.password) {
      navigate("/verify");
    } else {
      alert("Invalid Email or Password");
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
                src="/Assets/Login-Illustration.png"
                alt="Login Illustration"
                className="login-image"
              />

              <h2>Welcome Back! 👋</h2>

              <p className="description">
                Login to access your invoice dashboard and manage your business
                with ease.
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
              <h2>Login</h2>

              <p className="description">
                Welcome back! Please login to your account.
              </p>

              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="login-form"
              >
                <label className="input-heading">
                  Email Address
                  <div className="input-container">
                    <MdOutlineEmail className="input-icon" />

                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </label>

                <label className="input-heading">
                  Password
                  <div className="input-container">
                    <TbLockPassword className="input-icon" />

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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

                <div className="remember">
                  <div className="remember-left">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>

                  <Link to="/forgotpassword" className="forgot-link">
                    Forgot Password?
                  </Link>
                </div>

                <button type="submit" className="login-button">
                  Login
                </button>
              </form>

              <div className="login-link">
                <span>Don't have an account?</span>
                <Link to="/signup">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
