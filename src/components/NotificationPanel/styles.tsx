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
  }),
  notificationHeader: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
      columnGap: "41px",
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
      lineHeight: "24px !important",
      fontFamily: "Poppins",
      marginBottom: 10,
      "&:first-child": {
        marginRight: "0 !important",
        minWidth: "64px !important",
        color: `${props?.palette?.notification?.tabTextColor} !important`,
      },
      "&:first-child.Mui-selected": {
        color: `${props?.palette?.notification?.eventColor} !important`,
      },
      "&:nth-child(2)": {
        marginRight: "0 !important",
        minWidth: "64px !important",
        color: `${props?.palette?.notification?.tabTextColor} !important`,
      },
      "&:nth-child(2).Mui-selected": {
        color: `${props?.palette?.notification?.incidentColor} !important`,
      },
      "&:nth-child(3)": {
        marginRight: "0 !important",
        minWidth: "64px !important",
        color: `${props?.palette?.notification?.tabTextColor} !important`,
      },
      "&:nth-child(3).Mui-selected": {
        color: `${props?.palette?.notification?.oprAlertColor} !important`,
      },
    },
    "& .MuiTabs-root .MuiTabs-indicator": {
      background: props?.tabIndex === 0 ? `${props?.palette?.notification?.eventColor} !important` : props?.tabIndex === 1 ? `${props?.palette?.notification?.incidentColor} !important` : `${props?.palette?.notification?.oprAlertColor} !important`,
      height: "5px",
    },
  }),
  tabSection: (props: any) => ({
    margin: "15px 0px",
  }),
});
export default useStyles;
