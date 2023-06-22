import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import {
  CoTwoCloudIcon,
  VocCloudIcon,
  AirQualityIcon,
  PersonIcon,
} from "../../assets/topPanelListIcons";
import theme from "../../theme/theme";
import useStyles from "./styles";
import TopPanelListItemContainer from "components/TopPanelListItemContainer";

const Lighting: React.FC<any> = (props) => {
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
    pageHeading,
    bodyContainer,
    bodySubContainer,
    bodyLeftContainer,
    bodyLeftSubContainer,
    bodyLeftTopPanelContainer,
    bodyLeftTopPanelMapContainer,
    bodyLeftTopPanelSubContainer,
    bodyLeftTopPanelListContainer,
    graphOneContainer,
    graphTwoContainer,
  } = useStyles(appTheme);

  const topPanelListItems: any[] = [
    {
      icon: CoTwoCloudIcon,
      value: "643ppm",
    },
    {
      icon: VocCloudIcon,
      value: "15ppm",
    },
    {
      icon: AirQualityIcon,
      value: "12µg/m³",
    },
    {
      icon: AirQualityIcon,
      value: "50µg/m³",
    },
    {
      icon: PersonIcon,
      value: "200",
    },
  ];

  return (
    <>
      <Grid container className={rootContainer}>
        <Grid container className={mainSection}>
          <Grid item xs={12} alignItems="center" className={pageHeading}>
            LIGHTING
          </Grid>
          <Grid item xs={12} className={bodyContainer}>
            <Grid container xs={12} className={bodySubContainer}>
              <Grid item xs={9} className={bodyLeftContainer}>
                <Grid container xs={12} className={bodyLeftSubContainer}>
                  <Grid item xs={12} className={bodyLeftTopPanelContainer}>
                    <Grid
                      container
                      xs={12}
                      className={bodyLeftTopPanelSubContainer}
                    >
                      <Grid
                        item
                        xs={12}
                        className={bodyLeftTopPanelListContainer}
                      >
                       
                        <TopPanelListItemContainer topPanelListItems={topPanelListItems}/>
                        
                      </Grid>
                      <Grid item xs={6} className={graphOneContainer}>
                        Graph 1
                      </Grid>
                      <Grid item xs={6} className={graphTwoContainer}>
                        Graph 2
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className={bodyLeftTopPanelMapContainer}>
                    Google Map
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                Notification
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Lighting;
