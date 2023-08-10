/** @format */

import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Highcharts from "highcharts";
import Chart from "elements/Chart";
import theme from "../../../theme/theme";
import useStyles from "../styles";
import useTranslation from "localization/translations";

const GridViewScreenSix: React.FC<any> = (props) => {
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
        width: 830,
        height: 600,
        is4kDevice: false,
        is3KDevice: true,
        xAxisFontSize: "22px",
      });
    } else if (window.innerWidth > 2559) {
      setSelectedWidth({
        width: 680,
        height: 150,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 2047) {
      setSelectedWidth({
        width: 560,
        height: 280,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1919) {
      setSelectedWidth({
        width: 530,
        height: 230,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1791) {
      setSelectedWidth({
        width: 490,
        height: 290,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1535) {
      setSelectedWidth({
        width: 420,
        height: 210,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1399) {
      setSelectedWidth({
        width: 400,
        height: 200,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1343) {
      setSelectedWidth({
        width: 370,
        height: 190,
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
        width: 280,
        height: 120,
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
        }}>
        <Grid
          container
          xs={12}
          alignContent="space-between"
          className={gridContainers}>
          <Grid item xs={12} className={containerTitleTwo}>
            {dashboard.assetsTracking}
          </Grid>
          <Grid item xs={12}>
            <div className={horizantalDataGridStyle}>
              <div className={engMgntliveContentLeftStyle}>
                <div className={horizantalDataGridValueStyle}>52</div>
                <div className={horizantalDataGridLabelStyle}>
                  <p>{gridView.assets}</p> <p>{gridView.tracked}</p>
                </div>
              </div>
              <div className={engMgntliveContentMiddleStyle}>
                <div className={horizantalDataGridValueStyle}>30</div>
                <div className={horizantalDataGridLabelStyle}>
                  <p>{gridView.location}</p> <p>{gridView.changes}</p>
                </div>
              </div>
              <div className={engMgntliveContentStyle}>
                <div className={horizantalDataGridValueStyle}>10</div>
                <div className={horizantalDataGridLabelStyle}>
                  <p>{gridView.outOf}</p>
                  <p> {gridView.geofence}</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={screenTwoGraphTitleStyle}>
              {gridView.assets} {gridView.tracked}
            </div>
            <Chart
              width={selectedWidth?.width}
              height={selectedWidth?.height}
              graphType={selectedTheme === "light" ? "areaspline" : "spline"}
              isVisible={true}
              units={""}
              isCrosshair={true}
              crossHairLineColor={"#ABCD9890"}
              is4kDevice={selectedWidth?.is4kDevice}
              xAxisFontSize={selectedWidth?.xAxisFontSize}
              dataPoints={[
                {
                  marker: {
                    enabled: false,
                  },
                  lineColor: selectedTheme === "light" ? "#883497" : "#ABCD98",
                  color: selectedTheme === "light" ? "#883497" : "#ABCD98",
                  lineWidth:
                    selectedWidth?.is4kDevice || selectedWidth?.is3KDevice
                      ? 4
                      : 2,
                  fillColor: {
                    linearGradient: [0, 0, 0, 200],
                    stops: [
                      [
                        0,
                        Highcharts.color("#883497")
                          .setOpacity(selectedTheme === "light" ? 0.8 : 0.5)
                          .get("rgba"),
                      ],
                      [
                        0.5,
                        Highcharts.color("#883497")
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
                        Highcharts.color("#883497")
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
