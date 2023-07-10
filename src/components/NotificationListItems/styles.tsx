/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  rootContainer: (props: any) => ({
    minWidth: props?.pageName === "markerCallout" ? "350px" : "380px",
    paddingRight : props?.pageName === "markerCallout" ? "" : "10px",
    [muiTheme.breakpoints.up(3839)]: {
      minWidth: props?.pageName === "markerCallout" ? 650 : 500,
    },
    [muiTheme.breakpoints.down(3073)]: {
      minWidth: props?.pageName === "markerCallout" ? 650 : 500,
    },
    [muiTheme.breakpoints.down(2049)]: {
      minWidth: props?.pageName === "markerCallout" ? 400 : 370,
    },
    [muiTheme.breakpoints.down(1921)]: {
      minWidth: props?.pageName === "markerCallout" ? 400 : 240,
    },
    [muiTheme.breakpoints.down(1793)]: {
      minWidth: props?.pageName === "markerCallout" ? 400 : 240,
    },
    [muiTheme.breakpoints.down(1681)]: {
      minWidth: props?.pageName === "markerCallout" ? 350 : 240,
    },
    [muiTheme.breakpoints.down(1345)]: {
      minWidth: props?.pageName === "markerCallout" ? 340 : 240,
    },
    [muiTheme.breakpoints.down(1153)]: {
      minWidth: props?.pageName === "markerCallout" ? 330 : 220,
    },
    [muiTheme.breakpoints.down(1025)]: {
      minWidth: props?.pageName === "markerCallout" ? 290 : 186,
    },
  }),
  collapsedListItems: (props: any) => {
    return ({
    background: props.palette?.notification?.listItemBorder, //rgba(7, 48, 77, 0.8)
    padding: "13px",
    borderRadius: "10px",
    border: `2px solid ${props?.palette?.notification?.listItemBg}`,
    marginBottom: "15px",
    cursor: "pointer",
    [muiTheme.breakpoints.up(3839)]: {
      marginBottom: "30px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      marginBottom: "24px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      marginBottom: "20px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      marginBottom: "18px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      marginBottom: "15px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      marginBottom: "12px",
    },
  })},
  expandedListItems: (props: any) => ({
    background:
      props?.pageName === "markerCallout" 
        ? props?.mapPageName === "dashboard" ? props?.palette?.notification?.dashBoardexpansionMarkerListBg : props?.palette?.notification?.expansionMarkerListBg
        : props?.palette?.notification?.expansionListItemBg,
        backdropFilter: props?.mapPageName === "dashboard" ? "blur(2.5px)" : "none",
    padding: "4%",
    borderRadius: "10px",
    border:
      props?.pageName === "markerCallout"
        ? "none"
        : `2px solid ${props?.palette?.notification?.expansionListItemBorder}`,
    marginBottom: props?.pageName === "markerCallout" ? 0 : "15px",
    cursor: "pointer",
    [muiTheme.breakpoints.up(3839)]: {
      marginBottom: props?.pageName === "markerCallout" ? 0 : "32px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      marginBottom: props?.pageName === "markerCallout" ? 0 : "24px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      marginBottom: props?.pageName === "markerCallout" ? 0 : "20px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      marginBottom: props?.pageName === "markerCallout" ? 0 : "18px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      marginBottom: props?.pageName === "markerCallout" ? 0 : "16px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      marginBottom: props?.pageName === "markerCallout" ? 0 : "14px",
    },
  }),
  listItemTitle: (props: any) => ({
    fontSize: 20,
    letterSpacing: "0.5px",
    marginBottom: "3%",
    fontFamily: "HelveticaNeue-Regular",
    color: props?.palette?.notification?.listItemContent,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      // lineHeight: "56px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 24,
      // lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 20,
      // lineHeight: "36px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 16,
      // lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(1537)]: {
      fontSize: 12,
      // lineHeight: "18px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 10,
      // lineHeight: "16px",
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 9,
      // lineHeight: "15px",
    },
  }),
  collapsedlistItemRow2: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
  }),
  listItemSubTitle: (props: any) => ({
    fontSize: 14,
    fontFamily: "HelveticaNeue-ItalicMedium",
    color: props?.palette?.notification?.listItemContent,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 24,
      lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 15,
      lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 13,
      lineHeight: "21px",
    },
    [muiTheme.breakpoints.down(1545)]: {
      fontSize: 9,
      lineHeight: "19px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 8,
      lineHeight: "16px",
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 6,
      lineHeight: "13px",
    },
  }),
  timeStampStyle: (props: any) => ({
    fontSize: 10,
    fontFamily: "HelveticaNeue-Regular",
    color: props?.palette?.notification?.listItemContent,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 24,
      lineHeight: "56px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 20,
      lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 13,
      lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 12,
      lineHeight: "21px",
    },
    [muiTheme.breakpoints.down(1545)]: {
      fontSize: 8,
      lineHeight: "19px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 8,
      lineHeight: "16px",
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 6,
      lineHeight: "13px",
    },
  }),
  expandedListItemRow2: (props: any) => ({
    // fontSize: 14,
    letterSpacing: "0.5px",
    marginBottom: "4%",
    fontFamily: "HelveticaNeue-ItalicMedium",
    fontSize: 10,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 24,
      // lineHeight: "56px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 20,
      // lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 13,
      // lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 12,
      // lineHeight: "21px",
    },
    [muiTheme.breakpoints.down(1545)]: {
      fontSize: 8,
      // lineHeight: "19px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 8,
      // lineHeight: "16px",
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 6,
      // lineHeight: "13px",
    },
  }),
  expandedListItemRow3: (props: any) => ({
    // fontSize: 14,
    letterSpacing: "0.5px",
    marginBottom: "4%",
    fontFamily: "HelveticaNeue-ItalicMedium",
    fontSize: 10,
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 24,
      // lineHeight: "56px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 20,
      // lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 13,
      // lineHeight: "26px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 12,
      // lineHeight: "21px",
    },
    [muiTheme.breakpoints.down(1545)]: {
      fontSize: 8,
      // lineHeight: "19px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: 8,
      // lineHeight: "16px",
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 6,
      // lineHeight: "13px",
    },
  }),
  expandedListItemRow4: (props: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingTop: "2%",
    // [muiTheme.breakpoints.up(3839)]: {
    //   paddingTop: "20px",
    // },
  }),
  buttonStyle: (props: any) => ({
    "& .MuiButton-contained": { 
      backgroundColor: props?.palette?.notification?.listItemLabelSelected,
      [muiTheme.breakpoints.up(3839)]: {
        minWidth: "223px",
        height: "70px",
        fontSize: "30px !important",
        fontFamily: "HelveticaNeue-Regular",
        fontWeight: 500,
      },
      "&:hover": {
        background: props?.palette?.notification?.listItemLabelSelected,
      },
    },
  }),
  markerCloseIcon: (props: any) => ({
    margin: "4px 0px 0px 0px",
    fontSize: 13,
    padding: "0px 0px 0px 15px",
    fontFamily: "HelveticaNeue-Regular",
  }),
  listItemCallout: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  defaultListItem: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  markerCloseIcon1: (props: any) => ({
    margin: "4px 0px 0px 0px",
    padding: "0px 0px 0px 5px",
    fontFamily: "HelveticaNeue-Regular",
    position: "relative",
    top: "-13px",
    display: "flex",
    justifyContent: "end",
  }),
});
export default useStyles;
