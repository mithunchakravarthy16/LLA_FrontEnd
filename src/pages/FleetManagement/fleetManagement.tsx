/** @format */

import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import {
  CoTwoCloudIcon,
  VocCloudIcon,
  AirQualityIcon,
  PersonIcon,
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
import parkingData from "../../mockdata/fleetManagementData";
import { LiveImg } from "assets/gridViewIcons";
import Chart from "elements/Chart";
import theme from "../../theme/theme";
import useStyles from "./styles";

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
  } = useStyles(appTheme);

  const topPanelListItems: any[] = [
    {
      icon: CoTwoCloudIcon,
      value: "643ppm",
      name: "CO2 Level",
    },
    {
      icon: VocCloudIcon,
      value: "15ppm",
      name: "VOC Level",
    },
    {
      icon: AirQualityIcon,
      value: "12µg/m³",
      name: "PM2.5",
    },
    {
      icon: AirQualityIcon,
      value: "50µg/m³",
      name: "PM10",
    },
    {
      icon: PersonIcon,
      value: "200",
      name: "Wifi Users",
    },
  ];

  // Notification Data

  const [tabIndex, setTabIndex] = useState<any>(1);
  const [selectedNotification, setSelectedNotification] = useState<any>("");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [notificationPanelActive, setNotificationPanelActive] =
    useState<boolean>(false);
  const [currentMarker, setCurrentMarker] = useState<any>("");

  const dashboardArray = parkingData?.notifications?.fleetData;
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
        width: 1000,
        height: 500,
        width1: 1300,
        height1: 500,
        is4kDevice: true,
      });
    } else if (window.innerWidth < 3839) {
      setSelectedWidth({
        width: 550,
        height: 220,
        width1: 550,
        height1: 220,
        is4kDevice: true,
      });
    }
  }, []);

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
                          percent={60}
                          strokeWidth={10}
                          trailWidth={10}
                          strokeColor="#FFA626"
                          trailColor="#484D52"
                          title={"Avg Dimming Level"}
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
                                padding: "10px 10px 5px 30px",
                              }}
                            >
                              <Grid
                                item
                                xs={12}
                                style={{ height: "10%" }}
                                className={electricity}
                              >
                                Electricity Consumed
                              </Grid>
                              <Grid item xs={12} style={{ height: "90%" }}>
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
                                      units={"kWh"}
                                      isCrosshair={true}
                                      crossHairLineColor={"#004F9F90"}
                                      is4kDevice={selectedWidth?.is4kDevice}
                                      dataPoints={[
                                        {
                                          marker: {
                                            enabled: false,
                                          },
                                          lineColor: "#004F9F90",
                                          color: "#004F9F",
                                          lineWidth: 2,
                                          fillColor: {
                                            linearGradient: [0, 0, 0, 200],
                                            stops: [
                                              [
                                                0,
                                                Highcharts.color("#004F9F")
                                                  .setOpacity(0.5)
                                                  .get("rgba"),
                                              ],
                                              [
                                                0.5,
                                                Highcharts.color("#004F9F")
                                                  .setOpacity(0.3)
                                                  .get("rgba"),
                                              ],
                                              [
                                                1,
                                                Highcharts.color(
                                                  selectedWidth?.is4kDevice
                                                    ? "#004F9F"
                                                    : "#000000"
                                                )
                                                  .setOpacity(0.05)
                                                  .get("rgba"),
                                              ],
                                            ],
                                          },
                                          data: [
                                            1, 4, 3, 5, 4, 6, 8, 4, 7, 6, 7, 5,
                                            6, 4, 7, 5, 4, 2, 8, 4, 3, 4, 1, 4,
                                          ],
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
                                          64Kw
                                        </div>
                                        <div className={liveContentLabel}>
                                          CONSUMED
                                        </div>
                                      </div>
                                      <div className={liveContentStyle}>
                                        <div className={liveContentValueGreen}>
                                          50
                                        </div>
                                        <div className={liveContentLabelGreen}>
                                          <div>AQI</div>
                                          <div className={aqiCircleStyle}></div>
                                        </div>
                                      </div>
                                    </div>
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
                              <Grid item xs={12} className={graphTwoHeader}>
                                Air Quality Index
                              </Grid>
                              <Grid item xs={12} style={{ height: "90%" }}>
                                <Chart
                                  width={selectedWidth?.width1}
                                  height={selectedWidth?.height1}
                                  graphType={"areaspline"}
                                  isVisible={true}
                                  units={""}
                                  isCrosshair={true}
                                  crossHairLineColor={"#50A02890"}
                                  is4kDevice={selectedWidth?.is4kDevice}
                                  dataPoints={[
                                    {
                                      marker: {
                                        enabled: false,
                                      },
                                      lineColor: "#50A02890",
                                      color: "#50A028",
                                      lineWidth: 2,
                                      fillColor: {
                                        linearGradient: [0, 0, 0, 200],
                                        stops: [
                                          [
                                            0,
                                            Highcharts.color("#50A028")
                                              .setOpacity(0.5)
                                              .get("rgba"),
                                          ],
                                          [
                                            0.5,
                                            Highcharts.color("#50A028")
                                              .setOpacity(0.3)
                                              .get("rgba"),
                                          ],
                                          [
                                            1,
                                            Highcharts.color(
                                              selectedWidth?.is4kDevice
                                                ? "#50A028"
                                                : "#000000"
                                            )
                                              .setOpacity(0.05)
                                              .get("rgba"),
                                          ],
                                        ],
                                      },
                                      data: [
                                        1, 4, 3, 5, 4, 6, 8, 4, 7, 6, 7, 5, 6,
                                        4, 7, 5, 4, 2, 8, 4, 3, 4, 1, 4,
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
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FleetManagement;
