import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  rootContainer: (props: any) => ({
    fontFamily: `'Nunito Sans', sans-serif !important`,
    background: "#161515",
    height: "100vh",
    paddingLeft: "3.4px",
  }),
  mainSection: (props: any) => ({
    height: "calc(100vh - 50px)",
    color: "white",
    background: "#161515",
    opacity: 1,
  }),

  pageHeading: (props: any) => ({
    height: "6%",
    paddingLeft: "15px",
    display: "flex",
    color: "#F26522",
    fontSize: "20px",
  }),

  bodyContainer: (props: any) => ({
    height: "94%",
  }),

  bodySubContainer: (props: any) => ({
    height: "100%",
  }),

  bodyLeftContainer: (props: any) => ({
    height: "100%",
  }),

  bodyLeftSubContainer: (props: any) => ({
    height: "100%",
  }),

  bodyLeftTopPanelContainer: (props: any) => ({
    height: "40%",
  }),

  bodyLeftTopPanelMapContainer: (props: any) => ({
    height: "60%",
  }),

  bodyLeftTopPanelSubContainer: (props: any) => ({
    height: "100%",
  }),

  bodyLeftTopPanelListContainer: (props: any) => ({
    height: "20%",
  }),

  graphOneContainer: (props: any) => ({
    // border: "none",
    // borderWidth: "1px",
    // borderStyle: "solid",
    // borderColor: "transparent #808080 #808080 #808080",
   height: "100%",

   borderBottom : "1px solid #333333",

    borderRight : "1px solid #333333",
    
  }),

  graphTwoContainer: (props: any) => ({
    // border: "none",
    // borderWidth: "1px",
    // borderStyle: "solid",
    // borderColor: "transparent #808080 #808080 transparent",
    borderBottom : "1px solid #333333",
    height: "100%",
  }),

  notificationPanelGrid: (props: any) => ({
    border : "1px solid #333333"
  }),
});
export default useStyles;
