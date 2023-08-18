/** @format */

import { makeStyles } from "@mui/styles";
import llaBanner from "../../assets/images/login-bg1.jpg";
import llaLightBanner from "../../assets/lightThemeBanner.svg";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles(() => ({
  root: (props: any) => ({
    background: props?.palette?.login?.pageBackgroundColor,
  }),
  loginBannerSection: (props: any) => ({
    backgroundImage: `url("${
      props.selectedTheme === "light" ? llaLightBanner : llaBanner
    }")`,
    background: props?.palette?.login?.loginBg,
    mixBlendMode: "hard-light",
    backdropFilter: "blur(42px)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
  }),
  innerPaddingBox: (props: any) => ({
    paddingTop: "14vh",
    [muiTheme.breakpoints.down(3841)]: {
      paddingTop: "7vh",
    },
    [muiTheme.breakpoints.down(3073)]: {
      paddingTop: "16vh",
    },
    [muiTheme.breakpoints.down(1793)]: {
      paddingTop: "23vh",
    },
    [muiTheme.breakpoints.down(1281)]: {
      paddingTop: "15vh",
    },
    [muiTheme.breakpoints.down(1025)]: {
      paddingTop: "8vh",
    },
  }),
  loginFormSection: (props: any) => ({
    backdropFilter: "blur(0px)",
    borderRadius: "24px",
    background: props?.palette?.login?.bg, //rgba(51, 51, 51, 0.6)
    color: props?.palette?.login?.loginBannerTitle,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "856px !important",
    padding: "80px",
    margin: "0 auto",
    [muiTheme.breakpoints.down(3073)]: {
      width: "856px !important",
      padding: "100px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      maxWidth: "460px !important",
      padding: "40px ",
    },
    [muiTheme.breakpoints.down(1921)]: {
      maxWidth: "460px !important",
      padding: "30px ",
    },
    [muiTheme.breakpoints.down(1281)]: {
      maxWidth: "460px !important",
      padding: "16px ",
    },
    [muiTheme.breakpoints.down(1153)]: {
      maxWidth: "460px !important",
      padding: "32px 20px ",
    },
    "&::before": {
      top: "0",
      width: "90%",
      height: "8px",
      content: `''`,
      position: "absolute",
      background: props?.palette?.login?.boxTopLineStyle,
      borderBottomLeftRadius: "6px",
      borderBottomRightRadius: "6px",
      zIndex: "-1",
    },
  }),
  innerForm: (props: any) => ({}),
  welcomeSection: (props: any) => ({
    textAlign: "center",
    marginBottom: 67,
    [muiTheme.breakpoints.down(3073)]: {
      marginBottom: 37,
    },
    [muiTheme.breakpoints.down(2049)]: {
      marginBottom: 27,
    },
    [muiTheme.breakpoints.down(1921)]: {
      marginBottom: 20,
    },
    [muiTheme.breakpoints.down(1537)]: {
      marginBottom: 6,
    },
  }),
  incorrectCredential: () => ({
    position: "absolute",
    bottom: "-2vw",
    color: "red",
    fontSize: "0.9vw",
    fontFamily: "HelveticaNeue-Medium",
  }),
  welcomeContent: (props: any) => ({
    fontFamily: "HelveticaNeue-Medium",
    fontSize: "56px",
    lineHeight: "82px",
    color: props?.palette?.login?.welcomeTitle,
    textAlign: "left",
    [muiTheme.breakpoints.down(3073)]: {
      fontFamily: "HelveticaNeue-Medium",
      fontSize: "56px",
      lineHeight: "82px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: "24px",
      lineHeight: "30px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: "18px",
      lineHeight: "28px",
    },
  }),

  inputTitle: (props: any) => ({
    fontFamily: "HelveticaNeue-Medium",
    fontWeight: " 500",
    fontSize: "30px",
    lineHeight: "36px",
    color: props?.palette?.login?.loginTitle,
    marginBottom: 24,
    [muiTheme.breakpoints.down(3073)]: {
      fontFamily: "HelveticaNeue-Medium",
      fontWeight: " 500",
      fontSize: "30px",
      lineHeight: "36px",
      // color: props?.palette?.login?.loginTitle,
      marginBottom: 24,
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontWeight: " 500",
      fontSize: "16px",
      lineHeight: "24px",
      marginBottom: 12,
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontWeight: " 500",
      fontSize: "14px",
      lineHeight: "21px",
      marginBottom: 6,
    },
  }),
  inputField: (props: any) => ({
    marginBottom: 67,
    "& .MuiInputBase-input": {
      fontFamily: "HelveticaNeue-Regular",
      fontSize: "0.8vw",
      lineHeight: "48px",
      color: `${props?.palette?.login?.inputPlaceholder} !important`,

      padding: 36,
      "&::placeholder": {
        color: props?.palette?.login?.inputPlaceholder,
        opacity: 0.5,
      },
      [muiTheme.breakpoints.down(3073)]: {
        fontFamily: "HelveticaNeue-Regular",
        fontWeight: " 500",
        fontSize: "40px",
        lineHeight: "48px",
        // color: props?.palette?.login?.inputPlaceholder,
        padding: 36,
      },
      [muiTheme.breakpoints.down(2049)]: {
        fontWeight: " 500",
        fontSize: "22px",
        lineHeight: "30px",
        padding: 20,
      },
      [muiTheme.breakpoints.down(1921)]: {
        fontWeight: " 500",
        fontSize: "14px",
        lineHeight: "21px",
        padding: 16,
      },
      [muiTheme.breakpoints.down(1681)]: {
        fontWeight: " 500",
        fontSize: "12px",
        lineHeight: "19px",
        padding: 14,
      },
    },
    [muiTheme.breakpoints.down(3073)]: {
      marginBottom: 67,
    },
    [muiTheme.breakpoints.down(2049)]: {
      marginBottom: 32,
    },
    [muiTheme.breakpoints.down(1921)]: {
      marginBottom: 20,
    },
    [muiTheme.breakpoints.down(1537)]: {
      marginBottom: 6,
    },
  }),
  inputFieldPassword: (props: any) => ({
    marginBottom: 67,
    "& .MuiInputBase-input": {
      fontFamily: "HelveticaNeue-Regular",
      fontSize: "0.8vw",
      lineHeight: "48px",
      color: `${props?.palette?.login?.inputPlaceholder} !important`,
      padding: 36,
      "&::placeholder": {
        color: props?.palette?.login?.inputPlaceholder,
        opacity: 0.5,
      },
      [muiTheme.breakpoints.down(3073)]: {
        fontFamily: "HelveticaNeue-Regular",
        fontWeight: " 500",
        fontSize: "40px",
        lineHeight: "48px",
        // color: props?.palette?.login?.inputPlaceholder,
        padding: 36,
      },
      [muiTheme.breakpoints.down(2049)]: {
        fontWeight: " 500",
        fontSize: "22px",
        lineHeight: "30px",
        padding: 20,
      },
      [muiTheme.breakpoints.down(1921)]: {
        fontWeight: " 500",
        fontSize: "14px",
        lineHeight: "21px",
        padding: 16,
      },
      [muiTheme.breakpoints.down(1681)]: {
        fontWeight: " 500",
        fontSize: "12px",
        lineHeight: "19px",
        padding: 14,
      },
    },
    [muiTheme.breakpoints.down(3073)]: {
      marginBottom: 67,
    },
    [muiTheme.breakpoints.down(2049)]: {
      marginBottom: 32,
    },
    [muiTheme.breakpoints.down(1921)]: {
      marginBottom: 20,
    },
    [muiTheme.breakpoints.down(1537)]: {
      marginBottom: 6,
    },
  }),
  loginButton: (props: any) => ({
    marginTop: 18,
    "& .MuiButtonBase-root": {
      background: "#F26522",
      borderRadius: "5px",
      fontFamily: "HelveticaNeue-Medium",
      fontSize: "32px",
      lineHeight: "82px",
      color: props?.palette?.login?.loginBannerTitle,
      padding: 12,
      letterSpacing: " 0.2em",
      textTransform: "uppercase",
      [muiTheme.breakpoints.down(3073)]: {
        fontSize: "32px",
        lineHeight: "82px",
      },
      [muiTheme.breakpoints.down(2049)]: {
        fontSize: "22px",
        lineHeight: "40px",
      },
      [muiTheme.breakpoints.down(1921)]: {
        fontSize: "16px",
        lineHeight: "21px",
      },
      "&:hover": {
        background: "#F26522",
      },
      "&:-webkit-autofill::first-line": {
        fontSize: "40px",
        lineHeight: "90px",
      },
    },
  }),
  formikErrorClass: (props: any) => ({
    fontFamily: "HelveticaNeue-Medium",
    color: "red",
    padding: 0,
    margin: 0,
    paddingTop: 5,
    fontSize: "0.7vw",
    position: "absolute",
    fontWeight: " 500",
    bottom: "9%",
    left: 0,
    [muiTheme.breakpoints.down(1681)]: {
      bottom: "0%",
    },
    [muiTheme.breakpoints.down(1537)]: {
      bottom: "-11%",
    },
  }),
  outlineInputField: (props: any) => ({
    position: "relative",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: props?.palette?.login?.loginBorder,
    },
    "& .MuiOutlinedInput-root": {
      "&:hover": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: props?.palette?.login?.loginBorder,
        },
      },
    },
  }),
  llaLogoSection: (props: any) => ({
    visibility: "hidden",
    width: 200,
    margin: "0 auto",
    marginBottom: 32,
    height: "5vw",
    [muiTheme.breakpoints.down(3073)]: {
      width: 200,
      margin: "0 auto",
      marginBottom: 32,
    },
    [muiTheme.breakpoints.down(2049)]: {
      width: 100,
      margin: "0 auto",
      marginBottom: 18,
    },
    [muiTheme.breakpoints.down(1921)]: {
      width: 100,
      margin: "0 auto",
      marginBottom: 18,
    },
    [muiTheme.breakpoints.down(1153)]: {
      width: 70,
      margin: "0 auto",
      marginBottom: 12,
    },
    "& img": {
      maxWidth: "100%",
    },
  }),
  formTitle: (props: any) => ({
    "& img": {
      maxWidth: "100%",
      margin: "0 auto",
      [muiTheme.breakpoints.up(3839)]: {
        maxWidth: "100%",
        margin: "0 auto",
        marginBottom: 70,
      },
      [muiTheme.breakpoints.down(3073)]: {
        maxWidth: "100%",
        margin: "0 auto",
        marginBottom: 70,
      },
      [muiTheme.breakpoints.down(2049)]: {
        maxWidth: "50%",
        margin: "0 auto",
        marginBottom: 28,
      },
      [muiTheme.breakpoints.down(1921)]: {
        maxWidth: "50%",
        margin: "0 auto",
        marginBottom: 28,
      },
      [muiTheme.breakpoints.down(1153)]: {
        maxWidth: "40%",
        margin: "0 auto",
        marginBottom: 18,
      },
    },
  }),
  formSection: (props: any) => ({
    textAlign: "center",
    letterSpacing: "4px",
  }),
  adminPanel: (props: any) => ({
    display: "flex",
    justifyContent: "center",
    padding: "30px 0 0 0",
    cursor: "pointer",
    color: "#FFFFFF",
    fontSize: "1vw",
    fontFamily: "HelveticaNeue-Medium",
    fontWeight: 500,
  }),
}));
export default useStyles;
