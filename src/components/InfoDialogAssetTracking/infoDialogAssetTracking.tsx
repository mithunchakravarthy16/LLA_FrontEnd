/** @format */

import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Button, Alert, Snackbar, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Tabs from "../../elements/Tabs";
import customTheme from "../../theme/theme";
import { CloseIcon } from "../../assets/fleetInfoDialogueIcons";
import useTranslation from "localization/translations";
import useStyles from "./styles";
import CustomizedSteppers from "elements/HorizontalStepper";
import Map from "components/Map";
import Geofence from "components/Geofence";
import { useDispatch, useSelector } from "react-redux";
import { getAssetTrackerDetail } from "redux/actions/getAssetTrackerDetailAction";
import LightCloseIcon from "../../assets/lightCloseIcon.svg";
import Tooltip from "elements/Tooltip";
import moment from "moment";
import {
  getAssetTrackingCreateGeofence,
  getAssetTrackingUpdateGeofence,
  setAssetTrackingCreateGeofence,
  setAssetTrackingUpdateGeofence,
} from "redux/actions/getAssetTrackerDetailAction";

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
    height: "80vh",
    minWidth: "75vw",
    maxWidth: "75vw",
    background: `${appTheme?.palette?.assetTrackingPage?.pageBg} !important`,
    color: "#fff",
    padding: "1%",
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

