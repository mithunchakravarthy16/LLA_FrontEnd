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
    [muiTheme.breakpoints.down(3841)]: {
      fontSize: 35,
      lineHeight: '63px'
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 16,
      lineHeight: '23px'
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
