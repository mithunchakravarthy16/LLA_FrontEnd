import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  leftPanel: (props: any) => ({
    background: props?.palette?.dashboardLeftPanel?.background,
    boxShadow: `5px 8px 16px ${props?.palette?.dashboardLeftPanel?.boxShadow}`,
    height: "calc(100vh - 80px)",
  }),

  tabButtonSection: (props: any) => ({
    margin: 18,
  }),

  tabSection: (props: any) => ({
    "& .MuiButtonBase-root": {
      marginRight: "0 !important",
    },
    "& .MuiTabs-root": {
      marginTop: "6px !important",
    },
    "& .MuiTab-root": {
      fontSize: 18,
      padding: "8px 20px !important",
      //   paddingBottom: "8px !important",
      fontWeight: 600,
      color: props?.palette?.tab?.tabSectionText2,
      fontFamily: "Poppins",
      textTransform: "none",
      flex: 1,
      [muiTheme.breakpoints.down(1538)]: {
        fontSize: 13,
      },
      [muiTheme.breakpoints.down(1025)]: {
        fontSize: "10px !important",
        minWidth: "80px !important",
      },
    },
    "& .MuiTab-root.Mui-selected": {
      color: props?.palette?.tab?.tabSectionText,
      background: props?.palette?.tab?.selectedTabBg,
      borderRadius: "10px",
      // padding: "0px 20px !important",
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "transparent !important",
      borderRadius: "0px 0px 50px 50px !important",
      transform: "rotate(-180deg)",
      height: 4,
      left: "114.0938px",
    },
    "& .MuiTabs-flexContainer": {
      padding: 12,
      background: props?.palette?.tab?.tabSection,
      boxShadow: `8px 4px 16px ${props?.palette?.tab?.tabSection}`,
      borderRadius: "6px",
    },
  }),

  customSelect: (props: any) => ({
    // minWidth: "100px !important",
    // minheight: "5px !important",
    width: "100%",
    "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
      {
        // paddingRight: "150px !important",
      },
    "& .MuiPaper-root": {},
    "& .MuiSelect-select": {
      padding: "10px 11px",
    },

    "& .MuiInputBase-root": {
      borderRadius: "10px",
      fontSize: 14,
      fontFamily: "Poppins",
      textAlign: "left",
      fontWeight: "bold",
      position: "relative",
      width: "100%",
      paddingLeft: "15px",
      background: props?.palette?.dashboardLeftPanel?.dropDownBgColor,
      color: props?.palette?.dashboardLeftPanel?.buttonTextColor,
      "& .MuiSvgIcon-root": {
        position: "absolute",
        right: "10px",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: props?.palette?.dashboardLeftPanel?.searchBgColor,
      },
    },
    "& .css-t0wjx6-MuiButtonBase-root-MuiMenuItem-root.Mui-selected.MuiMenuItem-root":
      {},

    "& .MuiSelect-iconOutlined": {
      color: `${props?.palette?.dashboardLeftPanel?.buttonTextColor} !important`,
    },
  }),

  selectSearchContainer: (props: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 18,
  }),
  selectContainer: (props: any) => ({ flex: 1 }),
  searchContainer: (props: any) => ({
    flex: "0.15 0 0%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  searchIconClass: (props: any) => ({
    cursor: "pointer",
    filter: props?.palette?.dashboardLeftPanel?.searchSvg,
    [muiTheme.breakpoints.down(1538)]: {
      width: "20px !important",
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: "14px !important",
    },
  }),
  searchClass: (props: any) => ({
    border: `1px solid ${props?.palette?.dashboardList?.dropDownBgColor}`,
    background: props?.palette?.dashboardLeftPanel?.dropDownBgColor,
    color: props?.palette?.dashboardList?.lightGrey3,
    borderRadius: 6,
    height: "48px",
    "& .MuiIconButton-root": {
      marginRight: 7,
    },
    "& .MuiInputBase-input": {
      padding: "14px 6px",
    },
  }),

  dashboardListSection: (props: any) => ({
    height: "calc(100vh - 266px)",
    overflowY: "auto",
  }),
  dashboardListSectionNotification: (props: any) => ({
    height: "calc(100vh - 340px)",
    overflowY: "scroll",
  }),
  noResultStyle: (props: any) => ({
    margin: 20,
    color: props?.palette?.dashboardList?.lightGrey3,
  }),
  chipButtonSection: (props: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "14px",
  }),
  searchNotificationContainer: (props: any) => ({ margin: "0 15px 15px 15px" }),

  listItemContainer: (props: any) => ({
    lineHeight: "35px",
    background: props?.palette?.dashboardList?.white,
    border: `1px solid ${props?.palette?.dashboardList?.lightBlue2}`, //lightBlue2
    borderRadius: "7px",
    cursor: "pointer",
    fontFamily: "Poppins",
    marginRight: 6,
    paddingBottom: 10,
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 14,
    },
  }),

  listItem: (props: any) => ({
    background:
      props?.palette?.dashboardLeftPanel?.listExpansionBackgroundColor,
    boxShadow: `0px 4px 16px ${props?.palette?.dashboardLeftPanel?.boxShadow}`,
    borderRadius: "10px",
    padding: "16px 22px",
    margin: "15px 15px 0px 15px",
    "&:first-child": {
      marginTop: "0px !important",
    },
    "& > h3": {
      marginBottom: 15,
    },
  }),

  listItemInner: (props: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    fontFamily: "Poppins",
    color: props?.palette?.dashboardLeftPanel?.cardTextColor,
    [muiTheme.breakpoints.down(1538)]: {
      fontSize: 14,
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: "10px !important",
    },
  }),

  innerListItemExpand: (props: any) => ({
    display: "flex",
    alignItems: "center",
    background:
      props?.palette?.dashboardLeftPanel?.listExpansionBackgroundColor,
    paddingBottom: "16px",
    "& img": {
      marginRight: 22,
    },
    "& > h3": {
      marginBottom: 15,
    },
  }),

  mapTitle: (props: any) => ({
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    letterSpacing: "0.01em",
    color: props?.palette?.dashboardLeftPanel?.listAreaTextColor,
    marginBottom: 6,
    maxWidth: "290px",
    overflow: "hidden",
    [muiTheme.breakpoints.down(1538)]: {
      fontSize: 10,
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: "8px !important",
    },

    // textOverflow: "ellipsis",
    // whiteSpace: "nowrap",
  }),

  mapSubTitle: (props: any) => ({
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "18px",
    letterSpacing: "0.01em",
    color: props?.palette?.dashboardLeftPanel?.listLastUpdatedColor,
    [muiTheme.breakpoints.down(1538)]: {
      fontSize: 10,
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: "8px !important",
    },
  }),
});
export default useStyles;
