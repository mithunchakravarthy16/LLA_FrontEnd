/** @format */

import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import {
  CoTwoCloudIcon,
  VocCloudIcon,
  AirQualityIcon,
  PersonIcon,
} from "../../assets/topPanelListIcons";
import useTranslation from "localization/translations";
import Highcharts from "highcharts";
import TopPanelListItemContainer from "components/TopPanelListItemContainer";
import Map from "components/Map";
import moment from "moment";
import NotificationPanel from "components/NotificationPanel";
import {
  formatttedDashboardNotification,
  formatttedDashboardNotificationCount,
} from "../../utils/utils";
import parkingData from "mockdata/lightingData";
import { LiveImg } from "assets/gridViewIcons";
import Chart from "elements/Chart";
import theme from "../../theme/theme";
import {
  CoTwoLevelIcon,
  VocLevelIcon,
  PmOneIcon,
  PmTwoIcon,
  WifiUserIcon,
} from "../../assets/lightingTopPanelLightThemeIcons";
import useStyles from "./styles";
import Loader from "elements/Loader";

const Parking: React.FC<any> = (props) => {
  const adminPanelData = useSelector(
    (state: any) => state?.adminPanel?.getConfigData?.body
  );

  const { dashboard, gridView, lighting } = useTranslation();
  const [selectedTheme, setSelectedTheme] = useState<any>();
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [map, setMap] = useState<any>(null);

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
      icon: selectedTheme === "light" ? CoTwoLevelIcon : CoTwoCloudIcon,
      value: "643ppm",
      name: `${gridView.co2} ${gridView.level}`,
    },
    {
      icon: selectedTheme === "light" ? VocLevelIcon : VocCloudIcon,
      value: "15ppm",
      name: `${gridView.co2} ${gridView.level}`,
    },
    {
      icon: selectedTheme === "light" ? PmOneIcon : AirQualityIcon,
      value: "12µg/m³",
      name: gridView.pm25,
    },
    {
      icon: selectedTheme === "light" ? PmTwoIcon : AirQualityIcon,
      value: "50µg/m³",
      name: "PM10",
    },
    {
      icon: selectedTheme === "light" ? WifiUserIcon : PersonIcon,
      value: "200",
      name: gridView.wifiUsers,
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

  const dashboardArray = parkingData?.notifications?.lighting;
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
        height: 480,
        width1: 1300,
        height1: 480,
        is4kDevice: true,
      });
    } else if (window.innerWidth > 3071) {
      setSelectedWidth({
        width: 800,
        height: 400,
        width1: 1000,
        height1: 380,
        is4kDevice: false,
        is3KDevice: true,
      });
    } else if (window.innerWidth > 2559) {
      setSelectedWidth({
        width: 600,
        height: 200,
        width1: 800,
        height1: 180,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 2047) {
      setSelectedWidth({
        width: 600,
        height: 200,
        width1: 600,
        height1: 180,
        is4kDevice: false,
      });
    } else if (window.innerHeight > 936) {
      setSelectedWidth({
        width: 500,
        height: 180,
        width1: 550,
        height1: 180,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1791) {
      setSelectedWidth({
        width: 550,
        height: 200,
        width1: 550,
        height1: 200,
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
        height: 150,
        width1: 450,
        height1: 150,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1343) {
      setSelectedWidth({
        width: 400,
        height: 150,
        width1: 400,
        height1: 150,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1279) {
      setSelectedWidth({
        width: 400,
        height: 150,
        width1: 400,
        height1: 150,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1151) {
      setSelectedWidth({
        width: 350,
        height: 100,
        width1: 350,
        height1: 100,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1023) {
      setSelectedWidth({
        width: 300,
        height: 100,
        width1: 300,
        height1: 100,
        is4kDevice: false,
      });
    }
  }, []);

  const [selectedValue, setSelectedValue] = useState<any>("");

  const handleSelect = (val: any) => {
    setSelectedValue(val);
  };

  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false)

  useEffect(()=>{
    setTimeout(()=>{
      setIsDataLoaded(!isDataLoaded)
    },2000)
  },[])

  return (
    <>
    {
isDataLoaded ?
    
      <Grid container className={rootContainer}>
        <Grid container className={mainSection}>
          <Grid item xs={12} alignItems="center" className={pageHeading}>
            {dashboard.lighting}
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
                      >
                        <TopPanelListItemContainer
                          topPanelListItems={topPanelListItems}
                          percent={60}
                          strokeWidth={10}
                          trailWidth={10}
                          strokeColor="#FFA626"
                          trailColor={
                            selectedTheme === "light" ? "#FAEEDD" : "#484D52"
                          }
                          title={gridView.avgDimmingLevel}
                          selectedTheme={selectedTheme}
                          selectedValue={selectedValue}
                          handleSelect={handleSelect}

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
                              <Grid
                                item
                                xs={12}
                                // style={{ height: "10%" }}
                                className={electricity}
                              >
                                {gridView.electricityConsumption}
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                // style={{ height: "90%" }}
                              >
                                <Grid
                                  container
                                  xs={12}
                                  style={{ height: "100%" }}
                                >
                                  <Grid
                                    item
                                    xs={9}
                                    style={{ height: "18vh", width: "80vw" }}
                                  >
                                    <Chart
                                      containerProps={{
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                      }}
                                      // width={selectedWidth?.width}
                                      // height={selectedWidth?.height}
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
                                          lineColor: "#004F9F",
                                          color: "#004F9F",
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
                                                Highcharts.color("#004F9F")
                                                  .setOpacity(0.5)
                                                  .get("rgba"),
                                              ],
                                              [
                                                0.5,
                                                Highcharts.color("#004F9F")
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
                                                Highcharts.color(
                                                  selectedWidth?.is4kDevice ||
                                                    selectedWidth?.is3KDevice
                                                    ? "#004F9F"
                                                    : "#000000"
                                                )
                                                  .setOpacity(
                                                    selectedWidth?.is4kDevice ||
                                                      selectedWidth?.is3KDevice
                                                      ? selectedTheme ===
                                                        "light"
                                                        ? 0.09
                                                        : 0.05
                                                      : 0.02
                                                  )
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
                                          {gridView.consumed}
                                        </div>
                                      </div>
                                      <div className={liveContentStyle}>
                                        <div className={liveContentValueGreen}>
                                          50
                                        </div>
                                        <div className={liveContentLabelGreen}>
                                          <div>{gridView.aqi}</div>
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
                              <Grid
                                item
                                xs={12}
                                className={graphTwoHeader}
                                style={{ height: "10%" }}
                              >
                                {lighting.airQualityIndex}
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
                                    <Chart
                                      // width={selectedWidth?.width1}
                                      // height={selectedWidth?.height1}
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
                                      crossHairLineColor={"#50A02890"}
                                      is4kDevice={selectedWidth?.is4kDevice}
                                      dataPoints={[
                                        {
                                          marker: {
                                            enabled: false,
                                          },
                                          lineColor: "#50A02890",
                                          color: "#50A028",
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
                                                Highcharts.color("#50A028")
                                                  .setOpacity(0.5)
                                                  .get("rgba"),
                                              ],
                                              [
                                                0.5,
                                                Highcharts.color("#50A028")
                                                  .setOpacity(
                                                    selectedWidth?.is4kDevice ||
                                                      selectedWidth?.is3KDevice
                                                      ? 0.3
                                                      : 0.2
                                                  )
                                                  .get("rgba"),
                                              ],
                                              [
                                                1,
                                                Highcharts.color(
                                                  selectedWidth?.is4kDevice ||
                                                    selectedWidth?.is3KDevice
                                                    ? "#50A028"
                                                    : "#000000"
                                                )
                                                  .setOpacity(
                                                    selectedWidth?.is4kDevice ||
                                                      selectedWidth?.is3KDevice
                                                      ? selectedTheme ===
                                                        "light"
                                                        ? 0.09
                                                        : 0.05
                                                      : 0.02
                                                  )
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
                                </Grid>
                              </Grid>
                              <Grid />
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
                      markers={dashboardDataList}
                      setNotificationPanelActive={setNotificationPanelActive}
                      setSelectedNotification={setSelectedNotification}
                      marker={selectedNotification}
                      setTabIndex={setTabIndex}
                      currentMarker={currentMarker}
                      setCurrentMarker={setCurrentMarker}
                      setIsMarkerClicked={setIsMarkerClicked}
                      mapPageName={"lighting"}
                      selectedTheme={selectedTheme}
                      setMap={setMap}
                      map={map}
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
      :
      <Loader isHundredVh = {true}/>
}
    </>
  );
};

export default Parking;
