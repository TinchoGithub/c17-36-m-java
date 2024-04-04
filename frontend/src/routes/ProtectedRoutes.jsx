import React from "react";
import { Outlet } from "react-router-dom";
import { Login } from "../features/Auth/Index";

const ProtectedRoutes = () => {
  const auth = { isAuthenticated: false };

  return auth.isAuthenticated ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
