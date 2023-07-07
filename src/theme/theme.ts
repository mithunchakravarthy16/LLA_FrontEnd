import { color } from "@mui/system";
import colorCodes from "./colors";

let theme = {
  defaultTheme: { 
    palette: {     
      sidebar: {
        sidebarBg: colorCodes.darkBlackShade,
           
      },  
      notification:{
        listItemBorder: colorCodes?.darkGreyBalckShade,
        tabListCountColor:colorCodes?.greyColor2,
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
        listItemBorder: colorCodes?.darkGreyBalckShade,
        tabListCountColor:colorCodes?.greyColor2,
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
        tabListCountColor:colorCodes?.greyColor2,
      }  
    },
    spacing: 5,
    typography: { fontFamily: "Arial" },
  },
};

export default theme;
