/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  rootContainer: (props: any) => ({
    fontFamily: "HelveticaNeue-Regular",
    background: props?.palette?.fleetManagementPage?.pageBg,
    height: "100vh",
    paddingLeft: "3.4px",
    [muiTheme.breakpoints.up(3839)]: {
      width: "calc(100vw - 200px) !important",
    },
  }),
  mainSection: (props: any) => ({
    height: "calc(100vh - 50px)",
    color: "white",
    background: props?.palette?.fleetManagementPage?.pageBg,
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
    [muiTheme.breakpoints.down(2561)]: {
      fontSize: 20,
      lineHeight: "36px",
      padding: 20,
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
    position: "relative",
    height: "60%",
    // borderTop: "1px solid rgb(51, 51, 51)",
  }),

  bodyLeftTopPanelSubContainer: (props: any) => ({
    height: "100%",
  }),

  bodyLeftTopPanelListContainer: (props: any) => ({
    height: "30%",
    [muiTheme.breakpoints.down(2561)]: {
      height: "28%",
    },
    [muiTheme.breakpoints.down(2049)]: {
      height: "30%",
    },
    [muiTheme.breakpoints.down(1025)]: {
      height: "27%",
    },
  }),

  graphOneContainer: (props: any) => ({
    // border: "none",
    // borderWidth: "1px",
    // borderStyle: "solid",
    // borderColor: "transparent #808080 #808080 #808080",
    borderBottom: `1px solid ${props?.palette?.fleetManagementPage?.topPanelBorder}`,
    borderRight: `1px solid ${props?.palette?.fleetManagementPage?.topPanelBorder}`,
    background: props?.palette?.fleetManagementPage?.graphBg,
    height: "100%",
  }),

  graphTwoContainer: (props: any) => ({
    // border: "none",
    // borderWidth: "1px",
    // borderStyle: "solid",
    // borderColor: "transparent #808080 #808080 transparent",
    borderBottom: `1px solid ${props?.palette?.fleetManagementPage?.topPanelBorder}`,
    background: props?.palette?.fleetManagementPage?.graphBg,
    height: "100%",
  }),

  notificationPanelGrid: (props: any) => ({
    border: `1px solid ${props?.palette?.fleetManagementPage?.topPanelBorder}`,
    background: props?.palette?.notification?.notificationBg,
  }),
  graphTwoHeader: (props: any) => ({
    fontSize: "16px",
    display: "flex",
    padding: 10,
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
    [muiTheme.breakpoints.down(1441)]: {
      fontSize: 11,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "16px",
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 8,
      lineHeight: "16px",
    },
  }),
  screenFiveGraphTitleStyle: (props: any) => ({
    fontSize: "0.8vw",
    display: "flex",
    color: props?.palette?.fleetManagementPage?.topPanelTextColor,
    // padding: 10,
    columnGap: "30px",
    // [muiTheme.breakpoints.up(3839)]: {
    //   fontSize: 30,
    //   lineHeight: "48px",
    // },
    // [muiTheme.breakpoints.down(3073)]: {
    //   fontSize: 22,
    //   lineHeight: "38px",
    // },
    // [muiTheme.breakpoints.down(2049)]: {
    //   fontSize: 18,
    //   lineHeight: "28px",
    // },
    // [muiTheme.breakpoints.down(1921)]: {
    //   fontSize: 16,
    //   lineHeight: "22px",
    // },
    // [muiTheme.breakpoints.down(1537)]: {
    //   fontSize: 14,
    //   lineHeight: "22px",
    // },
    // [muiTheme.breakpoints.down(1153)]: {
    //   fontSize: 10,
    //   lineHeight: "16px",
    // },
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
    // height: "100%",
    paddingLeft: "10px",
    color: props?.palette?.fleetManagementPage?.topPanelTextColor,
  }),
  graphTitleOneRound: (props: any) => ({
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "#25796D",
    marginRight: 6,
  }),
  graphOneChartStyle: (props: any) => ({
    height: "90%",
  }),
  graphTwoChartStyle: (props: any) => ({
    height: "90%",
  }),
  geofenceIconStyle: (props: any) => ({
    position: "absolute",
    color: "white",
    zIndex: 1,
    // background: "#F26522",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // borderRadius: "50px",
    cursor: "pointer",
    // padding: "15px 5px 15px 5px",
    // width: "53px",
    // height: "30px",
    right: "5px",
    top: "2px",
    width: "5%",
  }),
  pageNumSection: (props:any) => ({
    width: "3vw",
    margin: "0 0.8vw",
    "& .MuiInputBase-input": {
      padding: "6px !important",
      fontSize: "0.6vw",
      lineHeight: "17px",
    },
    "& .MuiFormLabel-root": {
      fontSize: 12,
      lineHeight: "13px",
      left: "-3px",
    },
  }),
  customPagination: (props:any) =>({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    // marginTop : "1vh"
  }),
  globeIconSection: (props: any) => ({
    position: "absolute",
    top: "0.4vw",
    right: "4vw",
    cursor: "pointer",
    width: "3.5vw",
    zIndex : 1
  }),
});
export default useStyles;
