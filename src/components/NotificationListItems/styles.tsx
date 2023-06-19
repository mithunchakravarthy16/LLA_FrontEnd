import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  rootContainer: (props: any) => ({}),
  collapsedListItems: (props: any) => ({
    background: "#142231",
    padding: "13px",
    borderRadius: "10px",
    border: "2px solid #5662784a",
    marginBottom: "15px",
    cursor: "pointer",
  }),
  expandedListItems: (props: any) => ({
    background: "#142231",
    padding: "13px",
    borderRadius: "10px",
    border: "2px solid #5662784a",
    marginBottom: "15px",
    cursor: "pointer",
  }),
  listItemTitle: (props: any) => ({}),
  collapsedlistItemRow2: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
  }),
  listItemSubTitle: (props: any) => ({}),
  timeStampStyle: (props: any) => ({}),
  expandedListItemRow2: (props: any) => ({}),
  expandedListItemRow3: (props: any) => ({}),
  expandedListItemRow4: (props: any) => ({}),
  buttonStyle: (props: any) => ({}),
});
export default useStyles;
