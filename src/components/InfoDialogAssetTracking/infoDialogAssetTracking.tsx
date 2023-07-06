/** @format */

import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Tabs from "../../elements/Tabs";
import customTheme from "../../theme/theme";
import { CloseIcon } from "../../assets/fleetInfoDialogueIcons";
import useStyles from "./styles";
import CustomizedSteppers from "elements/HorizontalStepper";

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

const InfoDialogAssetTracking: React.FC<any> = (props) => {
  const {
    setIsInfoWindowActive,
    packageData,
    infoWindowNotificationListItems,
  } = props;

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
    vehicleTitle,
    assetTrackingTitle,
  } = useStyles({
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
    setIsInfoWindowActive(false);
  };

  const tabsList = [
    { name: "ASSET DETAILS", val: 0 },
    { name: "GEOFENCE", val: 1 },
  ];

  const handleHeaderTab = (index: number) => {
    setTabIndex(index);
  };

  const assetInfoTopPanelData = [
    { label: "Product", value: "Lab Equipment" },
    { label: "Tracker ID", value: 12367 },
    { label: "Assets Type", value: "Electronic" },
    { label: "Assets ID", value: 12 },
  ];

  const assetCenterLeftSectionData = [
    { label: "Section", value: "Sec 01" },
    { label: "Storage Location", value: "C17#456" },
    { label: "Tracker Status", value: "Active" },
    { label: "Geofence", value: "With in Geofence" },
  ];

  const assetCenterRightSectionData = [
    { label: "Battery", value: "83%" },
    { label: "Temperature", value: "24°C" },
    { label: "Humidity", value: "96%" },
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
                      xs={8.7}
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
                                      {data?.value}
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
                                  <div style={{ width: "50%" }}>
                                    {data?.value}
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
                          }}
                        ></div>
                        <div
                          style={{
                            padding: "3%",
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around",
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
                                  <div style={{ width: "50%" }}>
                                    {data?.value}
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </Grid>
                      <Grid className={assetInfoLeftPanelBottom}>
                        <CustomizedSteppers packagaeData={packageData} />
                      </Grid>
                    </Grid>
                    <Grid item xs={3} className={assetInfoRightPanelMain}>
                      <Grid item xs={12} className={notificationListContainer}>
                        <Grid container xs={12} rowGap={1.5}>
                          {infoWindowNotificationListItems &&
                            infoWindowNotificationListItems?.length > 0 &&
                            infoWindowNotificationListItems?.map(
                              (item: any) => (
                                <Grid
                                  item
                                  xs={12}
                                  display="flex"
                                  direction="column"
                                  rowGap={2}
                                  style={{
                                    padding: "5% 4%",
                                    border: "1px solid #333333",
                                    borderRadius: "5px",
                                    background: "#131313",
                                  }}
                                >
                                  <div className={vehicleTitle}>
                                    {item?.title}
                                  </div>
                                  <div className={assetTrackingTitle}>
                                    <div>{item?.details} </div>
                                    <div>{item?.timeStamp}</div>
                                  </div>
                                </Grid>
                              )
                            )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </DialogWrapper>
    </>
  );
};

export default InfoDialogAssetTracking;
