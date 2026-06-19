import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
export default function logout() {
  return (
    <>
    <Navbar />
    <div className="logout">
    <img src="/Assets/Check.png" alt="Success" />

    <h1>Logged Out Successfully!</h1>

    <p>You have been logged out of your account.</p>

    <p>Thank you for using Invoice Generator.</p>
    
</div><Footer />
    </>
  );
}
