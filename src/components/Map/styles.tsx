/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  containerStyle: (props: any) => ({
    width: "100%",
    height: "calc(100vh - 0px)",
    [muiTheme.breakpoints.down(3841)]: {
      height: "calc(100vh - 924px)",
    },
  }),

  googleMapStyle: (props: any) => ({
    "& .gm-style-iw-d": {
      overflow: "auto !important",
    },
    "& .gm-style .gm-style-iw-c": {
      left: "0 !important",
      maxWidth: "749px !important",
      backgroundColor: "unset !important",
    },
    "& .gm-style .gm-style-iw-tc::after, .gm-style .gm-style-iw-tc::before": {
      //background: props?.mapPageName === "dashboard" ? props?.palette?.notification?.dashBoardexpansionMarkerListBg : props?.palette?.notification?.expansionMarkerListBg, //background: `#1D2D38 !important`, //markerInfoWindowBg
      background: props?.palette?.notification?.dashBoardexpansionMarkerListBg,
    },
    "& .gm-style-iw-t": {
      // bottom: "9vh !important",
      [muiTheme.breakpoints.up(3839)]: {
        bottom: "8vh !important",
      },
      [muiTheme.breakpoints.down(3073)]: {
        bottom: "7.5vh !important",
      },
      [muiTheme.breakpoints.down(2049)]: {
        bottom: "6vh !important",
      },
      [muiTheme.breakpoints.down(1921)]: {
        bottom: "7vh !important",
      },
      [muiTheme.breakpoints.down(1793)]: {
        bottom: "7vh !important",
      },
    },
    "& .gm-style-iw-t > div > button": {
      display: "none !important",
    },

    "& .gm-style-iw": {
      //background: "#1D2D38",
      borderRadius: "10px",
      // boxShadow: `0 2px 7px 1px ${props?.palette?.dashboardList?.lightShadeGray1}`,
      fontSize: "13px",
      fontWeight: 300,
      padding: "0px !important",
      fontFamily: "HelveticaNeue-Regular",
      color: "#FFFFFF !important",
    },
    "& .gm-style .gm-style-cc a, .gm-style .gm-style-cc button, .gm-style .gm-style-cc span":
      {
        display: "none !important",
      },
  }),
  footerSection: (props: any) => ({
    background: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    bottom: 0,
    // zIndex:' 1111111',
    width: "100%",
    height: "50px",
    color: "#8d8d8d",
    fontSize: 14,
  }),
});
export default useStyles;
