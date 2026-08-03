import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

import { FaFileInvoice } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { MdOutlineGroup } from "react-icons/md";
import { FaBox } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { HiOutlineDocumentReport, HiOutlineTemplate } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Sidebar() {
  return (
    <div className="main-sidebar">
      <div className="sidebar">
        <div className="sidebar-content">
          {/* Logo */}
          <div className="sidebar-section-home">
            <NavLink to="/" className="sidebar-link">
              <FaFileInvoice className="logo" />
              <span>Invoice Generator</span>
            </NavLink>
          </div>

          {/* Navigation */}
          <ul className="sidebar-links">
            <li>
              <NavLink to="/dashboard">
                <IoMdHome />
                <span>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/invoices">
                <FaFileInvoiceDollar />
                <span>Invoices</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/clients">
                <MdOutlineGroup />
                <span>Clients</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/products">
                <FaBox />
                <span>Products / Services</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/payments">
                <MdPayment />
                <span>Payments</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/reports">
                <HiOutlineDocumentReport />
                <span>Reports</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/templates">
                <HiOutlineTemplate />
                <span>Templates</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/settings">
                <IoMdSettings />
                <span>Settings</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="sidebar-footer">
          <NavLink to="/profile" className="profile-link">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVyvqcMM60qaLE2e2dASg9fJG4w1Db3MIRnvaFkW3vNQI8f6J8KDH2SVVa&s=10"
              alt="User"
              className="user-image"
            />

            <div className="company-info">
              <span className="company-name">Acme Pvt. Ltd.</span>
              <span className="company-plan">Business Plan</span>
            </div>

            <div className="profile-menu">
              <BsThreeDotsVertical />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
