import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

import { AuthRouter } from "../features/Auth/Index";

import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<></>} />

          {/* Page not found */}
        </Route>
        <Route path="/404-not-found-page" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404-not-found-page" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
