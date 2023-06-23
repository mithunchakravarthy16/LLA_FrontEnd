/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  gridContainers: (props: any) => ({
    height: "100%",
  }),

  containerTitle: (props: any) => ({
    paddingBottom: "15px",
    height: "10%",
    color: props?.palette?.gridViewComponentCommonStyle?.containerTitle, //"#F26522",
    fontSize: "18px",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
  }),

  containerTitleTwo: (props: any) => ({
    color: props?.palette?.gridViewComponentCommonStyle?.containerTitle,
    fontSize: "18px",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
  }),

  containerTitleScreenFive: (props: any) => ({
    paddingBottom: "15px",
    height: "15%",
    color: props?.palette?.gridViewComponentCommonStyle?.containerTitle,
    fontSize: "18px",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
  }),

  subContainer: (props: any) => ({
    height: "90%",
  }),

  subContainerScreenFive: (props: any) => ({
    height: "85%",
  }),

  childSubContainer: (props: any) => ({
    height: "100%",
  }),

  leftSubChildContainer: (props: any) => ({
    height: "100%",
  }),

  graphTitleScreenOne: (props: any) => ({
    width: "100%",
    marginBottom: "20px",
    fontSize: "16px",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 24,
      lineHeight: "48px",
    },
  }),

  liveContainer: (props: any) => ({
    display: "flex",
    justifyContent: "space-around",
    padding: "25px 0px",
    backgroundColor: "#57585A20",
    borderRadius: "4px",
    position: "relative",
  }),

  liveImgStyle: (props: any) => ({
    position: "absolute",
    top: "-15px",
    left: "20px",
  }),

  liveContentValue: (props: any) => ({
    fontSize: "20px",
    fontWeight: 600,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
  }),

  liveContentValueGreen: (props: any) => ({
    fontSize: "22px",
    fontWeight: 700,
    color: props?.palette?.gridViewComponentCommonStyle?.liveContentValueGreen, //"#80C53B",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
  }),

  liveContentLabel: (props: any) => ({
    fontSize: "14px",
    fontWeight: 500,
    fontStyle: "italic",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
  }),

  liveContentLabelGreen: (props: any) => ({
    fontSize: "14px",
    fontWeight: 500,
    fontStyle: "italic",
    display: "flex",
    alignItems: "center",
    columnGap: "15px",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
  }),

  lastweekContainer: (props: any) => ({
    paddingLeft: "32px",
    height: "100%",
  }),

  lastweekTitleStyle: (props: any) => ({
    fontWeight: 500,
    fontSize: "18px",
    color: "#82BA6D",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
  }),

  lastweekBodyContainer: (props: any) => ({
    height: "90%",
  }),

  lastweekBodySubContainer: (props: any) => ({
    height: "100%",
  }),

  horizantalDataGridStyle: (props: any) => ({
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(0, 1fr))`,
  }),

  horizantalDataGridValueStyle: (props: any) => ({
    fontSize: "22px",
    fontWeight: 600,
    flex: 1,
    flexGrow: 1,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
  }),

  horizantalDataGridLabelStyle: (props: any) => ({
    fontSize: "17px",
    fontWeight: 500,
    fontStyle: "italic",
    color:
      props?.palette?.gridViewComponentCommonStyle?.horizantalDataGridLabel, //"#B5B2B2",
    flexGrow: 1,
    flex: 1,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
  }),

  screenTwoGraphTitleStyle: (props: any) => ({
    fontSize: "16px",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
  }),

  progressBarTitleStyle: (props: any) => ({
    fontSize: "16px",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
  }),

  progressBarContainerStyle: (props: any) => ({
    padding: "0px 10px 0px 10px",
  }),
  screenFiveGraphTitleStyle: (props: any) => ({
    fontSize: "16px",
    display: "flex",
    columnGap: "30px",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
  }),

  gridStyles: (props: any) => ({
    padding: "3vh 3vh 1vh 3vh",
    height: "50%",
  }),

  rightListItemStyle: (props: any) => ({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    rowGap: "5px",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "25%",
      width: "50%", // Specify the desired length of the bottom border
      borderBottom: `1px dashed ${props?.palette?.gridViewComponentCommonStyle?.rightListItemBorder}`, // Specify your desired color and border style
      opacity: "0.4",
    },
  }),

  rightListItemStyleLastChild: (props: any) => ({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    rowGap: "5px",
  }),

  listItemValueStyle: (props: any) => ({
    fontWeight: "600",
    fontSize: "22px",
  }),

  listItemLabelStyle: (props: any) => ({
    fontSize: "18px",
    color:
      props?.palette?.gridViewComponentCommonStyle?.horizantalDataGridLabel,
    fontStyle: "italic",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
  }),

  liveContentStyle: (props: any) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "10px",
  }),

  liveContentLeftStyle: (props: any) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "10px",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      top: "25%",
      right: 0,
      height: "50%", // Specify the desired length of the bottom border
      borderRight: `2px solid ${props?.palette?.gridViewComponentCommonStyle?.liveContentLeftBorder}`, // Specify your desired color and border style
      opacity: "0.4",
    },
  }),

  engMgntliveContentLeftStyle: (props: any) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    rowGap: "10px",
    position: "relative",
    padding: "0px 80px 0px 0px",
    "&::after": {
      content: '""',
      position: "absolute",
      top: "25%",
      right: 0,
      height: "50%", // Specify the desired length of the bottom border
      borderRight: `1px dashed ${props?.palette?.gridViewComponentCommonStyle?.rightListItemBorder}`, // Specify your desired color and border style
      opacity: "0.4",
    },
  }),

  engMgntliveContentStyle: (props: any) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    rowGap: "10px",
    padding: "0px 0px 0px 60px",
  }),

  engMgntliveContentMiddleStyle: (props: any) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    rowGap: "10px",
    position: "relative",
    padding: "0px 40px",
    "&::after": {
      content: '""',
      position: "absolute",
      top: "25%",
      right: 0,
      height: "50%", // Specify the desired length of the bottom border
      borderRight: `1px dashed ${props?.palette?.gridViewComponentCommonStyle?.rightListItemBorder}`, // Specify your desired color and border style
      opacity: "0.4",
    },
  }),

  aqiCircleStyle: (props: any) => ({
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: props?.palette?.gridViewComponentCommonStyle?.aqiCircleBg, //"#80C43B",
    boxShadow: `0px 0px 2px 3px ${props?.palette?.gridViewComponentCommonStyle?.aqiCircleShadow}`,
  }),
});
export default useStyles;
