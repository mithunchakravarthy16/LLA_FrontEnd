import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: (props: any) => ({ background: "transparent" }),

  listCount: (props: any) => ({}),
  tabLabel: (props: any) => ({}),
  labelCountStyle: (props: any) => ({
    padding: "0px 15px",
    background: props?.palette?.notification?.tabTextColor,
    borderRadius: "11px",
    // color: props?.palette?.notification?.tabListCountColor,
  }),
});
export default useStyles;
