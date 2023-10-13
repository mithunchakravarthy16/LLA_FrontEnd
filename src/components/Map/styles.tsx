/** @format */
//@ts-nocheck

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
    "& .gmnoprint .gm-style-mtc": {
      // top:
      //   props?.mapPageName === "dashboard"
      //     ? "35vh !important"
      //     : "28vh !important",

      "& button": {
        fontSize: "1vw !important",
        height: "3vh !important",
      },
      [muiTheme.breakpoints.up(3839)]: {
        left: props?.mapPageName === "dashboard" && "2.6vw !important",
        top:
          props?.mapPageName === "dashboard"
            ? "38vh !important"
            : "29vh !important",
        "& button": {
          height: "2.8vh !important",
        },
      },
      [muiTheme.breakpoints.down(3073)]: {
        left: props?.mapPageName === "dashboard" && "2.6vw !important",
        top:
          props?.mapPageName === "dashboard"
            ? "39vh !important"
            : "29vh !important",
      },
      [muiTheme.breakpoints.down(2049)]: {
        left: props?.mapPageName === "dashboard" && "4vw !important",
        top:
          props?.mapPageName === "dashboard"
            ? "67vh !important"
            : "51vh !important",
      },
      [muiTheme.breakpoints.down(1921)]: {
        left: props?.mapPageName === "dashboard" && "4vw !important",
        top:
          props?.mapPageName === "dashboard"
            ? "64vh !important"
            : "50vh !important",
      },
      [muiTheme.breakpoints.down(1793)]: {
        left: props?.mapPageName === "dashboard" && "4vw !important",

        top:
          props?.mapPageName === "dashboard"
            ? "65vh !important"
            : "50vh !important",
      },
      // "& button": {
      //   height: "3vh !important",
      // },
    },
    "& .gmnoprint.gm-bundled-control-on-bottom": {
      position: "absolute !important",
      // right: "2.5vw !important",
      maxWidth: "12vw",
      top:
        props?.mapPageName === "dashboard"
          ? "30vh !important"
          : "24vh !important",
      [muiTheme.breakpoints.up(3839)]: {
        right: props?.mapPageName === "dashboard" && "3.5vw !important",
        top:
          props?.mapPageName === "dashboard"
            ? "36vh !important"
            : "26vh !important",
      },
      [muiTheme.breakpoints.down(3073)]: {
        right: props?.mapPageName === "dashboard" && "3.5vw !important",
        top:
          props?.mapPageName === "dashboard"
            ? "37vh !important"
            : "27vh !important",
      },
      [muiTheme.breakpoints.down(2049)]: {
        right: props?.mapPageName === "dashboard" && "5.5vw !important",
        top:
          props?.mapPageName === "dashboard"
            ? "63vh !important"
            : "46.5vh !important",
      },
      [muiTheme.breakpoints.down(1921)]: {
        right: props?.mapPageName === "dashboard" && "5.8vw !important",
        top:
          props?.mapPageName === "dashboard"
            ? "61vh !important"
            : "46.8vh !important",
      },
      [muiTheme.breakpoints.down(1793)]: {
        right: props?.mapPageName === "dashboard" && "5.8vw !important",

        top:
          props?.mapPageName === "dashboard"
            ? "63vh !important"
            : "47vh !important",
      },
    },
    "& .gm-bundled-control": {
      [muiTheme.breakpoints.up(3839)]: {},
      [muiTheme.breakpoints.down(3073)]: {},
      [muiTheme.breakpoints.down(2049)]: {},
      [muiTheme.breakpoints.down(1921)]: {
        "& div:nth-child(1)": {
          width: "1.8vw !important",
          height: "6vh !important",
          "& button": {
            width: "1.8vw !important",
            height: "2.8vh !important",
            "& img": {
              width: "1.5vw !important",
              height: "1.5vh !important",
            },
          },
        },
      },
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
    "& .gm-style": {
      "& .cluster": {
        width: "6vh !important",
        height: "6vh !important",
        display: "flex !important",
        flexDirection: "column !important",
        justifyContent: "center !important",
        alignItems: "center !important",

        "& img": {
          width: "100%",
          height: "100%",
        },
        "& div": {
          fontSize: "0.7vw !important",
          position: "relative !important",
          zIndex: 11,
        },
      },
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
