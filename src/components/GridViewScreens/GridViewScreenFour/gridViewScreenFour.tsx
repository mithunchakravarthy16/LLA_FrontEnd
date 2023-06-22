import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CustomizableProgressBar from "elements/ProgressBar";
import { LiveImg } from "assets/gridViewIcons";
import theme from "../../../theme/theme";
import useStyles from "../styles";

const GridViewScreenFour: React.FC<any> = (props) => {

  const {handleClick}=props;
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
    gridStyles,
    rightListItemStyle,
    rightListItemStyleLastChild,
    listItemValueStyle,
    listItemLabelStyle,
    liveContentStyle,
    liveContentLeftStyle,
    aqiCircleStyle,
    gridContainers,
    containerTitle,
    subContainer,
    childSubContainer,
    leftSubChildContainer,
    liveContainer,
    liveImgStyle,
    liveContentValue,
    liveContentValueGreen,
    liveContentLabel,
    liveContentLabelGreen,
    lastweekContainer,
    lastweekTitleStyle,
    lastweekBodyContainer,
    lastweekBodySubContainer,
  } = useStyles(appTheme);

  return (
    <>
      {/* Grid 4 */}
      <Grid item xs={4} className={gridStyles} onClick={()=>{handleClick("/lighting")}} >
        <Grid container xs={12} className={gridContainers}>
          <Grid item xs={12} className={containerTitle}>
            LIGHTING
          </Grid>
          <Grid item xs={12} className={subContainer}>
            <Grid container xs={12} className={childSubContainer}>
              <Grid item xs={9}>
                <Grid
                  container
                  xs={12}
                  alignContent="space-between"
                  className={leftSubChildContainer}
                >
                  <Grid item xs={12}>
                    <CustomizableProgressBar
                      innerHeading={"80%"}
                      innerSubHeading={"Wifi Users"}
                      progressValue={80}
                      radius={90}
                      strockColor={appTheme?.palette?.gridViewComponentGraphsColor?.screenFourStrockColor} //"#3D9B7F"
                      trackStrokeColor={appTheme?.palette?.gridViewComponentGraphsColor?.screenFourTrackStrokeColor} //"#FFFFFF10"
                      strokeWidth={18}
                      trackStrokeWidth={18}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <div className={liveContainer}>
                      <div className={liveImgStyle}>
                        <img width={50} height={30} src={LiveImg} />
                      </div>
                      <div className={liveContentLeftStyle}>
                        <div className={liveContentValue}>64Kw</div>
                        <div className={liveContentLabel}>CONSUMED</div>
                      </div>
                      <div className={liveContentStyle}>
                        <div className={liveContentValueGreen}>50</div>
                        <div className={liveContentLabelGreen}>
                          <div>AQI</div>
                          <div className={aqiCircleStyle}></div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid
                  container
                  xs={12}
                  alignItems="center"
                  textAlign="center"
                  className={lastweekContainer}
                  
                >
                  <Grid
                    item
                    xs={12}
                    className={lastweekTitleStyle}
                    
                  >
                    Last Week
                  </Grid>
                  <Grid item xs={12} className={lastweekBodyContainer} >
                    <Grid container xs={12} className={lastweekBodySubContainer} >
                      <Grid
                        item
                        xs={12}
                        className={rightListItemStyle}
                        direction="column"
                      >
                        <div className={listItemValueStyle}>643ppm</div>
                        <div className={listItemLabelStyle}>CO2Level</div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        direction="column"
                        className={rightListItemStyle}
                      >
                        <div className={listItemValueStyle}>15ppm</div>
                        <div className={listItemLabelStyle}>VOC Level</div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        direction="column"
                        className={rightListItemStyleLastChild}
                      >
                        <div className={listItemValueStyle}>12µg/m³</div>
                        <div className={listItemLabelStyle}>PM2.5</div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default GridViewScreenFour;
