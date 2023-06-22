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
  }),

  progressBarContainer: (props: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 0px",
  }),

});
export default useStyles;
