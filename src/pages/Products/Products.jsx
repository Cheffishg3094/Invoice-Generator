import React from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import "./Product.css";
import Sidebar from "../../components/sidebar/sidebar";


export default function Products() {
  return (
    <>
      <div className="product-container">
        <Sidebar />
        
        <div className="product-header">
          <h1>Products/Services</h1>
          <Link to="/new-product">+ Add Product</Link>
        </div>
        <div className="product-actions">
          <div className="product-search-box">
            <button>
              <IoIosSearch />
            </button>
            <input
              type="search"
              name="search"
              placeholder="Search Products..."
            />
          </div>
        </div>
        <div>
          <div className="product-table-master">
            <table className="product-table">
              <thead>
                <tr>
                  <th>Product/Service</th>
                  <th>Description</th>
                  <th>Rate</th>
                  <th>Tax(%)</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Web Development</td>
                  <td>Website development Services</td>
                  <td>₹25,000</td>
                  <td>18%</td>

                  <td>
                    <BsThreeDots />
                  </td>
                </tr>
                <tr>
                  <td>Hosting</td>
                  <td>Monthly Hosting Services</td>
                  <td>₹3,000</td>
                  <td>18%</td>

                  <td>
                    <BsThreeDots />
                  </td>
                </tr>
                <tr>
                  <td>Domain Registration</td>
                  <td>Domain Registration</td>
                  <td>₹1,000</td>
                  <td>18%</td>

                  <td>
                    <BsThreeDots />
                  </td>
                </tr>
                <tr>
                  <td>SEO Service</td>
                  <td>Search Engine Optimisation</td>
                  <td>₹8,500</td>
                  <td>18%</td>

                  <td>
                    <BsThreeDots />
                  </td>
                </tr>
                <tr>
                  <td>Maintainence</td>
                  <td>Website Maintainence</td>
                  <td>₹2,500</td>
                  <td>18%</td>

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
