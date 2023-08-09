/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  rootContainer: (props: any) => ({
    fontFamily: "HelveticaNeue-Regular",
    background: props?.palette?.fleetManagementPage?.pageBg, //"#161515",
    height: "100vh",
    paddingLeft: "3.4px",
    [muiTheme.breakpoints.up(3839)]: {
      width: "calc(100vw - 200px) !important",
    },
  }),
  graphTitle: (props: any) => ({
    fontSize: "16px",
    display: "flex",
    columnGap: "30px",
    color: props?.palette?.fleetManagementPage?.topPanelTextColor,
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
    [muiTheme.breakpoints.down(1601)]: {
      fontSize: 14,
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
  }),
  mainSection: (props: any) => ({
    height: "calc(100vh - 50px)",
    color: "white",
    background: props?.palette?.fleetManagementPage?.pageBg, //"#161515",
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
    height: "60%",
    borderTop: `1px solid ${props?.palette?.fleetManagementPage?.topPanelBorder}`,
  }),

  bodyLeftTopPanelSubContainer: (props: any) => ({
    height: "100%",
  }),

  bodyLeftTopPanelListContainer: (props: any) => ({
    height: "25%",
    [muiTheme.breakpoints.down(2561)]: {
      height: "28%",
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
    height: "100%",

    borderBottom: `1px solid ${props?.palette?.fleetManagementPage?.topPanelBorder}`,

    borderRight: `1px solid ${props?.palette?.fleetManagementPage?.topPanelBorder}`,
  }),

  graphTwoContainer: (props: any) => ({
    // border: "none",
    // borderWidth: "1px",
    // borderStyle: "solid",
    // borderColor: "transparent #808080 #808080 transparent",
    borderRight: `1px solid ${props?.palette?.fleetManagementPage?.topPanelBorder}`,
    borderBottom: `1px solid ${props?.palette?.fleetManagementPage?.topPanelBorder}`,
    height: "100%",
  }),

  notificationPanelGrid: (props: any) => ({
    border: `1px solid ${props?.palette?.fleetManagementPage?.topPanelBorder}`,
    background: props?.palette?.notification?.notificationBg,
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
    top: "-1vh",
    left: "1vh",
    "& img": {
      width: "2.5vw",
    },
  }),

  liveContentValue: (props: any) => ({
    color: props?.palette?.fleetManagementPage?.topPanelTextColor,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 36,
      lineHeight: "52px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 26,
      lineHeight: "35px",
    },
    [muiTheme.breakpoints.down(2561)]: {
      fontSize: 22,
      lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 20,
      lineHeight: "32px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 16,
      lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 13,
      lineHeight: "24px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "18px",
    },
  }),

  electricity: (props: any) => ({
    position: "absolute",
    top: "2%",
    left: "2%",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "52px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 22,
      lineHeight: "35px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 18,
      lineHeight: "32px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 16,
      lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 13,
      lineHeight: "24px",
    },
    [muiTheme.breakpoints.down(1441)]: {
      fontSize: 11,
      lineHeight: "24px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 8,
      lineHeight: "18px",
    },
  }),

  liveContentValueGreen: (props: any) => ({
    fontSize: "22px",
    fontWeight: 700,
    color: props?.palette?.gridViewComponentCommonStyle?.liveContentValueGreen, //"#80C53B",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
  }),

  liveContentLabel: (props: any) => ({
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "HelveticaNeue-Regular",
    color: props?.palette?.fleetManagementPage?.topPanelTextColor,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 20,
      lineHeight: "52px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 16,
      lineHeight: "35px",
    },
    [muiTheme.breakpoints.down(2561)]: {
      fontSize: 18,
      lineHeight: "30px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 12,
      lineHeight: "32px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 9,
      lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 8,
      lineHeight: "24px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 5,
      lineHeight: "18px",
    },
  }),

  liveContentLabelGreen: (props: any) => ({
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "HelveticaNeue-Regular",
    display: "flex",
    alignItems: "center",
    columnGap: "15px",
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

  graphContainerHeaderOne: (props: any) => ({
    // height: "90%",
    // marginTop: "6%",
    // [muiTheme.breakpoints.up(3839)]: {
    //   marginTop: "6% !important",
    // },
    // [muiTheme.breakpoints.down(3073)]: {
    //   marginTop: "7% !important",
    // },
    // [muiTheme.breakpoints.down(2561)]: {
    //   marginTop: "3% !important",
    // },
    // [muiTheme.breakpoints.down(2049)]: {
    //   marginTop: "4% !important",
    // },
    // [muiTheme.breakpoints.down(1921)]: {
    //   marginTop: "4% !important",
    // },
    // [muiTheme.breakpoints.down(1537)]: {
    //   marginTop: "4% !important",
    // },
    // [muiTheme.breakpoints.down(1153)]: {
    //   marginTop: "4% !important",
    // },
  }),
  graphContainerHeaderTwo: (props: any) => ({
    // height: "90%",
    // marginTop: "10%",
    // [muiTheme.breakpoints.up(3839)]: {
    //   marginTop: "10% !important",
    // },
    // [muiTheme.breakpoints.down(3073)]: {
    //   marginTop: "10% !important",
    // },
    // [muiTheme.breakpoints.down(2561)]: {
    //   marginTop: "13% !important",
    // },
    // [muiTheme.breakpoints.down(2049)]: {
    //   marginTop: "10% !important",
    // },
    // [muiTheme.breakpoints.down(1921)]: {
    //   marginTop: "10% !important",
    // },
    // [muiTheme.breakpoints.down(1537)]: {
    //   marginTop: "10% !important",
    // },
    // [muiTheme.breakpoints.down(1153)]: {
    //   marginTop: "13% !important",
    // },
  }),
  graphContainerHeaderThree: (props: any) => ({
    // height: "90%",
    // marginTop: "10%",
    // [muiTheme.breakpoints.up(3839)]: {
    //   marginTop: "10% !important",
    // },
    // [muiTheme.breakpoints.down(3073)]: {
    //   marginTop: "10% !important",
    // },
    // [muiTheme.breakpoints.down(2561)]: {
    //   marginTop: "13% !important",
    // },
    // [muiTheme.breakpoints.down(2049)]: {
    //   marginTop: "10% !important",
    // },
    // [muiTheme.breakpoints.down(1921)]: {
    //   marginTop: "10% !important",
    // },
    // [muiTheme.breakpoints.down(1537)]: {
    //   marginTop: "10% !important",
    // },
    // [muiTheme.breakpoints.down(1153)]: {
    //   marginTop: "13% !important",
    // },
  }),

  graphTwoHeader: (props: any) => ({
    position: "absolute",
    top: "2%",
    left: "4%",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "52px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 22,
      lineHeight: "35px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 18,
      lineHeight: "32px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 16,
      lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 13,
      lineHeight: "24px",
    },
    [muiTheme.breakpoints.down(1441)]: {
      fontSize: 11,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 8,
      lineHeight: "18px",
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 8,
      lineHeight: "18px",
    },
  }),
  driveDot: (props: any) => ({
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    backgroundColor: "#73B35A",
    marginRight: 6,
    [muiTheme.breakpoints.up(3839)]: {
      width: "18px",
      height: "18px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      width: "18px",
      height: "18px",
    },
    [muiTheme.breakpoints.down(2561)]: {
      width: "16px",
      height: "16px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      width: "12px",
      height: "12px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      width: "12px",
      height: "12px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      width: "12px",
      height: "12px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      width: "12px",
      height: "12px",
      marginRight: 2,
    },
  }),
  driveDotOne: (props: any) => ({
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    backgroundColor: "#6B70AB",
    marginRight: 6,
    [muiTheme.breakpoints.up(3839)]: {
      width: "18px",
      height: "18px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      width: "18px",
      height: "18px",
    },
    [muiTheme.breakpoints.down(2561)]: {
      width: "16px",
      height: "16px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      width: "12px",
      height: "12px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      width: "12px",
      height: "12px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      width: "12px",
      height: "12px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      width: "12px",
      height: "12px",
      marginRight: 2,
    },
  }),
  screenFiveGraphTitleStyle: (props: any) => ({
    fontSize: "16px",
    display: "flex",
    columnGap: "30px",
    color: props?.palette?.fleetManagementPage?.topPanelTextColor,
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
    [muiTheme.breakpoints.down(1601)]: {
      fontSize: 14,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 12,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1441)]: {
      fontSize: 11,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1345)]: {
      fontSize: 10,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 8,
      lineHeight: "16px",
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 8,
      lineHeight: "16px",
    },
  }),
});
export default useStyles;
