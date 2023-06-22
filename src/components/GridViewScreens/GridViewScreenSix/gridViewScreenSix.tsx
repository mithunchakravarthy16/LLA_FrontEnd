import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Highcharts from "highcharts";
import Chart from "elements/Chart";
import theme from "../../../theme/theme";
import useStyles from "../styles";

const GridViewScreenSix: React.FC<any> = (props) => {

  const {handleClick}=props

  
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
      {/* Grid 6 */}
      <Grid item xs={4} className={gridStyles} >
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
                <div className={horizantalDataGridValueStyle}>19</div>
                <div className={horizantalDataGridLabelStyle}>
                  Temperature Changes
                </div>
              </div>
              <div className={engMgntliveContentMiddleStyle}>
                <div className={horizantalDataGridValueStyle}>20</div>
                <div className={horizantalDataGridLabelStyle}>
                  Assets Tracked
                </div>
              </div>
              <div className={engMgntliveContentStyle}>
                <div className={horizantalDataGridValueStyle}>1M</div>
                <div className={horizantalDataGridLabelStyle}>
                  Location Changes
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>Assets Tracked</div>
            <Chart
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
                  lineColor: appTheme?.palette?.gridViewComponentGraphsColor?.screenSixGraphLine, //"#19E39295"
                  color: appTheme?.palette?.gridViewComponentGraphsColor?.screenSixGraphPoint, //"#19E392"
                  lineWidth: 2,
                  fillColor: {
                    linearGradient: [0, 0, 0, 200],
                    stops: [
                      [
                        0,
                        Highcharts.color(appTheme?.palette?.gridViewComponentGraphsColor?.screenSixGraphPoint).setOpacity(0.6).get("rgba"),
                      ],
                      [1, Highcharts.color(appTheme?.palette?.gridViewComponentGraphsColor?.highChartsGradient).setOpacity(0).get("rgba")],
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
