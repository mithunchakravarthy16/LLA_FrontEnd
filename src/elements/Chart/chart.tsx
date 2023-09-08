import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import muiTheme from "theme/muiTheme";
import theme from "../../theme/theme";
import moment from "moment";
import { useSelector } from "react-redux";

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
    is3kDevice,
    formatGraph,
    xAxisArray,
    selectedValue,
  } = props;

  // const [selectedTheme, setSelectedTheme] = useState(
  //   JSON.parse(localStorage.getItem("theme")!)
  // );

  const adminPanelData = useSelector(
    (state: any) => state?.adminPanel?.getConfigData?.data?.body
  );

  const [selectedTheme, setSelectedTheme] = useState<any>();
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  const [isEveryYAxisValuesAreZero, setIsEveryYAxisValuesAreZero] =
    useState<boolean>(false);

  useEffect(() => {
    setSelectedTheme(adminPanelData?.appearance);
  }, [adminPanelData]);

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

  useEffect(() => {
    if (pageName === "assetTracking" || pageName === "FleetManagement" || pageName === "assetTrackingGridView") {
      dataPoints?.length > 0 &&
        dataPoints?.every((item: any) => {
          setIsEveryYAxisValuesAreZero(
            item?.data?.every(
              (dataValues: any) =>
                (dataValues?.length > 1 && dataValues[1]) === 0
            )
          );
        });
    }
  }, [dataPoints]);

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
      containerProps={{ style: { height: "100%", width: "100%" } }}
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
                    location.pathname === "/energyManagement" ||
                      location.pathname === "/lighting" ||
                      location.pathname === "/parking" ||
                      location.pathname === "/security" ||
                      location.pathname === "/fleetManagement" ||
                      location.pathname === "/assetTracking"
                      ? "#050F1B"
                      : selectedTheme === "light"
                      ? "#050F1B"
                      : "#57585A"
                  );
                  setTBorder(
                    location.pathname === "/energyManagement" ||
                      location.pathname === "/lighting" ||
                      location.pathname === "/parking" ||
                      location.pathname === "/security" ||
                      location.pathname === "/fleetManagement" ||
                      location.pathname === "/assetTracking"
                      ? "#636363"
                      : selectedTheme === "light"
                      ? "#050F1B"
                      : "#57585A"
                  );
                  break;
              }

              return ` <table>
          <tr>
            <td style="text-align: center;">
                ${`${value?.toFixed(2)}${units}`}
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
                            padding:${
                              is4kDevice || is3kDevice
                                ? "20px"
                                : "12px 10px 5px 10px"
                            };
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
                                  border-radius:${is4kDevice ? "50%" : "50%"};
                                  "></div>` +
                                    point?.y?.toFixed(2) +
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
          // endOnTick: true,
          categories: xAxisArray
            ? xAxisArray
            : pageName !== "assetTracking" && pageName !== "FleetManagement" && lastTwntyTwoHours,
          tickInterval:
            is4kDevice || is2kDevice
              ? (is4kDevice && location.pathname === "/energyManagement") ||
                (is4kDevice && location.pathname === "/security") ||
                (is4kDevice && location.pathname === "/lighting")
                ? 8
                : pageName === "assetTracking"
                ? selectedValue === "Today"
                ? 5 * 3600 * 1000
                : selectedValue === "Year"
                ? 70 * 24 * 3600 * 1000
                : selectedValue === "Month"
                ? 5 * 24 * 3600 * 1000
                : 30 * 3600 * 1000
                : pageName === "assetTrackingGridView" ?
                selectedValue === "Today"
                ? 5 * 3600 * 1000
                : selectedValue === "Year"
                ? 70 * 24 * 3600 * 1000
                : selectedValue === "Month"
                ? 5 * 24 * 3600 * 1000
                : 30 * 3600 * 1000
                : 12
              : tickInterval
              ? tickInterval
              : pageName !== "FleetManagement" && pageName !== "assetTracking" &&  pageName !== "assetTrackingGridView"
              ? 8
              : pageName === "FleetManagement" ? selectedValue === "Today"
              ? 8 * 3600 * 1000
              : selectedValue === "Year"
              ? 90 * 24 * 3600 * 1000
              : selectedValue === "Month"
              ? 5 * 24 * 3600 * 1000
              : 40 * 3600 * 1000
              : pageName === "assetTracking" ?
              selectedValue === "Today"
              ? 5 * 3600 * 1000
              : selectedValue === "Year"
              ? 70 * 24 * 3600 * 1000
              : selectedValue === "Month"
              ? 5 * 24 * 3600 * 1000
              : 30 * 3600 * 1000
              : pageName === "assetTrackingGridView" ?
              selectedValue === "Today"
              ? 5 * 3600 * 1000
              : selectedValue === "Year"
              ? 70 * 24 * 3600 * 1000
              : selectedValue === "Month"
              ? 5 * 24 * 3600 * 1000
              : 30 * 3600 * 1000
              : 8,
          crosshair: {
            enabled: isCrosshair,
            width: isCrosshair ? 1 : 0,
            color: isCrosshair ? crossHairLineColor : "transparent",
            dashStyle: "ShortDash",
            snap: isCrosshair,
          },
          type:
            (pageName === "assetTracking" || pageName === "FleetManagement" || pageName === "assetTrackingGridView") &&
            "datetime",
          labels: {
            allowOverlap: false,
            formatter:
             (pageName === "FleetManagement" || pageName === "assetTracking" || pageName === "assetTrackingGridView") &&
              function (this: any) {
                const convertedTime = moment.utc(this.value).utcOffset(330); // 330 minutes = GMT+05:30
                if (selectedValue === "Today") {
                  return Highcharts.dateFormat("%I:%M %p", this.value);
                } else {
                  return convertedTime.format(
                    formatGraph
                      ? formatGraph
                      : selectedValue === "Year"
                      ? "MMM/YY"
                      : "MM/DD"
                  );
                }
              },

            useHTML: true,
            // overflow: "justify",
            overflow: "justify",
            format: formatGraph
              ? formatGraph
              : (pageName === "assetTracking" || pageName === "FleetManagement" || pageName === "assetTrackingGridView") && selectedValue === "Today"
              ? "{value:%H:00}"
              : selectedValue === "Year"
              ? "{value:%b}"
              : "{value:%m/%e}",
            style: {
              fontSize: "0.65vw",
              textOverflow: "none",
              autoRotation: false,
              fontWeight: 500,
              color: appTheme?.palette?.chart?.xAxisTextColor,
            },
          },
          gridLineWidth: 0,
          lineWidth: 0,
          tickPositioner:
            (!selectedValue ||
              (selectedValue !== "Today" && selectedValue !== "Month")) &&
            function (this: any) {
              const ticks: any = this.tickPositions;

              if (!ticks.includes(this.dataMax)) ticks.push(this.dataMax);
              ticks.sort((a: any, b: any) => a - b);
              while (ticks[ticks.length - 1] > this.dataMax) {
                ticks.pop();
              }
              return ticks;
            },
        },

        setOptions: {
          time: {
            useUTC: false,
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
          max:
          (pageName === "assetTracking" || pageName === "FleetManagement" || pageName === "assetTrackingGridView") && isEveryYAxisValuesAreZero
              ? 100
              : undefined,
        },
        credits: false,
      }}
    />
  );
};
export default Chart;
