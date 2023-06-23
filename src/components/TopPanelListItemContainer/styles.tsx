import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  
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

  bodyLeftTopPanelListSubContainer: (props: any) => ({
    border: "1px solid #808080",
    height: "100%"
  }),

  progressBarContainer: (props: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 0px",
  }),

  progressBarTitleStyle: (props: any) => ({
    fontSize: "14px",
  }),

  progressBarContainerStyle: (props: any) => ({
    padding: "0px 20px"
  }),

});
export default useStyles;
