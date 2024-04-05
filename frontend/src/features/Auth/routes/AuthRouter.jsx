import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import ForgotPassword from "../ForgotPassword";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot-password" element={<ForgotPassword />} />.
      <Route path="*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  );
};

export default AuthRouter;
