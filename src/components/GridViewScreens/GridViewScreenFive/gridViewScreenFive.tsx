/** @format */

import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CustomizableProgressBar from "elements/ProgressBar";
import { LiveImg } from "assets/gridViewIcons";
import theme from "../../../theme/theme";
import useStyles from "../styles";
import Chart from "elements/Chart";
import useTranslation from "localization/translations";

const GridViewScreenFive: React.FC<any> = (props) => {
  const { handleClick } = props;
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const {dashboard, gridView} = useTranslation();

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
    containerTitleScreenFive,
    subContainerScreenFive,
    childSubContainer,
    leftSubChildContainer,
    liveContainer,
    liveImgStyle,
    liveContentValue,
    liveContentLabel,
    lastweekContainer,
    lastweekTitleStyle,
    lastweekBodyContainer,
    lastweekBodySubContainer,
    screenFiveGraphTitleStyle,
    dotContainerStyle,
    overspeedingDotStyle,
    harshBreakingDotStyle,
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
        width: 615,
        height: 590,
        is4kDevice: false,
        is3KDevice: true,
        xAxisFontSize: "20px",
      });
    } else if (window.innerWidth > 2559) {
      setSelectedWidth({
        width: 500,
        height: 150,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 2047) {
      setSelectedWidth({
        width: 410,
        height: 280,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1919) {
      setSelectedWidth({
        width: 420,
        height: 200,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1791) {
      setSelectedWidth({
        width: 400,
        height: 270,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1535) {
      setSelectedWidth({
        width: 320,
        height: 210,
        is4kDevice: false,
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
        width: 250,
        height: 80,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1151) {
      setSelectedWidth({
        width: 220,
        height: 100,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1023) {
      setSelectedWidth({
        width: 180,
        height: 90,
        is4kDevice: false,
      });
    } else if (window.innerHeight > 936) {
      setSelectedWidth({
        width: 400,
        height: 120,
        is4kDevice: false,
      });
    }
  }, []);

  return (
    <>
      {/* Grid 5 */}
      <Grid
        item
        xs={4}
        className={gridStyles}
        onClick={() => {
          handleClick("/fleetManagement");
        }}
      >
        <Grid container xs={12} className={gridContainers}>
          <Grid item xs={12} className={containerTitleScreenFive}>
            {dashboard.fleetManagement}
          </Grid>
          <Grid item xs={12} className={subContainerScreenFive}>
            <Grid container xs={12} className={childSubContainer}>
              <Grid item xs={9}>
                <Grid
                  container
                  xs={12}
                  alignContent="space-between"
                  className={leftSubChildContainer}
                >
                  <Grid item xs={12}>
                    <Grid container xs={12} rowGap={1}>
                      <Grid item xs={12} className={screenFiveGraphTitleStyle}>
                        <div className={dotContainerStyle}>
                          <div className={overspeedingDotStyle}></div>
                          <div>{gridView.overspeeding}</div>
                        </div>
                        <div className={dotContainerStyle}>
                          <div className={harshBreakingDotStyle}></div>
                          <div>{gridView.harshBreaking}</div>
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <Chart
                          width={selectedWidth?.width}
                          height={selectedWidth?.height}
                          isVisible={true}
                          graphType={"spline"}
                          units={""}
                          isCrosshair={false}
                          is4kDevice={selectedWidth?.is4kDevice}
                          xAxisFontSize={selectedWidth?.xAxisFontSize}
                          dataPoints={[
                            {
                              marker: {
                                enabled: false,
                              },
                              lineColor: "#FDC981",
                              color: "#FDC981",
                              lineWidth: selectedWidth?.is4kDevice || selectedWidth?.is3KDevice ? 4 : 2,
                              data: [
                                0, 1, 6, 6, 9, 5, 5, 1, 6, 1, 2, 3, 4, 8, 6, 6,
                                8, 7, 6, 5, 3, 1, 2, 0,
                              ],
                            },
                            {
                              marker: {
                                enabled: false,
                              },
                              lineColor: "#26428E",
                              color: "#26428E",
                              lineWidth: selectedWidth?.is4kDevice || selectedWidth?.is3KDevice ? 4 : 2,
                              data: [
                                1, 4, 3, 5, 4, 2, 8, 4, 3, 4, 7, 5, 1, 4, 3, 5,
                                4, 2, 8, 4, 3, 4, 1, 4,
                              ],
                            },
                          ]}
                        />
                      </Grid>
                    </Grid>
                    {/* <Grid container xs={12} justifyContent="space-between">
                          <Grid item xs={6}>
                            <CustomizableProgressBar
                              innerHeading={"75%"}
                              progressValue={75}
                              radius={70}
                              strockColor={appTheme?.palette?.gridViewComponentGraphsColor?.screenFiveStrockColor1} //"#688F40"
                              trackStrokeColor={appTheme?.palette?.gridViewComponentGraphsColor?.screenFiveTrackStrokeColor1} //"#FFFFFF10"
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
                              strockColor={appTheme?.palette?.gridViewComponentGraphsColor?.screenFiveStrockColor2} //"#3A9479"
                              trackStrokeColor={appTheme?.palette?.gridViewComponentGraphsColor?.screenFiveTrackStrokeColor2} //"#FFFFFF10"
                              subTitle={"Vehicle Active"}
                              strokeWidth={18}
                              trackStrokeWidth={18}
                            />
                          </Grid>
                        </Grid> */}
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
                        <div className={liveContentValue}>10</div>
                        <div className={liveContentLabel}>{gridView.vehicles}</div>
                      </div>
                      <div className={liveContentStyle}>
                        <div className={liveContentValue}>13</div>
                        <div className={liveContentLabel}>{gridView.trips}</div>
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
                  <div
                      style={{
                        background:
                          appTheme?.palette?.gridViewComponentCommonStyle
                            ?.todayTitleBgColor,
                            padding: "3%",
                      }}
                    >
                      {gridView.today}
                    </div>
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
                        <div className={listItemValueStyle}>20</div>
                        <div className={listItemLabelStyle}>{gridView.incidents}</div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        direction="column"
                        className={rightListItemStyle}
                      >
                        <div className={listItemValueStyle}>1237Km</div>
                        <div className={listItemLabelStyle}>
                          <p>{gridView.total}</p> <p>{gridView.distance}</p>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        direction="column"
                        className={rightListItemStyleLastChild}
                      >
                        <div className={listItemValueStyle}>5Hrs</div>
                        <div className={listItemLabelStyle}>
                          <p>{gridView.total}</p> <p>{gridView.idling} {gridView.hours}</p>
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

export default GridViewScreenFive;
