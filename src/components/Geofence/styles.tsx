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
      fontSize: "0.8vw",
    },
  }),
  customTextField: (props: any) => ({
    marginTop: "5px",
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
      background: "#333333",
      color: " #ffffff !important",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#838383 !important",
    },
    "& .MuiOutlinedInput-input": {
      width: "278px !important",
      height: "30px !important",
      padding: "10px 10px 10px 20px!important",
      fontSize: "1vw",
      color: " #ffffff !important",
      [muiTheme.breakpoints.up(3839)]: {
        width: "578px !important",
        height: "80px !important",
        padding: "20px 20px 20px 30px!important",
      },
      // [muiTheme.breakpoints.up(1919)]: {
      //   height: "30px !important",
      // },
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
  customTextFieldLatitude: (props: any) => ({
    marginTop: "5px",
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
      background: "#333333",
      color: " #ffffff !important",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#838383 !important",
    },
    "& .MuiOutlinedInput-input": {
      width: "120px !important",
      height: "30px !important",
      padding: "10px 10px 10px 20px!important",
      fontSize: "1vw",
      color: " #ffffff !important",
      [muiTheme.breakpoints.up(3839)]: {
        width: "250px !important",
        height: "80px !important",
        padding: "20px 20px 20px 30px!important",
      },
      // [muiTheme.breakpoints.up(1919)]: {
      //   height: "30px !important",
      // },
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
    marginRight: "20px !important",
    height: "calc(100vh - 432px)",
    position: "relative",
    [muiTheme.breakpoints.up(3839)]: {
      height: "calc(100vh - 750px)",
      padding: "25px 30px",
    },
    [muiTheme.breakpoints.down(3071)]: {
      height: "calc(100vh - 320px)",
      padding: "10px",
    },
    [muiTheme.breakpoints.between(1920, 1080)]: {
      height: "calc(100vh - 320px)",
      padding: "10px",
    },
    [muiTheme.breakpoints.down(1437)]: {
      height: "calc(100vh - 357px)",
    },
  }),
  geofenceContainer: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 0",
    [muiTheme.breakpoints.down(3071)]: {
      padding: "15px 0 0 0",
    },
  }),
  geofenceTypes: (props: any) => ({
    padding: "20px 15px 0 15px",
    [muiTheme.breakpoints.up(3839)]: {
      padding: "30px 15px 0 0",
    },
    [muiTheme.breakpoints.down(3071)]: {
      padding: "10px 0 0 0",
    },
  }),
  geofenceMainTypes: (props: any) => ({
    display: "flex",
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
    paddingTop: "30px",
    [muiTheme.breakpoints.up(3839)]: {
      paddingTop: "30px",
    },
    [muiTheme.breakpoints.down(3071)]: {
      paddingTop: "10px",
    },
  }),
  circleContainer: (props: any) => ({
    padding: "12px",
    display: "flex",
    justifyContent: "space-between",
    [muiTheme.breakpoints.up(3839)]: {
      padding: "30px 0 30px 0 !important",
    },
    [muiTheme.breakpoints.down(3071)]: {
      padding: "12px 0 0 0",
    },
  }),
  circularRadius: (props: any) => ({
    padding: "12px",
    [muiTheme.breakpoints.down(3071)]: {
      padding: "12px 0 0 0",
    },
  }),
  notifyContainer: (props: any) => ({
    paddingTop: "30px",
    [muiTheme.breakpoints.down(3071)]: {
      paddingTop: "10px",
    },
  }),
  polygonTextContainer: (props: any) => ({
    display: "flex",
    alignItems: "center",
  }),
  polygonText: (props: any) => ({
    paddingLeft: "10px",
    fontSize: "0.65vw",
    fontFamily: "HelveticaNeue-Regular",
    fontWeight: 400,
    fontStyle: "italic",
    paddingTop: "30px",
    [muiTheme.breakpoints.down(3071)]: {
      paddingTop: "10px",
    },
  }),
  geoFenceTitle: (props: any) => ({
    fontFamily: "HelveticaNeue-Regular",
    fontWeight: 500,
    fontSize: "1.2vw",
    lineHeight: " 24px",
    color: props?.palette?.geofence?.geofenceTitle,
    [muiTheme.breakpoints.up(3839)]: {
      lineHeight: " 48px",
    },
  }),
  geoFenceTitle1: (props: any) => ({
    fontFamily: "HelveticaNeue-Regular",
    fontWeight: 500,
    fontSize: "1.2vw",
    lineHeight: " 24px",
    paddingTop: "30px",
    color: props?.palette?.geofence?.geofenceTitle,
    [muiTheme.breakpoints.up(3839)]: {
      lineHeight: " 48px",
    },
    [muiTheme.breakpoints.down(3071)]: {
      paddingTop: "10px",
    },
  }),
  geofenceSwitch: (props: any) => ({
    "& .Mui-checked": {
      color: "#FFFFFF !important",
      [muiTheme.breakpoints.up(3839)]: {},
    },
    "& .Mui-checked+.MuiSwitch-track": {
      backgroundColor: "#F26522 !important",
    },
    "& .MuiSwitch-track": {
      backgroundColor: "#808080 !important",
    },
  }),
  geofenceType: (props: any) => ({
    color: "#FF7A00 !important",
    fontSize: "1vw",
    fontFamily: "HelveticaNeue-Regular",
    fontWeight: 500,
    paddingBottom: "20px",
    [muiTheme.breakpoints.down(3071)]: {
      paddingBottom: "10px",
    },
  }),
}));

export default useStyles;
