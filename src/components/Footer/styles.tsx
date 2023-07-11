/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles(
  {
    footerSection: (props: any) => ({
      background: "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      bottom: 0,
      zIndex: "1111111",
      width: "100vw",
      color: "#FFFFFF",
      fontFamily: "HelveticaNeue-Regular",
      height: "24vh",
    }),
    footerSectionDasbhoard: (props: any) => ({
      background: props?.palette?.footer?.footerBg, //"rgba(30, 31, 39, 1)", //#1E1F27
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      bottom: 0,
      zIndex: "1",
      width: "100vw",
      color: props?.palette?.footer?.footerTextColor, //"rgba(186, 186, 186, 1)",
      fontSize: "20px",
      lineHeight: "36px",
      height: 82,
      fontFamily: "HelveticaNeue-Regular",
      "& img": {
        display: "none",
      },
      [muiTheme.breakpoints.up(3839)]: {
        fontSize: "20px",
        lineHeight: "36px",
        height: 82,
      },
      [muiTheme.breakpoints.down(3073)]: {
        fontSize: "16px",
        lineHeight: "27px",
        height: 82,
      },
      [muiTheme.breakpoints.down(2561)]: {
        fontSize: "12px",
        lineHeight: "17px",
        height: 50,
      },
      [muiTheme.breakpoints.down(2049)]: {
        fontSize: "11px",
        lineHeight: "17px",
        height: 40,
      },
      [muiTheme.breakpoints.down(1921)]: {
        fontSize: "11px",
        lineHeight: "17px",
        height: 40,
      },
      [muiTheme.breakpoints.down(1153)]: {
        fontSize: "8px",
        lineHeight: "18px",
        height: 28,
      },
    }),
    footerContent: (props: any) => ({
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    }),
    footerIconStyle: (props: any) => ({
      "& img": {
        width: "30vh",
      },
    }),
    footerCopyrightsImg: (props: any) => ({
      width: "20vh",
      marginTop: "3vh",
    }),
  },
  { index: 1 }
);
export default useStyles;
