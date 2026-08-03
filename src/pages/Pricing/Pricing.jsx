import React, { useState } from "react";
import "./Pricing.css";
import { pricingPlans } from "../../data/pricingData";
import PricingCard from "../../components/pricingCards/pricingCard";
import CompareTable from "../../components/compareTable/compareTable";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaFileInvoice } from "react-icons/fa";

export default function Pricing() {
  const [yearly, setYearly] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-section-home">
            <Link to="/" className="logo-link">
              <FaFileInvoice className="logo" />
              <span>Invoice Generator</span>
            </Link>
          </div>

          <div className="nav-links-home">
            <ul>
              <li>
                <Link to="/features">Features</Link>
              </li>

              <li>
                <NavLink to="/pricing">Pricing</NavLink>
              </li>

              <li>
                <Link to="/templates">Templates</Link>
              </li>

              <li className="dropdown">
                <select
                  className="dropdown-btn"
                  onChange={(e) => navigate(e.target.value)}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Resources
                  </option>

                  <option value="/dashboard">Dashboard</option>
                  <option value="/gst-guides">GST Guides</option>
                  <option value="/faqs">FAQs</option>
                  <option value="/help-center">Help Center</option>
                  <option value="/contact">Contact Us</option>
                </select>
              </li>
            </ul>
          </div>

          <div className="btns-nav">
            <Link to="/login" className="navbar-button-home" id="login-home">
              Login
            </Link>

            <Link
              to="/signup"
              className="navbar-button-home"
              id="register-home"
            >
              Get Started Free
            </Link>
          </div>
        </nav>
      </header>
      <main className="pricing-page">
        <section className="pricing-hero">
          <div className="offer-badge">
            🎉 LAUNCH OFFER: Get 50% OFF on all yearly plans for the first 500
            customers!
          </div>

          <h1 className="pricing-title">
            Simple, Transparent <span>Pricing</span>
          </h1>

          <p className="pricing-subtitle">
            Choose the perfect plan for your business. Upgrade or downgrade
            anytime.
          </p>

          <div className="billing-toggle">
            <button
              className={!yearly ? "toggle-btn active" : "toggle-btn"}
              onClick={() => setYearly(false)}
            >
              Monthly
            </button>

            <button
              className={yearly ? "toggle-btn active" : "toggle-btn"}
              onClick={() => setYearly(true)}
            >
              Yearly
            </button>

            {yearly && <span className="save-text">Save up to 16%</span>}
          </div>
        </section>

        <section className="pricing-cards">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </section>
        <CompareTable />
        <section className="pricing-features">
          <h2>Why Choose Invoice Generator?</h2>

          <p className="pricing-features-subtitle">
            Everything you need to create professional invoices and grow your
            business with confidence.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-circle">🔒</div>

              <h3>100% Secure</h3>

              <p>
                Your invoices and customer data are protected with
                enterprise-grade security.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-circle">☁️</div>

              <h3>Cloud Backup</h3>

              <p>
                Access your invoices from anywhere with automatic cloud
                synchronization.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-circle">⚡</div>

              <h3>Lightning Fast</h3>

              <p>
                Generate professional GST invoices in seconds with our optimized
                workflow.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-circle">🎧</div>

              <h3>24/7 Support</h3>

              <p>
                Our support team is always available whenever you need
                assistance.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
