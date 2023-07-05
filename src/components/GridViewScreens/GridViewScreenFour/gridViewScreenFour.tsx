/** @format */

import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CustomizableProgressBar from "elements/ProgressBar";
import { LiveImg } from "assets/gridViewIcons";
import theme from "../../../theme/theme";
import useStyles from "../styles";
import Chart from "elements/Chart";

const GridViewScreenFour: React.FC<any> = (props) => {
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
    aqiCircleStyle,
    gridContainers,
    containerTitle,
    subContainer,
    childSubContainer,
    leftSubChildContainer,
    liveContainer,
    liveImgStyle,
    liveContentValue,
    liveContentValueGreen,
    liveContentLabel,
    liveContentLabelGreen,
    lastweekContainer,
    lastweekTitleStyle,
    lastweekBodyContainer,
    lastweekBodySubContainer,
    screenTwoGraphTitleStyle,
    progressBarTitleStyle,
    progressBarContainerStyle,
  } = useStyles(appTheme);

  const [selectedWidth, setSelectedWidth] = useState<any>();

  useEffect(() => {
    if (window.innerWidth > 3839) {
      setSelectedWidth({
        width: 825,
        height: 260,
        is4kDevice: true,
      });
    } else if (window.innerWidth > 3071) {
      setSelectedWidth({
        width: 600,
        height: 390,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 2559) {
      setSelectedWidth({
        width: 500,
        height: 70,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 2047) {
      setSelectedWidth({
        width: 410,
        height: 200,
        is4kDevice: false,
      });
    }  else if (window.innerWidth > 1919) {
      setSelectedWidth({
        width: 420,
        height: 140,
        is4kDevice: false,
      });
    }  else if (window.innerWidth > 1791) {
      setSelectedWidth({
        width: 355,
        height: 200,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1535) {
      setSelectedWidth({
        width: 324,
        height: 140,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1343) {
      setSelectedWidth({
        width: 280,
        height: 100,
        is4kDevice: false,
        xAxisFontSize: "8px",
      });
    } else if (window.innerWidth > 1279) {
      setSelectedWidth({
        width: 250,
        height: 100,
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
        width: 170,
        height: 70,
        is4kDevice: false,
      });
    } else if (window.innerHeight > 936) {
      setSelectedWidth({
        width: 400,
        height: 60,
        is4kDevice: false,
      });
    }
  }, []);

  return (
    <>
      {/* Grid 4 */}
      <Grid
        item
        xs={4}
        className={gridStyles}
        onClick={() => {
          handleClick("/lighting");
        }}
      >
        <Grid container xs={12} className={gridContainers}>
          <Grid item xs={12} className={containerTitle}>
            LIGHTING
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
                    <Grid container xs={12} rowGap={1}>
                      <Grid item xs={12} className={screenTwoGraphTitleStyle}>
                        Wifi Users
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
                              lineColor: "#80488A",
                              color: "#80488A",
                              lineWidth: 2,
                              data: [
                                0, 1, 5, 3, 4, 5, 4, 1, 6, 1, 2, 3, 4, 8, 6, 6,
                                8, 7, 6, 5, 3, 1, 2, 0,
                              ],
                            },
                          ]}
                        />
                      </Grid>
                    </Grid>
                    {/* <CustomizableProgressBar
                      innerHeading={"80%"}
                      innerSubHeading={"Wifi Users"}
                      progressValue={80}
                      radius={90}
                      strockColor={appTheme?.palette?.gridViewComponentGraphsColor?.screenFourStrockColor} //"#3D9B7F"
                      trackStrokeColor={appTheme?.palette?.gridViewComponentGraphsColor?.screenFourTrackStrokeColor} //"#FFFFFF10"
                      strokeWidth={18}
                      trackStrokeWidth={18}
                    /> */}
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      xs={12}
                      rowGap={1}
                      className={progressBarContainerStyle}
                    >
                      <Grid item xs={12} className={progressBarTitleStyle}>
                        Avg. Dimming Level
                      </Grid>
                      <Grid item xs={12}>
                        <div
                          style={{
                            width: "100%",
                            height: selectedWidth?.is4kDevice
                              ? "35.92px"
                              : "15px",
                            backgroundColor: "#484D52",
                            borderRadius: selectedWidth?.is4kDevice
                              ? "20px"
                              : "7.5px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              height: "100%",
                              backgroundColor: "#FFA626",
                              borderRadius: "7.5px",
                              width:
                                "60%" /* Adjust this value to set the initial progress */,
                              transition: `width 0.3s ease-in-out`,
                            }}
                          ></div>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        justifyContent="center"
                        alignItems="center"
                        display="flex"
                        fontSize={selectedWidth?.is4kDevice ? "40px" : "15px"}
                      >
                        60%
                      </Grid>
                    </Grid>
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
                        <div className={liveContentValue}>64Kw</div>
                        <div className={liveContentLabel}>CONSUMED</div>
                      </div>
                      <div className={liveContentStyle}>
                        <div className={liveContentValueGreen}>50</div>
                        <div className={liveContentLabelGreen}>
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
                        <div className={listItemValueStyle}>643ppm</div>
                        <div className={listItemLabelStyle}>
                          <p>CO2</p> <p>Level</p>
                        </div>
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
  );
};

export default GridViewScreenFour;
