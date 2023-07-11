/** @format */

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
      padding: "0 0 0.2vw 0.8vw",
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
      height: "80px",
      [muiTheme.breakpoints.up(3839)]: {
        height: "196px",
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
    // padding: "1%",
    // border: "1px solid #808080",
    // background: "#161515",
    // borderRadius: "5px",
    // cursor: "pointer",
    // borderTopLeftRadius: "0px !important",
    // borderBottomLeftRadius: "0px !important",
    height: "100%",
    overflow: "auto",
    boxSizing: "border-box",
  }),
  routesHeading: (props: any) => ({
    height: "5%",
    fontSize: "0.9vw",
    fontFamily: "HelveticaNeue-Regular",
    textTransform: "uppercase",
    color: `${props?.palette?.fleetManagementPage?.routeDetailsTitle} !important`,
  }),
  routeName: (props: any) => ({
    fontFamily: "HelveticaNeue-Regular",
    fontSize: "0.6vw",
    lineHeight: "2vh",
    fontWeight: 300,
    color: "#AFAFAF",
  }),
  routeArea: (props: any) => ({
    fontFamily: "HelveticaNeue-Regular",
    fontSize: "0.7vw",
    fontWeight: 500,
    color: `${props?.palette?.fleetManagementPage?.routeDetailsTitle} !important`,
    lineHeight: "2vh",
  }),
  routeTimestamp: (props: any) => ({
    fontFamily: "HelveticaNeue-Regular",
    fontSize: "0.5vw",
    lineHeight: "2vh",
    fontWeight: 300,
    color: "#AFAFAF",
  }),
  routeNameSpan: (props: any) => ({
    background: "#FB4A4A",
    borderRadius: 2,
    padding: 2,
    color: "#fff",
    marginLeft: 10,
    fontFamily: "HelveticaNeue-Regular",
    fontSize: "0.5vw",
    lineHeight: "2vh",
    fontWeight: 300,
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
