import React from "react";
import "./Home.css";

import {
  MdFindInPage,
  MdPictureAsPdf,
  MdEmail,
  MdCloudDone,
  MdPhoneIphone,
} from "react-icons/md";

import { Link } from "react-router-dom";
import { FaFileInvoice } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

import Footer from "../../components/footer/footer";

export default function Home() {
  return (
    <>
      {/* ------ Navbar -------- */}
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
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/templates">Templates</Link>
              </li>
              <li className="dropdown">
                <button className="dropdown-btn">
                  Resources <FaChevronDown className="arrow" />
                </button>

                <div className="dropdown-menu">
                  <Link to="/blog">Blog</Link>
                  <Link to="/guides">GST Guides</Link>
                  <Link to="/faq">FAQs</Link>
                  <Link to="/help">Help Center</Link>
                  <Link to="/contact">Contact Us</Link>
                </div>
              </li>
            </ul>
          </div>

          <div className="btns-nav">
            <Link to="/login" className="nav-link-home">
              <button className="navbar-button-home" id="login-home">
                Login
              </button>
            </Link>
            <Link to="/signup" className="nav-link-home">
              <button className="navbar-button-home" id="register-home">
                Get Started Free
              </button>
            </Link>
          </div>
        </nav>
      </header>

      <div className="landing-container">
        <div className="home-container">
          {/* LEFT SECTION */}
          <div className="left-container">
            <h1>
              Create Professional <br />
              <span id="text">Invoices</span> in Seconds
            </h1>

            <p className="home-desc">
              Generate GST invoices, download PDF,
              <br />
              send to clients and get paid faster.
            </p>

            <div className="home-btns">
              <Link to="/create-invoice">
                <button className="create-btn">Create Free Invoice</button>
              </Link>
              <Link to="/demo">
                <button className="demo-btn">Watch Demo</button>
              </Link>
            </div>

            <div className="social-rating">
              <div className="social-proof">
                <img
                  src="https://thumbs.dreamstime.com/b/portrait-young-handsome-happy-man-wearing-glasses-casual-smart-blue-clothing-yellow-color-background-square-composition-200740125.jpg"
                  alt="user1"
                  className="avatar"
                />
                <img
                  src="https://thumbs.dreamstime.com/b/portrait-young-handsome-happy-man-wearing-glasses-casual-smart-blue-clothing-yellow-color-background-square-composition-200740125.jpg"
                  alt="user2"
                  className="avatar"
                />
                <img
                  src="https://thumbs.dreamstime.com/b/portrait-young-handsome-happy-man-wearing-glasses-casual-smart-blue-clothing-yellow-color-background-square-composition-200740125.jpg"
                  alt="user3"
                  className="avatar"
                />
                <img
                  src="https://thumbs.dreamstime.com/b/portrait-young-handsome-happy-man-wearing-glasses-casual-smart-blue-clothing-yellow-color-background-square-composition-200740125.jpg"
                  alt="user4"
                  className="avatar"
                />
              </div>

              <div className="rating-info">
                <div className="rating-top">
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <span className="rating-number">5.0</span>
                </div>

                <p className="rating-subtext">Trusted by 5000+ businesses</p>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="right-container">
            <div className="invoice-header-home">
              <div className="invoice-header-home-logo">Your Logo</div>

              <div className="invoice-header-home-heading">
                <h2>INVOICE</h2>
                <p>#INV-1002</p>
              </div>
            </div>

            <div className="invoice-body-home">
              <div className="invoice-info">
                <div>
                  <p className="label">Bill To</p>
                  <p>John Smith</p>
                  <span className="email-date">
                    <p>john@example.com</p>
                    <p className="date-home">
                      Invoice Date :<span> 16 Jul 2026</span>
                    </p>
                  </span>
                  <span className="mobile-date">
                    <p>+91 96105 41390</p>
                    <p className="date-home">
                      Due Date :<span> 20 Jul 2026</span>
                    </p>
                  </span>
                </div>
              </div>

              <table className="invoice-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th>Amount</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Web Development</td>
                    <td>1</td>
                    <td>₹25,000.00</td>
                    <td>₹25,000.00</td>
                  </tr>

                  <tr>
                    <td>Hosting</td>
                    <td>1</td>
                    <td>₹3,000.00</td>
                    <td>₹3,000.00</td>
                  </tr>
                </tbody>
              </table>

              <table className="invoice-total">
                <tbody>
                  <tr>
                    <td>Sub Total</td>
                    <td>₹28,000.00</td>
                  </tr>

                  <tr>
                    <td>GST (18%)</td>
                    <td>₹5,040.00</td>
                  </tr>

                  <tr className="grand-total">
                    <td>Total</td>
                    <td>₹33,040.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="horizontal-elements">
          <ul className="footer-elements">
            <li>
              <span className="footer-elements-image">
                <MdFindInPage />
              </span>

              <span>
                GST Compliant
                <br />
                Invoices
              </span>
            </li>

            <li>
              <span className="footer-elements-image">
                <MdPictureAsPdf />
              </span>

              <span>
                PDF Download
                <br />& Print
              </span>
            </li>

            <li>
              <span className="footer-elements-image">
                <MdEmail />
              </span>

              <span>
                Email Invoices
                <br />
                To Clients
              </span>
            </li>

            <li>
              <span className="footer-elements-image">
                <MdCloudDone />
              </span>

              <span>
                Secure Cloud
                <br />
                Storage
              </span>
            </li>

            <li>
              <span className="footer-elements-image">
                <MdPhoneIphone />
              </span>

              <span>
                Mobile Friendly
                <br />
                Interface
              </span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
