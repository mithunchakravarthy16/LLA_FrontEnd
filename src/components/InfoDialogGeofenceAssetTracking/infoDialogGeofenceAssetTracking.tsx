/** @format */

import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Tabs from "../../elements/Tabs";
import customTheme from "../../theme/theme";
import { CloseIcon } from "../../assets/fleetInfoDialogueIcons";
import useStyles from "./styles";
import CustomizedSteppers from "elements/HorizontalStepper";
import Map from "components/Map";
import Geofence from "components/Geofence";

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
    background: `#1A1919 !important`,
    color: "#fff",
    padding: "1%",
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

const InfoDialogGeofenceAssetTracking: React.FC<any> = (props) => {
  const { setIsGeofenceInfoWindowActive } = props;

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
  });

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

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

  const [open, setOpen] = useState(!false);
  const [selectedWidth, setSelectedWidth] = useState<any>();
  const [isDrawingEnable, setIsDrawingEnable] = useState<boolean>(false);
  const [isCircleDrawing, setIsCircleDrawing] = useState<boolean>(false);
  const [polygonData, setPolygonData] = useState<any>(null);
  const [circleData, setCircleData] = useState<any>(null);
  const [circleRadius, setCircleRadius] = useState<any>(null);
  const [circleCenter, setCircleCenter] = useState<any>(null);
  const [polygonPath, setPolygonPath] = useState<any>(null);
  const [circleRadiusUnits, setCircleRadiusUnits] = useState<any>(null);
  const [isOutsideGeofenceChecked, setIsOutsideGeofenceChecked] =
    useState<boolean>();
  const [isBackGeofenceChecked, setIsBackGeofenceChecked] = useState<boolean>();
  const [geofenceType, setGeofenceType] = useState<string>();
  const [radiusType, setRadiusType] = useState<string>();
  const [checked, setChecked] = useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleClose = () => {
    setOpen(!open);
    setIsGeofenceInfoWindowActive(false);
  };

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
    // const circle = new window.google.maps.Circle({
    //   center: startLatLng,
    //   radius: drawRadius,
    // })
    //   .getBounds()
    //   ?.contains(selectedViewDetailsData?.location);

    // if (circle) {
    //   setIsGeofenceLocation(true);
    // } else {
    //   setIsGeofenceLocation(false);
    // }
  };

  const onPolygonCompleteLocation = (path: any) => {
    const polygon = new window.google.maps.Polygon({
      paths: path,
    });

    // const contains = window.google.maps.geometry.poly.containsLocation(
    //   new window.google.maps.LatLng(
    //     selectedViewDetailsData?.location?.lat,
    //     selectedViewDetailsData?.location?.lng
    //   ),
    //   polygon
    // );

    // if (contains) {
    //   setIsGeofenceLocation(true);
    // } else {
    //   setIsGeofenceLocation(false);
    // }
  };

  const handleCircleDrag = (centerCoOrdinates: any) => {
    polygonData?.setMap(null);
    circleData?.setMap(null);
    const startLatLng = new google.maps.LatLng(centerCoOrdinates);
    // const circle = new window.google.maps.Circle({
    //   center: startLatLng,
    //   radius: circleRadius,
    // })
    //   .getBounds()
    //   ?.contains(selectedViewDetailsData?.location);

    // if (circle) {
    //   setIsGeofenceLocation(true);
    // } else {
    //   setIsGeofenceLocation(false);
    // }
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
  };

  const handleGeofenceCircleClick = () => {
    setIsCircleDrawing(true);
    setIsDisabled(true);
    circleData?.setMap(null);
    polygonData?.setMap(null);
  };

  const handleResetClick = () => {};

  const handleSaveClick = () => {};

  return (
    <>
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
            <img width={"100%"} height={"100%"} src={CloseIcon} />
          </IconButton>
        </div>
        <Grid container xs={12} style={{ height: "100%" }}>
          <Grid item xs={12} className={headerStyle}>
            <div>GEOFENCE</div>
          </Grid>
          <Grid item xs={12} style={{ height: "94%", paddingTop: "1%" }}>
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
                />
              </Grid>
              <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                <Map
                  markers={[]}
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
                />
              </Grid>
              <Grid item xs={12}>
                <div className={buttonContainer}>
                  <div className={cancelButtonContainer}>
                    <Button variant="outlined" onClick={handleResetClick}>
                      CANCEL
                    </Button>
                  </div>
                  <div className={updateButtonContainer}>
                    <Button variant="contained" onClick={handleSaveClick}>
                      SAVE
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogWrapper>
    </>
  );
};

export default InfoDialogGeofenceAssetTracking;