const InfoDialogAssetTracking: React.FC<any> = (props) => {
  const { assetsTracking } = useTranslation();
  const {
    setIsInfoWindowActive,
    packageData,
    infoWindowNotificationListItems,
    selectedMarker,
    selectedTheme,
  } = props;

  const dispatch = useDispatch();

  const [tabIndex, setTabIndex] = useState<number>(0);

  const [appTheme, setAppTheme] = useState(customTheme?.defaultTheme);
  const {
    headerStyle,
    headerTabContainerStyle,
    headerTabStyle,
    assetInfoLeftPanelMain,
    assetInfoLeftPanelTop,
    assetInfoLeftPanelCenter,
    assetInfoLeftPanelBottom,
    assetInfoRightPanelMain,
    leftPanelSection,
    leftPanelLoopSection,
    leftPanelChild1,
    leftPanelChild2,
    notificationListContainer,
    buttonContainer,
    cancelButtonContainer,
    updateButtonContainer,
    vehicleTitle,
    assetTrackingTitle,
  } = useStyles({
    ...appTheme,
    tabIndex: tabIndex,
  });

  // const [selectedTheme, setSelectedTheme] = useState(
  //   JSON.parse(localStorage.getItem("theme")!)
  // );

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
    setSuccess(false);
    let assetTrackerDetailPayload: any = {
      assetId: selectedMarker?.assetId,
      trackerId: null,
    };
    dispatch(getAssetTrackerDetail(assetTrackerDetailPayload));
    dispatch(setAssetTrackingCreateGeofence({}));
    dispatch(setAssetTrackingUpdateGeofence({}));
  }, []);

  const assetTrackerDetails = useSelector(
    (state: any) => state?.assetTracker?.assetTrackerData?.data
  );

  const createGeofenceResponse = useSelector(
    (state: any) => state.assetTracker?.assetTrackingCreateGeofenceData
  );

  const updateGeofenceResponse = useSelector(
    (state: any) => state.assetTracker?.assetTrackingUpdateGeofenceData
  );

  const [infoNotificationList, setInfoNotificationList] = useState<any>([]);

  useEffect(() => {
    if (assetTrackerDetails?.notifications) {
      const { events, incidents, alerts } = assetTrackerDetails?.notifications;
      const combinedNotifications: any = [];

      events?.eventsList?.forEach((event: any, index: number) => {
        combinedNotifications.push({
          ...event,
          title: event?.reason,
          details: `${event?.trackerName} | ${event?.assetName}`,
          timeStamp: moment(event?.notificationDate)?.format(
            "DD-MM-YYYY | HH:mm A"
          ),
        });
      });

      incidents?.incidentList?.forEach((incidents: any, index: number) => {
        combinedNotifications.push({
          ...incidents,
          title: incidents?.reason,
          details: `${incidents?.trackerName} | ${incidents?.assetName}`,
          timeStamp: moment(incidents?.notificationDate)?.format(
            "DD-MM-YYYY | HH:mm A"
          ),
        });
      });

      alerts?.alertList?.forEach((alerts: any, index: number) => {
        combinedNotifications.push({
          ...alerts,

          title: alerts?.reason,
          details: `${alerts?.trackerName} | ${alerts?.assetName}`,
          timeStamp: moment(alerts?.notificationDate)?.format(
            "DD-MM-YYYY | HH:mm A"
          ),
        });
      });

      setInfoNotificationList(combinedNotifications);
    }
  }, [assetTrackerDetails]);

  const [open, setOpen] = useState(!false);
  const [selectedWidth, setSelectedWidth] = useState<any>();
  const [isDrawingEnable, setIsDrawingEnable] = useState<boolean>(false);
  const [isCircleDrawing, setIsCircleDrawing] = useState<boolean>(false);
  const [polygonData, setPolygonData] = useState<any>(null);
  const [circleData, setCircleData] = useState<any>(null);
  const [circleRadius, setCircleRadius] = useState<any>("");
  const [circleCenter, setCircleCenter] = useState<any>(null);
  const [polygonPath, setPolygonPath] = useState<any>(null);
  const [circleRadiusUnits, setCircleRadiusUnits] = useState<any>(null);
  const [isOutsideGeofenceChecked, setIsOutsideGeofenceChecked] =
    useState<boolean>();
  const [isBackGeofenceChecked, setIsBackGeofenceChecked] = useState<boolean>();
  const [geofenceType, setGeofenceType] = useState<string>();
  const [radiusType, setRadiusType] = useState<string>();
  const [checked, setChecked] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isGeofenceLocation, setIsGeofenceLocation] = useState<boolean>(false);
  const [map, setMap] = useState<any>(null);
  const [geofenceName, setGeofenceName] = useState<any>();
  const [isCircleEnbled, setIsCircleEnbled] = useState<boolean>(false);
  const [isPolygonEnbled, setIsPolygonEnbled] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (assetTrackerDetails?.geofenceResponseDTO) {
      setChecked(assetTrackerDetails?.geofenceResponseDTO?.enabledGeofence);
      if (
        assetTrackerDetails?.geofenceResponseDTO?.geofenceType === "Circular"
      ) {
        setIsCircleEnbled(
          assetTrackerDetails?.geofenceResponseDTO?.geofenceType === "Circular"
        );
        setCircleCenter(
          assetTrackerDetails?.geofenceResponseDTO?.location &&
            assetTrackerDetails?.geofenceResponseDTO?.location[0]
        );
        setCircleRadius(assetTrackerDetails?.geofenceResponseDTO?.radius);
        setPolygonPath(null);
        setIsPolygonEnbled(false);
      } else if (
        assetTrackerDetails?.geofenceResponseDTO?.geofenceType === "Polygon"
      ) {
        setIsPolygonEnbled(
          assetTrackerDetails?.geofenceResponseDTO?.geofenceType === "Polygon"
        );
        setPolygonPath(assetTrackerDetails?.geofenceResponseDTO?.location);
        setCircleRadius(null);
        setCircleCenter(null);
        setIsCircleEnbled(false);
      }
      setGeofenceName(assetTrackerDetails?.geofenceResponseDTO?.geofenceName);
      setIsOutsideGeofenceChecked(
        assetTrackerDetails?.geofenceResponseDTO?.outsideGeofence
      );
      setIsBackGeofenceChecked(
        assetTrackerDetails?.geofenceResponseDTO?.backGeofence
      );
    }
  }, [assetTrackerDetails]);

  useEffect(() => {
    if (createGeofenceResponse?.status === 200) {
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        dispatch(setAssetTrackingCreateGeofence({}));
        setIsInfoWindowActive(false);
      }, 2000);
    }
  }, [createGeofenceResponse]);

  useEffect(() => {
    if (updateGeofenceResponse?.status === 200) {
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        dispatch(setAssetTrackingUpdateGeofence({}));
        setIsInfoWindowActive(false);
      }, 1000);
    }
  }, [updateGeofenceResponse]);

  const handleClose = () => {
    setOpen(!open);
    setIsInfoWindowActive(false);
  };

  const tabsList = [
    { name: assetsTracking.assetDetails, val: 0 },
    // { name: assetsTracking.GEOFENCE, val: 1 },
  ];

  const handleHeaderTab = (index: number) => {
    setTabIndex(index);
  };

  const assetInfoTopPanelData = [
    {
      label: assetsTracking.product,
      value:
        assetTrackerDetails?.product === null
          ? "LLA Product"
          : assetTrackerDetails?.product,
    },
    {
      label: assetsTracking.trackerId,
      value:
        assetTrackerDetails?.trackerId === null
          ? "LLA Tracker"
          : assetTrackerDetails?.trackerId,
    },
    {
      label: assetsTracking.assetsType,
      value:
        assetTrackerDetails?.assetType === null
          ? "LLA Asset"
          : assetTrackerDetails?.assetType,
    },
    {
      label: assetsTracking.assetsId,
      value:
        selectedMarker?.assetName !== null
          ? selectedMarker?.assetName
          : "LLA Asset",
    },
  ];

  const assetCenterLeftSectionData = [
    {
      label: assetsTracking.section,
      value:
        assetTrackerDetails?.section === null
          ? "LLA Section"
          : assetTrackerDetails?.section,
    },
    {
      label: assetsTracking.storageLocation,
      value:
        assetTrackerDetails?.storeageLocation === null
          ? "LLA Storage"
          : assetTrackerDetails?.storeageLocation,
    },
    {
      label: assetsTracking.trackerStatus,
      value: assetTrackerDetails?.trackerStatus,
    },
    {
      label: assetsTracking.geofence,
      value:
        assetTrackerDetails?.geofenceStatus === null
          ? "With in Geofence"
          : assetTrackerDetails?.geofenceStatus,
    },
  ];

  const assetCenterRightSectionData = [
    {
      label: assetsTracking.battery,
      value: `${assetTrackerDetails?.battery}%`,
    },
    {
      label: assetsTracking.temperature,
      value: `${assetTrackerDetails?.temperature?.toFixed(2)}°C`,
    },
    {
      label: assetsTracking.humidity,
      value: `${assetTrackerDetails?.humidity?.toFixed(2)}%`,
    },
    { label: "", value: "" },
  ];

  useEffect(() => {
    if (window.innerWidth > 3839) {
      setSelectedWidth({
        width: 1300,
        height: 500,
        is4kDevice: true,
      });
    } else if (window.innerWidth > 3071) {
      setSelectedWidth({
        width: 900,
        height: 400,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 2047) {
      setSelectedWidth({
        width: 600,
        height: 230,
        is4kDevice: false,
      });
    } else if (window.innerHeight > 936) {
      setSelectedWidth({
        width: 550,
        height: 200,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1791) {
      setSelectedWidth({
        width: 580,
        height: 220,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1535) {
      setSelectedWidth({
        width: 480,
        height: 200,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1359) {
      setSelectedWidth({
        width: 400,
        height: 160,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1343) {
      setSelectedWidth({
        width: 430,
        height: 180,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1279) {
      setSelectedWidth({
        width: 390,
        height: 160,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1151) {
      setSelectedWidth({
        width: 350,
        height: 140,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1023) {
      setSelectedWidth({
        width: 300,
        height: 90,
        is4kDevice: false,
      });
    }
  }, []);

  const onCircleCompleteLocation = (
    centerCoOrdinates: any,
    drawRadius: any
  ) => {
    const startLatLng = new google.maps.LatLng(centerCoOrdinates);
    const circle = new window.google.maps.Circle({
      center: startLatLng,
      radius: drawRadius,
    })
      .getBounds()
      ?.contains(selectedMarker?.location);

    if (circle) {
      setIsGeofenceLocation(true);
    } else {
      setIsGeofenceLocation(false);
    }
  };

  const onPolygonCompleteLocation = (path: any) => {
    const polygon = new window.google.maps.Polygon({
      paths: path,
    });

    const contains = window.google.maps.geometry.poly.containsLocation(
      new window.google.maps.LatLng(
        selectedMarker?.location?.lat,
        selectedMarker?.location?.lng
      ),
      polygon
    );

    if (contains) {
      setIsGeofenceLocation(true);
    } else {
      setIsGeofenceLocation(false);
    }
  };

  const handleCircleDrag = (centerCoOrdinates: any) => {
    polygonData?.setMap(null);
    circleData?.setMap(null);
    const startLatLng = new google.maps.LatLng(centerCoOrdinates);
    const circle = new window.google.maps.Circle({
      center: startLatLng,
      radius: circleRadius,
    })
      .getBounds()
      ?.contains(selectedMarker?.location);

    if (circle) {
      setIsGeofenceLocation(true);
    } else {
      setIsGeofenceLocation(false);
    }
  };

  const handleCircleLatChange = () => {
    polygonData?.setMap(null);
    circleData?.setMap(null);
  };

  const handleGeofencePolygonClick = () => {
    setIsCircleDrawing(false);
    setIsDisabled(true);
    circleData?.setMap(null);
    polygonData?.setMap(null);
    map?.setZoom(15);
  };

  const handleGeofenceCircleClick = () => {
    setIsCircleDrawing(true);
    setIsDisabled(true);
    circleData?.setMap(null);
    polygonData?.setMap(null);
    map?.setZoom(15);
  };

  const handleResetClick = () => {
    if (assetTrackerDetails?.geofenceResponseDTO) {
      setChecked(assetTrackerDetails?.geofenceResponseDTO?.enabledGeofence);
      if (
        assetTrackerDetails?.geofenceResponseDTO?.geofenceType === "Circular"
      ) {
        setIsCircleEnbled(
          assetTrackerDetails?.geofenceResponseDTO?.geofenceType === "Circular"
        );
        setCircleCenter(
          assetTrackerDetails?.geofenceResponseDTO?.location &&
            assetTrackerDetails?.geofenceResponseDTO?.location[0]
        );
        setCircleRadius(assetTrackerDetails?.geofenceResponseDTO?.radius);
        setPolygonPath(null);
        setIsPolygonEnbled(false);
      } else if (
        assetTrackerDetails?.geofenceResponseDTO?.geofenceType === "Polygon"
      ) {
        setIsPolygonEnbled(
          assetTrackerDetails?.geofenceResponseDTO?.geofenceType === "Polygon"
        );
        setPolygonPath(assetTrackerDetails?.geofenceResponseDTO?.location);
        setCircleRadius(null);
        setCircleCenter(null);
        setIsCircleEnbled(false);
      }
      setGeofenceName(assetTrackerDetails?.geofenceResponseDTO?.geofenceName);
      setIsOutsideGeofenceChecked(
        assetTrackerDetails?.geofenceResponseDTO?.outsideGeofence
      );
      setIsBackGeofenceChecked(
        assetTrackerDetails?.geofenceResponseDTO?.backGeofence
      );
    }
    circleData?.setMap(null);
    polygonData?.setMap(null);
  };

  const addressFound = async (LatLng: any) => {
    const geocoder: any = new window.google.maps.Geocoder();
    const location1: any = new window.google.maps.LatLng(LatLng);
    return new Promise(function (resolve, reject) {
      geocoder.geocode({ latLng: location1 }, (results: any, status: any) => {
        if (status === "OK") {
          resolve(results[0].formatted_address);
        } else {
          reject(new Error("Couldnt't find the address " + status));
        }
      });
    });
  };

  const handleSaveClick = async () => {
    const payload = {
      geofenceType: isCircleEnbled ? "Circular" : "Polygon",
      enabledGeofence: checked,
      geofenceName: geofenceName,
      outSideofGeofence: isOutsideGeofenceChecked,
      backToGeofence: isBackGeofenceChecked,
      radius: circleRadius,
      location: isCircleEnbled ? [circleCenter] : polygonPath,
      area: isCircleEnbled ? await addressFound(circleCenter) : "",
      recipients: ["string"],
    };
    if (assetTrackerDetails?.geofenceResponseDTO?.geofenceId) {
      dispatch(
        getAssetTrackingUpdateGeofence({
          ...payload,
          assetId: assetTrackerDetails?.assetId,
          geofenceId: assetTrackerDetails?.geofenceResponseDTO?.geofenceId,
        })
      );
    } else {
      dispatch(
        getAssetTrackingCreateGeofence({
          ...payload,
          assetId: [assetTrackerDetails?.assetId],
        })
      );
    }
  };

  const handleAlertClose = () => {
    setSuccess(false);
  };

  const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
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
  const tooltipOfset = screenResolution === "2k" ? [0, 10] : [0, 40];
  const fontSize = screenResolution === "2k" ? [14] : [22];
  const padding = [2];

  return (
    <>
      {success &&
        (createGeofenceResponse?.status || updateGeofenceResponse?.status) && (
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={success}
            onClose={handleAlertClose}
            sx={{ bottom: "7.5vw !important" }}
          >
            <Alert
              onClose={handleAlertClose}
              severity={
                assetTrackerDetails?.geofenceResponseDTO?.geofenceId
                  ? updateGeofenceResponse?.status === 200
                    ? "success"
                    : "error"
                  : createGeofenceResponse?.status === 200
                  ? "success"
                  : "error"
              }
              sx={{ width: "100%" }}
            >
              {createGeofenceResponse?.status === 200 && (
                <div style={{ display: "flex" }}>
                  <Typography>Successfully Created Geofence.</Typography>
                </div>
              )}
              {updateGeofenceResponse?.status === 200 && (
                <div style={{ display: "flex" }}>
                  <Typography>Updated Geofence Successfully.</Typography>
                </div>
              )}
            </Alert>
          </Snackbar>
        )}
      <DialogWrapper open={open} sx={{ top: "0px" }} appTheme={appTheme}>
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
            <Grid container xs={3} className={headerTabContainerStyle}>
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
          <Grid item xs={12} style={{ height: "94%", paddingTop: "1%" }}>
            {tabIndex === 0 && (
              <Grid container xs={12} style={{ height: "100%" }}>
                <Grid item xs={12} style={{ height: "100%" }}>
                  <Grid container xs={12} style={{ height: "100%" }}>
                    <Grid
                      container
                      xs={7.7}
                      className={assetInfoLeftPanelMain}
                      style={{
                        marginRight: "2%",
                      }}
                    >
                      <Grid className={assetInfoLeftPanelTop}>
                        <div>
                          <div className={leftPanelSection} style={{}}>
                            {assetInfoTopPanelData?.map(
                              (data: any, index: any) => {
                                return (
                                  <div
                                    className={leftPanelLoopSection}
                                    key={index}
                                  >
                                    <div className={leftPanelChild1}>
                                      {data?.value?.length > 17 ? (
                                        <>
                                          <Tooltip
                                            tooltipValue={data?.value}
                                            placement={"bottom"}
                                            offset={tooltipOfset}
                                            fontSize={fontSize}
                                            padding={padding}
                                          >
                                            {" "}
                                            {truncateString(data?.value, 17)}
                                          </Tooltip>
                                        </>
                                      ) : (
                                        data?.value
                                      )}
                                      {/* {data?.value === null ? "--" : data?.value} */}
                                    </div>
                                    <div className={leftPanelChild2} style={{}}>
                                      {data?.label}
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </Grid>
                      <Grid className={assetInfoLeftPanelCenter}>
                        <div
                          style={{
                            padding: " 3%",
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around",
                          }}
                        >
                          {assetCenterLeftSectionData?.map(
                            (data: any, index: any) => {
                              return (
                                <div
                                  key={index}
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    lineHeight: "50px",
                                  }}
                                >
                                  <div
                                    style={{ width: "50%", color: "#808080" }}
                                  >
                                    {data?.label}
                                  </div>
                                  <div
                                    style={{
                                      width: "50%",
                                      color:
                                        appTheme?.palette?.assetTrackingPage
                                          ?.topPanelTextColor,
                                    }}
                                  >
                                    {data?.value === null ? "--" : data?.value}
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                        <div
                          style={{
                            borderRight: `1px dashed #808080`, // Specify your desired color and border style
                            opacity: "0.5",
                            margin: "7%",
                          }}
                        ></div>
                        <div
                          style={{
                            padding: "3%",
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around",
                            // textAlign: "right",
                          }}
                        >
                          {assetCenterRightSectionData?.map(
                            (data: any, index: any) => {
                              return (
                                <div
                                  key={index}
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    lineHeight: "50px",
                                  }}
                                >
                                  <div
                                    style={{ width: "50%", color: "#808080" }}
                                  >
                                    {data?.label}
                                  </div>
                                  <div
                                    style={{
                                      width: "50%",
                                      color:
                                        appTheme?.palette?.assetTrackingPage
                                          ?.topPanelTextColor,
                                    }}
                                  >
                                    {data?.value}
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </Grid>
                      <Grid className={assetInfoLeftPanelBottom}>
                        <CustomizedSteppers
                          dataPoints={assetTrackerDetails?.journeyDetails}
                          selectedTheme={selectedTheme}
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={4} className={assetInfoRightPanelMain}>
                      <Grid item xs={12} className={notificationListContainer}>
                        <Grid container xs={12} rowGap={1.5}>
                          {infoNotificationList &&
                            infoNotificationList?.length > 0 &&
                            infoNotificationList?.map((item: any) => (
                              <Grid
                                item
                                xs={12}
                                display="flex"
                                direction="column"
                                rowGap={2}
                                style={{
                                  padding: "5% 4%",
                                  border: `1px solid ${appTheme?.palette?.assetTrackingPage?.geofenceListBorder}`,
                                  borderRadius: "5px",
                                  background:
                                    appTheme?.palette?.assetTrackingPage
                                      ?.geofenceListItemBg,
                                }}
                              >
                                <div className={vehicleTitle}>
                                  {item?.title}
                                </div>
                                <div className={assetTrackingTitle}>
                                  <div>{item?.details} </div>
                                  <div>
                                    {moment(item?.notificationDate)?.format(
                                      "DD-MM-YYYY | HH:mm A"
                                    )}
                                  </div>
                                </div>
                              </Grid>
                            ))}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
            {tabIndex === 1 && (
              <>
                <Grid container>
                  <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Geofence
                      is4kDevice={selectedWidth?.is4kDevice}
                      isCircleDrawing={isCircleDrawing}
                      setIsCircleDrawing={setIsCircleDrawing}
                      setIsDrawingEnable={setIsDrawingEnable}
                      circleRadius={circleRadius}
                      circleCenter={circleCenter}
                      setCircleRadius={setCircleRadius}
                      setCircleCenter={setCircleCenter}
                      handleCircleLatChange={handleCircleLatChange}
                      setCircleRadiusUnits={setCircleRadiusUnits}
                      circleRadiusUnits={circleRadiusUnits}
                      isOutsideGeofenceChecked={isOutsideGeofenceChecked}
                      isBackGeofenceChecked={isBackGeofenceChecked}
                      setIsOutsideGeofenceChecked={setIsOutsideGeofenceChecked}
                      setIsBackGeofenceChecked={setIsBackGeofenceChecked}
                      setGeofenceType={setGeofenceType}
                      geofenceType={geofenceType}
                      radiusType={radiusType}
                      setRadiusType={setRadiusType}
                      setPolygonPath={setPolygonPath}
                      checked={checked}
                      isDisabled={isDisabled}
                      setChecked={setChecked}
                      setIsDisabled={setIsDisabled}
                      polygonPath={polygonPath}
                      handleGeofencePolygonClick={handleGeofencePolygonClick}
                      handleGeofenceCircleClick={handleGeofenceCircleClick}
                      selectedTheme={selectedTheme}
                      geofenceName={geofenceName}
                      setGeofenceName={setGeofenceName}
                      isCircleEnbled={isCircleEnbled}
                      setIsCircleEnbled={setIsCircleEnbled}
                      isPolygonEnbled={isPolygonEnbled}
                      setIsPolygonEnbled={setIsPolygonEnbled}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                    <Map
                      markers={[selectedMarker]}
                      marker={""}
                      currentMarker={""}
                      setCurrentMarker={() => {}}
                      focusedCategory={""}
                      mapPageName={"Asset Tracking"}
                      setIsMarkerClicked={() => {}}
                      setSelectedNotification={() => {}}
                      setNotificationPanelActive={() => {}}
                      setTabIndex={() => {}}
                      isDrawingEnable={isDrawingEnable}
                      isCircleDrawing={isCircleDrawing}
                      setCircleData={setCircleData}
                      setCircleRadius={setCircleRadius}
                      setCircleCenter={setCircleCenter}
                      setPolygonPath={setPolygonPath}
                      setPolygonData={setPolygonData}
                      setIsCircleDrawing={setIsCircleDrawing}
                      setIsDrawingEnable={setIsDrawingEnable}
                      circleRadius={circleRadius}
                      circleCenter={circleCenter}
                      handleGeofenceCircleDrag={handleCircleDrag}
                      setCircleRadiusUnits={setCircleRadiusUnits}
                      circleRadiusUnits={circleRadiusUnits}
                      polygonPath={polygonPath}
                      // markerArray={[selectedViewDetailsData]}
                      onCircleCompleteLocation={onCircleCompleteLocation}
                      onPolygonCompleteLocation={onPolygonCompleteLocation}
                      selectedTheme={selectedTheme}
                      setMap={setMap}
                      map={map}
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12}>
                    <div className={buttonContainer}>
                      <div className={cancelButtonContainer}>
                        <Button variant="outlined" onClick={handleResetClick}>
                          {assetsTracking.reset}
                        </Button>
                      </div>
                      <div className={updateButtonContainer}>
                        <Button
                          variant="contained"
                          disabled={
                            (isCircleEnbled && circleCenter === null) ||
                            (!isCircleEnbled && polygonPath === null)
                          }
                          onClick={handleSaveClick}
                        >
                          {assetsTracking.save}
                        </Button>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </DialogWrapper>
    </>
  );
};

export default InfoDialogAssetTracking;
