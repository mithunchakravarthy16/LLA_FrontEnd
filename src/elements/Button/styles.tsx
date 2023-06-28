/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles(
  {
    viewDetails: (props: any) => ({
      borderRadius: "6px !important",
      background: `${props?.palette?.notification?.takeActionButtonColor} !important`,
      fontSize: "16px !important",
      lineHeight: "27px !important",
      fontWeight: "400 !important",
      color: `${props?.palette?.notification?.listTextColor} !important`,
      "& .MuiTouchRipple-root": {
        display: "none !important",
      },
      [muiTheme.breakpoints.down(3841)]: {
        fontSize: "20px !important",
        lineHeight: "37px !important",
      },
      [muiTheme.breakpoints.up(3839)]: {
        fontSize: "20px !important",
        lineHeight: "37px !important",
      },
      [muiTheme.breakpoints.down(3073)]: {
        fontSize: "18px !important",
        lineHeight: "35px !important",
      },
      [muiTheme.breakpoints.down(2049)]: {
        fontSize: "16px !important",
        lineHeight: "33px !important",
      },
      [muiTheme.breakpoints.down(1921)]: {
        fontSize: "14px !important",
        lineHeight: "31px !important",
      },
      [muiTheme.breakpoints.down(1537)]: {
        fontSize: "12px !important",
        lineHeight: "29px !important",
      },
      [muiTheme.breakpoints.down(1153)]: {
        fontSize: "10px !important",
        lineHeight: "20px !important",
      },
    }),
  },
  { index: 1 }
);
export default useStyles;
