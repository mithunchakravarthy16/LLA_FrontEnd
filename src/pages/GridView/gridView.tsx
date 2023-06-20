import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Highcharts from "highcharts";
import theme from "../../theme/theme";
import useStyles from "./styles";
import EnergyManagementCharts from "elements/energyManagementCharts";
import { LiveImg } from "assets/gridViewIcons";
import CustomizableProgressBar from "elements/ProgressBar";

const GridView = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
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
      <Grid container className={rootContainer}>
        <Grid container className={mainSection}>
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

          {/* Grid 3 */}
          <Grid item xs={4} className={gridStyles}>
            <Grid
              container
              xs={12}
              alignContent="space-between"
              style={{ height: "100%" }}
            >
              <Grid item xs={12} style={{ color: "#F26522" }}>
                SECURITY
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
                      19
                    </div>
                    <div
                      style={{
                        fontSize: "17px",
                        fontWeight: 500,
                        fontStyle: "italic",
                        color: "#B5B2B2",
                        flex: 1,
                        flexGrow: 1,
                      }}
                    >
                      Fire Detection
                    </div>
                  </div>
                  <div className={engMgntliveContentMiddleStyle}>
                    <div
                      style={{
                        fontSize: "22px",
                        fontWeight: 600,
                        flex: 1,
                        flexGrow: 1,
                      }}
                    >
                      18
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        fontStyle: "italic",
                        color: "#B5B2B2",
                        flex: 1,
                        flexGrow: 1,
                      }}
                    >
                      Tempering Alarm
                    </div>
                  </div>
                  <div className={engMgntliveContentStyle}>
                    <div
                      style={{
                        fontSize: "22px",
                        fontWeight: 600,
                        flex: 1,
                        flexGrow: 1,
                      }}
                    >
                      05
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        fontStyle: "italic",
                        color: "#B5B2B2",
                        flex: 1,
                        flexGrow: 1,
                      }}
                    >
                      Unauthorised Access
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div>Security Alerts</div>
                <EnergyManagementCharts
                  width={550}
                  height={200}
                  graphType={"area"}
                  isVisible={true}
                  units={""}
                  isCrosshair={true}
                  dataPoints={[
                    {
                      marker: {
                        enabled: false,
                      },
                      lineColor: "#5DE5CD90",
                      color: "#5DE5CD",
                      lineWidth: 2,
                      fillColor: {
                        linearGradient: [0, 0, 0, 200],
                        stops: [
                          [
                            0,
                            Highcharts.color("#5DE5CD")
                              .setOpacity(0.9)
                              .get("rgba"),
                          ],
                          [
                            1,
                            Highcharts.color("#000").setOpacity(0).get("rgba"),
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
                      ],
                    },
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>

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
                            <div style={{ fontSize: "20px", fontWeight: 600 }}>
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

          {/* Grid 6 */}
          <Grid item xs={4} className={gridStyles}>
          <Grid
              container
              xs={12}
              alignContent="space-between"
              style={{ height: "100%" }}
            >
              <Grid item xs={12} style={{ color: "#F26522" }}>
              ASSETS TRACKING
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
                      19
                    </div>
                    <div
                      style={{
                        fontSize: "17px",
                        fontWeight: 500,
                        fontStyle: "italic",
                        color: "#B5B2B2",
                        flex: 1,
                        flexGrow: 1,
                      }}
                    >
                      Temperature Changes
                    </div>
                  </div>
                  <div className={engMgntliveContentMiddleStyle}>
                    <div
                      style={{
                        fontSize: "22px",
                        fontWeight: 600,
                        flex: 1,
                        flexGrow: 1,
                      }}
                    >
                      20
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        fontStyle: "italic",
                        color: "#B5B2B2",
                        flex: 1,
                        flexGrow: 1,
                      }}
                    >
                      Assets Tracked
                    </div>
                  </div>
                  <div className={engMgntliveContentStyle}>
                    <div
                      style={{
                        fontSize: "22px",
                        fontWeight: 600,
                        flex: 1,
                        flexGrow: 1,
                      }}
                    >
                      1M
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        fontStyle: "italic",
                        color: "#B5B2B2",
                        flex: 1,
                        flexGrow: 1,
                      }}
                    >
                      Location Changes
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div>Assets Tracked</div>
                <EnergyManagementCharts
                  width={550}
                  height={200}
                  graphType={"areaspline"}
                  isVisible={true}
                  units={""}
                  isCrosshair={true}
                  dataPoints={[
                    {
                      marker: {
                        enabled: false,
                      },
                      lineColor: "#19E39295",
                      color: "#19E392",
                      lineWidth: 2,
                      fillColor: {
                        linearGradient: [0, 0, 0, 200],
                        stops: [
                          [
                            0,
                            Highcharts.color("#19E392")
                              .setOpacity(0.6)
                              .get("rgba"),
                          ],
                          [
                            1,
                            Highcharts.color("#000").setOpacity(0).get("rgba"),
                          ],
                        ],
                      },
                      data: [
                        1,
                        {
                          y: 3,
                          marker: {
                            enabled: false,
                          },
                        },
                        2,
                        5,
                        1,
                        3,
                        10,
                        4,
                        3,
                        4,
                        7,
                        10,
                      ],
                    },
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default GridView;
