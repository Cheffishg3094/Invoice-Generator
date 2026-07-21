import React from "react";
import "./Templates.css";

export default function Templates() {
  return (
    <>
      <div className="templates-container">
        <div className="templates-header">
          <h1>Templates</h1>
        </div>

        <div className="templates-grid">
          <div className="template-card active">
            <img
              src="https://createcatalog.public.onecdn.static.microsoft/uploadedfiles/uploads/3d7d2a70-f417-44a3-bb1e-4e2041c7e590-simple-blue-timesheet-invoice-modern-simple-basic-0-1.webp"
              alt="template1"
            />
            <div className="selected-icon">✓</div>
          </div>

          <div className="template-card">
            <img
              src="https://templates.invoicehome.com/invoice-template-us-classic-white-750px.png"
              alt="template2"
            />
          </div>

          <div className="template-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtWv0hZfxLdzvEDpD9N_YHjg9DK5o2JZTKQUl6_M1hBg&s=10"
              alt="template3"
            />
          </div>

          <div className="template-card">
            <img
              src="https://firstprintable.com/wp-content/uploads/2024/02/Modern-Blank-Invoice-Printable-Template-Peach-Editable-PDF.webp"
              alt="template4"
            />
          </div>
        </div>
        <div className="add-template-container">
          <button className="add-template-btn">+ Add New Template</button>
        </div>
      </div>
    </>
  );
}
