import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  rootContainer: (props: any) => ({
    fontFamily: `'Nunito Sans', sans-serif !important`,
    background: "#161515",
    height: "100vh",
  }),
  mainSection: (props: any) => ({
    height: "calc(100vh - 60px)",
    color: "white",
    background: "#161515",
    opacity: 1,

    "& > .MuiGrid-item:first-child": {
      borderWidth: "0px 1px 1px 0px",
      borderStyle: "solid",
      borderColor: "#3F4684",
    },

    "& > .MuiGrid-item:nth-child(2)": {
      borderWidth: "0px 1px 1px 0px",
      borderStyle: "solid",
      borderColor: "#3F4684",
    },

    "& > .MuiGrid-item:nth-child(3)": {
      borderWidth: "0px 0px 1px 0px",
      borderStyle: "solid",
      borderColor: "#3F4684",
    },

    "& > .MuiGrid-item:nth-child(4)": {
      borderRight: `1px solid #3F4684`,
    },

    "& > .MuiGrid-item:nth-child(5)": {
      borderRight: "1px solid #3F4684",
    },

    "& > .MuiGrid-item:nth-child(6)": {},
  }),
  

});
export default useStyles;
