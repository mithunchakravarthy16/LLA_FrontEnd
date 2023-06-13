import { color } from "@mui/system";
import colorCodes from "./colors";

let theme = {
  defaultTheme: {
    palette: {
      login: {
        pageBackgroundColor: colorCodes.colorGreenTwo,
        loginBtnColor: "",
        titleColor: "",
        forgotPwdColor: "",
        loginBannerTitle: colorCodes.colorWhite,
        loginFormBg: colorCodes.colorWhite,
        loginBannerDescription: colorCodes.colorWhite,
        welcomeContent: colorCodes.darkGreyOne,
        loginFormTitle: colorCodes.darkGreyTwo,
        inputTitleColor: colorCodes.lightGrey4,
        inputPlaceholder: colorCodes.lightGrey13,
        copyRight: colorCodes.colorBlack,
        loginButton: colorCodes.colorBlue,
        loginBoxId: colorCodes.lightSkyBlue,
        loginTextColor: colorCodes.lightGrey1,
        textColor: colorCodes.lightGrey2,
        boxShadow: colorCodes.rgbaOne,
      },
      sidebar:{
        menuActiveColor: colorCodes.orangeOne,
        menuColor:colorCodes.darkGreyBlueOne,
        sidebarBg:colorCodes.darkGreyBlueTwo,
        avatharColor: colorCodes.colorWhite

      },
    },
    
    spacing: 5,
    typography: { fontFamily: "Arial" },
  },
  lightTheme: {
    palette: {
      login: {
        pageBackgroundColor: colorCodes.colorGreenThree,
        loginBtnColor: "",
        titleColor: "",
        forgotPwdColor: "",
        loginBannerTitle: colorCodes.colorWhite,
        loginFormBg: colorCodes.colorWhite,
        loginBannerDescription: colorCodes.colorWhite,
        welcomeContent: colorCodes.darkGreyOne,
        loginFormTitle: colorCodes.darkGreyTwo,
        inputTitleColor: colorCodes.lightGrey4,
        inputPlaceholder: colorCodes.lightGrey13,
        copyRight: colorCodes.colorBlack,
        loginButton: colorCodes.colorBlue,
        loginBoxId: colorCodes.lightSkyBlue,
        loginTextColor: colorCodes.lightGrey3,
        textColor: colorCodes.lightGrey2,
        boxShadow: colorCodes.rgbaOne,
      },
      sidebar:{
        menuActiveColor: colorCodes.orangeOne,
        menuColor:colorCodes.darkGreyBlueOne,
        sidebarBg:colorCodes.darkGreyBlueTwo,
        avatharColor: colorCodes.colorWhite

      },
    },
    
    spacing: 5,
    typography: { fontFamily: "Arial" },
  },
  darkTheme: {
    palette: {
      login: {
        pageBackgroundColor: colorCodes.lightYellow,
        loginBtnColor: "",
        titleColor: "",
        forgotPwdColor: "",
        loginBannerTitle: colorCodes.colorBlack,
        loginFormBg: colorCodes.colorWhite,
        loginBannerDescription: colorCodes.colorWhite,
        welcomeContent: colorCodes.darkGreyOne,
        loginFormTitle: colorCodes.darkGreyTwo,
        inputTitleColor: colorCodes.lightGrey4,
        inputPlaceholder: colorCodes.lightGrey13,
        copyRight: colorCodes.colorBlack,
        loginButton: colorCodes.colorBlue,
        loginBoxId: colorCodes.colorWhite,
        loginTextColor: colorCodes.darkGrey13,
        textColor: colorCodes.lightGrey2,
        boxShadow: colorCodes.rgbaOne,
      },
      sidebar:{
        menuActiveColor: colorCodes.orangeOne,
        menuColor:colorCodes.darkGreyBlueOne,
        sidebarBg:colorCodes.darkGreyBlueTwo,
        avatharColor: colorCodes.colorWhite
      },
    },
    
    spacing: 5,
    typography: { fontFamily: "Arial" },
  },
};

export default theme;
