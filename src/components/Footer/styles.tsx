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
      height: 250,
      fontFamily: "HelveticaNeue-Regular",
      [muiTheme.breakpoints.up(3839)]: {
        fontSize: "24px",
        lineHeight: "52px",
        height: 358,
      },
      [muiTheme.breakpoints.down(3073)]: {
        fontSize: "13px",
        lineHeight: "30px",
        height: 258,
      },
      [muiTheme.breakpoints.down(2561)]: {
        fontSize: "11px",
        lineHeight: "30px",
        height: 168,
      },
      [muiTheme.breakpoints.down(2049)]: {
        fontSize: "10px",
        lineHeight: "28px",
        height: 158,
      },
      [muiTheme.breakpoints.down(1921)]: {
        fontSize: "9px",
        lineHeight: "28px",
        height: 158,
      },
      [muiTheme.breakpoints.down(1367)]: {
        fontSize: "9px",
        lineHeight: "20px",
        height: 104,
      },
      [muiTheme.breakpoints.down(1361)]: {
        fontSize: "9px",
        lineHeight: "20px",
        height: 108,
      },
      [muiTheme.breakpoints.down(1345)]: {
        fontSize: "9px",
        lineHeight: "28px",
        height: 128,
      },
      [muiTheme.breakpoints.down(1281)]: {
        fontSize: "5px",
        lineHeight: "11px",
        height: 60,
      },
      [muiTheme.breakpoints.down(1153)]: {
        fontSize: "7px",
        lineHeight: "19px",
        height: 90,
      },
      [muiTheme.breakpoints.down(1025)]: {
        fontSize: "4px",
        lineHeight: "12px",
        height: 70,
      },
    }),
    footerSectionDasbhoard: (props: any) => ({
      background: "rgba(30, 31, 39, 0.9)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      bottom: 0,
      zIndex: "1",
      width: "100vw",
      color: "#FFFFFF",
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
          width: 160,
        },
        [muiTheme.breakpoints.down(1281)]: {
          width: 60,
        },
        [muiTheme.breakpoints.down(1153)]: {
          width: 140,
        },
        [muiTheme.breakpoints.down(1025)]: {
          width: 80,
        },
      },
    }),
    copyrights: (props: any) => ({
      position: "relative",

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
