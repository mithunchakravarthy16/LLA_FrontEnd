import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  rootContainer: (props: any) => ({
    fontFamily: `'Nunito Sans', sans-serif !important`,
    background: "#1d2c4d",
    height: "100vh",
  }),
  mainSection: (props: any) => ({
    height: "calc(100vh - 65%)",
    color: "white",
    background: "#1b1b1b",
    opacity: 1,
  }),
  topSection: (props: any) => ({
    padding: "1vh",
  }),
  bottomMainSection: (props: any) => ({
    height: "calc(100vh - 35%)",
    color: "white",
    opacity: 1,
    // padding: "10px",
  }),
  bottomSection: (props: any) => ({
    padding: "5px",
    // background: "#1b1b1b",
  }),

  bottomInnerSection: (props: any) => ({
    background: "#1b1b1b",
    padding: "5px",
    height: "98%",
    // margin: "0px 10px !important",
  }),
});
export default useStyles;
