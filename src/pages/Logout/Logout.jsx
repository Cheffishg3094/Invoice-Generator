import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Logout.css";

import { useAuth } from "../../context/AuthContext";

export default function Logout() {
  const { logout } = useAuth();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await logout();
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    handleLogout();
  }, [logout]);

  if (loading) {
    return (
      <main className="logout-page">
        <div className="logout-container">
          <h2>Logging out...</h2>
        </div>
      </main>
    );
  }

  return (
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
  );
}