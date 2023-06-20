import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  rootContainer: (props: any) => ({
    fontFamily: `'Nunito Sans', sans-serif !important`,
    background: "#1d2c4d",
    height: "calc(100vh - 50px)",
  }),
  mainSection: (props: any) => ({
    // height: "100%",
    color: "white",
    background: "#151A1F",
    opacity: 1,

    "& > .MuiGrid-item:first-child": {
      borderWidth: "0px 2px 2px 0px",
      borderStyle: "solid",
      borderColor: "#38526B",
    },

    "& > .MuiGrid-item:nth-child(2)": {
      borderWidth: "0px 2px 2px 0px",
      borderStyle: "solid",
      borderColor: "#38526B",
    },

    "& > .MuiGrid-item:nth-child(3)": {
      borderWidth: "0px 0px 2px 0px",
      borderStyle: "solid",
      borderColor: "#38526B",
    },

    "& > .MuiGrid-item:nth-child(4)": {
      borderRight: "2px solid #38526B",
    },

    "& > .MuiGrid-item:nth-child(5)": {
      borderRight: "2px solid #38526B",
    },

    "& > .MuiGrid-item:nth-child(6)": {},
  }),
  gridStyles: (props: any) => ({
    padding: "3vh 3vh 1vh 3vh",
    height: "50%",
  }),

  rightListItemStyle: (props: any) => ({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    rowGap: "5px",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "25%",
      width: "50%", // Specify the desired length of the bottom border
      borderBottom: "1px dashed #35DABF", // Specify your desired color and border style
      opacity: "0.4"
    },
  }),

  rightListItemStyleLastChild: (props: any) => ({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    rowGap: "5px",
  }),

  listItemValueStyle: (props: any) => ({
    fontWeight: "600",
    fontSize: "22px",
  }),

  listItemLabelStyle: (props: any) => ({
    fontSize: "16px",
    color: "#B5B2B2",
    fontStyle: "italic",
  }),
  
  liveContentStyle: (props: any) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "10px",
  }),

  liveContentLeftStyle: (props: any) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "10px",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      top: '25%',
      right: 0,
      height: '50%', // Specify the desired length of the bottom border
      borderRight: "2px solid #FFFFFF", // Specify your desired color and border style
      opacity: "0.4"
    },

  }),

  engMgntliveContentLeftStyle: (props: any) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    rowGap: "10px",
    position: "relative",
    padding: "0px 80px 0px 0px",
    "&::after": {
      content: '""',
      position: "absolute",
      top: '25%',
      right: 0,
      height: '50%', // Specify the desired length of the bottom border
      borderRight: "1px dashed #35DABF", // Specify your desired color and border style
      opacity: "0.4"
    },

  }),

  
  engMgntliveContentStyle: (props: any) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    rowGap: "10px",
    padding: "0px 0px 0px 60px",
  }),

  
  engMgntliveContentMiddleStyle: (props: any) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    rowGap: "10px",
    position: "relative",
    padding: "0px 40px",
    "&::after": {
      content: '""',
      position: "absolute",
      top: '25%',
      right: 0,
      height: '50%', // Specify the desired length of the bottom border
      borderRight: "1px dashed #35DABF", // Specify your desired color and border style
      opacity: "0.4"
    },

  }),

  
  aqiCircleStyle: (props: any) => ({
    width: "6px",
  height: "6px",
  borderRadius: "50%",
  backgroundColor: "#80C43B",
  boxShadow: "0px 0px 2px 3px rgba(128, 196, 59, 0.5)",
  }),


});
export default useStyles;
