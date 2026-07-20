import React from "react";
import "./Create.css";
import { Link } from "react-router-dom";
import { FaChevronRight, FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Create() {
  return (
    <div className="create-container-main">
      {/* ================= Header ================= */}

      <div className="create-container-header">
        <div>
          <h1>Create Invoice</h1>

          <div className="breadcrumb">
            <Link to="/invoices" className="blue">
              Invoices
            </Link>

            <FaChevronRight className="breadcrumb-icon" />

            <span>Create Invoice</span>
          </div>
        </div>

        <div className="create-btns">
          <Link to="/preview" className="preview-btn-create">Preview</Link>
          <Link to="/save" className="save-btn-create">Save</Link>
        </div>
      </div>

      {/* ================= Client & Invoice ================= */}

      <div className="create-body">
        {/* Client Details */}

        <div className="client-details">
          <h2>Client Details</h2>

          <select className="client-select">
            <option>John Smith</option>
            <option>Robert Johnson</option>
            <option>Emily Davis</option>
          </select>

          <div className="client-info">
            <p>
              <FaUser />
              JohnSmith001
            </p>

            <p>
              <MdEmail />
              john@example.com
            </p>

            <p>
              <FaPhoneAlt />
              +91 98765 43210
            </p>
          </div>

          <button className="add-client-btn">+ Add New Client</button>
        </div>

        {/* Invoice Details */}

        <div className="invoice-details">
          <h2>Invoice Details</h2>

          <form className="create-invoice-form">
            <div className="form-group">
              <label>Invoice Number</label>
              <input type="text" placeholder="INV-1003" />
            </div>

            <div className="form-group">
              <label>Invoice Date</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>Due Date</label>
              <input type="date" />
            </div>
          </form>
        </div>
      </div>

      {/* ================= Invoice Items ================= */}

      <div className="create-body">
        <div className="create-items">
          <h2>Items</h2>

          <div className="create-table-master">
            <table className="create-table-items">
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Description</th>
                  <th>Qty</th>
                  <th>Rate</th>
                  <th>Tax (%)</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Web Development</td>
                  <td>Website Development Services</td>
                  <td>1</td>
                  <td>₹25,000</td>
                  <td>18%</td>
                  <td>₹25,000</td>
                </tr>

                <tr>
                  <td>Hosting</td>
                  <td>Monthly Hosting Services</td>
                  <td>1</td>
                  <td>₹3,000</td>
                  <td>18%</td>
                  <td>₹3,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <button className="add-btn">+ Add Item</button>
        </div>

        {/* ================= Invoice Summary ================= */}

        <div className="create-total">
          <div className="summary-row">
            <span>Sub Total</span>
            <strong>₹28,000</strong>
          </div>

          <div className="summary-row">
            <span>CGST (9%)</span>
            <strong>₹2,520</strong>
          </div>

          <div className="summary-row">
            <span>SGST (9%)</span>
            <strong>₹2,520</strong>
          </div>

          <hr className="summary-divider" />

          <div className="summary-total">
            <h3>Total</h3>
            <h3>₹33,040</h3>
          </div>

          <div className="amount-words">
            <h4>Amount in Words</h4>
            <p>Thirty Three Thousand Forty Rupees Only</p>
          </div>

          <div className="notes-box">
            <h4>Notes</h4>

            <textarea
              rows={4}
              placeholder="Enter additional notes..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
