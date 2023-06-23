import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Highcharts from "highcharts";
import Chart from "elements/Chart";
import { LiveImg } from "assets/gridViewIcons";
import theme from "../../../theme/theme";
import useStyles from "../styles";

const GridViewScreenOne : React.FC<any> = (props) => {
 const {handleClick}=props
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
    containerTitle,
    subContainer,
    childSubContainer,
    leftSubChildContainer,
    graphTitleScreenOne,
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
      {/* Gride 1 */}
      <Grid item xs={4} className={gridStyles} >
      {/* <Grid item xs={4} className={gridStyles} onClick={()=>{handleClick("/parking")}}> */}

        <Grid container xs={12} className={gridContainers}>
          <Grid
            item
            xs={12}
            className={containerTitle}
          >
            PARKING
          </Grid>
          <Grid item xs={12} className={subContainer}>
            <Grid container xs={12} className={childSubContainer} >
              <Grid item xs={9}>
                <Grid
                  container
                  xs={12}
                  alignContent="space-between"
                  className={leftSubChildContainer}
                >
                  <Grid item xs={12}>
                    <div className={graphTitleScreenOne} >
                      Occupancy
                    </div>
                    <Chart
                      width={414}
                      height={160}
                      graphType={"areaspline"}
                      isVisible={true}
                      units={"%"}
                      isCrosshair={true}
                      crossHairLineColor={"#73B35A90"}
                      dataPoints={[
                        {
                          marker: {
                            enabled: false,
                          },
                          lineColor: "#73B35A90",
                          color: "#73B35A",
                          lineWidth: 2,
                          fillColor: {
                            linearGradient: [0, 0, 0, 200],
                            stops: [
                              [
                                0,
                                Highcharts.color("#73B35A")
                                  .setOpacity(0.4)
                                  .get("rgba"),
                              ],
                              [
                                0.8,
                                Highcharts.color(appTheme?.palette?.gridViewComponentGraphsColor?.highChartsGradient)
                                  .setOpacity(0)
                                  .get("rgba"),
                              ],
                            ],
                          },
                          data: [
                            1, 4, 3, 5, 4, 2, 8, 4, 3, 4, 7, 5, 1, 4, 3, 5, 4,
                            2, 8, 4, 3, 4, 1, 4
                          ],
                        },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <div
                    className={liveContainer}
                    >
                      <div className={liveImgStyle} >
                        <img width={50} height={30} src={LiveImg} />
                      </div>
                      <div className={liveContentLeftStyle}>
                        <div className={liveContentValue} >
                        398 
                        </div>
                        <div className={liveContentLabel} >
                          AVAILABLE
                        </div>
                      </div>
                      <div className={liveContentStyle}>
                        <div className={liveContentValue} >
                        354
                        </div>
                        <div className={liveContentLabel} >
                          OCCUPIED
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
                    Today
                  </Grid>
                  <Grid item xs={12} className={lastweekBodyContainer} >
                    <Grid container xs={12} className={lastweekBodySubContainer} >
                      <Grid
                        item
                        xs={12}
                        className={rightListItemStyle}
                        direction="column"
                      >
                        <div className={listItemValueStyle}>10Hrs</div>
                        <div className={listItemLabelStyle}>Avg.Parking Hrs.</div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        direction="column"
                        className={rightListItemStyle}
                      >
                        <div className={listItemValueStyle}>1.5</div>
                        <div className={listItemLabelStyle}>Rotation Index</div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        direction="column"
                        className={rightListItemStyleLastChild}
                      >
                        <div className={listItemValueStyle}>20Kg</div>
                        <div className={listItemLabelStyle}>
                        Carbon Emission
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
  );
};

export default GridViewScreenOne;
