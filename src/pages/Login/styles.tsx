/** @format */

import { makeStyles } from "@mui/styles";
import llaBanner from "../../assets/images/login-bg1.jpg";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles(() => ({
  root: (props: any) => ({
    background: props?.palette?.login?.pageBackgroundColor,
  }),
  loginBannerSection: (props: any) => ({
    backgroundImage: `url("${llaBanner}")`,
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
    paddingTop: "12vh",
  }),
  loginFormSection: (props: any) => ({
    backdropFilter: "blur(0px)",
    borderRadius: "24px",
    background: "#33333360", //rgba(51, 51, 51, 0.6)
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
      padding: "40px ",
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
    fontSize: '0.9vw',
    fontFamily: "HelveticaNeue-Regular",

  }),
  welcomeContent: (props: any) => ({
    fontFamily: "HelveticaNeue-Regular",
    fontSize: "56px",
    lineHeight: "82px",
    color: "#ffffff",
    textAlign: "left",
    [muiTheme.breakpoints.down(3073)]: {
      fontFamily: "HelveticaNeue-Regular",
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
    fontFamily: "HelveticaNeue-Regular",
    fontWeight: " 500",
    fontSize: "30px",
    lineHeight: "36px",
    color: "#FF7A00",
    marginBottom: 24,
    [muiTheme.breakpoints.down(3073)]: {
      fontFamily: "HelveticaNeue-Regular",
      fontWeight: " 500",
      fontSize: "30px",
      lineHeight: "36px",
      color: "#FF7A00",
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
      color: "white",
      
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
        color: "white",
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
      color: "white",
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
        color: "white",
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
      fontFamily: "HelveticaNeue-Regular",
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
    fontFamily: "HelveticaNeue-Regular",
    color: "red",
    padding: 0,
    margin: 0,
    paddingTop: 5,
    fontSize: '0.7vw',
    position: "absolute",
    fontWeight: " 500",
    bottom: "0.2vw",
    left: 0,
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
    width: 200,
    margin: "0 auto",
    marginBottom: 32,
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
}));
export default useStyles;
