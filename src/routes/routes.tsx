import React, { useState, Suspense, useEffect } from "react";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import MainLayout from "pages/MainLayout";
import AdminPanel from "pages/AdminPanel";
import AdminPanelLogin from "pages/AdminPanelLogin";
import Loader from "elements/Loader";
import GoogleMapApiKey from "pages/GoogleMapApiKey";
import AssetTable from "pages/AssetTable";

const Login = React.lazy(() => import("pages/Login"));
const DashBoard = React.lazy(() => import("pages/DashBoard"));
const GridView = React.lazy(() => import("pages/GridView"));
const Settings = React.lazy(() => import("pages/Settings"));
const BirdsView = React.lazy(() => import("pages/BirdsView"));
const Lighting = React.lazy(() => import("pages/Lighting"));
const EnergyManagement = React.lazy(() => import("pages/EnenrgyManagement"));
const Parking = React.lazy(() => import("pages/Parking"));
const Security = React.lazy(() => import("pages/Security"));
const FleetManagement = React.lazy(() => import("pages/FleetManagement"));
const AssetTracking = React.lazy(() => import("pages/AssetTracking"));

const VIOT_Routes = (props: any) => {
  // const {setWebsocketLatestAssetTrackerLive, setWebsocketLatestAssetNotification}=props
  const user = useSelector((state: any) => state.login.loginData);
  const [mapType, setMapType] = useState("roadmap");
  // const location = useLocation()
  // useEffect(()=>{
  //   setWebsocketLatestAssetTrackerLive([])
  //   setWebsocketLatestAssetNotification([])
  // },[location?.pathname])

  return useRoutes([
    {
      path: "/login",
      element: (
        <Suspense fallback={<Loader />}>
          <Login />
        </Suspense>
      ),
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
          element: (
            <Suspense fallback={<Loader />}>
              <DashBoard setMapType={setMapType} mapType={mapType} />
            </Suspense>
          ),
        },
        {
          path: "gridView",
          element: (
            <Suspense fallback={<Loader />}>
              <GridView />
            </Suspense>
          ),
        },
        {
          path: "birdsView",
          element: (
            <Suspense fallback={<Loader />}>
              <BirdsView />
            </Suspense>
          ),
        },
        {
          path: "settings",
          element: (
            <Suspense fallback={<Loader />}>
              <Settings />
            </Suspense>
          ),
        },
        {
          path: "parking",
          element: (
            <Suspense fallback={<Loader />}>
              <Parking mapType={mapType} setMapType={setMapType} />
            </Suspense>
          ),
        },
        {
          path: "energyManagement",
          element: (
            <Suspense fallback={<Loader />}>
              <EnergyManagement setMapType={setMapType} mapType={mapType} />
            </Suspense>
          ),
        },
        {
          path: "security",
          element: (
            <Suspense fallback={<Loader />}>
              <Security />
            </Suspense>
          ),
        },
        {
          path: "lighting",
          element: (
            <Suspense fallback={<Loader />}>
              <Lighting />
            </Suspense>
          ),
        },
        {
          path: "fleetManagement",
          element: (
            <Suspense fallback={<Loader />}>
              <FleetManagement />
            </Suspense>
          ),
        },
        {
          path: "assetTracking",
          element: (
            <Suspense fallback={<Loader />}>
              <AssetTracking mapType={mapType} setMapType={setMapType} />
            </Suspense>
          ),
        },
        {
          path: "googleMapApiKey",
          element: (
            <Suspense fallback={<Loader />}>
              <GoogleMapApiKey />
            </Suspense>
          ),
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
    {
      path: "assetTable",
      element: <AssetTable />,
    },
  ]);
};

export default VIOT_Routes;
