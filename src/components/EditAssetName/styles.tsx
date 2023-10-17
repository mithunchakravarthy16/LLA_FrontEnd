import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles(
  () => ({
    rootContainer : () => ({
      fontFamily: "HelveticaNeue-Regular",
    }),
    buttonSection: () => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    }),
    addOperations: () => ({
      "& .MuiButtonBase-root": {
        border: "2px solid #127caa",
        borderRadius: "50px",
        fontFamily: `'Open Sans', sans-serif`,
        fontSize: "1vw",
        color: "#127caa !important",
        textTransform: "capitalize",
        // width: "12vw",
        "&:hover": {
          border: "2px solid #127caa",
          color: "#127caa !important",
        },
        "&:-webkit-autofill::first-line": {
          fontSize: "1vw",
        },
      },
    }),
    plusIconClass: () => ({
      width: "1.2vw",
    }),
    addOperationHeading: () => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginRight: "4%",
      "& img": {
        cursor: "pointer",
      },
    }),
    addOperation: () => ({
      // fontFamily: `'Open Sans', sans-serif`,
      fontSize: "0.9vw",
      fontWeight: 600,
      color: "rgb(51, 51, 51)",
    }),
    addOperationSection: () => ({
      padding: "4%",
    }),
    customInput: () => ({
      "& .MuiOutlinedInput-input": {
        padding: "3.8% !important",
        fontSize: "0.7000000000000001vw",
        lineHeight: "31px",
      },
    }),
    customSelect: () => ({
      "& .MuiFormControl-root": {
        width: "100%",
      },
      "& .MuiOutlinedInput-input": {
        padding: "2.5% !important",
        fontSize: "0.7000000000000001vw",
        lineHeight: "31px",
      },
      "& .MuiSvgIcon-root": {
        fontSize: "1.1vw",
      },
    }),
    timeSection: () => ({
      display: "flex",
      alignItems: "center",
      marginTop: "4%",
    }),
    addOperationButton: () => ({
      flex: "1",
      justifyContent: "flex-end",
      display: " flex",
      padding: "10% 0",
      "& .MuiButton-outlined": {
        width: "6vw",
        fontFamily: "Open Sans",
        fontSize: "0.6vw",
        fontWeight: "700",
        letterSpacing: "0em",
        textAlign: "left",
        textTransform: "capitalize",
        color: "rgba(196, 196, 196, 1)",
        border: "1px solid rgba(196, 196, 196, 1) !important",
        marginRight: "10%",
      },
      "& .MuiButton-contained": {
        width: "6vw",
        fontFamily: "Open Sans",
        fontSize: "0.6vw",
        fontWeight: "700",
        letterSpacing: "0em",
        textAlign: "left",
        textTransform: "capitalize",
        background: "rgb(242, 101, 34)",
        color: "white",
      },
    }),
    fieldTitle: () => ({
      // fontFamily: `'Open Sans', sans-serif`,
      fontSize: "0.7000000000000001vw",
      fontWeight: 400,
      color: "rgba(144, 144, 144, 1)",
      marginBottom: "3%",
      marginTop: "7%",
    }),
  }),
  { index: 1 }
);
export default useStyles;
