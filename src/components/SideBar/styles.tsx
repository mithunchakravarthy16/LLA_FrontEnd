import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: (props: any) => ({}),
  sideNavigation: (props: any) => ({
    "& .MuiDrawer-paper": {
      background: "#142231",
      borderRight: "0 !important",
      borderRadius: "0px",
      padding: "22px 2px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "calc(100vh - 44px)",
    },
  }),
  avatharSection: (props: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#485A6B",
    borderRadius: "50px",
    width: "50px",
    height: "50px",
    color: "white",
  }),
  menuLogoSection: () => ({
    marginBottom: 46,
    "& img": {
      width: 68,
    },
  }),
  menuIconSection: () => ({
    flex: 1,
    marginTop: 150,
  }),
  menuIconList: (props: any) => ({
    cursor: "pointer",
    position: "relative",
    width: "70px",
    height: " 85.7px",
    display: " flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiSvgIcon-root": {
      color: props?.palette?.sidebar?.menuActiveColor,
    },
    '& img': {
      width: 35
    }
  }),
  menuIconListActive: (props: any) => ({
    cursor: "pointer",
    position: "relative",
    width: "70px",
    height: " 85.7px",
    display: " flex",
    alignItems: "center",
    justifyContent: "center",
    '& img': {
      width: 56
    },
    "& .MuiSvgIcon-root": {
      border: `1px solid ${props?.palette?.sidebar?.menuColor}`,
      padding: "10px",
      borderRadius: " 10px",
      color: props?.palette?.sidebar?.menuColor,
    },
    "&::after": {
      content: `''`,
      position: "absolute",
      width: "3px",
      height: "40px",
      right: "-12px",
      top: "23px",
      backgroundColor: props?.palette?.sidebar?.menuColor,
      borderTopLeftRadius: "6px",
      borderBottomLeftRadius: "6px",
      zIndex: "-1",
    },
  }),
  customTooltip: () => ({
    background: "black !important",
  }),
});
export default useStyles;
