import { makeStyles } from "@mui/styles";
import muiTheme from "theme/muiTheme";

const useStyles = makeStyles({
  stepperContainer: (props: any) => ({
    "& ul": {
      padding: "6px 0",
    },
    "& li::before": {
      display: "none",
    },
    "& .MuiTimelineContent-root": {
      padding: "6px 0 6px 16px",
    },
    "& .MuiTimelineDot-defaultGrey": {
      backgroundColor: "unset !important",
      boxShadow: "unset !important",
    },
    "& .MuiTimelineDot-root": {
      padding: 0,
      marginTop: 0,
      marginBottom: 0,
    },
    "& .MuiTimelineSeparator-root": {
      height: "90px",
      [muiTheme.breakpoints.up(3839)]: {
        height: "200px",
      },
      "& .MuiIcon-root": {
        [muiTheme.breakpoints.up(3839)]: {
          width: "1.5em",
          height: "1.7em",
        },
      },
    },
  }),
  routeDetailasContainer: (props: any) => ({
    padding: "25px",
    border: "1px solid #808080",
    background: "#161515",
    borderRadius: "5px",
    cursor: "pointer",
    borderTopLeftRadius: "0px !important",
    borderBottomLeftRadius: "0px !important",
    height: "calc(100vh - 400px)",
    overflow: "auto",
    boxSizing: "border-box",
    [muiTheme.breakpoints.up(3839)]: {
      height: "calc(100vh - 800px)",
    },
  }),
  routesHeading: (props: any) => ({
    fontFamily: "HelveticaNeue-Regular",
    fontSize: 20,
    fontWeight: 500,
    margin: "0 0 10px 0",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 36,
      lineHeight: "43px",
    },
  }),
  routeName: (props: any) => ({
    fontFamily: "HelveticaNeue-Regular",
    fontSize: 11,
    lineHeight: "15px",
    marginBottom: 10,
    color: "#AFAFAF",
    fontWeight: 300,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 28,
      marginBottom: 30,
    },
  }),
  routeArea: (props: any) => ({
    fontFamily: "HelveticaNeue-Regular",
    fontSize: 12,
    lineHeight: "16px",
    marginBottom: 10,
    fontWeight: 500,
    color: "#FFFFFF",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      marginBottom: 30,
    },
  }),
  routeTimestamp: (props: any) => ({
    fontFamily: "HelveticaNeue-Regular",
    fontSize: 9,
    lineHeight: "12px",
    marginBottom: 1,
    color: "#FFFFFF",
    fontWeight: 300,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 24,
    },
  }),
  routeNameSpan: (props: any) => ({
    background: "#FB4A4A",
    borderRadius: 2,
    padding: 2,
    color: "#fff",
    marginLeft: 10,
    fontSize: 10,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 20,
      padding: "10px",
    },
  }),
  routeNameSpanNextStop: (props: any) => ({
    background: "#79BE6D",
    borderRadius: 2,
    padding: 2,
    color: "#fff",
    marginLeft: 10,
    fontSize: 10,
  }),
  timeLineConnector: (props: any) => ({
    left: "-2px",
    [muiTheme.breakpoints.up(3839)]: {
      width: "6px",
      left: "1px",
    },
    width: "2px",
    position: "relative",
    backgroundColor: "#976C9E",
  }),
  timeLineConnectorDashed: (props: any) => ({
    left: "-2px",
    position: "relative",
    backgroundColor: "unset",
    width: "unset",
    [muiTheme.breakpoints.up(3839)]: {
      borderLeft: "6px dashed #976C9E",
      left: "1px",
    },
    borderLeft: "2px dashed #976C9E",
  }),
});
export default useStyles;
