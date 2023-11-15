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
    apiResponse,
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
      count: apiResponse?.data?.events?.totalCount,
    },
    {
      name: incidentText,
      val: 1,
      count: apiResponse?.data?.incidents?.totalCount,
    },
    {
      name: oprAlertText,
      val: 1,
      count: apiResponse?.data?.alerts?.totalCount,
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
    setSelectedNotification("");
  };

  const handleCloseIcon = () => {
    setSearchNoticationsValue(dashboardData);
    setSelectedNotification("");
  };

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

  useEffect(() => {
    if (tripsSearchValue?.length === 0) {
      setSelectedNotification("");
    }
  }, [tripsSearchValue]);

  useEffect(() => {
    if (isMarkerClicked) {
      setSearchNoticationsValue(dashboardData);
    }
  }, [isMarkerClicked]);

  useEffect(() => {
    setSearchNoticationsValue(dashboardData);
  }, [tabIndex]);

  // fleet trips

  const tripsTabsList = [
    {
      name: "LIVE",
      val: 0,
      count: apiResponse?.data?.liveTrips?.count,
    },
    {
      name: "DEVICES",
      val: 1,
      count: apiResponse?.data?.deviceDTOs?.count,
    },
    {
      name: "COMPLETED",
      val: 1,
      count: apiResponse?.data?.completedTrips?.count,
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
                handleSearch={() => {}}
                borderRadius={2}
                borderColor={`1px solid ${appTheme?.palette?.notification?.listItemBorder}`}
                fontColor={appTheme?.palette?.notification?.colorWhite}
                tabIndex={tabIndex}
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
              {!loadingFleetManagementCompletedTripsData ? (
                tripsSearchValue && tripsSearchValue?.length > 0 ? (
                  <FleetNotificationListItems
                    data={tripsSearchValue}
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
                )
              ) : (
                <Loader isHundredVh={false} imgWidth={"20%"} />
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
