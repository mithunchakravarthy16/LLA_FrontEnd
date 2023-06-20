import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  rootContainer: (props: any) => ({}),
  collapsedListItems: (props: any) => ({
    background: props?.palette?.notification?.listItemBg,
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
    border: `2px solid ${props?.palette?.notification?.listItemBorder}`,
    marginBottom: "15px",
    cursor: "pointer",
  }),
  listItemTitle: (props: any) => ({
    fontSize: 21,
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
    fontSize: 16,
  }),
  timeStampStyle: (props: any) => ({ fontWeight: 400, fontSize: 14 }),
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
});
export default useStyles;
