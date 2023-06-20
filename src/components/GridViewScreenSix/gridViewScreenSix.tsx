import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Highcharts from "highcharts";
import theme from "../../theme/theme";
import useStyles from "./styles";
import EnergyManagementCharts from "elements/energyManagementCharts";
import { LiveImg } from "assets/gridViewIcons";
import CustomizableProgressBar from "elements/ProgressBar";

const GridViewScreenSix = () => {
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
                        Highcharts.color("#19E392").setOpacity(0.6).get("rgba"),
                      ],
                      [1, Highcharts.color("#000").setOpacity(0).get("rgba")],
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
                    1,

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
    </>
  );
};

export default GridViewScreenSix;
