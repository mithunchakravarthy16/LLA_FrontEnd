/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const responsiveWidth = (width: number) => {
  return (width * window.innerWidth) / 3840;
};

const useStyles = makeStyles({
  mapFilterStyle: (props: any) => ({
    position: "absolute",
    color: "white",
    right: "1vh",
    top: "1vh",
    zIndex: 1,
    background: "rgb(68, 68, 68, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "75px",
    cursor: "pointer",
    width: "35%",
    height: "4vh",
    padding: "1vh",
  }),
  customNotificationTabs: (props: any) => ({
    "& .MuiTabs-scroller": {
      display: "flex",
    },
    "& .MuiTabs-flexContainer": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "82%",
      margin: "0.5vh",
    },

    "& .MuiButtonBase-root": {
      textTransform: "unset",
      marginRight: "0 !important",
    },

    "& .MuiTab-root": {
      fontWeight: "500 !important",
      //   lineHeight: "30px !important",
      color: `#FFF !important`,
      background: "#808080",
      borderRadius: "17px",
      minWidth: "3vw !important",
      minHeight: "4vh !important",
      width: "3vw !important",
      height: "4vh !important",
      padding: "0 !important",
      "&.Mui-selected": {
        color: `#FFF !important`,
        background: "#F26522",
        "& .count": {
          background: `${props?.palette?.notification?.eventColor} !important`,
          color: `${props?.palette?.notification?.listTextColor} !important`,
        },
      },

    },
    "& .MuiTabs-root .MuiTabs-indicator": {
      display: "none",
    },
  }),

  lotSelectionIconStyle: (props: any) => ({
    position: "absolute",
    color: "white",
    zIndex: 1,
    // background: "#F26522",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // width: "6vh",
    height: "13%",
    fontSize: "0.8vw",
    right: "1vh",
    // top: "50%",
    // transform: "translateY(-50%)",
    borderRadius: "50%",
    cursor: "pointer",
    top: "1vh",
  }),

  lotSelectionIconStyleClose: (props: any) => ({
    position: "absolute",
    color: "white",
    zIndex: 1,
    // background: "#F26522",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // width: "3.3vw",
    height: "100%",
    fontSize: "0.9vw",
    right: "0vh",
    // top: "50%",
    // transform: "translateY(-50%)",
    borderRadius: "50%",
    cursor: "pointer",
    top: "0vh",
  }),
  lotImageStyle: (props: any) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: "-1.75%",
  }),
});
export default useStyles;
