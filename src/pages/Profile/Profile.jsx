import React from "react";
import "./Profile.css";
import ProfileSidebar from "../../components/profileSidebar/ProfileSidebar";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { currentUser } = useAuth();
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
                <input
                  type="text"
                  defaultValue={currentUser?.displayName}
                  readOnly
                />
              </label>
            </div>

            <div className="profile-input">
              <label>
                Email
                <input
                  type="email"
                  defaultValue={currentUser?.email}
                  readOnly
                />
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
