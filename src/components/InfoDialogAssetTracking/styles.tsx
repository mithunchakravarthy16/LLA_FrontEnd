import { makeStyles } from "@mui/styles";
import { padding } from "@mui/system";
// import muiTheme from "theme/muiTheme";

const useStyles = makeStyles(() => ({
  headerStyle: (props: any) => ({
    // fontWeight: 700,
    // fontSize: 20,
    // lineHeight: "27px",
    // textTransform: "uppercase",
    display: "flex",
    marginBottom: "1.25%",
  }),

  headerTabContainerStyle: (props: any) => ({
    display: "flex",
    width: "25%",
    justifyContent: "space-between",
    alignItems: "center",
    // marginLeft: "20px",
    fontSize: "1em",
    fontWeight: 500,
    letterSpacing: "0.75px",
  }),

  headerTabStyle: (props: any) => ({
    padding: "10px 0px",
    cursor: "pointer",
    color: "#5F5F5F",
    // [`&:nth-child(${parseInt(props?.tabIndex)+1})`]:  {
    //   color: "#F2601F"
    // },

    // [`&:not(:nth-child(${parseInt(props?.tabIndex)+1}))`]: {
    //   color: "#5F5F5F",
    // },
  }),

  assetInfoLeftPanelMain: (props: any) => ({
    height: "calc(100vh - 220px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    lineHeight: "37px",
  }),
  assetInfoLeftPanelTop: (props: any) => ({
    // flex: 1,
    background: "#090A0C",
    borderRadius: "10px",
    padding: "2%",
    width: "100%"
  }),
  assetInfoLeftPanelCenter: (props: any) => ({
    // flex: 1
    background: "#131313",
    borderRadius: "10px",
    padding: "5%",
    display: "flex",
    flex: "1",
    justifyContent: "space-between",
    margin : "3% 0"
  }),
  assetInfoLeftPanelBottom: (props: any) => ({
    // flex: 1,
    // padding: "5%",
    width : "100%"
  }),
  assetInfoRightPanelMain: (props: any) => ({}),
  leftPanelSection: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
  }),
  leftPanelLoopSection: (props: any) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    flex : 1,
    "&::after": {
      content: '""',
      position: "absolute",
      top: "20%",
      right: 0,
      height: "60%", // Specify the desired length of the bottom border
      borderRight: `1px dashed #808080`, // Specify your desired color and border style
      opacity: "0.5",
    },
    "&:last-child" : {
      "&::after": {
        content: '""',
        position: "absolute",
        top: "20%",
        right: 0,
        height: "60%", // Specify the desired length of the bottom border
        borderRight: "none", // Specify your desired color and border style
        opacity: "0.4",
      },
    }
  }),
  leftPanelChild1: (props: any) => ({}),
  leftPanelChild2: (props: any) => ({ color: "#F26522" }),
}));

export default useStyles;
