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
    height: "calc(100vh - 50px)",
    color: "white",
    background: "#161515",
    opacity: 1,
    [muiTheme.breakpoints.up(3839)]: {
      width: "calc(100vw - 200px) !important",
    },
    [muiTheme.breakpoints.down(3073)]: {
      width: "calc(100vw - 200px) !important",
    },
    [muiTheme.breakpoints.down(2561)]: {
      width: "calc(100vw - 130px) !important",
    },
    [muiTheme.breakpoints.down(2049)]: {
      width: "calc(100vw - 130px) !important",
    },
    [muiTheme.breakpoints.down(1921)]: {
      width: "calc(100vw - 100px) !important",
    },
    [muiTheme.breakpoints.down(1793)]: {
      width: "calc(100vw - 90px) !important",
    },
    [muiTheme.breakpoints.down(1537)]: {
      width: "calc(100vw - 80px) !important",
    },
    [muiTheme.breakpoints.down(1345)]: {
      width: "calc(100vw - 70px) !important",
    },
    [muiTheme.breakpoints.down(1153)]: {
      width: "calc(100vw - 60px) !important",
    },
  }),

  topPanelListItemStyle: (props: any) => ({
    display: "flex",
    columnGap: "10px",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px 0px",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      top: "20%",
      right: 0,
      height: "60%", // Specify the desired length of the bottom border
      borderRight: `1px dashed #808080`, // Specify your desired color and border style
      opacity: "0.4",
    },
  }),

  pageHeading: (props: any) => ({
    display: "flex",
    color: props?.palette?.gridViewComponentCommonStyle?.containerTitle, //"#F26522",
    fontSize: "18px",
    padding: 30,
    fontFamily: "HelveticaNeue-Regular",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
      padding: 30,
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 24,
      lineHeight: "46px",
      padding: 24,
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 20,
      lineHeight: "36px",
      padding: 20,
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 16,
      lineHeight: "26px",
      padding: 16,
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 13,
      lineHeight: "20px",
      padding: 14,
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "16px",
      padding: 12,
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
    borderTop: "1px solid rgb(51, 51, 51)",
  }),

  bodyLeftTopPanelSubContainer: (props: any) => ({
    height: "100%",
  }),

  bodyLeftTopPanelListContainer: (props: any) => ({
    height: "25%",
  }),

  screenFiveGraphTitleStyle: (props: any) => ({
    fontSize: "16px",
    display: "flex",
    columnGap: "30px",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "48px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 22,
      lineHeight: "38px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 18,
      lineHeight: "28px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 16,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 14,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "16px",
    },
  }),

  graphOneContainer: (props: any) => ({
    // border: "none",
    // borderWidth: "1px",
    // borderStyle: "solid",
    // borderColor: "transparent #808080 #808080 #808080",
    borderBottom: "1px solid #333333",
    borderRight: "1px solid #333333",
  }),

  graphTwoContainer: (props: any) => ({
    // border: "none",
    // borderWidth: "1px",
    // borderStyle: "solid",
    // borderColor: "transparent #808080 #808080 transparent",
    borderBottom: "1px solid #333333",
    display: "flex",
    alignItems: "center",
  }),

  pieChartLegendContainer: {
    display: "flex",
    flexDirection: "column",
  },

  legendIdentifierContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },

  legendColorBox: (props: any) => {
    return {
      width: "20px",
      height: "10px",
      backgroundColor: "#30b7fb",
      borderRadius: "10px",
    };
  },

  legendText: {
    color: "#8A8A8A",
    fontSize: "20px",
    fontFamily: "HelveticaNeue-Regular",
    fontWeight: "500",
    textTransform: "capitalize",
    marginLeft: "15px",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 24,
      lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 15,
      lineHeight: "36px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 16,
      lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 13,
      lineHeight: "20px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "16px",
    },
  },

  notificationPanelGrid: (props: any) => ({
    border: "1px solid #333333",
  }),
  bodyLeftTopPanelListSubContainer: (props: any) => ({
    border: "1px solid #808080",
  }),

  progressBarContainer: (props: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 0px",
  }),
  graphTitle: (props: any) => ({
    fontSize: "16px",
    display: "flex",
    columnGap: "30px",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "48px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 22,
      lineHeight: "38px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 18,
      lineHeight: "28px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 16,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 14,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "16px",
    },
  }),
});
export default useStyles;
