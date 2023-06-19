import { makeStyles } from "@mui/styles";
import llaBanner from "../../assets/images/login-bg1.jpg";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles(() => ({
  root: (props: any) => ({
    background: props?.palette?.login?.pageBackgroundColor,
  }),
  loginBannerSection: (props: any) => ({
    backgroundImage: `url("${llaBanner}")`,
    background:
      props?.palette?.login?.loginBg,
    mixBlendMode: "hard-light",
    backdropFilter: "blur(42px)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  loginBannerTitle: (props: any) => ({
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: " 700",
    fontSize: "40px",
    lineHeight: "60px",
    color: props?.palette?.login?.loginBannerTitle,
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: "28px",
      lineHeight: "40px",
      fontWeight: " 600",
    },
    
  }),
  loginFormSection: (props: any) => ({
    backdropFilter: "blur(45px)",
    borderRadius: "24px",
    background: props?.palette?.login?.boxShadow,
    color: props?.palette?.login?.loginBannerTitle,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "1016px !important",
    padding: "80px",
    [muiTheme.breakpoints.down(3073)]: {
      maxWidth: "550px !important",
      padding: "60px 40px ",
    },
    [muiTheme.breakpoints.down(1921)]: {
      maxWidth: "550px !important",
      padding: "40px ",
    },
    [muiTheme.breakpoints.down(1153)]: {
      maxWidth: "550px !important",
      padding: "32px 20px ",
    },
    "&::before": {
      top: "0",
      right: "24px",
      width: "90%",
      height: "6px",
      content: `''`,
      position: "absolute",
      backgroundColor: props?.palette?.sidebar?.menuColor,
      borderBottomLeftRadius: "6px",
      borderBottomRightRadius: "6px",
      zIndex: "-1",
    },
  }),
  innerForm: (props: any) => ({
    // maxWidth: "440px !important",
  }),
  loginBannerBorder: (props: any) => ({}),
  loginBannerDescription: (props: any) => ({
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: " 500",
    fontSize: "20px",
    lineHeight: "30px",
    color: props?.palette?.login?.loginBannerTitle,
    marginTop: 45,
    textAlign: "center",
    [muiTheme.breakpoints.down(3073)]: {
      fontWeight: " 500",
      fontSize: "16px",
      lineHeight: "24px",
    },
  }),
  loginBannerContent: (props: any) => ({
    width: 510,
  }),
  logoSection: (props: any) => ({
    textAlign: "center",
    marginBottom: 54,
  }),
  welcomeSection: (props: any) => ({
    textAlign: "center",
    marginBottom: 67,
    [muiTheme.breakpoints.down(3073)]: {
      marginBottom: 37,
    },
    [muiTheme.breakpoints.down(1921)]: {
      marginBottom: 20,
    },
  }),
  incorrectCredential: () => ({
    position: "absolute",
    bottom: "-28px",
    color: "red",
    fontWeight: " 600",
  }),
  welcomeContent: (props: any) => ({
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: " 400",
    fontSize: "69px",
    lineHeight: "87px",
    color: props?.palette?.login?.loginBannerTitle,
    textAlign: "left",
    [muiTheme.breakpoints.down(3073)]: {
      fontWeight: "400",
      fontSize: "28px",
      lineHeight: "38px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: "18px",
      lineHeight: "28px",
      fontWeight: " 600",
    },
  }),
  formTitle: (props: any) => ({
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: " 700",
    fontSize: "70px",
    lineHeight: "96px",
    color: props?.palette?.login?.loginBannerTitle,
    marginBottom: 40,
    textTransform: "uppercase",
    [muiTheme.breakpoints.down(3073)]: {
      fontWeight: " 600",
      fontSize: "36px",
      lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: "28px",
      lineHeight: "38px",
      fontWeight: " 600",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: "28px",
      lineHeight: "38px",
      fontWeight: " 600",
      marginBottom: 16,
    },
  }),
  inputTitle: (props: any) => ({
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: " 500",
    fontSize: "30px",
    lineHeight: "36px",
    color: props?.palette?.login?.inputTitle,
    marginBottom: 24,
    [muiTheme.breakpoints.down(3073)]: {
      fontWeight: " 500",
      fontSize: "16px",
      lineHeight: "24px",
      marginBottom: 6
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontWeight: " 500",
      fontSize: "14px",
      lineHeight: "21px",
      marginBottom: 6
    },
  }),
  inputField: (props: any) => ({
    marginBottom: 67,
    "& .MuiInputBase-input": {
      fontFamily: `'Poppins', sans-serif`,
      fontWeight: " 500",
      fontSize: "40px",
      lineHeight: "48px",
      color: "white",
      padding: 36,
      "&::placeholder": {
        color: props?.palette?.login?.inputPlaceholder,
        opacity: 1,
      },
      [muiTheme.breakpoints.down(3073)]: {
        fontWeight: " 500",
        fontSize: "16px",
        lineHeight: "24px",
        padding: 16
      },
      [muiTheme.breakpoints.down(1921)]: {
        fontWeight: " 500",
        fontSize: "14px",
        lineHeight: "21px",
        padding: 16
      },
    },
    [muiTheme.breakpoints.down(3073)]: {
      marginBottom: 37,
    },
    [muiTheme.breakpoints.down(1921)]: {
      marginBottom: 20,
    },
  }),
  inputFieldPassword: (props: any) => ({
    marginBottom: 67,
    "& .MuiInputBase-input": {
      fontFamily: `'Poppins', sans-serif`,
      fontWeight: " 500",
      fontSize: "40px",
      lineHeight: "48px",
      color: "white",
      padding: 36,
      "&::placeholder": {
        color: props?.palette?.login?.inputPlaceholder,
        opacity: 1,
      },
      [muiTheme.breakpoints.down(3073)]: {
        fontWeight: " 500",
        fontSize: "16px",
        lineHeight: "24px",
        padding: 16
      },
      [muiTheme.breakpoints.down(1921)]: {
        fontWeight: " 500",
        fontSize: "14px",
        lineHeight: "21px",
        padding: 16
      },
    },
    [muiTheme.breakpoints.down(3073)]: {
      marginBottom: 37,
    },
    [muiTheme.breakpoints.down(1921)]: {
      marginBottom: 20,
    },
  }),
  radioButtonSection: (props: any) => ({
    marginBottom: 50,
    "& .MuiRadio-root": {
      "&.Mui-checked": {
        color: props?.palette?.login?.loginButton,
      },
    },
    "& .MuiFormControlLabel-label": {
      fontFamily: `'Poppins', sans-serif`,
      fontWeight: " 500",
      fontSize: "16px",
      lineHeight: "24px",
      color: props?.palette?.login?.inputPlaceholder,
    },
  }),
  loginButton: (props: any) => ({
    marginTop: 18,
    "& .MuiButtonBase-root": {
      background: props?.palette?.login?.loginButton,
      borderRadius: "5px",
      fontFamily: `'Poppins', sans-serif`,
      fontWeight: " 500",
      fontSize: "40px",
      lineHeight: "90px",
      color: props?.palette?.login?.loginBannerTitle,
      padding: 12,
      letterSpacing: " 0.2em",
      textTransform: "uppercase",
      [muiTheme.breakpoints.down(3073)]: {
        fontWeight: " 700",
        fontSize: "20px",
        lineHeight: "30px",
      },
      [muiTheme.breakpoints.down(1921)]: {
        fontWeight: " 700",
        fontSize: "16px",
        lineHeight: "21px",
      },
      "&:hover": {
        background: props?.palette?.login?.loginButton,
      },
    },
  }),
  copyRights: (props: any) => ({
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: " 500",
    fontSize: "16px",
    lineHeight: "24px",
    color: props?.palette?.login?.copyRight,
    position: "absolute",
    bottom: "38px",
    "& span": {
      color: props?.palette?.login?.loginBoxId + "!important",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontWeight: " 500",
      fontSize: "12px",
      lineHeight: "20px",
    },
  }),
  formikErrorClass: (props: any) => ({
    fontFamily: `'Poppins', sans-serif`,
    color: "red",
    padding: 0,
    margin: 0,
    paddingTop: 5,
    fontSize: 13,
    position: "absolute",
    fontWeight: " 500",
    bottom: "4px",
    left: 0,
  }),
  outlineInputField: (props: any) => ({
    position: "relative",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: props?.palette?.login?.loginBannerTitle,
    },
    "& .MuiOutlinedInput-root": {
      "&:hover": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: props?.palette?.login?.loginBannerTitle,
        },
      },
    },
  }),
  llaLogoSection: (props: any) => ({
    width: 122,
    margin: "0 auto",
    marginBottom: 48,
    [muiTheme.breakpoints.down(3073)]: {
      width: 100,
      margin: "0 auto",
      marginBottom: 28,
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
  formSection: (props: any) => ({
    textAlign: "center",
  }),
}));
export default useStyles;
