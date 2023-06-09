import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import theme from "../../theme/theme";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import useStyles from "./styles";

const ParkingScreen3 = (props: any) => {
  const { data } = props;
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  //   useEffect(() => {
  //     switch (selectedTheme) {
  //       case "red":
  //         setAppTheme(theme?.redTheme);
  //         break;
  //       case "green":
  //         setAppTheme(theme?.greenTheme);
  //         break;
  //       case "yellow":
  //         setAppTheme(theme?.yellowTheme);
  //         break;
  //       case "default":
  //         setAppTheme(theme?.defaultTheme);
  //         break;
  //       default:
  //         setAppTheme(theme?.defaultTheme);
  //         break;
  //     }
  //   }, [selectedTheme]);

  const {
    parkingScreen3Container,
    parkingScreen3BottomContainer,
    leftBottomSection,
    rightBottomSection,
    leftBottomValueTitle,
    leftBottomTitle,
    leftBottomValue,
    rightBottomValueTitle,
    rightBottomTitle,
    rightBottomValue,
  } = useStyles(appTheme);

  const chartData = data?.panel3?.analytics?.graphData;
  const parkingScreenData = data?.panel3;

  let chartYaxis = Array.from(
    chartData,
    (ps: any) => ps?.carbonEmissionReduction
  );
  let monthName = new Array(
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  );
  let currentDate = new Date();
  let result = [];
  currentDate.setDate(1);
  for (let i = 0; i <= 11; i++) {
    result.push(
      monthName[currentDate.getMonth()] +
        " " +
        currentDate.getFullYear().toString().substr(-2)
    );
    currentDate.setMonth(currentDate.getMonth() - 1);
  }
  const xAxisNewValue = result.reverse();

  return (
    <>
      <div className={parkingScreen3Container}>
        <div>ParkingScreen3</div>
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={{
              chart: {
                type: "areaspline",
                plotBackgroundColor: "transparent",
                backgroundColor: "transparent",
                marginTop: 0,
                marginLeft: 0,
                marginRight: 0,
                // marginBottom: 10,
                height: 200,
                width: 600,
                reflow: true,
              },
              legend: false,
              tooltip: {
                headerFormat: null,
                pointFormat: '<p style="padding:0">{point.y} PPM</p>',
                footerFormat: null,
                useHTML: true,
              },
              xAxis: {
                categories: xAxisNewValue, //['7AM', '9AM', '11AM', '1PM', '3PM', '5PM'],
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
                      [0, "#0048b9"],
                      [
                        1,
                        Highcharts.color("#0048b9").setOpacity(0).get("rgba"),
                      ],
                    ],
                  },
                  lineColor: "#57a1bd",
                  color: "white",
                },
              },
              series: [
                {
                  data: chartYaxis.slice(0, 11), //[0, 2, 4, 2, 2, 0]
                },
              ],
              yAxis: {
                visible: false,
              },
              credits: false,
            }}
          />
        </div>
        <div className={parkingScreen3BottomContainer}>
          {/* <div className={leftBottomSection}>
          <div className={leftBottomValueTitle}>
            <div className={leftBottomValue}>
              {parkingScreenData?.live?.available}
            </div>
            <div className={leftBottomTitle} />
            Available
          </div>
          <div className={leftBottomValueTitle}>
            <div className={leftBottomValue}>
              {parkingScreenData?.live?.occupied}
            </div>
            <div className={leftBottomTitle} />
            Occupied
          </div>
        </div> */}
          <div className={rightBottomSection}>
            <div className={rightBottomValueTitle}>
              <div className={rightBottomValue}>
                {parkingScreenData?.hoursSaved}
              </div>
              <div className={rightBottomTitle} />
              Hours saved
            </div>
            <div className={rightBottomValueTitle}>
              <div className={rightBottomValue}>
                {parkingScreenData?.hoursSaved2}
              </div>
              <div className={rightBottomTitle} />
              Hours saved
            </div>
            <div className={rightBottomValueTitle}>
              <div className={rightBottomValue}>
                {parkingScreenData?.metricTons}
              </div>
              <div className={rightBottomTitle} />
              gal saved
            </div>
            <div className={rightBottomValueTitle}>
              <div className={rightBottomValue}>{parkingScreenData?.year}</div>
              <div className={rightBottomTitle} />
              metric tons
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParkingScreen3;
