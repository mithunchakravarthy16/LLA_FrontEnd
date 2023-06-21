import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CustomizableProgressBar from "elements/ProgressBar";
import { LiveImg } from "assets/gridViewIcons";
import theme from "../../../theme/theme";
import useStyles from "../styles";

const GridViewScreenFive: React.FC<any> = (props) => {

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
    gridContainers,
    containerTitleScreenFive,
    subContainerScreenFive,
    childSubContainer,
    leftSubChildContainer,
    liveContainer,
    liveImgStyle,
    liveContentValue,
    liveContentLabel,
    lastweekContainer,
    lastweekTitleStyle,
    lastweekBodyContainer,
    lastweekBodySubContainer,
  } = useStyles(appTheme);



  return (
    <>
      {/* Grid 5 */}
      <Grid item xs={4} className={gridStyles}>
            <Grid container xs={12} className={gridContainers} >
              <Grid
                item
                xs={12}
                className={containerTitleScreenFive}                
              >
                FLEET MANAGEMENT
              </Grid>
              <Grid item xs={12} className={subContainerScreenFive} >
                <Grid container xs={12} className={childSubContainer} >
                  <Grid item xs={9}>
                    <Grid
                      container
                      xs={12}
                      alignContent="space-between"
                      className={leftSubChildContainer}
                     
                    >
                      <Grid item xs={12}>
                        <div
                        className={liveContainer}
                          
                        >
                          <div
                          className={liveImgStyle}
                            
                          >
                            <img width={50} height={30} src={LiveImg} />
                          </div>
                          <div className={liveContentLeftStyle}>
                            <div className={liveContentValue} >
                              24
                            </div>
                            <div
                            className={liveContentLabel}
                              
                            >
                              VEHICLES
                            </div>
                          </div>
                          <div className={liveContentStyle}>
                            <div className={liveContentValue} >
                              60
                            </div>
                            <div
                              className={liveContentLabel}
                            >
                              TRIPS
                            </div>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container xs={12} justifyContent="space-between">
                          <Grid item xs={6}>
                            <CustomizableProgressBar
                              innerHeading={"75%"}
                              progressValue={75}
                              radius={70}
                              strockColor={appTheme?.palette?.gridViewComponentGraphsColor?.screenFiveStrockColor1} //"#688F40"
                              trackStrokeColor={appTheme?.palette?.gridViewComponentGraphsColor?.screenFiveTrackStrokeColor1} //"#FFFFFF10"
                              subTitle={"Avg. Driving Score"}
                              strokeWidth={18}
                              trackStrokeWidth={18}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <CustomizableProgressBar
                              innerHeading={"50%"}
                              progressValue={50}
                              radius={70}
                              strockColor={appTheme?.palette?.gridViewComponentGraphsColor?.screenFiveStrockColor2} //"#3A9479"
                              trackStrokeColor={appTheme?.palette?.gridViewComponentGraphsColor?.screenFiveTrackStrokeColor2} //"#FFFFFF10"
                              subTitle={"Vehicle Active"}
                              strokeWidth={18}
                              trackStrokeWidth={18}
                            />
                          </Grid>
                        </Grid>
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
                            <div className={listItemValueStyle}>20</div>
                            <div className={listItemLabelStyle}>Incidents</div>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            direction="column"
                            className={rightListItemStyle}
                          >
                            <div className={listItemValueStyle}>18</div>
                            <div className={listItemLabelStyle}>
                              Fuel Consumed
                            </div>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            direction="column"
                            className={rightListItemStyleLastChild}
                          >
                            <div className={listItemValueStyle}>0.15</div>
                            <div className={listItemLabelStyle}>
                              Kg CO2 Reduced
                            </div>
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
  )
}

export default GridViewScreenFive;
