import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Highcharts from "highcharts";
import theme from "../../theme/theme";
import useStyles from "./styles";
import EnergyManagementCharts from "elements/energyManagementCharts";
import { LiveImg } from "assets/gridViewIcons";
import CustomizableProgressBar from "elements/ProgressBar";

const GridViewScreenOne = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  // useEffect(() => {
  //   switch (selectedTheme) {
  //     case "red":
  //       setAppTheme(theme?.redTheme);
  //       break;
  //     case "green":
  //       setAppTheme(theme?.greenTheme);
  //       break;
  //     case "yellow":
  //       setAppTheme(theme?.yellowTheme);
  //       break;
  //     case "default":
  //       setAppTheme(theme?.defaultTheme);
  //       break;
  //     default:
  //       setAppTheme(theme?.defaultTheme);
  //       break;
  //   }
  // }, [selectedTheme]);

  const {
    rootContainer,
    mainSection,
    gridStyles,
    rightListItemStyle,
    rightListItemStyleLastChild,
    listItemValueStyle,
    listItemLabelStyle,
    liveContentStyle,
    liveContentLeftStyle,
    engMgntliveContentLeftStyle,
    engMgntliveContentStyle,
    engMgntliveContentMiddleStyle,
    aqiCircleStyle,
  } = useStyles(appTheme);

  return (
    <>
      {/* Gride 1 */}
      <Grid item xs={4} className={gridStyles}>
        <Grid container xs={12} style={{ height: "100%" }}>
          <Grid
            item
            xs={12}
            style={{
              paddingBottom: "15px",
              height: "10%",
              color: "#F26522",
            }}
          >
            PARKING
          </Grid>
          <Grid item xs={12} style={{ height: "90%" }}>
            <Grid container xs={12} style={{ height: "100%" }}>
              <Grid item xs={9}>
                <Grid
                  container
                  xs={12}
                  alignContent="space-between"
                  style={{ height: "100%" }}
                >
                  <Grid item xs={12}>
                    <div style={{ width: "100%", marginBottom: "20px" }}>
                      Occupancy
                    </div>
                    <EnergyManagementCharts
                      width={414}
                      height={160}
                      graphType={"areaspline"}
                      isVisible={true}
                      units={"%"}
                      isCrosshair={true}
                      dataPoints={[
                        {
                          marker: {
                            enabled: false,
                          },
                          lineColor: "#3DFFDC90",
                          color: "#3DFFDC",
                          lineWidth: 2,
                          fillColor: {
                            linearGradient: [0, 0, 0, 200],
                            stops: [
                              [
                                0,
                                Highcharts.color("#3DFFDC")
                                  .setOpacity(0.4)
                                  .get("rgba"),
                              ],
                              [
                                0.8,
                                Highcharts.color("#000")
                                  .setOpacity(0)
                                  .get("rgba"),
                              ],
                            ],
                          },
                          data: [
                            1,
                            {
                              y: 4,
                              marker: {
                                enabled: false,
                              },
                            },
                            3,
                            5,
                            4,
                            2,
                            8,
                            4,
                            3,
                            4,
                            7,
                            5,
                            1,
                            {
                              y: 4,
                              marker: {
                                enabled: false,
                              },
                            },
                            3,
                            5,
                            4,
                            2,
                            8,
                            4,
                            3,
                            // 4,
                            // 7,
                            // 5,
                          ],
                        },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        padding: "25px 0px",
                        backgroundColor: "#09121B",
                        borderRadius: "4px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "-15px",
                          left: "20px",
                        }}
                      >
                        <img width={50} height={30} src={LiveImg} />
                      </div>
                      <div className={liveContentLeftStyle}>
                        <div style={{ fontSize: "20px", fontWeight: 600 }}>
                          354
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: 500,
                            fontStyle: "italic",
                          }}
                        >
                          AVAILABLE
                        </div>
                      </div>
                      <div className={liveContentStyle}>
                        <div style={{ fontSize: "20px", fontWeight: 600 }}>
                          398
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: 500,
                            fontStyle: "italic",
                          }}
                        >
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
                  style={{ paddingLeft: "32px", height: "100%" }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{
                      fontWeight: 500,
                      fontSize: "18px",
                      color: "#5DE6CD",
                    }}
                  >
                    Last Week
                  </Grid>
                  <Grid item xs={12} style={{ height: "90%" }}>
                    <Grid container xs={12} style={{ height: "100%" }}>
                      <Grid
                        item
                        xs={12}
                        className={rightListItemStyle}
                        direction="column"
                      >
                        <div className={listItemValueStyle}>19.5</div>
                        <div className={listItemLabelStyle}>Hrs.Saved</div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        direction="column"
                        className={rightListItemStyle}
                      >
                        <div className={listItemValueStyle}>19.5</div>
                        <div className={listItemLabelStyle}>Gal Saved</div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        direction="column"
                        className={rightListItemStyleLastChild}
                      >
                        <div className={listItemValueStyle}>19.5</div>
                        <div className={listItemLabelStyle}>
                          Metric Ton CO2 reduced
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
