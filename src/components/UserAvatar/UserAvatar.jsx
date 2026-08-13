import React, { useState } from "react";
import "./UserAvatar.css";

export default function UserAvatar({ photoURL, displayName, size = 40 }) {
  const [imageError, setImageError] = useState(false);

  const getInitials = (name) => {
    if (!name) return "U";

    const words = name.trim().split(/\s+/);

    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }

    return (
      words[0].charAt(0) + words[words.length - 1].charAt(0)
    ).toUpperCase();
  };

  const initials = getInitials(displayName);

  if (photoURL && !imageError) {
    return (
      <img
        src={photoURL}
        alt={displayName || "User"}
        className="user-avatar"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
        onError={() => setImageError(true)}
      />
    );
  }

  return (
    <div
      className="user-avatar initials-avatar"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        fontSize: `${size * 0.4}px`,
      }}
    >
      {initials}
    </div>
  );
}
