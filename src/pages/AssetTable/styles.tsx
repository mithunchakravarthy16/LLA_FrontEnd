/** @format */

import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  rootContainer: () => ({
    fontFamily: "HelveticaNeue-Regular",
    marginTop : "1vw ",   
  }),

  refreshButtonStyle: () => ({
    "& .MuiButton-root" : {
      background : "rgb(8, 68, 118) !important"
    }
  }),
  sensorValues: () => ({
    display: "flex",
    fontWeight : 600
  }),
  iconStyleClass : () => ({
    display: "flex",

  }),
  temperatureIcon: () => ({
    // paddingLeft: "20px",
    cursor: "pointer",
    display : "flex",
    alignItems : "center",
    width: "2.3vw",
    height: "1.3vh"
    
  }),
  humidityIcon: () => ({
    paddingLeft: "20px",
    cursor: "pointer",
    display : "flex",
    alignItems : "center",
    width: "2.3vw",
    height: "1.3vh"
    
  }),
  locationIcon: () => ({
    paddingLeft: "20px",
    cursor: "pointer",
    display : "flex",
    alignItems : "center",
    width: "2.3vw",
    height: "1.3vh"
    
  }),
  batteryIcon: () => ({
    paddingLeft: "20px",
    cursor: "pointer",
    display : "flex",
    alignItems : "center",
    width: "3vw",
    height: "1.3vh"
    
  }),
  iconValue : () => ({
    paddingLeft: "0.2vw",
    fontSize : "0.8vw",
    fontWeight : 600,
    color : "#606366"    
  }),
  assetTableHeader: () => ({
    display : "flex",
    justifyContent : "space-between"   
  }),
  tableLayoutStyle: () => ({
    // overflow: "auto",
    height: "100%",
    // "& .MuiTableCell-root" : {
    //   background : "none",
    //   color : "white",
    //   padding: "0.6vw",
    // fontSize: "1vw"

    // },

    // "& .MuiTableCell-body" : {
    //   color : "black",
    //   padding: "0.6vw",
    //   fontSize: "1vw"
    // }

    "& .MuiTableContainer-root": {
      height: "100%",
    },
    "& .MuiTableCell-root": {},
    "& .MuiTableCell-head": {
      background: "#084476",
      fontSize: "0.9vw",
      color: "#FFFFFF",
      lineHeight: "2vh",
      fontWeight : 600
    },
    "& .MuiTable-root ": {
      // borderCollapse: "separate",
      // borderSpacing: " 0 1vh",
    },

    "& .MuiTableCell-body": {
      fontSize: "0.8vw",
      color: "#606366",
      borderBottom: "1px solid #d6d6d6 !important",
      borderTop: "1px solid #d6d6d6 !important",
      borderCollapse: "separate",
      borderRadius: "2px",
      background: "#F9FBFD",
      fontWeight : 600
    },

    "& .MuiTableBody-root": {
      "& .MuiTableRow-root": {
        "& td:first-child": {
          borderLeft: "1px solid #d6d6d6 !important",
        },
        "& td:last-child": {
          borderRight: "1px solid #d6d6d6 !important",
        },
      },
    },
  }),

  searchClass: () => ({
    border: `1px solid #1A1919`,
    background: "#FFFFFF",
    color: "#1A1919",
    borderRadius: 6,
    // height: "48px",

    "& .MuiIconButton-root": {
      marginRight: 7,
      "& .MuiSvgIcon-root": {
        fontSize: "1vw",
      },
      "& img": {
        width:"1vw",
        height : "1vw"
      },
    },
    "& .MuiInputBase-input": {
      // padding: "14px 6px",
      fontSize: "0.8vw",
      // lineHeight: "52px",
      fontFamily: "HelveticaNeue-Regular",
     
    },
  }),

});
export default useStyles;
