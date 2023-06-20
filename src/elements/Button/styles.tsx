import { makeStyles } from "@mui/styles";

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
    }),
  },
  { index: 1 }
);
export default useStyles;
