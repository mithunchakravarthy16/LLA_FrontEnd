/** @format */
//@ts-nocheck

import { useState, useEffect, createRef, useCallback, useRef } from "react";
import Tabs from "elements/Tabs";
import NotificationListItems from "components/NotificationListItems";
import SearchBox from "elements/SearchBox";
import SearchIcon from "../../assets/searchIcon.svg";
import SearchIconLighttheme from "../../assets/searchIconLighttheme.svg";
import NotificationCloseIconLightTheme from "../../assets/notificationCloseIconLightTheme1.svg";
import CloseIcon from "../../assets/closeIcon.svg";
import theme from "../../theme/theme";
import useTranslation from "localization/translations";
import { useDispatch } from "react-redux";
import { getNotificationData } from "redux/actions/getAllAssertNotificationAction";
import useStyles from "./styles";
import Loader from "elements/Loader";

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
    notificationPageName,
    setParkingLotIndex,
    setParkingLotSelectionActive,
    isMarkerClicked,
    handleViewDetails,
    handleAssetViewDetails,
    handleVideoDetails,
    setIsMarkerClicked,
    selectedTheme,
    setAssetLiveMarker,
    listSelectedMarker,
    setListSelectedMarker,
    selectedNotificationItem,
    setSelectedNotificationItem,
    setDebounceSearchText,
    loaderAssetNotificationResponse,
    page,
    rowsPerPage,
    mapDefaultView, 
    setMapDefaultView,
    setPage,
    selectedAssetMainTab
  } = props;
  const dispatch = useDispatch();

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
  } = useStyles({
    ...appTheme,
    tabIndex: tabIndex,
    notificationPageName: notificationPageName,
    selectedAssetMainTab: selectedAssetMainTab
  });

  const {
    notificationText,
    eventText,
    incidentText,
    oprAlertText,
    searchText,
    noResultFound,
  } = useTranslation();

  const tabsList = [
    {
      name: eventText,
      val: 0,
      count:
        notificationPageName !== "parking"
          ? notificationCount && notificationCount[0]
          : searchOpen && tabIndex === 0
          ? searchValue?.length
          : notificationCount && notificationCount[0],
    },
    {
      name: incidentText,
      val: 1,
      count:
        notificationPageName !== "parking"
          ? notificationCount && notificationCount[1]
          : searchOpen && tabIndex === 1
          ? searchValue?.length
          : notificationCount && notificationCount[1],
    },
    {
      name: oprAlertText,
      val: 1,
      count:
        notificationPageName !== "parking"
          ? notificationCount && notificationCount[2]
          : searchOpen && tabIndex === 2
          ? searchValue?.length
          : notificationCount && notificationCount[2],
    },
  ];

  const assetTabsList = [
    {
      name: "CELLULAR TAGS",
      val: 0,
      count:
        6,
    },
    {
      name: "BLE TAGS",
      val: 1,
      count:
        6,
    },
  ];

  const handleTabs = (index: number) => {
    setTabIndex(index);
    setSearchOpen(false);
    setSelectedNotification("");
    if (
      notificationPageName === "dashboard" ||
      notificationPageName === "asset"
    ) {
      setDebounceSearchText("");
    }
  };

  const handleExpandListItem = useCallback(
    (param: any, markerId: any, data: any) => {
      setSelectedNotificationItem(data);
      // setMapDefaultView(false);
      setListSelectedMarker(markerId);
      setAssetLiveMarker("");
      setIsMarkerClicked(false);

      setSelectedNotification(selectedNotification === param ? "" : param);
      if (notificationPageName && notificationPageName === "parking") {
        setParkingLotIndex(0);
        setParkingLotSelectionActive(false);
        setListSelectedMarker(param);
        setAssetLiveMarker(param);
      }
      props.handleExpandListItem(param);
    },
    [
      selectedNotification,
      listSelectedMarker,
      isMarkerClicked,
      selectedNotificationItem,
    ]
  );
  const searchTextRef = useRef<any>("");

  const handleSearchIcon = () => {
    searchTextRef.current = "";
    setSearchOpen(true);
    if (notificationPageName && notificationPageName === "parking") {
      setParkingLotSelectionActive(false);
    }
  };

  const handleSearch = (searchText: any) => {
    searchTextRef.current = searchText;
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
    setSearchValue(searchResult);
    // setSearchOpen(true);
    // setSelectedNotification("");
  };
  //debouncing start
  const delayTime = notificationPageName === "asset" ? 500 : 500;
  const fetchingDataForSearch = (searchValue: any, tabIndex: number, searchBoxPageNo : any, searchBoxRowsPerPage:any) => {
    searchTextRef.current = searchValue;
    let assetPayload = {};
    if (searchValue) {
      setPage(0);
      assetPayload = {
        filterText: searchValue,
        pageNo: 0,
        pageSize: parseInt(searchBoxRowsPerPage),
        notificationType:
          tabIndex === 0 ? "Events" : tabIndex === 1 ? "Incident" : "Alerts",
      };
    } else {
      setPage(0);
      assetPayload = {
        filterText: "",
        pageNo: 0,
        pageSize: parseInt(searchBoxRowsPerPage),
        notificationType:
          tabIndex === 0 ? "Events" : tabIndex === 1 ? "Incident" : "Alerts",
      };
    }
    dispatch(
      getNotificationData({ payLoad: assetPayload, isFromSearch: true })
    );
    setDebounceSearchText(searchValue);
  };

  const debounce = (func: any, delay: any) => {
    let timeout: any;

    return (...arg: any) => {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(context, arg);
      }, delay);
    };
  };

  const handleSearchtest = useCallback(
    debounce(fetchingDataForSearch, delayTime),
    []
  );

  //debouncing end

  const handleCloseIcon = () => {
    if (searchTextRef.current) {
      setSearchValue(dashboardData);
      setSelectedNotification("");
      setAssetLiveMarker("");
      setListSelectedMarker("");
      if (
        notificationPageName === "dashboard" ||
        notificationPageName === "asset"
      ) {
        setPage(0);
      }
    }
    
  };

  const handleSearchCloseIcon = () => {
    setSearchOpen(false);

    if (searchTextRef.current) {
      setSearchValue(dashboardData);
      setSelectedNotification("");
      setAssetLiveMarker("");
      setListSelectedMarker("");
      if (
        notificationPageName === "dashboard" ||
        notificationPageName === "asset"
      ) {
        setDebounceSearchText("");
        setPage(0);
      }
    }
  };

  const refs =
    searchValue && searchValue.length > 0
      ? searchValue.reduce((acc: any, value: any) => {
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
        refs[searchValue[0]?.id]?.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  }, [refs, selectedNotification]);

  useEffect(() => {
    if (!searchOpen) {
      setSearchValue(dashboardData);
    }
    if (searchOpen) {
      searchTextRef.current && setSelectedNotification("");
      searchTextRef.current && setAssetLiveMarker("");
      searchTextRef.current && setListSelectedMarker("");
      searchTextRef.current && setIsMarkerClicked(false);
    }
  }, [searchOpen]);

  useEffect(() => {
    searchTextRef.current && setSelectedNotification("");
    searchTextRef.current && setAssetLiveMarker("");
    searchTextRef.current && setListSelectedMarker("");
    searchTextRef.current && setIsMarkerClicked(false);
  }, [searchValue]);

  useEffect(() => {
    if (searchOpen && searchValue?.length === 0) {
      setSelectedNotification("");
    }
  }, [searchValue]);

  useEffect(() => {
    setSearchOpen(false);
    setSearchValue(dashboardData);
  }, [tabIndex]);

  useEffect(() => {
    if (selectedNotification === "" && !isMarkerClicked) {
      setListSelectedMarker("");
    }
  }, [selectedNotification]);

  return (
    <>
      <div className={notificationRootContainer}>
        <div className={notificationHeader}>
          <div className={notificationTitle} style={{width: notificationPageName === "asset" && "100%"}}>
            {searchOpen || notificationPageName === "asset" ? (
              <SearchBox
                searchInput={searchClass}
                placeHolder={searchText}
                handleSearch={handleSearch}
                borderRadius={2}
                borderColor={notificationPageName === "asset" ? "1px solid #808080" : `1px solid ${appTheme?.palette?.notification?.listItemBorder}`}
                fontColor={notificationPageName === "asset" ? "#808080" : appTheme?.palette?.notification?.colorWhite}
                tabIndex={tabIndex}
                handleCloseIcon={handleCloseIcon}
                searchIsOpen={searchOpen}
                selectedTheme={selectedTheme}
                notificationPageName={notificationPageName}
                handleSearchtest={handleSearchtest}
                setDebounceSearchText={setDebounceSearchText}
                disabled={loaderAssetNotificationResponse}
                page={page}
                rowsPerPage={rowsPerPage}
              />
            ) : (
              notificationText
            )}
          </div>
          {
            notificationPageName !== "asset" &&
            <div className={notificationIconSection}>
            <img
              className={notificationSearchIcon}
              src={
                searchOpen
                  ? selectedTheme === "light"
                    ? NotificationCloseIconLightTheme
                    : CloseIcon
                  : selectedTheme === "light"
                  ? SearchIconLighttheme
                  : SearchIcon
              }
              alt="Search"
              onClick={searchOpen ? handleSearchCloseIcon : handleSearchIcon}
            />
          </div>
          }
          
        </div>
        <div className={tabSection}> 
          <Tabs
            initialIndex={tabIndex}
            tabsList={notificationPageName === "asset" && selectedAssetMainTab === "trackers" ? assetTabsList : tabsList}
            handleTabs={handleTabs}
            dashboardNotificationClassName={customNotificationTabs}
            pageName={"dashboard"}
            disabled={loaderAssetNotificationResponse}
          />
        </div>
        <div className={notificationListItemSection}>
          {notificationPageName === "asset" ||
          notificationPageName === "dashboard" ? (
            !loaderAssetNotificationResponse ? (
              searchValue && searchValue?.length > 0 ? (
                <NotificationListItems
                  data={searchValue}
                  handleExpandListItem={handleExpandListItem}
                  selectedNotification={selectedNotification}
                  refs={refs}
                  handleViewDetails={handleViewDetails}
                  handleAssetViewDetails={handleAssetViewDetails}
                  handleVideoDetails={handleVideoDetails}
                  notificationPageName={notificationPageName}
                  selectedTheme={selectedTheme}
                  isMarkerClicked={isMarkerClicked}
                  selectedAssetMainTab={selectedAssetMainTab}
                />
              ) : (
                <div className={noResultFoundClass}>{noResultFound}</div>
              )
            ) : (
              <Loader isHundredVh={false} imgWidth={"20%"} />
            )
          ) : searchValue && searchValue?.length > 0 ? (
            <NotificationListItems
              data={searchValue}
              handleExpandListItem={handleExpandListItem}
              selectedNotification={selectedNotification}
              refs={refs}
              handleViewDetails={handleViewDetails}
              handleAssetViewDetails={handleAssetViewDetails}
              handleVideoDetails={handleVideoDetails}
              notificationPageName={notificationPageName}
              selectedTheme={selectedTheme}
              isMarkerClicked={isMarkerClicked}
              
            />
          ) : (
            <div className={noResultFoundClass}>{noResultFound}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default NotificationPanel;
