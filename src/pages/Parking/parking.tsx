import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import {
  CoTwoCloudIcon,
  VocCloudIcon,
  AirQualityIcon,
  PersonIcon,
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
import parkingData from "mockdata/parkingData";

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
    notificationPanelGrid
  } = useStyles(appTheme);

  const topPanelListItems: any[] = [
    {
      icon: CoTwoCloudIcon,
      value: "643ppm",
    },
    {
      icon: VocCloudIcon,
      value: "15ppm",
    },
    {
      icon: AirQualityIcon,
      value: "12µg/m³",
    },
    {
      icon: AirQualityIcon,
      value: "50µg/m³",
    },
    {
      icon: PersonIcon,
      value: "200",
    },
  ];

  // Notification Data

  const [tabIndex, setTabIndex] = useState<any>(1);
  const [selectedNotification, setSelectedNotification] = useState<any>("");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [notificationPanelActive, setNotificationPanelActive] =
    useState<boolean>(false);
  const [currentMarker, setCurrentMarker] = useState<any>("");

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
                      <Grid item xs={6} className={graphOneContainer}>
                        Graph 1
                      </Grid>
                      <Grid item xs={6} className={graphTwoContainer}>
                        Graph 2
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
