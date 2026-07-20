import React from "react";
import "./Settings.css";
import SettingsSidebar from "../../components/settingsSidebar/SettingsSidebar";

export default function Settings() {
  return (
    <>
      <SettingsSidebar />

      <div className="settings-container">
        <div className="settings-header">
          <h1>Settings</h1>
        </div>

        <div className="settings-flex">
          {/* Left Side */}

          <div className="settings-body">
            <h2>Business Profile</h2>

            <form>
              <div className="profile-input">
                <label htmlFor="business-name">Business Name</label>

                <input
                  id="business-name"
                  type="text"
                  defaultValue="Acme Pvt. Ltd."
                />
              </div>

              <div className="profile-input">
                <label htmlFor="email">Email</label>

                <input id="email" type="email" defaultValue="acme@gmail.com" />
              </div>

              <div className="profile-input">
                <label htmlFor="phone">Phone</label>

                <input id="phone" type="tel" defaultValue="+91 98765 43210" />
              </div>

              <div className="profile-input">
                <label htmlFor="address">Address</label>

                <textarea
                  id="address"
                  rows={4}
                  defaultValue="123 Business Street, Mumbai, Maharashtra, 400001"
                />
              </div>

              <button type="submit" className="save-btn">
                Save Changes
              </button>
            </form>
          </div>

          {/* Right Side */}

          <div className="right-container-settings">
            <div className="profile-input">
              <label>Business Logo</label>
              <img
                src="logo.png"
                alt="Business Logo"
                className="business-logo-preview"
              />
              <label htmlFor="upload-logo" className="upload-logo-btn">
                Upload Logo
              </label>
              <input type="file" id="upload-logo" accept="image/*" />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
