/** @format */

import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import {
  AssetTrackedIcon,
  LocationIcon,
  OutOfGeofenceIcon,
  IncidentIcon,
  AssetTrackedLightThemeIcon,
  LocationLightThemeIcon,
  OutOfGeofenceLightThemeIcon,
  IncidentLightThemeIcon,
} from "../../assets/topPanelListIcons";
import theme from "../../theme/theme";
import useStyles from "./styles";
import TopPanelListItemContainer from "components/TopPanelListItemContainer";
import Map from "components/Map";
import moment from "moment";
import Chart from "elements/Chart";
import Highcharts from "highcharts";
import NotificationPanel from "components/NotificationPanel";
import {
  formatttedDashboardNotification,
  formatttedDashboardNotificationCount,
} from "../../utils/utils";
import assetTrackingData from "../../mockdata/assetTrackingData";
import assetTrackingResponse from "mockdata/assetTrackingAPI";
import GeofenceIcon from "../../assets/GeofenceIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { getNotificationData } from "redux/actions/getAllAssertNotificationAction";
import { getAssetActiveInactiveTracker } from "redux/actions/getActiveInactiveTrackerCount";
import { getAssetIncidentCount } from "redux/actions/getAllIncidentCount";
import { getOverallTrackerDetail } from "redux/actions/getOverAllTrackerdetail";
import InfoDialogAssetTracking from "components/InfoDialogAssetTracking";
import InfoDialogGeofenceAssetTracking from "../../components/InfoDialogGeofenceAssetTracking";

