import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

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
import InvoicePreview from "./pages/InvoicePreview/InvoicePreview";
import Clients from "./pages/Clients/Clients";
import Reports from "./pages/Reports/Reports";
import Templates from "./pages/Templates/Templates";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />

            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />

            <Route
              path="/forgotpassword"
              element={
                <PublicRoute>
                  <ForgotPassword />
                </PublicRoute>
              }
            />
            <Route path="/logout" element={<Logout />} />

            <Route path="/resetpassword" element={<ResetPassword />} />

            <Route path="/verify" element={<VerifyOTP />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/invoices"
              element={
                <ProtectedRoute>
                  <Invoices />
                </ProtectedRoute>
              }
            />

            <Route
              path="/products"
              element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/create-invoice"
              element={
                <ProtectedRoute>
                  <Create />
                </ProtectedRoute>
              }
            />

            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />

            <Route
              path="/preview"
              element={
                <ProtectedRoute>
                  <InvoicePreview />
                </ProtectedRoute>
              }
            />

            <Route
              path="/clients"
              element={
                <ProtectedRoute>
                  <Clients />
                </ProtectedRoute>
              }
            />

            <Route
              path="/reports"
              element={
                <ProtectedRoute>
                  <Reports />
                </ProtectedRoute>
              }
            />

            <Route
              path="/templates"
              element={
                <ProtectedRoute>
                  <Templates />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
