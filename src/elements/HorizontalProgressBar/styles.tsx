import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  progressBarTitleStyle: (props: any) => ({
    fontSize: props?.progressBarTitleFontSize ? props?.progressBarTitleFontSize : "14px",
  }),

  progressBarContainerStyle: (props: any) => ({
    padding: "0px 20px",
  }),

  progressBarContainer: (props: any) => ({
    paddingRight: "10px",
  }),

  progressBarTrackerStyle: (props: any) => ({
    width: "100%",
    height: props?.progressBarTrackerHeight ? props?.progressBarTrackerHeight : "18px",
    backgroundColor: props?.progressBarTrackerColor ? props?.progressBarTrackerColor : "#484D52",
    borderRadius: props?.progressBarTrackerRadius ? props?.progressBarTrackerRadius : "7px",
    overflow: "hidden",
  }),

  progressBarValueStyle: (props: any) => ({
    height: "100%",
    backgroundColor: props?.progressBarValueColor ? props?.progressBarValueColor : "#FFA626",
    borderRadius: props?.progressBarValueBarRadius ? props?.progressBarValueBarRadius : "7px",
    width: props?.progressBarValue ? props?.progressBarValue : "60%" /* Adjust this value to set the initial progress */,
    transition: `width 0.3s ease-in-out`,
  }),
});
export default useStyles;