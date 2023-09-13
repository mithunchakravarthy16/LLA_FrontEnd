/** @format */

import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Highcharts from "highcharts";
import Chart from "elements/Chart";
import theme from "../../../theme/theme";
import useStyles from "../styles";
import useTranslation from "localization/translations";
import { useDispatch, useSelector } from "react-redux";
import {getAssetTrackingGridViewAnalyticsData } from "redux/actions/assetTrackingActiveInActiveAnalyticsAction";
import moment from "moment";

const GridViewScreenSix: React.FC<any> = (props) => {
  const { handleClick, selectedTheme } = props;
  const dispatch = useDispatch();
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

  
const assetTrackingGridViewAnalyticsDataResponse = useSelector(
  (state: any) =>
    state.assetTrackingActiveInActiveAnalytics
      .assetTrackingGridViewAnalyticsData
);


const[assetGridViewAnalyticsData, setAssetGridViewAnalyticsData] = useState<any>()
const[assetGridViewAnalyticsXaxisData, setAssetGridViewAnalyticsXaxisData] = useState<any>()

useEffect(()=>{
  const assetGridViewAnalyticsData: any = [];
  const assetGridViewAnalyticsXAxisData: any = [];

  assetTrackingGridViewAnalyticsDataResponse?.data?.data?.map((item: any) =>{
  // assetGridViewAnalyticsData?.push([
  //         new Date(item?.node)?.getTime(),
  //         item?.count,
  //       ])
        assetGridViewAnalyticsData?.push(item?.count);
        assetGridViewAnalyticsXAxisData?.push(moment(item?.node).format("hh:mm A"));
});
setAssetGridViewAnalyticsXaxisData(assetGridViewAnalyticsXAxisData)
      setAssetGridViewAnalyticsData(assetGridViewAnalyticsData);

},[assetTrackingGridViewAnalyticsDataResponse])



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
        }}
      >
        <Grid
          container
          xs={12}
          alignContent="space-between"
          className={gridContainers}
        >
          <Grid item xs={12} className={containerTitleTwo}>
            <div>{dashboard.assetsTracking}</div>
            <div
                      style={{
                        background:
                          appTheme?.palette?.gridViewComponentCommonStyle
                            ?.todayTitleBgColor,
                            padding: "0% 2%",
                            borderRadius : "0.3vw",
                            fontSize : "0.8vw",
                            fontWeight : 500,
                            marginRight: "4%"
                      }}>
                      {gridView.today}
                    </div>
          </Grid>
          <Grid item xs={12}>
            <div className={horizantalDataGridStyle}>
              <div className={engMgntliveContentLeftStyle}>
                <div className={horizantalDataGridValueStyle}>{assetTrackingGridViewAnalyticsDataResponse?.data?.assetTrackedCount}</div>
                <div className={horizantalDataGridLabelStyle}>
                  <p>{gridView.assets}</p> <p>{gridView.tracked}</p>
                </div>
              </div>
              <div className={engMgntliveContentMiddleStyle}>
                <div className={horizantalDataGridValueStyle}>{assetTrackingGridViewAnalyticsDataResponse?.data?.locationChangeCount}</div>
                <div className={horizantalDataGridLabelStyle}>
                  <p>{gridView.location}</p> <p>{gridView.changes}</p>
                </div>
              </div>
              <div className={engMgntliveContentStyle}>
                <div className={horizantalDataGridValueStyle}>{assetTrackingGridViewAnalyticsDataResponse?.data?.outOfGeofenceCount}</div>
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
              // selectedValue={"Today"}
              pageName={"assetTrackingGridView"}
              tickInterval={6}                                          
              xAxisArray={assetGridViewAnalyticsXaxisData}
              
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
                  data: assetGridViewAnalyticsData
                  // data: [
                  //   1, 3, 2, 5, 1, 3, 10, 4, 3, 4, 7, 10, 1, 1, 3, 10, 4, 3, 4,
                  //   7, 10, 4, 3, 4,
                  // ],
                },
              ]}
            />
          </Grid>
          {/* <Grid
            item
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              fontSize : "1vw"
            }}
          >
            Development In Progress...
          </Grid> */}
        </Grid>
      </Grid>
    </>
  );
};

export default GridViewScreenSix;
