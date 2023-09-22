/** @format */

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
import { useDispatch, useSelector } from "react-redux";
import { getNotificationData } from "redux/actions/getAllAssertNotificationAction";
import { useLocation } from "react-router-dom";

import useStyles from "./styles";
import { constants } from "buffer";
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
  } = props;
  const dispatch = useDispatch();
  // const [selectedTheme, setSelectedTheme] = useState(
  //   JSON.parse(localStorage.getItem("theme")!)
  // );
  const [appTheme, setAppTheme] = useState<any>();

  const location = useLocation();

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
  });

  const {
    notificationText,
    eventText,
    incidentText,
    oprAlertText,
    searchText,
    noResultFound,
  } = useTranslation();

  const [selectedRefId, setSelectedRefId] = useState("");

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
      // count:
      // searchOpen && tabIndex === 0
      //   ? searchValue?.length
      //   : notificationCount && notificationCount[0],
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
      // count:
      //   searchOpen && tabIndex === 1
      //     ? searchValue?.length
      //     : notificationCount && notificationCount[1],
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
      // count:
      //   searchOpen && tabIndex === 2
      //     ? searchValue?.length
      //     : notificationCount && notificationCount[2],
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
    // setSelectedRefId("");
  };

  const handleExpandListItem = useCallback(
    (param: any, markerId: any, data: any) => {
      setSelectedNotificationItem(data);

      setListSelectedMarker(markerId);
      setAssetLiveMarker("");
      setIsMarkerClicked(false);

      setSelectedNotification(selectedNotification === param ? "" : param);
      if (notificationPageName && notificationPageName === "parking") {
        setParkingLotIndex(0);
        setParkingLotSelectionActive(false);
        setListSelectedMarker(param);
        setAssetLiveMarker(param);
        // setIsMarkerClicked(true)
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

  const handleSearchIcon = () => {
    setSearchOpen(true);
    if (notificationPageName && notificationPageName === "parking") {
      setParkingLotSelectionActive(false);
    }
  };

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
    setSearchValue(searchResult);
    // setSearchOpen(true);
    // setSelectedNotification("");
  };

  //debouncing start
  const delayTime = notificationPageName === "asset" ? 500 : 3000;
  const fetchingDataForSearch = (searchValue: any) => {
    let assetPayload = {};
    if (searchValue) {
      assetPayload = {
        filterText: searchValue,
        pageNo: page,
        pageSize: rowsPerPage,
        notificationType:
          tabIndex === 0 ? "Events" : tabIndex === 1 ? "Incident" : "Alerts",
      };
      // setPage(0);
    } else {
      assetPayload = {
        filterText: "",
        pageNo: page,
        pageSize: rowsPerPage,
        notificationType: "",
      };
      // setPage(0);
      // setRowsPerPage(100);
    }
    dispatch(
      getNotificationData({ payLoad: assetPayload, isFromSearch: true })
    );
    setDebounceSearchText(searchValue);
    // setSearchPageNo("");
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
    setSearchValue(dashboardData);
    setSelectedNotification("");
    setAssetLiveMarker("");
    setListSelectedMarker("");
  };

  const handleSearchCloseIcon = () => {
    setSearchOpen(false);
    setSearchValue(dashboardData);
    setSelectedNotification("");
    setAssetLiveMarker("");
    setListSelectedMarker("");
    if (
      notificationPageName === "dashboard" ||
      notificationPageName === "asset"
    ) {
      setDebounceSearchText("");
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
      setSelectedNotification("");
      setAssetLiveMarker("");
      setListSelectedMarker("");
      // setIsMarkerClicked(false);
    }
  }, [searchOpen]);

  useEffect(() => {
    if (searchOpen && searchValue?.length === 0) {
      setSelectedNotification("");
    }
  }, [searchValue]);

  useEffect(() => {
    if (isMarkerClicked) {
      setSearchOpen(false);
      setSearchValue(dashboardData);
    }
  }, [isMarkerClicked]);

  useEffect(() => {
    setSearchOpen(false);
    setSearchValue(dashboardData);
  }, [tabIndex]);

  useEffect(() => {
    if (selectedNotification === "") {
      setAssetLiveMarker("");
      setListSelectedMarker("");
    }
    if (listSelectedMarker === "") {
      setSelectedNotification("");
    }
  }, [selectedNotification, listSelectedMarker]);

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
                fontColor={appTheme?.palette?.notification?.colorWhite}
                tabIndex={tabIndex}
                handleCloseIcon={handleCloseIcon}
                searchIsOpen={searchOpen}
                selectedTheme={selectedTheme}
                notificationPageName={notificationPageName}
                handleSearchtest={handleSearchtest}
                setDebounceSearchText={setDebounceSearchText}
              />
            ) : (
              notificationText
            )}
          </div>
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
        </div>
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
          {notificationPageName === "asset" ||
          notificationPageName === "dashboard" ? (
            !loaderAssetNotificationResponse ? (
              searchValue && searchValue?.length > 0 ? (
                <NotificationListItems
                  data={searchValue}
                  //  key={index}
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
              )
            ) : (
              <Loader isHundredVh={false} imgWidth={"20%"} />
            )
          ) : searchValue && searchValue?.length > 0 ? (
            <NotificationListItems
              data={searchValue}
              //  key={index}
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
