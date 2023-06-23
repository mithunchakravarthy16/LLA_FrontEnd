import { useState, useEffect, createRef } from "react";
import Tabs from "elements/Tabs";
import NotificationListItems from "components/NotificationListItems";
import SearchBox from "elements/SearchBox";
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
    searchOpen,
    setSearchOpen,
    searchValue,
    setSearchValue,
    setCurrentMarker,
    notificationPageName
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
    searchClass,
    notificationListItemSection,
  } = useStyles({ ...appTheme, tabIndex: tabIndex, notificationPageName : notificationPageName });

  const {
    notificationText,
    eventText,
    incidentText,
    oprAlertText,
    searchText,
    noResultFound,
  } = useTranslation();

  const [selectedRefId, setSelectedRefId] = useState("");

  const handleNotificationCloseIcon = () => {
    setNotificationPanelActive(false);
    setSearchOpen(false);
    setTabIndex(1);
    setCurrentMarker("");
    setSelectedNotification("");
    setSearchValue(dashboardData);
  };

  const tabsList = [
    {
      name: eventText,
      val: 0,
      count:
        searchOpen && tabIndex === 0
          ? searchValue?.length
          : notificationCount && notificationCount[0],
    },
    {
      name: incidentText,
      val: 1,
      count:
        searchOpen && tabIndex === 1
          ? searchValue?.length
          : notificationCount && notificationCount[1],
    },
    {
      name: oprAlertText,
      val: 1,
      count:
        searchOpen && tabIndex === 2
          ? searchValue?.length
          : notificationCount && notificationCount[2],
    },
  ];


  const handleTabs = (index: number) => {
    setTabIndex(index);
    setSearchOpen(false);
    setSelectedNotification("");
    // setSelectedRefId("");
  };

  const handleExpandListItem = (id: any) => {
    setSelectedNotification(selectedNotification === id ? "" : id);
  };

  const handleSearchIcon = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearch = (searchText: any) => {
    const tabData = dashboardData;
    let searchResult = tabData?.filter((value: any) => {
      return (
        value?.title
          ?.toLowerCase()
          .includes(searchText?.toString()?.toLowerCase()) ||
        value?.area
          ?.toLowerCase()
          .includes(searchText?.toString()?.toLowerCase())
      );
    });
    setSearchValue(searchResult);
    setSearchOpen(true);
    setSelectedNotification("");
  };

  const handleCloseIcon = () => {
    setSearchValue(dashboardData);
    setSelectedNotification("");
  };

  const handleSearchCloseIcon = () => {
    setSearchOpen(false);
  };

  const refs =
    searchValue && searchValue.length > 0
      ? searchValue.reduce((acc: any, value: any) => {
          acc[value.id] = createRef<any>();
          return acc;
        }, {})
      : "";

  useEffect(() => {
    if ((selectedNotification || selectedRefId) && refs) {
      setTimeout(() => {
        refs[
          selectedNotification ? selectedNotification : selectedRefId
        ]?.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 300);
    }
  }, [refs, selectedRefId, selectedNotification]);

  return (
    <>
      <div className={notificationRootContainer}>
        <div className={notificationHeader}>
          <div className={notificationTitle}>
            {searchOpen ? (
              <SearchBox
                searchInput={searchClass}
                placeHolder={searchText}
                handleSearch={handleSearch}
                borderRadius={2}
                borderColor={`1px solid ${appTheme?.palette?.notification?.listItemBorder}`}
                fontColor={appTheme?.palette?.notification?.tabListCountColor}
                tabIndex={tabIndex}
                handleCloseIcon={handleCloseIcon}
                searchIsOpen={searchOpen}
              />
            ) : (
              notificationText
            )}
          </div>
          <div className={notificationIconSection}>
            <img
              className={notificationSearchIcon}
              src={searchOpen ? CloseIcon : SearchIcon}
              alt="Search"
              onClick={searchOpen ? handleSearchCloseIcon : handleSearchIcon}
            />
            {/* <img
              className={notificationCloseIcon}
              src={CloseIcon}
              alt="Close"
              width={20}
              onClick={handleNotificationCloseIcon}
            /> */}
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
        <div className={notificationListItemSection}>
          {searchValue && searchValue?.length > 0 ? (
            searchValue?.map((data: any, index: any) => {
              return (
                <NotificationListItems
                  data={data}
                  key={index}
                  handleExpandListItem={handleExpandListItem}
                  selectedNotification={selectedNotification}
                  refs={refs}
                />
              );
            })
          ) : (
            <div>{noResultFound}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default NotificationPanel;
