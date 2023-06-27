/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  rootContainer: (props: any) => ({
    fontFamily: "HelveticaNeue-Regular",
    background: "#161515",
    height: "100vh",
    paddingLeft: "3.4px",
    [muiTheme.breakpoints.up(3839)]: {
      width: "calc(100vw - 200px) !important",
    },
  }),
  mainSection: (props: any) => ({
    height: "calc(100vh - 60px)",
    color: "white",
    background: "#161515",
    opacity: 1,
  }),

  pageHeading: (props: any) => ({
    height: "6%",
    paddingLeft: "15px",
    display: "flex",
    color: "#F26522",
    fontSize: "20px",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: "40px",
      fontWeight: 700,
      fontFamily: "HelveticaNeue-Regular",
    },
  }),

  bodyContainer: (props: any) => ({
    height: "94%",
  }),

  bodySubContainer: (props: any) => ({
    height: "100%",
  }),

  bodyLeftContainer: (props: any) => ({
    height: "100%",
  }),

  bodyLeftSubContainer: (props: any) => ({
    height: "100%",
  }),

  bodyLeftTopPanelContainer: (props: any) => ({
    height: "40%",
  }),

  bodyLeftTopPanelMapContainer: (props: any) => ({
    height: "60%",
  }),

  bodyLeftTopPanelSubContainer: (props: any) => ({
    height: "100%",
  }),

  bodyLeftTopPanelListContainer: (props: any) => ({
    height: "20%",
  }),

  graphOneContainer: (props: any) => ({
    // border: "none",
    // borderWidth: "1px",
    // borderStyle: "solid",
    // borderColor: "transparent #808080 #808080 #808080",
    height: "100%",

    borderBottom: "1px solid #333333",

    borderRight: "1px solid #333333",
  }),

  graphTwoContainer: (props: any) => ({
    // border: "none",
    // borderWidth: "1px",
    // borderStyle: "solid",
    // borderColor: "transparent #808080 #808080 transparent",
    borderBottom: "1px solid #333333",
    height: "100%",
  }),

  notificationPanelGrid: (props: any) => ({
    border: "1px solid #333333",
  }),

  liveContainer: (props: any) => ({
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#57585A20",
    borderRadius: "4px",
    position: "relative",
  }),

  liveImgStyle: (props: any) => ({
    position: "absolute",
    top: "-15px",
    left: "20px",
    [muiTheme.breakpoints.up(3839)]: {
      top: "-20px",
    },
  }),

  liveContentValue: (props: any) => ({
    fontSize: "20px",
    fontWeight: 600,
    [muiTheme.breakpoints.up(3839)]: {
      lineHeight: "56px",
      fontSize: 40,
      fontWeight: 500,
      fontFamily: "HelveticaNeue-Regular",
    },
  }),

  electricity: (props: any) => ({
    fontSize: "20px",
    fontWeight: 600,
    [muiTheme.breakpoints.up(3839)]: {
      lineHeight: "56px",
      fontSize: 40,
      fontWeight: 500,
      fontFamily: "HelveticaNeue-Regular",
    },
  }),

  liveContentValueGreen: (props: any) => ({
    fontSize: "22px",
    fontWeight: 700,
    color: props?.palette?.gridViewComponentCommonStyle?.liveContentValueGreen, //"#80C53B",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 50,
      fontWeight: 700,
      fontFamily: "HelveticaNeue-Regular",
    },
  }),

  liveContentLabel: (props: any) => ({
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "HelveticaNeue-ItalicMedium",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 28,
      fontWeight: 400,
    },
  }),

  liveContentLabelGreen: (props: any) => ({
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "HelveticaNeue-ItalicMedium",
    display: "flex",
    alignItems: "center",
    columnGap: "15px",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 28,
      fontWeight: 400,
    },
  }),

  liveContentStyle: (props: any) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "10px",
  }),

  liveContentLeftStyle: (props: any) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "10px",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      left: "28%",
      bottom: 0,
      width: "44%", // Specify the desired length of the bottom border
      borderBottom: `1px solid ${props?.palette?.gridViewComponentCommonStyle?.liveContentLeftBorder}`, // Specify your desired color and border style
      opacity: "0.4",
    },
  }),

  aqiCircleStyle: (props: any) => ({
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: props?.palette?.gridViewComponentCommonStyle?.aqiCircleBg, //"#80C43B",
    boxShadow: `0px 0px 2px 3px ${props?.palette?.gridViewComponentCommonStyle?.aqiCircleShadow}`,
  }),

  graphTwoHeader: (props: any) => ({
    height: "10%",
    fontSize: "20px",
    fontWeight: 600,
    [muiTheme.breakpoints.up(3839)]: {
      lineHeight: "56px",
      fontSize: 40,
      fontWeight: 500,
      fontFamily: "HelveticaNeue-Regular",
    },
  }),
});
export default useStyles;
