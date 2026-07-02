import React from "react";
import { Link } from "react-router-dom";
import { FaFileInvoice } from "react-icons/fa";
import "./navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-section">
          <Link to="/" className="logo-link">
            <FaFileInvoice className="logo" />
            <span>Invoice Generator</span>
          </Link>
        </div>
        <Link to ="/login" className="nav-link">
          <button className="navbar-button">Login</button>
        </Link>
      </nav>
    </header>
  );
}