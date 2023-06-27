/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  label: (props: any) => ({
    fontSize: "30px",
    fontWeight: 700,
  }),

  progressBarTitle: (props: any) => ({
    padding: "0 0 5px 5px",
    fontSize: "14px",
    marginBottom: 4,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 26,
      lineHeight: "38px",
      marginBottom: 8,
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
      height: "47px",
    },
  }),
});
export default useStyles;
