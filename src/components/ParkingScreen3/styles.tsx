import { makeStyles } from "@mui/styles";
import muiTheme from "theme/muiTheme";


const useStyles = makeStyles({
  parkingScreen3Container: (props: any) => ({
    borderTop: "1px solid #711416",
    borderRight: "1px solid #711416",
    borderBottom: "1px solid #711416",
    borderRadius: 5,
    height: "100%",
  }),
  parkingScreen3BottomContainer: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
  }),
  leftBottomSection: (props: any) => ({
    display: "flex",
    border: "1px solid #968b8b",
    padding: "12px",
    borderRadius: "5px",
    fontSize: 16,
    lineHeight: '21px',
    [muiTheme.breakpoints.down(1543)]: {
      fontSize: 12
    }
  }),
  rightBottomSection: (props: any) => ({
    display: "flex",
    border: "1px solid #968b8b",
    borderRadius: "5px",
    width: "100%",
    padding: "18px 18px",
    justifyContent: "space-between",
    fontSize: 16,
    lineHeight: '21px',
    [muiTheme.breakpoints.down(1543)]: {
      fontSize: 12
    }
  }),
  leftBottomValueTitle: (props: any) => ({}),
  leftBottomTitle: (props: any) => ({}),
  leftBottomValue: (props: any) => ({}),
  rightBottomValueTitle: (props: any) => ({}),
  rightBottomTitle: (props: any) => ({}),
  rightBottomValue: (props: any) => ({}),
});
export default useStyles;
