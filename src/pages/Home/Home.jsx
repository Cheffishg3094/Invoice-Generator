import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

import "../login/Auth.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="page-container">
        <div className="auth-container">
          {/* Left Section */}

          <div className="left-section">
            <div className="intro-container">
              <img
                src="./Assets/Invoice-Illustration.png"
                alt="Invoice Illustration"
                className="login-image"
              />

              <h2>Invoice Generator 📄</h2>

              <p className="description">
                Create, manage and track professional invoices in a simple and
                secure way. Organize your business and save valuable time with
                our Invoice Generator.
              </p>

              <ul>
                <li>Create Professional Invoices</li>
                <li>Track Payments</li>
                <li>Manage Customers</li>
                <li>Download & Print Invoices</li>
              </ul>
            </div>
          </div>

          {/* Right Section */}

          <div className="right-section">
            <div className="login-container">
              <h2>Welcome 👋</h2>

              <p className="description">
                Get started by logging into your account or create a new account
                to access all features.
              </p>

              <Link to="/login">
                <input
                  type="button"
                  value="Login"
                  style={{ marginBottom: "15px" }}
                />
              </Link>

              <Link to="/signup">
                <input type="button" value="Create Account" />
              </Link>

              <p className="Sign">
                Secure • Fast • Easy to Use
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}