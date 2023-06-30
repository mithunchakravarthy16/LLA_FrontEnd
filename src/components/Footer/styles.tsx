/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles(
  {
    loaderStyle: (props: any) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100%",
    }),
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
      fontSize: "30px",
      lineHeight: "36px",
      height: 250,
      fontFamily: "HelveticaNeue-Regular",
      [muiTheme.breakpoints.up(3073)]: {
        fontSize: "28px",
        lineHeight: "63px",
        height: 384,
      },
      [muiTheme.breakpoints.down(1921)]: {
        fontSize: "10px",
        lineHeight: "29px",
        height: 160,
      },
    }),
    footerSectionDasbhoard: (props: any) => ({
      background: "rgba(30, 31, 39, 1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      bottom: 0,
      zIndex: "1",
      width: "100vw",
      color: "#FFFFFF",
      fontSize: "22px",
      lineHeight: "36px",
      height: 124,
      fontFamily: "HelveticaNeue-Regular",
      "& img": {
        display: "none",
      },
      [muiTheme.breakpoints.up(3839)]: {
        fontSize: "22px",
        lineHeight: "36px",
        height: 124,
      },
      [muiTheme.breakpoints.down(3073)]: {
        fontSize: "16px",
        lineHeight: "27px",
        height: 96,
      },
      [muiTheme.breakpoints.down(2049)]: {
        fontSize: "11px",
        lineHeight: "17px",
        height: 60,
      },
      [muiTheme.breakpoints.down(1921)]: {
        fontSize: "11px",
        lineHeight: "17px",
        height: 60,
      },
      [muiTheme.breakpoints.down(1153)]: {
        fontSize: "10px",
        lineHeight: "18px",
        height: 48,
      },
    }),
    footerContent: (props: any) => ({
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    }),
    footerIconStyle: (props: any) => ({
      "& img": {
        width: 250,
        [muiTheme.breakpoints.up(3839)]: {
          width: 550,
        },
        [muiTheme.breakpoints.down(3073)]: {
          width: 250,
        },
        [muiTheme.breakpoints.down(2049)]: {
          width: 200,
        },
        [muiTheme.breakpoints.down(1921)]: {
          width: 180,
        },
        [muiTheme.breakpoints.down(1153)]: {
          width: 150,
        },
      },
    }),
    copyrights: (props: any) => ({
      position: "relative",
      marginLeft: 12,
      // "&::before": {
      //   top: "4px",
      //   left: "-12px",
      //   width: "3px",
      //   height: "28px",
      //   content: `''`,
      //   position: "absolute",
      //   background: "white",
      //   zIndex: "-1",
      //   [muiTheme.breakpoints.down(3073)]: {
      //     width: "2px",
      //     height: "10px",
      //   },
      //   [muiTheme.breakpoints.down(1921)]: {
      //     width: "2px",
      //     height: "10px",
      //   },
      // },
      // "&::after": {
      //   top: "4px",
      //   right: "-10px",
      //   width: "3px",
      //   height: "27px",
      //   content: `''`,
      //   position: "absolute",
      //   background: "white",
      //   zIndex: "-1",
      //   [muiTheme.breakpoints.down(3073)]: {
      //     width: "2px",
      //     height: "10px",
      //   },
      //   [muiTheme.breakpoints.down(1921)]: {
      //     width: "2px",
      //     height: "10px",
      //   },
      // },
    }),
    allRights: (props: any) => ({
      marginLeft: 24,
    }),
    poweredByImage: (props: any) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "100%",
      [muiTheme.breakpoints.up(3839)]: {
        maxWidth: "100%",
      },
      [muiTheme.breakpoints.down(3073)]: {
        maxWidth: "70%",
      },
      [muiTheme.breakpoints.down(2049)]: {
        maxWidth: "50%",
      },
      [muiTheme.breakpoints.down(1921)]: {
        maxWidth: "50%",
      },
      [muiTheme.breakpoints.down(1153)]: {
        maxWidth: "40%",
      },
    }),
  },
  { index: 1 }
);
export default useStyles;
