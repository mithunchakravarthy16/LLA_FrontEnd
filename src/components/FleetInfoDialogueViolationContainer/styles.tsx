/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles(
  {
    violationListContainer: (props: any) => ({
      height: "95%",
      overflowY: "auto",
  
      "&::-webkit-scrollbar": {
        width: 0,
      },
    }),
  },
  { index: 1 }
);
export default useStyles;
