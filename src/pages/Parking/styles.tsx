/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const responsiveWidth = (width: number) => {
  return (width * window.innerWidth) / 3840;
};

const useStyles = makeStyles({
  rootContainer: (props: any) => ({
    fontFamily: "HelveticaNeue-Regular",
    background: props?.palette?.parkingPage?.pageBg,
    height: "100vh",
    // paddingLeft: props?.parkingLotIndex === 0 ? "3.4px" : "57.4px",
    paddingLeft: "3.4px",

    [muiTheme.breakpoints.up(3839)]: {
      width: "calc(100vw - 200px) !important",
    },
  }),
  mainSection: (props: any) => ({
    height: "calc(100vh - 50px)",
    color: "white",
    // background: "#161515",
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
    [muiTheme.breakpoints.down(1025)]: {
      height: "27%",
    },
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
    border: `1px solid ${props?.palette?.parkingPage?.topPanelBorder}`,
    background: props?.palette?.notification?.notificationBg,
  }),

  mapFilterStyle: (props: any) => ({
    position: "absolute",
    color: "white",
    right: 7,
    top: 0,
    zIndex: 1,
    // width: "50px",
    // height: "50px",
    background: "rgb(68, 68, 68, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50px",
    cursor: "pointer",
    width: 769,
    height: 129,
    paddingLeft: 15,
    [muiTheme.breakpoints.up(3839)]: {
      width: 769,
      height: 129,
    },
    [muiTheme.breakpoints.up(3839)]: {},
    [muiTheme.breakpoints.down(3073)]: {},
    [muiTheme.breakpoints.down(2561)]: {
      height: 80,
      width: 520,
    },
    [muiTheme.breakpoints.down(2049)]: {},
    [muiTheme.breakpoints.down(1921)]: {},
    [muiTheme.breakpoints.down(1537)]: {},
    [muiTheme.breakpoints.down(1153)]: {},
  }),
  customNotificationTabs: (props: any) => ({
    "& .MuiTabs-flexContainer": {
      display: "flex",
      flexDirection: "row",
    },

    "& .MuiButtonBase-root": {
      textTransform: "unset",
      marginRight: "0 !important",
      minWidth: "64px !important",
      padding: "0px !important",
    },

    "& .MuiTab-root": {
      fontSize: "16px !important",
      fontWeight: "500 !important",
      lineHeight: "30px !important",
      // fontFamily: "HelveticaNeue-Regular",
      margin: "10px 0px 10px 0px",
      padding: "16px 32px !important",
      [muiTheme.breakpoints.up(3839)]: {
        padding: "6px 24px !important",
      },
      [muiTheme.breakpoints.down(1793)]: {
        padding: "inherit !important",
      },
      "&:first-child": {
        minWidth: "64px !important",
        color: `#FFF !important`,
        background: "#808080",
        borderRadius: "17px",
        width: 94,
        height: 94,
        padding: "0 !important",
        margin: "0 18px !important",
        [muiTheme.breakpoints.up(3839)]: {
          width: 94,
          height: 94,
          padding: "0 !important",
          margin: "0 18px !important",
        },
        [muiTheme.breakpoints.up(3839)]: {},
        [muiTheme.breakpoints.down(3073)]: {},
        [muiTheme.breakpoints.down(2561)]: {
          width: 60,
          height: 60,
          padding: "0 !important",
          margin: "0 10px !important",
        },
        [muiTheme.breakpoints.down(2049)]: {},
        [muiTheme.breakpoints.down(1921)]: {},
        [muiTheme.breakpoints.down(1537)]: {},
        [muiTheme.breakpoints.down(1153)]: {},
        "& .count": {
          width: 45,
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "28px",
          background: "#5B5B5B",
          borderRadius: "30px",
          color: "#B7B6B6",
          marginBottom: 6,
        },
        "&.Mui-selected": {
          color: `#FFF !important`,
          background: "#F26522",
          "& .count": {
            background: `${props?.palette?.notification?.eventColor} !important`,
            color: `${props?.palette?.notification?.listTextColor} !important`,
          },
        },
      },
      "&:nth-child(2)": {
        minWidth: "64px !important",
        color: `#FFF !important`,
        background: "#808080",
        borderRadius: "17px",
        width: 94,
        height: 94,
        padding: "0 !important",
        margin: "0 16px !important",
        [muiTheme.breakpoints.up(3839)]: {
          width: 94,
          height: 94,
          padding: "0 !important",
          margin: "0 18px !important",
        },
        [muiTheme.breakpoints.up(3839)]: {},
        [muiTheme.breakpoints.down(3073)]: {},
        [muiTheme.breakpoints.down(2561)]: {
          width: 60,
          height: 60,
          padding: "0 !important",
          margin: "0 10px !important",
        },
        [muiTheme.breakpoints.down(2049)]: {},
        [muiTheme.breakpoints.down(1921)]: {},
        [muiTheme.breakpoints.down(1537)]: {},
        [muiTheme.breakpoints.down(1153)]: {},
        "& .count": {
          width: 45,
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "28px",
          background: "#5B5B5B",
          borderRadius: "30px",
          color: "#B7B6B6",
          marginBottom: 6,
        },
      },
      "&.Mui-selected": {
        color: `#FFF !important`,
        background: "#F26522",
        "& .count": {
          background: `${props?.palette?.notification?.incidentColor} !important`,
          color: `${props?.palette?.notification?.listTextColor} !important`,
        },
      },
      "&:nth-child(3)": {
        minWidth: "64px !important",
        color: `#FFF !important`,
        background: "#808080",
        borderRadius: "17px",
        width: 94,
        height: 94,
        padding: "0 !important",
        margin: "0 16px !important",
        [muiTheme.breakpoints.up(3839)]: {
          width: 94,
          height: 94,
          padding: "0 !important",
          margin: "0 18px !important",
        },
        [muiTheme.breakpoints.up(3839)]: {},
        [muiTheme.breakpoints.down(3073)]: {},
        [muiTheme.breakpoints.down(2561)]: {
          width: 60,
          height: 60,
          padding: "0 !important",
          margin: "0 10px !important",
        },
        [muiTheme.breakpoints.down(2049)]: {},
        [muiTheme.breakpoints.down(1921)]: {},
        [muiTheme.breakpoints.down(1537)]: {},
        [muiTheme.breakpoints.down(1153)]: {},
        "& .count": {
          width: 45,
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "28px",
          background: "#5B5B5B",
          borderRadius: "30px",
          color: "#B7B6B6",
          marginBottom: 6,
        },
        "&.Mui-selected": {
          color: `#FFF !important`,
          background: "#F26522",
          "& .count": {
            background: `${props?.palette?.notification?.oprAlertColor} !important`,
            color: `${props?.palette?.notification?.listTextColor} !important`,
          },
        },
      },
      "&:nth-child(4)": {
        minWidth: "64px !important",
        color: `#FFF !important`,
        background: "#808080",
        borderRadius: "17px",
        width: 94,
        height: 94,
        padding: "0 !important",
        margin: "0 16px !important",
        [muiTheme.breakpoints.up(3839)]: {
          width: 94,
          height: 94,
          padding: "0 !important",
          margin: "0 18px !important",
        },
        [muiTheme.breakpoints.up(3839)]: {},
        [muiTheme.breakpoints.down(3073)]: {},
        [muiTheme.breakpoints.down(2561)]: {
          width: 60,
          height: 60,
          padding: "0 !important",
          margin: "0 10px !important",
        },
        [muiTheme.breakpoints.down(2049)]: {},
        [muiTheme.breakpoints.down(1921)]: {},
        [muiTheme.breakpoints.down(1537)]: {},
        [muiTheme.breakpoints.down(1153)]: {},
        "& .count": {
          width: 45,
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "28px",
          background: "#5B5B5B",
          borderRadius: "30px",
          color: "#B7B6B6",
          marginBottom: 6,
        },
        "&.Mui-selected": {
          color: `#FFF !important`,
          background: "#F26522",
          "& .count": {
            background: `${props?.palette?.notification?.oprAlertColor} !important`,
            color: `${props?.palette?.notification?.listTextColor} !important`,
          },
        },
      },
      "&:nth-child(5)": {
        minWidth: "64px !important",
        color: `#FFF !important`,
        background: "#808080",
        borderRadius: "17px",
        width: 94,
        height: 94,
        padding: "0 !important",
        margin: "0 16px !important",
        [muiTheme.breakpoints.up(3839)]: {
          width: 94,
          height: 94,
          padding: "0 !important",
          margin: "0 18px !important",
        },
        [muiTheme.breakpoints.up(3839)]: {},
        [muiTheme.breakpoints.down(3073)]: {},
        [muiTheme.breakpoints.down(2561)]: {
          width: 60,
          height: 60,
          padding: "0 !important",
          margin: "0 10px !important",
        },
        [muiTheme.breakpoints.down(2049)]: {},
        [muiTheme.breakpoints.down(1921)]: {},
        [muiTheme.breakpoints.down(1537)]: {},
        [muiTheme.breakpoints.down(1153)]: {},
        "& .count": {
          width: 45,
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "28px",
          background: "#5B5B5B",
          borderRadius: "30px",
          color: "#B7B6B6",
          marginBottom: 6,
        },
        "&.Mui-selected": {
          color: `#FFF !important`,
          background: "#F26522",
          "& .count": {
            background: `${props?.palette?.notification?.oprAlertColor} !important`,
            color: `${props?.palette?.notification?.listTextColor} !important`,
          },
        },
      },
    },
    "& .MuiTabs-root .MuiTabs-indicator": {
      background: "transparent",
      height: "6px",
      borderRadius: 6,
      textTransform: "uppercase",
    },
  }),

  lotSelectionIconStyle: (props: any) => ({
    position: "absolute",
    color: "white",
    zIndex: 1,
    background: "#F26522",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    width: responsiveWidth(122),
    height: responsiveWidth(122),
    fontSize: responsiveWidth(40),
    right: 15,
    top: 7,
    borderRadius: "50%",
  }),

  lotSelectionIconStyleClose: (props: any) => ({
    position: "absolute",
    color: "white",
    zIndex: 1,
    background: "#F26522",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: responsiveWidth(122),
    height: responsiveWidth(122),
    fontSize: responsiveWidth(40),
    right: 15,
    top: "50%",
    transform: "translateY(-50%)",
    borderRadius: "50%",
    cursor: "pointer",
    // [muiTheme.breakpoints.up(3839)]: {
    //   width: 122,
    //   height: 122,
    //   borderRadius: "50%",
    //   fontSize: 40,
    //   right: 0,
    // },
    // [muiTheme.breakpoints.up(3839)]: {
    //   fontSize: 44,
    //   lineHeight: "72px",
    // },
    // [muiTheme.breakpoints.down(3073)]: {
    //   fontSize: 36,
    //   lineHeight: "62px",
    // },
    // [muiTheme.breakpoints.down(2561)]: {
    //   fontSize: 22,
    //   lineHeight: "26px",
    //   width: 75,
    //   height: 75,
    //   top: 5,
    //   right: 5,
    // },
    // [muiTheme.breakpoints.down(2049)]: {
    //   fontSize: 22,
    //   lineHeight: "38px",
    // },
    // [muiTheme.breakpoints.down(1921)]: {
    //   fontSize: 20,
    //   lineHeight: "34px",
    // },
    // [muiTheme.breakpoints.down(1537)]: {
    //   fontSize: 18,
    //   lineHeight: "27px",
    // },
    // [muiTheme.breakpoints.down(1153)]: {
    //   fontSize: 16,
    //   lineHeight: "16px",
    // },
  }),
  lotImageStyle: (props: any) => ({
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
     marginTop: "0.1vh",
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
      top: "-30px",
    },
    [muiTheme.breakpoints.down(1025)]: {
      top: "-19px",
      left: "4px",
    },
    "& img": {
      width: "2.5vw !important",
    },
  }),

  liveContentValue: (props: any) => ({
    fontSize: "1.2vw",
    fontWeight: 500,
    color: props?.palette?.parkingPage?.topPanelTextColor,
    lineHeight: "1vw",
    [muiTheme.breakpoints.up(3839)]: {
      // fontSize: 30,
      lineHeight: "56px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      // fontSize: 24,
      lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(2561)]: {
      // fontSize: 22,
      lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      // fontSize: 20,
      lineHeight: "36px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      // fontSize: 16,
      lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      // fontSize: 13,
      lineHeight: "20px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      // fontSize: 10,
      lineHeight: "16px",
    },
  }),

  electricity: (props: any) => ({
    fontSize: "16px",
    display: "flex",
    padding: 10,
    color: props?.palette?.parkingPage?.topPanelTextColor,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "0px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 22,
      lineHeight: "0px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 18,
      lineHeight: "0px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 16,
      lineHeight: "0px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 14,
      lineHeight: "0px",
    },
    [muiTheme.breakpoints.down(1441)]: {
      fontSize: 11,
      lineHeight: "0px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "0px",
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
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 24,
      lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 20,
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
  }),

  liveContentLabel: (props: any) => ({
    fontSize: "0.8vw",
    fontWeight: 500,
    color: props?.palette?.parkingPage?.topPanelTextColor,
    [muiTheme.breakpoints.up(3839)]: {
      // fontSize: 24,
      lineHeight: "56px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      // fontSize: 18,
      lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(2561)]: {
      // fontSize: 18,
      lineHeight: "30px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      // fontSize: 14,
      lineHeight: "36px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      // fontSize: 10,
      lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      // fontSize: 8,
      lineHeight: "20px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      // fontSize: 6,
      lineHeight: "16px",
    },
  }),

  liveContentLabelGreen: (props: any) => ({
    fontSize: "14px",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    columnGap: "15px",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 24,
      lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(2561)]: {
      fontSize: 20,
      lineHeight: "36px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 20,
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
      borderBottom: `1px solid ${props?.palette?.parkingPage?.liveContentDividerLineColor}`, // Specify your desired color and border style
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
      fontSize: 30,
      lineHeight: "56px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 24,
      lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 20,
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
