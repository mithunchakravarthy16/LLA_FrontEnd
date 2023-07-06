import { color } from "@mui/system";
import colorCodes from "./colors";

let theme = {
  defaultTheme: {
    palette: {     
      sidebar: {
        sidebarBg: colorCodes.colorBlue      
      },  
      notification:{
        listItemBorder: '',
        tabListCountColor:''
      }  
    },
    spacing: 5,
    typography: { fontFamily: "Arial" },
  },
  lightTheme: {
    palette: {     
      sidebar: {
        sidebarBg: colorCodes.colorGreen      
      },
      notification:{ listItemBorder: '', tabListCountColor:''}      
    },
    spacing: 5,
    typography: { fontFamily: "Arial" },
  },
  darkTheme: {
    palette: {     
      sidebar: {
        sidebarBg: colorCodes.colorBlack      
      },    
      notification:{ listItemBorder: '', tabListCountColor:''}  
    },
    spacing: 5,
    typography: { fontFamily: "Arial" },
  },
};

export default theme;
