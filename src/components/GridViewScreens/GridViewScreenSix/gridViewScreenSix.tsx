/** @format */

import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Highcharts from "highcharts";
import Chart from "elements/Chart";
import theme from "../../../theme/theme";
import useStyles from "../styles";

const GridViewScreenSix: React.FC<any> = (props) => {
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

  const [selectedWidth, setSelectedWidth] = useState<any>();

  useEffect(() => {
    if (window.innerWidth > 3839) {
      setSelectedWidth({
        width: 1090,
        height: 400,
        is4kDevice: true,
      });
    } else if (window.innerWidth > 3071) {
      setSelectedWidth({
        width: 550,
        height: 200,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 2559) {
      setSelectedWidth({
        width: 550,
        height: 150,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 2047) {
      setSelectedWidth({
        width: 500,
        height: 150,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1791) {
      setSelectedWidth({
        width: 500,
        height: 150,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1535) {
      setSelectedWidth({
        width: 400,
        height: 140,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1343) {
      setSelectedWidth({
        width: 350,
        height: 120,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1279) {
      setSelectedWidth({
        width: 350,
        height: 120,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1151) {
      setSelectedWidth({
        width: 300,
        height: 100,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1023) {
      setSelectedWidth({
        width: 250,
        height: 70,
        is4kDevice: false,
      });
    }
  }, []);

  return (
    <>
      {/* Grid 6 */}
      <Grid
        item
        xs={4}
        className={gridStyles}
        onClick={() => {
          handleClick("/assetTracking");
        }}
      >
        <Grid
          container
          xs={12}
          alignContent="space-between"
          className={gridContainers}
        >
          <Grid item xs={12} className={containerTitleTwo}>
            ASSETS TRACKING
          </Grid>
          <Grid item xs={12}>
            <div className={horizantalDataGridStyle}>
              <div className={engMgntliveContentLeftStyle}>
                <div className={horizantalDataGridValueStyle}>52</div>
                <div className={horizantalDataGridLabelStyle}>
                  Assets Tracked
                </div>
              </div>
              <div className={engMgntliveContentMiddleStyle}>
                <div className={horizantalDataGridValueStyle}>30</div>
                <div className={horizantalDataGridLabelStyle}>
                  Location Changes
                </div>
              </div>
              <div className={engMgntliveContentStyle}>
                <div className={horizantalDataGridValueStyle}>10</div>
                <div className={horizantalDataGridLabelStyle}>
                  Out Of Geofence
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={screenTwoGraphTitleStyle}>Assets Tracked</div>
            <Chart
              width={selectedWidth?.width}
              height={selectedWidth?.height}
              graphType={"spline"}
              isVisible={true}
              units={""}
              isCrosshair={true}
              crossHairLineColor={"#ABCD9890"}
              is4kDevice={selectedWidth?.is4kDevice}
              dataPoints={[
                {
                  marker: {
                    enabled: false,
                  },
                  lineColor: "#ABCD98",
                  color: "#ABCD98",
                  lineWidth: 2,
                  // fillColor: {
                  //   linearGradient: [0, 0, 0, 200],
                  //   stops: [
                  //     [
                  //       0,
                  //       Highcharts.color(appTheme?.palette?.gridViewComponentGraphsColor?.screenSixGraphPoint).setOpacity(0.6).get("rgba"),
                  //     ],
                  //     [1, Highcharts.color(appTheme?.palette?.gridViewComponentGraphsColor?.highChartsGradient).setOpacity(0).get("rgba")],
                  //   ],
                  // },
                  data: [
                    1, 3, 2, 5, 1, 3, 10, 4, 3, 4, 7, 10, 1, 1, 3, 10, 4, 3, 4,
                    7, 10, 4, 3, 4,
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
