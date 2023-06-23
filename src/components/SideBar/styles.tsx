import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";


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
      width: '150px',
      [muiTheme.breakpoints.down(2049)]: {
        width: '90px',
      },
    },
  }),
  sidebarSection: (props:any) => ({
    width: 150,
    [muiTheme.breakpoints.down(2049)]: {
      width: '90px',
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
      width: 100,
      [muiTheme.breakpoints.down(2049)]: {
        width: 68,
      },
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
    height: " 150px",
    display: " flex",
    alignItems: "center",
    justifyContent: "center",
    [muiTheme.breakpoints.down(2049)]: {
      width: '35px',
      height: " 85.7px",
    },
    "& .MuiSvgIcon-root": {
      color: props?.palette?.sidebar?.menuActiveColor,
    },
    '& img': {
      width: 70,
      [muiTheme.breakpoints.down(2049)]: {
        width: '35px',
      },
    }
  }),
  menuIconListActive: (props: any) => ({
    cursor: "pointer",
    position: "relative",
    width: "70px",
    height: " 150px",
    display: " flex",
    alignItems: "center",
    justifyContent: "center",
    [muiTheme.breakpoints.down(2049)]: {
      width: "35px",
    height: " 85.7px",
    },
    '& img': {
      width: 70,
      [muiTheme.breakpoints.down(2049)]: {
        width: '56px',
      },
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
      height: "60px",
      right: "-42px",
      top: "45px",
      backgroundColor: props?.palette?.sidebar?.menuColor,
      borderTopLeftRadius: "6px",
      borderBottomLeftRadius: "6px",
      zIndex: "-1",
      [muiTheme.breakpoints.down(2049)]: {
        content: `''`,
        position: "absolute",
        width: "3px",
        height: "40px",
        right: "-29px",
        top: "23px",
        backgroundColor: props?.palette?.sidebar?.menuColor,
        borderTopLeftRadius: "6px",
        borderBottomLeftRadius: "6px",
        zIndex: "-1",
        },
    },
  }),
  customTooltip: () => ({
    background: "black !important",
  }),
});
export default useStyles;
