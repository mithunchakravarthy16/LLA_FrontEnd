import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Tabs from "../../elements/Tabs";
import customTheme from "../../theme/theme";
import {
  CoTwoCloudIcon,
  VocCloudIcon,
  AirQualityIcon,
  PersonIcon,
} from "../../assets/topPanelListIcons";
import { CloseIcon } from "../../assets/fleetInfoDialogueIcons";

import useStyles from "./styles";
import TopPanelListItemContainerInfoDialogue from "components/TopPanelListItemContainerInfoDialogue";
import FleetInfoDialogueViolationContainer from "components/FleetInfoDialogueViolationContainer";

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
    width: "70vw",
    maxWidth: "1772px",
    background: `#1A1919 !important`,
    color: "#fff",
    padding: 14,
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
  const { setShowInfoDialogue } = props;

  const [tabIndex, setTabIndex] = useState<number>(0);

  const [appTheme, setAppTheme] = useState(customTheme?.defaultTheme);
  const { headerStyle, headerTabContainerStyle, headerTabStyle, violationListContainer } = useStyles({
    ...appTheme,
    tabIndex: tabIndex,
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

  useEffect(() => {
    if (tabIndex === 2) {
    }
  }, [tabIndex]);

  const handleClose = () => {
    setOpen(!open);
    setShowInfoDialogue(false);
  };

  const tabsList = [
    { name: "Trip Detail", val: 0 },
    { name: "Vehicle Detail", val: 1 },
    { name: "Driver Detail", val: 2 },
  ];

  const handleHeaderTab = (index: number) => {
    setTabIndex(index);
  };

  const topPanelListItems: any[] = [
    {
      icon: CoTwoCloudIcon,
      value: "04",
      name: "Stops",
      title: "Stops",
    },
    {
      icon: VocCloudIcon,
      value: "30%",
      name: "Trip Completion",
      title: "Trip Completion",
    },
    {
      icon: AirQualityIcon,
      value: "100Km",
      name: "Distance Covered",
      title: "Distance Covered",
    },
    {
      icon: AirQualityIcon,
      value: "1Hr",
      name: "Total Time",
      title: "Total Time",
    },
    {
      icon: PersonIcon,
      value: "10",
      name: "Violations",
      title: "Violations",
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

  return (
    <>
      <DialogWrapper open={open} sx={{ top: "0px" }} appTheme={appTheme}>
        <div>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 10,
              top: 10,
              color: "#fff",
            }}
          >
            <img width={20} height={20} src={CloseIcon} />
          </IconButton>
        </div>

        <Grid container xs={12} style={{ height: "100%" }}>
          <Grid item xs={12} className={headerStyle}>
            <Grid container xs={4} className={headerTabContainerStyle}>
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
              percent={60}
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
                xs={2}
                style={{ height: "100%", border: "1px solid #333333" }}
              >
                Route Details
              </Grid>
              <Grid item xs={7} style={{ height: "100%", padding: "0 0.5%"}}>
                <Grid style={{ height: "100%", border: "1px solid #333333" }} item xs={12}>Google Map</Grid>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ height: "100%", border: "1px solid #333333", padding: "1%", background: "#161515" }}
              >
                <FleetInfoDialogueViolationContainer violationListItems={violationListItems}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogWrapper>
    </>
  );
};

export default InfoDialogFleetManagement;
