import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import GridViewScreenOne from "components/GridViewScreens/GridViewScreenOne";
import GridViewScreenTwo from "components/GridViewScreens/GridViewScreenTwo";
import GridViewScreenThree from "components/GridViewScreens/GridViewScreenThree";
import GridViewScreenFour from "components/GridViewScreens/GridViewScreenFour";
import GridViewScreenFive from "components/GridViewScreens/GridViewScreenFive";
import GridViewScreenSix from "components/GridViewScreens/GridViewScreenSix";
import theme from "../../theme/theme";
import useStyles from "./styles";

const GridView : React.FC<any> = (props) => {

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  useEffect(() => {
    switch (selectedTheme) {
      case "light":
        setAppTheme(theme?.lightTheme);
        break;
      case "dark":
        setAppTheme(theme?.darkTheme);
        break;
      default:
        setAppTheme(theme?.defaultTheme);
        break;
    }
  }, [selectedTheme]);

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
