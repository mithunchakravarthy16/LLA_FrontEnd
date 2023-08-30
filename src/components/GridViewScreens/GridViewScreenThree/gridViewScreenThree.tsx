/** @format */

import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Highcharts from "highcharts";
import Chart from "elements/Chart";
import theme from "../../../theme/theme";
import useStyles from "../styles";
import useTranslation from "localization/translations";

const GridViewScreenThree: React.FC<any> = (props) => {
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
        width: 800,
        height: 550,
        is4kDevice: false,
        is3KDevice: true,
        xAxisFontSize: "21px",
      });
    } else if (window.innerWidth > 2559) {
      setSelectedWidth({
        width: 700,
        height: 200,
        is4kDevice: false,
        xAxisFontSize: "11px",
      });
    } else if (window.innerWidth > 2047) {
      setSelectedWidth({
        width: 550,
        height: 300,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1919) {
      setSelectedWidth({
        width: 550,
        height: 220,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1791) {
      setSelectedWidth({
        width: 480,
        height: 300,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1679) {
      setSelectedWidth({
        width: 450,
        height: 220,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1599) {
      setSelectedWidth({
        width: 440,
        height: 200,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1535) {
      setSelectedWidth({
        width: 420,
        height: 200,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1399) {
      setSelectedWidth({
        width: 380,
        height: 220,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1343) {
      setSelectedWidth({
        width: 365,
        height: 170,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1279) {
      setSelectedWidth({
        width: 350,
        height: 100,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1151) {
      setSelectedWidth({
        width: 300,
        height: 140,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1023) {
      setSelectedWidth({
        width: 280,
        height: 140,
        is4kDevice: false,
        tickInterval: 12,
        xAxisFontSize: "8px",
      });
    } else if (window.innerHeight > 936) {
      setSelectedWidth({
        width: 500,
        height: 120,
        is4kDevice: false,
      });
    }
  }, []);

  return (
    <>
      {/* Grid 3 */}
      <Grid
        item
        xs={4}
        className={gridStyles}
        onClick={() => {
          handleClick("/security");
        }}
      >
        <Grid
          container
          xs={12}
          alignContent="space-between"
          className={gridContainers}
        >
          <Grid item xs={12} className={containerTitleTwo}>
            {dashboard.security}
          </Grid>
          {/* <Grid item xs={12}>
            <div className={horizantalDataGridStyle}>
              <div className={engMgntliveContentLeftStyle}>
                <div className={horizantalDataGridValueStyle}>19</div>
                <div className={horizantalDataGridLabelStyle}>
                  <p>{gridView.fire}</p> <p>{gridView.detection}</p>
                </div>
              </div>
              <div className={engMgntliveContentMiddleStyle}>
                <div className={horizantalDataGridValueStyle}>18</div>
                <div className={horizantalDataGridLabelStyle}>
                  <p>{gridView.tempering} </p>
                  <p>{gridView.alarm}</p>
                </div>
              </div>
              <div className={engMgntliveContentStyle}>
                <div className={horizantalDataGridValueStyle}>05</div>
                <div className={horizantalDataGridLabelStyle}>
                  <p>{gridView.unauthorised}</p> <p>{gridView.access}</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={screenTwoGraphTitleStyle}>
              {gridView.securityAlerts}
            </div>
            <Chart
              width={selectedWidth?.width}
              height={selectedWidth?.height}
              graphType={"spline"}
              isVisible={true}
              units={""}
              isCrosshair={true}
              crossHairLineColor={"#637ED190"}
              is4kDevice={selectedWidth?.is4kDevice}
              tickInterval={selectedWidth?.tickInterval}
              xAxisFontSize={selectedWidth?.xAxisFontSize}
              dataPoints={[
                {
                  marker: {
                    enabled: false,
                  },
                  lineColor: "#26408E",
                  color: "#26408E",

                  lineWidth: selectedWidth?.is4kDevice || selectedWidth?.is3KDevice ? 4 : 2,
                  // fillColor: {
                  //   linearGradient: [0, 0, 0, 200],
                  //   stops: [
                  //     [
                  //       0,
                  //       Highcharts.color(appTheme?.palette?.gridViewComponentGraphsColor?.screenThreeGraphPoint).setOpacity(0.9).get("rgba"),
                  //     ],
                  //     [1, Highcharts.color(appTheme?.palette?.gridViewComponentGraphsColor?.highChartsGradient).setOpacity(0).get("rgba")],
                  //   ],
                  // },
                  data: [
                    1, 4, 3, 5, 4, 2, 8, 4, 3, 4, 7, 5, 1, 4, 2, 8, 4, 3, 4, 7,
                    5, 1, 4, 3,
                  ],
                },
              ]}
            />
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

export default GridViewScreenThree;
