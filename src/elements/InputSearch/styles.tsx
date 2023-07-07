import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  customTextField: (props: any) => ({
    marginTop: "5px",
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
      // border: "1px solid #838383",
      borderRadius: "6px",
      background: "#333333",
      "& .MuiInputBase-input": {
        color: "#FFFFFF",
        "-webkit-text-fill-color": "#FFFFFF",
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
