import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Highcharts from "highcharts";
import theme from "../../theme/theme";
import useStyles from "./styles";
import EnergyManagementCharts from "elements/energyManagementCharts";
import { LiveImg } from "assets/gridViewIcons";
import CustomizableProgressBar from "elements/ProgressBar";

const GridViewScreenFour = () => {

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
      {/* Grid 4 */}
      <Grid item xs={4} className={gridStyles}>
            <Grid container xs={12} style={{ height: "100%" }}>
              <Grid
                item
                xs={12}
                style={{
                  paddingBottom: "15px",
                  height: "15%",
                  color: "#F26522",
                }}
              >
                LIGHTING
              </Grid>
              <Grid item xs={12} style={{ height: "85%" }}>
                <Grid container xs={12} style={{ height: "100%" }}>
                  <Grid item xs={9}>
                    <Grid
                      container
                      xs={12}
                      alignContent="space-between"
                      style={{ height: "100%" }}
                    >
                      <Grid item xs={12}>
                        <CustomizableProgressBar
                          innerHeading={"80%"}
                          innerSubHeading={"Wifi Users"}
                          progressValue={80}
                          radius={90}
                          strockColor={"#3D9B7F"}
                          trackStrokeColor={"#FFFFFF10"}
                          strokeWidth={18}
                          trackStrokeWidth={18}                          
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
                              64Kw
                            </div>
                            <div
                              style={{
                                fontSize: "14px",
                                fontWeight: 500,
                                fontStyle: "italic",
                              }}
                            >
                              CONSUMED
                            </div>
                          </div>
                          <div className={liveContentStyle}>
                            <div style={{ fontSize: "20px", fontWeight: 600, color: "#80C53B" }}>
                              50
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
  )
}

export default GridViewScreenFour;
