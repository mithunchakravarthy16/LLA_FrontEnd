import { color } from "@mui/system";
import colorCodes from "./colors";

let theme = {
  defaultTheme: { 
    palette: {     
      sidebar: {
        sidebarBg: colorCodes.darkBlackShade,
           
      },  
      notification:{
        notificationBg: colorCodes?.darkBlack,
        notificationBoxShadow: colorCodes?.notificationPanelShadowColor,
        listItemBorder: colorCodes?.darkGreyBalckShade,
        listItemLabel: colorCodes.greyColor,
        listItemLabelSelected: colorCodes.tabSelectedOrange,
        tabListCountColor:colorCodes?.greyColor2,
        listItemContent: colorCodes.colorWhite,
        notificationPanelTitle: colorCodes?.colorWhite,
        expansionListItemBg: colorCodes?.notificationCalloutBg,
        expansionMarkerListBg: colorCodes?.notificationMarkerCalloutBg,
        expansionListItemBorder: colorCodes?.tabSelectedOrange,
        listItemBg: colorCodes?.darkBlackShade,
        eventColor: colorCodes?.green,
        oprAlertColor: colorCodes?.orange,
        incidentColor: colorCodes?.red
      },
      login: {
        boxTopLineStyle: colorCodes?.orngeLinearGradient
      },
      gridViewPage: {
        gridPageBg: colorCodes?.blackShades,
        gridBorderColor: colorCodes?.blueShades,
        commonTextColor: colorCodes?.whiteShades2,
        
      },
      gridViewComponentCommonStyle: {
        containerTitle: colorCodes.vibrantOrangeColor,
        liveContainerBg: colorCodes.darkBluish,
        liveContentValueGreen: colorCodes.vibrantShadeOfGreen,
        lastweekTitle: colorCodes.greenishBlue,
        horizantalDataGridLabel: colorCodes.silverGray,
        rightListItemBorder: colorCodes.shadesOfBlueGreen,
        aqiCircleBg: colorCodes.shadeOfYellowishGreen,
        aqiCircleShadow: colorCodes.semiTransparentLimeGreen,
        liveContentLeftBorder: colorCodes.colorWhite,
        verticalBarLabelColor: colorCodes?.silverGray,
        todayTitleTextColor: colorCodes?.greenColorShades,
        todayTitleBgColor: "unset",
      },
      gridViewPageStyle: {
        rootContainerBg: colorCodes.deepBlue,
        mainSectionGridBg: colorCodes.charCoalBlack,
        mainSectionGridBorder: colorCodes.navyBlue,        
      },
      gridViewComponentGraphsColor: {
        screenOneGraphLine: colorCodes.vibrantBlueGreenOpacity,
        screenOneGraphPoint: colorCodes.vibrantBlueGreen,
        screenTwoGraph1Line: colorCodes.goldenYellowOpacity,
        screenTwoGraph1Point: colorCodes.goldenYellow,
        screenTwoGraph2Line: colorCodes.limeGreenOpacity,
        screenTwoGraph2Point: colorCodes.limeGreen,
        screenTwoGraph3Line: colorCodes.electricBlueOpacity,
        screenTwoGraph3Point: colorCodes.electricBlue,
        screenThreeGraphLine: colorCodes.cyanBlueGreenOpacity,
        screenThreeGraphPoint: colorCodes.cyanBlueGreen,
        screenFourStrockColor: colorCodes.tealBlueGreen,
        screenFourTrackStrokeColor: colorCodes.semiTransparentWhite,
        screenFiveStrockColor1: colorCodes.oliveGreen,
        screenFiveTrackStrokeColor1: colorCodes.semiTransparentWhite,
        screenFiveStrockColor2: colorCodes.seaGreen,
        screenFiveTrackStrokeColor2: colorCodes.semiTransparentWhite,
        screenSixGraphLine: colorCodes.turquoiseBlueGreenOpacity,
        screenSixGraphPoint: colorCodes.turquoiseBlueGreen,
        highChartsGradient: colorCodes.colorBlack,
      },

      chart: {
        xAxisTextColor: colorCodes?.colorWhite,
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
        notificationBg: colorCodes?.lightWhite,
        notificationBoxShadow: colorCodes?.notificationPanelShadowColor,
        listItemBorder: colorCodes.colorWhite,
        listItemLabel: colorCodes.greyColor,
        listItemLabelSelected: colorCodes.tabSelectedOrange,
        tabListCountColor:colorCodes?.greyColor2,
        listItemContent: colorCodes.darkBlackShade,
        notificationPanelTitle: colorCodes?.darkBlackShade,
        expansionListItemBg: colorCodes?.notificationExpandedBgLight,
        expansionMarkerListBg: colorCodes?.notificationExpandedBgLight,
        expansionListItemBorder: colorCodes?.tabSelectedOrange,
        listItemBg: colorCodes?.mdGray,
        eventColor: colorCodes?.green,
        oprAlertColor: colorCodes?.orange,
        incidentColor: colorCodes?.red
      },
      flippingCard: {
        background: colorCodes?.flippingCardBgLight,
        textColor: colorCodes?.darkBlackShade,
      },
      login: {
        boxTopLineStyle: colorCodes?.orngeLinearGradient
      },
      gridViewPage: {
        gridPageBg: colorCodes?.whiteShades,
        gridBorderColor: colorCodes?.redShades,
        commonTextColor: colorCodes?.darkBlackShade,
      },
      gridViewComponentCommonStyle: {
        containerTitle: colorCodes.vibrantOrangeColor,
        liveContainerBg: colorCodes.darkBluish,
        liveContentValueGreen: colorCodes.vibrantShadeOfGreen,
        lastweekTitle: colorCodes.greenishBlue,
        horizantalDataGridLabel: colorCodes.silverGray,
        rightListItemBorder: colorCodes.shadesOfBlueGreen,
        aqiCircleBg: colorCodes.shadeOfYellowishGreen,
        aqiCircleShadow: colorCodes.semiTransparentLimeGreen,
        liveContentLeftBorder: colorCodes.colorWhite,
        verticalBarLabelColor: colorCodes?.mdGray,
        todayTitleTextColor: colorCodes?.redColorShades,
        todayTitleBgColor: colorCodes?.redColorShades2,
      },
      gridViewPageStyle: {
        rootContainerBg: colorCodes.deepBlue,
        mainSectionGridBg: colorCodes.charCoalBlack,
        mainSectionGridBorder: colorCodes.navyBlue,        
      },
      gridViewComponentGraphsColor: {
        screenOneGraphLine: colorCodes.vibrantBlueGreenOpacity,
        screenOneGraphPoint: colorCodes.vibrantBlueGreen,
        screenTwoGraph1Line: colorCodes.goldenYellowOpacity,
        screenTwoGraph1Point: colorCodes.goldenYellow,
        screenTwoGraph2Line: colorCodes.limeGreenOpacity,
        screenTwoGraph2Point: colorCodes.limeGreen,
        screenTwoGraph3Line: colorCodes.electricBlueOpacity,
        screenTwoGraph3Point: colorCodes.electricBlue,
        screenThreeGraphLine: colorCodes.cyanBlueGreenOpacity,
        screenThreeGraphPoint: colorCodes.cyanBlueGreen,
        screenFourStrockColor: colorCodes.tealBlueGreen,
        screenFourTrackStrokeColor: colorCodes.semiTransparentWhite,
        screenFiveStrockColor1: colorCodes.oliveGreen,
        screenFiveTrackStrokeColor1: colorCodes.semiTransparentWhite,
        screenFiveStrockColor2: colorCodes.seaGreen,
        screenFiveTrackStrokeColor2: colorCodes.semiTransparentWhite,
        screenSixGraphLine: colorCodes.turquoiseBlueGreenOpacity,
        screenSixGraphPoint: colorCodes.turquoiseBlueGreen,
        highChartsGradient: colorCodes.colorBlack,
      }, 
      chart: {
        xAxisTextColor: colorCodes?.mdGray,
      },    
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
        notificationBg: colorCodes?.darkBlack,
        notificationBoxShadow: colorCodes?.notificationPanelShadowColor,
        listItemBorder: colorCodes?.darkGreyBalckShade,
        listItemLabel: colorCodes.greyColor,
        listItemLabelSelected: colorCodes.tabSelectedOrange,
        tabListCountColor:colorCodes?.greyColor2,
        listItemContent: colorCodes.colorWhite,
        notificationPanelTitle: colorCodes?.colorWhite,
        expansionListItemBg: colorCodes?.notificationCalloutBg,
        expansionMarkerListBg: colorCodes?.notificationMarkerCalloutBg,
        expansionListItemBorder: colorCodes?.tabSelectedOrange,
        listItemBg: colorCodes?.darkBlackShade,
        eventColor: colorCodes?.green,
        oprAlertColor: colorCodes?.orange,
        incidentColor: colorCodes?.red
      },
      flippingCard: {
        background: colorCodes?.flippingCardBgDark,
        textColor: colorCodes?.flippingCardDarkTextColor,
      },
      login: {
        boxTopLineStyle: colorCodes?.orngeLinearGradient
      },
      gridViewPage: {
        gridPageBg: colorCodes?.blackShades,
        gridBorderColor: colorCodes?.blueShades,
        commonTextColor: colorCodes?.whiteShades2,
      },
      gridViewComponentCommonStyle: {
        containerTitle: colorCodes.vibrantOrangeColor,
        liveContainerBg: colorCodes.darkBluish,
        liveContentValueGreen: colorCodes.vibrantShadeOfGreen,
        lastweekTitle: colorCodes.greenishBlue,
        horizantalDataGridLabel: colorCodes.silverGray,
        rightListItemBorder: colorCodes.shadesOfBlueGreen,
        aqiCircleBg: colorCodes.shadeOfYellowishGreen,
        aqiCircleShadow: colorCodes.semiTransparentLimeGreen,
        liveContentLeftBorder: colorCodes.colorWhite,
        verticalBarLabelColor: colorCodes?.silverGray,
        todayTitleTextColor: colorCodes?.greenColorShades,
        todayTitleBgColor: "unset",
      },
      gridViewPageStyle: {
        rootContainerBg: colorCodes.deepBlue,
        mainSectionGridBg: colorCodes.charCoalBlack,
        mainSectionGridBorder: colorCodes.navyBlue,        
      },
      gridViewComponentGraphsColor: {
        screenOneGraphLine: colorCodes.vibrantBlueGreenOpacity,
        screenOneGraphPoint: colorCodes.vibrantBlueGreen,
        screenTwoGraph1Line: colorCodes.goldenYellowOpacity,
        screenTwoGraph1Point: colorCodes.goldenYellow,
        screenTwoGraph2Line: colorCodes.limeGreenOpacity,
        screenTwoGraph2Point: colorCodes.limeGreen,
        screenTwoGraph3Line: colorCodes.electricBlueOpacity,
        screenTwoGraph3Point: colorCodes.electricBlue,
        screenThreeGraphLine: colorCodes.cyanBlueGreenOpacity,
        screenThreeGraphPoint: colorCodes.cyanBlueGreen,
        screenFourStrockColor: colorCodes.tealBlueGreen,
        screenFourTrackStrokeColor: colorCodes.semiTransparentWhite,
        screenFiveStrockColor1: colorCodes.oliveGreen,
        screenFiveTrackStrokeColor1: colorCodes.semiTransparentWhite,
        screenFiveStrockColor2: colorCodes.seaGreen,
        screenFiveTrackStrokeColor2: colorCodes.semiTransparentWhite,
        screenSixGraphLine: colorCodes.turquoiseBlueGreenOpacity,
        screenSixGraphPoint: colorCodes.turquoiseBlueGreen,
        highChartsGradient: colorCodes.colorBlack,
      },
      chart: {
        xAxisTextColor: colorCodes?.colorWhite,
      },  
      },
    
    spacing: 5,
    typography: { fontFamily: "Arial" },
  },
}
export default theme;
