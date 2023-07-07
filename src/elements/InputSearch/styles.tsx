import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  customTextField: (props: any) => ({
    marginTop: "5px",
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
      border: "1px solid #DDDDDD",
      borderRadius: "6px",
      background: "#000000",
      "& .MuiInputBase-input": {
        color: "#FFFFFF",
        "-webkit-text-fill-color": "#FFFFFF",
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: "10px !important",
    },
  }),
}));

export default useStyles;
