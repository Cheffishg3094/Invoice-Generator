import React, { useEffect, useState } from "react";
import "./Profile.css";

import PhoneInput, {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input";

import countryLabels from "react-phone-number-input/locale/en.json";
import "react-phone-number-input/style.css";

import ProfileSidebar from "../../components/profileSidebar/ProfileSidebar";

import { useAuth } from "../../context/AuthContext";

/* =========================================================
   COUNTRY LABELS
   Example:
   India (+91)
   United States (+1)
   United Kingdom (+44)
========================================================= */

const customCountryLabels = {
  ...countryLabels,
};

getCountries().forEach((country) => {
  customCountryLabels[country] =
    `${countryLabels[country]} (+${getCountryCallingCode(country)})`;
});

export default function Profile() {
  const { currentUser, updateUserData, getCurrentUserData } = useAuth();

  const [name, setName] = useState(currentUser?.displayName || "");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneCountry, setPhoneCountry] = useState("IN");
  const [phoneError, setPhoneError] = useState("");

  const [loading, setLoading] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(true);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  /* =========================================================
     LOAD PROFILE
  ========================================================= */

  useEffect(() => {
    const loadProfile = async () => {
      if (!currentUser) {
        setLoadingProfile(false);
        return;
      }

      try {
        setName(currentUser.displayName || "");

        const userData = await getCurrentUserData();

        if (userData) {
          const savedCountryCode = userData.phoneCountryCode || "+91";

          const savedPhoneNumber = userData.phoneNumber || "";

          /*
             Firestore:
             phoneCountryCode: "+91"
             phoneNumber: "9417876445"

             PhoneInput needs:
             country: "IN"
             value: "+919417876445"
          */

          const savedCountry = getCountries().find(
            (country) =>
              `+${getCountryCallingCode(country)}` === savedCountryCode,
          );

          if (savedCountry) {
            setPhoneCountry(savedCountry);
          } else {
            setPhoneCountry("IN");
          }

          if (savedPhoneNumber) {
            setPhoneNumber(`${savedCountryCode}${savedPhoneNumber}`);
          } else {
            setPhoneNumber("");
          }
        }
      } catch (err) {
        console.error("Unable to load profile:", err);
      } finally {
        setLoadingProfile(false);
      }
    };

    loadProfile();
  }, [currentUser, getCurrentUserData]);

  /* =========================================================
     PHONE NUMBER VALIDATION
  ========================================================= */

  const validatePhoneNumber = () => {
    setPhoneError("");

    // Phone number is optional
    if (!phoneNumber) {
      return true;
    }

    /* -------------------------------------------------------
       INDIA
       +91 → exactly 10 digits
       First digit must be 6, 7, 8 or 9
    ------------------------------------------------------- */

    if (phoneCountry === "IN") {
      const indianNumber = phoneNumber.replace("+91", "").replace(/\D/g, "");

      if (!/^[6-9]\d{9}$/.test(indianNumber)) {
        setPhoneError(
          "Indian mobile number must contain exactly 10 digits and start with 6-9.",
        );

        return false;
      }
    }

    return true;
  };

  /* =========================================================
     SAVE PROFILE
  ========================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");
    setPhoneError("");

    if (!name.trim()) {
      setError("Name cannot be empty.");
      return;
    }

    // Validate phone before saving
    if (!validatePhoneNumber()) {
      return;
    }

    try {
      setLoading(true);

      await updateUserData({
        displayName: name.trim(),

        phoneCountryCode: phoneCountry
          ? `+${getCountryCallingCode(phoneCountry)}`
          : "",

        phoneNumber: phoneNumber
          ? phoneNumber
              .replace(`+${getCountryCallingCode(phoneCountry)}`, "")
              .replace(/\D/g, "")
          : "",
      });

      setMessage("Profile updated successfully.");
    } catch (err) {
      console.error("Profile update error:", err);

      setError("Unable to update your profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* =========================================================
     LOADING PROFILE
  ========================================================= */

  if (loadingProfile) {
    return (
      <>
        <ProfileSidebar />

        <div className="profile-container">
          <div className="profile-body">
            <p>Loading profile...</p>
          </div>
        </div>
      </>
    );
  }

  /* =========================================================
     UI
  ========================================================= */

  return (
    <>
      <ProfileSidebar />

      <div className="profile-container">
        {/* Header */}

        <div className="profile-header">
          <h1>Settings</h1>
        </div>

        {/* Body */}

        <div className="profile-body">
          <h2>Profile Information</h2>

          {message && <p className="profile-success">{message}</p>}

          {error && <p className="profile-error">{error}</p>}

          <form onSubmit={handleSubmit}>
            {/* =================================================
                NAME
            ================================================= */}

            <div className="profile-input">
              <label>
                Name
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </label>
            </div>

            {/* =================================================
                EMAIL
            ================================================= */}

            <div className="profile-input" id="profile-email-readonly">
              <label>
                Email
                <input type="email" value={currentUser?.email || ""} readOnly />
              </label>
            </div>

            {/* =================================================
                PHONE NUMBER
            ================================================= */}

            <div className="profile-input">
              <label>
                Phone Number
                <PhoneInput
                  international
                  country={phoneCountry}
                  defaultCountry="IN"
                  withCountryCallingCode
                  labels={customCountryLabels}
                  value={phoneNumber}
                  onCountryChange={(country) => {
                    if (!country) return;

                    setPhoneCountry(country);

                    // Clear old number when country changes
                    setPhoneNumber("");

                    setPhoneError("");
                    setError("");
                    setMessage("");
                  }}
                  onChange={(value) => {
                    setPhoneNumber(value || "");

                    setPhoneError("");
                    setError("");
                    setMessage("");
                  }}
                  placeholder="Enter phone number"
                />
              </label>

              {phoneError && <p className="phone-error">{phoneError}</p>}
            </div>

            {/* =================================================
                SAVE BUTTON
            ================================================= */}

            <button type="submit" className="save-btn" disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
