/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles(
  {
    violationListContainer: (props: any) => ({
      height: "95%",
      overflowY: "auto",
      paddingRight: "2%",
      // "&::-webkit-scrollbar": {
      //   width: 0,
      // },
    }),
    violationHeading: (props: any) => ({
      height: "5%",
      fontSize: "0.9vw",
      fontFamily: "HelveticaNeue-Regular",
      color: `${props?.palette?.fleetManagementPage?.routeDetailsTitle} !important`,
    }),
    listItemTitle: (props: any) => ({
      fontSize: "0.9vw",
      fontFamily: "HelveticaNeue-Regular",
      lineHeight: "1vh",
      color: `${props?.palette?.fleetManagementPage?.violationListTextColor}`,
    }),
    listItemDescription: (props: any) => ({
      fontSize: "0.7vw",
      lineHeight: "2vh",
      fontStyle: "italic",
      fontFamily: "HelveticaNeue-Regular",
      fontWeight: 300,
      color: `${props?.palette?.fleetManagementPage?.violationListSubTextColor}`,
    }),
  },
  { index: 1 }
);
export default useStyles;
