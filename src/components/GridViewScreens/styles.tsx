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
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 24,
      lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 20,
      lineHeight: "36px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 16,
      lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 13,
      lineHeight: "20px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "16px",
    },
  }),

  containerTitleTwo: (props: any) => ({
    color: props?.palette?.gridViewComponentCommonStyle?.containerTitle,
    fontSize: "18px",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 24,
      lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 20,
      lineHeight: "36px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 16,
      lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 13,
      lineHeight: "20px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "16px",
    },
  }),

  containerTitleScreenFive: (props: any) => ({
    paddingBottom: "15px",
    height: "13%",
    color: props?.palette?.gridViewComponentCommonStyle?.containerTitle,
    fontSize: "18px",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 24,
      lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 20,
      lineHeight: "36px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 16,
      lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 13,
      lineHeight: "20px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "16px",
    },
  }),

  subContainer: (props: any) => ({
    height: "90%",
  }),

  subContainerScreenFive: (props: any) => ({
    height: "87%",
    marginTop: "2%",
  }),

  dotContainerStyle: (props: any) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: "10px",
  }),

  overspeedingDotStyle: (props: any) => ({
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#C39C66",

    [muiTheme.breakpoints.up(3839)]: {
      width: "20px",
      height: "20px",
    },
  }),

  harshBreakingDotStyle: (props: any) => ({
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#26428E",

    [muiTheme.breakpoints.up(3839)]: {
      width: "20px",
      height: "20px",
    },
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
      fontSize: 26,
      lineHeight: "48px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 20,
      lineHeight: "38px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 16,
      lineHeight: "28px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 14,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 13,
      lineHeight: "20px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "16px",
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 8,
      lineHeight: "16px",
    },
  }),

  liveContainer: (props: any) => ({
    display: "flex",
    justifyContent: "space-around",
    padding: "25px 0px",
    backgroundColor: "#57585A20",
    borderRadius: "4px",
    position: "relative",
    [muiTheme.breakpoints.up(3839)]: {
      padding: "25px 0px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      padding: "20px 0px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      padding: "16px 0px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      padding: "14px 0px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      padding: "12px 0px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      padding: "10px 0px",
    },
  }),

  liveImgStyle: (props: any) => ({
    position: "absolute",
    top: "-15px",
    left: "20px",
    [muiTheme.breakpoints.up(3839)]: {
      top: "-30px",
    },
    [muiTheme.breakpoints.down(1025)]: {
      top: "-19px",
      left: "4px",
    },
    "& img": {
      width: "2.5vw !important",
    },
  }),

  liveContentValue: (props: any) => ({
    fontSize: "20px",
    fontWeight: 600,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 44,
      lineHeight: "72px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 36,
      lineHeight: "62px",
    },
    [muiTheme.breakpoints.down(2561)]: {
      fontSize: 22,
      lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 22,
      lineHeight: "38px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 18,
      lineHeight: "34px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 15,
      lineHeight: "27px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "16px",
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
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 24,
      lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 20,
      lineHeight: "36px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 16,
      lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 14,
      lineHeight: "21px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "16px",
    },
  }),

  liveContentLabel: (props: any) => ({
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "HelveticaNeue-Regular",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 24,
      lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(2561)]: {
      fontSize: 18,
      lineHeight: "30px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 18,
      lineHeight: "30px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 15,
      lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 13,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "16px",
    },
  }),

  liveContentLabelGreen: (props: any) => ({
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "HelveticaNeue-Regular",
    display: "flex",
    alignItems: "center",
    columnGap: "15px",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 24,
      lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(2561)]: {
      fontSize: 20,
      lineHeight: "36px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 20,
      lineHeight: "36px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 16,
      lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 13,
      lineHeight: "21px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "16px",
    },
  }),

  lastweekContainer: (props: any) => ({
    paddingLeft: "32px",
    height: "100%",
    [muiTheme.breakpoints.up(3071)]: {
      height: "100%",
    },
    [muiTheme.breakpoints.down(2561)]: {
      height: "92%",
    },
    [muiTheme.breakpoints.down(2049)]: {
      height: "100%",
    },
  }),

  lastweekTitleStyle: (props: any) => ({
    fontWeight: 500,
    fontSize: "18px",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    color: props?.palette?.gridViewComponentCommonStyle?.todayTitleTextColor, // "#82BA6D",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 24,
      lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 16,
      lineHeight: "30px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 14,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 10,
      lineHeight: "16px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "16px",
    },
  }),

  lastweekBodyContainer: (props: any) => ({
    height: "96%",
    alignItems: "end",
    [muiTheme.breakpoints.down(1921)]: {
      height: "93%",
      alignItems: "end",
    },
  }),

  lastweekBodySubContainer: (props: any) => ({
    height: "95%",
    alignItems: "end",
    [muiTheme.breakpoints.up(3839)]: {
      height: "97%",
      alignContent: "space-around",
    },
    [muiTheme.breakpoints.down(1921)]: {
      height: "94%",
      alignItems: "end",
    },
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
      fontSize: 44,
      lineHeight: "72px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 36,
      lineHeight: "62px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 26,
      lineHeight: "52px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 20,
      lineHeight: "36px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 16,
      lineHeight: "27px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "16px",
    },
  }),

  horizantalDataGridLabelStyle: (props: any) => ({
    fontSize: "17px",
    fontWeight: 500,
    fontFamily: "HelveticaNeue-Regular",
    wordBreak: "break-word",
    color: props?.palette?.gridViewComponentCommonStyle?.verticalBarLabelColor, // "rgba(181, 178, 178, 1)",
    flexGrow: 1,
    flex: 1,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "36px",
      // maxWidth: 190,
      wordBreak: "break-word",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 24,
      lineHeight: "26px",
      // maxWidth: 190,
      wordBreak: "break-word",
    },
    [muiTheme.breakpoints.down(2561)]: {
      fontSize: 15,
      lineHeight: "17px",
      // maxWidth: 100,
      wordBreak: "break-word",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 15,
      lineHeight: "17px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 13,
      lineHeight: "17px",
    },
    [muiTheme.breakpoints.down(1545)]: {
      fontSize: 10,
      lineHeight: "14px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 9,
      lineHeight: "14px",
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 6,
      lineHeight: "10px",
    },
  }),

  screenTwoGraphTitleStyle: (props: any) => ({
    fontSize: "16px",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 26,
      lineHeight: "48px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 20,
      lineHeight: "38px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 16,
      lineHeight: "28px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 14,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 12,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "19px",
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 8,
      lineHeight: "19px",
    },
  }),

  progressBarTitleStyle: (props: any) => ({
    fontSize: "16px",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 24,
      lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 16,
      lineHeight: "28px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 16,
      lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(1545)]: {
      fontSize: 12,
      lineHeight: "20px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "16px",
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
      fontSize: 26,
      lineHeight: "48px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 20,
      lineHeight: "38px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 16,
      lineHeight: "28px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 14,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1601)]: {
      fontSize: 12,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 12,
      lineHeight: "20px",
    },
    [muiTheme.breakpoints.down(1441)]: {
      fontSize: 11,
      lineHeight: "20px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "18px",
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 8,
      lineHeight: "18px",
    },
  }),

  gridStyles: (props: any) => ({
    padding: "1.8vh",
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
      bottom: "-3vh",
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
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 44,
      lineHeight: "72px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 36,
      lineHeight: "62px",
    },
    [muiTheme.breakpoints.down(2561)]: {
      fontSize: 20,
      lineHeight: "38px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 20,
      lineHeight: "38px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 16,
      lineHeight: "30px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "16px",
    },
  }),

  listItemLabelStyle: (props: any) => ({
    fontSize: "18px",
    wordBreak: "break-word",
    color: props?.palette?.gridViewComponentCommonStyle?.verticalBarLabelColor, // "rgba(181, 178, 178, 1)",
    fontFamily: "HelveticaNeue-Regular",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "36px",
      // maxWidth: 190,
      wordBreak: "break-word",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 24,
      lineHeight: "26px",
      // maxWidth: 190,
      wordBreak: "break-word",
    },
    [muiTheme.breakpoints.down(2561)]: {
      fontSize: 15,
      lineHeight: "17px",
      // maxWidth: 100,
      wordBreak: "break-word",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 15,
      lineHeight: "17px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 13,
      lineHeight: "17px",
    },
    [muiTheme.breakpoints.down(1545)]: {
      fontSize: 10,
      lineHeight: "14px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 9,
      lineHeight: "14px",
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 5,
      lineHeight: "10px",
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
    flex: "1 1 5%",
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
    [muiTheme.breakpoints.up(3839)]: {
      padding: "0px 70px 0px 0px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      padding: "0px 60px 0px 0px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      padding: "0px 50px 0px 0px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      padding: "0px 40px 0px 0px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      padding: "0px 30px 0px 0px",
    },
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
    [muiTheme.breakpoints.up(3839)]: {
      padding: "0px 0px 0px 60px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      padding: "0px 0px 0px 50px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      padding: "0px 0px 0px 40px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      padding: "0px 0px 0px 30px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      padding: "0px 0px 0px 20px",
    },
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
    padding: "0px 10px",
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
