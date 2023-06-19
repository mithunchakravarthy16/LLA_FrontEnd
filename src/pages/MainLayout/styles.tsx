import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(
  {
    loaderStyle: (props: any) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100%",
    }),
    
  },
  { index: 1 }
);
export default useStyles;
