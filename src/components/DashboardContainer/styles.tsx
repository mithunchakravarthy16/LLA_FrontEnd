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
    top: "30px",
    right: "30px",
    cursor: "pointer",
    width: 40,
    [muiTheme.breakpoints.up(3839)]: {
      width: 72,
    },
    [muiTheme.breakpoints.down(3073)]: {
      width: 62,
    },
    [muiTheme.breakpoints.down(2049)]: {
      width: 52,
    },
    [muiTheme.breakpoints.down(1921)]: {
      width: 42,
    },
    [muiTheme.breakpoints.down(1545)]: {
      width: 32,
    },
    [muiTheme.breakpoints.down(1153)]: {
      width: 22,
    },
    [muiTheme.breakpoints.down(1025)]: {
      width: 20,
    },
  }),
  notificationPanelSection: (props: any) => ({
    position: "absolute",
    right: "30px",
    background: props?.palette?.notification?.notificationBg,
    height: "calc(100vh - 332px)",
    top: "106px",
    boxShadow: `0px 0px 20px 5px ${props?.palette?.notification?.notificationBoxShadow}`,
    backdropFilter: "blur(17px)",
    borderRadius: "30px",
    color: "white",
    width: "466px",
    [muiTheme.breakpoints.up(3839)]: {
      width: "822px",
      top: "180px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      width: "822px",
      top: "180px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      width: "550px",
      top: "116px",
      height: "calc(100vh - 216px)",
    },
    [muiTheme.breakpoints.down(1921)]: {
      width: "450px",
      top: "116px",
      height: "calc(100vh - 216px)",
    },
    [muiTheme.breakpoints.down(1681)]: {
      width: "450px",
      top: "79px",
      height: "calc(100vh - 176px)",
    },
    [muiTheme.breakpoints.down(1537)]: {
      width: "400px",
      top: "116px",
      height: "calc(100vh - 216px)",
    },
    [muiTheme.breakpoints.down(1345)]: {
      width: "400px",
      top: "69px",
      height: "calc(100vh - 170px)",
    },
    [muiTheme.breakpoints.down(1153)]: {
      width: "320px",
      top: "116px",
      height: "calc(100vh - 216px)",
    },
  }),
});
export default useStyles;
