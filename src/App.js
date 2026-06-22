import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/Signup/Signup";
import Logout from "./pages/Logout/Logout";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import VerifyOTP from "./pages/VerifyOTP/VerifyOTP";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/logout" element={<Logout />} />

        <Route path="/forgotpassword" element={<ForgotPassword />} />

        <Route path="/resetpassword" element={<ResetPassword />} />

        <Route path="/verify" element={<VerifyOTP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
