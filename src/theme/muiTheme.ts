import { createTheme } from "@mui/material/styles";
import breakpoints from "./breakpoints";

const muiTheme = createTheme();
muiTheme.breakpoints = { ...muiTheme.breakpoints, ...breakpoints };

export default muiTheme;
