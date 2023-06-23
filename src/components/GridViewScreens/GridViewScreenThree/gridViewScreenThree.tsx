/** @format */

import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Highcharts from "highcharts";
import Chart from "elements/Chart";
import theme from "../../../theme/theme";
import useStyles from "../styles";

const GridViewScreenThree: React.FC<any> = (props) => {
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
  } = useStyles(appTheme);

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
            SECURITY
          </Grid>
          <Grid item xs={12}>
            <div className={horizantalDataGridStyle}>
              <div className={engMgntliveContentLeftStyle}>
                <div className={horizantalDataGridValueStyle}>19</div>
                <div className={horizantalDataGridLabelStyle}>
                  Fire Detection
                </div>
              </div>
              <div className={engMgntliveContentMiddleStyle}>
                <div className={horizantalDataGridValueStyle}>18</div>
                <div className={horizantalDataGridLabelStyle}>
                  Tempering Alarm
                </div>
              </div>
              <div className={engMgntliveContentStyle}>
                <div className={horizantalDataGridValueStyle}>05</div>
                <div className={horizantalDataGridLabelStyle}>
                  Unauthorised Access
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>Security Alerts</div>
            <Chart
              width={550}
              height={200}
              graphType={"spline"}
              isVisible={true}
              units={""}
              isCrosshair={true}
              crossHairLineColor={"#637ED190"}
              dataPoints={[
                {
                  marker: {
                    enabled: false,
                  },
                  lineColor: "#26408E",
                  color: "#26408E",

                  lineWidth: 2,
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
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default GridViewScreenThree;
