import { color } from "@mui/system";
import colorCodes from "./colors";

let theme = {
  defaultTheme: {
    palette: {
      login: {
        loginBannerTitle: colorCodes.colorWhite,
        inputPlaceholder: colorCodes.lightGrey13,
        copyRight: colorCodes.colorBlack,
        loginButton: colorCodes.orangeTwo,
        loginBoxId: colorCodes.lightSkyBlue,
        textColor: colorCodes.lightGrey2,
        boxShadow: colorCodes.rgbaOne,
        inputTitle: colorCodes.orangeTwo,
        loginBg: colorCodes.linearBackgroundOne,
      },
      sidebar: {
        menuActiveColor: colorCodes.orangeOne,
        menuColor: colorCodes.darkGreyBlueOne,
        sidebarBg: colorCodes.darkGreyBlueTwo,
        avatharColor: colorCodes.colorWhite,
      },
      googleMap: {
        mapBgColor: colorCodes.darkBlue,
        roadColor: colorCodes.lightGrey1,
        textColor: colorCodes.darkGrey,
        riverColor: colorCodes.blueBlack,
      },
      notification: {
        notificationBg: colorCodes?.linearGradientBackground,
        notificationBoxShadow: colorCodes?.linearGradientTwo,
        listItemBg: colorCodes?.darkBlueShade,
        listItemBorder: colorCodes?.blueGreyShade,
        eventColor: colorCodes?.greenColor,
        incidentColor: colorCodes?.redColor,
        oprAlertColor: colorCodes?.orangeColor,
        tabTextColor: colorCodes?.greyColor,
        takeActionButtonColor: colorCodes?.orangeShadeRed,
        listTextColor: colorCodes?.colorWhite,
      },
    },

    spacing: 5,
    typography: { fontFamily: "Arial" },
  },
  lightTheme: {
    palette: {
      login: {
        loginBannerTitle: colorCodes.colorWhite,
        inputPlaceholder: colorCodes.lightGrey13,
        copyRight: colorCodes.colorBlack,
        loginButton: colorCodes.orangeTwo,
        loginBoxId: colorCodes.lightSkyBlue,
        textColor: colorCodes.lightGrey2,
        boxShadow: colorCodes.rgbaOne,
        inputTitle: colorCodes.orangeTwo,
        loginBg: colorCodes.linearBackgroundOne,
      },
      sidebar: {
        menuActiveColor: colorCodes.orangeOne,
        menuColor: colorCodes.darkGreyBlueOne,
        sidebarBg: colorCodes.darkGreyBlueTwo,
        avatharColor: colorCodes.colorWhite,
      },
      googleMap: {
        mapBgColor: colorCodes.darkBlue,
        roadColor: colorCodes.lightGrey1,
        textColor: colorCodes.darkGrey,
        riverColor: colorCodes.blueBlack,
      },
      notification: {
        notificationBg: colorCodes?.linearGradientBackground,
        notificationBoxShadow: colorCodes?.linearGradientTwo,
        listItemBg: colorCodes?.darkBlueShade,
        listItemBorder: colorCodes?.blueGreyShade,
        eventColor: colorCodes?.greenColor,
        incidentColor: colorCodes?.redColor,
        oprAlertColor: colorCodes?.orangeColor,
        tabTextColor: colorCodes?.greyColor,
        takeActionButtonColor: colorCodes?.orangeShadeRed,
        listTextColor: colorCodes?.colorWhite,
      },
    },

    spacing: 5,
    typography: { fontFamily: "Arial" },
  },
  darkTheme: {
    palette: {
      login: {
        loginBannerTitle: colorCodes.colorBlack,
        inputPlaceholder: colorCodes.lightGrey13,
        copyRight: colorCodes.colorBlack,
        loginButton: colorCodes.orangeTwo,
        loginBoxId: colorCodes.colorWhite,
        textColor: colorCodes.lightGrey2,
        boxShadow: colorCodes.rgbaOne,
        inputTitle: colorCodes.orangeTwo,
        loginBg: colorCodes.linearBackgroundOne,
      },
      sidebar: {
        menuActiveColor: colorCodes.orangeOne,
        menuColor: colorCodes.darkGreyBlueOne,
        sidebarBg: colorCodes.darkGreyBlueTwo,
        avatharColor: colorCodes.colorWhite,
      },
      googleMap: {
        mapBgColor: colorCodes.darkBlue,
        roadColor: colorCodes.lightGrey1,
        textColor: colorCodes.darkGrey,
        riverColor: colorCodes.blueBlack,
      },
      notification: {
        notificationBg: colorCodes?.linearGradientBackground,
        notificationBoxShadow: colorCodes?.linearGradientTwo,
        listItemBg: colorCodes?.darkBlueShade,
        listItemBorder: colorCodes?.blueGreyShade,
        eventColor: colorCodes?.greenColor,
        incidentColor: colorCodes?.redColor,
        oprAlertColor: colorCodes?.orangeColor,
        tabTextColor: colorCodes?.greyColor,
        takeActionButtonColor: colorCodes?.orangeShadeRed,
        listTextColor: colorCodes?.colorWhite,
      },
    },

    spacing: 5,
    typography: { fontFamily: "Arial" },
  },
};

export default theme;
