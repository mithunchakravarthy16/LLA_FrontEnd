/** @format */

import { makeStyles } from "@mui/styles";

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
      background: "rgba(16, 38, 62, 0.56)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      bottom: 0,
      zIndex: "1111111",
      width: "100vw",
      height: "50px",
      color: "#FFFFFF",
      fontSize: 14,
    }),
    footerContent: (props: any) => ({
      display: "flex",
      alignItems: "center",
    }),
    footerIconStyle: (props: any) => ({
      padding: "0 16px",
      "& img": {
        width: 140,
      },
    }),
    copyrights: (props: any) => ({
      position: "relative",
      marginLeft: 12,
      "&::before": {
        top: "4px",
        left: "-12px",
        width: "2px",
        height: "10px",
        content: `''`,
        position: "absolute",
        background: "white",
        zIndex: "-1",
      },
      "&::after": {
        top: "4px",
        right: "-10px",
        width: "2px",
        height: "10px",
        content: `''`,
        position: "absolute",
        background: "white",
        zIndex: "-1",
      },
    }),
    allRights: (props:any) => ({
marginLeft: 24
    })
  },
  { index: 1 }
);
export default useStyles;
