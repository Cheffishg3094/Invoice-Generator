import React from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../components/sidebar/sidebar";
import NavbarDashboard from "../../components/navbarDashboard/navbarDashboard";

import RevenueChart from "../../components/RevenueChart/RevenueChart";
import Clients from "../../components/Clients/Clients";

import "./Dashboard.css";

import { BsThreeDots } from "react-icons/bs";

export default function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <NavbarDashboard />

        <div className="dashboard-content">
          {/* Header */}
          <div className="dashboard-header">
            <div>
              <h1>Dashboard</h1>
              <p>Welcome Back, Acme Pvt. Ltd.</p>
            </div>

            <Link to="/create-invoice" className="new-invoice">
              + New Invoice
            </Link>
          </div>

          {/* Summary Cards */}
          <div className="dashboard-value-container">
            <div className="details-container">
              <p>Total Invoices</p>
              <h2>128</h2>
              <span className="positive">+12% this month</span>
            </div>

            <div className="details-container">
              <p>Paid Amount</p>
              <h2>₹2,45,000</h2>
              <span className="positive">+18% this month</span>
            </div>

            <div className="details-container">
              <p>Pending Amount</p>
              <h2>₹32,000</h2>
              <span className="negative">-8% this month</span>
            </div>

            <div className="details-container">
              <p>Overdue Amount</p>
              <h2>₹5,000</h2>
              <span className="negative">-3% this month</span>
            </div>
          </div>

          {/* Charts */}
          <div className="dashboard-charts">
            <div className="revenue-chart-card">
              <h3>Invoice Overview</h3>
              <RevenueChart />
            </div>

            <div className="client-chart-card">
              <h3>Top Clients</h3>
              <Clients />
            </div>
          </div>

          {/* Recent Invoices */}
          <div className="recent-invoices">
            <div className="recent-invoices-header">
              <h3>Recent Invoices</h3>
              <Link to="/invoices">View All</Link>
            </div>
            <table className="recent-invoices-table">
              <thead>
                <tr>
                  <th>Invoice #</th>
                  <th>Client</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="invoice-number">INV-1002</td>
                  <td>John Smith</td>
                  <td>07 Jul 2026</td>
                  <td>33,040</td>
                  <td>
                    <span className="paid">Paid</span>
                  </td>
                  <td>
                    <BsThreeDots />
                  </td>
                </tr>
                <tr>
                  <td className="invoice-number">INV-1002</td>
                  <td>John Smith</td>
                  <td>07 Jul 2026</td>
                  <td>33,040</td>
                  <td>
                    <span className="pending">Pending</span>
                  </td>
                  <td>
                    <BsThreeDots />
                  </td>
                </tr>
                <tr>
                  <td className="invoice-number">INV-1002</td>
                  <td>John Smith</td>
                  <td>07 Jul 2026</td>
                  <td>33,040</td>
                  <td>
                    <span className="overdue">Overdue</span>
                  </td>
                  <td>
                    <BsThreeDots />
                  </td>
                </tr>
                <tr>
                  <td className="invoice-number">INV-1002</td>
                  <td>John Smith</td>
                  <td>07 Jul 2026</td>
                  <td>33,040</td>
                  <td>
                    <span className="paid">Paid</span>
                  </td>
                  <td>
                    <BsThreeDots />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
