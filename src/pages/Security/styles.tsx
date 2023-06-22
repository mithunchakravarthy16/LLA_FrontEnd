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
  }),
  

});
export default useStyles;
