import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth, googleProvider } from "../firebase/firebase";

/**
 * Create Account
 */
export const signup = async (name, email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );

  await updateProfile(userCredential.user, {
    displayName: name,
  });

  return userCredential.user;
};

/**
 * Login
 */
export const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );

  return userCredential.user;
};

/**
 * Google Login
 */
export const googleLogin = async () => {
  const result = await signInWithPopup(auth, googleProvider);

  return result.user;
};

/**
 * Logout
 */
export const logout = async () => {
  await signOut(auth);
};

/**
 * Forgot Password
 */
export const forgotPassword = async (email) => {
  await sendPasswordResetEmail(auth, email);
};
