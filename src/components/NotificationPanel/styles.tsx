/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  notificationRootContainer: (props: any) => ({
    margin: "0 36px 36px 36px",
    [muiTheme.breakpoints.up(3839)]: {
      margin: 36,
    },
    [muiTheme.breakpoints.down(3073)]: {
      margin: "26px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      margin: "10px 20px 20px 20px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      margin: "20px ",
    },
    [muiTheme.breakpoints.down(1545)]: {
      margin: "20px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      margin: "16px",
    },
  }),
  notificationTitle: (props: any) => ({
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    fontSize: 22,
    fontFamily: "HelveticaNeue-Medium",
    width: "80%",
    color: props?.palette?.notification?.notificationPanelTitle,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 44,
      lineHeight: "72px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 36,
      lineHeight: "62px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 24,
      lineHeight: "38px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 20,
      lineHeight: "30px",
    },
    [muiTheme.breakpoints.down(1545)]: {
      fontSize: 18,
      lineHeight: "30px",
    },
    [muiTheme.breakpoints.down(1441)]: {
      fontSize: 17,
      lineHeight: "30px",
    },
    [muiTheme.breakpoints.down(1345)]: {
      fontSize: 16,
      lineHeight: "30px",
    },
    [muiTheme.breakpoints.down(1281)]: {
      fontSize: 16,
      lineHeight: "30px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 14,
      lineHeight: "16px",
    },
  }),
  notificationHeader: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 24,
    height: 100,
    [muiTheme.breakpoints.up(3839)]: {
      height: 100,
    },
    [muiTheme.breakpoints.down(3073)]: {
      height: 80,
    },
    [muiTheme.breakpoints.down(2049)]: {
      height: 70,
    },
    [muiTheme.breakpoints.down(1921)]: {
      height: 60,
    },
    [muiTheme.breakpoints.down(1545)]: {
      height: 50,
    },
    [muiTheme.breakpoints.down(1153)]: {
      height: 40,
    },
  }),
  notificationIconSection: (props: any) => ({}),
  notificationSearchIcon: (props: any) => ({
    marginRight: "20px",
    cursor: "pointer",
    width: 20,
    [muiTheme.breakpoints.up(3839)]: {
      width: 40,
    },
    [muiTheme.breakpoints.down(3073)]: {
      width: 32,
    },
    [muiTheme.breakpoints.down(2049)]: {
      width: 18,
    },
    [muiTheme.breakpoints.down(1921)]: {
      width: 18,
    },
    [muiTheme.breakpoints.down(1545)]: {
      width: 15,
    },
    [muiTheme.breakpoints.down(1153)]: {
      width: 16,
    },
    [muiTheme.breakpoints.down(1025)]: {
      width: 12,
    },
  }),
  notificationCloseIcon: (props: any) => ({
    cursor: "pointer",
  }),
  customNotificationTabs: (props: any) => ({
    "& .MuiTabs-flexContainer": {
      display: "flex",
      flexDirection: "row",
      textTransform: "uppercase",
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
      fontFamily: "HelveticaNeue-Regular",
      marginBottom: 10,
      "&:first-child": {
        marginRight: "0 !important",
        minWidth: "64px !important",
        color: `${props?.palette?.notification?.listItemLabel} !important`,
        flex: 1,
        "& .count": {
          width: 45,
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "28px",
          background: `${props?.palette?.notification?.listItemLabel} !important`,
          borderRadius: "30px",
          color: `${props?.palette?.notification?.tabListCountColor} !important`,
          marginBottom: 6,
          [muiTheme.breakpoints.up(3839)]: {
            fontSize: "30px",
            lineHeight: "50px",
            marginBottom: 16,
            width: 90,
          },
          [muiTheme.breakpoints.down(3073)]: {
            fontSize: "24px",
            lineHeight: "42px",
            marginBottom: 16,
            width: 90,
          },
          [muiTheme.breakpoints.down(2049)]: {
            fontSize: "18px",
            lineHeight: "36px",
            marginBottom: 16,
            width: 70,
          },
          [muiTheme.breakpoints.down(1921)]: {
            fontSize: "14px",
            lineHeight: "27px",
            marginBottom: 16,
            width: 60,
          },
          [muiTheme.breakpoints.down(1545)]: {
            fontSize: "11px",
            lineHeight: "21px",
            marginBottom: 16,
            width: 40,
          },
          [muiTheme.breakpoints.down(1153)]: {
            fontSize: "10px",
            lineHeight: "16px",
            marginBottom: 16,
            width: 35,
          },
        },
        "&.Mui-selected": {
          color: `${props?.palette?.notification?.eventColor} !important`,
          "& .count": {
            background: `${props?.palette?.notification?.eventColor} !important`,
            color: `${props?.palette?.notification?.listItemContent} !important`,
          },
        },
      },
      "&:nth-child(2)": {
        marginRight: "0 !important",
        minWidth: "64px !important",
        color: `${props?.palette?.notification?.listItemLabel} !important`,
        flex: 1,
        "& .count": {
          width: 45,
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "28px",
          background: `${props?.palette?.notification?.listItemLabel} !important`,
          borderRadius: "30px",
          color: `${props?.palette?.notification?.tabListCountColor} !important`,
          marginBottom: 6,
          [muiTheme.breakpoints.up(3839)]: {
            fontSize: "30px",
            lineHeight: "50px",
            marginBottom: 16,
            width: 90,
          },
          [muiTheme.breakpoints.down(3073)]: {
            fontSize: "24px",
            lineHeight: "42px",
            marginBottom: 16,
            width: 90,
          },
          [muiTheme.breakpoints.down(2049)]: {
            fontSize: "18px",
            lineHeight: "36px",
            marginBottom: 16,
            width: 70,
          },
          [muiTheme.breakpoints.down(1921)]: {
            fontSize: "14px",
            lineHeight: "27px",
            marginBottom: 16,
            width: 60,
          },
          [muiTheme.breakpoints.down(1545)]: {
            fontSize: "11px",
            lineHeight: "21px",
            marginBottom: 16,
            width: 40,
          },
          [muiTheme.breakpoints.down(1153)]: {
            fontSize: "10px",
            lineHeight: "16px",
            marginBottom: 16,
            width: 35,
          },
        },
        "&.Mui-selected": {
          color: `${props?.palette?.notification?.incidentColor} !important`,
          "& .count": {
            background: `${props?.palette?.notification?.incidentColor} !important`,
            color: `${props?.palette?.notification?.listItemContent} !important`,
          },
        },
      },

      "&:nth-child(3)": {
        marginRight: "0 !important",
        minWidth: "64px !important",
        color: `${props?.palette?.notification?.listItemLabel} !important`,
        flex: 1,
        "& .count": {
          width: 45,
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "28px",
          background: `${props?.palette?.notification?.listItemLabel} !important`,
          borderRadius: "30px",
          color: `${props?.palette?.notification?.tabListCountColor} !important`,
          marginBottom: 6,
          [muiTheme.breakpoints.up(3839)]: {
            fontSize: "30px",
            lineHeight: "50px",
            marginBottom: 16,
            width: 90,
          },
          [muiTheme.breakpoints.down(3073)]: {
            fontSize: "24px",
            lineHeight: "42px",
            marginBottom: 16,
            width: 90,
          },
          [muiTheme.breakpoints.down(2049)]: {
            fontSize: "18px",
            lineHeight: "36px",
            marginBottom: 16,
            width: 70,
          },
          [muiTheme.breakpoints.down(1921)]: {
            fontSize: "14px",
            lineHeight: "27px",
            marginBottom: 16,
            width: 60,
          },
          [muiTheme.breakpoints.down(1545)]: {
            fontSize: "11px",
            lineHeight: "21px",
            marginBottom: 16,
            width: 40,
          },
          [muiTheme.breakpoints.down(1153)]: {
            fontSize: "10px",
            lineHeight: "16px",
            marginBottom: 16,
            width: 35,
          },
        },
        "&.Mui-selected": {
          color: `${props?.palette?.notification?.oprAlertColor} !important`,
          "& .count": {
            background: `${props?.palette?.notification?.oprAlertColor} !important`,
            color: `${props?.palette?.notification?.listItemContent} !important`,
          },
        },
      },
    },
    "& .MuiTabs-root .MuiTabs-indicator": {
      background:
        props?.tabIndex === 0
          ? `${props?.palette?.notification?.eventColor} !important`
          : props?.tabIndex === 1
          ? `${props?.palette?.notification?.incidentColor} !important`
          : `${props?.palette?.notification?.oprAlertColor} !important`,
      height: "6px",
      borderRadius: 6,
      textTransform: "uppercase",
    },
  }),
  tabSection: (props: any) => ({
    margin: "15px 0px",
    borderBottom: `1px solid ${props?.palette?.notification?.notiTabBottomBorder}`, // "1px solid rgb(255 255 255 / 50%)",
  }),
  searchClass: (props: any) => ({
    border: `1px solid ${props?.palette?.notification?.listItemBorder}`,
    background: props?.palette?.notification?.listItemBg,
    color: props?.palette?.notification?.lightGrey3,
    borderRadius: 6,
    height: "48px",
    [muiTheme.breakpoints.up(3839)]: {
      height: 84,
    },
    [muiTheme.breakpoints.down(3073)]: {
      height: 70,
    },
    [muiTheme.breakpoints.down(2049)]: {
      height: 56,
    },
    [muiTheme.breakpoints.down(1921)]: {
      height: 46,
    },
    [muiTheme.breakpoints.down(1793)]: {
      height: 48,
    },
    [muiTheme.breakpoints.down(1545)]: {
      height: 38,
    },
    [muiTheme.breakpoints.down(1153)]: {
      height: 32,
    },
    "& .MuiIconButton-root": {
      marginRight: 7,
      "& .MuiSvgIcon-root": {
        fontSize: "1vw",
      },

      [muiTheme.breakpoints.up(3839)]: {
        marginRight: 15,
      },
      [muiTheme.breakpoints.down(3073)]: {
        marginRight: 13,
      },
      [muiTheme.breakpoints.down(2049)]: {
        marginRight: 12,
      },
      [muiTheme.breakpoints.down(1921)]: {
        marginRight: 11,
      },
      [muiTheme.breakpoints.down(1545)]: {
        marginRight: 10,
      },
      [muiTheme.breakpoints.down(1153)]: {
        marginRight: 9,
      },
      "& img": {
        [muiTheme.breakpoints.up(3839)]: {
          width: 40,
        },
        [muiTheme.breakpoints.down(3073)]: {
          width: 36,
        },
        [muiTheme.breakpoints.down(2049)]: {
          width: 18,
        },
        [muiTheme.breakpoints.down(1921)]: {
          width: 18,
        },
        [muiTheme.breakpoints.down(1545)]: {
          width: 17,
        },
        [muiTheme.breakpoints.down(1153)]: {
          width: 12,
        },
      },
    },
    "& .MuiInputBase-input": {
      padding: "14px 6px",
      fontSize: "24px",
      lineHeight: "52px",
      fontFamily: "HelveticaNeue-Regular",
      [muiTheme.breakpoints.up(3839)]: {
        fontSize: "30px",
        lineHeight: "52px",
      },
      [muiTheme.breakpoints.down(3073)]: {
        fontSize: "24px",
        lineHeight: "48px",
      },
      [muiTheme.breakpoints.down(2049)]: {
        fontSize: "18px",
        lineHeight: "45px",
      },
      [muiTheme.breakpoints.down(1921)]: {
        fontSize: "15px",
        lineHeight: "24px",
      },
      [muiTheme.breakpoints.down(1545)]: {
        fontSize: "13px",
        lineHeight: "21px",
        padding: 0,
      },
      [muiTheme.breakpoints.down(1153)]: {
        fontSize: "10px",
        lineHeight: "21px",
      },
    },
  }),
  noResultFoundClass: (props: any) => ({
    fontSize: "1vw",
    padding: "1vw",
    fontFamily: "HelveticaNeue-Regular",
    color: props?.palette?.notification?.noResultFoundColor,
  }),
  notificationListItemSection: (props: any) => ({
    height:
      props?.notificationPageName === "dashboard"
        ? "calc(100vh - 365px)"
        : "calc(100vh - 400px)",
    overflowY: "scroll",
    // "&::-webkit-scrollbar": {
    //   width: 0,
    // },
    [muiTheme.breakpoints.up(3839)]: {
      height:
        props?.notificationPageName === "dashboard"
          ? "calc(100vh - 684px)"
          : "calc(100vh - 511px)",
    },

    [muiTheme.breakpoints.down(3073)]: {
      height:
        props?.notificationPageName === "dashboard"
          ? "calc(100vh - 624px)"
          : "calc(100vh - 461px)",
    },
    [muiTheme.breakpoints.down(2561)]: {
      height:
        props?.notificationPageName === "dashboard"
          ? "calc(100vh - 501px)"
          : "calc(100vh - 410px)",
    },
    [muiTheme.breakpoints.down(2049)]: {
      height:
        props?.notificationPageName === "dashboard"
          ? "calc(100vh - 450px)"
          : "calc(100vh - 333px)",
    },
    [muiTheme.breakpoints.down(1921)]: {
      height:
        props?.notificationPageName === "dashboard"
          ? "calc(100vh - 433px)"
          : props?.notificationPageName === "asset"
          ? "calc(100vh - 342px)"
          : "calc(100vh - 293px)",
    },
    [muiTheme.breakpoints.down(1793)]: {
      height:
        props?.notificationPageName === "dashboard"
          ? "calc(100vh - 410px)"
          : "calc(100vh - 300px)",
    },
    [muiTheme.breakpoints.down(1681)]: {
      height:
        props?.notificationPageName === "dashboard"
          ? "calc(100vh - 425px)"
          : "calc(100vh - 300px)",
    },
    [muiTheme.breakpoints.down(1601)]: {
      height:
        props?.notificationPageName === "dashboard"
          ? "calc(100vh - 408px)"
          : "calc(100vh - 300px)",
    },
    [muiTheme.breakpoints.down(1545)]: {
      height:
        props?.notificationPageName === "dashboard"
          ? "calc(100vh - 408px)"
          : "calc(100vh - 325px)",
    },
    [muiTheme.breakpoints.down(1537)]: {
      height:
        props?.notificationPageName === "dashboard"
          ? "calc(100vh - 370px)"
          : "calc(100vh - 270px)",
    },
    [muiTheme.breakpoints.down(1441)]: {
      height:
        props?.notificationPageName === "dashboard"
          ? "calc(100vh - 340px)"
          : "calc(100vh - 269px)",
    },
    [muiTheme.breakpoints.down(1361)]: {
      height:
        props?.notificationPageName === "dashboard"
          ? "calc(100vh - 354px)"
          : "calc(100vh - 259px)",
    },
    [muiTheme.breakpoints.down(1345)]: {
      height:
        props?.notificationPageName === "dashboard"
          ? "calc(100vh - 330px)"
          : "calc(100vh - 259px)",
    },
    [muiTheme.breakpoints.down(1153)]: {
      height:
        props?.notificationPageName === "dashboard"
          ? "calc(100vh - 306px)"
          : "calc(100vh - 232px)",
    },
  }),
});
export default useStyles;
