import React from "react";
import "./navbarDashboard.css";
import { useAuth } from "../../context/AuthContext";
import UserAvatar from "../UserAvatar/UserAvatar";

import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

export default function NavbarDashboard() {
  const { currentUser } = useAuth();
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
              <Link to="/profile">
                <UserAvatar
                  photoURL={currentUser?.photoURL}
                  displayName={currentUser?.displayName}
                  size={34}
                />
              </Link>
            </span>
          </div>
        </nav>
      </header>
    </>
  );
}
