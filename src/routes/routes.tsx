import { Navigate, useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import MainLayout from "pages/MainLayout";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";
import Parking from "../pages/Parking";
import BirdsView from "pages/BirdsView";
import Settings from "pages/Settings";

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
      element: user?.userName ? (
        <MainLayout />
      ) : (
        <Navigate replace to="login" />
      ),
      children: [
        {
          path: "dashboard",
          element: <DashBoard />,
        },
        {
          path: "parking",
          element: <Parking />,
        },
        {
          path: "birdsView",
          element: <BirdsView />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
    {
      path: "*",
      element: <div>No Route Found</div>,
    },
  ]);
};

export default VIOT_Routes;
