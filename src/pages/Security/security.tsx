/** @format */

import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import {
  Camera,
  FireAlarm,
  Siren,
  Trolley,
  Unauthorised,
} from "../../assets/topPanelListIcons";
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

const PIECHART_LEGEND = [
  { background: "#C64640", name: "Intrusion" },
  { background: "#F89863", name: "Fire Detection" },
  { background: "#B3D2A1", name: "Tempering Alarm" },
  { background: "#FDC270", name: "Unauthorised Access " },
  { background: "#9191C1", name: "Tailgating" },
];

const Parking: React.FC<any> = (props) => {
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
      icon: FireAlarm,
      value: "15",
      name: "Fire Detection",
    },
    {
      icon: Siren,
      value: "20",
      name: "Tampering Alarm",
    },
    {
      icon: Unauthorised,
      value: "14",
      name: "Unauthorised Access",
    },
    {
      icon: Trolley,
      value: "15",
      name: "Tailgating",
    },
    {
      icon: Camera,
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
        width: 1200,
        height: 400,
        width1: 640,
        height1: 480,
      });
    } else if (window.innerWidth < 3839) {
      setSelectedWidth({
        width: 654,
        height: 240,
        width1: 327,
        height1: 240,
      });
    }
  }, []);

  return (
    <>
      <Grid container className={rootContainer}>
        <Grid container className={mainSection}>
          <Grid item xs={12} alignItems="center" className={pageHeading}>
            SECURITY
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
                          percent={50}
                          strokeWidth={10}
                          trailWidth={10}
                          strokeColor="#43549A"
                          trailColor="#484D52"
                          title={"Issues Resolved"}
                        />
                      </Grid>
                      <Grid item xs={6} className={graphOneContainer}>
                        <div className={graphTitle}>Security</div>
                        <Chart
                          width={selectedWidth?.width}
                          height={selectedWidth?.height}
                          graphType={"areaspline"}
                          isVisible={true}
                          units={"%"}
                          isCrosshair={true}
                          crossHairLineColor={"#73B35A90"}
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
                                      .setOpacity(0.9)
                                      .get("rgba"),
                                  ],
                                  [
                                    0.8,
                                    Highcharts.color(
                                      appTheme?.palette
                                        ?.gridViewComponentGraphsColor
                                        ?.highChartsGradient
                                    )
                                      .setOpacity(0)
                                      .get("rgba"),
                                  ],
                                ],
                              },
                              data: [
                                1, 4, 3, 5, 4, 2, 8, 4, 3, 4, 7, 5, 1, 4, 3, 5,
                                4, 2, 8, 4, 3, 4, 1, 4,
                              ],
                            },
                          ]}
                        />
                      </Grid>
                      <Grid item xs={6} className={graphTwoContainer}>
                        <Chart
                          width={selectedWidth?.width1}
                          height={selectedWidth?.height1}
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
                                  name: "Intrusion",
                                  y: 37,
                                },
                                {
                                  name: "Fire Detection",
                                  y: 37,
                                },
                                {
                                  name: "Tampering Alarm",
                                  y: 37,
                                },
                                {
                                  name: "Unauthorised Access",
                                  y: 37,
                                },
                                {
                                  name: "Tailgating",
                                  y: 37,
                                },
                              ],
                            },
                          ]}
                        />
                        <Grid
                          direction="column"
                          className={pieChartLegendContainer}
                        >
                          {PIECHART_LEGEND.map((legend) => (
                            <div className={legendIdentifierContainer}>
                              <div
                                className={legendColorBox}
                                style={{ backgroundColor: legend.background }}
                              ></div>
                              <div className={legendText}>{legend.name}</div>
                            </div>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className={bodyLeftTopPanelMapContainer}>
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
                  notificationPageName={"parking"}
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
