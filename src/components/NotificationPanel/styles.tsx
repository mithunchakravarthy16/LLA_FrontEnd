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
      margin: "0 20px 20px 20px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      margin: "0 36px 36px 36px",
    },
    [muiTheme.breakpoints.down(1545)]: {
      margin: "0 36px 36px 36px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      margin: "0 36px 36px 36px",
    },
  }),
  notificationTitle: (props: any) => ({
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    fontSize: 22,
    fontFamily: "HelveticaNeue-Regular",
    width: "80%",
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
      width: 35,
    },
    [muiTheme.breakpoints.down(2049)]: {
      width: 30,
    },
    [muiTheme.breakpoints.down(1921)]: {
      width: 24,
    },
    [muiTheme.breakpoints.down(1545)]: {
      width: 20,
    },
    [muiTheme.breakpoints.down(1153)]: {
      width: 16,
    },
  }),
  notificationCloseIcon: (props: any) => ({
    cursor: "pointer",
  }),
  customNotificationTabs: (props: any) => ({
    "& .MuiTabs-flexContainer": {
      display: "flex",
      flexDirection: "row",
      columnGap: "51px",
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
        color: `${props?.palette?.notification?.tabTextColor} !important`,
        flex: 1,
        "& .count": {
          width: 45,
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "28px",
          background: "#5B5B5B",
          borderRadius: "30px",
          color: "#B7B6B6",
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
            width: 90,
          },
          [muiTheme.breakpoints.down(1921)]: {
            fontSize: "14px",
            lineHeight: "21px",
            marginBottom: 16,
            width: 90,
          },
          [muiTheme.breakpoints.down(1545)]: {
            fontSize: "14px",
            lineHeight: "21px",
            marginBottom: 16,
            width: 90,
          },
          [muiTheme.breakpoints.down(1153)]: {
            fontSize: "10px",
            lineHeight: "16px",
            marginBottom: 16,
            width: 90,
          },
        },
        "&.Mui-selected": {
          color: `${props?.palette?.notification?.eventColor} !important`,
          "& .count": {
            background: `${props?.palette?.notification?.eventColor} !important`,
            color: `${props?.palette?.notification?.listTextColor} !important`,
          },
        },
      },
      "&:nth-child(2)": {
        marginRight: "0 !important",
        minWidth: "64px !important",
        color: `${props?.palette?.notification?.tabTextColor} !important`,
        flex: 1,
        "& .count": {
          width: 45,
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "28px",
          background: "#5B5B5B",
          borderRadius: "30px",
          color: "#B7B6B6",
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
            width: 90,
          },
          [muiTheme.breakpoints.down(1921)]: {
            fontSize: "14px",
            lineHeight: "21px",
            marginBottom: 16,
            width: 90,
          },
          [muiTheme.breakpoints.down(1545)]: {
            fontSize: "14px",
            lineHeight: "21px",
            marginBottom: 16,
            width: 90,
          },
          [muiTheme.breakpoints.down(1153)]: {
            fontSize: "10px",
            lineHeight: "16px",
            marginBottom: 16,
            width: 90,
          },
        },
      },
      "&.Mui-selected": {
        color: `${props?.palette?.notification?.incidentColor} !important`,
        "& .count": {
          background: `${props?.palette?.notification?.incidentColor} !important`,
          color: `${props?.palette?.notification?.listTextColor} !important`,
        },
      },
      "&:nth-child(3)": {
        marginRight: "0 !important",
        minWidth: "64px !important",
        color: `${props?.palette?.notification?.tabTextColor} !important`,
        flex: 1,
        "& .count": {
          width: 45,
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "28px",
          background: "#5B5B5B",
          borderRadius: "30px",
          color: "#B7B6B6",
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
            width: 90,
          },
          [muiTheme.breakpoints.down(1921)]: {
            fontSize: "14px",
            lineHeight: "21px",
            marginBottom: 16,
            width: 90,
          },
          [muiTheme.breakpoints.down(1545)]: {
            fontSize: "14px",
            lineHeight: "21px",
            marginBottom: 16,
            width: 90,
          },
          [muiTheme.breakpoints.down(1153)]: {
            fontSize: "10px",
            lineHeight: "16px",
            marginBottom: 16,
            width: 90,
          },
        },
        "&.Mui-selected": {
          color: `${props?.palette?.notification?.oprAlertColor} !important`,
          "& .count": {
            background: `${props?.palette?.notification?.oprAlertColor} !important`,
            color: `${props?.palette?.notification?.listTextColor} !important`,
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
    borderBottom: " 1px solid rgb(255 255 255 / 50%)",
  }),
  searchClass: (props: any) => ({
    border: `1px solid ${props?.palette?.notification?.listItemBorder}`,
    background: props?.palette?.notification?.listItemBg,
    color: props?.palette?.notification?.lightGrey3,
    borderRadius: 6,
    height: "48px",
    [muiTheme.breakpoints.down(3841)]: {
      height: "70px",
    },
    "& .MuiIconButton-root": {
      marginRight: 7,
      [muiTheme.breakpoints.down(3841)]: {
        marginRight: 15,
      },
      "& img": {
        [muiTheme.breakpoints.down(3841)]: {
          width: 30,
        },
      },
    },
    "& .MuiInputBase-input": {
      padding: "14px 6px",
      fontSize: "24px",
      lineHeight: "52px",
      fontFamily: "HelveticaNeue-Regular",
    },
  }),
  notificationListItemSection: (props: any) => ({
    height: "calc(100vh - 365px)",
    overflowY: "scroll",
    [muiTheme.breakpoints.down(3841)]: {
      height: "calc(100vh - 694px)",
    },
    [muiTheme.breakpoints.up(3839)]: {
      height: "calc(100vh - 694px)",
    },
    [muiTheme.breakpoints.down(3073)]: {
      height: "calc(100vh - 694px)",
    },
    [muiTheme.breakpoints.down(2049)]: {
      height: "calc(100vh - 392px)",
    },
    [muiTheme.breakpoints.down(1921)]: {
      height: "calc(100vh - 694px)",
    },
    [muiTheme.breakpoints.down(1545)]: {
      height: "calc(100vh - 694px)",
    },
    [muiTheme.breakpoints.down(1153)]: {
      height: "calc(100vh - 694px)",
    },
  }),
});
export default useStyles;
