/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  root: (props: any) => ({}),
  sideNavigation: (props: any) => ({
    "& .MuiDrawer-paper": {
      background: "#333333",
      borderRight: "0 !important",
      borderRadius: "0px",
      padding: "22px 2px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "calc(100vh - 44px)",
      width: "200px",
      [muiTheme.breakpoints.down(3841)]: {
        height: "calc(100vh - 44px)",
      },
      [muiTheme.breakpoints.down(2049)]: {
        width: "90px",
        height: "calc(100vh - 44px)",
      },
    },
  }),
  sidebarSection: (props: any) => ({
    width: 200,
    [muiTheme.breakpoints.down(2049)]: {
      width: "90px",
    },
  }),
  avatharSection: (props: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#485A6B",
    borderRadius: "50%",
    width: "120px",
    height: "120px",
    color: "white",
    fontSize: 30,
    fontFamily: "HelveticaNeue-Regular",
    margin: 30,
    [muiTheme.breakpoints.down(2049)]: {
      width: "50px",
      height: "50px",
      fontSize: 18,
    },
  }),
  menuLogoSection: () => ({
    margin: 30,
    "& img": {
      width: 140,
      [muiTheme.breakpoints.down(2049)]: {
        width: 68,
      },
    },
  }),
  menuIconSection: () => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: " center",
    height: "100%",
  }),
  menuIconList: (props: any) => ({
    cursor: "pointer",
    position: "relative",
    height: "250px",
    display: " flex",
    alignItems: "baseline",
    justifyContent: "center",
    [muiTheme.breakpoints.down(2049)]: {
      width: "35px",
      height: " 85.7px",
    },
    "& .MuiSvgIcon-root": {
      color: props?.palette?.sidebar?.menuActiveColor,
    },
    "& img": {
      width: 60,
      [muiTheme.breakpoints.down(2049)]: {
        width: "35px",
      },
    },
  }),
  menuIconListActive: (props: any) => ({
    cursor: "pointer",
    position: "relative",
    height: "250px",
    display: " flex",
    alignItems: "baseline",
    justifyContent: "center",
    [muiTheme.breakpoints.down(2049)]: {
      width: "35px",
      height: " 85.7px",
    },
    "& img": {
      width: 120,
      [muiTheme.breakpoints.down(2049)]: {
        width: "56px",
      },
    },
    "& .MuiSvgIcon-root": {
      border: `1px solid ${props?.palette?.sidebar?.menuColor}`,
      padding: "10px",
      borderRadius: " 10px",
      color: props?.palette?.sidebar?.menuColor,
    },
    "&::after": {
      content: `''`,
      position: "absolute",
      width: "6px",
      height: "86px",
      right: "-42px",
      top: "16px",
      backgroundColor: props?.palette?.sidebar?.menuColor,
      borderTopLeftRadius: "6px",
      borderBottomLeftRadius: "6px",
      zIndex: "-1",
      [muiTheme.breakpoints.down(2049)]: {
        content: `''`,
        position: "absolute",
        width: "3px",
        height: "40px",
        right: "-29px",
        top: "23px",
        backgroundColor: props?.palette?.sidebar?.menuColor,
        borderTopLeftRadius: "6px",
        borderBottomLeftRadius: "6px",
        zIndex: "-1",
      },
    },
  }),
  customTooltip: () => ({
    background: "black !important",
  }),
});
export default useStyles;
