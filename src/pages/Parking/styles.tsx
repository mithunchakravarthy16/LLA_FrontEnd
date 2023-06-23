import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  rootContainer: (props: any) => ({
    fontFamily: `'Nunito Sans', sans-serif !important`,
    background: "#161515",
    height: "100vh",
    paddingLeft: "3.4px",
  }),
  mainSection: (props: any) => ({
    height: "calc(100vh - 50px)",
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
    position : "relative",
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
    borderBottom : "1px solid #333333",
    borderRight : "1px solid #333333",

    height: "100%",
  }),

  graphTwoContainer: (props: any) => ({
    // border: "none",
    // borderWidth: "1px",
    // borderStyle: "solid",
    // borderColor: "transparent #808080 #808080 transparent",
    borderBottom : "1px solid #333333",

    height: "100%",
  }),

  notificationPanelGrid: (props: any) => ({
    border : "1px solid #333333"
  }),

  mapFilterStyle: (props: any) => ({
    position : "absolute",
    color:"white",
    right : 15,
    top : 15,
    zIndex : 1,
    // width: "50px",
    // height: "50px",
    background: "rgb(68, 68, 68, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50px",
    cursor : "pointer",
    fontWeight : 600,
    width: "30%"
  }),
  customNotificationTabs: (props: any) => ({
    "& .MuiTabs-flexContainer": {
      display: "flex",
      flexDirection: "row",
      // columnGap: "51px",
      // textTransform: "uppercase",
      justifyContent : "space-around"
    },

    "& .MuiButtonBase-root": {
      textTransform: "unset",
      marginRight: "0 !important",
      minWidth: "64px !important",
      padding: "0px !important",
    },

    "& .MuiTab-root": {
      fontSize: "16px !important",
      fontWeight: "600 !important",
      lineHeight: "30px !important",
      fontFamily: 'HelveticaNeue-Regular',
      margin: "10px 0px 10px 0px",
      "&:first-child": {
        marginRight: "0 !important",
        minWidth: "64px !important",
        color: `#FFF !important`,
        background : "#808080",
        borderRadius : "17px",
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
          background : "#F26522",
          "& .count": {
            background: `${props?.palette?.notification?.eventColor} !important`,
            color: `${props?.palette?.notification?.listTextColor} !important`,
          },
        },
      },
      "&:nth-child(2)": {
        marginRight: "0 !important",
        minWidth: "64px !important",
        color: `#FFF !important`,
        background : "#808080",
        borderRadius : "17px",

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
        background : "#F26522",
        "& .count": {
          background: `${props?.palette?.notification?.incidentColor} !important`,
          color: `${props?.palette?.notification?.listTextColor} !important`,
        },
      },
      "&:nth-child(3)": {
        marginRight: "0 !important",
        minWidth: "64px !important",
        color: `#FFF !important`,
        background : "#808080",
        borderRadius : "17px",

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
          background : "#F26522",          "& .count": {
            background: `${props?.palette?.notification?.oprAlertColor} !important`,
            color: `${props?.palette?.notification?.listTextColor} !important`,
          },
        },
      },
      "&:nth-child(4)": {
        marginRight: "0 !important",
        minWidth: "64px !important",
        color: `#FFF !important`,
        background : "#808080",
        borderRadius : "17px",

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
          background : "#F26522",          "& .count": {
            background: `${props?.palette?.notification?.oprAlertColor} !important`,
            color: `${props?.palette?.notification?.listTextColor} !important`,
          },
        },
      },
      "&:nth-child(5)": {
        marginRight: "0 !important",
        minWidth: "64px !important",
        color: `#FFF !important`,
        background : "#808080",
        borderRadius : "17px",

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
          background : "#F26522",          "& .count": {
            background: `${props?.palette?.notification?.oprAlertColor} !important`,
            color: `${props?.palette?.notification?.listTextColor} !important`,
          },
        },
      },
    },
    "& .MuiTabs-root .MuiTabs-indicator": {
      background:"transparent",
      height: "6px",
      borderRadius: 6,
      textTransform: "uppercase",
    },
  }),
});
export default useStyles;
