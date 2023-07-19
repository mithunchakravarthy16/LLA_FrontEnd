/** @format */

import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import {
  Camera,
  FireAlarm,
  Siren,
  Trolley,
  Unauthorised,
} from "../../assets/topPanelListIcons";
import useTranslation from "localization/translations";
import {
  FireDetectionIcon,
  TemperingAlaremIcon,
  TailgatingIcon,
  UnauthorizedAccessIcon,
  CameraIcon,
} from "../../assets/securityLightThemeIcons";
import theme from "../../theme/theme";
import useStyles from "./styles";
import TopPanelListItemContainer from "components/TopPanelListItemContainer";
import Map from "components/Map";
import moment from "moment";
import NotificationPanel from "components/NotificationPanel";
import {
  formatttedDashboardNotification,
  formatttedDashboardNotificationCount,
} from "../../utils/utils";
import securityData from "mockdata/securityData";
import Highcharts from "highcharts";
import Chart from "elements/Chart";

const Parking: React.FC<any> = (props) => {
  const adminPanelData = useSelector(
    (state: any) => state?.adminPanel?.getConfigData?.body
  );

  const [selectedTheme, setSelectedTheme] = useState<any>();
  const { dashboard, gridView, security } = useTranslation();
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  const PIECHART_LEGEND = [
    { background: "#C64640", name: security.intrusion },
    { background: "#F89863", name: security.fireDetection },
    { background: "#B3D2A1", name: security.temperingAlarm },
    { background: "#FDC270", name: security.unauthorisedAccess },
    { background: "#9191C1", name: security.tailgating },
  ];

  useEffect(() => {
    setSelectedTheme(adminPanelData?.appearance);
  }, [adminPanelData]);

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
    topPanelListItemStyle,
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
    pieChartLegendContainer,
    notificationPanelGrid,
    legendIdentifierContainer,
    legendColorBox,
    legendText,
    graphTitle,
  } = useStyles(appTheme);

  const topPanelListItems: any[] = [
    {
      icon: selectedTheme === "light" ? FireDetectionIcon : FireAlarm,
      value: "15",
      name: "Fire Detection",
    },
    {
      icon: selectedTheme === "light" ? TemperingAlaremIcon : Siren,
      value: "20",
      name: "Tampering Alarm",
    },
    {
      icon: selectedTheme === "light" ? UnauthorizedAccessIcon : Unauthorised,
      value: "14",
      name: "Unauthorised Access",
    },
    {
      icon: selectedTheme === "light" ? TailgatingIcon : Trolley,
      value: "15",
      name: "Tailgating",
    },
    {
      icon: selectedTheme === "light" ? CameraIcon : Camera,
      value: "05",
      name: "Camera Occlusion",
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

  const dashboardArray = securityData?.notifications?.security;
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
        width1: 700,
        height1: 480,
        is4kDevice: true,
      });
    } else if (window.innerWidth > 3071) {
      setSelectedWidth({
        width: 900,
        height: 400,
        width1: 500,
        height1: 380,
        is4kDevice: false,
        is3KDevice: true,
      });
    } else if (window.innerWidth > 2047) {
      setSelectedWidth({
        width: 600,
        height: 200,
        width1: 400,
        height1: 280,
        is4kDevice: false,
      });
    } else if (window.innerHeight > 936) {
      setSelectedWidth({
        width: 600,
        height: 200,
        width1: 250,
        height1: 250,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1791) {
      setSelectedWidth({
        width: 550,
        height: 200,
        width1: 300,
        height1: 280,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1535) {
      setSelectedWidth({
        width: 500,
        height: 200,
        width1: 250,
        height1: 280,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1439) {
      setSelectedWidth({
        width: 460,
        height: 150,
        width1: 185,
        height1: 140,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1279) {
      setSelectedWidth({
        width: 400,
        height: 150,
        width1: 185,
        height1: 140,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1151) {
      setSelectedWidth({
        width: 350,
        height: 100,
        width1: 125,
        height1: 140,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1023) {
      setSelectedWidth({
        width: 300,
        height: 100,
        width1: 125,
        height1: 140,
        is4kDevice: false,
      });
    }
  }, []);

  return (
    <>
      <Grid container className={rootContainer}>
        <Grid container className={mainSection}>
          <Grid item xs={12} alignItems="center" className={pageHeading}>
            {dashboard.security}
          </Grid>
          <Grid item xs={12} className={bodyContainer}>
            <Grid
              container
              xs={12}
              className={bodySubContainer}
              style={{ height: "93vh" }}
            >
              <Grid item xs={9} className={bodyLeftContainer}>
                <Grid container xs={12} className={bodyLeftSubContainer}>
                  <Grid
                    item
                    xs={12}
                    className={bodyLeftTopPanelContainer}
                    style={{ height: "29%" }}
                  >
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
                          percent={50}
                          strokeWidth={10}
                          trailWidth={10}
                          strokeColor="#43549A"
                          trailColor={
                            appTheme?.palette?.fleetManagementPage
                              ?.securityProgressBarBg
                          } //"#484D52"
                          title={security.issuesResolved}
                          selectedTheme={selectedTheme}
                        />
                      </Grid>
                      <Grid item xs={12} style={{ height: "70%" }}>
                        <Grid container xs={12} style={{ height: "25vh" }}>
                          <Grid item xs={6} className={graphOneContainer}>
                            <Grid
                              container
                              xs={12}
                              style={{
                                height: "100%",
                                padding: "10px 10px 5px 30px",
                              }}
                            >
                              <Grid item xs={12} style={{ height: "10%" }}>
                                <div className={graphTitle}>
                                  {security.security}
                                </div>
                              </Grid>
                              <Grid item xs={12} style={{ height: "90%" }}>
                                <Grid
                                  container
                                  xs={12}
                                  style={{ height: "100%" }}
                                >
                                  <Grid
                                    item
                                    xs={12}
                                    style={{ height: "21vh", width: "80vw" }}
                                  >
                                    <Chart
                                      // width={selectedWidth?.width}
                                      // height={selectedWidth?.height}
                                      containerProps={{
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                      }}
                                      graphType={"areaspline"}
                                      isVisible={true}
                                      units={""}
                                      isCrosshair={true}
                                      crossHairLineColor={"#73B35A90"}
                                      is4kDevice={selectedWidth?.is4kDevice}
                                      dataPoints={[
                                        {
                                          marker: {
                                            enabled: false,
                                          },
                                          lineColor: "#73B35A90",
                                          color: "#73B35A",
                                          lineWidth: 2,
                                          fillColor: {
                                            linearGradient: [0, 0, 0, 200],
                                            stops: [
                                              [
                                                0,
                                                Highcharts.color("#73B35A")
                                                  .setOpacity(0.5)
                                                  .get("rgba"),
                                              ],
                                              [
                                                0.5,
                                                Highcharts.color("#73B35A")
                                                  .setOpacity(
                                                    selectedWidth?.is4kDevice ||
                                                      selectedWidth?.is3KDevice
                                                      ? 0.3
                                                      : 0.1
                                                  )
                                                  .get("rgba"),
                                              ],
                                              [
                                                1,
                                                Highcharts.color("#73B35A")
                                                  .setOpacity(
                                                    selectedWidth?.is4kDevice ||
                                                      selectedWidth?.is3KDevice
                                                      ? 0.05
                                                      : 0.02
                                                  )
                                                  .get("rgba"),
                                              ],
                                            ],
                                          },
                                          data: [
                                            1, 4, 3, 5, 4, 2, 8, 4, 3, 4, 7, 5,
                                            1, 4, 3, 5, 4, 2, 8, 4, 3, 4, 1, 4,
                                          ],
                                        },
                                      ]}
                                    />
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={6} className={graphTwoContainer}>
                            <Grid
                              container
                              xs={12}
                              style={{
                                height: "100%",
                                padding: "10px 10px 5px 30px",
                              }}
                            >
                              <Grid item xs={12} style={{ height: "100%" }}>
                                <Grid
                                  container
                                  xs={12}
                                  style={{
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <Grid
                                    item
                                    direction="column"
                                    xs={5}
                                    style={{ height: "23vh", width: "80vw" }}
                                  >
                                    <Chart
                                      // width={selectedWidth?.width1}
                                      // height={selectedWidth?.height1}
                                      containerProps={{
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                      }}
                                      graphType={"pie"}
                                      isVisible={true}
                                      units="%"
                                      // units={"%"}
                                      // isCrosshair={true}
                                      // crossHairLineColor={"#73B35A90"}
                                      dataPoints={[
                                        {
                                          borderWidth: 0,
                                          colorByPoint: true,
                                          type: "pie",
                                          size: "100%",
                                          innerSize: "80%",
                                          showInLegend: true,
                                          // dataLabels: {
                                          //   enabled: true,
                                          //   crop: false,
                                          //   distance: "-10%",
                                          //   style: {
                                          //     fontWeight: "bold",
                                          //     fontSize: "16px",
                                          //   },
                                          //   connectorWidth: 0,
                                          // },
                                          colors: [
                                            "#C64640",
                                            "#F89863",
                                            "#B3D2A1",
                                            "#FDC270",
                                            "#9191C1",
                                          ],
                                          // data: [37, 15, 16, 17, 15],
                                          data: [
                                            {
                                              name: security.intrusion,
                                              y: 37,
                                            },
                                            {
                                              name: security.fireDetection,
                                              y: 37,
                                            },
                                            {
                                              name: security.temperingAlarm,
                                              y: 37,
                                            },
                                            {
                                              name: security.unauthorisedAccess,
                                              y: 37,
                                            },
                                            {
                                              name: security.tailgating,
                                              y: 37,
                                            },
                                          ],
                                        },
                                      ]}
                                    />
                                  </Grid>
                                  <Grid
                                    xs={7}
                                    direction="column"
                                    style={{
                                      height: "21vh",
                                      width: "80vw",
                                      paddingLeft: "5vw",
                                    }}
                                    className={pieChartLegendContainer}
                                  >
                                    {PIECHART_LEGEND.map((legend) => (
                                      <div
                                        className={legendIdentifierContainer}
                                      >
                                        <div
                                          className={legendColorBox}
                                          style={{
                                            backgroundColor: legend.background,
                                          }}
                                        ></div>
                                        <div className={legendText}>
                                          {legend.name}
                                        </div>
                                      </div>
                                    ))}
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={bodyLeftTopPanelMapContainer}
                    style={{ height: "59%" }}
                  >
                    <Map
                      mapPageName={"security"}
                      markers={dashboardDataList}
                      setNotificationPanelActive={setNotificationPanelActive}
                      setSelectedNotification={setSelectedNotification}
                      marker={selectedNotification}
                      setTabIndex={setTabIndex}
                      currentMarker={currentMarker}
                      setCurrentMarker={setCurrentMarker}
                      setIsMarkerClicked={setIsMarkerClicked}
                      selectedTheme={selectedTheme}
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
                  isMarkerClicked={isMarkerClicked}
                  setIsMarkerClicked={setIsMarkerClicked}
                  selectedTheme={selectedTheme}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Parking;
