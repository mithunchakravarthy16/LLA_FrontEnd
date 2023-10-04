import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  rootContainer: (props: any) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"

  }),

  inputStyle: (props: any) => ({
    width: "100%",
    height: "100%",
    fontSize: "1vw"
  }),

});
export default useStyles;
