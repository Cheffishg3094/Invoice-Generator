import React from "react";
import "./InvoicePreview.css";
import { Link } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineFileDownload, MdOutgoingMail } from "react-icons/md";
import { IoMdPrint } from "react-icons/io";

export default function InvoicePreview() {
  return (
    <div className="preview-container">
      {/* Header */}

      <div className="preview-header">
        <div className="preview-header-link">
          <Link to="/invoices" aria-label="Back to Invoices">
            <IoMdArrowRoundBack />
          </Link>

          <h2>Invoice Preview</h2>
        </div>

        <div className="header-btns">
          <button>
            <MdOutlineFileDownload className="header-buttons-svg" />
            Download PDF
          </button>

          <button>
            <MdOutgoingMail className="header-buttons-svg" />
            Send Email
          </button>

          <button>
            <IoMdPrint className="header-buttons-svg" />
            Print
          </button>
        </div>
      </div>

      {/* Invoice */}

      <article className="preview-body">
        {/* Invoice Header */}

        <section className="preview-invoice-header">
          <div className="preview-logo">Your Logo</div>

          <div className="preview-header-text">
            <h2>INVOICE</h2>
            <h3>#INV-1003</h3>
          </div>
        </section>

        {/* Client Details */}

        <section className="preview-invoice-details">
          <address>
            <strong>Bill To</strong>

            <div>
              <strong>John Smith</strong>
            </div>

            <div className="preview-flex">
              <span>john@example.com</span>

              <div className="preview-flex-date">
                <strong>Invoice Date</strong>
                <span>: 21 Jul 2026</span>
              </div>
            </div>

            <div className="preview-flex">
              <span>+91 98765 43210</span>

              <div className="preview-flex-date">
                <strong>Due Date</strong>
                <span>: 28 Jul 2026</span>
              </div>
            </div>
          </address>
        </section>

        {/* Items */}

        <table className="preview-invoice-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Qty</th>
              <th>Rate</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Web Development</td>
              <td>Web Development Service</td>
              <td>1</td>
              <td>₹25,000.00</td>
              <td>₹25,000.00</td>
            </tr>

            <tr>
              <td>Hosting</td>
              <td>Hosting Service</td>
              <td>1</td>
              <td>₹3,000.00</td>
              <td>₹3,000.00</td>
            </tr>
          </tbody>
        </table>

        {/* Totals */}

        <section className="preview-total-section">
          <table className="preview-invoice-total">
            <tbody>
              <tr>
                <td>Sub Total</td>
                <td>₹28,000.00</td>
              </tr>

              <tr>
                <td>GST (18%)</td>
                <td>₹5,040.00</td>
              </tr>

              <tr className="preview-grand-total">
                <td>Total</td>
                <td>₹33,040.00</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Footer */}

        <section className="preview-footer">
          <div className="preview-notes">
            <strong>Notes</strong>
            <p>Thank you for your business!</p>
          </div>

          <div className="preview-signature">
            <p>Authorized Signatory</p>
            <img src="sign.png" alt="Authorized Signature" />
          </div>
        </section>
      </article>
    </div>
  );
}
