import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import theme from "../../theme/theme";
import useStyles from "./styles";

const Shuttles = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const {
    rootContainer,
    mainSection,
    topSection,
    bottomMainSection,
    bottomSection,
    bottomInnerSection,
  } = useStyles(appTheme);

  return (
    <>
      <Grid container className={rootContainer}>
        <Grid container className={mainSection}>
          <Grid item xs={4} className={topSection}>
            1
          </Grid>
          <Grid item xs={4} className={topSection}>
            2
          </Grid>
          <Grid item xs={4} className={topSection}>
            3
          </Grid>
        </Grid>
        <Grid container className={bottomMainSection}>
          <Grid item xs={8} className={bottomSection}>
            <div className={bottomInnerSection}>Map</div>
          </Grid>
          <Grid item xs={4} className={bottomSection}>
            <div className={bottomInnerSection}>Notification</div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Shuttles;
