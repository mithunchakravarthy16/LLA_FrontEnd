import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Highcharts from "highcharts";
import theme from "../../theme/theme";
import useStyles from "./styles";
import EnergyManagementCharts from "elements/energyManagementCharts";
import { LiveImg } from "assets/gridViewIcons";
import CustomizableProgressBar from "elements/ProgressBar";
import GridViewScreenOne from "components/GridViewScreenOne";
import GridViewScreenTwo from "components/GridViewScreenTwo";
import GridViewScreenThree from "components/GridViewScreenThree";
import GridViewScreenFour from "components/GridViewScreenFour";
import GridViewScreenFive from "components/GridViewScreenFive";
import GridViewScreenSix from "components/GridViewScreenSix";

const GridView = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const {
    rootContainer,
    mainSection,
  } = useStyles(appTheme);

  return (
    <>
      <Grid container className={rootContainer}>
        <Grid container className={mainSection}>

          {/* Gride 1 */}
          <GridViewScreenOne/>

          {/* Grid 2 */}
          <GridViewScreenTwo/>

          {/* Grid 3 */}
          <GridViewScreenThree/>

          {/* Grid 4 */}
          <GridViewScreenFour/>

          {/* Grid 5 */}
          <GridViewScreenFive/>

          {/* Grid 6 */}
          <GridViewScreenSix/>

        </Grid>
      </Grid>
    </>
  );
};

export default GridView;
