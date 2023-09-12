/** @format */

import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Highcharts from "highcharts";
import Chart from "elements/Chart";
import { LiveImg } from "assets/gridViewIcons";
import theme from "../../../theme/theme";
import useStyles from "../styles";
import useTranslation from "localization/translations";
import GridView from "pages/GridView";

const GridViewScreenOne: React.FC<any> = (props) => {
  const { handleClick, selectedTheme } = props;
  // const [selectedTheme, setSelectedTheme] = useState(
  //   JSON.parse(localStorage.getItem("theme")!)
  // );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const { dashboard, gridView } = useTranslation();

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
        height: 420,
        is4kDevice: true,
      });
    } else if (window.innerWidth > 3071) {
      setSelectedWidth({
        width: 660,
        height: 540,
        is4kDevice: false,
        xAxisFontSize: "20px",
        is3KDevice: true,
      });
    } else if (window.innerWidth > 2559) {
      setSelectedWidth({
        width: 560,
        height: 170,
        is4kDevice: false,
        xAxisFontSize: "13px",
      });
    } else if (window.innerWidth > 2047) {
      setSelectedWidth({
        width: 420,
        height: 270,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1919) {
      setSelectedWidth({
        width: 430,
        height: 220,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1791) {
      setSelectedWidth({
        width: 400,
        height: 280,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1679) {
      setSelectedWidth({
        width: 350,
        height: 210,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1599) {
      setSelectedWidth({
        width: 340,
        height: 170,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1535) {
      setSelectedWidth({
        width: 320,
        height: 210,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1439) {
      setSelectedWidth({
        width: 300,
        height: 180,
        is4kDevice: false,
        tickInterval: 12,
      });
    } else if (window.innerWidth > 1399) {
      setSelectedWidth({
        width: 280,
        height: 210,
        is4kDevice: false,
        tickInterval: 12,
      });
    } else if (window.innerWidth > 1343) {
      setSelectedWidth({
        width: 280,
        height: 170,
        is4kDevice: false,
        xAxisFontSize: "8px",
      });
    } else if (window.innerWidth > 1279) {
      setSelectedWidth({
        width: 265,
        height: 100,
        is4kDevice: false,
        tickInterval: 12,
      });
    } else if (window.innerWidth > 1151) {
      setSelectedWidth({
        width: 230,
        height: 120,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1023) {
      setSelectedWidth({
        width: 215,
        height: 120,
        is4kDevice: false,
        tickInterval: 12,
        xAxisFontSize: "8px",
      });
    } else if (window.innerHeight > 936) {
      setSelectedWidth({
        width: 410,
        height: 180,
        is4kDevice: false,
      });
    }
  }, [window.innerWidth, window.innerHeight]);

  return (
    <>
      {/* Gride 1 */}
      {/* <Grid item xs={4} className={gridStyles}> */}
      <Grid
        item
        xs={4}
        className={gridStyles}
        onClick={() => {
          handleClick("/parking");
        }}>
        <Grid container xs={12} className={gridContainers}>
          <Grid item xs={12} className={containerTitle}>
            {dashboard.parking}
          </Grid>
          <Grid item xs={12} className={subContainer}>
            <Grid container xs={12} className={childSubContainer}>
              <Grid item xs={9}>
                <Grid
                  container
                  xs={12}
                  alignContent="space-between"
                  className={leftSubChildContainer}>
                  <Grid item xs={12}>
                    <div className={graphTitleScreenOne}>
                      {gridView.occupancy}
                    </div>
                    <Chart
                      width={selectedWidth?.width}
                      height={selectedWidth?.height}
                      graphType={"areaspline"}
                      isVisible={true}
                      units={"%"}
                      isCrosshair={true}
                      crossHairLineColor={"#73B35A90"}
                      is4kDevice={selectedWidth?.is4kDevice}
                      tickInterval={selectedWidth?.tickInterval}
                      xAxisFontSize={selectedWidth?.xAxisFontSize}
                      dataPoints={[
                        {
                          marker: {
                            enabled: false,
                          },
                          lineColor:
                            selectedTheme === "light" ? "#73B35A" : "#73B35A90",
                          color: "#73B35A",
                          lineWidth:
                            selectedWidth?.is4kDevice ||
                            selectedWidth?.is3KDevice
                              ? 4
                              : 2,
                          fillColor: {
                            linearGradient: [0, 0, 0, 200],
                            stops: [
                              [
                                0,
                                Highcharts.color("#73B35A")
                                  .setOpacity(
                                    selectedTheme === "light" ? 0.8 : 0.5
                                  )
                                  .get("rgba"),
                              ],
                              [
                                0.5,
                                Highcharts.color("#73B35A")
                                  .setOpacity(
                                    selectedWidth?.is4kDevice ||
                                      selectedWidth?.is3KDevice
                                      ? selectedTheme === "light"
                                        ? 0.4
                                        : 0.3
                                      : selectedTheme === "light"
                                      ? 0.2
                                      : 0.1
                                  )
                                  .get("rgba"),
                              ],
                              [
                                1,
                                Highcharts.color("#73B35A")
                                  .setOpacity(
                                    selectedWidth?.is4kDevice ||
                                      selectedWidth?.is3KDevice
                                      ? selectedTheme === "light"
                                        ? 0.1
                                        : 0.05
                                      : 0.02
                                  )
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
                        <div className={liveContentLabel}>
                          {dashboard.available}
                        </div>
                      </div>
                      <div className={liveContentStyle}>
                        <div className={liveContentValue}>354</div>
                        <div className={liveContentLabel}>
                          {dashboard.occupied}
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
                  className={lastweekContainer}>
                  <Grid item xs={12} className={lastweekTitleStyle}>
                    <div
                      style={{
                        background:
                          appTheme?.palette?.gridViewComponentCommonStyle
                            ?.todayTitleBgColor,
                        padding: "2.5% 10%",
                        borderRadius: "0.3vw",
                        fontSize: "0.8vw",
                        fontWeight: 500,
                      }}>
                      {gridView.today}
                    </div>
                  </Grid>
                  <Grid item xs={12} className={lastweekBodyContainer}>
                    <Grid
                      container
                      xs={12}
                      className={lastweekBodySubContainer}>
                      <Grid
                        item
                        xs={12}
                        className={rightListItemStyle}
                        direction="column">
                        <div className={listItemValueStyle}>10Hrs</div>
                        <div className={listItemLabelStyle}>
                          {gridView.avg}
                          <p>{gridView.parkingHours}</p>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        direction="column"
                        className={rightListItemStyle}>
                        <div className={listItemValueStyle}>1.5</div>
                        <div className={listItemLabelStyle}>
                          <p>{gridView.rotation}</p> <p>{gridView.index}</p>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        direction="column"
                        className={rightListItemStyleLastChild}>
                        <div className={listItemValueStyle}>20Kg</div>
                        <div className={listItemLabelStyle}>
                          <p>{gridView.carbon}</p> <p>{gridView.emission}</p>
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
