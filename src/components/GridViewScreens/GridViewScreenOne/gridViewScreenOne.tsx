/** @format */

import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Highcharts from "highcharts";
import Chart from "elements/Chart";
import { LiveImg } from "assets/gridViewIcons";
import theme from "../../../theme/theme";
import useStyles from "../styles";

const GridViewScreenOne: React.FC<any> = (props) => {
  const { handleClick } = props;
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

  const [selectedWidth, setSelectedWidth] = useState<any>();

  useEffect(() => {
    if (window.innerWidth > 3839) {
      setSelectedWidth({
        width: 820,
        height: 440,
        is4kDevice: true,
      });
    } else if (window.innerWidth > 3071) {
      setSelectedWidth({
        width: 700,
        height: 330,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 2047) {
      setSelectedWidth({
        width: 410,
        height: 180,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1791) {
      setSelectedWidth({
        width: 410,
        height: 160,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1535) {
      setSelectedWidth({
        width: 300,
        height: 160,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1343) {
      setSelectedWidth({
        width: 250,
        height: 150,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1279) {
      setSelectedWidth({
        width: 250,
        height: 130,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1151) {
      setSelectedWidth({
        width: 230,
        height: 120,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1023) {
      setSelectedWidth({
        width: 180,
        height: 80,
        is4kDevice: false,
      });
    }
  }, []);

  return (
    <>
      {/* Gride 1 */}
      <Grid item xs={4} className={gridStyles}>
        {/* <Grid item xs={4} className={gridStyles} onClick={()=>{handleClick("/parking")}}> */}

        <Grid container xs={12} className={gridContainers}>
          <Grid item xs={12} className={containerTitle}>
            PARKING
          </Grid>
          <Grid item xs={12} className={subContainer}>
            <Grid container xs={12} className={childSubContainer}>
              <Grid item xs={9}>
                <Grid
                  container
                  xs={12}
                  alignContent="space-between"
                  className={leftSubChildContainer}
                >
                  <Grid item xs={12}>
                    <div className={graphTitleScreenOne}>Occupancy</div>
                    <Chart
                      width={selectedWidth?.width}
                      height={selectedWidth?.height}
                      graphType={"areaspline"}
                      isVisible={true}
                      units={"%"}
                      isCrosshair={true}
                      crossHairLineColor={"#73B35A90"}
                      is4kDevice={selectedWidth?.is4kDevice}
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
                                  .setOpacity(
                                    selectedWidth?.is4kDevice ? 0.6 : 0.4
                                  )
                                  .get("rgba"),
                              ],
                              [
                                1,
                                Highcharts.color("#73B35A")
                                  .setOpacity(0)
                                  .get("rgba"),
                              ],
                            ],
                          },
                          data: [
                            1, 4, 3, 5, 4, 2, 8, 4, 3, 4, 7, 5, 1, 4, 3, 5, 4,
                            2, 8, 4, 3, 4, 1, 4,
                          ],
                        },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <div className={liveContainer}>
                      <div className={liveImgStyle}>
                        <img
                          width={selectedWidth?.is4kDevice ? 146 : 50}
                          height={selectedWidth?.is4kDevice ? 60 : 30}
                          src={LiveImg}
                        />
                      </div>
                      <div className={liveContentLeftStyle}>
                        <div className={liveContentValue}>398</div>
                        <div className={liveContentLabel}>AVAILABLE</div>
                      </div>
                      <div className={liveContentStyle}>
                        <div className={liveContentValue}>354</div>
                        <div className={liveContentLabel}>OCCUPIED</div>
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
                  <Grid item xs={12} className={lastweekTitleStyle}>
                    Today
                  </Grid>
                  <Grid item xs={12} className={lastweekBodyContainer}>
                    <Grid
                      container
                      xs={12}
                      className={lastweekBodySubContainer}
                    >
                      <Grid
                        item
                        xs={12}
                        className={rightListItemStyle}
                        direction="column"
                      >
                        <div className={listItemValueStyle}>10Hrs</div>
                        <div className={listItemLabelStyle}>
                          Avg.Parking Hrs.
                        </div>
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
