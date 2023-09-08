/** @format */

import { useState, useEffect, Fragment } from "react";
import Map from "components/Map";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getNotificationData } from "redux/actions/getAllAssertNotificationAction";
import {
  getFleetManagementNotificationData,
  setFleetManagementNotificationData,
  getFleetManagementOverAllTripDetails,
} from "redux/actions/fleetManagementNotificationActions";
import theme from "../../theme/theme";
import moment from "moment";
import NotificationPanel from "components/NotificationPanel";
import {
  formatttedAssetAPINotification,
  formatttedDashboardAPINotificaiton,
  formatttedDashboardNotification,
  formatttedDashboardNotificationCount,
  formatttedFleetAPINotification,
} from "../../utils/utils";
import FlippingCard from "components/FlippingCard/FlippingCard";
import NotificationActiveIcon from "../../assets/NotificationActive.svg";
import LightThemeNotificationIcon from "../../assets/lightThemeNotificationIcon.svg";
import LightThemeNotificationIconActive from "../../assets/lightThemeNotificationIconActive.svg";
import NotificationIcon from "../../assets/notificationIcon.svg";
import dashboardList from "mockdata/dashboardNotification";
import { Grid, Alert, Snackbar, Typography, Link } from "@mui/material";
import dashboardNotification from "../../mockdata/dashboardNotificationAPIFormat";
import useStyles from "./styles";
import fleetManagementResponse from "mockdata/fleetManagementAPI";
import assetTrackingResponse from "mockdata/assetTrackingAPI";
import { getAdminPanelConfigData } from "redux/actions/adminPanel";
import InfoDialogFleetVideo from "components/InfoDialogFleetVideo";
import Loader from "elements/Loader";
import { getUserLogout, setUserLogin } from "redux/actions/loginActions";
import {getAssetTrackingGridViewAnalyticsData } from "redux/actions/assetTrackingActiveInActiveAnalyticsAction";

interface DashboardContainerProps {
  handleviewDetails?: any;
}

