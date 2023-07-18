/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "theme/muiTheme";

const useStyles = makeStyles(() => ({
  customCheckbox: (props: any) => ({
    "& .Mui-checked.Mui-disabled": {
      color: "#1A1A1A !important",
    },
    "& .MuiFormControlLabel-label.Mui-disabled": {
      color: props?.palette?.assetTrackingPage?.topPanelSubTextColor,
    },
    "& .Mui-disabled": {
      "& .MuiSvgIcon-root": {
        color: "#555555",
        borderRadius: "5px",
        [muiTheme.breakpoints.up(3839)]: {
          width: "50px !important",
          height: "50px !important",
        },
      },
    },
    "& .MuiSvgIcon-root": {
      [muiTheme.breakpoints.up(3839)]: {
        width: "50px !important",
        height: "50px !important",
      },
    },
    "& .MuiCheckbox-colorPrimary": {
      color: "#F26522 !important",
    },
    "& .MuiFormControlLabel-label": {
      fontFamily: "HelveticaNeue-Regular",
      fontWeight: 400,
      fontSize: "0.6vw",
      color: props?.palette?.assetTrackingPage?.topPanelTextColor,
    },
  }),
  customTextField: (props: any) => ({
    marginTop: "5px",
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
      background: "transparent !important",
      color: "#ffffff !important",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#838383 !important",
    },
    "& .MuiOutlinedInput-input": {
      fontSize: "0.7vw",
      color: `${props?.palette?.assetTrackingPage?.topPanelSubTextColor} !important`,
      padding: "0.5vw",
    },
    "& .Mui-disabled": {
      color: "#9C9C9C !important",
      WebkitTextFillColor: "#9C9C9C !important",
    },

    "& .MuiInputBase-root": {
      background: "transparent !important",
      "& input[type=number]": {
        "-moz-appearance": "textfield",
      },
      "& input[type=number]::-webkit-outer-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
      "& input[type=number]::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
    },
  }),
  customTextFieldLatitude: (props: any) => ({
    marginBottom: "1vh",
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
      background: "transparent !important",
      color: " #ffffff !important",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#838383 !important",
    },
    "& .MuiOutlinedInput-input": {
      fontSize: "0.7vw",
      color: `${props?.palette?.assetTrackingPage?.topPanelSubTextColor} !important`,
      padding: "0.5vw",
    },
    "& .Mui-disabled": {
      color: "#9C9C9C !important",
      WebkitTextFillColor: "#9C9C9C !important",
    },
    "& .MuiInputBase-root": {
      "& input[type=number]": {
        "-moz-appearance": "textfield",
      },
      "& input[type=number]::-webkit-outer-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
      "& input[type=number]::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
    },
  }),
  rootContainer: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: props?.palette?.assetTrackingPage?.geofenceTabBg,
    alignItems: "center",
    marginLeft: "16px !important",
  }),
  mainContainer: (props: any) => ({
    background: props?.palette?.assetTrackingPage?.geofenceTabBg,
    marginRight: "0.8vw",
    position: "relative",
    padding: "1vw",
    borderRadius: "15px",
    height: "96%",
    overflow: "auto",
    [muiTheme.breakpoints.down(1921)]: {
      height: "calc(100vh - 394px)",
    },
  }),
  mainGeofenceContainer: (props: any) => ({
    background: props?.palette?.assetTrackingPage?.geofenceTabBg,
    marginRight: "0.8vw",
    position: "relative",
    padding: "1vw",
    borderRadius: "15px",
    height: "calc(100vh - 348px)",
    overflow: "auto",
    [muiTheme.breakpoints.up(3839)]: {
      height: "calc(100vh - 770px)",
    },
    [muiTheme.breakpoints.down(3073)]: {
      height: "calc(100vh - 760px)",
    },
    [muiTheme.breakpoints.down(2049)]: {
      height: "calc(100vh - 460px)",
    },
    [muiTheme.breakpoints.down(1921)]: {
      height: "calc(100vh - 394px)",
    },
    [muiTheme.breakpoints.down(1793)]: {
      height: "calc(100vh - 401px)",
    },
  }),
  geofenceContainer: (props: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "0.5vh",
  }),
  geofenceTypes: (props: any) => ({
    marginTop: "1vw",
  }),
  geofenceMainTypes: (props: any) => ({
    display: "flex",
    marginBottom: "0.5vh",
  }),
  geofenceCircleType: (props: any) => ({
    paddingTop: "10px",
    paddingRight: "50px",
    cursor: "pointer",
  }),
  circularText: (props: any) => ({
    fontSize: "0.65vw",
    fontFamily: "HelveticaNeue-Regular",
    fontWeight: 500,
    paddingTop: "10px",
    color: props?.palette?.assetTrackingPage?.topPanelTextColor,
  }),
  polygonContainer: (props: any) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  polygonImage: (props: any) => ({
    paddingTop: "10px",
    cursor: "pointer",
  }),
  geofenceTextContainer: (props: any) => ({
    marginTop: "2vh",
  }),
  circleContainer: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1vw",
  }),
  circularRadius: (props: any) => ({}),
  notifyContainer: (props: any) => ({
    marginTop: "3vh",
  }),
  polygonTextContainer: (props: any) => ({
    display: "flex",
    alignItems: "center",
    marginTop: "2vh",
  }),
  polygonText: (props: any) => ({
    paddingLeft: "10px",
    fontSize: "0.5vw",
    fontFamily: "HelveticaNeue-italicMedium",
    fontWeight: 300,
    color: props?.palette?.assetTrackingPage?.topPanelTextColor,
  }),
  geoFenceTitle: (props: any) => ({
    fontFamily: "HelveticaNeue-Regular",
    fontWeight: 500,
    fontSize: "1vw",
    lineHeight: "3vh",
    color: props?.palette?.assetTrackingPage?.topPanelTextColor,
  }),
  geoFenceTitle1: (props: any) => ({
    fontFamily: "HelveticaNeue-Regular",
    fontWeight: 500,
    fontSize: "1vw",
    color: props?.palette?.assetTrackingPage?.topPanelTextColor,
    marginTop: "2vh",
    marginBottom: "2vh",
  }),
  geofenceSwitch: (props: any) => ({
    // "& .Mui-checked": {
    //   color: "#FFFFFF !important",
    //   [muiTheme.breakpoints.down(3071)]: {},
    // },
    // "& .Mui-checked+.MuiSwitch-track": {
    //   backgroundColor: "#F26522 !important",
    //   opacity: "1 !important",
    // },
    // "& .MuiSwitch-track": {
    //   backgroundColor: "#808080 !important",
    // },
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#F26522 !important",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: "#FFFFFF !important",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.7,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#39393D",
      opacity: 1,
    },
  }),
  geofenceType: (props: any) => ({
    color: props?.palette?.assetTrackingPage?.geofenceTypeTextColor,
    fontSize: "0.6vw",
    fontFamily: "HelveticaNeue-Regular",
    fontWeight: 500,
    paddingBottom: "1vh",
  }),
  selectedAssetsContainer: (props: any) => ({
    color: props?.palette?.assetTrackingPage?.topPanelSubTextColor,
    fontSize: "0.7vw",
    fontFamily: "HelveticaNeue-Regular",
    marginTop: "20px",
    backgroundColor: props?.palette?.assetTrackingPage?.geofenceAssetsBg,
    display: "flex",
    justifyContent: "center",
    padding: "50px",
    [muiTheme.breakpoints.up(3839)]: {
      padding: "80px",
    },
    [muiTheme.breakpoints.down(3071)]: {
      marginTop: "10px",
    },
  }),
  searchContainer: (props: any) => ({
    padding: "0px",
  }),
  assetsList: (props: any) => ({
    // display: "flex",
    // justifyContent: "center",
    // border: "1px solid #8F8F8F",
    height: " 10vh",
    overflow: "auto",
    alignItems: "center",
    backgroundColor: props?.palette?.assetTrackingPage?.geofenceAssetsBg,
    marginBottom: "10px",
    color: props?.palette?.assetTrackingPage?.topPanelSubTextColor,
    fontSize: "0.7vw",
    "& .MuiTypography-root": {
      fontSize: "0.7vw",
    },
  }),
  assetsListItems: (props: any) => ({
    display: "flex",
    // border: "1px solid #8F8F8F",
    height: "4vw",
    backgroundColor: props?.palette?.assetTrackingPage?.geofenceAssetsBg,
    padding: "0.2vw",
    marginTop: "1vw",
    flexWrap: "wrap",
    overflow: "auto",
    "& .MuiChip-root": {
      backgroundColor: `${props?.palette?.assetTrackingPage?.geofenceRestBtnColor} !important`,
      borderRadius: "2vw",
      color: "#FFFFFF",
      fontSize: "0.7vw",
      padding: "0.7vw 0.1vw",
      "& .MuiChip-deleteIcon": {
        fontSize: "0.9vw",
        color: props?.palette?.assetTrackingPage?.chipBtnBg,
      },
      "& .MuiChip-deleteIcon:hover": {
        fontSize: "0.9vw",
        color: props?.palette?.assetTrackingPage?.chipBtnBg,
      },
    },
  }),
  assetsLists: (props: any) => ({
    overflow: "auto",
    alignItems: "center",
    backgroundColor: props?.palette?.assetTrackingPage?.geofenceAssetsBg,
    marginBottom: "10px",
    color: props?.palette?.assetTrackingPage?.topPanelSubTextColor,
    fontSize: "0.7vw",
    "& .MuiTypography-root": {
      fontSize: "0.7vw",
    },
  }),
}));

export default useStyles;
