import React from "react";
import "./profileSidebar.css";
import { Link, NavLink } from "react-router-dom";

import { FaFileInvoice } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export default function ProfileSidebar() {
  return (
    <div className="main-sidebar">
      <div className="sidebar">
        <div className="sidebar-content">
          {/* Logo */}
          <div className="sidebar-section-home">
            <Link to="/" className="sidebar-link">
              <FaFileInvoice className="logo" />
              <span>Invoice Generator</span>
            </Link>
          </div>

          {/* Back */}
          <div className="sidebar-back">
            <NavLink to="/dashboard">
              <IoArrowBack />
              <span>Back to Dashboard</span>
            </NavLink>
          </div>

          {/* Profile Menu */}
          <ul className="sidebar-links">
            <li>
              <NavLink to="/profile">
                <MdOutlinePersonOutline />
                <span>Profile Information</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/changepassword">
                <RiLockPasswordLine />
                <span>Change Password</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
