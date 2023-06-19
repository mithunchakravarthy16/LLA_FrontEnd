import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import theme from "../../theme/theme";
import useStyles from "./styles";

const BirdsView = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const {} = useStyles(appTheme);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          Birds View
        </Grid>
      </Grid>
    </>
  );
};

export default BirdsView;
