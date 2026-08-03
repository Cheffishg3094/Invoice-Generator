import React from "react";
import "./Clients.css";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import Sidebar from "../../components/sidebar/sidebar";

export default function Clients() {
  const clients = [
    {
      name: "John Smith",
      email: "john@example.com",
      phone: "+91 98765 43210",
      invoices: 12,
      due: "₹4,000.00",
      initial: "J",
      bg: "#dff7ef",
      color: "#16a34a",
    },
    {
      name: "Tech Solutions",
      email: "contact@tech.com",
      phone: "+91 81234 56789",
      invoices: 8,
      due: "₹12,000.00",
      initial: "T",
      bg: "#eef2ff",
      color: "#4338ca",
    },
    {
      name: "Globex Corp",
      email: "billing@globex.com",
      phone: "+91 99887 77665",
      invoices: 6,
      due: "₹0.00",
      initial: "G",
      bg: "#fff4db",
      color: "#ca8a04",
    },
    {
      name: "Acme Corporation",
      email: "info@acme.com",
      phone: "+91 88778 05443",
      invoices: 10,
      due: "₹2,400.00",
      initial: "A",
      bg: "#eef2ff",
      color: "#2563eb",
    },
    {
      name: "Jane Cooper",
      email: "jane@example.com",
      phone: "+91 77865 44532",
      invoices: 5,
      due: "₹2,500.00",
      initial: "J",
      bg: "#eef2ff",
      color: "#4338ca",
    },
    {
      name: "Robert Fox",
      email: "robert@controls.com",
      phone: "+91 69056 33221",
      invoices: 7,
      due: "₹1,000.00",
      initial: "R",
      bg: "#e0f2fe",
      color: "#2563eb",
    },
  ];

  return (
    <div className="clients-container">
      <Sidebar />
      <div className="clients-header">
        <h1>Clients</h1>

        <Link to="/add-client">+ Add Client</Link>
      </div>

      <div className="client-search-box">
        <button>
          <IoIosSearch />
        </button>

        <input type="search" placeholder="Search clients..." />
      </div>

      <div className="client-body">
        {clients.map((client, index) => (
          <div className="client-card" key={index}>
            <div
              className="client-card-logo"
              style={{
                background: client.bg,
                color: client.color,
              }}
            >
              {client.initial}
            </div>

            <div className="client-details">
              <h3>{client.name}</h3>

              <p>{client.email}</p>

              <p>{client.phone}</p>

              <p>
                <strong>Total Invoices:</strong> {client.invoices}
              </p>

              <p>
                <strong>Total Due:</strong> {client.due}
              </p>
            </div>

            <div className="client-more">
              <BsThreeDotsVertical />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
