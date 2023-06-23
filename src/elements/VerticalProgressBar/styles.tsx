import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  label: (props: any) => ({
    fontSize: "20px",
    fontWeight: 700,
  }),

  progressBarTitle: (props: any) => ({
    padding: "0 0 5px 5px",
  }),

  progressBarContainer: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
  }),

  progressBarStyle: (props: any) => ({
    width: "80%",
    height: "22px",
  }),
});
export default useStyles;
