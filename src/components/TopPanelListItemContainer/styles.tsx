/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  topPanelListItemStyle: (props: any) => ({
    display: "flex",
    columnGap: "10px",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px 0px",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      top: "20%",
      right: 0,
      height: "60%", // Specify the desired length of the bottom border
      borderRight: `1px dashed #808080`, // Specify your desired color and border style
      opacity: "0.4",
    },
  }),

  bodyLeftTopPanelListSubContainer: (props: any) => ({
    // border: "1px solid #808080",
    height: "100%",
    border: "1px solid  #333333",
    borderRight: "none",
  }),

  progressBarContainer: (props: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 0px",
  }),

  progressBarTitleStyle: (props: any) => ({
    fontSize: "14px",
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
  }),

  progressBarContainerStyle: (props: any) => ({
    padding: "0px 20px",
  }),

  itemValueStyle: (props: any) => ({
    fontSize: "16px",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 35,
      lineHeight: "48px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 32,
      lineHeight: "44px",
    },
    [muiTheme.breakpoints.down(2561)]: {
      fontSize: 24,
      lineHeight: "28px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 20,
      lineHeight: "28px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 18,
      lineHeight: "24px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 14,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "19px",
    },
  }),
  imageWidthStyle: (props: any) => ({
    width: 30,
    height: 30,
    [muiTheme.breakpoints.up(3839)]: {
      width: 50,
      height: 50,
    },
    [muiTheme.breakpoints.down(3073)]: {
      width: 40,
      height: 40,
    },
    [muiTheme.breakpoints.down(2049)]: {
      width: 30,
      height: 30,
    },
    [muiTheme.breakpoints.down(1921)]: {
      width: 25,
      height: 25,
    },
    [muiTheme.breakpoints.down(1537)]: {
      width: 20,
      height: 20,
    },
    [muiTheme.breakpoints.down(1153)]: {
      width: 16,
      height: 16,
    },
  }),
  itemUnitStyle: (props: any) => ({
    fontSize: "16px",
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 35,
      lineHeight: "48px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 32,
      lineHeight: "44px",
    },
    [muiTheme.breakpoints.down(2561)]: {
      fontSize: 24,
      lineHeight: "28px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 20,
      lineHeight: "28px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 18,
      lineHeight: "24px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 14,
      lineHeight: "22px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      lineHeight: "19px",
    },
  }),

  itemValueUnitStyle: (props: any) => ({
    display: "flex",
    alignItems: "flex-end",
  }),
});
export default useStyles;
