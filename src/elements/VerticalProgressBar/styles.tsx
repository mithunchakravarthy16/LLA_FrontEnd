/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  label: (props: any) => ({
    fontSize: "30px",
    fontWeight: 700,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 36,
      lineHeight: "55px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 30,
      lineHeight: "44px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 20,
      lineHeight: "28px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 18,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 15,
      lineHeight: "25px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "10px",
    },
  }),

  progressBarTitle: (props: any) => ({
    padding: "0 0 5px 5px",
    fontSize: "14px",
    marginBottom: 4,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "48px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 24,
      lineHeight: "38px",
    },
    [muiTheme.breakpoints.down(2561)]: {
      fontSize: 16,
      lineHeight: "28px",
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
    [muiTheme.breakpoints.down(1367)]: {
      fontSize: 11,
      lineHeight: "14px",
    },
    [muiTheme.breakpoints.down(1281)]: {
      fontSize: 11,
      lineHeight: "14px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "19px",
      marginBottom: 0,
    },
  }),

  progressBarContainer: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),

  progressBarStyle: (props: any) => ({
    width: "80%",
    height: "22px",
    [muiTheme.breakpoints.up(3839)]: {
      width: "80%",
      height: "40px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      width: "80%",
      height: "32px",
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
      height: "8px",
    },
  }),
});
export default useStyles;
