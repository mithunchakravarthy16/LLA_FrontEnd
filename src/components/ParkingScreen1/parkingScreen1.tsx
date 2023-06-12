import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import theme from "../../theme/theme";
import moment from "moment";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import useStyles from "./styles";

const ParkingScreen1 = (props: any) => {
  const { data } = props;
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const {
    rootContainer,
    parkingScreen1Container,
    parkingScreen1BottomContainer,
    leftBottomSection,
    rightBottomSection,
    leftBottomValueTitle,
    leftBottomTitle,
    leftBottomValue,
    rightBottomValueTitle,
    rightBottomTitle,
    rightBottomValue,
  } = useStyles(appTheme);

  const parkingScreen1Data = data?.panel1;
  const chartData = data?.panel1?.analytics?.graphData;

  let chartYaxis = Array.from(chartData, (ps: any) => ps?.parkedVehicals);
  chartYaxis = chartYaxis?.slice(8, 18);

  const currentDate = moment().format("MM-DD-YYYY");
  const currentTime = moment().format("h A");

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
          ("" + hours[hour]).slice(-2) +
            // ":" +
            // ("0" + min).slice(-2) +
            " " +
            periods[prop]
        );
      }
    }
  }
  const xAxisArray = times?.filter(
    (value) =>
      moment(value, ["h A"]).format("HH") <
      moment(currentTime, ["h A"]).format("HH")
  );
  const xAxisTimeArray = xAxisArray?.slice(
    xAxisArray?.length - 10,
    xAxisArray?.length
  );
  const xAxisNewValue = Array.from(xAxisTimeArray, (ps) => ps);

  return (
    <>
      <div className={parkingScreen1Container}>
        <div>Parking Screen 1</div>
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={{
              chart: {
                type: "areaspline",
                plotBackgroundColor: "transparent",
                backgroundColor: "transparent",
                // marginTop: 0,
                // marginLeft: 0,
                // marginRight: 0,
                // marginBottom: 35,
                height: 200,
                width: 600,
                // reflow: true,
              },
              legend: false,
              tooltip: {
                headerFormat: null,
                pointFormat: `<p style="padding:0">{point.y}% Occupied</p><p>${currentDate}</p>`,
                footerFormat: null,
                useHTML: true,
              },
              xAxis: {
                // categories: xAxisNewValue, //['7AM', '9AM', '11AM', '1PM', '3PM', '5PM'],
                categories: xAxisNewValue,

                labels: {
                  style: {
                    fontSize: "10px",
                    color: "white",
                  },
                },
                gridLineWidth: 0,
                lineWidth: 0,
              },
              title: false,
              plotOptions: {
                series: {
                  fillColor: {
                    linearGradient: [0, 0, 0, 35],
                    stops: [
                      [0, "#1b1b1b"],
                      [
                        1,
                        Highcharts.color("#1b1b1b").setOpacity(0).get("rgba"),
                      ],
                    ],
                  },
                  lineColor: "#57a1bd",
                  color: "white",
                },
              },
              series: [
                {
                  // data: chartValuesParkedVehicals // [0, 2, 4, 2, 2, 0]
                  data: chartYaxis,
                },
              ],
              yAxis: {
                visible: false,
              },
              credits: false,
            }}
          />
        </div>
        <div className={parkingScreen1BottomContainer}>
          <div className={leftBottomSection}>
            <div className={leftBottomValueTitle}>
              <div className={leftBottomValue}>
                {parkingScreen1Data?.live?.available}
              </div>
              <div className={leftBottomTitle} />
              Available
            </div>
            <div className={leftBottomValueTitle}>
              <div className={leftBottomValue}>
                {parkingScreen1Data?.live?.occupied}
              </div>
              <div className={leftBottomTitle} />
              Occupied
            </div>
          </div>
          <div className={rightBottomSection}>
            <div className={rightBottomValueTitle}>
              <div className={rightBottomValue}>
                {parkingScreen1Data?.lastWeek?.hoursSaved}
              </div>
              <div className={rightBottomTitle} />
              Hours saved
            </div>
            <div className={rightBottomValueTitle}>
              <div className={rightBottomValue}>
                {parkingScreen1Data?.lastWeek?.galSaved}
              </div>
              <div className={rightBottomTitle} />
              gal saved
            </div>
            <div className={rightBottomValueTitle}>
              <div className={rightBottomValue}>
                {parkingScreen1Data?.lastWeek?.metricTonsco2reduced}
              </div>
              <div className={rightBottomTitle} />
              metric tons CO2 reduced
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParkingScreen1;
