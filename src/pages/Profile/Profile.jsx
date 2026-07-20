import React from "react";
import "./Profile.css";
import ProfileSidebar from "../../components/profileSidebar/ProfileSidebar";

export default function Profile() {
  return (
    <>
      <ProfileSidebar />

      <div className="profile-container">
        <div className="profile-header">
          <h1>Settings</h1>
        </div>

        <div className="profile-body">
          <h2>Profile Information</h2>

          <form>
            <div className="profile-input">
              <label>
                Name
                <input type="text" defaultValue="Acme Pvt. Ltd." />
              </label>
            </div>

            <div className="profile-input">
              <label>
                Email
                <input type="email" defaultValue="acme@gmail.com" />
              </label>
            </div>

            <button type="submit" className="save-btn">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
}