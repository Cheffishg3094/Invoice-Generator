import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

export default function Error() {
  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>

      <h2 className="error-title">Page Not Found</h2>

      <p className="error-description">
        Sorry, the page you're looking for doesn't exist, has been moved, or the
        URL may be incorrect.
      </p>

      <Link to="/" className="error-btn">
        Back to Home
      </Link>
    </div>
  );
}
