import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Chart from "elements/Chart";
import theme from "../../../theme/theme";
import useStyles from "../styles";

const GridViewScreenTwo: React.FC<any> = (props) => {
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
    engMgntliveContentLeftStyle,
    engMgntliveContentStyle,
    engMgntliveContentMiddleStyle,
    gridContainers,
    containerTitleTwo,
    horizantalDataGridStyle,
    horizantalDataGridValueStyle,
    horizantalDataGridLabelStyle,
    screenTwoGraphTitleStyle,
  } = useStyles(appTheme);

  return (
    <>
      {/* Grid 2 */}
      <Grid item xs={4} className={gridStyles}>
        <Grid
          container
          xs={12}
          alignContent="space-between"
          className={gridContainers}
        >
          <Grid item xs={12} className={containerTitleTwo}>
            ENERGY MANAGEMENT
          </Grid>
          <Grid item xs={12}>
            <div className={horizantalDataGridStyle}>
              <div className={engMgntliveContentLeftStyle}>
                <div className={horizantalDataGridValueStyle}>300kWh</div>
                <div className={horizantalDataGridLabelStyle}>
                  Energy Consumption
                </div>
              </div>
              <div className={engMgntliveContentMiddleStyle}>
                <div className={horizantalDataGridValueStyle}>30%</div>
                <div className={horizantalDataGridLabelStyle}>Energy Saved</div>
              </div>
              <div className={engMgntliveContentStyle}>
                <div className={horizantalDataGridValueStyle}>$500</div>
                <div className={horizantalDataGridLabelStyle}>Cost Saved</div>
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
                  <Grid item xs={4} className={screenTwoGraphTitleStyle}>
                    Electricity Consumption
                  </Grid>
                  <Grid item xs={8}>
                    <Chart
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
                          lineColor: appTheme?.palette?.gridViewComponentGraphsColor?.screenTwoGraph1Line, //"#EEC22590",
                          color: appTheme?.palette?.gridViewComponentGraphsColor?.screenTwoGraph1Point, //"#EEC225",
                          lineWidth: 2,
                          data: [0, 4, 3, 5, 4, 2, 8, 4, 3, 4, 7, 0],
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
                  <Grid item xs={4} className={screenTwoGraphTitleStyle}>
                    HAVC
                  </Grid>
                  <Grid item xs={8}>
                    <Chart
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
                          lineColor: appTheme?.palette?.gridViewComponentGraphsColor?.screenTwoGraph2Line, //"#1CC70090",
                          color: appTheme?.palette?.gridViewComponentGraphsColor?.screenTwoGraph2Point, //"#1CC700",
                          lineWidth: 2,
                          data: [0, 4, 3, 8, 1, 4, 1, 4, 2, 4, 7, 2],
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
                  <Grid item xs={4} className={screenTwoGraphTitleStyle}>
                    Water Consumption
                  </Grid>
                  <Grid item xs={8}>
                    <Chart
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
                          lineColor: appTheme?.palette?.gridViewComponentGraphsColor?.screenTwoGraph3Line, //"#0096C790",
                          color: appTheme?.palette?.gridViewComponentGraphsColor?.screenTwoGraph3Point, //"#0096C7",
                          lineWidth: 2,
                          data: [0, 4, 3, 8, 4, 2, 7, 4, 8, 4, 7, 0],
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
  );
};

export default GridViewScreenTwo;
