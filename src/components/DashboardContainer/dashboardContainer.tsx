/** @format */

import { useState, useEffect, Fragment } from "react";
import Map from "components/Map";
import { useDispatch, useSelector } from "react-redux";
import { getNotificationData } from "redux/actions/getAllAssertNotificationAction";
import { getFleetManagementNotificationData } from "redux/actions/fleetManagementNotificationActions";
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
import Grid from "@mui/material/Grid";
import dashboardNotification from "../../mockdata/dashboardNotificationAPIFormat";
import useStyles from "./styles";
import fleetManagementResponse from "mockdata/fleetManagementAPI";
import assetTrackingResponse from "mockdata/assetTrackingAPI";
import { getAdminPanelConfigData } from "redux/actions/adminPanel";
import InfoDialogFleetVideo from "components/InfoDialogFleetVideo";
import Loader from "elements/Loader";

interface DashboardContainerProps {
  handleviewDetails?: any;
}

const DashboardContainer: React.FC<DashboardContainerProps> = (
  props: DashboardContainerProps
) => {
  const adminPanelData = useSelector(
    (state: any) => state?.adminPanel?.getConfigData?.body
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

  useEffect(() => {
    dispatch(getAdminPanelConfigData({ isPreview: "N" }));
  }, []);

  useEffect(() => {
    if (adminPanelSaveData?.body?.isPreview === "Y") {
      dispatch(getAdminPanelConfigData({ isPreview: "Y" }));
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
    const assetPayload: any = {};
    dispatch(getNotificationData(assetPayload));
    const fleetPayload: any = {};
    dispatch(getFleetManagementNotificationData(fleetPayload));
  }, []);

  const [dashboardNotificationList, setDashboardNotificationList] =
    useState<any>([]);

  useEffect(() => {
    if (assetNotificationResponse && fleetManagementNotificationResponse) {
      const assetNotiData: any = formatttedAssetAPINotification(
        assetNotificationResponse?.notifications
      );
      const dashboardNotiData: any = formatttedDashboardAPINotificaiton(
        dashboardNotification?.notifications
      );
      const fleetNotiData: any = formatttedFleetAPINotification(
        fleetManagementNotificationResponse
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
          ...fleetNotiData,
        ];
        setDashboardNotificationList(consolidatedData);
      }
    }
  }, []);

  useEffect(() => {
    if (assetNotificationResponse && fleetManagementNotificationResponse) {
      const assetNotiData: any = formatttedAssetAPINotification(
        assetNotificationResponse?.notifications
      );
      const dashboardNotiData: any = formatttedDashboardAPINotificaiton(
        dashboardNotification?.notifications
      );
      const fleetNotiData: any = formatttedFleetAPINotification(
        fleetManagementNotificationResponse
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
          ...fleetNotiData,
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

  const handleVideoDetails = (event: any, data: any) => {
    event.stopPropagation();
    setShowInfoDialogueVideo(true);
    setSelectedMarker(data);
  };

  return (
    <>
    {
Object.keys(assetNotificationResponse).length > 0 && !loaderFleetManagementNotification && !loaderAdminGetConfigData ?
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
          />
          <Grid item xs={4}>
            {notificationPanelActive && (
              <div
                className={notificationPanelSection}
                style={{ width: "24%" }}>
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
                />
              </div>
            )}
          </Grid>
        </Grid>
      </Grid>
:
<Loader isHundredVh = {true}/>
      
      
}

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
