/** @format */

import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import GridViewScreenOne from "components/GridViewScreens/GridViewScreenOne";
import GridViewScreenTwo from "components/GridViewScreens/GridViewScreenTwo";
import GridViewScreenThree from "components/GridViewScreens/GridViewScreenThree";
import GridViewScreenFour from "components/GridViewScreens/GridViewScreenFour";
import GridViewScreenFive from "components/GridViewScreens/GridViewScreenFive";
import GridViewScreenSix from "components/GridViewScreens/GridViewScreenSix";
import theme from "../../theme/theme";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import Loader from "elements/Loader";

const GridView: React.FC<any> = (props) => {
  const adminPanelData = useSelector(
    (state: any) => state?.adminPanel?.getConfigData?.body
  );

  const [selectedTheme, setSelectedTheme] = useState<any>();
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  useEffect(() => {
    setSelectedTheme(adminPanelData?.appearance);
  }, [adminPanelData]);

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

  const { rootContainer, mainSection } = useStyles(appTheme);

  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false)

  useEffect(()=>{
    setTimeout(()=>{
      setIsDataLoaded(!isDataLoaded)
    },500)
  },[])


  return (
    <>
    {
isDataLoaded ?
    
      <div className={rootContainer}>
        <Grid container className={mainSection}>
          {/* Gride 1 */}
          <GridViewScreenOne
            handleClick={handleClick}
            selectedTheme={selectedTheme}
          />

          {/* Grid 2 */}
          <GridViewScreenTwo
            handleClick={handleClick}
            selectedTheme={selectedTheme}
          />

          {/* Grid 3 */}
          <GridViewScreenThree
            handleClick={handleClick}
            selectedTheme={selectedTheme}
          />

          {/* Grid 4 */}
          <GridViewScreenFour
            handleClick={handleClick}
            selectedTheme={selectedTheme}
          />

          {/* Grid 5 */}
          <GridViewScreenFive
            handleClick={handleClick}
            selectedTheme={selectedTheme}
          />

          {/* Grid 6 */}
          <GridViewScreenSix
            handleClick={handleClick}
            selectedTheme={selectedTheme}
          />
        </Grid>
      </div>
      :
      <Loader isHundredVh = {true}/>
}
    </>
  );
};

export default GridView;
