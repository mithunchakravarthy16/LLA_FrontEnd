import { useState, useEffect } from "react";
import Tabs from "elements/Tabs";
import NotificationListItems from "components/NotificationListItems";
import SearchIcon from "../../assets/searchIcon.svg";
import CloseIcon from "../../assets/closeIcon.svg";
import theme from "../../theme/theme";
import useTranslation from "localization/translations";

import useStyles from "./styles";

const NotificationPanel = (props: any) => {
  const {
    setNotificationPanelActive,
    dashboardData,
    tabIndex,
    setTabIndex,
    notificationCount,
    selectedNotification,
    setSelectedNotification,
  } = props;

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
    notificationTitle,
    notificationRootContainer,
    notificationHeader,
    notificationIconSection,
    notificationSearchIcon,
    notificationCloseIcon,
    customNotificationTabs,
    tabSection,
  } = useStyles(appTheme);

  const { notificationText, eventText, incidentText, oprAlertText } =
    useTranslation();
  const handleNotificationCloseIcon = () => {
    setNotificationPanelActive(false);
  };

  const tabsList = [
    {
      name: eventText,
      val: 0,
      count: notificationCount && notificationCount[0],
    },
    {
      name: incidentText,
      val: 1,
      count: notificationCount && notificationCount[1],
    },
    {
      name: oprAlertText,
      val: 1,
      count: notificationCount && notificationCount[2],
    },
  ];

  const handleTabs = (index: number) => {
    setTabIndex(index);
    // setSearchOpen(false);
    // setSelectedCategory("All");
    // setChipButtonIndex(1);
    // setSelectedNotification("");
    // setSelectedRefId("");
  };

  const handleExpandListItem = (id: any) => {
    setSelectedNotification(selectedNotification === id ? "" : id);
  };

  return (
    <>
      <div className={notificationRootContainer}>
        <div className={notificationHeader}>
          <div className={notificationTitle}>{notificationText}</div>
          <div className={notificationIconSection}>
            <img
              className={notificationSearchIcon}
              src={SearchIcon}
              alt="Search"
              width={20}
            />
            <img
              className={notificationCloseIcon}
              src={CloseIcon}
              alt="Close"
              width={20}
              onClick={handleNotificationCloseIcon}
            />
          </div>
        </div>
        <div className={tabSection}>
          <Tabs
            initialIndex={tabIndex}
            tabsList={tabsList}
            handleTabs={handleTabs}
            dashboardNotificationClassName={customNotificationTabs}
          />
        </div>
        {dashboardData &&
          dashboardData?.length > 0 &&
          dashboardData?.map((data: any, index: any) => {
            return (
              <NotificationListItems
                data={data}
                key={index}
                handleExpandListItem={handleExpandListItem}
                selectedNotification={selectedNotification}
              />
            );
          })}
      </div>
    </>
  );
};

export default NotificationPanel;
