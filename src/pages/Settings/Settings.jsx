import React from "react";
import "./Settings.css";
import SettingsSidebar from "../../components/settingsSidebar/SettingsSidebar";
import { useAuth } from "../../context/AuthContext";
import UserAvatar from "../../components/UserAvatar/UserAvatar";

export default function Settings() {
  const { currentUser } = useAuth();

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
                  defaultValue={currentUser?.displayName}
                  readOnly
                />
              </div>

              <div className="profile-input">
                <label htmlFor="email">Email</label>

                <input
                  id="email"
                  type="email"
                  defaultValue={currentUser?.email}
                  readOnly
                />
              </div>

              <div className="profile-input">
                <label htmlFor="phone">Phone</label>

                <input
                  id="phone"
                  type="tel"
                  defaultValue={currentUser?.phone}
                  readOnly
                />
              </div>

              <div className="profile-input">
                <label htmlFor="address">Address</label>

                <textarea
                  id="address"
                  rows={4}
                  defaultValue={currentUser?.address}
                  readOnly
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
              <UserAvatar
                photoURL={currentUser?.photoURL}
                displayName={currentUser?.displayName}
                size={80}
              />
            </div>
            <div className="profile-input">
              <label htmlFor="upload-logo" className="upload-logo-btn">
                Upload Logo
              </label>
              <input type="file" id="upload-logo" accept="image/*" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
