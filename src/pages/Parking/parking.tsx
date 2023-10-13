/** @format */

import { useState, useEffect, useMemo } from "react";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import {
  ClockIcon,
  DisabilityIcon,
  ElectricVehicleIcon,
  GeneralParkingIcon,
  RotationIcon,
  VipParkingIcon,
  LightParkingClockIcon,
  LightParkingDisabilityIcon,
  LightParkingElectricVehicleIcon,
  LightParkingGeneralIcon,
  LightParkingVipIcon,
  LightParkingRotationIcon,
} from "../../assets/topPanelListIcons";
import useTranslation from "localization/translations";
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
  formatttedParkingNotification,
  formatttedDashboardNotificationCount,
} from "../../utils/utils";
import parkingData from "mockdata/parkingData";
import ParkingLot1 from "../../assets/parkingLot/Parking_Lot1.svg";
import LightThemeParkingLot1 from "../../assets/parkingLot/LightThemeParkingLot1.svg";
import theme from "../../theme/theme";
import useStyles from "./styles";
import HC_rounded from "highcharts-rounded-corners";
import ParkingSlotContainer from "components/ParkingSlotContainer";
import GlobeIconActive from "../../assets/globeCircleIcon.svg";
import Loader from "elements/Loader";
import { getGoogleMapApi } from "redux/actions/googleMapApiKeyAction";

HC_rounded(Highcharts);

