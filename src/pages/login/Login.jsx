import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { FaFileInvoice } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

export default function Login(x) {
  const navigate = useNavigate();
  const { login, googleLogin } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await login(email, password, rememberMe);

      navigate("/dashboard");
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-credential":
          setError("Invalid email or password.");
          break;

        case "auth/user-disabled":
          setError("This account has been disabled.");
          break;

        case "auth/too-many-requests":
          setError("Too many attempts. Please try again later.");
          break;

        default:
          setError("Unable to login. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");

    try {
      setLoading(true);

      await googleLogin();

      navigate("/dashboard");
    } catch (err) {
      console.error(err);

      setError("Google Sign-In failed.");
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

              <p className="form-description">
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
                {error && <p className="auth-error">{error}</p>}
                <div className="remember">
                  <div className="remember-left">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />

                    <label htmlFor="remember">Remember Me</label>
                  </div>

                  <Link to="/forgotpassword" className="forgot-link">
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="login-button"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
                <div className="auth-divider">
                  <span>OR</span>
                </div>
                <button
                  type="button"
                  className="google-login-button"
                  onClick={handleGoogleLogin}
                  disabled={loading}
                >
                  <FcGoogle size={22} />
                  <span>Continue with Google</span>
                </button>
              </form>

              <div className="login-link">
                <span>Don't have an account? </span>
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
