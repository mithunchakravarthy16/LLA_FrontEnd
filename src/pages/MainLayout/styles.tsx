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
    footerSection: (props: any) => ({
      background: "rgba(16, 38, 62, 0.56)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      bottom: 0,
      zIndex: "1111111",
      left: "93px",
      width: "calc(100vw - 93px)",
      height: "50px",
      color: "#FFFFFF",
      fontSize: 14,
    }),
    footerContent: (props: any) => ({
      display: "flex",
      alignItems: "center",
    }),
  },
  { index: 1 }
);
export default useStyles;
