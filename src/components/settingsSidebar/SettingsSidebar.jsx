import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FaFileInvoice } from "react-icons/fa";

import {
  MdOutlineBusiness,
  MdOutlineSettings,
  MdOutlinePayment,
  MdOutlineEmail,
  MdOutlineBackup,
} from "react-icons/md";

import {
  RiFileSettingsLine,
  RiPercentLine,
  RiUserSettingsLine,
} from "react-icons/ri";

export default function SettingsSidebar() {
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

          {/* Settings Menu */}

          <ul className="sidebar-links">
            <li>
              <NavLink to="/settings">
                <MdOutlineBusiness />
                <span>Business Profile</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/company-details">
                <MdOutlineSettings />
                <span>Company Details</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/invoice-settings">
                <RiFileSettingsLine />
                <span>Invoice Settings</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/tax-settings">
                <RiPercentLine />
                <span>Tax Settings</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/payment-methods">
                <MdOutlinePayment />
                <span>Payment Methods</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/email-settings">
                <MdOutlineEmail />
                <span>Email Settings</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/user-settings">
                <RiUserSettingsLine />
                <span>User Settings</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/backup-settings">
                <MdOutlineBackup />
                <span>Backup & Restore</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
