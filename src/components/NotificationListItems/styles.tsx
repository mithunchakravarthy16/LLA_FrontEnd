/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  rootContainer: (props: any) => ({
    minWidth: props?.pageName === "markerCallout" ? "400px" : "380px",
    [muiTheme.breakpoints.down(3841)]: {
      minWidth: 500,
    },
    [muiTheme.breakpoints.up(3839)]: {
      minWidth: props?.pageName === "markerCallout" ? 749 : 500,
    },
  }),
  collapsedListItems: (props: any) => ({
    background: props?.palette?.notification?.listItemBorder, //rgba(7, 48, 77, 0.8)
    padding: "13px",
    borderRadius: "10px",
    border: `2px solid ${props?.palette?.notification?.listItemBg}`,
    marginBottom: "15px",
    cursor: "pointer",
    [muiTheme.breakpoints.down(3841)]: {
      marginBottom: "30px",
    },
  }),
  expandedListItems: (props: any) => ({
    background:
      props?.pageName === "markerCallout"
        ? props?.palette?.notification?.expansionMarkerListBg
        : props?.palette?.notification?.expansionListItemBg,
    padding: "13px",
    borderRadius: "10px",
    border:
      props?.pageName === "markerCallout"
        ? "none"
        : `2px solid ${props?.palette?.notification?.expansionListItemBorder}`,
    marginBottom: props?.pageName === "markerCallout" ? 0 : "15px",
    cursor: "pointer",
    [muiTheme.breakpoints.down(3841)]: {
      marginBottom: props?.pageName === "markerCallout" ? 0 : "32px",
    },
    [muiTheme.breakpoints.up(3839)]: {
      padding: "25px",
    },
  }),
  listItemTitle: (props: any) => ({
    fontSize: 20,
    letterSpacing: "0.5px",
    marginBottom: 12,
    fontFamily: "HelveticaNeue-Regular",
    [muiTheme.breakpoints.down(3841)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: "40px",
      lineHeight: "48px",
      fontFamily: "HelveticaNeue-Regular",
    },
  }),
  collapsedlistItemRow2: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
  }),
  listItemSubTitle: (props: any) => ({
    fontSize: 14,
    fontFamily: "HelveticaNeue-ItalicMedium",
    [muiTheme.breakpoints.down(3841)]: {
      fontSize: 24,
      lineHeight: "48px",
    },
  }),
  timeStampStyle: (props: any) => ({
    fontSize: 10,
    fontFamily: "HelveticaNeue-Regular",
    [muiTheme.breakpoints.down(3841)]: {
      fontSize: 18,
      lineHeight: "38px",
    },
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: "30px !important",
      fontFamily: "HelveticaNeue-Regular",
      fontWeight: 500,
    },
  }),
  expandedListItemRow2: (props: any) => ({
    fontSize: 14,
    letterSpacing: "0.5px",
    marginBottom: 12,
    fontFamily: "HelveticaNeue-ItalicMedium",
    [muiTheme.breakpoints.down(3841)]: {
      fontSize: 20,
      lineHeight: "48px",
    },
  }),
  expandedListItemRow3: (props: any) => ({
    fontSize: 14,
    letterSpacing: "0.5px",
    marginBottom: 12,
    fontFamily: "HelveticaNeue-ItalicMedium",
    [muiTheme.breakpoints.down(3841)]: {
      fontSize: 20,
      lineHeight: "40px",
    },
    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "35px",
      fontFamily: "HelveticaNeue-ItalicMedium",
    },
  }),
  expandedListItemRow4: (props: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [muiTheme.breakpoints.up(3839)]: {
      paddingTop: "20px",
    },
  }),
  buttonStyle: (props: any) => ({
    "& .MuiButton-contained": {
      [muiTheme.breakpoints.up(3839)]: {
        minWidth: "223px",
        height: "70px",
        fontSize: "30px !important",
        fontFamily: "HelveticaNeue-Regular",
        fontWeight: 500,
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
  }),
});
export default useStyles;
