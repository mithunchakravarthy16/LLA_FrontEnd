import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  rootContainer: (props: any) => ({
    fontFamily: `'Nunito Sans', sans-serif !important`,
    background: props?.palette?.gridViewPageStyle?.rootContainerBg, //"#1d2c4d",
    height: "100vh",
  }),
  mainSection: (props: any) => ({
    height: "calc(100vh - 50px)",
    color: "white",
    background: props?.palette?.gridViewPageStyle?.mainSectionGridBg, //"#151A1F",
    opacity: 1,

    "& > .MuiGrid-item:first-child": {
      borderWidth: "0px 2px 2px 0px",
      borderStyle: "solid",
      borderColor: props?.palette?.gridViewPageStyle?.mainSectionGridBorder, //"#38526B",
    },

    "& > .MuiGrid-item:nth-child(2)": {
      borderWidth: "0px 2px 2px 0px",
      borderStyle: "solid",
      borderColor: props?.palette?.gridViewPageStyle?.mainSectionGridBorder, //"#38526B",
    },

    "& > .MuiGrid-item:nth-child(3)": {
      borderWidth: "0px 0px 2px 0px",
      borderStyle: "solid",
      borderColor: props?.palette?.gridViewPageStyle?.mainSectionGridBorder, //"#38526B",
    },

    "& > .MuiGrid-item:nth-child(4)": {
      borderRight: `2px solid ${props?.palette?.gridViewPageStyle?.mainSectionGridBorder}`,
    },

    "& > .MuiGrid-item:nth-child(5)": {
      borderRight: `2px solid ${props?.palette?.gridViewPageStyle?.mainSectionGridBorder}`,
    },

    "& > .MuiGrid-item:nth-child(6)": {},
  }),
  

});
export default useStyles;
