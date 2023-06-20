import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useState } from "react";
import moment from "moment";

const EnergyManagementCharts: React.FC<any> = (props) => {
  const {
    type,
    splineWidth,
    width,
    height,
    dataPoints,
    isVisible,
    graphType,
    units,
    format,
    graphSequence,
    tooltipShow,
    isCrosshair,
    dataLabels,
    tabIdentity,
    pageName,
    // xAxisArray,
    xAxisInterval,
    graphTitle,
    selectedAnalyticListItem,
    toolTipShared,
  } = props;

  const [toolTipBg, setToolTipBg] = useState<string>();
  const [tBorder, setTBorder] = useState<string>();

  let times = [],
    periods = ["AM", "PM"],
    hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    prop = null,
    hour = null,
    min = null;

  for (prop in periods) {
    for (hour in hours) {
      for (min = 0; min < 60; min += 60) {
        times.push(
          ("0" + hours[hour]).slice(-2) +
            ":" +
            ("0" + min).slice(-2) +
            " " +
            periods[prop]
        );
      }
    }
  }
  const currentTime = moment().format("h A");
  const xAxisArray = times.filter(
    (value) =>
      moment(value, ["h A"]).format("HH") <
      moment(currentTime, ["h A"]).format("HH")
  );
  const xAxisTimeArray = xAxisArray.slice(
    xAxisArray.length - xAxisInterval,
    xAxisArray.length
  );
  const xAxisNewValue = Array.from(xAxisTimeArray, (ps) => ps);

  return (
    <HighchartsReact
      highcharts={Highcharts}
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
        legend: false,
        tooltip: {
          shared: false,
          useHTML: true,
          backgroundColor: toolTipBg,
          borderColor: tBorder,
          padding: 4,
          className: "tooltipStyle",
          style: {
            color: "#fff",
            fontWeight: "bold",
          },
          formatter: function (
            this: Highcharts.TooltipFormatterContextObject
          ): string | boolean {
            if (true) {
              const value: any = this.y;

              const thisColorColumnChart3: any = this?.color;
              switch ("graph1") {
                case "graph1":
                  setToolTipBg("#050F1B");
                  setTBorder("#050F1B");
                  break;
              }

              return ` <table>
          <tr>
            <td style="text-align: center;">
                ${`${value}${units}`}
            </td>
          </tr>
        </table>`;
            } else if (false) {
              const thisXCopy: any = this?.x;
              return `<table>
                            <tr>
                            <td 
                            style="font-weight: 100;
                            line-height:10px;
                            font-size:14px;
                            color:#464646;
                            background-color:#fff;
                            padding:10px 20px 5px 10px;
                            vertical-align:middle;
                            border-radius:5px;
                            box-shadow:0 0 5px #464646;">
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
                                  padding:7px;
                                  display:inline-block;
                                  margin-right:5px;
                                  border-radius:3px;
                                  "></div>` +
                                    point?.series?.name +
                                    " - " +
                                    point?.y +
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
          categories: xAxisNewValue,
          tickInterval: 3,
          crosshair: {
            enabled: isCrosshair,
            width:  isCrosshair ? 1 : 0,
            color: isCrosshair ? "#35DABF" : "transparent",
            dashStyle: "ShortDash",
            snap: isCrosshair,
          },

          labels: {
            useHTML: true,
            overflow: "justify",
            style: {
              fontSize: "10px",
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
export default EnergyManagementCharts;
