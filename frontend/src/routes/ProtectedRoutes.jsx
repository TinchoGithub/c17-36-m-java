import React from "react";
import { Outlet } from "react-router-dom";
import { Login } from "../features/Auth/Index";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth)

  return auth.isAuthenticated ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
