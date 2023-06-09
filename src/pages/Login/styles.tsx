import { makeStyles } from "@mui/styles";
import virtualIOTBanner from "../../assets/login-bg.svg";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles(() => ({
  root: (props: any) => ({
    background: props?.palette?.login?.pageBackgroundColor,
  }),
  loginBannerSection: (props: any) => ({
    // backgroundImage: `url("${virtualIOTBanner}")`,
    background: `linear-gradient(
    rgba(0, 15, 34, 0.7),
    rgba(3, 94, 136, 0.7)
  )`,
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
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: "28px",
      lineHeight: "40px",
      fontWeight: " 600",
    },
  }),
  loginFormSection: (props: any) => ({
    background: props?.palette?.login?.boxShadow,
    color: props?.palette?.login?.loginBannerTitle,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: `0px 4px 15px ${props?.palette?.login?.boxShadow}`,
    borderRadius: " 5px",
    width: "540px !important",
    padding: "30px",
    [muiTheme.breakpoints.down(1025)]: {
      maxWidth: "350px !important",
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
    color: props?.palette?.login?.loginBannerDescription,
    marginTop: 45,
    textAlign: "center",
    [muiTheme.breakpoints.down(1025)]: {
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
    marginBottom: 36,
  }),
  incorrectCredential: () => ({
    position: "absolute",
    bottom: "-28px",
    color: "red",
    fontWeight: " 600",
  }),
  welcomeContent: (props: any) => ({
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: " 500",
    fontSize: "20px",
    lineHeight: "24px",
    color: props?.palette?.login?.loginBannerDescription,
    textAlign: "center",
    [muiTheme.breakpoints.down(1025)]: {
      fontWeight: " 500",
      fontSize: "13px",
      lineHeight: "20px",
    },
  }),
  formTitle: (props: any) => ({
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: " 700",
    fontSize: "36px",
    lineHeight: "45px",
    color: props?.palette?.login?.loginBannerDescription,
    marginBottom: 35,
    [muiTheme.breakpoints.down(1025)]: {
      fontWeight: " 600",
      fontSize: "24px",
      lineHeight: "36px",
    },
  }),
  inputTitle: (props: any) => ({
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: " 500",
    fontSize: "16px",
    lineHeight: "24px",
    color: props?.palette?.login?.loginBannerDescription,
    marginBottom: 14,
    [muiTheme.breakpoints.down(1025)]: {
      fontWeight: " 500",
      fontSize: "13px",
      lineHeight: "20px",
    },
  }),
  inputField: (props: any) => ({
    marginBottom: 30,
    "& .MuiInputBase-input": {
      fontFamily: `'Poppins', sans-serif`,
      fontWeight: " 500",
      fontSize: "16px",
      lineHeight: "24px",
      color: props?.palette?.login?.welcomeContent,
      "&::placeholder": {
        color: props?.palette?.login?.inputPlaceholder,
        opacity: 1,
      },
      [muiTheme.breakpoints.down(1025)]: {
        fontWeight: " 500",
        fontSize: "13px",
        lineHeight: "20px",
      },
    },
  }),
  inputFieldPassword: (props: any) => ({
    marginBottom: 30,
    "& .MuiInputBase-input": {
      fontFamily: `'Poppins', sans-serif`,
      fontWeight: " 500",
      fontSize: "16px",
      lineHeight: "24px",
      color: props?.palette?.login?.welcomeContent,
      "&::placeholder": {
        color: props?.palette?.login?.inputPlaceholder,
        opacity: 1,
      },
      [muiTheme.breakpoints.down(1025)]: {
        fontWeight: " 500",
        fontSize: "13px",
        lineHeight: "20px",
      },
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
      fontSize: "16px",
      lineHeight: "27px",
      color: props?.palette?.login?.loginBannerDescription,
      textTransform: "Capitalize",
      padding: 12,
      [muiTheme.breakpoints.down(1025)]: {
        fontWeight: " 500",
        fontSize: "13px",
        lineHeight: "20px",
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
    [muiTheme.breakpoints.down(1025)]: {
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
      borderColor: props?.palette?.login?.loginBannerDescription,
    },
    "& .MuiOutlinedInput-root": {
      "&:hover": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: props?.palette?.login?.loginBannerDescription,
        },
      },
    },
  }),
}));
export default useStyles;
