/** @format */

import { useState, useEffect, createRef, useCallback } from "react";
import FleetNotificationListItems from "components/FleetNotificationListItems";
import Tabs from "elements/Tabs";
import SearchBox from "elements/SearchBox";
import theme from "../../theme/theme";
import useTranslation from "localization/translations";
import FleetNotificationTripsListItems from "components/FleetNotificationTripsListItems";
import Loader from "elements/Loader";
import useStyles from "./styles";

const FleetNotificationPanelNew = (props: any) => {
  const {
    dashboardData,
    tabIndex,
    setTabIndex,
    notificationCount,
    selectedNotification,
    setSelectedNotification,
    searchOpen,
    setSearchOpen,
    searchNotificationsValue,
    setSearchNoticationsValue,
    notificationPageName,
    isMarkerClicked,
    handleViewDetails,
    handleAssetViewDetails,
    handleVideoDetails,
    setIsMarkerClicked,
    selectedTheme,
    tabMainIndex,
    setTabMainIndex,
    tripsTabIndex,
    setTripsTabIndex,
    tripsNotificationCount,
    tripsSearchValue,
    setTripsSearchValue,
    handleMarkerCancel,
    handleSearchtest,
    rowsPerPage,
    page,
    setDebounceSearchText,
    loadingFleetManagementCompletedTripsData,
  } = props;

  const [appTheme, setAppTheme] = useState<any>();

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
    noResultFoundClass,
    customMainNotificationTabs,
  } = useStyles({
    ...appTheme,
    tabIndex: tabIndex,
    notificationPageName: notificationPageName,
  });

  const {
    notificationText,
    eventText,
    incidentText,
    oprAlertText,
    searchText,
    noResultFound,
  } = useTranslation();
  const [tSearchValue, setTSearchValue] = useState<any>("");
  const tabsList = [
    {
      name: eventText,
      val: 0,
      count:
        searchNotificationsValue?.length > 0 && tabIndex === 0
          ? searchNotificationsValue?.length
          : notificationCount && notificationCount[0],
    },
    {
      name: incidentText,
      val: 1,
      count:
        searchNotificationsValue?.length > 0 && tabIndex === 1
          ? searchNotificationsValue?.length
          : notificationCount && notificationCount[1],
    },
    {
      name: oprAlertText,
      val: 1,
      count:
        searchNotificationsValue?.length > 0 && tabIndex === 2
          ? searchNotificationsValue?.length
          : notificationCount && notificationCount[2],
    },
  ];

  const tabs = [
    {
      name: "TRIPS",
      val: 0,
    },
    {
      name: "NOTIFICATIONS",
      val: 1,
    },
  ];

  const handleTabs = (index: number) => {
    setTabIndex(index);
    // setSearchOpen(false);
    setSelectedNotification("");
    // setSelectedRefId("");
  };

  // const handleSearchIcon = () => {
  //   setSearchOpen(true);
  // };

  const handleSearch = (searchText: any) => {
    const tabData = dashboardData;
    let searchResult = tabData?.filter((value: any) => {
      return (
        value?.title
          ?.toString()
          ?.toLowerCase()
          .includes(searchText?.toString()?.toLowerCase()) ||
        value?.area
          ?.toString()
          ?.toLowerCase()
          .includes(searchText?.toString()?.toLowerCase()) ||
        value?.subTitle
          ?.toString()
          ?.toLowerCase()
          .includes(searchText?.toString()?.toLowerCase()) ||
        value?.trackerId
          ?.toString()
          ?.toLowerCase()
          .includes(searchText?.toString()?.toLowerCase()) ||
        value?.assetId
          ?.toString()
          ?.toLowerCase()
          .includes(searchText?.toString()?.toLowerCase()) ||
        value?.entity
          ?.toString()
          ?.toLowerCase()
          .includes(searchText?.toString()?.toLowerCase()) ||
        value?.venue
          ?.toString()
          ?.toLowerCase()
          .includes(searchText?.toString()?.toLowerCase()) ||
        value?.equipment
          ?.toString()
          ?.toLowerCase()
          .includes(searchText?.toString()?.toLowerCase())
      );
    });
    setSearchNoticationsValue(searchResult);
    // setSearchOpen(true);
    // setSelectedNotification("");
  };

  const handleCloseIcon = () => {
    setSearchNoticationsValue(dashboardData);
    setSelectedNotification("");
  };

  // const handleSearchCloseIcon = () => {
  //   setSearchOpen(false);
  //   setSearchNoticationsValue(dashboardData);
  //   setSelectedNotification("");
  // };

  const handleExpandListItem = useCallback(
    (param: any) => {
      setSelectedNotification(selectedNotification === param ? "" : param);
      props.handleExpandListItem(param);
    },
    [selectedNotification]
  );

  const refs =
    tripsSearchValue && tripsSearchValue?.length > 0
      ? tripsSearchValue?.reduce((acc: any, value: any) => {
          acc[value.id] = createRef<any>();
          return acc;
        }, {})
      : "";

  useEffect(() => {
    if (selectedNotification && refs) {
      setTimeout(() => {
        refs[
          selectedNotification ? selectedNotification : ""
        ]?.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 300);
    } else if (selectedNotification === "") {
      setTimeout(() => {
        refs[
          tripsSearchValue && tripsSearchValue[0]?.id
        ]?.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  }, [refs, selectedNotification]);

  // useEffect(() => {
  //   if (!searchOpen) {
  //     setSearchNoticationsValue(dashboardData);
  //   }
  //   if (searchOpen) {
  //     setSelectedNotification("");
  //     setIsMarkerClicked(false);
  //   }
  // }, [searchOpen]);

  useEffect(() => {
    if (searchNotificationsValue?.length === 0) {
      setSelectedNotification("");
    }
  }, [searchNotificationsValue]);

  useEffect(() => {
    if (isMarkerClicked) {
      setSearchOpen(false);
      setSearchNoticationsValue(dashboardData);
    }
  }, [isMarkerClicked]);

  useEffect(() => {
    setSearchOpen(false);
    setSearchNoticationsValue(dashboardData);
  }, [tabIndex]);

  // fleet trips

  const tripsTabsList = [
    {
      name: "LIVE",
      val: 0,
      count:
        tSearchValue?.length > 0 && tripsTabIndex === 0
          ? tripsSearchValue?.length
          : tripsNotificationCount && tripsNotificationCount[0],
    },
    {
      name: "DEVICES",
      val: 1,
      count:
        tSearchValue?.length > 0 && tripsTabIndex === 1
          ? tripsSearchValue?.length
          : tripsNotificationCount && tripsNotificationCount[1],
    },
    {
      name: "COMPLETED",
      val: 1,
      count:
        tSearchValue?.length > 0 && tripsTabIndex === 2
          ? tripsSearchValue?.length
          : tripsNotificationCount && tripsNotificationCount[2],
    },
  ];

  // useEffect(() => {
  //   setTripsSearchValue(dashboardData);
  // }, [dashboardData]);

  const handleMainTabs = (index: number) => {
    setTabMainIndex(index);
    setTripsTabIndex(0);
    setTabIndex(1);
    setSelectedNotification("");
    setDebounceSearchText("");
    handleMarkerCancel();
  };

  const handleTripsTabs = (index: number) => {
    setTripsTabIndex(index);
    setSelectedNotification("");
    setDebounceSearchText("");
    handleMarkerCancel();
  };

  const handleTripsExpandListItem = (param: any) => {
    setSelectedNotification(selectedNotification === param ? "" : param);
    props.handleTripsExpandListItem(
      selectedNotification === param ? "" : param
    );
  };

  return (
    <>
      <div className={notificationRootContainer}>
        <div className={tabSection}>
          <Tabs
            initialIndex={tabMainIndex}
            tabsList={tabs}
            handleTabs={handleMainTabs}
            dashboardNotificationClassName={customMainNotificationTabs}
            pageName={"dashboard"}
            disabled={loadingFleetManagementCompletedTripsData}
          />
        </div>
        <div className={notificationHeader}>
          <div className={notificationTitle}>
            {tabMainIndex === 1 ? (
              <SearchBox
                searchInput={searchClass}
                placeHolder={searchText}
                handleSearch={handleSearch}
                borderRadius={2}
                borderColor={`1px solid ${appTheme?.palette?.notification?.listItemBorder}`}
                fontColor={appTheme?.palette?.notification?.colorWhite}
                tabIndex={tabIndex}
                handleCloseIcon={handleCloseIcon}
                searchIsOpen={searchOpen}
                selectedTheme={selectedTheme}
                notificationPageName={"FleetManagement"}
                tabMainIndex={tabMainIndex}
                setSearchNoticationsValue={setSearchNoticationsValue}
              />
            ) : (
              <SearchBox
                searchInput={searchClass}
                placeHolder={searchText}
                handleSearch={() => {}}
                borderRadius={2}
                borderColor={`1px solid ${appTheme?.palette?.notification?.listItemBorder}`}
                fontColor={appTheme?.palette?.notification?.colorWhite}
                tabIndex={tripsTabIndex}
                handleCloseIcon={handleCloseIcon}
                searchIsOpen={searchOpen}
                selectedTheme={selectedTheme}
                notificationPageName={"FleetManagement"}
                handleSearchtest={handleSearchtest}
                page={page}
                rowsPerPage={rowsPerPage}
                mainTabIndex={tabMainIndex}
                setDebounceSearchText={setDebounceSearchText}
              />
            )}
          </div>
        </div>
        {tabMainIndex === 1 ? (
          <>
            <div className={tabSection}>
              <Tabs
                initialIndex={tabIndex}
                tabsList={tabsList}
                handleTabs={handleTabs}
                dashboardNotificationClassName={customNotificationTabs}
                pageName={"dashboard"}
              />
            </div>
            <div className={notificationListItemSection}>
              {searchNotificationsValue &&
              searchNotificationsValue?.length > 0 ? (
                <FleetNotificationListItems
                  data={searchNotificationsValue}
                  handleExpandListItem={handleExpandListItem}
                  selectedNotification={selectedNotification}
                  refs={refs}
                  handleViewDetails={handleViewDetails}
                  handleAssetViewDetails={handleAssetViewDetails}
                  handleVideoDetails={handleVideoDetails}
                  notificationPageName={notificationPageName}
                  selectedTheme={selectedTheme}
                />
              ) : (
                <div className={noResultFoundClass}>{noResultFound}</div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className={tabSection}>
              <Tabs
                initialIndex={tripsTabIndex}
                tabsList={tripsTabsList}
                handleTabs={handleTripsTabs}
                dashboardNotificationClassName={customNotificationTabs}
                pageName={"dashboard"}
                disabled={loadingFleetManagementCompletedTripsData}
              />
            </div>
            <div className={notificationListItemSection}>
              {!loadingFleetManagementCompletedTripsData ? (
                tripsSearchValue && tripsSearchValue?.length > 0 ? (
                  <FleetNotificationTripsListItems
                    data={tripsSearchValue}
                    handleTripsExpandListItem={handleTripsExpandListItem}
                    selectedNotification={selectedNotification}
                    refs={refs}
                    handleViewDetails={handleViewDetails}
                    handleAssetViewDetails={handleAssetViewDetails}
                    handleVideoDetails={handleVideoDetails}
                    notificationPageName={notificationPageName}
                    selectedTheme={selectedTheme}
                    tripsTabIndex={tripsTabIndex}
                  />
                ) : (
                  <div className={noResultFoundClass}>{noResultFound}</div>
                )
              ) : (
                <Loader isHundredVh={false} imgWidth={"20%"} />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FleetNotificationPanelNew;
