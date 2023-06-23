import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  rootContainer: (props: any) => ({
    minWidth: props?.pageName === "markerCallout" ? "400px" : "380px",
  }),
  collapsedListItems: (props: any) => ({
    background: props?.palette?.notification?.listItemBg, //rgba(7, 48, 77, 0.8)
    padding: "13px",
    borderRadius: "10px",
    border: `2px solid ${props?.palette?.notification?.listItemBorder}`,
    marginBottom: "15px",
    cursor: "pointer",
  }),
  expandedListItems: (props: any) => ({
    background: props?.palette?.notification?.listItemBg,
    padding: "13px",
    borderRadius: "10px",
    border:
      props?.pageName === "markerCallout"
        ? "none"
        : `1.5px solid ${props?.palette?.notification?.expansionListItemBorder}`,
    marginBottom: props?.pageName === "markerCallout" ? 0 : "15px",
    cursor: "pointer",
  }),
  listItemTitle: (props: any) => ({
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: "0.5px",
    marginBottom: 12,
  }),
  collapsedlistItemRow2: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
  }),
  listItemSubTitle: (props: any) => ({
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: 14,
  }),
  timeStampStyle: (props: any) => ({ fontWeight: 400, fontSize: 13 }),
  expandedListItemRow2: (props: any) => ({
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: "0.5px",
    marginBottom: 12,
  }),
  expandedListItemRow3: (props: any) => ({
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: "0.5px",
    marginBottom: 12,
  }),
  expandedListItemRow4: (props: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }),
  buttonStyle: (props: any) => ({}),
  markerCloseIcon: (props: any) => ({
    margin: "4px 0px 0px 0px",
    fontSize: 13,
    fontFamily: `'Nunito Sans', sans-serif !important`,
    padding: "0px 0px 0px 15px",
  }),
  listItemCallout: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
  }),
});
export default useStyles;
