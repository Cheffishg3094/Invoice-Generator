import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/Signup/Signup";
import Logout from "./pages/Logout/Logout";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import VerifyOTP from "./pages/VerifyOTP/VerifyOTP";
import Dashboard from "./pages/Dashboard/Dashboard";
import Invoices from "./pages/Invoices/Invoices";
import Error from "./pages/Error/Error";
import Products from "./pages/Products/Products";
import Profile from "./pages/Profile/Profile";
import Create from "./pages/Create/Create";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<Signup />} />

            <Route path="/logout" element={<Logout />} />

            <Route path="/forgotpassword" element={<ForgotPassword />} />

            <Route path="/resetpassword" element={<ResetPassword />} />

            <Route path="/verify" element={<VerifyOTP />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/invoices" element={<Invoices />} />

            <Route path="/error" element={<Error />} />

            <Route path="/products" element={<Products />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/create-invoice" element={<Create />} />

            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
