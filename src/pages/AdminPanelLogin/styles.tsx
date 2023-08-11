/** @format */

import { makeStyles } from "@mui/styles";
import llaBanner from "../../assets/images/admin-login-bg.jpg";
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
    alignItems: "center",
    justifyContent: "center",
  }),
  innerPaddingBox: (props: any) => ({
    // paddingTop: "12vh",
  }),
  loginFormSection: (props: any) => ({
    backdropFilter: "blur(0px)",
    borderRadius: "5px",
    background: "#FFFFFF", //rgba(51, 51, 51, 0.6)
    color: props?.palette?.login?.loginBannerTitle,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "28vw !important",
    padding: "2.2vw",
    margin: "0 auto",
  }),
  innerForm: (props: any) => ({}),
  welcomeSection: (props: any) => ({}),
  incorrectCredential: () => ({
    position: "absolute",
    bottom: "-2vw",
    color: "red",
    fontSize: "0.9vw",
    fontFamily: `'Poppins', sans-serif`,
  }),
  welcomeContent: (props: any) => ({
    fontFamily: `'Poppins', sans-serif`,
    fontSize: "1.3vw",
    fontWeight: 700,
    color: "#3A345E",
    textAlign: "left",
    marginBottom: "5%",
  }),

  forgotPassword: (props: any) => ({
    fontFamily: "HelveticaNeue-Regular",
    fontWeight: " 400",
    fontSize: "0.8vw",
    color: props?.palette?.login?.inputTitleColor,
    cursor: "pointer",
  }),

  radioButtonSection: (props: any) => ({
    marginBottom: " 6%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: `'Poppins', sans-serif`,

    "& .MuiRadio-root": {
      "&.Mui-checked": {
        color: props?.palette?.login?.loginButton,
      },
    },
    "& .MuiFormControlLabel-label": {
      fontFamily: `'Poppins', sans-serif`,
      fontWeight: " 500",
      fontSize: "0.8vw",
      color: props?.palette?.login?.inputTitleColor,
    },
  }),

  atttherate: (props: any) => ({
    width: "1vw",
    position: "absolute",
    right: "2%",
    top: "33%",
    transform: " translate(-50%, -50%)",
  }),

  inputTitle: (props: any) => ({
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: " 500",
    fontSize: "0.8999999999999999vw",
    lineHeight: "36px",
    color: "#4A5568",
    marginBottom: "1%",
  }),
  eyeOff: (props: any) => ({
    width: "1vw",
    position: "absolute",
    right: "2%",
    top: "40%",
    transform: " translate(-50%, -50%)",
    cursor: "pointer",
  }),
  inputField: (props: any) => ({
    marginBottom: "6%",
    "& .MuiInputBase-input": {
      fontFamily: `'Poppins', sans-serif`,
      fontSize: "0.8vw",
      lineHeight: "48px",
      color: "#2D3748",
      // border: "1px solid #93A8C1 !important",
      background: "#FFFFFF !important",
      WebkitBoxShadow: "#FFFFFF !important",
      padding: "4%",
      "&::placeholder": {
        color: props?.palette?.login?.inputPlaceholder,
        opacity: 0.5,
      },
    },
  }),
  inputFieldPassword: (props: any) => ({
    marginBottom: "5%",
    "& .MuiInputBase-input": {
      fontFamily: `'Poppins', sans-serif`,
      fontSize: "0.8vw",
      lineHeight: "48px",
      color: "#2D3748",
      padding: "4%",
      "&::placeholder": {
        color: props?.palette?.login?.inputPlaceholder,
        opacity: 0.5,
      },
    },
  }),
  loginButton: (props: any) => ({
    marginTop: 18,
    "& .MuiButtonBase-root": {
      background: "#0D0F36",
      borderRadius: "5px",
      fontFamily: `'Poppins', sans-serif`,
      fontSize: "1vw",
      color: props?.palette?.login?.loginBannerTitle,
      padding: 16,
      textTransform: "capitalize",
      "&:hover": {
        background: "#0D0F36",
      },
      "&:-webkit-autofill::first-line": {
        fontSize: "1vw",
      },
    },
  }),
  formikErrorClass: (props: any) => ({
    fontFamily: `'Poppins', sans-serif`,
    color: "red",
    padding: 0,
    margin: 0,
    paddingTop: 5,
    fontSize: "0.7vw",
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
    marginBottom: "6vh",
    "& img": {
      width: "15.5vw",
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
    color: "#333333",
    fontSize: "1vw",
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: 500,
  }),
}));
export default useStyles;
