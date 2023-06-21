import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Highcharts from "highcharts";
import theme from "../../theme/theme";
import useStyles from "./styles";
import EnergyManagementCharts from "elements/energyManagementCharts";
import { LiveImg } from "assets/gridViewIcons";
import CustomizableProgressBar from "elements/ProgressBar";

const GridViewScreenTwo = () => {

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
      {/* Grid 2 */}
      <Grid item xs={4} className={gridStyles}>
            <Grid
              container
              xs={12}
              alignContent="space-between"
              style={{ height: "100%" }}
            >
              <Grid item xs={12} style={{ color: "#F26522" }}>
                ENERGY MANAGEMENT
              </Grid>
              <Grid item xs={12}>
                <div
                  style={{
                    display: "grid",
                    // justifyContent: "space-between",
                    // padding: "25px 0px",
                    // borderRadius: "4px",
                    // alignItems: "flex-start",
                    gridTemplateColumns: `repeat(auto-fit, minmax(0, 1fr))`,
                  }}
                >
                  <div className={engMgntliveContentLeftStyle}>
                    <div
                      style={{
                        fontSize: "22px",
                        fontWeight: 600,
                        flex: 1,
                        flexGrow: 1,
                      }}
                    >
                      300kWh
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        fontStyle: "italic",
                        color: "#B5B2B2",
                        flexGrow: 1,
                        flex: 1,
                      }}
                    >
                      Energy Consumption
                    </div>
                  </div>
                  <div className={engMgntliveContentMiddleStyle}>
                    <div
                      style={{
                        fontSize: "22px",
                        fontWeight: 600,
                        flexGrow: 1,
                        flex: 1,
                      }}
                    >
                      30%
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        fontStyle: "italic",
                        color: "#B5B2B2",
                        flexGrow: 1,
                        flex: 1,
                      }}
                    >
                      Energy Saved
                    </div>
                  </div>
                  <div className={engMgntliveContentStyle}>
                    <div
                      style={{
                        fontSize: "22px",
                        fontWeight: 600,
                        flexGrow: 1,
                        flex: 1,
                      }}
                    >
                      $500
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        fontStyle: "italic",
                        color: "#B5B2B2",
                        flexGrow: 1,
                        flex: 1,
                      }}
                    >
                      Cost Saved
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}>
                <Grid container xs={12}>
                  <Grid item xs={12}>
                    <Grid
                      container
                      xs={12}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Grid item xs={4} style={{ fontSize: "18px" }}>
                        Electricity Consumption
                      </Grid>
                      <Grid item xs={8}>
                        <EnergyManagementCharts
                          width={360}
                          height={80}
                          isVisible={false}
                          graphType={"spline"}
                          units={"kWh"}
                          isCrosshair={false}
                          dataPoints={[
                            {
                              marker: {
                                enabled: false,
                              },
                              lineColor: "#EEC22590",
                              color: "#EEC225",
                              lineWidth: 2,
                              data: [
                                0,
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
                                0,
                              ],
                            },
                          ]}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      xs={12}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Grid item xs={4} style={{ fontSize: "18px" }}>
                        HAVC
                      </Grid>
                      <Grid item xs={8}>
                        <EnergyManagementCharts
                          width={360}
                          height={80}
                          graphType={"spline"}
                          isVisible={false}
                          units={"kWh"}
                          isCrosshair={false}
                          dataPoints={[
                            {
                              marker: {
                                enabled: false,
                              },
                              lineColor: "#1CC70090",
                              color: "#1CC700",
                              lineWidth: 2,
                              data: [
                                0,
                                {
                                  y: 4,
                                  marker: {
                                    enabled: false,
                                  },
                                },
                                3,
                                8,
                                1,
                                4,
                                1,
                                4,
                                2,
                                4,
                                7,
                                2,
                              ],
                            },
                          ]}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      xs={12}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Grid item xs={4} style={{ fontSize: "18px" }}>
                        Water Consumption
                      </Grid>
                      <Grid item xs={8}>
                        <EnergyManagementCharts
                          width={360}
                          height={80}
                          graphType={"spline"}
                          isVisible={false}
                          units={"KL"}
                          isCrosshair={false}
                          dataPoints={[
                            {
                              marker: {
                                enabled: false,
                              },
                              lineColor: "#0096C790",
                              color: "#0096C7",
                              lineWidth: 2,
                              data: [
                                0,
                                {
                                  y: 4,
                                  marker: {
                                    enabled: false,
                                  },
                                },
                                3,
                                8,
                                4,
                                2,
                                7,
                                4,
                                8,
                                4,
                                7,
                                0,
                              ],
                            },
                          ]}
                        />
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

export default GridViewScreenTwo;
