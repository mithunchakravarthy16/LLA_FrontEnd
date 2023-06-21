import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { BuildingFocusIcon } from "../../assets/energyManagementIcons";
import useStyles from "./styles";
import Chart from "elements/Chart";

const EnergyManagementContainer = () => {
  const [appTheme, setAppTheme] = useState();
  // const [selectedTheme, setSelectedTheme] = useState(
  //     JSON.parse(localStorage.getItem("theme")!)
  //   );

  //   useEffect(() => {
  //     switch (selectedTheme) {
  //       case "light":
  //         setAppTheme(customTheme?.lightTheme);
  //         break;
  //       case "dark":
  //         setAppTheme(customTheme?.darkTheme);
  //         break;
  //       default:
  //         setAppTheme(customTheme?.defaultTheme);
  //         break;
  //     }
  //   }, [selectedTheme]);

  const { flipCardContainer, frontFlipCard, backFlipCard } =
    useStyles(appTheme);

  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleFlipCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <Grid container xs={12} style={{ color: "#fff", background: "#1d2c4d" }}>
        <Grid item xs={12}>
          <Grid container xs={12}>
            <Grid
              item
              xs={4}
              style={{ background: "#1b1b1b", border: "1px solid #FF0000" }}
            >
              <Grid container xs={12}>
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      background: "#0049FF",
                      padding: "5px",
                      fontSize: "18px",
                      fontWeight: 700,
                    }}
                  >
                    <img src={""} alt="img" />
                    {` | ENERGY MANAGEMENT`}{" "}
                  </div>
                  <div style={{ display: "flex", columnGap: "20px" }}>
                    <div style={{ display: "flex" }}>
                      <img src="" alt="img" />
                      <div>147</div>{" "}
                    </div>
                    <div style={{ display: "flex" }}>
                      <img src="" alt="img" />
                      <div>47</div>{" "}
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} style={{ padding: "0px 15px 15px 15px" }}>
                  <Grid container xs={12} style={{ height: "180px" }}>
                    <Grid
                      item
                      xs={4}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <Chart
                        width={150}
                        height={60}
                        isVisible={false}
                        dataPoints={[
                          {
                            marker: {
                              enabled: false,
                            },
                            lineColor: "#02c7f8",
                            color: "white",
                            lineWidth: 3,
                            data: [
                              0,
                              {
                                y: 4,
                                marker: {
                                  enabled: true,
                                },
                              },
                              5,
                              6,
                              9,
                              2,
                              0,
                            ],
                          },
                        ]}
                      />
                      <p style={{ fontSize: "0.9em", fontWeight: 800 }}>
                        Electricity Consumption
                      </p>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <Chart
                        width={150}
                        height={60}
                        isVisible={false}
                        dataPoints={[
                          {
                            marker: {
                              enabled: false,
                            },
                            lineColor: "#5e5de5",
                            color: "white",
                            lineWidth: 3,
                            data: [
                              0,
                              4,
                              9,
                              {
                                y: 4,
                                marker: {
                                  enabled: true,
                                },
                              },
                              2,
                              2,
                              0,
                            ],
                          },
                        ]}
                      />
                      <p style={{ fontSize: "0.9em", fontWeight: 800 }}>HAVC</p>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <Chart
                        width={150}
                        height={60}
                        isVisible={false}
                        dataPoints={[
                          {
                            marker: {
                              enabled: false,
                            },
                            lineColor: "#2f4473",
                            color: "white",
                            lineWidth: 3,
                            data: [
                              0,
                              {
                                y: 4,
                                marker: {
                                  enabled: true,
                                },
                              },
                              5,
                              9,
                              3,
                              9,
                              0,
                            ],
                          },
                        ]}
                      />
                      <p style={{ fontSize: "0.9em", fontWeight: 800 }}>
                        Water Consumption
                      </p>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} style={{ padding: "0px 30px 30px 30px" }}>
                  15% Energy Saving
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={4}
              style={{
                background: "#1b1b1b",
                borderTop: "1px solid #FF0000",
                borderBottom: "1px solid #FF0000",
              }}
            >
              <Grid container xs={12}>
                {/* <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "20px",
                  }}
                >
                  <div>Energy Consumption</div>
                </Grid> */}
                <Grid item xs={12} style={{ padding: "0px 15px" }}>
                  <Grid container xs={12} style={{ height: "280px" }}>
                    <Grid item xs={6} style={{ paddingBottom: "10px" }}>
                      <div>Buildings</div>
                      <Chart
                      xAxisInterval={5}
                        isVisible={true}
                        width={300}
                        height={130}
                        dataPoints={[
                          {
                            lineColor: "#02c7f8",
                            lineWidth: 3,
                            color: "white",
                            data: [0, 3, 7, 2, 9],
                          },
                        ]}
                      />
                    </Grid>
                    <Grid item xs={6} style={{ paddingBottom: "10px" }}>
                      <div>Labs</div>
                      <Chart
                      xAxisInterval={5}
                        isVisible={true}
                        width={300}
                        height={130}
                        dataPoints={[
                          {
                            lineWidth: 3,
                            color: "white",
                            lineColor: "#5e5de5",
                            data: [0, 9, 9, 3, 0],
                          },
                        ]}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <div>Data Center</div>
                      <Chart
                      xAxisInterval={5}
                        isVisible={true}
                        width={300}
                        height={130}
                        dataPoints={[
                          {
                            lineWidth: 3,
                            color: "white",
                            lineColor: "#02c7f8",
                            data: [0, 3, 2, 7, 0],
                          },
                        ]}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <div>Offices</div>
                      <Chart
                      xAxisInterval={5}
                        isVisible={true}
                        width={300}
                        height={130}
                        dataPoints={[
                          {
                            lineWidth: 3,
                            color: "white",
                            lineColor: "#5e5de5",
                            data: [3, 7, 9, 2, 0],
                          },
                        ]}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={4}
              style={{ background: "#1b1b1b", border: "1px solid #FF0000" }}
            >
              <Grid container xs={12}>
                <Grid
                  item
                  xs={12}
                  style={{ padding: "0px 15px 15px 15px", height: "240px" }}
                >
                  <Chart
                  xAxisInterval={6}
                    isVisible={true}
                    width={600}
                    height={180}
                    dataPoints={[
                      {
                        lineWidth: 3,
                        color: "white",
                        lineColor: "#73a7da",
                        data: [0, 10, 3, 9, 8, 0],
                      },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} style={{ padding: "0px 10px 10px 10px",}}>
                  <Grid container xs={12} justifyContent="space-between" style={{ border: "1px solid #fff", padding: "20px 5px 5px 5px"}}>
                    <Grid item >
                      <div style={{marginBottom: "5px", fontSize: "1.5em", fontWeight: 700}}>1592</div>
                      <div  style={{ fontSize: "1em",}}>Kilo Liters</div>
                    </Grid>
                    <Grid item >
                      <div style={{marginBottom: "5px", fontSize: "1.5em", fontWeight: 700}}>192</div>
                      <div style={{ fontSize: "1em",}}>Electricity Savings</div>
                    </Grid>
                    <Grid item >
                      <div style={{marginBottom: "5px", fontSize: "1.5em", fontWeight: 700}}>319</div>
                      <div style={{ fontSize: "1em",}}>Gas Savings</div>
                    </Grid>
                    <Grid item >
                      <div style={{marginBottom: "5px", fontSize: "1.5em", fontWeight: 700}}>1163</div>
                      <div style={{ fontSize: "1em",}}>Kg CO2 reduced</div>
                    </Grid>

                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          style={{
            color: "#fff",
            background: "#1d2c4d",
            height: "calc(100vh - 311px)",
          }}
        ></Grid>
      </Grid>
    </>
  );
};

export default EnergyManagementContainer;