const Parking: React.FC<any> = (props) => {
  const dispatch = useDispatch();
  const { mapType, setMapType } = props;
  const adminPanelData = useSelector(
    (state: any) => state?.adminPanel?.getConfigData?.data?.body
  );

  const { dashboard, gridView, parking } = useTranslation();
  const [selectedTheme, setSelectedTheme] = useState<any>();
  const [appTheme, setAppTheme] = useState<any>();
  const [tabIndex, setTabIndex] = useState<any>(1);
  const [selectedNotification, setSelectedNotification] = useState<any>("");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [notificationPanelActive, setNotificationPanelActive] =
    useState<boolean>(false);
  const [currentMarker, setCurrentMarker] = useState<any>("");
  const [parkingLotSelectionActive, setParkingLotSelectionActive] =
    useState<boolean>(false);
  const [parkingLotIndex, setParkingLotIndex] = useState<any>(0);
  const [isMarkerClicked, setIsMarkerClicked] = useState<boolean>(false);
  const [assetLiveMarker, setAssetLiveMarker] = useState<any>("");

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
    lotSelectionIconStyleClose,
    globeIconSection,
  } = useStyles({
    ...appTheme,
    parkingLotSelectionActive: parkingLotSelectionActive,
    parkingLotIndex: parkingLotIndex,
  });
  const topPanelListItems: any[] = [
    {
      icon:
        selectedTheme === "light"
          ? LightParkingGeneralIcon
          : GeneralParkingIcon,
      value: "220",
      unit: "/300",
      name: parking.general,
    },
    {
      icon: selectedTheme === "light" ? LightParkingVipIcon : VipParkingIcon,
      value: "75",
      unit: "/130",
      name: parking.vip,
    },
    {
      icon:
        selectedTheme === "light"
          ? LightParkingElectricVehicleIcon
          : ElectricVehicleIcon,
      value: "50",
      unit: "/100",
      name: parking.electric,
    },
    {
      icon:
        selectedTheme === "light" ? LightParkingDisabilityIcon : DisabilityIcon,
      value: "25",
      unit: "/68",
      name: parking.accessbility,
    },
    {
      icon: selectedTheme === "light" ? LightParkingRotationIcon : RotationIcon,
      value: "1.5",
      name: parking.rotationIndex,
    },
    {
      icon: selectedTheme === "light" ? LightParkingClockIcon : ClockIcon,
      value: "10",
      unit: "Hrs",
      name: parking.hoursSaved,
    },
  ];

  const tabsList = [
    {
      name: parking.all,
      val: 0,
    },
    {
      name: `${parking.lot} 1`,
      val: 1,
    },
    {
      name: `${parking.lot} 2`,
      val: 2,
    },
    {
      name: `${parking.lot} 3`,
      val: 3,
    },
    {
      name: `${parking.lot} 4`,
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
    formatttedParkingNotification(dashboardDataList, tabIndex)
  );

  const [dashboardData, setDashboardData] = useState<any>(
    formatttedParkingNotification(dashboardDataList, tabIndex)
  );

  const [notificationCount, setNotificationCount] = useState<any>(
    formatttedDashboardNotificationCount(dashboardDataList)
  );

  useEffect(() => {
    setDashboardData(
      formatttedParkingNotification(dashboardDataList, tabIndex)
    );
    setSearchValue(formatttedParkingNotification(dashboardDataList, tabIndex));
  }, [tabIndex]);

  useEffect(() => {
    setNotificationCount(
      formatttedDashboardNotificationCount(dashboardDataList)
    );
  }, [dashboardData]);

  const handleParkingLot = (index: number) => {
    setParkingLotIndex(index);
    setParkingLotSelectionActive(false);
    setMapDefaultView(true);
  };

  const [selectedParkingLot, setSelectedParkingLot] = useState<any>(
    tabsList[parkingLotIndex]?.name
  );

  useEffect(() => {
    setSelectedParkingLot(tabsList[parkingLotIndex]?.name);
  }, [parkingLotIndex]);

  const handleLotSelction = () => {
    setParkingLotSelectionActive(true);
    setSelectedNotification("");
    setSearchOpen(false);
    setMapDefaultView(true);
  };

  const handleLotSelctionCloseIcon = () => {
    setParkingLotSelectionActive(false);
    setMapDefaultView(true);
  };

  const [selectedWidth, setSelectedWidth] = useState<any>();
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    if (window.innerWidth > 3839) {
      setSelectedWidth({
        width: 900,
        height: 500,
        width1: 1300,
        height1: 480,
        width2: 50,
        is4kDevice: true,
      });
    } else if (window.innerWidth > 3071) {
      setSelectedWidth({
        width: 900,
        height: 400,
        width1: 1000,
        height1: 480,
        width2: 50,
        is4kDevice: false,
        is3KDevice: true,
      });
    } else if (window.innerWidth > 2559) {
      setSelectedWidth({
        width: 700,
        height: 200,
        width1: 840,
        height1: 230,
        width2: 35,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 2047) {
      setSelectedWidth({
        width: 600,
        height: 250,
        width1: 700,
        height1: 250,
        width2: 30,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1919) {
      setSelectedWidth({
        width: 500,
        height: 200,
        width1: 600,
        height1: 200,
        width2: 30,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1791) {
      setSelectedWidth({
        width: 550,
        height: 250,
        width1: 600,
        height1: 250,
        width2: 25,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1679) {
      setSelectedWidth({
        width: 500,
        height: 250,
        width1: 500,
        height1: 230,
        width2: 25,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1535) {
      setSelectedWidth({
        width: 500,
        height: 200,
        width1: 500,
        height1: 200,
        width2: 25,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1439) {
      setSelectedWidth({
        width: 460,
        height: 150,
        width1: 460,
        height1: 200,
        width2: 25,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1399) {
      setSelectedWidth({
        width: 380,
        height: 150,
        width1: 380,
        height1: 200,
        width2: 25,
        is4kDevice: false,
      });
    } else if (window.innerHeight > 599) {
      setSelectedWidth({
        width: 300,
        height: 100,
        width1: 400,
        height1: 120,
        width2: 15,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1279) {
      setSelectedWidth({
        width: 400,
        height: 150,
        width1: 400,
        height1: 180,
        width2: 25,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1151) {
      setSelectedWidth({
        width: 350,
        height: 100,
        width1: 350,
        height1: 140,
        width2: 15,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1023) {
      setSelectedWidth({
        width: 300,
        height: 100,
        width1: 300,
        height1: 120,
        width2: 15,
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

  const [selectedValue, setSelectedValue] = useState<any>("");

  const handleSelect = (val: any) => {
    setSelectedValue(val);
  };

  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDataLoaded(!isDataLoaded);
    }, 500);
  }, []);
  const [isDataLoadedLotImg, setIsDataLoadedLotImg] = useState<boolean>(false);
  const [isDataLoadedLotOverAll, setIsDataLoadedLotOverAll] =
    useState<boolean>(false);

  useEffect(() => {
    setIsDataLoadedLotOverAll(false);
    setIsDataLoadedLotImg(false);
    setTimeout(() => {
      setIsDataLoadedLotOverAll(true);
    }, 500);
  }, [parkingLotIndex]);

  const loaderAdminGetConfigData = useSelector(
    (state: any) => state?.adminPanel?.loadingGetConfigData
  );

  const [listSelectedMarker, setListSelectedMarker] = useState<any>("");
  const [selectedNotificationItem, setSelectedNotificationItem] =
    useState<any>("");

  const [liveMarkerList, setLiveMarkerList] = useState<any>(dashboardDataList);

  const [mapDefaultView, setMapDefaultView] = useState<boolean>(true);

  const onHandleDefaultView = () => {
    setMapDefaultView(true);
    setListSelectedMarker("");
    setAssetLiveMarker("");
    setSearchOpen(false);
    setParkingLotSelectionActive(false);
    setParkingLotIndex(0);
    setSelectedNotification("");
    setSelectedNotificationItem("")
  };

  //Google Map Api Key Data fetching start here
useEffect(()=>{
  let assetLiveDataPayload: any = {};
  dispatch(getGoogleMapApi(assetLiveDataPayload));
},[])

  const googleMapApiKeyData = useSelector(
    (state: any) => state?.googleMapApiKey?.googleMapApiKeyData
  );

 //Google Map Api Key Data fetching end here 

  const parkingMapUseMemo = useMemo(() => {
    return (
      <Map
      googleMapsApiKeyResponse={googleMapApiKeyData}
        mapType={mapType}
        setMapType={setMapType}
        markers={dashboardDataList}
        setNotificationPanelActive={setNotificationPanelActive}
        setSelectedNotification={setSelectedNotification}
        marker={selectedNotification}
        selectedNotification={selectedNotification}
        setTabIndex={setTabIndex}
        currentMarker={currentMarker}
        setCurrentMarker={setCurrentMarker}
        setIsMarkerClicked={setIsMarkerClicked}
        mapPageName={"parking"}
        selectedTheme={selectedTheme}
        setMap={setMap}
        map={map}
        liveMarkerList={liveMarkerList}
        setAssetLiveMarker={setAssetLiveMarker}
        listSelectedMarker={listSelectedMarker}
        setListSelectedMarker={setListSelectedMarker}
        selectedNotificationItem={selectedNotificationItem}
        setSelectedNotificationItem={setSelectedNotificationItem}
        mapDefaultView={mapDefaultView}
        setMapDefaultView={setMapDefaultView}
      />
    );
  }, [
    mapType,
    // dashboardDataList,
    selectedNotification,
    currentMarker,
    selectedTheme,
    map,
    liveMarkerList,
    listSelectedMarker,
    selectedNotificationItem,
    mapDefaultView,
    assetLiveMarker,
    googleMapApiKeyData
  ]);



  return (
    <>
      {isDataLoaded && googleMapApiKeyData ? (
        <Grid container className={rootContainer}>
          <Grid container className={mainSection}>
            <Grid item xs={12} alignItems="center" className={pageHeading}>
              {dashboard.parking}
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
                        style={{ height: "100%" }}
                      >
                        <Grid
                          item
                          xs={12}
                          className={bodyLeftTopPanelListContainer}
                          // style={{height : "30%"}}
                        >
                          <TopPanelListItemContainer
                            topPanelListItems={topPanelListItems}
                            percent={62}
                            strokeWidth={10}
                            trailWidth={10}
                            strokeColor="#FABD96"
                            // trailColor="#484D52"
                            trailColor={
                              appTheme?.palette?.parkingPage?.progressTrailColor
                            }
                            title={gridView.occupancy}
                            selectedTheme={selectedTheme}
                            selectedValue={selectedValue}
                            handleSelect={handleSelect}
                          />
                        </Grid>
                        <Grid item xs={12} style={{ height: "75%" }}>
                          <Grid container xs={12} style={{ height: "25vh" }}>
                            <Grid item xs={6} className={graphOneContainer}>
                              <Grid
                                container
                                xs={12}
                                style={{
                                  height: "100%",
                                  padding: "10px 10px 5px 20px",
                                }}
                              >
                                <Grid
                                  item
                                  xs={12}
                                  style={{ height: "10%" }}
                                  className={electricity}
                                >
                                  {gridView.occupancy}
                                </Grid>
                                <Grid item xs={12} style={{ height: "90%" }}>
                                  <Grid
                                    container
                                    xs={12}
                                    style={{ height: "100%" }}
                                  >
                                    <Grid
                                      item
                                      xs={9}
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
                                        units={"%"}
                                        isCrosshair={true}
                                        crossHairLineColor={"#954EA190"}
                                        is4kDevice={selectedWidth?.is4kDevice}
                                        dataPoints={[
                                          {
                                            marker: {
                                              enabled: false,
                                            },
                                            lineColor:
                                              selectedTheme === "light"
                                                ? "#55A917"
                                                : "#954EA1",
                                            color:
                                              selectedTheme === "light"
                                                ? "#55A917"
                                                : "#954EA1",
                                            lineWidth:
                                              selectedWidth?.is4kDevice ||
                                              selectedWidth?.is3KDevice
                                                ? 4
                                                : 2,
                                            fillColor: {
                                              linearGradient: [0, 0, 0, 200],
                                              stops: [
                                                [
                                                  0,
                                                  Highcharts.color(
                                                    selectedTheme === "light"
                                                      ? "#55A917"
                                                      : "#954EA1"
                                                  )
                                                    .setOpacity(
                                                      selectedWidth?.is4kDevice ||
                                                        selectedWidth?.is3KDevice
                                                        ? selectedTheme ===
                                                          "light"
                                                          ? 2
                                                          : 0.5
                                                        : selectedTheme ===
                                                          "light"
                                                        ? 0.9
                                                        : 0.5
                                                    )
                                                    .get("rgba"),
                                                ],
                                                [
                                                  0.5,
                                                  Highcharts.color(
                                                    selectedTheme === "light"
                                                      ? "#55A917"
                                                      : "#954EA1"
                                                  )
                                                    .setOpacity(
                                                      selectedWidth?.is4kDevice ||
                                                        selectedWidth?.is3KDevice
                                                        ? selectedTheme ===
                                                          "light"
                                                          ? 0.5
                                                          : 0.3
                                                        : selectedTheme ===
                                                          "light"
                                                        ? 0.3
                                                        : 0.2
                                                    )
                                                    .get("rgba"),
                                                ],
                                                [
                                                  1,
                                                  Highcharts.color(
                                                    selectedTheme === "light"
                                                      ? "#55A917"
                                                      : "#954EA1"
                                                  )
                                                    .setOpacity(
                                                      selectedWidth?.is4kDevice ||
                                                        selectedWidth?.is3KDevice
                                                        ? selectedTheme ===
                                                          "light"
                                                          ? 0.15
                                                          : 0.06
                                                        : 0.02
                                                    )
                                                    .get("rgba"),
                                                ],
                                              ],
                                            },
                                            data: [
                                              1, 4, 3, 5, 4, 6, 8, 4, 7, 6, 7,
                                              5, 6, 4, 7, 5, 4, 2, 8, 4, 3, 4,
                                              1, 4,
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
                                              selectedWidth?.is4kDevice
                                                ? 109
                                                : 50
                                            }
                                            height={
                                              selectedWidth?.is4kDevice
                                                ? 49
                                                : 30
                                            }
                                            src={LiveImg}
                                          />
                                        </div>
                                        <div className={liveContentLeftStyle}>
                                          <div className={liveContentValue}>
                                            228
                                          </div>
                                          <div className={liveContentLabel}>
                                            {dashboard.available}
                                          </div>
                                        </div>
                                        <div className={liveContentStyle}>
                                          <div className={liveContentValue}>
                                            370
                                          </div>
                                          <div className={liveContentLabel}>
                                            {dashboard.occupied}
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
                                  padding: "10px 10px 5px 20px",
                                }}
                              >
                                <Grid
                                  item
                                  xs={12}
                                  style={{ height: "10%" }}
                                  className={electricity}
                                >
                                  {parking && parking?.parkingViolation}
                                </Grid>
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
                                      <HighchartsReact
                                        highcharts={Highcharts}
                                        containerProps={{
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                        }}
                                        options={{
                                          chart: {
                                            type: "column",
                                            plotBackgroundColor: "transparent",
                                            backgroundColor: "transparent",
                                            marginTop: 0,
                                            marginLeft: 0,
                                            marginRight: 0,
                                            // marginBottom: 10,
                                            // height: selectedWidth?.height1,
                                            // width: selectedWidth?.width1,
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
                                              fontSize: "0.7vw",
                                              borderRadius:
                                                selectedWidth?.is4kDevice
                                                  ? "10px"
                                                  : "5px",
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
                                              pointWidth: selectedWidth?.width2,
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
                                                fontSize: "0.7vw",
                                                color:
                                                  appTheme?.palette?.chart
                                                    ?.xAxisTextColor,
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
                    <Grid
                      item
                      xs={12}
                      className={bodyLeftTopPanelMapContainer}
                      style={{ height: "59%" }}
                    >
                      <ParkingSlotContainer
                        parkingLotSelectionActive={parkingLotSelectionActive}
                        parkingLotIndex={parkingLotIndex}
                        handleLotSelction={handleLotSelction}
                        selectedParkingLot={selectedParkingLot}
                        handleParkingLot={handleParkingLot}
                        tabsList={tabsList}
                        handleLotSelctionCloseIcon={handleLotSelctionCloseIcon}
                        selectedTheme={selectedTheme}
                      />
                      <img
                        src={GlobeIconActive}
                        alt="GlobeIcon Icon"
                        onClick={onHandleDefaultView}
                        className={globeIconSection}
                      />

                      {isDataLoadedLotOverAll ? (
                        parkingLotIndex === 0 ? (
                          parkingMapUseMemo
                        ) : (
                          // </Grid>
                          // true ?
                          <div
                            className={lotImageStyle}
                            style={{ position: "relative" }}
                          >
                            {!isDataLoadedLotImg && (
                              <div
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  right: 0,
                                  left: 0,
                                  bottom: 0,
                                  background: "#fff",
                                }}
                              >
                                <Loader isHundredVh={false} />
                              </div>
                            )}
                            <img
                              onLoad={() => setIsDataLoadedLotImg(true)}
                              src={
                                selectedTheme === "light"
                                  ? LightThemeParkingLot1
                                  : ParkingLot1
                              }
                              alt="ParkingLot1"
                              style={{ width: "95%" }}
                            />
                          </div>
                        )
                      ) : (
                        <Loader isHundredVh={false} />
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={3}
                  className={notificationPanelGrid}
                  style={{ height: "100%" }}
                >
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
                    isMarkerClicked={isMarkerClicked}
                    setIsMarkerClicked={setIsMarkerClicked}
                    selectedTheme={selectedTheme}
                    handleExpandListItem={() => {}}
                    setAssetLiveMarker={setAssetLiveMarker}
                    liveMarkerList={liveMarkerList}
                    listSelectedMarker={listSelectedMarker}
                    setListSelectedMarker={setListSelectedMarker}
                    selectedNotificationItem={selectedNotificationItem}
                    setSelectedNotificationItem={setSelectedNotificationItem}
                    mapDefaultView={mapDefaultView}
                    setMapDefaultView={setMapDefaultView}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Loader isHundredVh={true} />
      )}
    </>
  );
};

export default Parking;
