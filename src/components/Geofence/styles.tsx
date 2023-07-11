/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "theme/muiTheme";

const useStyles = makeStyles(() => ({
  customCheckbox: (props: any) => ({
    "& .Mui-checked.Mui-disabled": {
      color: "#1A1A1A !important",
    },
    "& .MuiFormControlLabel-label.Mui-disabled": {
      color: "#ffffff !important",
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
    },
  }),
  customTextField: (props: any) => ({
    marginTop: "5px",
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
      color: " #ffffff !important",
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
      background: "#333333",
      color: " #ffffff !important",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#838383 !important",
    },
    "& .MuiOutlinedInput-input": {
      fontSize: "0.7vw",
      color: " #ffffff !important",
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
    background: "#151515",
    alignItems: "center",
    marginLeft: "16px !important",
  }),
  mainContainer: (props: any) => ({
    background: "#333333",
    marginRight: "0.8vw",
    position: "relative",
    padding: "1vw",
    borderRadius: "15px",
    height: "96%",
    overflow: 'auto',
    [muiTheme.breakpoints.down(1921)]: {
      height: "calc(100vh - 394px)",
    },
  }),
  mainGeofenceContainer: (props: any) => ({
    background: "#333333",
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
    marginBottom: '1vw'
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
  }),
  geoFenceTitle: (props: any) => ({
    fontFamily: "HelveticaNeue-Regular",
    fontWeight: 500,
    fontSize: "1vw",
    lineHeight: "3vh",
    color: props?.palette?.geofence?.geofenceTitle,
  }),
  geoFenceTitle1: (props: any) => ({
    fontFamily: "HelveticaNeue-Regular",
    fontWeight: 500,
    fontSize: "1vw",
    color: props?.palette?.geofence?.geofenceTitle,
    marginTop: "2vh",
    marginBottom: "2vh",
  }),
  geofenceSwitch: (props: any) => ({
    "& .Mui-checked": {
      color: "#FFFFFF !important",
      [muiTheme.breakpoints.down(3071)]: {},
    },
    "& .Mui-checked+.MuiSwitch-track": {
      backgroundColor: "#F26522 !important",
      opacity: "1 !important",
    },
    "& .MuiSwitch-track": {
      backgroundColor: "#808080 !important",
    },
  }),
  geofenceType: (props: any) => ({
    color: "#FF7A00 !important",
    fontSize: "0.6vw",
    fontFamily: "HelveticaNeue-Regular",
    fontWeight: 500,
    paddingBottom: "1vh",
  }),
  selectedAssetsContainer: (props: any) => ({
    color: "rgb(255, 255, 255, 0.5) !important",
    fontSize: "0.7vw",
    fontFamily: "HelveticaNeue-Regular",
    marginTop: "20px",
    backgroundColor: "#242424",
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
    border: "1px solid #8F8F8F",
    height: " 10vh",
    overflow: "auto",
    alignItems: "center",
    background: "#535252",
    marginBottom: "10px",
  }),
  assetsListItems: (props: any) => ({
    display: "flex",
    border: "1px solid #8F8F8F",
    height: "4vw",
    background: "#535252",
    padding: "0.2vw",
    marginTop: "1vw",
    flexWrap: "wrap",
    overflow: 'auto',
    "& .MuiChip-root": {
      backgroundColor: "#333333 !important",
      borderRadius: "15px",
      color: "#FFFFFF",
    },
  }),
}));

export default useStyles;
