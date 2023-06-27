/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  label: (props: any) => ({
    fontSize: "30px",
    fontWeight: 700,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 26,
      lineHeight: "48px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 20,
      lineHeight: "38px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 16,
      lineHeight: "28px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 14,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 12,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "19px",
    },
  }),

  progressBarTitle: (props: any) => ({
    padding: "0 0 5px 5px",
    fontSize: "14px",
    marginBottom: 4,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 26,
      lineHeight: "48px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 20,
      lineHeight: "38px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 16,
      lineHeight: "28px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 14,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 12,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "19px",
    },
  }),

  progressBarContainer: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
  }),

  progressBarStyle: (props: any) => ({
    width: "80%",
    height: "22px",
    [muiTheme.breakpoints.up(3839)]: {
      width: "80%",
      height: "22px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      width: "80%",
      height: "18px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      width: "80%",
      height: "18px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      width: "80%",
      height: "16px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      width: "80%",
      height: "14px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      width: "80%",
      height: "12px",
    },
  }),
});
export default useStyles;
