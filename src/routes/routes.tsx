import { Navigate, useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import MainLayout from "pages/MainLayout";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";
import BirdsView from "pages/BirdsView";
import Settings from "pages/Settings";
import GridView from "pages/GridView";
import Lighting from "pages/Lighting";
import EnergyManagement from "pages/EnenrgyManagement";
import Security from "pages/Security";
import Parking from "pages/Parking";
import FleetManagement from "pages/FleetManagement";
import AssetTracking from "pages/AssetTracking";
import AdminPanel from "pages/AdminPanel";
import AdminPanelLogin from "pages/AdminPanelLogin";

const VIOT_Routes = () => {
  const user = useSelector((state: any) => state.login.loginData);
  return useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Navigate replace to="login" />,
    },
    {
      path: "/",
      element: user?.data?.userName ? (
        <MainLayout />
      ) : (
        <Navigate replace to="login" />
      ),
      children: [
        {
          path: "home",
          element: <DashBoard />,
        },
        {
          path: "gridView",
          element: <GridView />,
        },
        {
          path: "birdsView",
          element: <BirdsView />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "parking",
          element: <Parking />,
        },
        {
          path: "energyManagement",
          element: <EnergyManagement />,
        },
        {
          path: "security",
          element: <Security />,
        },
        {
          path: "lighting",
          element: <Lighting />,
        },
        {
          path: "fleetManagement",
          element: <FleetManagement />,
        },
        {
          path: "assetTracking",
          element: <AssetTracking />,
        },
      ],
    },
    {
      path: "*",
      element: <div>No Route Found</div>,
    },
    {
      path: "adminPanel",
      element: <AdminPanel />,
    },
    {
      path: "adminLogin",
      element: <AdminPanelLogin />,
    },
  ]);
};

export default VIOT_Routes;
