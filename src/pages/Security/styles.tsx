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

  topPanelListItemStyle: (props: any) => ({
    display: "flex",
    columnGap: "10px",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px 0px",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      top: "20%",
      right: 0,
      height: "60%", // Specify the desired length of the bottom border
      borderRight: `1px dashed #808080`, // Specify your desired color and border style
      opacity: "0.4",
    },
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
    borderBottom : "1px solid #333333",
    borderRight : "1px solid #333333",
    paddingLeft: '30px',
    height: "80%",
  }),

  graphTwoContainer: (props: any) => ({
    // border: "none",
    // borderWidth: "1px",
    // borderStyle: "solid",
    // borderColor: "transparent #808080 #808080 transparent",
    borderBottom : "1px solid #333333",
    height: "80%",
    display: "flex",
    alignItems: "center"
  }),

  pieChartLegendContainer: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "10%"
  },

  legendIdentifierContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },

  legendColorBox: (props: any) => {
    console.log("PROPS", props);
    return ({
      width: '20px',
      height: '10px',
      backgroundColor: '#30b7fb',
      borderRadius: '10px'
    })
  },

  legendText: {
    color: '#8A8A8A',
    fontSize: '20px',
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    textTransform: 'capitalize',
    marginLeft: '15px',
  },

  notificationPanelGrid: (props: any) => ({
    border : "1px solid #333333"
  }),
  bodyLeftTopPanelListSubContainer: (props: any) => ({
    border: "1px solid #808080",
  }),

  progressBarContainer: (props: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 0px",
  }),
  graphTitle: (props: any) => ({
    marginBottom: "20px",
    fontSize: "16px"
  })
});
export default useStyles;
