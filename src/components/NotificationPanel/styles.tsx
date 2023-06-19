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
        color: `#5B5B5B !important`,
      },
      "&:first-child.Mui-selected": {
        color: `#6CA145 !important`,
      },
      "&:nth-child(2)": {
        marginRight: "0 !important",
        minWidth: "64px !important",
        color: `#5B5B5B !important`,
      },
      "&:nth-child(2).Mui-selected": {
        color: ` #E63433 !important`,
      },
      "&:nth-child(3)": {
        marginRight: "0 !important",
        minWidth: "64px !important",
        color: `#5B5B5B !important`,
      },
      "&:nth-child(3).Mui-selected": {
        color: `#EEAB26 !important`,
      },
    },
    "& .MuiTabs-root .MuiTabs-indicator": {
      background: "#5B5B5B",
      height: "5px",
      "&:nth-child(2).Mui-selected": {
        background: ` #E63433 !important`,
      },
    },
  }),
  tabSection: (props: any) => ({
    margin: "15px 0px",
  }),
});
export default useStyles;
