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
      [muiTheme.breakpoints.up(3839)]: {
        height: "calc(100vh - 44px)",
        width: "200px",
      },
      [muiTheme.breakpoints.down(3073)]: {
        height: "calc(100vh - 44px)",
        width: "180px",
      },
      [muiTheme.breakpoints.down(2049)]: {
        height: "calc(100vh - 44px)",
        width: "130px",
      },
      [muiTheme.breakpoints.down(1921)]: {
        height: "calc(100vh - 44px)",
        width: "100px",
      },
      [muiTheme.breakpoints.down(1153)]: {
        height: "calc(100vh - 44px)",
        width: "80px",
      },
    },
  }),
  sidebarSection: (props: any) => ({
    width: 200,
    [muiTheme.breakpoints.up(3839)]: {
      width: "200px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      width: "180px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      width: "130px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      width: "100px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      width: "80px",
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
    [muiTheme.breakpoints.up(3839)]: {
      width: "120px",
      height: "120px",
      margin: 30,
      fontSize: 30,
    },
    [muiTheme.breakpoints.down(3073)]: {
      width: "90px",
      height: "90px",
      margin: 20,
      fontSize: 20,
    },
    [muiTheme.breakpoints.down(2049)]: {
      width: "60px",
      height: "60px",
      margin: 16,
      fontSize: 16,
    },
    [muiTheme.breakpoints.down(1921)]: {
      width: "50px",
      height: "50px",
      margin: 12,
      fontSize: 12,
    },
    [muiTheme.breakpoints.down(1153)]: {
      width: "30px",
      height: "30px",
      margin: 12,
      fontSize: 12,
    },
  }),
  menuLogoSection: () => ({
    margin: 30,
    [muiTheme.breakpoints.up(3839)]: {
      margin: 30,
    },
    [muiTheme.breakpoints.down(3073)]: {
      margin: 20,
    },
    [muiTheme.breakpoints.down(2049)]: {
      margin: 16,
    },
    [muiTheme.breakpoints.down(1921)]: {
      margin: 12,
    },
    [muiTheme.breakpoints.down(1153)]: {
      margin: 10,
    },
    "& img": {
      width: 140,
      [muiTheme.breakpoints.up(3839)]: {
        width: 140,
      },
      [muiTheme.breakpoints.down(3073)]: {
        width: 100,
      },
      [muiTheme.breakpoints.down(2049)]: {
        width: 90,
      },
      [muiTheme.breakpoints.down(1921)]: {
        width: 75,
      },
      [muiTheme.breakpoints.down(1153)]: {
        width: 40,
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
    [muiTheme.breakpoints.up(3839)]: {
      height: "250px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      height: "200px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      height: "140px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      height: "125px",
    },
    [muiTheme.breakpoints.down(1545)]: {
      height: "90px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      height: "70px",
    },
    "& .MuiSvgIcon-root": {
      color: props?.palette?.sidebar?.menuActiveColor,
    },
    "& img": {
      width: 60,
      [muiTheme.breakpoints.up(3839)]: {
        width: 60,
      },
      [muiTheme.breakpoints.down(3073)]: {
        width: 50,
      },
      [muiTheme.breakpoints.down(2049)]: {
        width: 30,
      },
      [muiTheme.breakpoints.down(1921)]: {
        width: 25,
      },
      [muiTheme.breakpoints.down(1545)]: {
        width: 20,
      },
      [muiTheme.breakpoints.down(1153)]: {
        width: 15,
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
    [muiTheme.breakpoints.up(3839)]: {
      height: "250px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      height: "200px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      height: "140px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      height: "125px",
    },
    [muiTheme.breakpoints.down(1545)]: {
      height: "90px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      height: "70px",
    },
    "& img": {
      width: 120,
      [muiTheme.breakpoints.up(3839)]: {
        width: 120,
      },
      [muiTheme.breakpoints.down(3073)]: {
        width: 100,
      },
      [muiTheme.breakpoints.down(2049)]: {
        width: 60,
      },
      [muiTheme.breakpoints.down(1921)]: {
        width: 50,
      },
      [muiTheme.breakpoints.down(1545)]: {
        width: 40,
      },
      [muiTheme.breakpoints.down(1153)]: {
        width: 30,
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
      [muiTheme.breakpoints.up(3839)]: {
        width: "5px",
        height: "34%",
        right: "-42px",
        top: "17px",
      },
      [muiTheme.breakpoints.down(3073)]: {
        width: "5px",
        height: "34%",
        right: "-41px",
        top: "15px",
      },
      [muiTheme.breakpoints.down(2049)]: {
        width: "4px",
        height: "34%",
        right: "-36px",
        top: "7px",
      },
      [muiTheme.breakpoints.down(1921)]: {
        width: "4px",
        height: "34%",
        right: "-27px",
        top: "5px",
      },
      [muiTheme.breakpoints.down(1545)]: {
        width: "4px",
        height: "34%",
        right: "-31px",
        top: "5px",
      },
      [muiTheme.breakpoints.down(1153)]: {
        width: "4px",
        height: "34%",
        right: "-22px",
        top: "2px",
      },
    },
  }),
  customTooltip: () => ({
    background: "black !important",
  }),
});
export default useStyles;
