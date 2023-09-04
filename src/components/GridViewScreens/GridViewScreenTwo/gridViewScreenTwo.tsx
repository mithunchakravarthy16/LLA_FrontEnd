/** @format */

import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Chart from "elements/Chart";
import theme from "../../../theme/theme";
import useStyles from "../styles";
import useTranslation from "localization/translations";

const GridViewScreenTwo: React.FC<any> = (props) => {
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
    engMgntliveContentLeftStyle,
    engMgntliveContentStyle,
    engMgntliveContentMiddleStyle,
    gridContainers,
    containerTitleTwo,
    horizantalDataGridStyle,
    horizantalDataGridValueStyle,
    horizantalDataGridLabelStyle,
    screenTwoGraphTitleStyle,
    lastweekContainer,
    lastweekTitleStyle,
    lastweekBodyContainer,
    lastweekBodySubContainer,
    rightListItemStyle,
    listItemValueStyle,
    listItemLabelStyle,
    rightListItemStyleLastChild,
    containerTitle,
    subContainer,
    childSubContainer,
  } = useStyles(appTheme);

  const [selectedWidth, setSelectedWidth] = useState<any>();

  useEffect(() => {
    if (window.innerWidth > 3839) {
      setSelectedWidth({
        width: 820,
        height: 160,
        is4kDevice: true,
      });
    } else if (window.innerWidth > 3071) {
      setSelectedWidth({
        width: 620,
        height: 170,
        is4kDevice: false,
        is3KDevice: true,
      });
    } else if (window.innerWidth > 2559) {
      setSelectedWidth({
        width: 560,
        height: 70,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 2047) {
      setSelectedWidth({
        width: 420,
        height: 100,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1919) {
      setSelectedWidth({
        width: 410,
        height: 85,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1791) {
      setSelectedWidth({
        width: 380,
        height: 110,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1679) {
      setSelectedWidth({
        width: 350,
        height: 90,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1599) {
      setSelectedWidth({
        width: 320,
        height: 80,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1535) {
      setSelectedWidth({
        width: 320,
        height: 90,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1399) {
      setSelectedWidth({
        width: 270,
        height: 80,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1343) {
      setSelectedWidth({
        width: 270,
        height: 70,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1279) {
      setSelectedWidth({
        width: 250,
        height: 50,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1151) {
      setSelectedWidth({
        width: 230,
        height: 60,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1023) {
      setSelectedWidth({
        width: 200,
        height: 50,
        is4kDevice: false,
      });
    } else if (window.innerHeight > 936) {
      setSelectedWidth({
        width: 400,
        height: 90,
        is4kDevice: false,
      });
    }
  }, []);

  return (
    <>
      {/* Grid 2 */}
      <Grid
        item
        xs={4}
        className={gridStyles}
        onClick={() => {
          handleClick("/energyManagement");
        }}>
        <Grid
          container
          xs={12}
          alignContent="space-between"
          className={gridContainers}>
          <Grid item xs={12} className={containerTitle}>
            {dashboard.energyManagement}
          </Grid>
          {/* <Grid item xs={12}>
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
          </Grid> */}
          {/* <Grid item xs={12} className={subContainer}>
            <Grid container xs={12} className={childSubContainer}>
              <Grid item xs={9} className={childSubContainer}>
                <Grid container xs={12} className={childSubContainer}>
                  <Grid item xs={12}>
                    <Grid
                      container
                      xs={12}
                      rowGap={1}
                      // justifyContent="space-between"
                      // alignItems="center"
                    >
                      <Grid item xs={12} className={screenTwoGraphTitleStyle}>
                        {gridView.electricityConsumption}
                      </Grid>
                      <Grid item xs={12}>
                        <Chart
                          width={selectedWidth?.width}
                          height={selectedWidth?.height}
                          isVisible={false}
                          graphType={"spline"}
                          units={"kWh"}
                          isCrosshair={false}
                          is4kDevice={selectedWidth?.is4kDevice}
                          dataPoints={[
                            {
                              marker: {
                                enabled: false,
                              },
                              lineColor: "#253F8E",
                              color: "#253F8E",
                              lineWidth:
                                selectedWidth?.is4kDevice ||
                                selectedWidth?.is3KDevice
                                  ? 4
                                  : 2,
                              data: [0, 4, 3, 5, 4, 2, 8, 4, 3, 4, 7, 0],
                            },
                          ]}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container xs={12} rowGap={1}>
                      <Grid item xs={12} className={screenTwoGraphTitleStyle}>
                        HAVC
                      </Grid>
                      <Grid item xs={12}>
                        <Chart
                          width={selectedWidth?.width}
                          height={selectedWidth?.height}
                          graphType={"spline"}
                          isVisible={false}
                          units={"kWh"}
                          isCrosshair={false}
                          is4kDevice={selectedWidth?.is4kDevice}
                          dataPoints={[
                            {
                              marker: {
                                enabled: false,
                              },
                              lineColor: "#80488A",
                              color: "#80488A",
                              lineWidth:
                                selectedWidth?.is4kDevice ||
                                selectedWidth?.is3KDevice
                                  ? 4
                                  : 2,
                              data: [0, 4, 3, 8, 1, 4, 1, 4, 2, 4, 7, 2],
                            },
                          ]}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container xs={12} rowGap={1}>
                      <Grid item xs={12} className={screenTwoGraphTitleStyle}>
                        {gridView.waterConsumption}
                      </Grid>
                      <Grid item xs={12}>
                        <Chart
                          width={selectedWidth?.width}
                          height={selectedWidth?.height}
                          graphType={"spline"}
                          isVisible={false}
                          units={"KL"}
                          isCrosshair={false}
                          is4kDevice={selectedWidth?.is4kDevice}
                          dataPoints={[
                            {
                              marker: {
                                enabled: false,
                              },
                              lineColor: "#82BA6D",
                              color: "#82BA6D",
                              lineWidth:
                                selectedWidth?.is4kDevice ||
                                selectedWidth?.is3KDevice
                                  ? 4
                                  : 2,
                              data: [0, 4, 3, 8, 4, 2, 7, 4, 8, 4, 7, 0],
                            },
                          ]}
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
                  className={lastweekContainer}>
                  <Grid item xs={12} className={lastweekTitleStyle}>
                    <div
                      style={{
                        background:
                          appTheme?.palette?.gridViewComponentCommonStyle
                            ?.todayTitleBgColor,
                            padding: "2.5% 10%",
                            borderRadius : "0.3vw",
                            fontSize : "0.8vw",
                            fontWeight : 500
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
                        <div className={listItemValueStyle}>300kWh</div>
                        <div className={listItemLabelStyle}>
                          <p>{gridView.energy}</p> <p>{gridView.consumption}</p>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        direction="column"
                        className={rightListItemStyle}>
                        <div className={listItemValueStyle}>30%</div>
                        <div className={listItemLabelStyle}>
                          <p>{gridView.energy}</p> <p>{gridView.saved}</p>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        direction="column"
                        className={rightListItemStyleLastChild}>
                        <div className={listItemValueStyle}>$500</div>
                        <div className={listItemLabelStyle}>
                          <p>{gridView.cost}</p> <p>{gridView.saved}</p>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid> */}
          <Grid
            item
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "90%",
              width: "100%",
              fontSize : "1vw"
            }}
          >
            Development In Progress...
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default GridViewScreenTwo;
