import { color } from "@mui/system";
import colorCodes from "./colors";

console.log("colorCodes.colorWhite", colorCodes.colorWhite)

let theme = {
  defaultTheme: { 
    palette: {     
      sidebar: {
        sidebarBg: colorCodes.darkBlackShade,
           
      },  
      notification:{
        listItemBorder: colorCodes?.darkGreyBalckShade,
        listItemLabel: colorCodes.greyColor,
        listItemLabelSelected: colorCodes.tabSelectedOrange,
        tabListCountColor:colorCodes?.greyColor2,
        listItemContent: colorCodes.colorWhite,
        notificationPanelTitle: colorCodes?.colorWhite,
        expansionListItemBg: colorCodes?.notificationCalloutBg,
        expansionMarkerListBg: colorCodes?.notificationCalloutBg
      },
      login: {
        boxTopLineStyle: colorCodes?.orngeLinearGradient
      },
      flippingCard: {
        background: colorCodes?.flippingCardBgDark,
        textColor: colorCodes?.flippingCardDarkTextColor,
      }
    },
    spacing: 5,
    typography: { fontFamily: "Arial" },
  },
  lightTheme: {
    palette: {     
      sidebar: {
        sidebarBg: colorCodes.sunRiseOrange,    
      },
      notification:{
        listItemBorder: colorCodes.colorWhite,
        listItemLabel: colorCodes.greyColor,
        listItemLabelSelected: colorCodes.tabSelectedOrange,
        tabListCountColor:colorCodes?.greyColor2,
        listItemContent: colorCodes.darkBlackShade,
        notificationPanelTitle: colorCodes?.darkBlackShade,
        expansionListItemBg: colorCodes?.notificationExpandedBgLight,
        expansionMarkerListBg: colorCodes?.notificationExpandedBgLight
      },
      flippingCard: {
        background: colorCodes?.flippingCardBgLight,
        textColor: colorCodes?.darkBlackShade,
      },
      login: {
        boxTopLineStyle: colorCodes?.orngeLinearGradient
      }
    },
    spacing: 5,
    typography: { fontFamily: "Arial" },
  },
  darkTheme: {
    palette: {     
      sidebar: {
        sidebarBg: colorCodes.colorBlack      
      },    
      notification:{
        listItemBorder: colorCodes?.darkGreyBalckShade,
        listItemLabel: colorCodes.greyColor,
        listItemLabelSelected: colorCodes.tabSelectedOrange,
        tabListCountColor:colorCodes?.greyColor2,
        listItemContent: colorCodes.colorWhite,
        notificationPanelTitle: colorCodes?.colorWhite,
        expansionListItemBg: colorCodes?.notificationCalloutBg,
        expansionMarkerListBg: colorCodes?.notificationCalloutBg
      },
      flippingCard: {
        background: colorCodes?.flippingCardBgDark,
        textColor: colorCodes?.flippingCardDarkTextColor,
      },
      login: {
        boxTopLineStyle: colorCodes?.orngeLinearGradient
      }
    },
    spacing: 5,
    typography: { fontFamily: "Arial" },
  },
};

export default theme;
