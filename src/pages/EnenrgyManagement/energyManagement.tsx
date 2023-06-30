/** @format */

import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import {
  PowerConsumtionIcon,
  TemperatureIcon,
  WaterConsumption,
  IncomeIcon,
  SubtractIcon,
} from "../../assets/topPanelListIcons";
import theme from "../../theme/theme";
import useStyles from "./styles";
import TopPanelListItemContainer from "components/TopPanelListItemContainer";
import Map from "components/Map";
import moment from "moment";
import Highcharts from "highcharts";
import Chart from "elements/Chart";
import NotificationPanel from "components/NotificationPanel";
import {
  formatttedDashboardNotification,
  formatttedDashboardNotificationCount,
} from "../../utils/utils";
import energyManagementData from "mockdata/energyManagementData";

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
  } = useStyles(appTheme);

  const topPanelListItems: any[] = [
    {
      icon: PowerConsumtionIcon,
      value: "200kWh",
      name: "Electricity Consumed",
    },
    {
      icon: TemperatureIcon,
      value: "100kWh",
      name: "HVAC",
    },
    {
      icon: WaterConsumption,
      value: "1480KL",
      name: "Water Consumption",
    },
    {
      icon: IncomeIcon,
      value: "500$",
      name: "Cost Saved",
    },
    {
      icon: SubtractIcon,
      value: "50Kg",
      name: "CO2 Emission",
    },
  ];

  // Notification Data

  const [tabIndex, setTabIndex] = useState<any>(1);
  const [selectedNotification, setSelectedNotification] = useState<any>("");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [notificationPanelActive, setNotificationPanelActive] =
    useState<boolean>(false);
  const [currentMarker, setCurrentMarker] = useState<any>("");

  const dashboardArray = energyManagementData?.notifications?.energyManagement;
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
    } else if (window.innerWidth > 3071) {
      setSelectedWidth({
        width: 900,
        height: 400,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 2047) {
      setSelectedWidth({
        width: 600,
        height: 230,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1791) {
      setSelectedWidth({
        width: 580,
        height: 220,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1535) {
      setSelectedWidth({
        width: 480,
        height: 200,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1359) {
      setSelectedWidth({
        width: 400,
        height: 160,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1343) {
      setSelectedWidth({
        width: 430,
        height: 180,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1279) {
      setSelectedWidth({
        width: 390,
        height: 160,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1151) {
      setSelectedWidth({
        width: 350,
        height: 140,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1023) {
      setSelectedWidth({
        width: 300,
        height: 90,
        is4kDevice: false,
      });
    }
  }, []);

  return (
    <>
      <Grid container className={rootContainer}>
        <Grid container className={mainSection}>
          <Grid item xs={12} alignItems="center" className={pageHeading}>
            ENERGY MANAGEMENT
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
                          percent={30}
                          strokeWidth={10}
                          trailWidth={10}
                          strokeColor="#92C07E"
                          trailColor="#484D52"
                          title={"Energy Savings "}
                        />
                      </Grid>
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
                            className={screenFiveGraphTitleStyle}
                            style={{ height: "10%" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                columnGap: "6px",
                              }}
                            >
                              <div
                                style={{
                                  width: "18px",
                                  height: "18px",
                                  borderRadius: "50%",
                                  backgroundColor: "#BD8C52",
                                  marginRight: 6,
                                }}
                              ></div>
                              <div>Electricity Consumption </div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                columnGap: "6px",
                              }}
                            >
                              <div
                                style={{
                                  width: "18px",
                                  height: "18px",
                                  borderRadius: "50%",
                                  backgroundColor: "#5F3B6C",
                                  marginRight: 6,
                                }}
                              ></div>
                              <div>HVAC</div>
                            </div>
                          </Grid>
                          <Grid item xs={12} style={{ height: "90%" }}>
                            <Chart
                              width={selectedWidth?.width}
                              height={selectedWidth?.height}
                              isVisible={true}
                              graphType={"spline"}
                              units={"kWh"}
                              isCrosshair={true}
                              crossHairLineColor={"#E5FAF6"}
                              is4kDevice={selectedWidth?.is4kDevice}
                              tooltip={"shared"}
                              dataPoints={[
                                {
                                  marker: {
                                    enabled: false,
                                  },
                                  lineColor: "#BD8C52",
                                  color: "#BD8C52",
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
                                  lineColor: "#5F3B6C",
                                  color: "#5F3B6C",
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
                          style={{
                            height: "100%",
                            padding: "10px 10px 5px 30px",
                          }}
                        >
                          <Grid item xs={12} className={graphTwoHeader}>
                            Water Consumption
                          </Grid>
                          <Grid item xs={12} style={{ height: "90%" }}>
                            <Chart
                              width={selectedWidth?.width}
                              height={selectedWidth?.height}
                              graphType={"spline"}
                              isVisible={true}
                              units={"KL"}
                              isCrosshair={true}
                              crossHairLineColor={"#47A899"}
                              is4kDevice={selectedWidth?.is4kDevice}
                              dataPoints={[
                                {
                                  marker: {
                                    enabled: false,
                                  },
                                  lineColor: "#47A89990",
                                  color: "#47A899",
                                  lineWidth: 2,
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

export default Parking;
