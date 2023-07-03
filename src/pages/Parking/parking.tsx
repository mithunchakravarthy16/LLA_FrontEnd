/** @format */

import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import {
  CoTwoCloudIcon,
  VocCloudIcon,
  AirQualityIcon,
  PersonIcon,
  ClockIcon,
  DisabilityIcon,
  ElectricVehicleIcon,
  GeneralParkingIcon,
  RotationIcon,
  VipParkingIcon,
} from "../../assets/topPanelListIcons";
import { LiveImg } from "assets/gridViewIcons";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Chart from "elements/Chart";
import TopPanelListItemContainer from "components/TopPanelListItemContainer";
import Tabs from "elements/Tabs";
import Map from "components/Map";
import moment from "moment";
import NotificationPanel from "components/NotificationPanel";
import {
  formatttedDashboardNotification,
  formatttedDashboardNotificationCount,
} from "../../utils/utils";
import parkingData from "mockdata/parkingData";
import ParkingLot1 from "../../assets/parkingLot/Parking_Lot1.svg";
import theme from "../../theme/theme";
import useStyles from "./styles";
import HC_rounded from "highcharts-rounded-corners";

HC_rounded(Highcharts);

const Parking: React.FC<any> = (props) => {
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [tabIndex, setTabIndex] = useState<any>(1);
  const [selectedNotification, setSelectedNotification] = useState<any>("");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [notificationPanelActive, setNotificationPanelActive] =
    useState<boolean>(false);
  const [currentMarker, setCurrentMarker] = useState<any>("");
  const [parkingLotSelectionActive, setParkingLotSelectionActive] =
    useState<boolean>(false);
  const [parkingLotIndex, setParkingLotIndex] = useState<any>(0);

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
    mapFilterStyle,
    customNotificationTabs,
    lotSelectionIconStyle,
    lotImageStyle,

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
    lotSelectionIconStyleClose
  } = useStyles({
    ...appTheme,
    parkingLotSelectionActive: parkingLotSelectionActive,
    parkingLotIndex: parkingLotIndex,
  });

  const topPanelListItems: any[] = [
    {
      icon: GeneralParkingIcon,
      value: "220",
      unit: "/300",
      name: "General",
    },
    {
      icon: VipParkingIcon,
      value: "75",
      unit: "/130",
      name: "VIP",
    },
    {
      icon: ElectricVehicleIcon,
      value: "50",
      unit: "/100",
      name: "Electric",
    },
    {
      icon: DisabilityIcon,
      value: "25",
      unit: "/68",
      name: "Accessbility",
    },
    {
      icon: RotationIcon,
      value: "1.5",
      name: "Rotation Index",
    },
    {
      icon: ClockIcon,
      value: "10",
      unit: "Hrs",
      name: "Hours Saved",
    },
  ];

  const tabsList = [
    {
      name: "All",
      val: 0,
    },
    {
      name: "Lot 1",
      val: 1,
    },
    {
      name: "Lot 2",
      val: 2,
    },
    {
      name: "Lot 3",
      val: 3,
    },
    {
      name: "Lot 4",
      val: 4,
    },
  ];

  // Notification Data

  const dashboardArray = parkingData?.notifications?.parking;
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

  const handleParkingLot = (index: number) => {
    setParkingLotIndex(index);
    // setParkingLotSelectionActive(!parkingLotSelectionActive);
    // setTabIndex(index);
    // setSearchOpen(false);
    // setSelectedNotification("");
    // setSelectedRefId("");
  };

  const [selectedParkingLot, setSelectedParkingLot] = useState<any>(
    tabsList[parkingLotIndex]?.name
  );

  useEffect(() => {
    setSelectedParkingLot(tabsList[parkingLotIndex]?.name);
  }, [parkingLotIndex]);

  const handleLotSelction = () => {
    setParkingLotSelectionActive(!parkingLotSelectionActive);
  };

  const [selectedWidth, setSelectedWidth] = useState<any>();

  useEffect(() => {
    if (window.innerWidth > 3839) {
      setSelectedWidth({
        width: 900,
        height: 500,
        width1: 1200,
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
      });
    } else if (window.innerWidth > 2559) {
      setSelectedWidth({
        width: 700,
        height: 200,
        width1: 700,
        height1: 230,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 2047) {
      setSelectedWidth({
        width: 600,
        height: 200,
        width1: 600,
        height1: 200,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1791) {
      setSelectedWidth({
        width: 550,
        height: 200,
        width1: 550,
        height1: 250,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1535) {
      setSelectedWidth({
        width: 500,
        height: 200,
        width1: 500,
        height1: 250,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1439) {
      setSelectedWidth({
        width: 460,
        height: 150,
        width1: 460,
        height1: 200,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1279) {
      setSelectedWidth({
        width: 400,
        height: 150,
        width1: 400,
        height1: 180,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1151) {
      setSelectedWidth({
        width: 350,
        height: 100,
        width1: 350,
        height1: 140,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1023) {
      setSelectedWidth({
        width: 300,
        height: 100,
        width1: 300,
        height1: 120,
        is4kDevice: false,
      });
    }
  }, []);

  let monthName: any = new Array(
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  );
  let currentDate: any = new Date();

  let result: any = [];
  currentDate.setDate(1);
  for (let i = 0; i <= 11; i++) {
    result.push(
      monthName[currentDate.getMonth()]
      // +
      //   " " +
      //   currentDate.getFullYear().toString().substr(-2)
    );
    currentDate.setMonth(currentDate.getMonth() - 1);
  }
  const xAxisNewValue: any = result.reverse();
  const xAxisValueYear: any = xAxisNewValue.slice(
    xAxisNewValue.length - 6,
    xAxisNewValue.length
  );

  return (
    <>
      <Grid container className={rootContainer}>
        <Grid container className={mainSection}>
          <Grid item xs={12} alignItems="center" className={pageHeading}>
            PARKING
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
                          percent={62}
                          strokeWidth={10}
                          trailWidth={10}
                          strokeColor="#FABD96"
                          trailColor="#484D52"
                          title={"Occupancy"}
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
                                Occupancy
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
                                      units={"%"}
                                      isCrosshair={true}
                                      crossHairLineColor={"#954EA190"}
                                      is4kDevice={selectedWidth?.is4kDevice}
                                      dataPoints={[
                                        {
                                          marker: {
                                            enabled: false,
                                          },
                                          lineColor: "#954EA1",
                                          color: "#954EA1",
                                          lineWidth: 2,
                                          fillColor: {
                                            linearGradient: [0, 0, 0, 200],
                                            stops: [
                                              [
                                                0,
                                                Highcharts.color("#954EA1")
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
                                          228
                                        </div>
                                        <div className={liveContentLabel}>
                                          Available
                                        </div>
                                      </div>
                                      <div className={liveContentStyle}>
                                        <div className={liveContentValue}>
                                          370
                                        </div>
                                        <div className={liveContentLabel}>
                                          Occupied
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
                              <Grid
                                item
                                xs={12}
                                style={{ height: "10%" }}
                                className={electricity}
                              >
                                Parking Violation
                              </Grid>
                              <Grid item xs={12} style={{ height: "90%" }}>
                                <Grid
                                  container
                                  xs={12}
                                  style={{ height: "100%" }}
                                >
                                  <Grid item xs={12} style={{ height: "100%" }}>
                                    <HighchartsReact
                                      highcharts={Highcharts}
                                      options={{
                                        chart: {
                                          type: "column",
                                          plotBackgroundColor: "transparent",
                                          backgroundColor: "transparent",
                                          marginTop: 0,
                                          marginLeft: 0,
                                          marginRight: 0,
                                          // marginBottom: 10,
                                          height: selectedWidth?.height1,
                                          width: selectedWidth?.width1,
                                          reflow: true,
                                          borderRadius: 10,
                                        },

                                        title: false,
                                        legend: false,
                                        credits: false,
                                        tooltip: {
                                          shared: false,
                                          useHTML: true,
                                          backgroundColor: "#57585A",
                                          borderColor: "#57585A",
                                          padding: 4,
                                          className: "tooltipStyle",
                                          style: {
                                            color: "#fff",
                                            fontWeight: "bold",
                                            fontSize : selectedWidth?.is4kDevice ? "40px" : "14px",
                                            borderRadius : selectedWidth?.is4kDevice ? "10px" : "5px",
                                          },
                                          formatter: function (
                                            this: Highcharts.TooltipFormatterContextObject
                                          ): string | boolean {
                                            if (true) {
                                              const value: any = this.y;
                                              return ` <table>
                                          <tr>
                                            <td style="text-align: center;">
                                                ${`${value}%`}
                                            </td>
                                          </tr>
                                        </table>`;
                                            }
                                          },
                                        },
                                        plotOptions: {
                                          column: {
                                            pointWidth: 25,
                                            borderRadiusTopLeft: 20,
                                            borderRadiusTopRight: 20,
                                            borderRadiusBottomLeft: 20,
                                            borderRadiusBottomRight: 20,
                                          },
                                        },

                                        xAxis: {
                                          categories: xAxisValueYear,
                                          labels: {
                                            useHTML: true,
                                            style: {
                                              fontSize: selectedWidth?.is4kDevice ? "30px" : "12px",
                                              color: "white",
                                            },
                                          },
                                          gridLineWidth: 0,
                                          lineWidth: 0,
                                          minorGridLineWidth: 0,
                                          minorTickLength: 0,
                                          tickLength: 0,
                                        },

                                        series: [
                                          {
                                            color: "#D1705F",
                                            borderWidth: 0,
                                            data: [5, 3, 4, 2, 2, 3],
                                          },
                                        ],
                                        yAxis: {
                                          min: 0,
                                          gridLineWidth: 0,
                                          lineWidth: 0,
                                          minorGridLineWidth: 0,
                                          minorTickLength: 0,
                                          tickLength: 0,
                                        },
                                      }}
                                    />
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className={bodyLeftTopPanelMapContainer}>
                    {!parkingLotSelectionActive ? (
                      <div
                        className={lotSelectionIconStyle}
                        onClick={handleLotSelction}
                      >
                        {selectedParkingLot}
                      </div>
                    ) : (
                      <div className={mapFilterStyle}>
                        <Tabs
                          initialIndex={parkingLotIndex}
                          tabsList={tabsList}
                          handleTabs={handleParkingLot}
                          dashboardNotificationClassName={
                            customNotificationTabs
                          }
                        />
                        <div
                          className={lotSelectionIconStyleClose}
                          onClick={handleLotSelction}
                        >
                          X
                        </div>
                      </div>
                    )}
                    {parkingLotIndex === 0 ? (
                      <Map
                        markers={dashboardDataList}
                        setNotificationPanelActive={setNotificationPanelActive}
                        setSelectedNotification={setSelectedNotification}
                        marker={selectedNotification}
                        setTabIndex={setTabIndex}
                        currentMarker={currentMarker}
                        setCurrentMarker={setCurrentMarker}
                      />
                    ) : (
                      <div className={lotImageStyle}>
                        <img
                          src={ParkingLot1}
                          alt="ParkingLot1"
                          style={{ width: "95%" }}
                        />
                      </div>
                    )}
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
                  setParkingLotIndex={setParkingLotIndex}
                  setParkingLotSelectionActive={setParkingLotSelectionActive}
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
