import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import muiTheme from "theme/muiTheme";
import moment from "moment";

const Chart: React.FC<any> = (props) => {
  const location = useLocation();
  const {
    width,
    height,
    dataPoints,
    isVisible,
    graphType,
    units,
    isCrosshair,
    crossHairLineColor,
    is4kDevice,
    tooltip,
    tickInterval,
    xAxisFontSize,
    pageName,
    is2kDevice,
  } = props;

  const [toolTipBg, setToolTipBg] = useState<string>();
  const [tBorder, setTBorder] = useState<string>();
  const [lastTwntyTwoHours, setLastTwntyTwoHours] = useState<any>(() => {
    const currentTime1 = moment();
    const last24Hours = [];

    for (let i = 0; i < 24; i++) {
      const hour = currentTime1
        .subtract(1, "hour")
        .startOf("hour")
        .format("hh:mm A");

      last24Hours.unshift(hour);
    }
    return last24Hours;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime1 = moment();
      const last24Hours = [];

      for (let i = 0; i < 24; i++) {
        const hour = currentTime1
          .subtract(1, "hour")
          .startOf("hour")
          .format("hh:mm A");

        last24Hours.unshift(hour);
      }
      setLastTwntyTwoHours(last24Hours);
    }, 3600000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      containerProps={{ style: { height: "100%", width : "100%"} }}
      options={{
        chart: {
          type: graphType,
          plotBackgroundColor: "transparent",
          backgroundColor: "transparent",
          marginTop: 0,
          // marginLeft: 0,
          // marginRight: 0,

          reflow: true,
          height: height,
          width: width,
        },

        scrollbar: {
          barBackgroundColor: "gray",
          barBorderRadius: 7,
          barBorderWidth: 0,
          buttonBackgroundColor: "gray",
          buttonBorderWidth: 0,
          buttonBorderRadius: 7,
          trackBackgroundColor: "none",
          trackBorderWidth: 1,
          trackBorderRadius: 8,
          trackBorderColor: "#C38C8C",
        },
        legend: { enabled: false },
        tooltip: {
          shared: tooltip ? tooltip : false,
          useHTML: true,
          backgroundColor: toolTipBg,
          borderColor: tBorder,
          padding: 4,
          className: "tooltipStyle",
          style: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: "0.7vw",
          },
          formatter: function (
            this: Highcharts.TooltipFormatterContextObject
          ): string | boolean {
            if (tooltip !== "shared") {
              const value: any = this.y;

              const thisColorColumnChart3: any = this?.color;
              switch ("graph1") {
                case "graph1":
                  setToolTipBg(
                    location.pathname === "/energyManagement"
                      ? "#050F1B"
                      : "#57585A"
                  );
                  setTBorder(
                    location.pathname === "/energyManagement"
                      ? "#636363"
                      : "#57585A"
                  );
                  break;
              }

              return ` <table>
          <tr>
            <td style="text-align: center;">
                ${`${value}${units}`}
            </td>
          </tr>
        </table>`;
            } else if (tooltip) {
              const thisXCopy: any = this?.x;
              return `<table>
                            <tr>
                            <td 
                            style="font-weight: 100;
                            line-height:10px;
                            font-size:  0.9vw;
                            color:#FFFFFF;
                            background-color:#050F1B;
                            padding:20px;
                            vertical-align:middle;
                            border-radius:${is4kDevice ? "10px" : "5px"};
                            border: 0.5px solid #636363
                           ">
                              ${this?.points?.reduce(
                                (s: any, point: any): any => {
                                  return (
                                    s +
                                    `<div 
                                  style="background-color:${
                                    point.series.color === "#B3A7F0"
                                      ? "#37CB94"
                                      : point.series.color
                                  };
                                  padding:${is4kDevice ? "15px" : "7px"};
                                  display:inline-block;
                                  margin-right:${is4kDevice ? "10px" : "5px"};
                                  border-radius:${is4kDevice ? "25px" : "3px"};
                                  "></div>` +
                                    point?.y +
                                    units +
                                    "<br/><br/>"
                                  );
                                },
                                ""
                              )}
                            </td>
                      </tr>
                    </table>`;

              // return `<table>
              //         <tr>
              //         <td style="font-weight:bold;color:black">
              //           ${this?.points?.reduce((s:any, point:any):any =>{
              //             return (
              //               point?.series?.name + ": " + point?.y + "<br/>" + s
              //             );
              //           },
              //           `<b>
              //             ${new Date(thisXCopy).toLocaleDateString("nl-Nl")}
              //            </b>`
              //           )}
              //         </td>
              //   </tr>
              // </table>`;
            } else {
              return false;
            }
          },
        },
        xAxis: {
          visible: isVisible,
          categories:
            pageName === "FleetManagement"
              ? ["06/14", "06/15", "06/16", "06/17", "06/18", "06/19", "06/20"]
              : lastTwntyTwoHours,
          tickInterval:
            is4kDevice || is2kDevice
              ? (is4kDevice && location.pathname === "/energyManagement") ||
                (is4kDevice && location.pathname === "/security") ||
                (is4kDevice && location.pathname === "/lighting") ||
                (is4kDevice && location.pathname === "/fleetManagement") ||
                (is2kDevice && location.pathname === "/fleetManagement")
                ? pageName === "FleetManagement"
                  ? graphType === "area" || graphType === "spline"
                    ? 2
                    : 1
                  : 8
                : 12
              : tickInterval
              ? tickInterval
              : 8,
          crosshair: {
            enabled: isCrosshair,
            width: isCrosshair ? 1 : 0,
            color: isCrosshair ? crossHairLineColor : "transparent",
            dashStyle: "ShortDash",
            snap: isCrosshair,
          },

          labels: {
            useHTML: true,
            // overflow: "justify",
            style: {
              fontSize: "0.7vw",
              textOverflow: 'none',
              autoRotation: false,

              color: "white",
              
            },
          },
          gridLineWidth: 0,
          lineWidth: 0,
          tickPositioner: function (this: any) {
            const ticks: any = this.tickPositions;
            if (!ticks.includes(this.dataMax)) ticks.push(this.dataMax);
            ticks.sort((a: any, b: any) => a - b);
            while (ticks[ticks.length - 1] > this.dataMax) {
              ticks.pop();
            }
            return ticks;
          },
        },

        title: false,
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: false,
            },
          },
          series: {
            // fillColor: {
            //   linearGradient: [0, 0, 0, 200],
            //   stops: [
            //     [0, Highcharts.color("#3DFFDC").setOpacity(0.4).get("rgba")],
            //     [0.8, Highcharts.color("#000").setOpacity(0).get("rgba")],
            //     //  [0.8, Highcharts.color("#3DFFDC").setOpacity(0).get("rgba")],
            //     //  [1, "rgba(61, 255, 220, 0)"],
            //   ],
            // },
          },
        },
        series: dataPoints,
        yAxis: {
          visible: false,
        },
        credits: false,
      }}
    />
  );
};
export default Chart;
