import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import { Home } from "../features/Home/pages/Home";
import { AuthRouter } from "../features/Auth/Index";
import NotFoundPage from "../pages/NotFoundPage";
import LandingPage from "../pages/LandingPage";
import { Transfers } from "../features/Transfers/pages/Transfers";
import { TransferAddNewAccount } from "../features/Transfers/pages/TransferAddNewAccount";
import { TransferMoneyAmount } from "../features/Transfers/pages/TransferMoneyAmount";
import { TransferInfoCheck } from "../features/Transfers/pages/TransferInfoCheck";
import { SuccessTransfer} from "../features/Transfers/pages/SuccessTransfer"
import { TransferVoucher } from "../features/Transfers/pages/TransferVoucher";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/transferencias" element={<Transfers />} />
          <Route
            path="/transferencias/cuenta-nueva/agregar-cuenta"
            element={< TransferAddNewAccount/>}
          />
           <Route
            path="/transferencias/cuenta-nueva/monto-dinero"
            element={< TransferMoneyAmount/>}
          />
          <Route path="/transferencias/cuenta-nueva/verificar-datos" element={< TransferInfoCheck/>}/>
          <Route path="/transferencias/cuenta-nueva/transferencia-exitosa" element={<SuccessTransfer/>}/>
          <Route path="/transferencias/cuenta-nueva/voucher" element={<TransferVoucher/>}/>

          {/* Page not found */}
        </Route>
        <Route path="/" element={<Navigate to="/auth" replace />} />
        <Route path="/404-not-found-page" element={<NotFoundPage />} />
        <Route
          path="*"
          element={<Navigate to="/404-not-found-page" replace />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
