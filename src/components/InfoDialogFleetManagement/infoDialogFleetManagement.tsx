/** @format */

import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Tabs from "../../elements/Tabs";
import customTheme from "../../theme/theme";
import {
  CloseIcon,
  SpeedometerIcon,
  DistinationLocationIcon,
  FuelIcon,
  IncidentIcon,
  SpeedLimitIcon,
  CamOneImg,
  TripStatusIcon,
} from "../../assets/fleetInfoDialogueIcons";
import CircularProgressBar from "elements/CircularProgressBar";

import useStyles from "./styles";
import TopPanelListItemContainerInfoDialogue from "components/TopPanelListItemContainerInfoDialogue";
import FleetInfoDialogueViolationContainer from "components/FleetInfoDialogueViolationContainer";
import Map from "components/Map";
import TripDetailsMap from "components/Map/tripDetailsMap";
import Stepper from "elements/Stepper";
import routeDetails from "mockdata/tripDetails";
import useWindowDimensions from "hooks/useWindowDimensions";
import ReactPlayer from "react-player";
import FleetSampleVideo from "../../assets/fleetVideos/entry-exit-cars.mp4";

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
    background: `#1A1919 !important`,
    color: "#fff",
    padding: "1%",
    // [muiTheme.breakpoints.up(5759)]: {
    //   maxHeight: "calc(100% - 370px)",
    //   minHeight: "calc(100% - 370px)",
    // },
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
  const { setShowInfoDialogue, selectedMarker, is4kDevice } = props;

  const [tabIndex, setTabIndex] = useState<number>(0);

  const [appTheme, setAppTheme] = useState(customTheme?.defaultTheme);
  const {
    headerStyle,
    headerTabContainerStyle,
    headerTabStyle,
    customNotificationTabs,
    TabvalueTitle,
  } = useStyles({
    ...appTheme,
    tabIndex: tabIndex,
  });

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  const [currentMarker, setCurrentMarker] = useState<any>("");
  const [selectedNotification, setSelectedNotification] = useState<any>("");
  const [isMarkerClicked, setIsMarkerClicked] = useState<boolean>(false);

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
  };

  const tabsList = [
    { name: "Trip Detail", val: 0 },
    { name: "Vehicle Detail", val: 1 },
    { name: "Driver Detail", val: 2 },
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
      value: tabIndex === 0 ? "04" : tabIndex === 1 ? "PB1672" : "Mike Ross",
      title:
        tabIndex === 0
          ? "Stops"
          : tabIndex === 1
          ? "License Plate Number"
          : "Driver Name",
    },
    {
      value:
        tabIndex === 0 ? "30%" : tabIndex === 1 ? "Passenger" : "PDRV#123456",
      title:
        tabIndex === 0
          ? "Trip Completion"
          : tabIndex === 1
          ? "Vehicle Type"
          : "Driving License",
    },
    {
      value: tabIndex === 0 ? "100Km" : tabIndex === 1 ? "5" : "4",
      title:
        tabIndex === 0
          ? "Distance Covered"
          : tabIndex === 1
          ? "Total Trips"
          : "Total Trips",
    },
    {
      value: tabIndex === 0 ? "1Hr" : tabIndex === 1 ? "500 Km" : "600Km",
      title:
        tabIndex === 0
          ? "Total Time"
          : tabIndex === 1
          ? "Total Distance"
          : "Total Distance Driven",
    },
    {
      value: tabIndex === 0 ? "10" : tabIndex === 1 ? "20" : "20",
      title:
        tabIndex === 0
          ? "Violations"
          : tabIndex === 1
          ? "Violations"
          : "Violations",
    },
  ];

  const violationListItems: any[] = [
    {
      title: "Over Speeding",
      details: "Vehicle#12,  Driver - Mike Ross",
    },
    {
      title: "Harsh Breaking",
      details: "Vehicle#12,  Driver - Mike Ross",
    },
    {
      title: "Harsh Acceleration",
      details: "Vehicle#12,  Driver - Mike Ross",
    },
    {
      title: "Cornering",
      details: "Vehicle#12,  Driver - Mike Ross",
    },
    {
      title: "Cornering",
      details: "Vehicle#12,  Driver - Mike Ross",
    },
    {
      title: "Harsh Acceleration",
      details: "Vehicle#12,  Driver - Mike Ross",
    },
    {
      title: "Over Speeding",
      details: "Vehicle#12,  Driver - Mike Ross",
    },
  ];

  const vehicleDetailsSubTaskBarItems: any[] = [
    {
      icon: tabIndex === 1 ? SpeedometerIcon : TripStatusIcon,
      value: tabIndex === 1 ? "90kph" : "On Trip",
    },
    {
      icon: tabIndex === 1 ? DistinationLocationIcon : SpeedometerIcon,
      value: tabIndex === 1 ? "100Km" : "90kph",
    },
    {
      icon: tabIndex === 1 ? FuelIcon : DistinationLocationIcon,
      value: tabIndex === 1 ? "5Gal" : "100Km",
    },
    {
      icon: tabIndex === 1 ? IncidentIcon : IncidentIcon,
      value: tabIndex === 1 ? "10" : "10",
    },
    {
      icon: SpeedLimitIcon,
      value: "70%",
    },
  ];

  const [cameraTabIndex, setCameraTabIndex] = useState<number>(0);

  const handleTabs = (index: number) => {
    setCameraTabIndex(index);
  };

  const { width, height }: any = useWindowDimensions();

  const getSpeedometerDimensions = () => {
    if (width < 1664) {
      return {
        radius: 60,
        cut: 65,
        rotate: 105,
        stroke: 8,
        iconSize: 24,
      };
    } else {
      return {
        radius: 70,
        cut: 60,
        rotate: 120,
        stroke: 11,
        iconSize: 27,
      };
    }
  };

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
              percent={tabIndex === 0 ? 70 : tabIndex === 1 ? 85 : 70}
              strokeWidth={10}
              trailWidth={10}
              strokeColor="#92C07E"
              trailColor="#484D52"
              title={"Safety Score"}
              pageName={"fleetInfoDialogue"}
              horizontalProgressBarTitlePosition={"down"}
            />
          </Grid>
          <Grid item xs={12} style={{ height: "80%", paddingTop: "1%" }}>
            <Grid container xs={12} style={{ height: "100%" }}>
              <Grid
                item
                xs={2.3}
                style={{
                  height: "100%",
                  border: "1px solid #333333",
                  background: "rgb(22, 21, 21)",
                  padding: " 1%",
                }}
              >
                <Stepper
                  routeDetails={routeDetails}
                  tripStatus={"Completed"}
                  is4kDevice={is4kDevice}
                />
              </Grid>
              <Grid item xs={6.7} style={{ height: "100%", padding: "0 1%" }}>
                <Grid style={{ height: "100%" }} item xs={12}>
                  {tabIndex === 0 ? (
                    <TripDetailsMap
                      markers={[selectedMarker]}
                      marker={selectedMarker?.id}
                      currentMarker={selectedMarker}
                      setCurrentMarker={() => {}}
                      focusedCategory={""}
                      mapPageName={"fleetManagement"}
                      setIsMarkerClicked={setIsMarkerClicked}
                      setSelectedNotification={() => {}}
                      setNotificationPanelActive={() => {}}
                      setTabIndex={() => {}}
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
                            background: "#161515",
                            border: "1px solid #333333",
                          }}
                        >
                          {vehicleDetailsSubTaskBarItems?.length > 0 &&
                            vehicleDetailsSubTaskBarItems?.map((item: any) => (
                              <Grid
                                item
                                display={"flex"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                columnGap={2}
                                flex={1}
                              >
                                <div style={{ width: "18%", height: "18%" }}>
                                  <img
                                    width={"100%"}
                                    height={"100%"}
                                    src={item?.icon}
                                  />
                                </div>
                                <div className={TabvalueTitle}>
                                  {item?.value}
                                </div>
                              </Grid>
                            ))}
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
                            <ReactPlayer
                              muted
                              playing
                              loop={true}
                              controls={true}
                              url={
                                cameraTabIndex === 0
                                  ? FleetSampleVideo
                                  : FleetSampleVideo
                              }
                              width="100%"
                              height="100%"
                            />
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
                            background: "#161515",
                            border: "1px solid #333333",
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
                                      style={{ width: "15%", height: "15%" }}
                                    >
                                      <img
                                        width={"100%"}
                                        height={"100%"}
                                        src={item?.icon}
                                      />
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
                              radius={getSpeedometerDimensions().radius}
                              currentValue={75}
                              totalValue={110}
                              label="Driving Score"
                              icon="driving-score"
                              rotate={getSpeedometerDimensions().rotate}
                              cut={getSpeedometerDimensions().cut}
                              iconSize={getSpeedometerDimensions().iconSize}
                              color="#74BA69"
                              thumbType="point"
                              strokeWidth={getSpeedometerDimensions().stroke}
                              trackStrokeWidth={
                                getSpeedometerDimensions().stroke
                              }
                              trackStrokeColor={"#161515"}
                            />
                          </Grid>
                          <Grid item>
                            <CircularProgressBar
                              radius={getSpeedometerDimensions().radius}
                              currentValue={75}
                              totalValue={110}
                              label="Harsh Acceleration"
                              icon="harsh-acceleration"
                              rotate={getSpeedometerDimensions().rotate}
                              cut={getSpeedometerDimensions().cut}
                              iconSize={getSpeedometerDimensions().iconSize}
                              color="#74BA69"
                              thumbType="point"
                              strokeWidth={getSpeedometerDimensions().stroke}
                              trackStrokeWidth={
                                getSpeedometerDimensions().stroke
                              }
                              trackStrokeColor={"#161515"}
                            />
                          </Grid>
                          <Grid item>
                            <CircularProgressBar
                              radius={getSpeedometerDimensions().radius}
                              currentValue={75}
                              totalValue={110}
                              label="Corner"
                              icon="corner"
                              rotate={getSpeedometerDimensions().rotate}
                              cut={getSpeedometerDimensions().cut}
                              iconSize={getSpeedometerDimensions().iconSize}
                              color="#74BA69"
                              thumbType="point"
                              strokeWidth={getSpeedometerDimensions().stroke}
                              trackStrokeWidth={
                                getSpeedometerDimensions().stroke
                              }
                              trackStrokeColor={"#161515"}
                            />
                          </Grid>
                          <Grid item>
                            <CircularProgressBar
                              radius={getSpeedometerDimensions().radius}
                              currentValue={75}
                              totalValue={110}
                              label="Over Speeding"
                              icon="overspeeding"
                              rotate={getSpeedometerDimensions().rotate}
                              cut={getSpeedometerDimensions().cut}
                              iconSize={getSpeedometerDimensions().iconSize}
                              color="#74BA69"
                              thumbType="point"
                              strokeWidth={getSpeedometerDimensions().stroke}
                              trackStrokeWidth={
                                getSpeedometerDimensions().stroke
                              }
                              trackStrokeColor={"#161515"}
                            />
                          </Grid>
                          <Grid item>
                            <CircularProgressBar
                              radius={getSpeedometerDimensions().radius}
                              currentValue={75}
                              totalValue={110}
                              label="Harsh Braking"
                              icon="harsh-braking"
                              rotate={getSpeedometerDimensions().rotate}
                              cut={getSpeedometerDimensions().cut}
                              iconSize={getSpeedometerDimensions().iconSize}
                              color="#74BA69"
                              thumbType="point"
                              strokeWidth={getSpeedometerDimensions().stroke}
                              trackStrokeWidth={
                                getSpeedometerDimensions().stroke
                              }
                              trackStrokeColor={"#161515"}
                            />
                          </Grid>
                          <Grid item>
                            <CircularProgressBar
                              radius={getSpeedometerDimensions().radius}
                              currentValue={75}
                              totalValue={110}
                              label="Idle Hours"
                              icon="idle-hours"
                              rotate={getSpeedometerDimensions().rotate}
                              cut={getSpeedometerDimensions().cut}
                              iconSize={getSpeedometerDimensions().iconSize}
                              color="#74BA69"
                              thumbType="point"
                              strokeWidth={getSpeedometerDimensions().stroke}
                              trackStrokeWidth={
                                getSpeedometerDimensions().stroke
                              }
                              trackStrokeColor={"#161515"}
                            />
                          </Grid>
                          <Grid item>
                            <CircularProgressBar
                              radius={getSpeedometerDimensions().radius}
                              currentValue={75}
                              totalValue={110}
                              label="Fatigue"
                              icon="fatigue"
                              rotate={getSpeedometerDimensions().rotate}
                              cut={getSpeedometerDimensions().cut}
                              iconSize={getSpeedometerDimensions().iconSize}
                              color="#74BA69"
                              thumbType="point"
                              strokeWidth={getSpeedometerDimensions().stroke}
                              trackStrokeWidth={
                                getSpeedometerDimensions().stroke
                              }
                              trackStrokeColor={"#161515"}
                            />
                          </Grid>
                          <Grid item>
                            <CircularProgressBar
                              radius={getSpeedometerDimensions().radius}
                              currentValue={75}
                              totalValue={110}
                              label="Driving Score"
                              icon="driving-score"
                              rotate={getSpeedometerDimensions().rotate}
                              cut={getSpeedometerDimensions().cut}
                              iconSize={getSpeedometerDimensions().iconSize}
                              color="#74BA69"
                              thumbType="point"
                              strokeWidth={getSpeedometerDimensions().stroke}
                              trackStrokeWidth={
                                getSpeedometerDimensions().stroke
                              }
                              trackStrokeColor={"#161515"}
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
                  border: "1px solid #333333",
                  padding: "1%",
                  background: "#161515",
                }}
              >
                <FleetInfoDialogueViolationContainer
                  violationListItems={violationListItems}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogWrapper>
    </>
  );
};

export default InfoDialogFleetManagement;
