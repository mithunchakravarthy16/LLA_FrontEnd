import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Highcharts from "highcharts";
import theme from "../../theme/theme";
import useStyles from "./styles";
import EnergyManagementCharts from "elements/energyManagementCharts";
import { LiveImg } from "assets/gridViewIcons";
import CustomizableProgressBar from "elements/ProgressBar";

const GridViewScreenFive = () => {

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
      {/* Grid 5 */}
      <Grid item xs={4} className={gridStyles}>
            <Grid container xs={12} style={{ height: "100%" }}>
              <Grid
                item
                xs={12}
                style={{
                  paddingBottom: "15px",
                  height: "18%",
                  color: "#F26522",
                }}
              >
                FLEET MANAGEMENT
              </Grid>
              <Grid item xs={12} style={{ height: "82%" }}>
                <Grid container xs={12} style={{ height: "100%" }}>
                  <Grid item xs={9}>
                    <Grid
                      container
                      xs={12}
                      alignContent="space-between"
                      style={{ height: "100%" }}
                    >
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
                              24
                            </div>
                            <div
                              style={{
                                fontSize: "14px",
                                fontWeight: 500,
                                fontStyle: "italic",
                              }}
                            >
                              VEHICLES
                            </div>
                          </div>
                          <div className={liveContentStyle}>
                            <div style={{ fontSize: "20px", fontWeight: 600 }}>
                              60
                            </div>
                            <div
                              style={{
                                fontSize: "14px",
                                fontWeight: 500,
                                fontStyle: "italic",
                                display: "flex",
                                alignItems: "center",
                                columnGap: "15px",
                              }}
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
                              strockColor={"#688F40"}
                              trackStrokeColor={"#FFFFFF10"}
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
                              strockColor={"#3A9479"}
                              trackStrokeColor={"#FFFFFF10"}
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
