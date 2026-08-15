import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebase/firebase";
import {
  signup,
  login,
  googleLogin,
  logout,
  forgotPassword,
  resendVerificationEmail,
  isEmailVerified,
  updateUserData,
  syncEmailVerificationStatus,
  getCurrentUserData,
  changePassword,
} from "../services/authService";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    googleLogin,
    logout,
    forgotPassword,
    resendVerificationEmail,
    isEmailVerified,
    updateUserData,
    syncEmailVerificationStatus,
    getCurrentUserData,
    changePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
