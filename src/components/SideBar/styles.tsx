/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  root: (props: any) => ({}),
  sideNavigation: (props: any) => ({
    "& .MuiDrawer-paper": {
      background: props.palette.sidebar.sidebarBg,
      borderRight: "0 !important",
      borderRadius: "0px",
      padding: props?.selectedTheme === "light" ? "0 0.1% 10% 0.1%" : "22px 2px",
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
      [muiTheme.breakpoints.down(2561)]: {
        height: "calc(100vh - 44px)",
        width: "130px",
      },
      [muiTheme.breakpoints.down(2049)]: {
        height: "calc(100vh - 44px)",
        width: "130px",
      },
      [muiTheme.breakpoints.down(1921)]: {
        height: "calc(100vh - 44px)",
        width: "100px",
      },
      [muiTheme.breakpoints.down(1793)]: {
        height: "calc(100vh - 44px)",
        width: "90px",
      },
      [muiTheme.breakpoints.down(1537)]: {
        height: "calc(100vh - 44px)",
        width: "80px",
      },
      [muiTheme.breakpoints.down(1345)]: {
        height: "calc(100vh - 44px)",
        width: "70px",
      },
      [muiTheme.breakpoints.down(1153)]: {
        height: "calc(100vh - 44px)",
        width: "60px",
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
    [muiTheme.breakpoints.down(2561)]: {
      width: "130px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      width: "130px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      width: "100px",
    },
    [muiTheme.breakpoints.down(1793)]: {
      width: "90px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      width: "80px",
    },
    [muiTheme.breakpoints.down(1345)]: {
      width: "70px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      width: "60px",
    },
  }),
  avatharSection: (props: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#717275",
    borderRadius: "50%",
    width: "120px",
    height: "120px",
    color: "white",
    fontSize: 30,
    fontFamily: "HelveticaNeue-Regular",
    position: "relative",
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
    [muiTheme.breakpoints.down(1793)]: {
      width: "42px",
      height: "42px",
      margin: 10,
      fontSize: 12,
    },
    [muiTheme.breakpoints.down(1545)]: {
      width: "38px",
      height: "38px",
      margin: 10,
      fontSize: 12,
    },
    [muiTheme.breakpoints.down(1153)]: {
      width: "30px",
      height: "30px",
      margin: 10,
      fontSize: 12,
    },
  }),

  avatharIconStyle: (props: any) => ({
    cursor: "pointer",
    // [muiTheme.breakpoints.up(3839)]: {
    //   width: "50px",
    // },
    // [muiTheme.breakpoints.down(3073)]: {
    //   width: "48px",
    // },
    // [muiTheme.breakpoints.down(2049)]: {
    //   width: "26px",
    // },
    // [muiTheme.breakpoints.down(1921)]: {
    //   width: "25px",
    // },
    // [muiTheme.breakpoints.down(1545)]: {
    //   width: "25px",
    // },
    // [muiTheme.breakpoints.down(1345)]: {
    //   width: "21px",
    // },
    // [muiTheme.breakpoints.down(1153)]: {
    //   width: "12px",
    // },
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
    [muiTheme.breakpoints.down(1793)]: {
      margin: 10,
    },
    [muiTheme.breakpoints.down(1537)]: {
      margin: 8,
    },
    [muiTheme.breakpoints.down(1345)]: {
      margin: 8,
    },
    [muiTheme.breakpoints.down(1153)]: {
      margin: 8,
    },
    "& img": {
      width: 140,
      [muiTheme.breakpoints.up(3839)]: {
        width: 140,
      },
      [muiTheme.breakpoints.down(3073)]: {
        width: 100,
      },
      [muiTheme.breakpoints.down(2561)]: {
        width: 80,
      },
      [muiTheme.breakpoints.down(2049)]: {
        width: 90,
      },
      [muiTheme.breakpoints.down(1921)]: {
        width: 75,
      },
      [muiTheme.breakpoints.down(1793)]: {
        width: 55,
      },
      [muiTheme.breakpoints.down(1545)]: {
        width: 45,
      },
      [muiTheme.breakpoints.down(1345)]: {
        width: 40,
      },
      [muiTheme.breakpoints.down(1153)]: {
        width: 40,
      },
    },
  }),

  menuLogoLightThemeSection: ()=>({   
        width: "70%",        
        backgroundColor: "#fff",
        position: "relative",
        padding: " 10% 10% 0% 10%",    
        
        // borderBottomRightRadius: "45%",
        // borderBottomLeftRadius: "45%",    
      
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-36%",
        left: 0,
        width: "100%",
        height: "80%",
        backgroundColor: "#fff",
        borderRadius: "0 0 50% 50%",
        zIndex: "-1",
      }

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
    [muiTheme.breakpoints.down(2561)]: {
      height: "120px",
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
    [muiTheme.breakpoints.down(2561)]: {
      height: "120px",
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
      [muiTheme.breakpoints.down(2561)]: {
        width: 60,
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
      [muiTheme.breakpoints.down(2561)]: {
        width: "4px",
        height: "34%",
        right: "-37px",
        top: "10px",
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
      [muiTheme.breakpoints.down(1793)]: {
        width: "4px",
        height: "34%",
        right: "-22px",
        top: "5px",
      },
      [muiTheme.breakpoints.down(1545)]: {
        width: "4px",
        height: "34%",
        right: "-22px",
        top: "5px",
      },
      [muiTheme.breakpoints.down(1345)]: {
        width: "4px",
        height: "34%",
        right: "-15px",
        top: "5px",
      },
      [muiTheme.breakpoints.down(1153)]: {
        width: "4px",
        height: "34%",
        right: "-17px",
        top: "2px",
      },
    },
  }),
  customTooltip: () => ({
    background: "black !important",
  }),

  customMenu: (props: any) => ({
    zIndex: " 1501 !important",

    [muiTheme.breakpoints.up(3839)]: {
      left: "4.5% !important",
      top: "-1.5% !important",
    },
    [muiTheme.breakpoints.down(1921)]: {
      left: "4% !important",
      top: "-3.5% !important",
    },
    [muiTheme.breakpoints.down(1793)]: {
      left: "4% !important",
      top: "-2.9% !important",
    },
    left: "4% !important",
    top: "-3.5% !important",

    "& .MuiMenu-list": {
      background: `#fff !important`,
      marginLeft: "15px !important",
      borderRadius: "12px !important",
      border: `2px solid ${props?.palette?.header?.menuBorder}`,
      boxShadow: `0px 4px 15px ${props?.palette?.header?.boxShadow}`,
      maxWidth: "157px",
    },
    "& .MuiPaper-root": {
      background: "none !important",
      boxShadow: "none !important",
      minWidth: "8%",
    },
    "& .MuiList-root": {
      "&::after": {
        width: "10%",
        height: "25%",
        content: '""',
        transform: "rotate(135deg)",
        boxSizing: "border-box",
        backgroundColor: `#fff !important`,
        position: "absolute",
        left: "-6%",
        top: "38%",
        border: `2px solid #fff`,
        borderStyle: "solid",
        borderWidth: "0px 2px 2px 0px",
      },
    },
    "& .MuiButtonBase-root": {
      padding: "12px 16px !important",
      background: "transparent !important",
      "&:hover": {
        background: "transparent !important",
      },
    },
  }),

  logoutSection: (props: any) => ({
    display: "flex",
    alignItems: "center",
  }),
  logoutImg: (props: any) => ({
    [muiTheme.breakpoints.up(3839)]: {
      width: 30,
    },
    width: 20,
    marginRight: 7,
  }),

  logoutText: (props: any) => ({
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: "25px !important",
    },
    fontSize: "14px !important",
    fontWeight: "700 !important",
    fontFamily: "Poppins !important",
    color: props?.palette?.header?.subTitle2,
  }),
});
export default useStyles;
