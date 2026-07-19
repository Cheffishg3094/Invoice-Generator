import React from "react";
import "./navbarDashboard.css";

import { Link } from "react-router-dom";
import { IoIosSearch, IoIosNotificationsOutline } from "react-icons/io";

export default function NavbarDashboard() {
  return (
    <>
      {/* ------ Navbar -------- */}
      <header>
        <nav className="dashboard-nav">
          <div className="dashboard-nav-icons">
            <span>
              <IoIosSearch />
            </span>
            <span>
              <IoIosNotificationsOutline />
            </span>
            <span>
              <Link to="/profile">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVyvqcMM60qaLE2e2dASg9fJG4w1Db3MIRnvaFkW3vNQI8f6J8KDH2SVVa&s=10"
                  alt="User"
                  className="dashboard-user-image"
                />
              </Link>
            </span>
          </div>
        </nav>
      </header>
    </>
  );
}
