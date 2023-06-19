import { useState, useEffect } from "react";
import Tabs from "elements/Tabs";
import NotificationListItems from "components/NotificationListItems";
import SearchIcon from "../../assets/searchIcon.svg";
import CloseIcon from "../../assets/closeIcon.svg";
import theme from "../../theme/theme";
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

  //   useEffect(() => {
  //     switch (selectedTheme) {
  //       case "red":
  //         setAppTheme(theme?.redTheme);
  //         break;
  //       case "green":
  //         setAppTheme(theme?.greenTheme);
  //         break;
  //       case "yellow":
  //         setAppTheme(theme?.yellowTheme);
  //         break;
  //       case "default":
  //         setAppTheme(theme?.defaultTheme);
  //         break;
  //       default:
  //         setAppTheme(theme?.defaultTheme);
  //         break;
  //     }
  //   }, [selectedTheme]);

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

  const handleNotificationCloseIcon = () => {
    setNotificationPanelActive(false);
  };

  const tabsList = [
    {
      name: "EVENTS",
      val: 0,
      count: notificationCount && notificationCount[0],
    },
    {
      name: "INCIDENTS",
      val: 1,
      count: notificationCount && notificationCount[1],
    },
    {
      name: "OPR.ALERTS",
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
    console.log("id123", id);
  };

  return (
    <>
      <div className={notificationRootContainer}>
        <div className={notificationHeader}>
          <div className={notificationTitle}>Notifications</div>
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
