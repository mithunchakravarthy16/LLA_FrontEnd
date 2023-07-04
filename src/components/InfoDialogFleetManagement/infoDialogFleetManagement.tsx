import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Tabs from "../../elements/Tabs";
import customTheme from "../../theme/theme";

import { CloseIcon } from "../../assets/fleetInfoDialogueIcons";

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
    maxHeight: "calc(100% - 150px)",
    minHeight: "calc(100% - 150px)",
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
  const { headerStyle, headerTabContainerStyle, headerTabStyle } =
    useStyles({...appTheme, tabIndex: tabIndex});

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

  return (
    <>
      <DialogWrapper open={open} sx={{ top: "0px" }} appTheme={appTheme}>
        <div className={headerStyle}>
          <div className={headerTabContainerStyle}>
            {tabsList?.map((item: any) => (
              <div
                className={headerTabStyle}
                style={{color: tabIndex ===  item?.val ? "#F2601F" : "#5F5F5F"}}
                onClick={() => {
                  handleHeaderTab(item?.val);
                }}
              >
                {item?.name}
              </div>
            ))}
          </div>
        </div>
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
            <img width={10} height={10} src={CloseIcon} />
          </IconButton>
        </div>

        <Grid container xs={12}>
            <Grid item xs={12}>Status Bar</Grid>
            <Grid item xs={12}>
              <Grid container xs={12}>
                <Grid item xs={2}>Route Details</Grid>
                <Grid item xs={7}>Google Map</Grid>
                <Grid item xs={3}>Violation</Grid>
              </Grid>
            </Grid>
        </Grid>
      </DialogWrapper>
    </>
  );
};

export default InfoDialogFleetManagement;
