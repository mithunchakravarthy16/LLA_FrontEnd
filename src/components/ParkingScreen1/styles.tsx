import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  rootContainer: (props: any) => ({
    fontFamily: `'Nunito Sans', sans-serif !important`,
    height: "100vh",
  }),
  parkingScreen1Container: (props: any) => ({
    border: "1px solid #385c4b",
    height: "100%",
  }),
  parkingScreen1BottomContainer: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
  }),
  leftBottomSection: (props: any) => ({
    display: "flex",
    border: "1px solid #968b8b",
    borderRadius: "5px",
    width: "25%",
    padding: "15px 15px",
    justifyContent: "space-between",
  }),
  rightBottomSection: (props: any) => ({
    display: "flex",
    border: "1px solid #968b8b",
    borderRadius: "5px",
    width: "62%",
    padding: "18px 18px",
    justifyContent: "space-between",
  }),
  leftBottomValueTitle: (props: any) => ({
    //  padding: "19px 12px"
  }),
  leftBottomTitle: (props: any) => ({}),
  leftBottomValue: (props: any) => ({}),
  rightBottomValueTitle: (props: any) => ({
    //  padding: "19px 12px"
  }),
  rightBottomTitle: (props: any) => ({}),
  rightBottomValue: (props: any) => ({}),
});
export default useStyles;
