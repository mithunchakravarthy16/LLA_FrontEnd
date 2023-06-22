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
      height: 100,
      fontFamily: 'HelveticaNeue-Regular',
      [muiTheme.breakpoints.down(3073)]: {
        fontSize: "16px",
        lineHeight: "24px",
        height: 60,
      },
      [muiTheme.breakpoints.down(1921)]: {
        fontSize: "10px",
        lineHeight: "19px",
        height: 60,
      },
    }),
    footerSectionDasbhoard: (props:any) => ({
      background: "rgba(30, 31, 39, 0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      bottom: 0,
      zIndex: "1",
      width: "100vw",
      color: "#FFFFFF",
      fontSize: "30px",
      lineHeight: "36px",
      height: 100,
      fontFamily: 'HelveticaNeue-Regular',
      [muiTheme.breakpoints.down(3073)]: {
        fontSize: "16px",
        lineHeight: "24px",
        height: 60,
      },
      [muiTheme.breakpoints.down(1921)]: {
        fontSize: "10px",
        lineHeight: "19px",
        height: 60,
      },
    }),
    footerContent: (props: any) => ({
      display: "flex",
      alignItems: "center",
    }),
    footerIconStyle: (props: any) => ({
      padding: "0 16px",
      "& img": {
        width: 250,
        [muiTheme.breakpoints.down(3073)]: {
          width: 140,
        },
        [muiTheme.breakpoints.down(1921)]: {
          width: 120,
        },
      },
    }),
    copyrights: (props: any) => ({
      position: "relative",
      marginLeft: 12,
      "&::before": {
        top: "4px",
        left: "-12px",
        width: "3px",
        height: "28px",
        content: `''`,
        position: "absolute",
        background: "white",
        zIndex: "-1",
        [muiTheme.breakpoints.down(3073)]: {
          width: "2px",
        height: "10px",
        },
        [muiTheme.breakpoints.down(1921)]: {
          width: "2px",
        height: "10px",
        },
      },
      "&::after": {
        top: "4px",
        right: "-10px",
        width: "3px",
        height: "27px",
        content: `''`,
        position: "absolute",
        background: "white",
        zIndex: "-1",
        [muiTheme.breakpoints.down(3073)]: {
          width: "2px",
        height: "10px",
        },
        [muiTheme.breakpoints.down(1921)]: {
          width: "2px",
        height: "10px",
        },
      },
    }),
    allRights: (props:any) => ({
marginLeft: 24
    })
  },
  { index: 1 }
);
export default useStyles;