const DashboardContainer: React.FC<DashboardContainerProps> = (
  props: DashboardContainerProps
) => {
  const navigate = useNavigate();

  const adminPanelData = useSelector(
    (state: any) => state?.adminPanel?.getConfigData?.data?.body
  );

  const loaderAdminGetConfigData = useSelector(
    (state: any) => state?.adminPanel?.loadingGetConfigData
  );

  const adminPanelSaveData = useSelector(
    (state: any) => state?.adminPanel?.configData
  );

  const loaderAdminConfigData = useSelector(
    (state: any) => state?.adminPanel?.loadingConfigData
  );

  const dispatch = useDispatch();

  const [selectedTheme, setSelectedTheme] = useState<any>();

  const fleetManagementNotificationResponse = useSelector(
    (state: any) =>
      state?.fleetManagementNotification?.fleetManagementNotificationData
  );

  const loaderFleetManagementNotification = useSelector(
    (state: any) => state?.fleetManagementNotification?.loadingNotificationData
  );

  // const fleetManagementNotificationResponse  = fleetManagementResponse;

  const assetNotificationResponse = useSelector(
    (state: any) => state?.assetNotification?.assetNotificationData
  );


  const fleetManagementTripDetailsResponse = useSelector(
    (state: any) =>
      state.fleetManagementNotification.fleetManagementOverAllTripDetailsData
  );

  const overAllAnalyticsLoader = useSelector(
    (state: any) => state.fleetManagementNotification?.loadingOverAllAnalytics
  );


  const assetTrackingGridViewAnalyticsDataResponse = useSelector(
    (state: any) =>
      state.assetTrackingActiveInActiveAnalytics
        .assetTrackingGridViewAnalyticsData
  );


  // const assetNotificationResponse = assetTrackingResponse;

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [tabIndex, setTabIndex] = useState<any>(1);
  const [selectedNotification, setSelectedNotification] = useState<any>("");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [notificationPanelActive, setNotificationPanelActive] =
    useState<boolean>(false);
  const [currentMarker, setCurrentMarker] = useState<any>("");
  const [currentOpenedCard, setCurrentOpenedCard] = useState<any>("");
  const [focusedCategory, setFocusedCategory] = useState<any>("");
  const [isMarkerClicked, setIsMarkerClicked] = useState<boolean>(false);
  const [map, setMap] = useState<any>(null);
  const [showInfoDialogueVideo, setShowInfoDialogueVideo] =
    useState<boolean>(false);
  const [selectedMarker, setSelectedMarker] = useState<any>();
  const [success, setSuccess] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    dispatch(getAdminPanelConfigData({ isPreview: "N", isDefault: "N" }));
    dispatch(getAssetTrackingGridViewAnalyticsData("Day"));
  }, []);

  useEffect(() => {
    if (adminPanelSaveData?.body?.isPreview === "Y") {
      dispatch(getAdminPanelConfigData({ isPreview: "Y", isDefault: "N" }));
    }
  }, [adminPanelSaveData]);

  useEffect(() => {
    setSelectedTheme(adminPanelData?.appearance);
  }, [adminPanelData]);

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
    setNotificationPanelActive(!notificationPanelActive);
  };

  useEffect(() => {
    const assetPayload: any = {
      "filterText": "",
      "pageNo": 0,
      "pageSize": 100
    };
    dispatch(getNotificationData(assetPayload));
    const fleetPayload: any = {};
    dispatch(setFleetManagementNotificationData({}));
    dispatch(getFleetManagementNotificationData(fleetPayload));
    dispatch(getFleetManagementOverAllTripDetails({ type: "Day" }));
    setSuccess(false);
  }, []);

  const [dashboardNotificationList, setDashboardNotificationList] =
    useState<any>([]);

  useEffect(() => {
    if (assetNotificationResponse && fleetManagementNotificationResponse) {
      const assetNotiData: any = formatttedAssetAPINotification(
        assetNotificationResponse?.data
      );
      const dashboardNotiData: any = formatttedDashboardAPINotificaiton(
        dashboardNotification?.notifications
      );
      const fleetNotiData: any = formatttedFleetAPINotification(
        fleetManagementNotificationResponse?.data
      );
      if (
        assetNotiData &&
        assetNotiData?.length > 0 &&
        fleetNotiData &&
        fleetNotiData?.length > 0
      ) {
        const consolidatedData = [
          ...assetNotiData,
          ...dashboardNotiData,
          // ...fleetNotiData,
        ];
        setDashboardNotificationList(consolidatedData);
      }
    }
  }, []);

  useEffect(() => {
    setSuccess(false);
    if (
      fleetManagementNotificationResponse?.status === 500 ||
      fleetManagementNotificationResponse?.status === 404 ||
      fleetManagementNotificationResponse?.status === 400 ||
      fleetManagementNotificationResponse?.status === 409 ||
      fleetManagementNotificationResponse?.status === 413 ||
      fleetManagementNotificationResponse?.status === 410 ||
      fleetManagementTripDetailsResponse?.status === 500 ||
      fleetManagementTripDetailsResponse?.status === 404 ||
      fleetManagementTripDetailsResponse?.status === 400 ||
      fleetManagementTripDetailsResponse?.status === 409 ||
      fleetManagementTripDetailsResponse?.status === 413 ||
      fleetManagementTripDetailsResponse?.status === 410
    ) {
      setSuccess(true);
    } else if (
      assetNotificationResponse &&
      fleetManagementNotificationResponse?.status === 200
    ) {
      setSuccess(false);
      const assetNotiData: any = formatttedAssetAPINotification(
        assetNotificationResponse?.data
      );
      const dashboardNotiData: any = formatttedDashboardAPINotificaiton(
        dashboardNotification?.notifications
      );
      const fleetNotiData: any = formatttedFleetAPINotification(
        fleetManagementNotificationResponse?.data
      );
      if (
        assetNotiData &&
        assetNotiData?.length > 0 &&
        fleetNotiData &&
        fleetNotiData?.length > 0
      ) {
        const consolidatedData = [
          ...assetNotiData,
          ...dashboardNotiData,
          // ...fleetNotiData,
        ];
        setDashboardNotificationList(consolidatedData);
      }
    }
  }, [assetNotificationResponse, fleetManagementNotificationResponse]);

  const [notificationCount, setNotificationCount] = useState<any>(
    assetNotificationResponse &&
      fleetManagementNotificationResponse &&
      formatttedDashboardNotificationCount(dashboardNotificationList)
  );

  useEffect(() => {
    setNotificationCount(
      formatttedDashboardNotificationCount(dashboardNotificationList)
    );
  }, [dashboardNotificationList]);

  const [searchValue, setSearchValue] = useState<any>(
    dashboardNotificationList &&
      formatttedDashboardNotification(dashboardNotificationList, tabIndex)
  );

  const [dashboardData, setDashboardData] = useState<any>(
    dashboardNotificationList &&
      formatttedDashboardNotification(dashboardNotificationList, tabIndex)
  );

  useEffect(() => {
    setDashboardData(
      formatttedDashboardNotification(dashboardNotificationList, tabIndex)
    );
    setSearchValue(
      formatttedDashboardNotification(dashboardNotificationList, tabIndex)
    );
  }, [dashboardNotificationList, tabIndex]);

  useEffect(() => {
    if (!notificationPanelActive) {
      setSearchOpen(false);
      setTabIndex(1);
      setCurrentMarker("");
      setSelectedNotification("");
      setSearchValue(dashboardData);
    }
  }, [notificationPanelActive]);

  useEffect(() => {
    if (count > 3) {
      localStorage.removeItem("user");
      localStorage.clear();
      dispatch(getUserLogout());
      dispatch(setUserLogin({}));
      dispatch(setFleetManagementNotificationData({}));
      setSuccess(false);
      navigate("/login");
    }
  }, [count]);

  const handleVideoDetails = (event: any, data: any) => {
    event.stopPropagation();
    setShowInfoDialogueVideo(true);
    setSelectedMarker(data);
  };

  const handleClose = () => {
    setSuccess(false);
  };

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setSuccess(false);
    dispatch(getFleetManagementNotificationData({}));
  };

  return (
    <>
      {success && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={success}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={
              fleetManagementNotificationResponse?.status === 500 ||
              fleetManagementNotificationResponse?.status === 404 ||
              fleetManagementNotificationResponse?.status === 400 ||
              fleetManagementNotificationResponse?.status === 409 ||
              fleetManagementNotificationResponse?.status === 413 ||
              fleetManagementNotificationResponse?.status === 410 ||
              fleetManagementTripDetailsResponse?.status === 500 ||
              fleetManagementTripDetailsResponse?.status === 404 ||
              fleetManagementTripDetailsResponse?.status === 400 ||
              fleetManagementTripDetailsResponse?.status === 409 ||
              fleetManagementTripDetailsResponse?.status === 413 ||
              fleetManagementTripDetailsResponse?.status === 410
                ? "error"
                : undefined
            }
            sx={{ width: "100%" }}
          >
            {(fleetManagementNotificationResponse?.status === 500 ||
              fleetManagementTripDetailsResponse?.status === 500) && (
              <div style={{ display: "flex" }}>
                <Typography>Something went wrong...</Typography>
                <Link component="button" variant="body2" onClick={handleClick}>
                  Please try again
                </Link>
              </div>
            )}
            {(fleetManagementNotificationResponse?.status === 404 ||
              fleetManagementTripDetailsResponse?.status === 404) && (
              <div style={{ display: "flex" }}>
                <Typography>Data Not Available</Typography>
              </div>
            )}
            {(fleetManagementNotificationResponse?.status === 400 ||
              fleetManagementTripDetailsResponse?.status === 400) && (
              <div style={{ display: "flex" }}>
                <Typography>Bad Request</Typography>
              </div>
            )}
            {(fleetManagementNotificationResponse?.status === 409 ||
              fleetManagementTripDetailsResponse?.status === 409) && (
              <div style={{ display: "flex" }}>
                <Typography>Already data available</Typography>
              </div>
            )}
            {(fleetManagementNotificationResponse?.status === 413 ||
              fleetManagementTripDetailsResponse?.status === 413) && (
              <div style={{ display: "flex" }}>
                <Typography>Request too large</Typography>
              </div>
            )}
            {(fleetManagementNotificationResponse?.status === 410 ||
              fleetManagementTripDetailsResponse?.status === 410) && (
              <div style={{ display: "flex" }}>
                <Typography>Request not available</Typography>
              </div>
            )}
          </Alert>
        </Snackbar>
      )}
      {Object.keys(assetNotificationResponse).length > 0 &&
      !loaderFleetManagementNotification &&
      !loaderAdminGetConfigData &&
      !overAllAnalyticsLoader ? (
        <Grid container xs={12}>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <div className={dashboardRightPanelStyle}>
                <Map
                  markers={dashboardNotificationList}
                  setNotificationPanelActive={setNotificationPanelActive}
                  setSelectedNotification={setSelectedNotification}
                  marker={selectedNotification}
                  setTabIndex={setTabIndex}
                  currentMarker={currentMarker}
                  setCurrentMarker={setCurrentMarker}
                  focusedCategory={focusedCategory}
                  mapPageName={"dashboard"}
                  setIsMarkerClicked={setIsMarkerClicked}
                  tabIndex={tabIndex}
                  handleVideoDetails={handleVideoDetails}
                  handleViewDetails={() => {}}
                  handleAssetViewDetails={() => {}}
                  selectedTheme={selectedTheme}
                  setMap={setMap}
                  map={map}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <img
                src={
                  notificationPanelActive
                    ? selectedTheme === "light"
                      ? LightThemeNotificationIconActive
                      : NotificationActiveIcon
                    : selectedTheme === "light"
                    ? LightThemeNotificationIcon
                    : NotificationIcon
                }
                alt="Notificaion Icon"
                onClick={onHandleBellIcon}
                className={notificationIconSection}
              />
            </Grid>
            <FlippingCard
              currentOpenedCard={currentOpenedCard}
              setCurrentOpenedCard={setCurrentOpenedCard}
              focusedCategory={focusedCategory}
              setFocusedCategory={setFocusedCategory}
              selectedTheme={selectedTheme}
              fleetManagementTripDetailsResponse={
                fleetManagementTripDetailsResponse
              }
              alertCount ={assetTrackingGridViewAnalyticsDataResponse?.data?.alertCount
              }
              assetCount = {assetTrackingGridViewAnalyticsDataResponse?.data?.assetTrackedCount
              }
              locationChangedCount = {assetTrackingGridViewAnalyticsDataResponse?.data?.locationChangeCount  }
            />
            <Grid item xs={4}>
              {notificationPanelActive && (
                <div
                  className={notificationPanelSection}
                  style={{ width: "24%" }}
                >
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
                    notificationPageName={"dashboard"}
                    isMarkerClicked={isMarkerClicked}
                    setIsMarkerClicked={setIsMarkerClicked}
                    handleVideoDetails={handleVideoDetails}
                    handleViewDetails={() => {}}
                    handleAssetViewDetails={() => {}}
                    selectedTheme={selectedTheme}
                    handleExpandListItem={() => {}}
                  />
                </div>
              )}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Loader isHundredVh={true} />
      )}

      {showInfoDialogueVideo && (
        <InfoDialogFleetVideo
          setShowInfoDialogue={setShowInfoDialogueVideo}
          selectedMarker={selectedMarker}
          selectedTheme={selectedTheme}
        />
      )}
    </>
  );
};

export default DashboardContainer;
