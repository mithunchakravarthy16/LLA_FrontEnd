/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  root: (props: any) => ({ background: "transparent" }),
  tabLabel: (props: any) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // fontFamily: "HelveticaNeue-Regular",
    fontSize: 16,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 22,
      lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 15,
      lineHeight: "28px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 13,
      lineHeight: "21px",
    },
    [muiTheme.breakpoints.down(1793)]: {
      fontSize: 12,
      lineHeight: "21px",
    },
    [muiTheme.breakpoints.down(1545)]: {
      fontSize: props.pageName === "parking" ? 14 : 11,
      lineHeight: "21px",
    },
    [muiTheme.breakpoints.down(1281)]: {
      fontSize: props.pageName === "parking" ? 13 : 10,
      lineHeight: "21px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: props.pageName === "parking" ? 12 : 8,
      lineHeight: "21px",
    },
  }),

  tabLabelFleetInfoDialogue: (props: any) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.8vw",
   
  }),

  labelCountStyle: (props: any) => ({
    padding: "0px 15px",
    background: props?.palette?.notification?.tabTextColor,
    borderRadius: "11px",
  }),
  listCount: (props: any) => ({}),
});
export default useStyles;
