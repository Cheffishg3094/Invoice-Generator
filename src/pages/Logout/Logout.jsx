import React from "react";
import { Link } from "react-router-dom";
import "./Logout.css";

export default function Logout() {
  return (
    <>

      <main className="logout-page">
        <div className="logout-container">
          <img
            src="/Assets/Check.png"
            alt="Success"
            className="logout-image"
          />

          <h2>Logged Out Successfully!</h2>

          <p className="logout-description">
            You have been logged out of your account.
          </p>

          <p className="logout-description">
            Thank you for using Invoice Generator.
          </p>

          <Link to="/login" className="verify-link">
            <button type="button" className="verify1">
              Back to Login
            </button>
          </Link>
        </div>
      </main>

    </>
  );
}