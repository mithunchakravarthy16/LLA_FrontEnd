import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  containerStyle: (props: any) => ({
    width: "100%",
    height: "calc(100vh - 84px)",
  }),

  dashboardRightPanelStyle: (props: any) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }),
  infoIconContainer: (props: any) => ({
    position: "absolute",
    bottom: 20,
    width: "35%",
    display: "flex",
    background:
      props?.palette?.dashboardLeftPanel?.listExpansionBackgroundColor,
    opacity: 0.8,
    borderRadius: "5px",
    // justifyContent: "space-between",
    backdropFilter: "blur(15px)",
    padding: "25px 0px 25px 25px",
  }),
  dashboardMapContainer: (props: any) => ({
    width: "100%",
    position: "relative",
  }),
  infoIconMainStyle: (props: any) => ({
    width: "100%",
  }),
  infoIconValue: (props: any) => ({
    color: props?.palette?.dashboardLeftPanel?.infoIconValueColor,
    fontSize: "36px",
    fontWeight: "600",
    [muiTheme.breakpoints.down(1538)]: {
      fontSize: "24px !important",
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: "20px !important",
    },
  }),
  infoIconTitle: (props: any) => ({
    display: "flex",
    alignItems: "center",
    color: props?.palette?.dashboardLeftPanel?.cardTextColor,
    fontSize: "15px",
    fontWeight: 600,
    [muiTheme.breakpoints.down(1538)]: {
      fontSize: "12px !important",
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: "10px !important",
    },
  }),
  circleColor: (props: any) => ({
    width: "10px",
    height: "10px",
    borderRadius: "10px",
    marginRight: 5,
  }),
});
export default useStyles;
