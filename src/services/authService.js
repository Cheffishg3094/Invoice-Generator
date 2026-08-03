import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateProfile,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  linkWithCredential,
  deleteUser,
  reload,
} from "firebase/auth";

import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "../firebase/firebase";

/* =========================================================
   PROVIDERS
========================================================= */

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

const appleProvider = new OAuthProvider("apple.com");

/* =========================================================
   ERROR HANDLER
========================================================= */

const mapFirebaseError = (error) => {
  switch (error.code) {
    case "auth/email-already-in-use":
      return "This email is already registered. Try logging in instead.";

    case "auth/invalid-email":
      return "That email address doesn't look right.";

    case "auth/weak-password":
      return "Password should be at least 6 characters.";

    case "auth/user-not-found":
      return "No account found with that email.";

    case "auth/wrong-password":
      return "Incorrect password. Please try again.";

    case "auth/invalid-credential":
      return "Incorrect email or password.";

    case "auth/too-many-requests":
      return "Too many attempts. Please wait a bit and try again.";

    case "auth/network-request-failed":
      return "Network error. Check your connection and try again.";

    case "auth/requires-recent-login":
      return "Please log in again to complete this action.";

    case "auth/user-disabled":
      return "This account has been disabled.";

    case "auth/popup-closed-by-user":
      return "Google sign-in was cancelled.";

    case "auth/popup-blocked":
      return "The sign-in popup was blocked by your browser.";

    default:
      return error.message || "Something went wrong. Please try again.";
  }
};

/* =========================================================
   SAVE USER DATA
========================================================= */

const saveUserData = async ({
  uid,
  email,
  displayName = "",
  photoURL = "",
  provider = "email",
  additionalData = {},
}) => {
  try {
    const userRef = doc(db, "users", uid);

    const snapshot = await getDoc(userRef);

    const existingData = snapshot.exists() ? snapshot.data() : {};

    const userData = {
      uid,
      email: email || "",
      displayName: displayName || "",
      photoURL: photoURL || "",
      provider,

      emailVerified: auth.currentUser?.emailVerified || false,

      createdAt: existingData.createdAt || serverTimestamp(),

      updatedAt: serverTimestamp(),

      isActive: true,

      lastLoginAt: serverTimestamp(),

      ...additionalData,
    };

    await setDoc(userRef, userData, {
      merge: true,
    });

    const updatedSnapshot = await getDoc(userRef);

    return updatedSnapshot.exists() ? updatedSnapshot.data() : null;
  } catch (error) {
    console.error("Error saving user data:", error);

    return null;
  }
};

/* =========================================================
   GET USER DATA
========================================================= */

export const getUserData = async (uid) => {
  try {
    const userRef = doc(db, "users", uid);

    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) {
      return null;
    }

    return snapshot.data();
  } catch (error) {
    console.error("Error getting user data:", error);

    return null;
  }
};

/* =========================================================
   GET CURRENT USER DATA
========================================================= */

export const getCurrentUserData = async () => {
  const user = auth.currentUser;

  if (!user) {
    return null;
  }

  return getUserData(user.uid);
};

/* =========================================================
   UPDATE USER DATA
========================================================= */

export const updateUserData = async (data) => {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("No user is currently logged in.");
    }

    const userRef = doc(db, "users", user.uid);

    await updateDoc(userRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });

    return await getUserData(user.uid);
  } catch (error) {
    console.error("Update user error:", error);

    throw error;
  }
};

/* =========================================================
   SIGN UP
========================================================= */

export const signup = async (name, email, password, additionalData = {}) => {
  try {
    console.log("Starting signup...");

    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const user = credential.user;

    /* Update display name */

    if (name) {
      await updateProfile(user, {
        displayName: name,
      });
    }

    /* Send email verification */

    try {
      await sendEmailVerification(user);

      console.log("Verification email sent.");
    } catch (error) {
      console.error("Unable to send verification email:", error);
    }

    /* Reload user */

    await reload(user);

    /* Save user in Firestore */

    await saveUserData({
      uid: user.uid,
      email: user.email,
      displayName: name || user.displayName || "",
      photoURL: user.photoURL || "",
      provider: "email",
      additionalData,
    });

    console.log("Signup successful:", user.uid);

    return user;
  } catch (error) {
    console.error("Signup error:", error);

    error.friendlyMessage = mapFirebaseError(error);

    throw error;
  }
};

/* =========================================================
   LOGIN
========================================================= */

export const login = async (email, password) => {
  try {
    const credential = await signInWithEmailAndPassword(auth, email, password);

    const user = credential.user;

    await saveUserData({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || "",
      photoURL: user.photoURL || "",
      provider: "email",
    });

    console.log("Login successful:", user.uid);

    return user;
  } catch (error) {
    console.error("Login error:", error);

    error.friendlyMessage = mapFirebaseError(error);

    throw error;
  }
};

/* =========================================================
   GOOGLE LOGIN
========================================================= */

export const googleLogin = async (additionalData = {}) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    const user = result.user;

    await saveUserData({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || "Unknown User",
      photoURL: user.photoURL || "",
      provider: "google",
      additionalData,
    });

    console.log("Google login successful:", user.uid);

    return user;
  } catch (error) {
    console.error("Google login error:", error);

    error.friendlyMessage = mapFirebaseError(error);

    throw error;
  }
};

