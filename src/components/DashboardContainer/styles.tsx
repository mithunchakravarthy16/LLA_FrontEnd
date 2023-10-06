/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  dashboardRightPanelStyle: (props: any) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }),
  notificationIconSection: (props: any) => ({
    position: "absolute",
    top: "1.2vw",
    right: "1.2vw",
    cursor: "pointer",
    width: "2.5vw",
  }),
  globeIconSection: (props: any) => ({
    position: "absolute",
    top: "1.2vw",
    right: "4.5vw",
    cursor: "pointer",
    width: "2.5vw",
  }),
  notificationPanelSection: (props: any) => ({
    position: "absolute",
    right: "30px",
    background: props?.palette?.notification?.notificationBg,
    height: "calc(100vh - 291px)",
    top: "106px",
    boxShadow: `0px 0px 5px 5px ${props?.palette?.notification?.notificationBoxShadow}`,
    backdropFilter: "blur(17px)",
    borderRadius: "14px",
    color: "white",
    // width: "466px",
    [muiTheme.breakpoints.up(3839)]: {
      // width: "822px",
      top: "134px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      // width: "822px",
      height: "calc(100vh - 251px)",
      top: "120px",
    },
    [muiTheme.breakpoints.down(2561)]: {
      // width: "636px",
      top: "124px",
      height: "calc(100vh - 202px)",
    },
    [muiTheme.breakpoints.down(2049)]: {
      // width: "550px",
      top: "108px",
      height: "calc(100vh - 175px)",
    },
    [muiTheme.breakpoints.down(1921)]: {
      // width: "450px",
      top: "104px",
      height: "calc(100vh - 183px)",
    },
    [muiTheme.breakpoints.down(1793)]: {
      // width: "450px",
      top: "88px",
      height: "calc(100vh - 158px)",
    },
    [muiTheme.breakpoints.down(1681)]: {
      // width: "450px",
      top: "98px",
      height: "calc(100vh - 190px)",
    },
    [muiTheme.breakpoints.down(1537)]: {
      // width: "400px",
      top: "90px",
      height: "calc(100vh - 153px)",
    },
    [muiTheme.breakpoints.down(1345)]: {
      // width: "370px",
      top: "69px",
      height: "calc(100vh - 129px)",
    },
    [muiTheme.breakpoints.down(1153)]: {
      // width: "320px",
      top: "68px",
      height: "calc(100vh - 118px)",
    },
    [muiTheme.breakpoints.down(1025)]: {
      // width: "280px",
      top: "68px",
      height: "calc(100vh - 143px)",
    },
    
  }),
  pageNumSection: (props:any) => ({
    width: "3vw",
    margin: "0 0.8vw",
    "& .MuiInputBase-input": {
      padding: "6px !important",
      fontSize: "0.6vw",
      lineHeight: "17px",
    },
    "& .MuiFormLabel-root": {
      fontSize: 12,
      lineHeight: "13px",
      left: "-3px",
    },
  }),
  customPagination: (props:any) =>({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    // marginTop : "1vh"
  }),
});
export default useStyles;
