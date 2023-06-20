import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  rootContainer: (props: any) => ({
    position: "relative",
    background: "#1D2D38",
    // border: "1px solid #FFFFFF",
    borderRadius: "15px",
    width: "100%",
    // width: 200,
    // height: 50,
    // padding: 10,
  }),
  expandedListClass: (props: any) => ({
    // border: `0.5px solid ${props?.palette?.dashboardList?.darkPurple}`,
    // background: props?.palette?.dashboardList?.darkPurple2,
    // margin: 10,
    padding: "15px 15px 15px 15px",
    borderRadius: 5,
    cursor: "pointer",
  }),
  expandedListClassViewDetails: (props: any) => ({
    padding: "15px 15px 15px 15px",
    borderRadius: 5,
    cursor: "pointer",
  }),
  collapsedListClass: (props: any) => ({
    border: `0.5px solid ${props?.palette?.dashboardList?.darkPurple}`,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    cursor: "pointer",
  }),
  itemTitleStyle: (props: any) => ({
    textTransform: "uppercase",
    color: props?.palette?.dashboardList?.black,
    fontFamily: `'Nunito Sans', sans-serif !important`,
    fontSize: "14px",
    fontWeight: 800,
    marginBottom: 8,
  }),
  itemAreaStyle: (props: any) => ({
    // color: props?.palette?.dashboardList?.darkGrey3, // darkGrey3
    fontSize: 12,
    fontFamily: `'Nunito Sans', sans-serif !important`,
    fontWeight: 700,
    padding: "5px 0px",
  }),
  explandedListStyle: (props: any) => ({
    background: props?.palette?.dashboardList?.white, // colorWhite
    fontSize: 12,
    fontFamily: `'Nunito Sans', sans-serif !important`,
    fontWeight: 700,
    margin: 10,
    padding: 10,
  }),
  displayFlex: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
  }),
  NotificationInfoWindowContentSection: () => ({
    position: "relative",
    "& .closeIcon": {
      position: "absolute",
      right: 5,
      top: "-7px",
      width: 20,
      height: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
  }),
  itemListCount: (props: any) => ({
    color: props?.palette?.dashboardList?.black,
    fontSize: "13px",
    fontFamily: `'Nunito Sans', sans-serif !important`,
    fontWeight: 800,
    margin: "5px 25px 0px 0px",
  }),
  itemListName: (props: any) => ({
    color: props?.palette?.dashboardList?.darkGrey4, // 6B6B6B
    fontSize: "12px",
    fontFamily: `'Nunito Sans', sans-serif !important`,
    fontWeight: 700,
    margin: "3px 20px 10px 0px",
  }),
  selectedButtonStyles: (props: any) => ({
    backgroundColor: `${props?.palette?.dashboardList?.darkPurple2} !important`,
    borderRadius: "15px !important",
    fontFamily: `'Nunito Sans', sans-serif !important`,
    fontSize: "12px !important",
    lineHeight: "16px !important",
    boxShadow: "none !important",
    fontWeight: 700,
    textTransform: "none",
  }),
  timeStampStyle: (props: any) => ({
    color: props?.palette?.dashboardList?.darkGrey3,
    fontSize: "12px !important",
    fontFamily: `'Nunito Sans', sans-serif !important`,
    fontWeight: 500,
    alignSelf: "center",
    marginRight: 18,
  }),
  markerCloseIcon: (props: any) => ({
    margin: "-10px 0px 0px 0px",
    fontSize: 13,
    fontFamily: `'Nunito Sans', sans-serif !important`,
    padding: "0px 0px 0px 15px",
  }),

  markerCloseIconDashboard: (props: any) => ({
    margin: "-10px 0px 0px",
    fontSize: 13,
    fontFamily: `'Nunito Sans', sans-serif !important`,
    padding: "0px 0px 0px 15px",
  }),
  itemListIconStyle: (props: any) => ({
    marginRight: 5,
  }),
  connectedStatusButtonStyle: (props: any) => ({
    padding: 5,
    borderRadius: 5,
    background: props?.palette?.dashboardList?.connectedButtonBackground,
    color: props?.palette?.dashboardList?.connectedButtonFont,
    fontSize: "12px !important",
    fontFamily: `'Nunito Sans', sans-serif !important`,
    fontWeight: 700,
  }),
  disConnectedStatusButtonStyle: (props: any) => ({
    padding: 5,
    borderRadius: 5,
    background: props?.palette?.dashboardList?.disconnectedButtonBackground,
    color: props?.palette?.dashboardList?.disconnectedButtonFont,
    fontSize: "12px !important",
    fontFamily: `'Nunito Sans', sans-serif !important`,
    fontWeight: 700,
  }),
  connectedButtonPosition: (props: any) => ({
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: -10,
  }),
  trailerAreaStyle: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
    color: props?.palette?.dashboardList?.darkGrey3, // darkGrey3
    fontSize: 12,
    fontFamily: `'Nunito Sans', sans-serif !important`,
    fontWeight: 700,
    margin: "2px 17px 12px 0px",
  }),
  trailerLocationStyle: (props: any) => ({
    display: "flex",
    alignSelf: "center",
    color: props?.palette?.dashboardList?.darkGrey3, // darkGrey3
    fontSize: 12,
    fontFamily: `'Nunito Sans', sans-serif !important`,
    fontWeight: 700,
  }),
  trailerArrowStyle: (props: any) => ({
    display: "flex",
    alignItems: "center",
  }),
  trailerLocationIconStyle: (props: any) => ({
    marginRight: 5,
  }),
  trailerLocationTextStyle: (props: any) => ({
    color: props?.palette?.dashboardList?.darkGrey3, // darkGrey3
    fontSize: 13,
    fontFamily: `'Nunito Sans', sans-serif !important`,
    fontWeight: 700,
  }),
  itemListStyle: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: 8,
  }),
});
export default useStyles;
