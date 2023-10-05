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
    fontSize: "1vw",
    border: 0,
    borderRadius: "0.4vw",
    paddingRight: "2.5vw",
    paddingLeft: "0.5vw"
  }),

});
export default useStyles;
