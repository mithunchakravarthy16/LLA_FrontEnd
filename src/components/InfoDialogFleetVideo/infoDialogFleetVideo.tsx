// @ts-nocheck
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import customTheme from "../../theme/theme";
import ReactPlayer from "react-player";
import FleetSampleVideo from "../../assets/fleetVideos/entry-exit-cars.mp4";
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
import LightCloseIcon from "../../assets/lightCloseIcon.svg";

import useStyles from "./styles";

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

    height: "70vh",
    minWidth: "70vw",
    maxWidth: "70vw",
    background: `${appTheme?.palette?.fleetManagementPage?.infoDialogColor} !important`,
    color: "#fff",
    padding: "2%",
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

const InfoDialogFleetVideo: React.FC<any> = (props) => {
  const { setShowInfoDialogue, selectedMarker } = props;

  const [tabIndex, setTabIndex] = useState<number>(0);

  const [appTheme, setAppTheme] = useState(customTheme?.defaultTheme);
  const {
    headerStyle,
    headerTabContainerStyle,
    headerTabStyle,
    customNotificationTabs,
    videoTitle,
    vicheals,
  } = useStyles(appTheme);

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

  const handleClose = () => {
    setOpen(!open);
    setShowInfoDialogue(false);
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
            <img
              width={"100%"}
              height={"100%"}
              src={selectedTheme === "light" ? LightCloseIcon : CloseIcon}
            />
          </IconButton>
        </div>

        <Grid container xs={12} style={{ height: "100%" }}>
          <Grid item xs={12} style={{ height: "10%" }}>
            <p className={videoTitle}>
              <span>{selectedMarker?.title}</span>{" "}
              <span className={vicheals}>
                Vehicle# {selectedMarker?.vehicleId}
              </span>{" "}
              <span>Driver-Mike Ross</span>
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: "90%",
            }}
          >
            <ReactPlayer
              muted
              playing
              loop={true}
              controls={true}
              url={FleetSampleVideo}
              width="100%"
              height="100%"
            />
          </Grid>
        </Grid>
      </DialogWrapper>
    </>
  );
};

export default InfoDialogFleetVideo;
