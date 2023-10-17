/** @format */
// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Grid, Alert, Snackbar, Typography, Link } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import useTranslation from "localization/translations";
import Tabs from "../../elements/Tabs";
import customTheme from "../../theme/theme";
import ReactPlayer from "react-player";
import FleetSampleVideo from "../../assets/fleetVideos/entry-exit-cars.mp4";
import FleetSampleVideoTwo from "../../assets/fleetVideos/vehicleEntered.mp4";
import llaLoader from "../../assets/loader/llaLoader.gif";
import {
  CloseIcon,
  SpeedometerIcon,
  DistinationLocationIcon,
  FuelIcon,
  IncidentIcon,
  SpeedLimitIcon,
  CamOneImg,
  TripStatusIcon,
  LightSpeedometerIcon,
  LightFuelIcon,
  LightIncidentIcon,
  LightSpeedLimitIcon,
  LightTripStatusIcon,
  NoTripLightIcon,
  NoTripDarkIcon,
} from "../../assets/fleetInfoDialogueIcons";
import LightCloseIcon from "../../assets/lightCloseIcon.svg";
import { LightTotalDistanceIcon } from "../../assets/topPanelListIcons";
import CircularProgressBar from "elements/CircularProgressBar";
import useStyles from "./styles";
import TopPanelListItemContainerInfoDialogue from "components/TopPanelListItemContainerInfoDialogue";
import FleetInfoDialogueViolationContainer from "components/FleetInfoDialogueViolationContainer";
import Map from "components/Map";
import TripDetailsMap from "components/Map/tripDetailsMap";
import Stepper from "elements/Stepper";
import routeDetails from "mockdata/tripDetails";
import useWindowDimensions from "hooks/useWindowDimensions";
import Tooltip from "../../elements/Tooltip";
import {
  getFleetManagementTripDetails,
  setFleetManagementTripDetails,
} from "redux/actions/fleetManagementNotificationActions";
import { formattedViolationsList, getFormattedAddress } from "utils/utils";
import Loader from "elements/Loader";
import { getUserLogout, setUserLogin } from "redux/actions/loginActions";
import { getGoogleMapApi } from "redux/actions/googleMapApiKeyAction";

const DialogWrapper = styled(Dialog)(({ appTheme }: { appTheme: any }) => ({
  "& .MuiDialogContent-root": {
    // padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    // padding: theme.spacing(1),
  },
  "& .MuiBackdrop-root": {
    marginTop: "0px !important",
  },
  "& .MuiPaper-root": {
    // maxHeight: "calc(100% - 150px)",
    // minHeight: "calc(100% - 150px)",

    height: "80vh",
    minWidth: "75vw",
    maxWidth: "75vw",
    background: `${appTheme?.palette?.fleetManagementPage?.infoDialogColor} !important`,
    color: "#fff",
    padding: "1%",
    // [muiTheme.breakpoints.up(5759)]: {
    //   maxHeight: "calc(100% - 370px)",
    //   minHeight: "calc(100% - 370px)",
    // },
    "& .MuiIconButton-root:hover": {
      backgroundColor: "unset !important",
    },
  },
  "& .MuiDialog-container": {
    marginTop: "0px !important",
    // background: "rgba(11, 16, 45 / 68%) !important",
    // background: `${appTheme?.palette?.infoDialogue?.dialogueBackDropBg} !important`,
    backdropFilter: "blur(5.5px)",
    height: "100vh !important",
  },
  "& .MuiMenuItem-root": {
    color: appTheme?.palette?.infoDialogue?.headerSubTitleColor,
  },
}));

