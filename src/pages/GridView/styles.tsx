import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  rootContainer: (props: any) => ({
    fontFamily: `'Nunito Sans', sans-serif !important`,
    background: "#1d2c4d",
    height: "calc(100vh - 50px)",
  }),
  mainSection: (props: any) => ({
    // height: "100%",
    color: "white",
    background: "#151A1F",
    opacity: 1,

    "& > .MuiGrid-item:first-child": {
      borderWidth: "0px 2px 2px 0px",
      borderStyle: "solid",
      borderColor: "#38526B",
    },

    "& > .MuiGrid-item:nth-child(2)": {
      borderWidth: "0px 2px 2px 0px",
      borderStyle: "solid",
      borderColor: "#38526B",
    },

    "& > .MuiGrid-item:nth-child(3)": {
      borderWidth: "0px 0px 2px 0px",
      borderStyle: "solid",
      borderColor: "#38526B",
    },

    "& > .MuiGrid-item:nth-child(4)": {
      borderRight: "2px solid #38526B",
    },

    "& > .MuiGrid-item:nth-child(5)": {
      borderRight: "2px solid #38526B",
    },

    "& > .MuiGrid-item:nth-child(6)": {},
  }),
  

});
export default useStyles;