const AssetTracking: React.FC<any> = (props) => {
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  const [notificationArray, setNotificationArray] = useState<any>([]);
  useEffect(() => {
    switch (selectedTheme) {
      case "light":
        // @ts-ignore
        setAppTheme(theme?.lightTheme);
        break;
      case "dark":
        // @ts-ignore
        setAppTheme(theme?.darkTheme);
        break;
      default:
        setAppTheme(theme?.defaultTheme);
        break;
    }
  }, [selectedTheme]);

  const {
    rootContainer,
    mainSection,
    pageHeading,
    bodyContainer,
    bodySubContainer,
    bodyLeftContainer,
    bodyLeftSubContainer,
    bodyLeftTopPanelContainer,
    bodyLeftTopPanelMapContainer,
    bodyLeftTopPanelSubContainer,
    bodyLeftTopPanelListContainer,
    graphOneContainer,
    graphTwoContainer,
    notificationPanelGrid,
    graphTwoHeader,
    screenFiveGraphTitleStyle,
    graphOneContainerStyle,
    graphOneGraphTitleContainer,
    graphTitleOneRound,
    graphTitleTwoStyle,
    graphTitleTwoRound,
    graphOneChartStyle,
    graphTwoContainerStyle,
    graphTwoChartStyle,
    geofenceIconStyle,
  } = useStyles(appTheme);

  const dispatch = useDispatch();

  useEffect(() => {
    let notificationPayload: any = {};
    dispatch(getNotificationData(notificationPayload));

    let activeInactiveTrackerPayload: any = {};
    dispatch(getAssetActiveInactiveTracker(activeInactiveTrackerPayload));

    let incidentCountPayload: any = {};
    dispatch(getAssetIncidentCount(incidentCountPayload));

    let overallAssetDetailPayload: any = {};
    dispatch(getOverallTrackerDetail(overallAssetDetailPayload));
  }, []);

  const assetNotificationResponse = useSelector(
    (state: any) => state?.assetNotification?.assetNotificationData
  );
  const assetNotificationList = assetNotificationResponse?.notifications;

  const assetTrackerData = useSelector(
    (state: any) => state?.assetActiveInactiveTracker?.assetTrackerData
  );

  const assetIncidentCount = useSelector(
    (state: any) => state?.assetIncidentCount?.assetIncidentCountValue
  );

  const overallAssetDetails = useSelector(
    (state: any) => state?.assetOverallTrackerDetails?.overallTrackerDetail
  );

  useEffect(() => {
    const { events, incidents, alerts } = assetNotificationList;
    const combinedNotifications: any = [];

    events?.eventsList?.forEach((event: any, index: number) => {
      combinedNotifications.push({
        ...event,
        category: "asset",
        title: event?.reason,
        id: event?.assetNotificationId,
      });
    });

    incidents?.incidentList?.forEach((incidents: any, index: number) => {
      combinedNotifications.push({
        ...incidents,
        category: "asset",
        title: incidents?.reason,
        id: incidents?.assetNotificationId,
      });
    });

    alerts?.alertList?.forEach((alerts: any, index: number) => {
      combinedNotifications.push({
        ...alerts,
        category: "asset",
        title: alerts?.reason,
        id: alerts?.assetNotificationId,
      });
    });

    const dataValue: any = combinedNotifications?.map(
      (value: any, index: number) => {
        return { ...value, index: index + 1 };
      }
    );
    setNotificationArray(dataValue);
  }, [assetNotificationList]);

  const topPanelListItems: any[] = [
    {
      icon: selectedTheme === "light" ? AssetTrackedLightThemeIcon : AssetTrackedIcon,
      value: overallAssetDetails?.assetTrackedCount,
      name: "Asset Tracked",
    },
    {
      icon: selectedTheme === "light" ? LocationLightThemeIcon : LocationIcon,
      value: overallAssetDetails?.locationChangeCount,
      name: "Location",
    },
    {
      icon: selectedTheme === "light" ? OutOfGeofenceLightThemeIcon : OutOfGeofenceIcon,
      value: overallAssetDetails?.outOfGeofenceCount,
      name: "Out of Geofence",
    },
    {
      icon: selectedTheme === "light" ? IncidentLightThemeIcon : IncidentIcon,
      value: overallAssetDetails?.incidientCount,
      name: "Security Incident",
    },
  ];

  const [tabIndex, setTabIndex] = useState<any>(1);
  const [selectedNotification, setSelectedNotification] = useState<any>("");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [notificationPanelActive, setNotificationPanelActive] =
    useState<boolean>(false);
  const [currentMarker, setCurrentMarker] = useState<any>("");

  const [searchValue, setSearchValue] = useState<any>(
    formatttedDashboardNotification(notificationArray, tabIndex)
  );

  const [dashboardData, setDashboardData] = useState<any>(
    formatttedDashboardNotification(notificationArray, tabIndex)
  );

  const [isMarkerClicked, setIsMarkerClicked] = useState<boolean>(false);

  const [notificationCount, setNotificationCount] = useState<any>([
    assetNotificationList?.events?.totalCount,
    assetNotificationList?.incidents?.totalCount,
    assetNotificationList?.alerts?.totalCount,
  ]);

  const [isInfoWindowActive, setIsInfoWindowActive] = useState<boolean>(false);
  const [isGeofenceInfoWindowActive, setIsGeofenceInfoWindowActive] =
    useState<boolean>(false);

  useEffect(() => {
    setDashboardData(
      formatttedDashboardNotification(notificationArray, tabIndex)
    );
    setSearchValue(
      formatttedDashboardNotification(notificationArray, tabIndex)
    );
  }, [notificationArray, tabIndex]);

  const [selectedWidth, setSelectedWidth] = useState<any>();
  const [selectedMarker, setSelectedMarker] = useState<any>();

  useEffect(() => {
    if (window.innerWidth > 3839) {
      setSelectedWidth({
        width: 1250,
        height: 480,
        width1: 1250,
        height1: 480,
        is4kDevice: true,
      });
    } else if (window.innerWidth > 3071) {
      setSelectedWidth({
        width: 1000,
        height: 500,
        width1: 1000,
        height1: 500,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 2559) {
      setSelectedWidth({
        width: 820,
        height: 180,
        width1: 820,
        height1: 180,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 2047) {
      setSelectedWidth({
        width: 630,
        height: 220,
        width1: 630,
        height1: 220,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1919) {
      setSelectedWidth({
        width: 620,
        height: 205,
        width1: 620,
        height1: 205,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1791) {
      setSelectedWidth({
        width: 560,
        height: 240,
        width1: 560,
        height1: 240,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1679) {
      setSelectedWidth({
        width: 550,
        height: 210,
        width1: 550,
        height1: 210,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1599) {
      setSelectedWidth({
        width: 500,
        height: 190,
        width1: 500,
        height1: 190,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1535) {
      setSelectedWidth({
        width: 500,
        height: 200,
        width1: 500,
        height1: 200,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1439) {
      setSelectedWidth({
        width: 450,
        height: 190,
        width1: 450,
        height1: 190,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1359) {
      setSelectedWidth({
        width: 400,
        height: 150,
        width1: 400,
        height1: 150,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1343) {
      setSelectedWidth({
        width: 400,
        height: 180,
        width1: 400,
        height1: 180,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1279) {
      setSelectedWidth({
        width: 400,
        height: 100,
        width1: 400,
        height1: 100,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1151) {
      setSelectedWidth({
        width: 350,
        height: 150,
        width1: 350,
        height1: 150,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1023) {
      setSelectedWidth({
        width: 300,
        height: 110,
        width1: 300,
        height1: 110,
        is4kDevice: false,
      });
    }
  }, []);

  const handleAssetViewDetails = (data: any) => {
    setIsInfoWindowActive(true);
    setSelectedMarker(data);
  };

  const packageData = [
    {
      id: "1",
      packageStage: "Equipment Arrived",
      timeStamp: "06-20-2023 9.00AM",
      status: "Completed",
    },
    {
      id: "2",
      packageStage: "Initial Scan",
      timeStamp: "06-20-2023 10.30AM",
      status: "Completed",
    },
    {
      id: "3",
      packageStage: "Inbound Staging & Tagging",
      timeStamp: "06-20-2023 12.30PM",
      status: "In progress",
    },
    {
      id: "4",
      packageStage: "Allocated Space",
      timeStamp: "06-20-2023 1.30PM",
      status: "In progress",
    },
    {
      id: "5",
      packageStage: "Tracking Active",
      timeStamp: "06-20-2023 3.00PM",
      status: "Completed",
    },
    {
      id: "6",
      packageStage: "1411 Wynkoop St, Zone 1, LLA BUILDING",
      timeStamp: "06-23-2023 04.30PM",
      status: "Completed",
    },
  ];

  const infoWindowNotificationListItems: any[] = [
    {
      title: "Out of Geofence",
      details: "TR#12367 | Asset#12",
      timeStamp: "06-12-2023 | 9:00 AM",
    },
    {
      title: "Within Geofence",
      details: "TR#12367 | Asset#12",
      timeStamp: "06-12-2023 | 9:00 AM",
    },
    {
      title: "Out of Geofence",
      details: "TR#12367 | Asset#12",
      timeStamp: "06-12-2023 | 9:00 AM",
    },
    {
      title: "Within Geofence",
      details: "TR#12367 | Asset#12",
      timeStamp: "06-12-2023 | 9:00 AM",
    },
    {
      title: "Out of Geofence",
      details: "TR#12367 | Asset#12",
      timeStamp: "06-12-2023 | 9:00 AM",
    },
    {
      title: "Within Geofence",
      details: "TR#12367 | Asset#12",
      timeStamp: "06-12-2023 | 9:00 AM",
    },
    {
      title: "Out of Geofence",
      details: "TR#12367 | Asset#12",
      timeStamp: "06-12-2023 | 9:00 AM",
    },
    {
      title: "Within Geofence",
      details: "TR#12367 | Asset#12",
      timeStamp: "06-12-2023 | 9:00 AM",
    },
    {
      title: "Out of Geofence",
      details: "TR#12367 | Asset#12",
      timeStamp: "06-12-2023 | 9:00 AM",
    },
    {
      title: "Within Geofence",
      details: "TR#12367 | Asset#12",
      timeStamp: "06-12-2023 | 9:00 AM",
    },
    {
      title: "Out of Geofence",
      details: "TR#12367 | Asset#12",
      timeStamp: "06-12-2023 | 9:00 AM",
    },
    {
      title: "Within Geofence",
      details: "TR#12367 | Asset#12",
      timeStamp: "06-12-2023 | 9:00 AM",
    },
    {
      title: "Out of Geofence",
      details: "TR#12367 | Asset#12",
      timeStamp: "06-12-2023 | 9:00 AM",
    },
    {
      title: "Within Geofence",
      details: "TR#12367 | Asset#12",
      timeStamp: "06-12-2023 | 9:00 AM",
    },
  ];

  const handleAssetInfoWindow = () => {
    setIsGeofenceInfoWindowActive(true);
  };

  return (
    <>
      <Grid container className={rootContainer}>
        <Grid container className={mainSection}>
          <Grid item xs={12} alignItems="center" className={pageHeading}>
            ASSET TRACKING
          </Grid>
          <Grid item xs={12} className={bodyContainer}>
            <Grid container xs={12} className={bodySubContainer}  style={{ height: "93vh" }}>
              <Grid item xs={9} className={bodyLeftContainer}>
                <Grid container xs={12} className={bodyLeftSubContainer}>
                  <Grid item xs={12} className={bodyLeftTopPanelContainer} style={{ height: "29%" }}>
                    <Grid
                      container
                      xs={12}
                      className={bodyLeftTopPanelSubContainer}
                      style={{height : "100%"}}

                    >
                      <Grid
                        item
                        xs={12}
                        className={bodyLeftTopPanelListContainer}
                      >
                        <TopPanelListItemContainer
                          topPanelListItems={topPanelListItems}
                          percent={overallAssetDetails?.activeTrackerPercentage}
                          strokeWidth={10}
                          trailWidth={10}
                          strokeColor="#92C07E"
                          trailColor={appTheme?.palette?.fleetManagementPage
                            ?.progressBarBg}
                          title={"Active Trackers"}
                        />
                      </Grid>
                      <Grid item xs={12} style={{ height: "100%" }}>
                        <Grid container xs={12} style={{ height: "25vh" }}>
                      <Grid item xs={6} className={graphOneContainer}>
                        <Grid
                          container
                          xs={12}
                          // className={graphOneContainerStyle}
                          style={{
                            height: "100%",
                            paddingLeft: "10px",
                          }}
                        >
                          <Grid
                            item
                            xs={12}
                            className={screenFiveGraphTitleStyle}
                            style={{minHeight : "3vh"}}
                          >
                            <div className={graphOneGraphTitleContainer}>
                              <div
                                className={graphTitleOneRound}
                                style={{}}
                              ></div>
                              <div>Active Tracker</div>
                            </div>
                            <div className={graphTitleTwoStyle}>
                              <div className={graphTitleTwoRound}></div>
                              <div>In-Active Tracker</div>
                            </div>
                          </Grid>
                          {/* <Grid item xs={12} className={graphOneChartStyle}> */}
                          <Grid item xs={12} 
                              style={{ height: "90%" }}
                              >
                                <Grid
                                  container
                                  xs={12}
                                  // style={{ height: "100%" }}
                                >
                                  <Grid item xs={12} style={{ height: "21vh", width: "80vw" }}>
                            <Chart
                              // width={selectedWidth?.width}
                              // height={selectedWidth?.height}
                              containerProps={{
                                style: { height: "100%", width: "100%" },
                              }}
                              isVisible={true}
                              graphType={"spline"}
                              units={""}
                              isCrosshair={true}
                              crossHairLineColor={"#E5FAF6"}
                              is4kDevice={selectedWidth?.is4kDevice}
                              // tooltip={"shared"}
                              dataPoints={[
                                {
                                  marker: {
                                    enabled: false,
                                  },
                                  lineColor: "#25796D",
                                  color: "#25796D",
                                  lineWidth: 2,
                                  data: [
                                    0, 1, 6, 6, 9, 5, 5, 1, 6, 1, 2, 3, 4, 8, 6,
                                    6, 8, 7, 6, 5, 3, 1, 2, 0,
                                  ],
                                },
                                {
                                  marker: {
                                    enabled: false,
                                  },
                                  lineColor: "#D25A5A",
                                  color: "#D25A5A",
                                  lineWidth: 2,
                                  data: [
                                    1, 4, 3, 5, 4, 2, 8, 4, 3, 4, 7, 5, 1, 4, 3,
                                    5, 4, 2, 8, 4, 3, 4, 1, 4,
                                  ],
                                },
                              ]}
                            />
                          </Grid>
                          </Grid>
                          </Grid>
                          <Grid />
                        </Grid>
                      </Grid>
                      <Grid item xs={6} className={graphTwoContainer}>
                        <Grid
                          container
                          xs={12}
                          className={graphTwoContainerStyle}
                          style={{}}
                        >
                          <Grid item xs={12}  style={{ height: "3vh", display : "flex", alignItems : "center" }}  >
                            Incidents
                          </Grid>
                          {/* <Grid item xs={12} className={graphTwoChartStyle}> */}
                          <Grid item xs={12}>
                                <Grid
                                  container
                                  xs={12}
                                  style={{ height: "90%" }}
                                >
                                  <Grid
                                    item
                                    xs={12}
                                    style={{ height: "21vh", width: "80vw" }}
                                  >
                            <Chart
                              // width={selectedWidth?.width1}
                              // height={selectedWidth?.height1}
                              containerProps={{
                                style: { height: "100%", width: "100%" },
                              }}
                              graphType={"areaspline"}
                              isVisible={true}
                              units={""}
                              isCrosshair={true}
                              crossHairLineColor={"#EE3E35"}
                              is4kDevice={selectedWidth?.is4kDevice}
                              dataPoints={[
                                {
                                  marker: {
                                    enabled: false,
                                  },
                                  lineColor: "#EE3E3590",
                                  color: "#EE3E35",
                                  lineWidth: 2,
                                  fillColor: {
                                    linearGradient: [0, 0, 0, 200],
                                    stops: [
                                      [
                                        0,
                                        Highcharts.color("#C3362F")
                                          .setOpacity(0.5)
                                          .get("rgba"),
                                      ],
                                      [
                                        0.5,
                                        Highcharts.color("#C3362F")
                                          .setOpacity(0.3)
                                          .get("rgba"),
                                      ],
                                      [
                                        1,
                                        Highcharts.color(
                                          selectedWidth?.is4kDevice
                                            ? "#C3362F"
                                            : "#000000"
                                        )
                                          .setOpacity(0.05)
                                          .get("rgba"),
                                      ],
                                    ],
                                  },
                                  data: [
                                    1, 4, 3, 5, 4, 6, 8, 4, 7, 6, 7, 5, 6, 4, 7,
                                    5, 4, 2, 8, 4, 3, 4, 1, 4,
                                  ],
                                },
                              ]}
                            />
                              </Grid>
                              </Grid>
                          </Grid>
                          <Grid />
                        </Grid>
                      </Grid>
                    </Grid>
                    </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} className={bodyLeftTopPanelMapContainer}   style={{ height: "60%" }}>
                    <img
                      src={GeofenceIcon}
                      className={geofenceIconStyle}
                      alt="GeofenceIcon"
                      onClick={handleAssetInfoWindow}
                    />
                    <Map
                      markers={notificationArray}
                      setNotificationPanelActive={setNotificationPanelActive}
                      setSelectedNotification={setSelectedNotification}
                      marker={selectedNotification}
                      setTabIndex={setTabIndex}
                      currentMarker={currentMarker}
                      setCurrentMarker={setCurrentMarker}
                      setIsMarkerClicked={setIsMarkerClicked}
                      handleAssetViewDetails={handleAssetViewDetails}
                      mapPageName={"asset"}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} className={notificationPanelGrid}>
                <NotificationPanel
                  setNotificationPanelActive={setNotificationPanelActive}
                  dashboardData={dashboardData}
                  tabIndex={tabIndex}
                  setTabIndex={setTabIndex}
                  notificationCount={notificationCount}
                  selectedNotification={selectedNotification}
                  setSelectedNotification={setSelectedNotification}
                  searchOpen={searchOpen}
                  setSearchOpen={setSearchOpen}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  setCurrentMarker={setCurrentMarker}
                  handleAssetViewDetails={handleAssetViewDetails}
                  isMarkerClicked={isMarkerClicked}
                  setIsMarkerClicked={setIsMarkerClicked}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {isInfoWindowActive && (
        <InfoDialogAssetTracking
          setIsInfoWindowActive={setIsInfoWindowActive}
          packageData={packageData}
          infoWindowNotificationListItems={infoWindowNotificationListItems}
          selectedMarker={selectedMarker}
        />
      )}
      {isGeofenceInfoWindowActive && (
        <InfoDialogGeofenceAssetTracking
          setIsGeofenceInfoWindowActive={setIsGeofenceInfoWindowActive}
        />
      )}
    </>
  );
};

export default AssetTracking;
