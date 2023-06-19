import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  dashboardRightPanelStyle: (props: any) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }),
  notificationIconSection: (props: any) => ({
    position: "absolute",
    top: "30px",
    right: "30px",
    cursor: "pointer",
  }),
  notificationPanelSection: (props: any) => ({
    position: "absolute",
    right: "30px",
    background: "rgba(9, 17, 22, 0.9)",
    height: "calc(100vh - 180px)",
    top: "106px",
    boxShadow: "0px 0px 20px 5px rgba(133, 130, 130, 0.2)",
    backdropFilter: "blur(17px)",
    borderRadius: "30px",
    color: "white",
    width: "380px",
  }),
});
export default useStyles;
