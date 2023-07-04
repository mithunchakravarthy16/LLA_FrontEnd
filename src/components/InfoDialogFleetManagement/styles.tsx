import { makeStyles } from "@mui/styles";
import { padding } from "@mui/system";
// import muiTheme from "theme/muiTheme";

const useStyles = makeStyles(() => ({
  headerStyle: (props: any) => ({
    // fontWeight: 700,
    // fontSize: 20,
    // lineHeight: "27px",
    // textTransform: "uppercase",
    display: "flex",
    marginBottom: 30,
  }),

  headerTabContainerStyle: (props: any) => ({
    display: "flex",
    width: "40%",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "20px",
    fontSize: "1em",
    
  }),

  headerTabStyle: (props: any) => ({
    padding: "10px 0px",
    cursor: "pointer",
    color: "#5F5F5F",
    // [`&:nth-child(${parseInt(props?.tabIndex)+1})`]:  {
    //   color: "#F2601F"
    // },

    // [`&:not(:nth-child(${parseInt(props?.tabIndex)+1}))`]: {
    //   color: "#5F5F5F",
    // },

  }),

  

  
}));

export default useStyles;
