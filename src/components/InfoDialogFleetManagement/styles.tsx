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
    height: "10%",
  }),

  headerTabContainerStyle: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "20px",
    fontSize: "1.1vw",
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

  violationListContainer: (props: any) => ({
    height: "95%",
    overflowY: "auto",

    "&::-webkit-scrollbar": {
      width: 0,
    },
  }),

  customNotificationTabs: (props: any) => ({
    "& .MuiTabs-flexContainer": {
      display: "flex",
      flexDirection: "row",
      columnGap: 55,
    },

    "& .MuiButtonBase-root": {
      textTransform: "unset",
      marginRight: "0 !important",
      // minWidth: "64px !important",
      padding: "0px !important",
    },

    "& .MuiTab-root": {
      fontSize: "1.8vh !important",
      
      fontWeight: "600 !important",
     minWidth: "unset",
      "&:first-child": {
       
        color: `#5F5F5F !important`,
      },
      "&:first-child.Mui-selected": {
        color: `#6BA044 !important`,
      },
      "&:nth-child(2)": {
       
        color: `#5F5F5F !important`,
      },
      "&:nth-child(2).Mui-selected": {
        color: `#6BA044 !important`,
      },
      "&:nth-child(3)": {
       
        color: `#5F5F5F !important`,
      },
      "&:nth-child(3).Mui-selected": {
        color: `#6BA044 !important`,
      },
    },
    "& .MuiTabs-root .MuiTabs-indicator": {
      background: "#6BA044",
      height: "4px",
      borderRadius: "2px"
    },
  }),

}));

export default useStyles;
