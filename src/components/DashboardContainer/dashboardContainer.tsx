import { useState, useEffect, Fragment } from "react";
import Map from "components/Map";
import theme from "../../theme/theme";
import moment from "moment";
import NotificationPanel from "components/NotificationPanel";
import {
  formatttedDashboardNotification,
  formatttedDashboardNotificationCount,
} from "../../utils/utils";
import NotificationActiveIcon from "../../assets/NotificationActive.svg";
import NotificationIcon from "../../assets/notificationIcon.svg";
import dashboardList from "mockdata/dashboardNotification";
import useStyles from "./styles";

interface DashboardContainerProps {
  handleviewDetails?: any;
}

const DashboardContainer: React.FC<DashboardContainerProps> = (
  props: DashboardContainerProps
) => {
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
    dashboardRightPanelStyle,
    notificationIconSection,
    notificationPanelSection,
  } = useStyles(appTheme);

  const onHandleBellIcon = () => {
    setNotificationPanelActive(true);
  };
  const dashboardArray = dashboardList?.dashboard;
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
      <div className={dashboardRightPanelStyle}>
        <Map
          markers={dashboardDataList}
          setNotificationPanelActive={setNotificationPanelActive}
          setSelectedNotification={setSelectedNotification}
          marker={selectedNotification}
          setTabIndex={setTabIndex}
          currentMarker={currentMarker}
          setCurrentMarker={setCurrentMarker}
        />
      </div>
      <img
        src={
          notificationPanelActive ? NotificationActiveIcon : NotificationIcon
        }
        alt="Notificaion Icon"
        width={50}
        onClick={onHandleBellIcon}
        className={notificationIconSection}
      />
      {notificationPanelActive && (
        <div className={notificationPanelSection}>
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
        </div>
      )}
    </>
  );
};

export default DashboardContainer;
