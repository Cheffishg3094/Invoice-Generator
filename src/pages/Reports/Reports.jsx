import React from "react";
import "./Reports.css";
import { FaCircle } from "react-icons/fa";
import RevenueOverview from "../../components/RevenueOverview/RevenueOverview";

export default function Reports() {
  const stats = [
    {
      title: "Total Revenue",
      value: "₹5,45,000",
    },
    {
      title: "Paid",
      value: "₹4,80,000",
      className: "green",
    },
    {
      title: "Pending",
      value: "₹45,000",
    },
    {
      title: "Overdue",
      value: "₹20,000",
    },
  ];

  const clients = [
    {
      name: "John Smith",
      revenue: "₹2,10,000",
      color: "#22c55e",
    },
    {
      name: "Tech Solutions",
      revenue: "₹1,25,000",
      color: "#2563eb",
    },
    {
      name: "Globex Corp",
      revenue: "₹95,000",
      color: "#facc15",
    },
    {
      name: "Acme Corporation",
      revenue: "₹60,000",
      color: "#9333ea",
    },
    {
      name: "Others",
      revenue: "₹55,000",
      color: "#111827",
    },
  ];

  return (
    <div className="reports-container">
      {/* Header */}

      <div className="reports-header">
        <h1>Reports</h1>

        <select className="reports-select">
          <option>This Year</option>
          <option>Last Year</option>
          <option>Custom</option>
        </select>
      </div>

      {/* Statistics */}

      <div className="reports-stats">
        {stats.map((item, index) => (
          <div className="reports-cards" key={index}>
            <p>{item.title}</p>

            <h2 className={item.className || ""}>{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Revenue Overview & Top Clients */}

      <div className="reports-vitals">
        <div className="reports-revenue-overview">
          <h2>Revenue Overview</h2>

          <div className="revenue-overview">
            <RevenueOverview />
          </div>
        </div>

        <div className="reports-top-clients">
          <h2>Top Clients</h2>

          {clients.map((client, index) => (
            <div className="client-report-details" key={index}>
              <div
                className="client-report-details-dot"
                style={{ color: client.color }}
              >
                <FaCircle />
              </div>

              <div className="client-report-details-name">{client.name}</div>

              <div className="client-report-details-revenue">
                <strong>{client.revenue}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
