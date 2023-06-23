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
        fontSize: '20px !important',
        lineHeight: '37px !important'
      },
    }),
  },
  { index: 1 }
);
export default useStyles;
