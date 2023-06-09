import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import theme from "../../theme/theme";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import useStyles from "./styles";

const ParkingScreen2 = (props: any) => {
  const { data } = props;
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  const {
    parkingScreen2Container,
    parkingScreen2BottomContainer,
    leftBottomSection,
    rightBottomSection,
    leftBottomValueTitle,
    leftBottomTitle,
    leftBottomValue,
    rightBottomValueTitle,
    rightBottomTitle,
    rightBottomValue,
  } = useStyles(appTheme);

  const parkingScreenData = data?.panel2;

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
  for (let i = 0; i <= 6; i++) {
    result.push(
      monthName[currentDate?.getMonth()] +
        " " +
        currentDate?.getFullYear().toString().substr(-2)
    );
    currentDate?.setMonth(currentDate?.getMonth() - 1);
  }
  const xAxisNewValue = result?.reverse();

  return (
    <>
      <div className={parkingScreen2Container}>
        <div>ParkingScreen2</div>
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={{
              chart: {
                type: "column",
                plotBackgroundColor: "transparent",
                backgroundColor: "transparent",
                marginTop: 0,
                marginLeft: 0,
                marginRight: 0,
                // marginBottom: 10,
                height: 200,
                width: 450,
                reflow: true,
              },
              title: false,
              legend: false,
              credits: false,
              tooltip: true,
              xAxis: {
                categories: xAxisNewValue,
                labels: {
                  style: {
                    fontSize: "10px",
                    color: "white",
                  },
                },
                gridLineWidth: 0,
                lineWidth: 0,
                minorGridLineWidth: 0,
                minorTickLength: 0,
                tickLength: 0,
              },
              plotOptions: {
                series: {
                  stacking: "normal",
                },
              },
              series: [
                {
                  color: "#0048b9",
                  borderWidth: 0,
                  data: [5, 3, 4, 2, 2, 3],
                },
                {
                  color: "#00ccff",
                  borderWidth: 0,
                  width: 20,
                  data: [2, 2, 3, 2, 1, 3],
                },
              ],
              yAxis: {
                min: 0,
                gridLineWidth: 0,
                lineWidth: 0,
                minorGridLineWidth: 0,
                minorTickLength: 0,
                tickLength: 0,
              },
            }}
          />
        </div>
        <div className={parkingScreen2BottomContainer}>
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
                {parkingScreenData?.currentOccupancy?.general}
              </div>
              <div className={rightBottomTitle} />
              General
            </div>
            <div className={rightBottomValueTitle}>
              <div className={rightBottomValue}>
                {parkingScreenData?.currentOccupancy?.electric}
              </div>
              <div className={rightBottomTitle} />
              Electic
            </div>
            <div className={rightBottomValueTitle}>
              <div className={rightBottomValue}>
                {parkingScreenData?.currentOccupancy?.accessibility}
              </div>
              <div className={rightBottomTitle} />
              Accessibility
            </div>
            <div className={rightBottomValueTitle}>
              <div className={rightBottomValue}>
                {parkingScreenData?.currentOccupancy?.expMothers}
              </div>
              <div className={rightBottomTitle} />
              ExpMothers
            </div>
            <div className={rightBottomValueTitle}>
              <div className={rightBottomValue}>
                {parkingScreenData?.currentOccupancy?.DFS}
              </div>
              <div className={rightBottomTitle} />
              DFS
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParkingScreen2;
