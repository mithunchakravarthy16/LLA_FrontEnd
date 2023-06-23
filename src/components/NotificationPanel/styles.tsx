/** @format */

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  notificationRootContainer: (props: any) => ({
    margin: "25px",
  }),
  notificationTitle: (props: any) => ({
    textTransform: "uppercase",
    letterSpacing: "0.10em",
    fontWeight: 700,
    fontSize: 22,
    width: "77%",
  }),
  notificationHeader: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "50px",
    width: "100%",
  }),
  notificationIconSection: (props: any) => ({}),
  notificationSearchIcon: (props: any) => ({
    marginRight: "20px",
    cursor: "pointer",
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
      fontFamily: 'HelveticaNeue-Regular',
      marginBottom: 10,
      "&:first-child": {
        marginRight: "0 !important",
        minWidth: "64px !important",
        color: `${props?.palette?.notification?.tabTextColor} !important`,
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
    "& .MuiIconButton-root": {
      marginRight: 7,
    },
    "& .MuiInputBase-input": {
      padding: "14px 6px",
    },
  }),
  notificationListItemSection: (props: any) => ({
    height: "calc(100vh - 365px)",
    overflowY: "scroll",
  }),
});
export default useStyles;
