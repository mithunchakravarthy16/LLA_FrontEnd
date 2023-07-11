/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles(
  {
    violationListContainer: (props: any) => ({
      height: "95%",
      overflowY: "auto",

      // "&::-webkit-scrollbar": {
      //   width: 0,
      // },
    }),
    violationHeading: (props: any) => ({
      height: "5%",
      fontSize: "0.9vw",
      fontFamily: "HelveticaNeue-Regular",
    }),
    listItemTitle: (props: any) => ({
      fontSize: "0.9vw",
      fontFamily: "HelveticaNeue-Regular",
      lineHeight: "1vh",
    }),
    listItemDescription: (props: any) => ({
      fontSize: "0.7vw",
      lineHeight: "2vh",
      fontStyle: "italic",
      fontFamily: "HelveticaNeue-Regular",
      fontWeight: 300,
    }),
  },
  { index: 1 }
);
export default useStyles;
