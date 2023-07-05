/** @format */

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import {
  TotalDistanceIcon,
  IdleHoursIcon,
  OverSpeedingIcon,
  HarshAccelerationIcon,
  HarshBreakingIcon,
} from "../../assets/topPanelListIcons";
import Highcharts from "highcharts";
import TopPanelListItemContainer from "components/TopPanelListItemContainer";
import Map from "components/Map";
import moment from "moment";
import NotificationPanel from "components/NotificationPanel";
import {
  formatttedDashboardNotification,
  formatttedDashboardNotificationCount,
} from "../../utils/utils";
import { LiveImg } from "assets/gridViewIcons";
import Chart from "elements/Chart";
import theme from "../../theme/theme";
import { getFleetManagementNotificationData } from "redux/actions/fleetManagementNotificationActions";
import useStyles from "./styles";
import InfoDialogFleetManagement from "components/InfoDialogFleetManagement";
import InfoDialogFleetVideo from "components/InfoDialogFleetVideo";

const FleetManagement: React.FC<any> = (props) => {
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

    liveContainer,
    liveImgStyle,
    liveContentValue,
    liveContentValueGreen,
    liveContentLabel,
    liveContentLabelGreen,
    liveContentStyle,
    liveContentLeftStyle,
    aqiCircleStyle,
    graphTwoHeader,
    electricity,
    screenFiveGraphTitleStyle,
    graphContainerHeaderOne,
    graphContainerHeaderTwo,
    graphContainerHeaderThree,
    driveDot,
    driveDotOne,
  } = useStyles(appTheme);

  const dispatch = useDispatch();

  useEffect(() => {
    let payload: any = {};
    dispatch(getFleetManagementNotificationData(payload));
  }, []);

  const fleetManagementNotificationResponse = useSelector(
    (state: any) =>
      state.fleetManagementNotification.fleetManagementNotificationData
  );

  const [notificationArray, setNotificationArray] = useState<any>([]);

  const fleetManagementNotificationList =
    fleetManagementNotificationResponse.notifications;

  useEffect(() => {
    if (fleetManagementNotificationList) {
      const { events, incidents, alerts } = fleetManagementNotificationList;
      const combinedNotifications: any = [];

      events?.eventsList?.forEach((event: any, index: number) => {
        combinedNotifications.push({
          ...event,
          category: "fleet",
          title: event?.reason,
          id: event?.notificationId,
        });
      });

      incidents?.incidentList?.forEach((incidents: any, index: number) => {
        combinedNotifications.push({
          ...incidents,
          category: "fleet",
          title: incidents?.reason,
          id: incidents?.notificationId,
        });
      });

      alerts?.alertList?.forEach((alerts: any, index: number) => {
        combinedNotifications.push({
          ...alerts,
          category: "fleet",
          title: alerts?.reason,
          id: alerts?.notificationId,
        });
      });

      const dataValue: any = combinedNotifications?.map(
        (value: any, index: number) => {
          return { ...value, index: index + 1 };
        }
      );
      setNotificationArray(dataValue);
    }
  }, [fleetManagementNotificationList]);

  const topPanelListItems: any[] = [
    {
      icon: TotalDistanceIcon,
      value: "1237km",
      name: "Total Distance",
    },
    {
      icon: IdleHoursIcon,
      value: "05Hrs",
      name: "Idle Hours",
    },
    {
      icon: OverSpeedingIcon,
      value: "11",
      name: "Over Speeding",
    },
    {
      icon: HarshAccelerationIcon,
      value: "05",
      name: "Harsh Acceleration",
    },
    {
      icon: HarshBreakingIcon,
      value: "04",
      name: "Harsh Breaking",
    },
  ];

  // Notification Data

  const [tabIndex, setTabIndex] = useState<any>(1);
  const [selectedNotification, setSelectedNotification] = useState<any>("");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [notificationPanelActive, setNotificationPanelActive] =
    useState<boolean>(false);
  const [currentMarker, setCurrentMarker] = useState<any>("");
  const [isMarkerClicked, setIsMarkerClicked] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<any>(
    formatttedDashboardNotification(notificationArray, tabIndex)
  );

  const [dashboardData, setDashboardData] = useState<any>(
    formatttedDashboardNotification(notificationArray, tabIndex)
  );

  const [notificationCount, setNotificationCount] = useState<any>([
    fleetManagementNotificationList?.events?.eventsList?.length,
    fleetManagementNotificationList?.incidents?.incidentList?.length,
    fleetManagementNotificationList?.alerts?.alertList?.length,
  ]);

  const [selectedWidth, setSelectedWidth] = useState<any>();

  useEffect(() => {
    setDashboardData(
      formatttedDashboardNotification(notificationArray, tabIndex)
    );
    setSearchValue(
      formatttedDashboardNotification(notificationArray, tabIndex)
    );
  }, [notificationArray, tabIndex]);

  useEffect(() => {
    if (window.innerWidth > 3839) {
      setSelectedWidth({
        width: 1200,
        height: 480,
        width1: 650,
        height1: 500,
        is4kDevice: true,
      });
    } else if (window.innerWidth > 3071) {
      setSelectedWidth({
        width: 800,
        height: 500,
        width1: 480,
        height1: 500,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 2559) {
      setSelectedWidth({
        width: 690,
        height: 230,
        width1: 400,
        height1: 230,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 2047) {
      setSelectedWidth({
        width: 560,
        height: 255,
        width1: 300,
        height1: 255,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1919) {
      setSelectedWidth({
        width: 500,
        height: 210,
        width1: 250,
        height1: 210,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1791) {
      setSelectedWidth({
        width: 500,
        height: 240,
        width1: 250,
        height1: 240,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1599) {
      setSelectedWidth({
        width: 500,
        height: 210,
        width1: 250,
        height1: 210,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1535) {
      setSelectedWidth({
        width: 500,
        height: 230,
        width1: 250,
        height1: 230,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1439) {
      setSelectedWidth({
        width: 450,
        height: 210,
        width1: 225,
        height1: 210,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1359) {
      setSelectedWidth({
        width: 370,
        height: 180,
        width1: 200,
        height1: 180,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1343) {
      setSelectedWidth({
        width: 400,
        height: 190,
        width1: 200,
        height1: 190,
        is4kDevice: false,
      });
    } else if (window.innerHeight > 767) {
      setSelectedWidth({
        width: 300,
        height: 160,
        width1: 150,
        height1: 160,
        is4kDevice: false,
      });
    } else if (window.innerHeight > 599) {
      setSelectedWidth({
        width: 350,
        height: 120,
        width1: 200,
        height1: 120,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1279) {
      setSelectedWidth({
        width: 400,
        height: 190,
        width1: 200,
        height1: 190,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1151) {
      setSelectedWidth({
        width: 350,
        height: 150,
        width1: 175,
        height1: 150,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1023) {
      setSelectedWidth({
        width: 300,
        height: 130,
        width1: 150,
        height1: 130,
        is4kDevice: false,
      });
      // else if (window.innerHeight > 1279) {
      //   setSelectedWidth({
      //     width: 600,
      //     height: 260,
      //     width1: 300,
      //     height1: 260,
      //     is4kDevice: false,
      //   });
      // }
      //  else if (window.innerHeight > 1049) {
      //   setSelectedWidth({
      //     width: 550,
      //     height: 220,
      //     width1: 290,
      //     height1: 220,
      //     is4kDevice: false,
      //   });
      // } else if (window.innerHeight > 959) {
      //   setSelectedWidth({
      //     width: 350,
      //     height: 220,
      //     width1: 200,
      //     height1: 220,
      //     is4kDevice: false,
      //   });
      // } else if (window.innerHeight > 936) {
      //   setSelectedWidth({
      //     width: 500,
      //     height: 180,
      //     width1: 250,
      //     height1: 180,
      //     is4kDevice: false,
      //   });
      // } else if (window.innerHeight > 767) {
      //   setSelectedWidth({
      //     width: 300,
      //     height: 160,
      //     width1: 150,
      //     height1: 160,
      //     is4kDevice: false,
      //   });
      // } else if (window.innerHeight > 599) {
      //   setSelectedWidth({
      //     width: 350,
      //     height: 120,
      //     width1: 200,
      //     height1: 120,
      //     is4kDevice: false,
      //   });
    }
  }, []);

  const [showInfoDialogue, setShowInfoDialogue] = useState<boolean>(false);
  const [showInfoDialogueVideo, setShowInfoDialogueVideo] = useState<boolean>(true);
  
  const handleViewDetails = () => {
    setShowInfoDialogue(true);
  };

  return (
    <>
      <Grid container className={rootContainer}>
        <Grid container className={mainSection}>
          <Grid item xs={12} alignItems="center" className={pageHeading}>
            FLEET MANAGEMENT
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
                          strokeColor="
                          #92C07E"
                          trailColor="#484D52"
                          title={"Safety Score"}
                        />
                      </Grid>
                      <Grid item xs={12} style={{ height: "80%" }}>
                        <Grid container xs={12} style={{ height: "100%" }}>
                          <Grid item xs={6} className={graphOneContainer}>
                            <Grid
                              container
                              xs={12}
                              style={{
                                height: "100%",
                                position: "relative",
                              }}
                            >
                              <Grid item xs={12} className={electricity}>
                                Trips
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                className={graphContainerHeaderOne}
                              >
                                <Grid
                                  container
                                  xs={12}
                                  style={{ height: "100%" }}
                                >
                                  <Grid item xs={9} style={{ height: "100%" }}>
                                    <Chart
                                      width={selectedWidth?.width}
                                      height={selectedWidth?.height}
                                      graphType={"areaspline"}
                                      isVisible={true}
                                      units={""}
                                      isCrosshair={true}
                                      crossHairLineColor={"#6B70AB90"}
                                      is4kDevice={selectedWidth?.is4kDevice}
                                      pageName={"FleetManagement"}
                                      dataPoints={[
                                        {
                                          marker: {
                                            enabled: false,
                                          },
                                          lineColor: "#6B70AB90",
                                          color: "#6B70AB",
                                          lineWidth: 2,
                                          fillColor: {
                                            linearGradient: [0, 0, 0, 200],
                                            stops: [
                                              [
                                                0,
                                                Highcharts.color("#6B70AB")
                                                  .setOpacity(0.5)
                                                  .get("rgba"),
                                              ],
                                              [
                                                0.5,
                                                Highcharts.color("#6B70AB")
                                                  .setOpacity(0.3)
                                                  .get("rgba"),
                                              ],
                                              [
                                                1,
                                                Highcharts.color(
                                                  selectedWidth?.is4kDevice
                                                    ? "#6B70AB"
                                                    : "#000000"
                                                )
                                                  .setOpacity(0.05)
                                                  .get("rgba"),
                                              ],
                                            ],
                                          },
                                          data: [1, 4, 3, 5, 4, 6, 8],
                                        },
                                      ]}
                                    />
                                  </Grid>
                                  <Grid
                                    item
                                    xs={3}
                                    style={{
                                      height: "100%",
                                      padding: "0px 0px 15px 36px",
                                    }}
                                  >
                                    <div className={liveContainer}>
                                      <div className={liveImgStyle}>
                                        <img
                                          width={
                                            selectedWidth?.is4kDevice ? 109 : 50
                                          }
                                          height={
                                            selectedWidth?.is4kDevice ? 49 : 30
                                          }
                                          src={LiveImg}
                                        />
                                      </div>
                                      <div className={liveContentLeftStyle}>
                                        <div className={liveContentValue}>
                                          10
                                        </div>
                                        <div className={liveContentLabel}>
                                          VEHICLES
                                        </div>
                                      </div>
                                      <div className={liveContentStyle}>
                                        <div className={liveContentValue}>
                                          13
                                        </div>
                                        <div className={liveContentLabel}>
                                          TRIPS
                                        </div>
                                      </div>
                                    </div>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={3} className={graphTwoContainer}>
                            <Grid
                              container
                              xs={12}
                              style={{
                                height: "100%",
                                position: "relative",
                              }}
                            >
                              <Grid item xs={12} className={graphTwoHeader}>
                                Distance Travelled
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                className={graphContainerHeaderTwo}
                              >
                                <Chart
                                  width={selectedWidth?.width1}
                                  height={selectedWidth?.height1}
                                  graphType={"area"}
                                  isVisible={true}
                                  units={""}
                                  isCrosshair={true}
                                  crossHairLineColor={"#712C7D90"}
                                  is4kDevice={selectedWidth?.is4kDevice}
                                  pageName={"FleetManagement"}
                                  dataPoints={[
                                    {
                                      marker: {
                                        enabled: false,
                                      },
                                      lineColor: "#712C7D90",
                                      color: "#712C7D",
                                      lineWidth: 2,
                                      fillColor: {
                                        linearGradient: [0, 0, 0, 200],
                                        stops: [
                                          [
                                            0,
                                            Highcharts.color("#712C7D")
                                              .setOpacity(0.5)
                                              .get("rgba"),
                                          ],
                                          [
                                            0.5,
                                            Highcharts.color("#712C7D")
                                              .setOpacity(0.3)
                                              .get("rgba"),
                                          ],
                                          [
                                            1,
                                            Highcharts.color(
                                              selectedWidth?.is4kDevice
                                                ? "#712C7D"
                                                : "#000000"
                                            )
                                              .setOpacity(0.05)
                                              .get("rgba"),
                                          ],
                                        ],
                                      },
                                      data: [1, 4, 3, 5, 4, 6, 8],
                                    },
                                  ]}
                                />
                              </Grid>
                              <Grid />
                            </Grid>
                          </Grid>
                          <Grid item xs={3} className={graphTwoContainer}>
                            <Grid
                              container
                              xs={12}
                              style={{
                                height: "100%",
                                position: "relative",
                              }}
                            >
                              <Grid
                                item
                                xs={12}
                                className={screenFiveGraphTitleStyle}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    columnGap: "6px",
                                  }}
                                >
                                  <div className={driveDot}></div>
                                  <div>Drive Hrs</div>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    columnGap: "6px",
                                  }}
                                >
                                  <div className={driveDotOne}></div>
                                  <div>Idle Hrs</div>
                                </div>
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                className={graphContainerHeaderThree}
                              >
                                <Chart
                                  width={selectedWidth?.width1}
                                  height={selectedWidth?.height1}
                                  isVisible={true}
                                  graphType={"spline"}
                                  units={"Hrs"}
                                  isCrosshair={true}
                                  crossHairLineColor={"#E5FAF6"}
                                  is4kDevice={selectedWidth?.is4kDevice}
                                  tooltip={"shared"}
                                  pageName={"FleetManagement"}
                                  dataPoints={[
                                    {
                                      marker: {
                                        enabled: false,
                                      },
                                      lineColor: "#73B35A",
                                      color: "#73B35A",
                                      lineWidth: 2,
                                      data: [0, 1, 6, 6, 9, 5, 5],
                                    },
                                    {
                                      marker: {
                                        enabled: false,
                                      },
                                      lineColor: "#6B70AB",
                                      color: "#6B70AB",
                                      lineWidth: 2,
                                      data: [1, 4, 3, 5, 4, 2, 8],
                                    },
                                  ]}
                                />
                              </Grid>
                              <Grid />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className={bodyLeftTopPanelMapContainer}>
                    <Map
                      markers={notificationArray}
                      setNotificationPanelActive={setNotificationPanelActive}
                      setSelectedNotification={setSelectedNotification}
                      marker={selectedNotification}
                      setTabIndex={setTabIndex}
                      currentMarker={currentMarker}
                      setCurrentMarker={setCurrentMarker}
                      setIsMarkerClicked={setIsMarkerClicked}
                      handleViewDetails={handleViewDetails}
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
                  handleViewDetails={handleViewDetails}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {showInfoDialogue && (
        <InfoDialogFleetManagement setShowInfoDialogue={setShowInfoDialogue} />
      )}
      {showInfoDialogueVideo && (
        <InfoDialogFleetVideo setShowInfoDialogue={setShowInfoDialogueVideo} />
      )}


    </>
  );
};

export default FleetManagement;