const InfoDialogFleetManagement: React.FC<any> = (props) => {
  const navigate = useNavigate();

  const fleetManagementTripDetailsResponse = useSelector(
    (state: any) =>
      state.fleetManagementNotification.fleetManagementTripDetailsData
  );

  const loader = useSelector(
    (state) => state.fleetManagementNotification?.loadingTripDetails
  );

  const dispatch = useDispatch();
  const { dashboard, gridView, fleetManagement } = useTranslation();
  const {
    setShowInfoDialogue,
    selectedMarker,
    is4kDevice,
    selectedTheme,
    selectedMarkerLocation,
    pageName,
  } = props;

  const [tabIndex, setTabIndex] = useState<number>(0);

  const [appTheme, setAppTheme] = useState(customTheme?.defaultTheme);
  const {
    headerStyle,
    headerTabContainerStyle,
    headerTabStyle,
    customNotificationTabs,
    TabvalueTitle,
    noVideoPreview,
  } = useStyles({
    ...appTheme,
    tabIndex: tabIndex,
  });

  // const [selectedTheme, setSelectedTheme] = useState(
  //   JSON.parse(localStorage.getItem("theme")!)
  // );

  const [currentMarker, setCurrentMarker] = useState<any>("");
  const [selectedNotification, setSelectedNotification] = useState<any>("");
  const [isMarkerClicked, setIsMarkerClicked] = useState<boolean>(false);
  const [violations, setViolations] = useState<any>();
  const [points, setPoints] = useState<any>();
  const [success, setSuccess] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [routes, setRoutes] = useState<any>([]);
  const [totalTime, setTotalTime] = useState<any>("");
  const [idleData, setIdleData] = useState<any>();

  useEffect(() => {
    switch (selectedTheme) {
      case "light":
        setAppTheme(customTheme?.lightTheme);
        break;
      case "dark":
        setAppTheme(customTheme?.darkTheme);
        break;
      default:
        setAppTheme(customTheme?.defaultTheme);
        break;
    }
  }, [selectedTheme]);

  useEffect(() => {
    if (
      fleetManagementTripDetailsResponse?.status === 500 ||
      fleetManagementTripDetailsResponse?.status === 404 ||
      fleetManagementTripDetailsResponse?.status === 400 ||
      fleetManagementTripDetailsResponse?.status === 409 ||
      fleetManagementTripDetailsResponse?.status === 413 ||
      fleetManagementTripDetailsResponse?.status === 410
    ) {
      setSuccess(true);
    } else if (fleetManagementTripDetailsResponse?.status === 200) {
      setSuccess(false);
      const data: any = [];
      setViolations(
        formattedViolationsList(
          fleetManagementTripDetailsResponse?.data?.notifications
        )
      );
      fleetManagementTripDetailsResponse?.data?.gpsDTOs?.map((item: any) => {
        data?.push({ lat: item?.lat, lng: item?.lng });
      });
      setPoints(data);
    }
    // const updatedArray: any = [];
    // fleetManagementTripDetailsResponse?.data?.routeDtos?.forEach(
    //   async (item: any, index: number) => {
    //     let address: any = "";
    //     const geocoder: any = new window.google.maps.Geocoder();
    //     const location1: any = new window.google.maps.LatLng(
    //       item?.location?.lat,
    //       item?.location?.lng
    //     );
    //     await geocoder.geocode(
    //       { latLng: location1 },
    //       (results: any, status: any) => {
    //         if (status === "OK" && results[0]) {
    //           address = results[0].formatted_address;
    //         } else {
    //           console.error("Geocode failure: " + status);
    //           return false;
    //         }
    //         updatedArray.push({
    //           ...item,
    //           index: index,
    //           area: address,
    //         });
    //       }
    //     );
    //     setRoutes([...updatedArray]);
    //   }
    // );

    if (fleetManagementTripDetailsResponse?.data?.totalTime) {
      if (
        fleetManagementTripDetailsResponse?.data?.totalTime?.split(":")[0] > 1
      ) {
        setTotalTime("Hrs");
      } else {
        setTotalTime("Hr");
      }
    }
    if (fleetManagementTripDetailsResponse?.data?.idlehours) {
      const totalMinutes = Math.floor(
        fleetManagementTripDetailsResponse?.data?.idlehours / 60
      );
      const hours = Math.floor(totalMinutes / 60);
      setIdleData(hours);
    }
  }, [fleetManagementTripDetailsResponse]);

  const [open, setOpen] = useState(!false);

  useEffect(()=>{
    if(selectedMarker && pageName === "dashboard"){
      dispatch(getFleetManagementTripDetails({ tripId: selectedMarker }));
    }    
  },[selectedMarker])

  useEffect(() => {
    if (selectedMarkerLocation?.tripStatus !== "Live") {
      dispatch(getFleetManagementTripDetails({ tripId: selectedMarker }));
      setSuccess(false);
    }
  }, [selectedMarkerLocation]);

  useEffect(() => {
    if (tabIndex === 2) {
    }
  }, [tabIndex]);

  useEffect(() => {
    setCurrentMarker(selectedMarker);
    setSelectedNotification(selectedMarker?.id);
  }, [selectedMarker]);

  const handleClose = () => {
    setOpen(!open);
    setShowInfoDialogue(false);
    dispatch(setFleetManagementTripDetails({}));
  };

  const tabsList = [
    { name: fleetManagement.tripDetail, val: 0 },
    { name: fleetManagement.vehicleDetail, val: 1 },
    { name: fleetManagement.driverDetail, val: 2 },
  ];

  const camTabsList = [
    { name: "CAM 1", val: 0 },
    { name: "CAM 2", val: 1 },
  ];

  const handleHeaderTab = (index: number) => {
    setTabIndex(index);
  };

  const topPanelListItems: any[] = [
    {
      value:
        tabIndex === 0
          ? fleetManagementTripDetailsResponse?.data?.noOfStops
            ? fleetManagementTripDetailsResponse?.data?.noOfStops
            : 0
          : tabIndex === 1
          ? fleetManagementTripDetailsResponse?.data?.vehicleDetail
              ?.licensePlateNo
            ? fleetManagementTripDetailsResponse?.data?.vehicleDetail
                ?.licensePlateNo
            : ""
          : fleetManagementTripDetailsResponse?.data?.driverDetail?.driverName
          ? fleetManagementTripDetailsResponse?.data?.driverDetail?.driverName
          : "",
      title:
        tabIndex === 0
          ? fleetManagement.stops
          : tabIndex === 1
          ? fleetManagement.licensePlateNumber
          : fleetManagement.driverName,
    },
    {
      value:
        tabIndex === 0
          ? `${
              fleetManagementTripDetailsResponse?.data?.tripCompletion
                ? fleetManagementTripDetailsResponse?.data?.tripCompletion
                : 0
            }%`
          : tabIndex === 1
          ? fleetManagementTripDetailsResponse?.data?.vehicleDetail?.vehicleType
            ? fleetManagementTripDetailsResponse?.data?.vehicleDetail
                ?.vehicleType
            : ""
          : fleetManagementTripDetailsResponse?.data?.driverDetail
              ?.drivingLicense
          ? fleetManagementTripDetailsResponse?.data?.driverDetail
              ?.drivingLicense
          : "",
      title:
        tabIndex === 0
          ? fleetManagement.tripCompletion
          : tabIndex === 1
          ? fleetManagement.vehicleType
          : fleetManagement.drivingLicense,
    },
    {
      value:
        tabIndex === 0
          ? `${
              fleetManagementTripDetailsResponse?.data?.distanceCovered
                ? fleetManagementTripDetailsResponse?.data?.distanceCovered?.toFixed(
                    2
                  )
                : 0
            }Km`
          : tabIndex === 1
          ? fleetManagementTripDetailsResponse?.data?.vehicleDetail
              ?.totalVehicleTrips
            ? fleetManagementTripDetailsResponse?.data?.vehicleDetail
                ?.totalVehicleTrips
            : 0
          : fleetManagementTripDetailsResponse?.data?.driverDetail
              ?.totalDrivingTrips
          ? fleetManagementTripDetailsResponse?.data?.driverDetail
              ?.totalDrivingTrips
          : 0,
      title:
        tabIndex === 0
          ? fleetManagement.distanceCovered
          : tabIndex === 1
          ? fleetManagement.totalTrips
          : fleetManagement.totalTrips,
    },
    {
      value:
        tabIndex === 0
          ? `${
              fleetManagementTripDetailsResponse?.data?.totalTime
                ? fleetManagementTripDetailsResponse?.data?.totalTime
                : 0
            }${totalTime}`
          : tabIndex === 1
          ? `${
              fleetManagementTripDetailsResponse?.data?.vehicleDetail
                ?.totalVehicleDistance
                ? fleetManagementTripDetailsResponse?.data?.vehicleDetail?.totalVehicleDistance?.toFixed(
                    2
                  )
                : 0
            }Km`
          : `${
              fleetManagementTripDetailsResponse?.data?.driverDetail
                ?.totalDistanceDriven
                ? fleetManagementTripDetailsResponse?.data?.driverDetail?.totalDistanceDriven?.toFixed(
                    2
                  )
                : 0
            }Km`,
      title:
        tabIndex === 0
          ? fleetManagement.totalTime
          : tabIndex === 1
          ? `${gridView.total} ${gridView.distance}`
          : `${gridView.total} ${gridView.distance} ${fleetManagement.driven}`,
    },
    {
      value:
        tabIndex === 0
          ? fleetManagementTripDetailsResponse?.data?.totalTripViolation
            ? fleetManagementTripDetailsResponse?.data?.totalTripViolation
            : 0
          : tabIndex === 1
          ? fleetManagementTripDetailsResponse?.data?.vehicleDetail
              ?.totalVehicleViolations
            ? fleetManagementTripDetailsResponse?.data?.vehicleDetail
                ?.totalVehicleViolations
            : 0
          : fleetManagementTripDetailsResponse?.data?.driverDetail
              ?.totalDriverViolations
          ? fleetManagementTripDetailsResponse?.data?.driverDetail
              ?.totalDriverViolations
          : 0,
      title:
        tabIndex === 0
          ? fleetManagement.violations
          : tabIndex === 1
          ? fleetManagement.violations
          : fleetManagement.violations,
    },
  ];

  const vehicleDetailsSubTaskBarItems: any[] = [
    {
      icon:
        tabIndex === 1
          ? selectedTheme === "light"
            ? LightSpeedometerIcon
            : SpeedometerIcon
          : selectedTheme === "light"
          ? fleetManagementTripDetailsResponse?.data?.driverDetail
              ?.driverStatus === "On Trip"
            ? LightTripStatusIcon
            : NoTripLightIcon
          : fleetManagementTripDetailsResponse?.data?.driverDetail
              ?.driverStatus === "On Trip"
          ? TripStatusIcon
          : NoTripDarkIcon,
      value:
        tabIndex === 1
          ? `${
              fleetManagementTripDetailsResponse?.data?.vehicleDetail
                ?.currentTripSpeed
                ? fleetManagementTripDetailsResponse?.data?.vehicleDetail
                    ?.currentTripSpeed
                : 0
            }Kph`
          : fleetManagementTripDetailsResponse?.data?.driverDetail?.driverStatus
          ? fleetManagementTripDetailsResponse?.data?.driverDetail?.driverStatus
          : "No Trip",
      name: tabIndex === 1 ? fleetManagement.speed : fleetManagement.status,
    },
    {
      icon:
        tabIndex === 1
          ? selectedTheme === "light"
            ? LightTotalDistanceIcon
            : DistinationLocationIcon
          : selectedTheme === "light"
          ? LightSpeedometerIcon
          : SpeedometerIcon,
      value:
        tabIndex === 1
          ? `${
              fleetManagementTripDetailsResponse?.data?.vehicleDetail
                ?.currentTripDistance
                ? fleetManagementTripDetailsResponse?.data?.vehicleDetail?.currentTripDistance?.toFixed(
                    2
                  )
                : 0
            }Km`
          : `${
              fleetManagementTripDetailsResponse?.data?.vehicleDetail
                ?.currentTripSpeed
                ? fleetManagementTripDetailsResponse?.data?.vehicleDetail
                    ?.currentTripSpeed
                : 0
            }Kph`,
      name:
        tabIndex === 1
          ? fleetManagement.distanceCovered
          : fleetManagement.speed,
    },
    {
      icon:
        tabIndex === 1
          ? selectedTheme === "light"
            ? LightFuelIcon
            : FuelIcon
          : selectedTheme === "light"
          ? LightTotalDistanceIcon
          : DistinationLocationIcon,
      value:
        tabIndex === 1
          ? `${
              fleetManagementTripDetailsResponse?.data?.vehicleDetail
                ?.currentTripFuelConsumption
                ? fleetManagementTripDetailsResponse?.data?.vehicleDetail?.currentTripFuelConsumption?.toFixed(
                    2
                  )
                : 0
            }Gal`
          : `${
              fleetManagementTripDetailsResponse?.data?.distanceCovered
                ? fleetManagementTripDetailsResponse?.data?.distanceCovered?.toFixed(
                    2
                  )
                : 0
            }Km`,
      name:
        tabIndex === 1
          ? fleetManagement.feulConsumed
          : `${gridView.distance} ${fleetManagement.driven}`,
    },
    {
      icon:
        tabIndex === 1
          ? selectedTheme === "light"
            ? LightIncidentIcon
            : IncidentIcon
          : selectedTheme === "light"
          ? LightIncidentIcon
          : IncidentIcon,
      value:
        tabIndex === 1
          ? fleetManagementTripDetailsResponse?.data?.totalTripViolation
            ? fleetManagementTripDetailsResponse?.data?.totalTripViolation
            : 0
          : fleetManagementTripDetailsResponse?.data?.totalTripViolation
          ? fleetManagementTripDetailsResponse?.data?.totalTripViolation
          : 0,
      name: fleetManagement.violations,
    },
    {
      icon: selectedTheme === "light" ? LightSpeedLimitIcon : SpeedLimitIcon,
      value: `${
        fleetManagementTripDetailsResponse?.data?.tripSafetyScore
          ? Math.floor(
              fleetManagementTripDetailsResponse?.data?.tripSafetyScore
            )
          : 0
      }%`,
      name: fleetManagement.safetyScore,
    },
  ];

  const [cameraTabIndex, setCameraTabIndex] = useState<number>(0);

  const handleTabs = (index: number) => {
    setCameraTabIndex(index);
  };

  const { width, height }: any = useWindowDimensions();

  const getSpeedometerDimensions = () => {
    if (window.innerWidth > 3839) {
      return {
        radius: 150,
        cut: 34,
        rotate: 105,
        stroke: 18,
        iconSize: 45,
      };
    } else if (window.innerWidth > 3071) {
      return {
        radius: 120,
        cut: 18,
        rotate: 90,
        stroke: 18,
        iconSize: 35,
      };
    } else if (window.innerWidth > 2047) {
      return {
        radius: 70,
        cut: 10,
        rotate: 90,
        stroke: 10,
        iconSize: 25,
      };
    } else if (window.innerWidth > 1919) {
      return {
        radius: 70,
        cut: 10,
        rotate: 90,
        stroke: 10,
        iconSize: 25,
      };
    } else if (window.innerWidth > 1791) {
      return {
        radius: 60,
        cut: 10,
        rotate: 80,
        stroke: 10,
        iconSize: 17,
      };
    } else if (window.innerWidth > 1023) {
      return {
        radius: 28,
        cut: 4,
        rotate: 80,
        stroke: 6,
        iconSize: 13,
      };
    } else {
      return {
        radius: 70,
        cut: 60,
        rotate: 120,
        stroke: 11,
        iconSize: 20,
      };
    }
  };

  const [screenResolution, setScreenResolution] = useState<any>("2k");

  useEffect(() => {
    if (window.innerWidth > 3839) {
      setScreenResolution("4k");
    } else if (window.innerWidth < 3839) {
      setScreenResolution("2k");
    }
  }, []);

  useEffect(() => {
    if (count > 3) {
      localStorage.removeItem("user");
      localStorage.clear();
      dispatch(getUserLogout());
      dispatch(setUserLogin({}));
      navigate("/login");
    }
  }, [count]);

  const tooltipOfset = screenResolution === "2k" ? [0, 10] : [0, 40];
  const fontSize = screenResolution === "2k" ? [14] : [22];
  const padding = [2];

  const handleErrorClose = () => {
    setSuccess(false);
  };

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setSuccess(false);
    dispatch(getFleetManagementTripDetails({ tripId: selectedMarker }));
  };

 //Google Map Api Key Data fetching start here
 useEffect(()=>{
  let assetLiveDataPayload: any = {};
  dispatch(getGoogleMapApi(assetLiveDataPayload));
},[])

  const googleMapApiKeyData = useSelector(
    (state: any) => state?.googleMapApiKey?.googleMapApiKeyData
  );

 //Google Map Api Key Data fetching end here 

  return (
    <>
      {success && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={success}
          onClose={handleErrorClose}
        >
          <Alert
            onClose={handleErrorClose}
            severity={
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
            {fleetManagementTripDetailsResponse?.status === 500 && (
              <div style={{ display: "flex" }}>
                <Typography>Something went wrong...</Typography>
                <Link component="button" variant="body2" onClick={handleClick}>
                  Please try again
                </Link>
              </div>
            )}
            {fleetManagementTripDetailsResponse?.status === 404 && (
              <div style={{ display: "flex" }}>
                <Typography>Data Not Available</Typography>
              </div>
            )}
            {fleetManagementTripDetailsResponse?.status === 400 && (
              <div style={{ display: "flex" }}>
                <Typography>Bad Request</Typography>
              </div>
            )}
            {fleetManagementTripDetailsResponse?.status === 409 && (
              <div style={{ display: "flex" }}>
                <Typography>Already data available</Typography>
              </div>
            )}
            {fleetManagementTripDetailsResponse?.status === 413 && (
              <div style={{ display: "flex" }}>
                <Typography>Request too large</Typography>
              </div>
            )}
            {fleetManagementTripDetailsResponse?.status === 410 && (
              <div style={{ display: "flex" }}>
                <Typography>Request not available</Typography>
              </div>
            )}
          </Alert>
        </Snackbar>
      )}
      <DialogWrapper open={open} sx={{ top: "0px" }} appTheme={appTheme}>
        {selectedMarkerLocation?.tripStatus !== "Live" && loader && !googleMapApiKeyData ? (
          <Loader />
        ) : (
          <>
            <div>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  padding: "0.5%",
                  right: "0.1%",
                  top: "2.5%",
                  color: "transparent",
                  width: "4.2%",
                  height: "4.2%",
                  transition: "none",
                }}
              >
                <img
                  width={"100%"}
                  height={"100%"}
                  src={selectedTheme === "light" ? LightCloseIcon : CloseIcon}
                />
              </IconButton>
            </div>

            <Grid container xs={12} style={{ height: "100%" }}>
              <Grid item xs={12} className={headerStyle}>
                <Grid container xs={5} className={headerTabContainerStyle}>
                  {tabsList?.map((item: any) => (
                    <Grid
                      item
                      className={headerTabStyle}
                      style={{
                        color: tabIndex === item?.val ? "#F2601F" : "#5F5F5F",
                      }}
                      onClick={() => {
                        handleHeaderTab(item?.val);
                      }}
                    >
                      {item?.name}
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12} style={{ height: "10%" }}>
                <TopPanelListItemContainerInfoDialogue
                  topPanelListItems={topPanelListItems}
                  percent={
                    tabIndex === 0
                      ? fleetManagementTripDetailsResponse?.data
                          ?.tripSafetyScore
                        ? Math.floor(
                            fleetManagementTripDetailsResponse?.data
                              ?.tripSafetyScore
                          )
                        : 0
                      : tabIndex === 1
                      ? fleetManagementTripDetailsResponse?.data?.vehicleDetail
                          ?.vehiclSafetyScore
                        ? Math.floor(
                            fleetManagementTripDetailsResponse?.data
                              ?.vehicleDetail?.vehiclSafetyScore
                          )
                        : 0
                      : fleetManagementTripDetailsResponse?.data?.driverDetail
                          ?.driverSafetyScore
                      ? Math.floor(
                          fleetManagementTripDetailsResponse?.data?.driverDetail
                            ?.driverSafetyScore
                        )
                      : 0
                  }
                  strokeWidth={10}
                  trailWidth={10}
                  strokeColor="#92C07E"
                  trailColor={
                    appTheme?.palette?.fleetManagementPage?.dialogProgressBarBg
                  }
                  title={fleetManagement.safetyScore}
                  pageName={"fleetInfoDialogue"}
                  horizontalProgressBarTitlePosition={"down"}
                  selectedTheme={selectedTheme}
                />
              </Grid>
              <Grid item xs={12} style={{ height: "80%", paddingTop: "1%" }}>
                <Grid container xs={12} style={{ height: "100%" }}>
                  <Grid
                    item
                    xs={2.3}
                    style={{
                      height: "100%",
                      border: `1px solid ${appTheme?.palette?.fleetManagementPage?.listItemsBorder}`,
                      background:
                        appTheme?.palette?.fleetManagementPage?.routeDetailsBg,
                      padding: " 1%",
                    }}
                  >
                    <Stepper
                      routeDetails={
                        fleetManagementTripDetailsResponse?.data?.routeDtos
                      }
                      tripStatus={
                        fleetManagementTripDetailsResponse?.data?.tripStatus
                      }
                      is4kDevice={is4kDevice}
                      selectedTheme={selectedTheme}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={6.7}
                    style={{ height: "100%", padding: "0 1%" }}
                  >
                    <Grid style={{ height: "100%" }} item xs={12}>
                      {tabIndex === 0 ? ( googleMapApiKeyData && 
                        <TripDetailsMap
                        googleMapsApiKeyResponse={googleMapApiKeyData}
                          markers={[selectedMarkerLocation]}
                          marker={selectedMarkerLocation?.id}
                          currentMarker={selectedMarkerLocation}
                          setCurrentMarker={() => {}}
                          focusedCategory={""}
                          mapPageName={"fleetManagement"}
                          setIsMarkerClicked={setIsMarkerClicked}
                          setSelectedNotification={() => {}}
                          setNotificationPanelActive={() => {}}
                          setTabIndex={() => {}}
                          selectedTheme={selectedTheme}
                          dataPoints={points}
                          tripStatus={
                            fleetManagementTripDetailsResponse?.data?.tripStatus
                          }
                        />
                      ) : tabIndex === 1 ? (
                        <Grid container xs={12} style={{ height: "100%" }}>
                          <Grid item xs={12} style={{ height: "13%" }}>
                            <Grid
                              container
                              xs={12}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                              style={{
                                height: "100%",
                                background:
                                  appTheme?.palette?.fleetManagementPage
                                    ?.routeDetailsBg,
                                border: `1px solid ${appTheme?.palette?.fleetManagementPage?.listItemsBorder}`,
                              }}
                            >
                              {vehicleDetailsSubTaskBarItems?.length > 0 &&
                                vehicleDetailsSubTaskBarItems?.map(
                                  (item: any) => (
                                    <Grid
                                      item
                                      display={"flex"}
                                      alignItems={"center"}
                                      justifyContent={"center"}
                                      columnGap={2}
                                      flex={1}
                                    >
                                      <div
                                        style={{ width: "18%", height: "18%" }}
                                      >
                                        <Tooltip
                                          tooltipValue={item?.name}
                                          placement={"bottom"}
                                          offset={tooltipOfset}
                                          fontSize={fontSize}
                                          padding={padding}
                                          componentName={"TopPanelList"}
                                        >
                                          <img
                                            width={"100%"}
                                            height={"100%"}
                                            src={item?.icon}
                                          />
                                        </Tooltip>
                                      </div>
                                      <div className={TabvalueTitle}>
                                        {item?.value}
                                      </div>
                                    </Grid>
                                  )
                                )}
                            </Grid>
                          </Grid>
                          <Grid item xs={12} paddingTop={1} height={"87%"}>
                            <Grid container xs={12} height={"100%"}>
                              <Grid
                                item
                                xs={12}
                                height={"13%"}
                                display={"flex"}
                                alignItems={"center"}
                              >
                                <Tabs
                                  initialIndex={cameraTabIndex}
                                  tabsList={camTabsList}
                                  handleTabs={handleTabs}
                                  dashboardNotificationClassName={
                                    customNotificationTabs
                                  }
                                  pageName={"fleetInfoDialogue"}
                                />
                              </Grid>
                              <Grid item xs={12} height={"87%"} paddingTop={1}>
                                {
                                  // @ts-ignore
                                }
                                {(
                                  cameraTabIndex === 0
                                    ? fleetManagementTripDetailsResponse?.data
                                        ?.videoUrl1
                                    : fleetManagementTripDetailsResponse?.data
                                        ?.videoUrl2
                                ) ? (
                                  <ReactPlayer
                                    muted
                                    playing
                                    loop={true}
                                    controls={true}
                                    url={
                                      cameraTabIndex === 0
                                        ? fleetManagementTripDetailsResponse
                                            ?.data?.videoUrl1
                                        : fleetManagementTripDetailsResponse
                                            ?.data?.videoUrl2
                                    }
                                    width="100%"
                                    height="100%"
                                  />
                                ) : (
                                  <div className={noVideoPreview}>
                                    No Video Content Available
                                  </div>
                                )}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      ) : (
                        <Grid container xs={12} style={{ height: "100%" }}>
                          <Grid item xs={12} style={{ height: "13%" }}>
                            <Grid
                              container
                              xs={12}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                              style={{
                                height: "100%",
                                background:
                                  appTheme?.palette?.fleetManagementPage
                                    ?.routeDetailsBg,
                                border: `1px solid ${appTheme?.palette?.fleetManagementPage?.listItemsBorder}`,
                              }}
                            >
                              {vehicleDetailsSubTaskBarItems?.length > 0 &&
                                vehicleDetailsSubTaskBarItems?.map(
                                  (item: any, index: number) =>
                                    index < 4 && (
                                      <Grid
                                        item
                                        display={"flex"}
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        columnGap={2}
                                        flex={1}
                                      >
                                        <div
                                          style={{
                                            width: "15%",
                                            height: "15%",
                                          }}
                                        >
                                          <Tooltip
                                            tooltipValue={item?.name}
                                            placement={"bottom"}
                                            offset={tooltipOfset}
                                            fontSize={fontSize}
                                            padding={padding}
                                            componentName={"TopPanelList"}
                                          >
                                            <img
                                              width={"100%"}
                                              height={"100%"}
                                              src={item?.icon}
                                            />
                                          </Tooltip>
                                        </div>
                                        <div className={TabvalueTitle}>
                                          {item?.value}
                                        </div>
                                      </Grid>
                                    )
                                )}
                            </Grid>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            marginTop={"2%"}
                            height={"85%"}
                            border={"1px solid #333333"}
                          >
                            <Grid
                              container
                              xs={12}
                              height={"100%"}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Grid item>
                                <CircularProgressBar
                                  selectedTheme={selectedTheme}
                                  radius={getSpeedometerDimensions().radius}
                                  currentValue={
                                    fleetManagementTripDetailsResponse?.data
                                      ?.tripSafetyScore
                                      ? Math.floor(
                                          fleetManagementTripDetailsResponse
                                            ?.data?.tripSafetyScore
                                        )
                                      : 0
                                  }
                                  totalValue={110}
                                  label={
                                    fleetManagement.drivingScore.substring(
                                      0,
                                      15
                                    ) +
                                    (fleetManagement.drivingScore.length
                                      ? "..."
                                      : "")
                                  }
                                  icon="driving-score"
                                  rotate={getSpeedometerDimensions().rotate}
                                  cut={getSpeedometerDimensions().cut}
                                  iconSize={getSpeedometerDimensions().iconSize}
                                  color={
                                    appTheme?.palette?.fleetManagementPage
                                      ?.circularProgressBar?.stokeColorGreen
                                  }
                                  thumbType="point"
                                  strokeWidth={
                                    getSpeedometerDimensions().stroke
                                  }
                                  trackStrokeWidth={
                                    getSpeedometerDimensions().stroke
                                  }
                                  trackStrokeColor={
                                    appTheme?.palette?.fleetManagementPage
                                      ?.circularProgressBar?.track
                                  }
                                />
                              </Grid>
                              <Grid item>
                                <CircularProgressBar
                                  selectedTheme={selectedTheme}
                                  radius={getSpeedometerDimensions().radius}
                                  currentValue={
                                    fleetManagementTripDetailsResponse?.data
                                      ?.harshAccelaration
                                      ? fleetManagementTripDetailsResponse?.data
                                          ?.harshAccelaration
                                      : 0
                                  }
                                  totalValue={15}
                                  label={
                                    fleetManagement.harshAcceleration.substring(
                                      0,
                                      15
                                    ) +
                                    (fleetManagement.harshAcceleration.length
                                      ? "..."
                                      : "")
                                  }
                                  icon="harsh-acceleration"
                                  rotate={getSpeedometerDimensions().rotate}
                                  cut={getSpeedometerDimensions().cut}
                                  iconSize={getSpeedometerDimensions().iconSize}
                                  color={
                                    appTheme?.palette?.fleetManagementPage
                                      ?.circularProgressBar?.stokeColorGreen
                                  }
                                  thumbType="point"
                                  strokeWidth={
                                    getSpeedometerDimensions().stroke
                                  }
                                  trackStrokeWidth={
                                    getSpeedometerDimensions().stroke
                                  }
                                  trackStrokeColor={
                                    appTheme?.palette?.fleetManagementPage
                                      ?.circularProgressBar?.track
                                  }
                                />
                              </Grid>
                              <Grid item>
                                <CircularProgressBar
                                  selectedTheme={selectedTheme}
                                  radius={getSpeedometerDimensions().radius}
                                  currentValue={
                                    fleetManagementTripDetailsResponse?.data
                                      ?.cornering
                                      ? fleetManagementTripDetailsResponse?.data
                                          ?.cornering
                                      : 0
                                  }
                                  totalValue={15}
                                  label={
                                    fleetManagement.cornering.substring(0, 15) +
                                    (fleetManagement.cornering.length
                                      ? "..."
                                      : "")
                                  }
                                  icon="corner"
                                  rotate={getSpeedometerDimensions().rotate}
                                  cut={getSpeedometerDimensions().cut}
                                  iconSize={getSpeedometerDimensions().iconSize}
                                  color={
                                    appTheme?.palette?.fleetManagementPage
                                      ?.circularProgressBar?.stokeColorGreen
                                  }
                                  thumbType="point"
                                  strokeWidth={
                                    getSpeedometerDimensions().stroke
                                  }
                                  trackStrokeWidth={
                                    getSpeedometerDimensions().stroke
                                  }
                                  trackStrokeColor={
                                    appTheme?.palette?.fleetManagementPage
                                      ?.circularProgressBar?.track
                                  }
                                />
                              </Grid>
                              <Grid item>
                                <CircularProgressBar
                                  selectedTheme={selectedTheme}
                                  radius={getSpeedometerDimensions().radius}
                                  currentValue={
                                    fleetManagementTripDetailsResponse?.data
                                      ?.overSpeeding
                                      ? fleetManagementTripDetailsResponse?.data
                                          ?.overSpeeding
                                      : 0
                                  }
                                  totalValue={15}
                                  label={
                                    gridView.overspeeding.substring(0, 15) +
                                    (gridView.overspeeding.length ? "..." : "")
                                  }
                                  icon={
                                    fleetManagementTripDetailsResponse?.data
                                      ?.overSpeeding === 0
                                      ? "overspeeding-new-1"
                                      : "overspeeding-new"
                                  }
                                  rotate={getSpeedometerDimensions().rotate}
                                  cut={getSpeedometerDimensions().cut}
                                  iconSize={getSpeedometerDimensions().iconSize}
                                  color={
                                    fleetManagementTripDetailsResponse?.data
                                      ?.overSpeeding === 0
                                      ? appTheme?.palette?.fleetManagementPage
                                          ?.circularProgressBar?.stokeColorGreen
                                      : appTheme?.palette?.fleetManagementPage
                                          ?.circularProgressBar?.stokeColorRed
                                  }
                                  thumbType="point"
                                  strokeWidth={
                                    getSpeedometerDimensions().stroke
                                  }
                                  trackStrokeWidth={
                                    getSpeedometerDimensions().stroke
                                  }
                                  trackStrokeColor={
                                    appTheme?.palette?.fleetManagementPage
                                      ?.circularProgressBar?.track
                                  }
                                />
                              </Grid>
                              <Grid item>
                                <CircularProgressBar
                                  selectedTheme={selectedTheme}
                                  radius={getSpeedometerDimensions().radius}
                                  currentValue={
                                    fleetManagementTripDetailsResponse?.data
                                      ?.harshbreaking
                                      ? fleetManagementTripDetailsResponse?.data
                                          ?.harshbreaking
                                      : 0
                                  }
                                  totalValue={7}
                                  label={
                                    gridView.harshBreaking.substring(0, 15) +
                                    (gridView.harshBreaking.length > 15
                                      ? "..."
                                      : "")
                                  }
                                  icon="harsh-braking"
                                  rotate={getSpeedometerDimensions().rotate}
                                  cut={getSpeedometerDimensions().cut}
                                  iconSize={getSpeedometerDimensions().iconSize}
                                  color={
                                    appTheme?.palette?.fleetManagementPage
                                      ?.circularProgressBar?.stokeColorGreen
                                  }
                                  thumbType="point"
                                  strokeWidth={
                                    getSpeedometerDimensions().stroke
                                  }
                                  trackStrokeWidth={
                                    getSpeedometerDimensions().stroke
                                  }
                                  trackStrokeColor={
                                    appTheme?.palette?.fleetManagementPage
                                      ?.circularProgressBar?.track
                                  }
                                />
                              </Grid>
                              <Grid item>
                                <CircularProgressBar
                                  selectedTheme={selectedTheme}
                                  radius={getSpeedometerDimensions().radius}
                                  currentValue={
                                    fleetManagementTripDetailsResponse?.data
                                      ?.distraction
                                      ? fleetManagementTripDetailsResponse?.data
                                          ?.distraction
                                      : 0
                                  }
                                  totalValue={15}
                                  label={
                                    fleetManagement.distraction.substring(
                                      0,
                                      15
                                    ) +
                                    (fleetManagement.distraction.length
                                      ? "..."
                                      : "")
                                  }
                                  icon="distraction"
                                  rotate={getSpeedometerDimensions().rotate}
                                  cut={getSpeedometerDimensions().cut}
                                  iconSize={getSpeedometerDimensions().iconSize}
                                  color={
                                    appTheme?.palette?.fleetManagementPage
                                      ?.circularProgressBar?.stokeColorGreen
                                  }
                                  thumbType="point"
                                  strokeWidth={
                                    getSpeedometerDimensions().stroke
                                  }
                                  trackStrokeWidth={
                                    getSpeedometerDimensions().stroke
                                  }
                                  trackStrokeColor={
                                    appTheme?.palette?.fleetManagementPage
                                      ?.circularProgressBar?.track
                                  }
                                />
                              </Grid>
                              <Grid item>
                                <CircularProgressBar
                                  selectedTheme={selectedTheme}
                                  radius={getSpeedometerDimensions().radius}
                                  currentValue={
                                    fleetManagementTripDetailsResponse?.data
                                      ?.idlehours
                                      ? idleData
                                      : 0
                                  }
                                  totalValue={110}
                                  label={
                                    fleetManagement.idleHrs.substring(0, 15) +
                                    (fleetManagement.idleHrs.length
                                      ? "..."
                                      : "")
                                  }
                                  icon="idle-hours"
                                  rotate={getSpeedometerDimensions().rotate}
                                  cut={getSpeedometerDimensions().cut}
                                  iconSize={getSpeedometerDimensions().iconSize}
                                  color={
                                    appTheme?.palette?.fleetManagementPage
                                      ?.circularProgressBar?.stokeColorGreen
                                  }
                                  thumbType="point"
                                  strokeWidth={
                                    getSpeedometerDimensions().stroke
                                  }
                                  trackStrokeWidth={
                                    getSpeedometerDimensions().stroke
                                  }
                                  trackStrokeColor={
                                    appTheme?.palette?.fleetManagementPage
                                      ?.circularProgressBar?.track
                                  }
                                />
                              </Grid>
                              <Grid item>
                                <CircularProgressBar
                                  selectedTheme={selectedTheme}
                                  radius={getSpeedometerDimensions().radius}
                                  currentValue={
                                    fleetManagementTripDetailsResponse?.fatigueLevel
                                      ? fleetManagementTripDetailsResponse?.fatigueLevel
                                      : 0
                                  }
                                  totalValue={110}
                                  label={
                                    fleetManagement.fatigueLevel.substring(
                                      0,
                                      15
                                    ) +
                                    (fleetManagement.fatigueLevel.length
                                      ? "..."
                                      : "")
                                  }
                                  textValue="Very Active"
                                  icon="fatigue"
                                  rotate={getSpeedometerDimensions().rotate}
                                  cut={getSpeedometerDimensions().cut}
                                  iconSize={getSpeedometerDimensions().iconSize}
                                  color={
                                    appTheme?.palette?.fleetManagementPage
                                      ?.circularProgressBar?.stokeColorGreen
                                  }
                                  thumbType="thumb"
                                  strokeWidth={
                                    getSpeedometerDimensions().stroke
                                  }
                                  trackStrokeWidth={
                                    getSpeedometerDimensions().stroke
                                  }
                                  trackStrokeColor={
                                    appTheme?.palette?.fleetManagementPage
                                      ?.circularProgressBar?.track
                                  }
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    style={{
                      height: "100%",
                      border: `1px solid ${appTheme?.palette?.fleetManagementPage?.listItemsBorder}`,
                      background:
                        appTheme?.palette?.fleetManagementPage?.violationBg,
                      padding: "1% 0% 1% 1%",
                    }}
                  >
                    <FleetInfoDialogueViolationContainer
                      violationListItems={violations}
                      selectedTheme={selectedTheme}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </DialogWrapper>
    </>
  );
};

export default InfoDialogFleetManagement;
