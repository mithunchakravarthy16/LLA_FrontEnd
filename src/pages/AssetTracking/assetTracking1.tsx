/** @format */

import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import {
  AssetTrackedIcon,
  LocationIcon,
  OutOfGeofenceIcon,
  IncidentIcon,
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
import assetTrackingResponse from "../../mockdata/assetTrackingAPI";
import GeofenceIcon from "../../assets/GeofenceIcon.svg"

const AssetTracking: React.FC<any> = (props) => {
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  useEffect(() => {
    switch (selectedTheme) {
      case "light":
        setAppTheme(theme?.lightTheme);
        break;
      case "dark":
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
    geofenceIconStyle
  } = useStyles(appTheme);

  const topPanelListItems: any[] = [
    {
      icon: AssetTrackedIcon,
      value: assetTrackingData?.infoData?.assetTracked,
      name: "Asset Tracked",
    },
    {
      icon: LocationIcon,
      value: assetTrackingData?.infoData?.location,
      name: "Location",
    },
    {
      icon: OutOfGeofenceIcon,
      value: assetTrackingData?.infoData?.outOfGeofence,
      name: "Out of Geofence",
    },
    {
      icon: IncidentIcon,
      value: assetTrackingData?.infoData?.securityIncident,
      name: "Security Incident",
    },
  ];

  // Notification Data

  const [tabIndex, setTabIndex] = useState<any>(1);
  const [selectedNotification, setSelectedNotification] = useState<any>("");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [notificationPanelActive, setNotificationPanelActive] =
    useState<boolean>(false);
  const [currentMarker, setCurrentMarker] = useState<any>("");

  const dashboardArray = assetTrackingData?.notifications?.assetTracking;
  let currentTimeStampValue;
  let timeArrayNew: any = [];
  for (let i = 0; i < dashboardArray?.length; i++) {
    currentTimeStampValue = moment()
      .subtract({
        hours: i === 0 ? i : i > 20 ? 20 : i + 1,
        minutes: i + 59,
        seconds: i + 49,
      })
      .format("MM-DD-YYYY | h:mm A");
    timeArrayNew.push({ currentTimeStamp: currentTimeStampValue });
  }

  let dashboardDataList = timeArrayNew?.map((item: any, i: any) =>
    Object.assign({}, item, dashboardArray[i])
  );

  const [searchValue, setSearchValue] = useState<any>(
    formatttedDashboardNotification(dashboardDataList, tabIndex)
  );

  const [dashboardData, setDashboardData] = useState<any>(
    formatttedDashboardNotification(dashboardDataList, tabIndex)
  );

  const [notificationCount, setNotificationCount] = useState<any>(
    formatttedDashboardNotificationCount(dashboardDataList)
  );

  useEffect(() => {
    setDashboardData(
      formatttedDashboardNotification(dashboardDataList, tabIndex)
    );
    setSearchValue(
      formatttedDashboardNotification(dashboardDataList, tabIndex)
    );
  }, [tabIndex]);

  useEffect(() => {
    setNotificationCount(
      formatttedDashboardNotificationCount(dashboardDataList)
    );
  }, [dashboardData]);

  const [selectedWidth, setSelectedWidth] = useState<any>();

  useEffect(() => {
    if (window.innerWidth > 3839) {
      setSelectedWidth({
        width: 1300,
        height: 500,
        is4kDevice: true,
      });
    } else if (window.innerWidth < 3839) {
      setSelectedWidth({
        width: 550,
        height: 200,
        is4kDevice: false,
      });
    }
  }, []);

  return (
    <>
      <Grid container className={rootContainer}>
        <Grid container className={mainSection}>
          <Grid item xs={12} alignItems="center" className={pageHeading}>
            ASSET TRACKING
          </Grid>
          <Grid item xs={12} className={bodyContainer}>
            <Grid container xs={12} className={bodySubContainer}>
              <Grid item xs={9} className={bodyLeftContainer}>
                <Grid container xs={12} className={bodyLeftSubContainer}>
                  <Grid item xs={12} className={bodyLeftTopPanelContainer}>
                    <Grid
                      container
                      xs={12}
                      className={bodyLeftTopPanelSubContainer}
                    >
                      <Grid
                        item
                        xs={12}
                        className={bodyLeftTopPanelListContainer}
                      >
                        <TopPanelListItemContainer
                          topPanelListItems={topPanelListItems}
                          percent={70}
                          strokeWidth={10}
                          trailWidth={10}
                          strokeColor="#92C07E"
                          trailColor="#484D52"
                          title={"Active Trackers"}
                        />
                      </Grid>
                      <Grid item xs={6} className={graphOneContainer}>
                        <Grid
                          container
                          xs={12}
                          className={graphOneContainerStyle}
                        >
                          <Grid
                            item
                            xs={12}
                            className={screenFiveGraphTitleStyle}
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
                          <Grid item xs={12} className={graphOneChartStyle}>
                            <Chart
                              width={selectedWidth?.width}
                              height={selectedWidth?.height}
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
                          <Grid item xs={12} className={graphTwoHeader}>
                            Incidents
                          </Grid>
                          <Grid item xs={12} className={graphTwoChartStyle}>
                            <Chart
                              width={selectedWidth?.width}
                              height={selectedWidth?.height}
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
                          <Grid />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className={bodyLeftTopPanelMapContainer}>
                  {/* <div className={geofenceIconStyle}> */}
                              <img src={GeofenceIcon} className={geofenceIconStyle} alt="GeofenceIcon" />
                  {/* </div> */}

                    <Map
                      markers={dashboardDataList}
                      setNotificationPanelActive={setNotificationPanelActive}
                      setSelectedNotification={setSelectedNotification}
                      marker={selectedNotification}
                      setTabIndex={setTabIndex}
                      currentMarker={currentMarker}
                      setCurrentMarker={setCurrentMarker}
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
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AssetTracking;