/* =========================================================
   APPLE LOGIN
========================================================= */

export const appleLogin = async (additionalData = {}) => {
  try {
    const result = await signInWithPopup(auth, appleProvider);

    const user = result.user;

    await saveUserData({
      uid: user.uid,
      email: user.email || "",
      displayName: user.displayName || "Apple User",
      photoURL: user.photoURL || "",
      provider: "apple",
      additionalData,
    });

    console.log("Apple login successful:", user.uid);

    return user;
  } catch (error) {
    console.error("Apple login error:", error);

    error.friendlyMessage = mapFirebaseError(error);

    throw error;
  }
};

/* =========================================================
   LOGOUT
========================================================= */

export const logout = async () => {
  try {
    const user = auth.currentUser;

    if (user) {
      try {
        const userRef = doc(db, "users", user.uid);

        await updateDoc(userRef, {
          isActive: false,

          lastLogoutAt: serverTimestamp(),

          updatedAt: serverTimestamp(),
        });
      } catch (error) {
        console.error("Unable to update logout status:", error);
      }
    }

    await signOut(auth);

    console.log("Logout successful");

    return true;
  } catch (error) {
    console.error("Logout error:", error);

    throw error;
  }
};

/* =========================================================
   FORGOT PASSWORD
========================================================= */

export const forgotPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);

    console.log("Password reset email sent.");

    return true;
  } catch (error) {
    console.error("Forgot password error:", error);

    error.friendlyMessage = mapFirebaseError(error);

    throw error;
  }
};

/* =========================================================
   CHANGE PASSWORD
========================================================= */

export const changePassword = async (currentPassword, newPassword) => {
  try {
    const user = auth.currentUser;

    if (!user || !user.email) {
      throw new Error("No user is currently logged in.");
    }

    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword,
    );

    /* Re-authenticate */

    await reauthenticateWithCredential(user, credential);

    /* Change password */

    await updatePassword(user, newPassword);

    /* Firestore update */

    const userRef = doc(db, "users", user.uid);

    await updateDoc(userRef, {
      passwordChangedAt: serverTimestamp(),

      updatedAt: serverTimestamp(),
    });

    console.log("Password changed successfully.");

    return user;
  } catch (error) {
    console.error("Change password error:", error);

    error.friendlyMessage = mapFirebaseError(error);

    throw error;
  }
};

/* =========================================================
   SET PASSWORD
   Useful for Google / Apple accounts
========================================================= */

export const setPassword = async (password) => {
  try {
    const user = auth.currentUser;

    if (!user || !user.email) {
      throw new Error("No user is currently logged in.");
    }

    const hasPassword = user.providerData.some(
      (provider) => provider.providerId === "password",
    );

    if (hasPassword) {
      throw new Error("Password has already been set.");
    }

    const credential = EmailAuthProvider.credential(user.email, password);

    await linkWithCredential(user, credential);

    const userRef = doc(db, "users", user.uid);

    await updateDoc(userRef, {
      passwordEnabled: true,

      passwordCreatedAt: serverTimestamp(),

      updatedAt: serverTimestamp(),
    });

    console.log("Password created successfully.");

    return user;
  } catch (error) {
    console.error("Set password error:", error);

    throw error;
  }
};

/* =========================================================
   RESEND EMAIL VERIFICATION
========================================================= */

export const resendVerificationEmail = async () => {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("No user is currently logged in.");
    }

    await sendEmailVerification(user);

    console.log("Verification email resent.");

    return true;
  } catch (error) {
    console.error("Verification email error:", error);

    throw error;
  }
};

/* =========================================================
   CHECK EMAIL VERIFIED
========================================================= */

export const isEmailVerified = async () => {
  const user = auth.currentUser;

  if (!user) {
    return false;
  }

  /* Reload latest Firebase user */

  await reload(user);

  const currentUser = auth.currentUser;

  if (!currentUser) {
    return false;
  }

  /* Google / Apple users */

  const socialLogin = currentUser.providerData.some(
    (provider) =>
      provider.providerId === "google.com" ||
      provider.providerId === "apple.com",
  );

  if (socialLogin) {
    return true;
  }

  return currentUser.emailVerified;
};

/* =========================================================
   DELETE ACCOUNT
========================================================= */

export const deleteAccount = async () => {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("No user is currently logged in.");
    }

    const uid = user.uid;

    /* Delete Firestore user data */

    try {
      await deleteDoc(doc(db, "users", uid));
    } catch (error) {
      console.error("Unable to delete Firestore document:", error);
    }

    /* Delete Firebase Authentication account */

    await deleteUser(user);

    console.log("Account deleted successfully.");

    return true;
  } catch (error) {
    console.error("Delete account error:", error);

    if (error.code === "auth/requires-recent-login") {
      error.friendlyMessage =
        "Please log in again before deleting your account.";
    } else {
      error.friendlyMessage = mapFirebaseError(error);
    }

    throw error;
  }
};

/* =========================================================
   CURRENT USER
========================================================= */

export const getCurrentUser = () => {
  return auth.currentUser;
};

/* =========================================================
   IS LOGGED IN
========================================================= */

export const isLoggedIn = () => {
  return auth.currentUser !== null;
};
