import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./protectedRoutes";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";
import Parking from "../pages/Parking";

const VIOT_Routes = () => {
  const user = useSelector((state: any) => state.login.loginData);

  return (
    <>
      <Routes>
        {/** Protected Routes */}
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Navigate replace to="login" />} />
        </Route>

        {/** Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/parking" element={<Parking />} />
        {/** Permission denied route */}
        <Route path="/denied" element={<div>No permission</div>} />
      </Routes>
    </>
  );
};

export default VIOT_Routes;
