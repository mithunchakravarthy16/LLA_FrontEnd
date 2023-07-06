/** @format */

import { makeStyles } from "@mui/styles";
import { padding } from "@mui/system";
// import muiTheme from "theme/muiTheme";

const useStyles = makeStyles(() => ({
  headerStyle: (props: any) => ({
    display: "flex",
    height: "6%",
  }),

  vehicleTitle: (props: any) => ({
    fontSize: "0.9vw",
    marginBottom: "1vh",
    fontFamily: "HelveticaNeue-Regular",
  }),
  assetTrackingTitle: (props: any) => ({
    fontSize: "0.6vw",
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "HelveticaNeue-italicMedium",
  }),

  headerTabContainerStyle: (props: any) => ({
    display: "flex",
    width: "14vw",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "0.9vw",
    fontFamily: "HelveticaNeue-Regular",
    fontWeight: 600,
    letterSpacing: "0.75px",
  }),

  headerTabStyle: (props: any) => ({
    padding: "10px 0px",
    cursor: "pointer",
    color: "#5F5F5F",
  }),

  assetInfoLeftPanelMain: (props: any) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }),
  assetInfoLeftPanelTop: (props: any) => ({
    // flex: 1,
    background: "#090A0C",
    borderRadius: "10px",
    padding: "2%",
    width: "100%",
    height: "14%",
    marginBottom: "4%",
  }),
  assetInfoLeftPanelCenter: (props: any) => ({
    background: "#131313",
    borderRadius: "10px",
    display: "flex",
    flex: "1",
    justifyContent: "space-between",
    fontSize: "0.9vw",
    fontFamily: "HelveticaNeue-Regular",
    height: "35%",
    marginottom: "4vh",
  }),
  assetInfoLeftPanelBottom: (props: any) => ({
    width: "100%",
    height: "48%",
  }),
  leftPanelSection: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
  }),
  leftPanelLoopSection: (props: any) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    flex: 1,
    "&::after": {
      content: '""',
      position: "absolute",
      top: "20%",
      right: 0,
      height: "60%", // Specify the desired length of the bottom border
      borderRight: `1px dashed #808080`, // Specify your desired color and border style
      opacity: "0.5",
    },
    "&:last-child": {
      "&::after": {
        content: '""',
        position: "absolute",
        top: "20%",
        right: 0,
        height: "60%", // Specify the desired length of the bottom border
        borderRight: "none", // Specify your desired color and border style
        opacity: "0.4",
      },
    },
  }),
  leftPanelChild1: (props: any) => ({
    fontSize: "0.9vw",
    marginBottom: "2.4vh",
    fontFamily: "HelveticaNeue-Regular",
  }),
  leftPanelChild2: (props: any) => ({
    color: "#F26522",
    fontSize: "0.9vw",
    fontFamily: "HelveticaNeue-Regular",
  }),
  assetInfoRightPanelMain: (props: any) => ({
    height: "100%",
    border: "1px solid rgb(51, 51, 51)",
    padding: "1%",
    background: "rgb(22, 21, 21)",
  }),
  notificationListContainer: (props: any) => ({
    height: "100%",
    overflowY: "auto",

    "&::-webkit-scrollbar": {
      width: 0,
    },
  }),
}));

export default useStyles;
