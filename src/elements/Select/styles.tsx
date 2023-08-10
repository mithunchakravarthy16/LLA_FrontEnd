import { makeStyles } from "@mui/styles";

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
        borderRadius: "5px",
        fontSize: "0.7vw",
        // lineHeight: 21,
        textAlign: "left",
        fontWeight: "bold",
        position: "relative",
        fontFamily: "Nunito Sans",
        color: "#F1624C",
        background : "#FBCEBC",
        width : "5vw",
        "& .MuiSvgIcon-root": {
          position: "absolute",
          right: "10px",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          color: "#FBCEBC",
          border: `1px solid #FBCEBC !important`,
        },
       
      },

      "& .MuiSelect-iconOutlined": {
        color: `#F1624C !important`,
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
