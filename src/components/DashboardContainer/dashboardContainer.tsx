import { useState, useEffect, Fragment } from "react";
import Map from "components/Map";
import theme from "../../theme/theme";
import NotificationPanel from "components/NotificationPanel";
import {
  formatttedDashboardNotification,
  formatttedDashboardNotificationCount,
} from "../../utils/utils";
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

  const [notificationPanelActive, setNotificationPanelActive] =
    useState<boolean>(false);

  const onHandleBellIcon = () => {
    setNotificationPanelActive(!notificationPanelActive);
  };

  const [dashboardData, setDashboardData] = useState<any>(
    formatttedDashboardNotification(dashboardList?.dashboard, tabIndex)
  );

  const [notificationCount, setNotificationCount] = useState<any>(
    formatttedDashboardNotificationCount(dashboardList?.dashboard)
  );

  useEffect(() => {
    setDashboardData(
      formatttedDashboardNotification(dashboardList?.dashboard, tabIndex)
    );
  }, [tabIndex]);

  return (
    <>
      <div className={dashboardRightPanelStyle}>
        <Map markers={dashboardList?.dashboard} />
      </div>
      <img
        src={NotificationIcon}
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
          />
        </div>
      )}
    </>
  );
};

export default DashboardContainer;
