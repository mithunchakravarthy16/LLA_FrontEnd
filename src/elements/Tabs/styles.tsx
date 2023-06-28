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
    [muiTheme.breakpoints.down(1545)]: {
      fontSize: 9,
      lineHeight: "21px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 8,
      lineHeight: "19px",
    },
  }),
  labelCountStyle: (props: any) => ({
    padding: "0px 15px",
    background: props?.palette?.notification?.tabTextColor,
    borderRadius: "11px",
  }),
  listCount: (props: any) => ({}),
});
export default useStyles;
