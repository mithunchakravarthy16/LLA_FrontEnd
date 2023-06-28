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
    [muiTheme.breakpoints.down(2049)]: {
      width: "calc(100vw - 130px) !important",
    },
    [muiTheme.breakpoints.down(1921)]: {
      width: "calc(100vw - 100px) !important",
    },
    [muiTheme.breakpoints.down(1153)]: {
      width: "calc(100vw - 80px) !important",
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
    borderBottom: "1px solid #333333",
    borderRight: "1px solid #333333",

    height: "100%",
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
  graphTwoHeader: (props: any) => ({
    height: "10%",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "70px",
    },
  }),
  screenFiveGraphTitleStyle: (props: any) => ({
    fontSize: "16px",
    display: "flex",
    columnGap: "30px",
    height: "10%",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
  }),

  graphOneContainerStyle: (props: any) => ({
    height: "100%",
    padding: "10px 10px 5px 30px",
  }),

  graphOneGraphTitleContainer: (props: any) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: "6px",
  }),

  graphTitleTwoStyle: (props: any) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: "6px",
  }),
  graphTitleTwoRound: (props: any) => ({
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "#D25A5A",
    marginRight: 6,
  }),
  graphTwoContainerStyle: (props: any) => ({
    height: "100%",
    padding: "10px 10px 5px 30px",
  }),
  graphTitleOneRound: (props: any) => ({
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "#25796D",
    marginRight: 6,
  }),
  graphOneChartStyle: (props: any) => ({
    height: "90%"
  }),
  graphTwoChartStyle: (props: any) => ({
    height: "90%"
  }),
});
export default useStyles;
