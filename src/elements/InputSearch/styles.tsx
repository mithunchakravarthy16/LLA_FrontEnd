import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  customTextField: (props: any) => ({
    marginTop: "5px",
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
      // border: "1px solid #838383",
      borderRadius: "6px",
      background: `${props?.palette?.assetTrackingPage?.selectBg} !important`,
      "& .MuiInputBase-input": {
        color: props?.palette?.assetTrackingPage?.topPanelSubTextColor,
        "-webkit-text-fill-color":
          props?.palette?.assetTrackingPage?.topPanelSubTextColor,
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: "10px !important",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #838383",
    },
  }),
}));

export default useStyles;
