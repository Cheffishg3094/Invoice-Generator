import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import "./compareTable.css";

const rows = [
  {
    feature: "Monthly Invoices",
    free: "10 / month",
    starter: "Unlimited",
    business: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    feature: "Businesses",
    free: "1",
    starter: "1",
    business: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    feature: "Customers",
    free: "Up to 20",
    starter: "Unlimited",
    business: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    feature: "GST Invoices",
    free: true,
    starter: true,
    business: true,
    enterprise: true,
  },
  {
    feature: "PDF Download",
    free: true,
    starter: true,
    business: true,
    enterprise: true,
  },
  {
    feature: "Company Logo",
    free: false,
    starter: true,
    business: true,
    enterprise: true,
  },
  {
    feature: "WhatsApp / Email",
    free: false,
    starter: true,
    business: true,
    enterprise: true,
  },
  {
    feature: "Reports",
    free: false,
    starter: false,
    business: true,
    enterprise: true,
  },
  {
    feature: "Multi-user Access",
    free: false,
    starter: false,
    business: false,
    enterprise: true,
  },
  {
    feature: "API Access",
    free: false,
    starter: false,
    business: false,
    enterprise: true,
  },
];

const renderValue = (value) => {
  if (value === true) {
    return <FaCheck className="yes" />;
  }

  if (value === false) {
    return <FaTimes className="no" />;
  }

  return value;
};

export default function CompareTable() {
  return (
    <section className="compare-section">

      <h2>Compare Plans</h2>

      <div className="compare-table">

        <div className="table-header">
          <div></div>
          <div>Free</div>
          <div>Starter</div>
          <div>Business</div>
          <div>Enterprise</div>
        </div>

        {rows.map((row, index) => (
          <div
            className="table-row"
            key={index}
          >
            <div className="feature-name">
              {row.feature}
            </div>

            <div>{renderValue(row.free)}</div>

            <div>{renderValue(row.starter)}</div>

            <div>{renderValue(row.business)}</div>

            <div>{renderValue(row.enterprise)}</div>
          </div>
        ))}

      </div>

    </section>
  );
}