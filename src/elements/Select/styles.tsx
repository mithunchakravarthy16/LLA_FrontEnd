import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles(
  {
    customSelect: (props: any) => ({
      // minWidth: "100px !important",
      // minheight: "5px !important",
      "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
        {
          // paddingRight: "150px !important",
        },
      "& .MuiPaper-root": {
        border: "1px solid #fff !important",
      },
      "& .MuiSelect-select": {
        padding: "10px 11px",
      },
      "& .MuiInputBase-root": {
        borderRadius: "10px",
        fontSize: "0.7vw",
        // lineHeight: 21,
        textAlign: "left",
        position: "relative",
        fontFamily: "HelveticaNeue-Regular",
        color: props?.selectedTheme === "light" ? "#fff" : "#fff",
        background: props?.selectedTheme === "light" ? "#F1624C" : "#F26522",
        width: "5vw",
        [muiTheme.breakpoints.down(2049)]: {
          fontSize: "0.7vw",
          width: "5vw",
        },
        "& .MuiSvgIcon-root": {
          position: "absolute",
          right: "10px",
          fontSize: "1.5vw",
          [muiTheme.breakpoints.down(2049)]: {
            fontSize: "1.3vw",
          },
        },
        "& .MuiOutlinedInput-notchedOutline": {
          color: "#FBCEBC",
          // border: `1px solid #FBCEBC !important`,
        },
      },

      "& .MuiSelect-iconOutlined": {
        color: props?.selectedTheme === "light" ? "#fff" : `#fff !important`,
      },
    }),

    tableSelect: (props: any) => ({
      "& .MuiInputBase-root": {
        marginTop: 5,
      },
      "& .MuiSelect-select": {
        padding: "0 30px 0 0 !important",
        color: `${props?.palette?.selectElement?.colorWhite} !important`,
      },
      "& .MuiOutlinedInput-notchedOutline": {
        display: "none !important",
      },
      "& .MuiFormLabel-root": {
        color: `${props?.palette?.selectElement?.colorWhite} !important`,
      },
      "& .MuiFormLabel-root.Mui-focused": {
        color: `${props?.palette?.selectElement?.colorWhite} !important`,
      },
      "& .MuiSvgIcon-root": {
        color: `${props?.palette?.selectElement?.colorWhite} !important`,
      },
      "& .MuiInput-root": {
        color: `${props?.palette?.selectElement?.colorWhite} !important`,
      },
      "& .MuiInput-root:before": {
        display: "none",
      },
      "& .MuiInput-root:after": {
        display: "none",
      },
    }),
  },
  { index: 1 }
);
export default useStyles;
