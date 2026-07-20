import React from "react";
import "./Invoices.css";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

export default function Invoices() {
  return (
    <>
      <div className="invoices-container">
        <div className="invoices-header">
          <h1>Invoices</h1>
          <Link to="/create-new">+ New Invoice</Link>
        </div>
        <div className="invoices-actions">
          <div className="invoices-search-box">
            <button>
              <IoIosSearch />
            </button>
            <input
              type="search"
              name="search"
              placeholder="Search Invoices..."
            />
          </div>
          <div className="invoices-status-box">
            <select>
              <option>All Status</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Overdue</option>
              <option>Draft</option>
            </select>
          </div>
          <div className="invoices-client-box">
            <select>
              <option>All Clients</option>
            </select>
          </div>
          <div className="invoices-export-box">
            <select>
              <option>Export</option>
              <option>PDF</option>
              <option>Excel</option>
              <option>CSV</option>
            </select>
          </div>
        </div>
        <div>
          <div className="invoices-table-master">
            <table className="invoices-table">
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
                    <span className="draft">Draft</span>
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
    </>
  );
}
