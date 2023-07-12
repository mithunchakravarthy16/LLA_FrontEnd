/** @format */

import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import muiTheme from "theme/muiTheme";
import PackageActiveIcon from "../../assets/packageCompletedIcon.svg";

const useStyles = makeStyles(
  () => ({
    root: (props: any) => ({
      flexGrow: 1,
    }),

    stepperSx: (props: any) => ({
      "& .MuiStep-root": {
        padding: "0 3%",
        fontFamily: "HelveticaNeue-Regular !important",
      },

      "& .MuiStepConnector-root": {
        left: "calc(-50% + 14px)",
        right: "calc(50% + 14px)",
        top: "1.7vh",
      },

      "& .MuiStepConnector-line": {
        marginTop: "8.5vh", // To positio5n the line lower
        border: `1px solid #F26522`,
        // borderBottom: "3px dashed #456EFF",
        // borderTop: "0px",
      },
      "& .MuiStepLabel-alternativeLabel": {
        color: `${props?.palette?.assetTrackingPage?.topPanelSubTextColor} !important`,
        paddingBottom: "4px",
        // marginTop: "1vh",
        fontSize: "0.6vw",
        fontFamily: "HelveticaNeue-Regular !important",

        // [muiTheme.breakpoints.down(1437)]: {
        //   fontSize: " 10px !important",
        //   // fontFamily: `'Nunito Sans', sans-serif !important`,
        // },
      },
    }),

    // Solution 2
    typographySx: (props: any) => ({
      align: "center",
      padding: "3px 0px",
      fontSize: "0.7vw !important",
      fontFamily: "HelveticaNeue-Regular !important",
      height: "9vh",
      // fontFamily: `'Nunito Sans', sans-serif !important`,

      minHeight: "6vh !important",
      // [muiTheme.breakpoints.down(1437)]: {
      //   fontSize: " 10px !important",
      //   minHeight: "30px !important",
      // },
    }),
  }),
  { index: 1 }
);

export default useStyles;

export const ColorlibStepIconRoot = styled("div")<
  { paletteColor: string; paletteColor1: string; greenShade: string } | any
>(({ theme, ownerState, purpleShades, colorWhite, greenShade }) => ({
  zIndex: 1,
  color: colorWhite,
  minWidth: "1.5vw",
  minHeight: "2.5vh",
  // width: 50,
  // height: 50,
  display: "flex",
  borderRadius: "50%",
  boxShadow: "0px 0px 0px 8px rgba(0,79,159,0.5)",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: purpleShades,
  ...(ownerState.active && {
    // backgroundColor: greenShade,
    minWidth: "1.5vw",
    minHeight: "5vh",
    // width: 50,
    // height: 50,
    backgroundImage: `url("${PackageActiveIcon}")`,
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "none",
    marginTop: "-3vh",
    backgroundPosition: "bottom",
    "& .MuiStepLabel-alternativeLabel": {
      color: `#FFF !important`,
      paddingBottom: "4px",
      marginTop: "1vh",
      fontSize: "0.6vw",
      fontFamily: "HelveticaNeue-Regular !important",

      // [muiTheme.breakpoints.down(1437)]: {
      //   fontSize: " 10px !important",
      //   // fontFamily: `'Nunito Sans', sans-serif !important`,
      // },
    },
  }),
  ...(ownerState.completed && {
    minWidth: "1vw",
    minHeight: "2vh",
    // width: 30,
    // height: 30,
    backgroundColor: purpleShades,
    "& .MuiStepLabel-alternativeLabel": {
      color: `#FFF !important`,
      paddingBottom: "4px",

      // [muiTheme.breakpoints.down(1437)]: {
      //   fontSize: " 10px !important",
      //   // fontFamily: `'Nunito Sans', sans-serif !important`,
      // },
    },
  }),
  // [muiTheme.breakpoints.down(1437)]: {
  //   width: 15,
  //   height: 15,
  //   border: `2px solid ${colorWhite}`,
  // },
}));
