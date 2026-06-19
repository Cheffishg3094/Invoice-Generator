import React, { useState } from "react";
import "../login/Auth.css";

import { Link, useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { PiPasswordBold } from "react-icons/pi";

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

              <ul>
                <li>Create & Manage Invoices</li>
                <li>Track Payments</li>
                <li>Professional Reports</li>
              </ul>
            </div>
          </div>

          {/* Right Section */}

          <div className="right-section">
            <div className="login-container">
              <h2>Login</h2>

              <p className="description">
                Welcome back! Please login to your account.
              </p>

              <form onSubmit={handleSubmit}>
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

                <label className="input-heading">
                  Password
                  <div className="input-container">
                    <PiPasswordBold className="input-icon" />

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

                <div className="forgot">
                  <Link to="/forgotpassword">Forgot Password?</Link>
                </div>

                <input type="submit" value="Login" />
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

              <p className="Sign">Don't have an account?</p>

              <Link to="/signup">
                <button className="signup" type="button">
                  Create Account
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
