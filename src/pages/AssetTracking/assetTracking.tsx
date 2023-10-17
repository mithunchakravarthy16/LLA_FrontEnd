/** @format */
//@ts-nocheck
import { useState, useEffect, useCallback, useRef, useContext } from "react";
import {WebsocketContext } from "../../App";
import Grid from "@mui/material/Grid";
import {
  AssetTrackedIcon,
  LocationIcon,
  OutOfGeofenceIcon,
  IncidentIcon,
  AssetTrackedLightThemeIcon,
  LocationLightThemeIcon,
  OutOfGeofenceLightThemeIcon,
  IncidentLightThemeIcon,
} from "../../assets/topPanelListIcons";
import useTranslation from "localization/translations";
import theme from "../../theme/theme";
import useStyles from "./styles";
import TopPanelListItemContainer from "components/TopPanelListItemContainer";
import AssetMap from "../../components/Map/assetMap";
import moment from "moment";
import Chart from "elements/Chart";
import Highcharts from "highcharts";
import NotificationPanel from "components/NotificationPanel";
import InactiveTrackerIcon from "../../assets/topPanelListIcons/AssetTracking/InactiveTracker.svg";
import {
  formatttedDashboardNotification,
  formatttedDashboardNotificationCount,
  formattedOverallNotificationCount,
} from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { getNotificationData } from "redux/actions/getAllAssertNotificationAction";
import { getAssetActiveInactiveTracker } from "redux/actions/getActiveInactiveTrackerCount";
import { getAssetIncidentCount } from "redux/actions/getAllIncidentCount";
import { getOverallTrackerDetail } from "redux/actions/getOverAllTrackerdetail";
import { getAssetLiveLocation } from "redux/actions/getAssetTrackerDetailAction";
import { getCreateGeofence } from "redux/actions/createGeofenceAction";
import { getUpdateGeofence } from "redux/actions/updateGeofenceAction";
import { getEnableGeofence } from "redux/actions/enableGeofenceAction";
import InfoDialogAssetTracking from "components/InfoDialogAssetTracking";
import InfoDialogGeofenceAssetTracking from "../../components/InfoDialogGeofenceAssetTracking";
import assetAnalyticsData from "mockdata/assetTrackingAnalytics";
import Loader from "elements/Loader";
import {
  getAssetTrackingActiveInActiveAnalyticsData,
  getAssetTrackingIncidentsAnalyticsData,
} from "redux/actions/assetTrackingActiveInActiveAnalyticsAction";
import CustomTablePagination from "elements/CustomPagination";
import { UseWebSocket } from "websocketServices/useWebsocket";
import GlobeIconActive from "../../assets/globeCircleIcon.svg";
import GeofenceIcon from "../../assets/GeofenceIcon.svg";
import { getGoogleMapApi } from "redux/actions/googleMapApiKeyAction";

const AssetTracking: React.FC<any> = (props) => {
  const dispatch = useDispatch();
  const { mapType, setMapType } = props;

  // const {websocketLatestAssetNotification, websocketLatestAssetTrackerLive} = useContext(WebsocketContext);
  

  //Analytics Api integration starts here
  const [selectedValue, setSelectedValue] = useState<string>("Today");
  const [selectedGraphFormat, setSelectedGraphFormat] = useState<any>({
    format: "MM/DD",
    tickInterval: 1,
  });
  const [assetLiveMarker, setAssetLiveMarker] = useState<any>("");

  useEffect(() => {
    switch (selectedValue) {
      case "Today":
        dispatch(getAssetTrackingActiveInActiveAnalyticsData("Day"));
        dispatch(getAssetTrackingIncidentsAnalyticsData("Day"));
        setSelectedGraphFormat({ format: "hh:mm A", tickInterval: 6 });
        break;

      case "Week":
        dispatch(getAssetTrackingActiveInActiveAnalyticsData("Weekly"));
        dispatch(getAssetTrackingIncidentsAnalyticsData("Weekly"));
        setSelectedGraphFormat({ format: "MM/DD", tickInterval: 1 });
        break;

      case "Month":
        dispatch(getAssetTrackingActiveInActiveAnalyticsData("Monthly"));
        dispatch(getAssetTrackingIncidentsAnalyticsData("Monthly"));
        setSelectedGraphFormat({ format: "MM/DD", tickInterval: 3 });
        break;

      case "Year":
        dispatch(getAssetTrackingActiveInActiveAnalyticsData("Yearly"));
        dispatch(getAssetTrackingIncidentsAnalyticsData("Yearly"));
        setSelectedGraphFormat({ format: "MMM/YY", tickInterval: 1 });
        break;
      default:
        dispatch(getAssetTrackingActiveInActiveAnalyticsData("Weekly"));
        dispatch(getAssetTrackingIncidentsAnalyticsData("Weekly"));
        setSelectedGraphFormat({ format: "MM/DD", tickInterval: 1 });
    }
  }, [selectedValue]);

  const assetTrackingActiveInActiveAnalyticsResponse = useSelector(
    (state: any) =>
      state.assetTrackingActiveInActiveAnalytics
        .assetTrackingActiveInActiveAnalyticsData
  );

  const assetTrackingIncidentsAnalyticsResponse = useSelector(
    (state: any) =>
      state.assetTrackingActiveInActiveAnalytics
        .assetTrackingIncidentsAnalyticsData
  );

  const loaderAssetTrackingAnalyticsResponse = useSelector(
    (state: any) => state.assetTrackingActiveInActiveAnalytics.loadingAnalytics
  );

  const assetLiveData = useSelector(
    (state: any) => state?.assetTracker?.assetLiveData?.data
  );

  const assetNotificationResponse = useSelector(
    (state: any) => state?.assetNotification?.assetNotificationData
  );
  const assetNotificationList = assetNotificationResponse?.data;

  const loaderAssetNotificationResponse = useSelector(
    (state: any) => state?.assetNotification?.loadingAssetNotificationData
  );

  const overallAssetDetails = useSelector(
    (state: any) => state?.assetOverallTrackerDetails?.overallTrackerDetail
  );

  const [loaderExtAnalytics, setLoaderExtAnalytics] = useState<boolean>(true);
  useEffect(() => {
    setLoaderExtAnalytics(true);
    setTimeout(() => {
      setLoaderExtAnalytics(false);
    }, 1000);
  }, [loaderAssetTrackingAnalyticsResponse]);

  const [activeAnalyticsData, setActiveAnalyticsData] = useState<any>();
  const [inActiveAnalyticsData, setInActiveAnalyticsData] = useState<any>();
  const [incidentsAnalyticsData, setIncidentsAnalyticsData] = useState<any>();
  const [incidentsAnalyticsDataXaxisData, setIncidentsAnalyticsDataXaxisData] =
    useState<any>();
  const [
    activeInactiveAnalyticsXaxisData,
    setActiveInactiveAnalyticsXaxisData,
  ] = useState<any>();

  //Pagination
  const [page, setPage] = useState<any>(0);
  const [rowsPerPage, setRowsPerPage] = useState<any>(50);
  const [searchPageNo, setSearchPageNo] = useState<any>();
  const [paginationTotalCount, setPaginationTotalCount] = useState<any>();
  const [totalRecords, setTotalRecords] = useState<any>(
    formattedOverallNotificationCount(
      assetNotificationResponse && assetNotificationResponse?.data,
      assetNotificationResponse?.data,
      "asset"
    )
  );

  //Pagination End

  useEffect(() => {
    if (assetTrackingActiveInActiveAnalyticsResponse) {
      const activeAnalyticsData: any = [];
      const activeAnalyticsDataXaxis: any = [];
      const inActiveAnalyticsData: any = [];
      const inActiveAnalyticsDataXaxis: any = [];
      const incidentsAnalyticsData: any = [];
      const incidentsAnalyticsDataXaxisData: any = [];

      assetTrackingActiveInActiveAnalyticsResponse?.data
        ?.filter((obj: any) => obj.metricName === "ActiveTracker")
        .map((obj: any) =>
          obj.analytics?.map((item: any) => {
            activeAnalyticsData?.push(item?.count);
            const testDateUtc = moment.utc(item?.node);
            const localDate = testDateUtc.local();
            activeAnalyticsDataXaxis?.push(
              localDate.format(selectedGraphFormat?.format)
            );
          })
        );

      assetTrackingActiveInActiveAnalyticsResponse?.data
        ?.filter((obj: any) => obj.metricName === "InactiveTracker")
        .map((obj: any) =>
          obj.analytics?.map((item: any) => {
            inActiveAnalyticsData?.push(item?.count);
            const testDateUtc = moment.utc(item?.node);
            const localDate = testDateUtc.local();
            activeAnalyticsDataXaxis?.push(
              localDate.format(selectedGraphFormat?.format)
            );
          })
        );

      assetTrackingIncidentsAnalyticsResponse?.data?.data?.map((item: any) => {
        incidentsAnalyticsData?.push(item?.count);
        const testDateUtc = moment.utc(item?.node);
        const localDate = testDateUtc.local();
        incidentsAnalyticsDataXaxisData?.push(
          localDate.format(selectedGraphFormat?.format)
        );
      });

      setActiveInactiveAnalyticsXaxisData(activeAnalyticsDataXaxis);
      setActiveAnalyticsData(activeAnalyticsData);
      setInActiveAnalyticsData(inActiveAnalyticsData);

      setIncidentsAnalyticsDataXaxisData(incidentsAnalyticsDataXaxisData);
      setIncidentsAnalyticsData(incidentsAnalyticsData);
    }
  }, [
    assetTrackingActiveInActiveAnalyticsResponse,
    assetTrackingIncidentsAnalyticsResponse,
    selectedGraphFormat,
  ]);

  //Analytics Api integration Ends here

  const adminPanelData = useSelector(
    (state: any) => state?.adminPanel?.getConfigData?.data?.body
  );

  const { dashboard, gridView, security, assetsTracking } = useTranslation();
  const [selectedTheme, setSelectedTheme] = useState<any>();
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  const [notificationArray, setNotificationArray] = useState<any>([]);
  const [map, setMap] = useState<any>(null);
  const [isMarkerClicked, setIsMarkerClicked] = useState<boolean>(false);
  const [selectedNotification, setSelectedNotification] = useState<any>("");
  const [selectedMarkerType, setSelectedMakerType] = useState<string>("");

  useEffect(() => {
    setSelectedTheme(adminPanelData?.appearance);
  }, [adminPanelData]);

  useEffect(() => {
    switch (selectedTheme) {
      case "light":
        // @ts-ignore
        setAppTheme(theme?.lightTheme);
        break;
      case "dark":
        // @ts-ignore
        setAppTheme(theme?.darkTheme);
        break;
      default:
        setAppTheme(theme?.defaultTheme);
        break;
    }
  }, [selectedTheme]);

  const {
    rootContainer,
    mainSection,
    pageHeading,
    bodyContainer,
    bodySubContainer,
    bodyLeftContainer,
    bodyLeftSubContainer,
    bodyLeftTopPanelContainer,
    bodyLeftTopPanelMapContainer,
    bodyLeftTopPanelSubContainer,
    bodyLeftTopPanelListContainer,
    graphOneContainer,
    graphTwoContainer,
    notificationPanelGrid,
    graphTwoHeader,
    screenFiveGraphTitleStyle,
    graphOneContainerStyle,
    graphOneGraphTitleContainer,
    graphTitleOneRound,
    graphTitleTwoStyle,
    graphTitleTwoRound,
    graphOneChartStyle,
    graphTwoContainerStyle,
    graphTwoChartStyle,
    geofenceIconStyle,
    pageNumSection,
    customPagination,
    globeIconSection,
  } = useStyles(appTheme);

  useEffect(() => {
    let activeInactiveTrackerPayload: any = {};
    dispatch(getAssetActiveInactiveTracker(activeInactiveTrackerPayload));

    let incidentCountPayload: any = {};
    dispatch(getAssetIncidentCount(incidentCountPayload));

    let createGeofencePayload: any = {};
    dispatch(getCreateGeofence(createGeofencePayload));

    let updateGeofencePayload: any = {};
    dispatch(getUpdateGeofence(updateGeofencePayload));

    let enableGeofencePayload: any = {};
    dispatch(getEnableGeofence(enableGeofencePayload));

    let assetLiveDataPayload: any = {};
    dispatch(getAssetLiveLocation(assetLiveDataPayload));

    // const interval = setInterval(() => {
    //   dispatch(getAssetLiveLocation(assetLiveDataPayload));
    // }, 10 * 1000);

    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  const [debounceSearchText, setDebounceSearchText] = useState<any>("");
  const [tabIndex, setTabIndex] = useState<any>(1);

  useEffect(() => {
    let assetPayload: any = {
      filterText: debounceSearchText,
      pageNo: parseInt(page),
      pageSize: parseInt(rowsPerPage),
      notificationType:
        tabIndex === 0 ? "Events" : tabIndex === 1 ? "Incident" : "Alerts",
    };
    if (!debounceSearchText) {
      assetPayload = {
        filterText: "",
        pageNo: parseInt(page),
        pageSize: parseInt(rowsPerPage),
        notificationType:
          tabIndex === 0 ? "Events" : tabIndex === 1 ? "Incident" : "Alerts",
      };

      dispatch(
        getNotificationData({ payLoad: assetPayload, isFromSearch: true })
      );
    }

    // const intervalTime = setInterval(() => {
    //   dispatch(
    //     getNotificationData({ payLoad: assetPayload, isFromSearch: false })
    //   );
    // }, 1 * 60 * 1000);

    // return () => {
    //   clearInterval(intervalTime);
    // };
  }, [debounceSearchText, page, rowsPerPage]);

  const [selectedWidth, setSelectedWidth] = useState<any>();

  const [selectedFormatGraph, setSelectedFormatGraph] = useState("day");

  const [activeInactiveTrackersGraphData, setActiveInactiveTrackersGraphData] =
    useState<any>();

  const [
    activeTrackersGraphDataStateUpdates,
    setActiveTrackersGraphDataStateUpdates,
  ] = useState<any>();

  const [
    inactiveTrackersGraphDataStateUpdates,
    setInactiveTrackersGraphDataStateUpdates,
  ] = useState<any>();

  const [incidentsGraphData, setIncidentsGraphData] = useState<any>();

  const [incidentsGraphDataStateUpdates, setIncidentsGraphDataStateUpdates] =
    useState<any>();

  useEffect(() => {
    assetAnalyticsData?.graphAnalytics?.map((data: any, index: number) => {
      switch (data?.category) {
        case "activeInactiveTrackers":
          setActiveTrackersGraphDataStateUpdates(
            data?.analytics[selectedFormatGraph]?.activeTrackerAnalytics
          );

          setInactiveTrackersGraphDataStateUpdates(
            data?.analytics[selectedFormatGraph]?.inActiveTrackerAnalytics
          );
          setActiveInactiveTrackersGraphData(data?.analytics);

          break;

        case "incidents":
          setIncidentsGraphDataStateUpdates(
            data?.analytics[selectedFormatGraph]?.analyticsData
          );
          setIncidentsGraphData(data?.analytics);

          break;

        default:
      }
    });
  }, []);

  useEffect(() => {
    getActiveInactiveTrackersGraphData();
    getIncidentsGraphData();
  }, [
    inactiveTrackersGraphDataStateUpdates,
    activeTrackersGraphDataStateUpdates,
    incidentsGraphDataStateUpdates,
    selectedWidth,
  ]);

  const [
    updatedActiveInactiveTrackersGraphData,
    setUpdatedActiveInactiveTrackersGraphData,
  ] = useState<any>();

  const [updatedIncidentsGraphData, setUpdatedIncidentsGraphData] =
    useState<any>();

  const getActiveInactiveTrackersGraphData = () => {
    let data = [
      {
        data: graphDataManipulation(activeTrackersGraphDataStateUpdates),
        marker: {
          enabled: false,
        },
        lineColor: "#25796D",
        color: "#25796D",
        lineWidth:
          selectedWidth?.is4kDevice || selectedWidth?.is3KDevice ? 4 : 2,
      },
      {
        data: graphDataManipulation(inactiveTrackersGraphDataStateUpdates),
        marker: {
          enabled: false,
        },
        lineColor: "#D25A5A",
        color: "#D25A5A",
        lineWidth:
          selectedWidth?.is4kDevice || selectedWidth?.is3KDevice ? 4 : 2,
      },
    ];

    setUpdatedActiveInactiveTrackersGraphData(data);
  };

  const getIncidentsGraphData = () => {
    let data = [
      {
        data: graphDataManipulation(incidentsGraphDataStateUpdates),

        marker: {
          enabled: false,
        },
        lineColor: "#EE3E35",
        color: "#EE3E35",
        lineWidth:
          selectedWidth?.is4kDevice || selectedWidth?.is3KDevice ? 4 : 2,
        fillColor: {
          linearGradient: [0, 0, 0, 200],
          stops: [
            [0, Highcharts.color("#C3362F").setOpacity(0.5).get("rgba")],
            [
              0.5,
              Highcharts.color("#C3362F")
                .setOpacity(
                  selectedWidth?.is4kDevice || selectedWidth?.is3KDevice
                    ? selectedTheme === "light"
                      ? 0.4
                      : 0.3
                    : 0.3
                )
                .get("rgba"),
            ],
            [
              1,
              Highcharts.color("#C3362F")
                .setOpacity(
                  selectedWidth?.is4kDevice || selectedWidth?.is3KDevice
                    ? selectedTheme === "light"
                      ? 0.14
                      : 0.06
                    : selectedTheme === "light"
                    ? 0.01
                    : 0.02
                )
                .get("rgba"),
            ],
          ],
        },
      },
    ];

    setUpdatedIncidentsGraphData(data);
  };

  const graphDataManipulation = (analyticsGraphData: any) => {
    let manipulatedGraphData = [];
    if (analyticsGraphData) {
      if (analyticsGraphData) {
        for (let i = 0; i < analyticsGraphData?.length; i++) {
          manipulatedGraphData.push([
            // new Date(analyticsGraphData[i]?.node).getTime(),
            analyticsGraphData[i]?.count,
          ]);
        }
      }
    }
    return manipulatedGraphData;
  };

  // Updated Time 12Hrs Format - Day

  let times: any = [],
    periods: any = ["AM", "PM"],
    hours: any = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    prop: any = null,
    hour: any = null,
    min: any = null;

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
    (value: any) =>
      moment(value, ["h A"]).format("HH") <
      moment(currentTime, ["h A"]).format("HH")
  );
  const xAxisTimeArray = xAxisArray.slice(
    xAxisArray.length - 10,
    xAxisArray.length
  );
  const xAxisNewValueTime = Array.from(xAxisTimeArray, (ps) => ps);

  // Updated Time 24Hrs Format - Day

  var hoursPerDay: any = 24;
  var xAxisNewtime: any = [];

  function timeOneDay() {
    var formattedTime;
    var newTimeFormat;
    for (let i = 0; i < hoursPerDay + 1; i++) {
      formattedTime = moment().subtract(i, "hours").format("HH");
      newTimeFormat = formattedTime + ":00";
      xAxisNewtime.unshift(newTimeFormat);
    }
    const newTimePop = xAxisNewtime.pop();
  }
  timeOneDay();

  //Updated Day List - Week

  const today: any = moment();
  const xAxisWeek: any = Array(7)
    .fill(7)
    .map(() => today.subtract(1, "d").format("MM/DD"));

  const xAxisNewValueWeek = xAxisWeek.reverse();

  //Updated Day List - Month

  const todayMonth: any = moment();
  const xAxisMonth: any = Array(30)
    .fill(30)
    .map(() => todayMonth.subtract(1, "d").format("MM/DD"));

  const xAxisNewValueMonth = xAxisMonth.reverse();

  // Year

  let monthName: any = new Array(
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
  let currentDate: any = new Date();

  let result: any = [];
  currentDate.setDate(1);
  for (let i = 0; i <= 11; i++) {
    result.push(
      monthName[currentDate.getMonth()]
      // +
      //   " " +
      //   currentDate.getFullYear().toString().substr(-2)
    );
    currentDate.setMonth(currentDate.getMonth() - 1);
  }
  const xAxisNewValue: any = result.reverse();
  const xAxisValueYear: any = xAxisNewValue.slice(
    xAxisNewValue.length - 12,
    xAxisNewValue.length
  );

  const [xAxisChartDataGraph, setXAxisChartDataGraph] =
    useState<any>(xAxisNewValueWeek);

  const [xAxisIntervalGraph, setXAxisIntervalGraph] = useState(2);

  const monthFomrat = "{value:%m/%e}";
  const dayFormat = "{value:%H:00}";
  const yearFormat = "{value:%b}";

  const [formatGraph, setFormatGraph] = useState(monthFomrat);
  const [mapMarkerArrayList, setMapMarkerArrayList] = useState<any>([]);

  const [liveMarkerList, setLiveMarkerList] = useState<any>(
    assetLiveData && assetLiveData
  );

  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [notificationPanelActive, setNotificationPanelActive] =
    useState<boolean>(false);
  const [currentMarker, setCurrentMarker] = useState<any>("");

  const [searchValue, setSearchValue] = useState<any>(
    formatttedDashboardNotification(notificationArray, tabIndex)
  );

  const [dashboardData, setDashboardData] = useState<any>(
    formatttedDashboardNotification(notificationArray, tabIndex)
  );

  const handleSelect = (val: any) => {
    setSelectedValue(val);

    switch (val) {
      case "Today":
        setFormatGraph(dayFormat);
        setSelectedFormatGraph("day");
        setActiveTrackersGraphDataStateUpdates(
          activeInactiveTrackersGraphData?.day?.activeTrackerAnalytics
        );
        setInactiveTrackersGraphDataStateUpdates(
          activeInactiveTrackersGraphData?.day?.inActiveTrackerAnalytics
        );
        setIncidentsGraphDataStateUpdates(
          incidentsGraphData?.day?.analyticsData
        );
        setXAxisChartDataGraph(xAxisNewtime);
        setXAxisIntervalGraph(5);

        break;
      case "Week":
        setFormatGraph(monthFomrat);
        setSelectedFormatGraph("weekly");
        setActiveTrackersGraphDataStateUpdates(
          activeInactiveTrackersGraphData?.weekly?.activeTrackerAnalytics
        );
        setInactiveTrackersGraphDataStateUpdates(
          activeInactiveTrackersGraphData?.weekly?.inActiveTrackerAnalytics
        );
        setIncidentsGraphDataStateUpdates(
          incidentsGraphData?.weekly?.analyticsData
        );
        setXAxisChartDataGraph(xAxisNewValueWeek);
        setXAxisIntervalGraph(2);

        break;
      case "Month":
        setFormatGraph(monthFomrat);
        setSelectedFormatGraph("monthly");
        setActiveTrackersGraphDataStateUpdates(
          activeInactiveTrackersGraphData?.monthly?.activeTrackerAnalytics
        );
        setInactiveTrackersGraphDataStateUpdates(
          activeInactiveTrackersGraphData?.monthly?.inActiveTrackerAnalytics
        );
        setIncidentsGraphDataStateUpdates(
          incidentsGraphData?.monthly?.analyticsData
        );
        setXAxisChartDataGraph(xAxisNewValueMonth);
        setXAxisIntervalGraph(12);

        break;
      case "Year":
        setFormatGraph(yearFormat);
        setSelectedFormatGraph("yearly");
        setActiveTrackersGraphDataStateUpdates(
          activeInactiveTrackersGraphData?.yearly?.activeTrackerAnalytics
        );
        setInactiveTrackersGraphDataStateUpdates(
          activeInactiveTrackersGraphData?.yearly?.inActiveTrackerAnalytics
        );
        setIncidentsGraphDataStateUpdates(
          incidentsGraphData?.yearly?.analyticsData
        );
        setXAxisChartDataGraph(xAxisValueYear);
        setXAxisIntervalGraph(3);

        break;
      default:
        setFormatGraph(dayFormat);
        setSelectedFormatGraph("day");
        setActiveTrackersGraphDataStateUpdates(
          activeInactiveTrackersGraphData?.day?.activeTrackerAnalytics
        );
        setInactiveTrackersGraphDataStateUpdates(
          activeInactiveTrackersGraphData?.day?.inActiveTrackerAnalytics
        );
        setIncidentsGraphDataStateUpdates(
          incidentsGraphData?.day?.analyticsData
        );
        setXAxisChartDataGraph(xAxisNewtime);
        setXAxisIntervalGraph(5);
        break;
    }
  };

  const [topPanelList, setTopPanelList] = useState<any>(
    overallAssetDetails?.data
  );

  useEffect(() => {
    setTopPanelList(overallAssetDetails?.data);
  }, [overallAssetDetails]);

  useEffect(() => {
    switch (selectedValue) {
      case "Today":
        dispatch(getOverallTrackerDetail("Day"));
        return;

      case "Week":
        dispatch(getOverallTrackerDetail("Weekly"));

        return;

      case "Month":
        dispatch(getOverallTrackerDetail("Monthly"));

        return;

      case "Year":
        dispatch(getOverallTrackerDetail("Yearly"));

        return;

      default:
        dispatch(getOverallTrackerDetail("Weekly"));
    }
  }, [selectedValue]);

  //---websocket Implementation starts---

  // const [
  //   websocketLatestAssetNotification,
  //   setWebsocketLatestAssetNotification,
  // ] = useState<any>([]);
  // const [websocketLatestAssetTrackerLive, setWebsocketLatestAssetTrackerLive] =
  //   useState<any>([]);
  // const clientRef = useRef<any>();


  // useEffect(() => {
  //   UseWebSocket(
  //     (message:any) => {
  //       setWebsocketLatestAssetNotification(message);
  //     },
  //     (message:any) => {
  //       setWebsocketLatestAssetTrackerLive(message);
  //     },
  //     (clintReference:any) => {
  //       clientRef.current = clintReference;
  //     },
  //     "openWebsocket"
  //   );

  //   return () => {
  //     UseWebSocket(
  //       () => {},
  //       () => {},
  //       () => {},
  //       "closeWebsocket",
  //       clientRef.current
  //     );
  //   };
  // }, []);

  //---websocket Implementation ends---

  useEffect(() => {
    if (assetNotificationList && assetLiveData) {
      

      // const insertWebsocketDataToExisitingNotiData = (
      //   websocketLatestAssetNotification: any
      // ) => {
      //   websocketLatestAssetNotification &&
      //     websocketLatestAssetNotification?.length > 0 &&
      //     websocketLatestAssetNotification?.map((item: any) => {
      //       if (
      //         item.notificationType?.toString()?.toLowerCase() === "incident"
      //       ) {
      //         if (
      //           !assetNotificationResponse?.data?.incidents?.incidentList.some(
      //             (obj) => obj.assetNotificationId === item.assetNotificationId
      //           )
      //         ) {
      //           assetNotificationResponse?.data?.incidents?.incidentList?.unshift(
      //             item
      //           );
      //         }
      //       }

      //       if (item.notificationType?.toString()?.toLowerCase() === "events") {
      //         if (
      //           !assetNotificationResponse?.data?.events?.eventsList?.some(
      //             (obj) => obj.assetNotificationId === item.assetNotificationId
      //           )
      //         ) {
      //           assetNotificationResponse?.data?.events?.eventsList?.unshift(
      //             item
      //           );
      //         }
      //       }

      //       if (item.notificationType?.toString()?.toLowerCase() === "alerts") {
      //         if (
      //           !assetNotificationResponse?.data?.alerts?.alertList?.some(
      //             (obj) => obj.assetNotificationId === item.assetNotificationId
      //           )
      //         ) {
      //           assetNotificationResponse?.data?.alerts?.alertList?.unshift(
      //             item
      //           );
      //         }
      //       }
      //     });
      // };

      // if (parseInt(page) === 0 && !debounceSearchText) {
      //   insertWebsocketDataToExisitingNotiData(
      //     websocketLatestAssetNotification
      //   );
      // } else if (parseInt(page) === 0 && debounceSearchText) {
      //   const websocketSearchResult = websocketLatestAssetNotification?.filter(
      //     (value: any) => {
      //       return (
      //         value?.assetName
      //           ?.toString()
      //           ?.toLowerCase()
      //           .includes(debounceSearchText?.toString()?.toLowerCase()) ||
      //         value?.area
      //           ?.toString()
      //           ?.toLowerCase()
      //           .includes(debounceSearchText?.toString()?.toLowerCase()) ||
      //         value?.currentArea
      //           ?.toString()
      //           ?.toLowerCase()
      //           .includes(debounceSearchText?.toString()?.toLowerCase()) ||
      //         value?.trackerId
      //           ?.toString()
      //           ?.toLowerCase()
      //           .includes(debounceSearchText?.toString()?.toLowerCase()) ||
      //         value?.reason
      //           ?.toString()
      //           ?.toLowerCase()
      //           .includes(debounceSearchText?.toString()?.toLowerCase()) ||
      //         value?.trackerName
      //           ?.toString()
      //           ?.toLowerCase()
      //           .includes(debounceSearchText?.toString()?.toLowerCase())
      //       );
      //     }
      //   );

      //   websocketSearchResult &&
      //     insertWebsocketDataToExisitingNotiData(websocketSearchResult);
      // }

      const { events, incidents, alerts } = assetNotificationList;
      const combinedNotifications: any = [];

      events?.eventsList?.forEach((event: any, index: number) => {
        combinedNotifications.push({
          ...event,
          category: "asset",
          title: event?.reason,
          id: event?.assetNotificationId,
          markerId: event?.trackerId,
          description: `${event?.tagType} ${
            event?.tagType === "CATM1_TAG" && event?.gatewayType === null
              ? ` | Cellular`
              : ` | ${event?.gatewayType}`
          } | ${event?.trackerId}`,
        });
      });

      incidents?.incidentList?.forEach((incidents: any, index: number) => {
        combinedNotifications.push({
          ...incidents,
          category: "asset",
          title: incidents?.reason,
          id: incidents?.assetNotificationId,
          markerId: incidents?.trackerId,
          description: `${incidents?.tagType} ${
            incidents?.tagType === "CATM1_TAG" &&
            incidents?.gatewayType === null
              ? ` | Cellular`
              : ` | ${incidents?.gatewayType}`
          } | ${incidents?.trackerId}`,
        });
      });

      alerts?.alertList?.forEach((alerts: any, index: number) => {
        combinedNotifications.push({
          ...alerts,
          category: "asset",
          title: alerts?.reason,
          id: alerts?.assetNotificationId,
          markerId: alerts?.trackerId,
          description: `${alerts?.tagType} ${
            alerts?.tagType === "CATM1_TAG" && alerts?.gatewayType === null
              ? ` | Cellular`
              : ` | ${alerts?.gatewayType}`
          } | ${alerts?.trackerId}`,
        });
      });

      const dataValue: any = combinedNotifications?.map(
        (value: any, index: number) => {
          return { ...value, index: index + 1 };
        }
      );

      combinedNotifications.sort((a: any, b: any) => {
        const dateA: any = new Date(a.notificationDate);
        const dateB: any = new Date(b.notificationDate);

        return dateB - dateA;
      });

      let uniqueTrackerIds: any = {};

      // const uniqueData = combinedNotifications.filter((item: any) => {
      //   if (!uniqueTrackerIds[item.trackerId]) {
      //     uniqueTrackerIds[item.trackerId] = true;
      //     return true;
      //   }
      //   return false;
      // });

      setNotificationArray(combinedNotifications);

      setDashboardData(
        formatttedDashboardNotification(combinedNotifications, tabIndex)
      );
      setSearchValue(
        formatttedDashboardNotification(combinedNotifications, tabIndex)
      );
    }
  }, [
    assetNotificationResponse,
    tabIndex,
    searchOpen,
    // websocketLatestAssetNotification,
  ]);

  useEffect(() => {
    let updatedLiveTrackerDetails = assetLiveData;

    // if (
    //   websocketLatestAssetTrackerLive &&
    //   websocketLatestAssetTrackerLive?.length > 0
    // ) {
    //   updatedLiveTrackerDetails = assetLiveData && assetLiveData?.length > 0 && assetLiveData
    //     ?.map((item: any) => {
    //       // Check if the item should be replaced
    //       let replacement = websocketLatestAssetTrackerLive?.find(
    //         (replaceItem:any) => replaceItem.trackerId === item.trackerId
    //       );
    //       return replacement ? replacement : item;
    //     })
    //     .concat(
    //       websocketLatestAssetTrackerLive?.filter(
    //         (replaceItem:any) =>
    //           !assetLiveData?.some(
    //             (item: any) => item.trackerId === replaceItem.trackerId
    //           )
    //       )
    //     );
    // } else {
    //   updatedLiveTrackerDetails = assetLiveData;
    // }

    const updatedLiveData =
      updatedLiveTrackerDetails &&
      updatedLiveTrackerDetails?.length > 0 &&
      updatedLiveTrackerDetails?.map((asset: any) => {
        return {
          ...asset,
          location: asset?.currentLocation,
          category: "asset",
          title: `TR#${asset?.trackerId}`,
          id: asset?.trackerId,
          recentMarkerType:
            asset?.trackerStatus === "Inactive"
              ? asset?.trackerStatus
              : asset?.notificationType,
          markerId: asset?.trackerId,
          description: `${asset?.tagType} ${
            asset?.tagType === "CATM1_TAG" && asset?.gatewayType === null
              ? ` | Cellular`
              : ` | ${asset?.gatewayType}`
          } | ${asset?.trackerId}`,
        };
      });

    setLiveMarkerList(updatedLiveData);
  }, [assetLiveData, 
    // websocketLatestAssetTrackerLive
  ]);

  const topPanelListItems: any[] = [
    {
      icon:
        selectedTheme === "light"
          ? AssetTrackedLightThemeIcon
          : AssetTrackedIcon,
      value: topPanelList?.assetTrackedCount,
      name: assetsTracking.assetsTracked,
    },
    {
      icon:
        selectedTheme === "light" ? InactiveTrackerIcon : InactiveTrackerIcon,
      value: topPanelList?.inActiveTrackerCount,
      name: "Inactive Tracker",
    },
    {
      icon: selectedTheme === "light" ? LocationLightThemeIcon : LocationIcon,
      value: topPanelList?.locationChangeCount,
      name: gridView.location,
    },
    {
      icon:
        selectedTheme === "light"
          ? OutOfGeofenceLightThemeIcon
          : OutOfGeofenceIcon,
      value: topPanelList?.outOfGeofenceCount,
      name: `${gridView.outOf} ${gridView.geofence}`,
    },
    {
      icon: selectedTheme === "light" ? IncidentLightThemeIcon : IncidentIcon,
      value: topPanelList?.incidientCount,
      name: `${security.security} ${gridView.incidents}`,
    },
  ];

  const [notificationCount, setNotificationCount] = useState<any>([
    assetNotificationList?.events?.totalCount,
    assetNotificationList?.incidents?.totalCount,
    assetNotificationList?.alerts?.totalCount,
  ]);

  const [isInfoWindowActive, setIsInfoWindowActive] = useState<boolean>(false);
  const [isGeofenceInfoWindowActive, setIsGeofenceInfoWindowActive] =
    useState<boolean>(false);

  const [selectedMarker, setSelectedMarker] = useState<any>();

  useEffect(() => {
    if (searchOpen && selectedNotification !== "") {
      setSearchValue(searchValue);
    }
  }, [searchOpen, selectedNotification]);

  useEffect(() => {
    setNotificationCount(
      formatttedDashboardNotificationCount(notificationArray)
    );
  }, [searchValue]);

  useEffect(() => {
    if (window.innerWidth > 3839) {
      setSelectedWidth({
        width: 1250,
        height: 480,
        width1: 1250,
        height1: 480,
        is4kDevice: true,
      });
    } else if (window.innerWidth > 3071) {
      setSelectedWidth({
        width: 1000,
        height: 500,
        width1: 1000,
        height1: 500,
        is4kDevice: false,
        is3KDevice: true,
      });
    } else if (window.innerWidth > 2559) {
      setSelectedWidth({
        width: 820,
        height: 180,
        width1: 820,
        height1: 180,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 2047) {
      setSelectedWidth({
        width: 630,
        height: 220,
        width1: 630,
        height1: 220,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1919) {
      setSelectedWidth({
        width: 620,
        height: 205,
        width1: 620,
        height1: 205,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1791) {
      setSelectedWidth({
        width: 560,
        height: 240,
        width1: 560,
        height1: 240,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1679) {
      setSelectedWidth({
        width: 550,
        height: 210,
        width1: 550,
        height1: 210,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1599) {
      setSelectedWidth({
        width: 500,
        height: 190,
        width1: 500,
        height1: 190,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1535) {
      setSelectedWidth({
        width: 500,
        height: 200,
        width1: 500,
        height1: 200,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1439) {
      setSelectedWidth({
        width: 450,
        height: 190,
        width1: 450,
        height1: 190,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1359) {
      setSelectedWidth({
        width: 400,
        height: 150,
        width1: 400,
        height1: 150,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1343) {
      setSelectedWidth({
        width: 400,
        height: 180,
        width1: 400,
        height1: 180,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1279) {
      setSelectedWidth({
        width: 400,
        height: 100,
        width1: 400,
        height1: 100,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1151) {
      setSelectedWidth({
        width: 350,
        height: 150,
        width1: 350,
        height1: 150,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1023) {
      setSelectedWidth({
        width: 300,
        height: 110,
        width1: 300,
        height1: 110,
        is4kDevice: false,
      });
    }
  }, []);

  const handleAssetViewDetails = (data: any, markerType: any) => {
    setSelectedMakerType(markerType);
    setIsInfoWindowActive(true);
    setSelectedMarker(data);
  };

  const handleAssetInfoWindow = () => {
    setIsGeofenceInfoWindowActive(true);
  };

  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDataLoaded(!isDataLoaded);
    }, 500);
  }, []);

  const loaderAdminGetConfigData = useSelector(
    (state: any) => state?.adminPanel?.loadingGetConfigData
  );

  useEffect(() => {
    if (searchPageNo) {
      setPage(0);
      const assetPayload = {
        filterText: "",
        pageNo: parseInt(0),
        pageSize: parseInt(rowsPerPage),
        notificationType:
          tabIndex === 0 ? "Events" : tabIndex === 1 ? "Incident" : "Alerts",
      };

      dispatch(
        getNotificationData({ payLoad: assetPayload, isFromSearch: true })
      );
    }
  }, [tabIndex]);

  // PAGINATION

  const handleChangePage = (newPage: any) => {
    // setPage((newPage === NaN || newPage === undefined || newPage === "") ? 0 : (parseInt(newPage) - 1) );
  };

  const handleChangeRowsPerPage = (data: any) => {
    setRowsPerPage(data);
    setSearchPageNo("");
    setPage(0);
    let assetPayload: any = {
      filterText: debounceSearchText,
      pageNo: parseInt(page),
      pageSize: parseInt(data),
      notificationType:
        tabIndex === 0 ? "Events" : tabIndex === 1 ? "Incident" : "Alerts",
    };
    dispatch(
      getNotificationData({ payLoad: assetPayload, isFromSearch: true })
    );
  };

  const handleNextChange = () => {
    let assetPayload: any = {};
    if (page >= 0) {
      assetPayload = {
        filterText: debounceSearchText,
        pageNo: parseInt(page) + 1,
        pageSize: parseInt(rowsPerPage),
        notificationType:
          tabIndex === 0 ? "Events" : tabIndex === 1 ? "Incident" : "Alerts",
      };
    }
    dispatch(
      getNotificationData({ payLoad: assetPayload, isFromSearch: true })
    );
    setPage(page + 1);
    setSearchPageNo("");
  };

  const handlePreviousChange = () => {
    let assetPayload: any = {};
    if (page > 0) {
      assetPayload = {
        filterText: debounceSearchText,
        pageNo: parseInt(page) - 1,
        pageSize: parseInt(rowsPerPage),
        notificationType:
          tabIndex === 0 ? "Events" : tabIndex === 1 ? "Incident" : "Alerts",
      };
    }
    dispatch(
      getNotificationData({ payLoad: assetPayload, isFromSearch: true })
    );
    setPage(page - 1);
  };
  const handlePageNoChange = (value: any, keyName: any) => {
    let assetPayload: any = {};
    if (page >= 0 && value !== "" && keyName === "Enter") {
      setSearchPageNo(parseInt(value));
      setPage(parseInt(value) - 1);
      assetPayload = {
        filterText: debounceSearchText,
        pageNo: parseInt(value) - 1,
        pageSize: parseInt(rowsPerPage),
        notificationType:
          tabIndex === 0 ? "Events" : tabIndex === 1 ? "Incident" : "Alerts",
      };
      dispatch(
        getNotificationData({ payLoad: assetPayload, isFromSearch: true })
      );
      // setSearchPageNo("");
    }
  };

  useEffect(() => {
    if (assetNotificationResponse) {
      setTotalRecords(
        formattedOverallNotificationCount(
          assetNotificationResponse?.data,
          assetNotificationResponse?.data,
          "asset"
        )
      );
      let countArray = formattedOverallNotificationCount(
        assetNotificationResponse?.data,
        assetNotificationResponse?.data,
        "asset"
      );
      let newArray: any = [];
      if (countArray && countArray?.length > 0) {
        switch (tabIndex) {
          case 0:
            newArray = countArray[0];
            break;
          case 1:
            newArray = countArray[1];
            break;
          case 2:
            newArray = countArray[2];
            break;
          default:
            break;
        }
      }
      setPaginationTotalCount(newArray);
    }
  }, [assetNotificationResponse, tabIndex]);

  // PAGINATION ENDS

  const [listSelectedMarker, setListSelectedMarker] = useState<any>("");
  const [selectedNotificationItem, setSelectedNotificationItem] =
    useState<any>("");

  const [mapDefaultView, setMapDefaultView] = useState<boolean>(true);

  const onHandleDefaultView = () => {
    setMapDefaultView(true);
    setNotificationPanelActive(false);
    setListSelectedMarker("");
    setAssetLiveMarker("");
    setSearchOpen(false);
    setDebounceSearchText("");
  };

  //Google Map Api Key Data fetching start here
useEffect(()=>{
  let assetLiveDataPayload: any = {};
  dispatch(getGoogleMapApi(assetLiveDataPayload));
},[])

  const googleMapApiKeyData = useSelector(
    (state: any) => state?.googleMapApiKey?.googleMapApiKeyData
  );

 //Google Map Api Key Data fetching end here 

  return (
    <>
      {isDataLoaded && googleMapApiKeyData ? (
        <Grid container className={rootContainer}>
          <Grid container className={mainSection}>
            <Grid item xs={12} alignItems="center" className={pageHeading}>
              {dashboard.assetsTracking}
            </Grid>
            <Grid item xs={12} className={bodyContainer}>
              <Grid
                container
                xs={12}
                className={bodySubContainer}
                style={{ height: "93vh" }}
              >
                <Grid item xs={9} className={bodyLeftContainer}>
                  <Grid container xs={12} className={bodyLeftSubContainer}>
                    <Grid
                      item
                      xs={12}
                      className={bodyLeftTopPanelContainer}
                      style={{ height: "29%" }}
                    >
                      <Grid
                        container
                        xs={12}
                        className={bodyLeftTopPanelSubContainer}
                        style={{ height: "100%" }}
                      >
                        <Grid
                          item
                          xs={12}
                          className={bodyLeftTopPanelListContainer}
                        >
                          <TopPanelListItemContainer
                            topPanelListItems={topPanelListItems}
                            percent={topPanelList?.activeTrackerPercentage}
                            strokeWidth={7}
                            trailWidth={7}
                            strokeColor="#92C07E"
                            trailColor={
                              appTheme?.palette?.fleetManagementPage
                                ?.progressBarBg
                            }
                            title={assetsTracking.activeTrackers}
                            selectedTheme={selectedTheme}
                            selectedValue={selectedValue}
                            handleSelect={handleSelect}
                            pageName={"asset"}
                          />
                        </Grid>
                        <Grid item xs={12} style={{ height: "100%" }}>
                          <Grid container xs={12} style={{ height: "25vh" }}>
                            <Grid item xs={6} className={graphOneContainer}>
                              <Grid
                                container
                                xs={12}
                                style={{
                                  height: "100%",
                                  paddingLeft: "10px",
                                }}
                              >
                                <Grid
                                  item
                                  xs={12}
                                  className={screenFiveGraphTitleStyle}
                                  style={{ minHeight: "3vh" }}
                                >
                                  <div className={graphOneGraphTitleContainer}>
                                    <div
                                      className={graphTitleOneRound}
                                      style={{}}
                                    ></div>
                                    <div>{assetsTracking.activeTracker}</div>
                                  </div>
                                  <div className={graphTitleTwoStyle}>
                                    <div className={graphTitleTwoRound}></div>
                                    <div>{assetsTracking.inactiveTracker}</div>
                                  </div>
                                </Grid>
                                <Grid item xs={12} style={{ height: "90%" }}>
                                  <Grid container xs={12}>
                                    <Grid
                                      item
                                      xs={12}
                                      style={{ height: "21vh", width: "80vw" }}
                                    >
                                      {!loaderAssetTrackingAnalyticsResponse &&
                                      !loaderExtAnalytics ? (
                                        <Chart
                                          containerProps={{
                                            style: {
                                              height: "100%",
                                              width: "100%",
                                            },
                                          }}
                                          pageName={"assetTracking"}
                                          tickInterval={
                                            selectedGraphFormat?.tickInterval
                                          }
                                          xAxisArray={
                                            activeInactiveAnalyticsXaxisData
                                          }
                                          isVisible={true}
                                          graphType={"spline"}
                                          units={""}
                                          isCrosshair={true}
                                          crossHairLineColor={"#E5FAF6"}
                                          is4kDevice={selectedWidth?.is4kDevice}
                                          selectedValue={selectedValue}
                                          dataPoints={[
                                            {
                                              data: activeAnalyticsData,
                                              marker: {
                                                enabled: false,
                                              },
                                              lineColor: "#25796D",
                                              color: "#25796D",
                                              lineWidth:
                                                selectedWidth?.is4kDevice ||
                                                selectedWidth?.is3KDevice
                                                  ? 4
                                                  : 2,
                                            },
                                            {
                                              data: inActiveAnalyticsData,
                                              marker: {
                                                enabled: false,
                                              },
                                              lineColor: "#D25A5A",
                                              color: "#D25A5A",
                                              lineWidth:
                                                selectedWidth?.is4kDevice ||
                                                selectedWidth?.is3KDevice
                                                  ? 4
                                                  : 2,
                                            },
                                          ]}
                                        />
                                      ) : (
                                        <Loader isHundredVh={false} />
                                      )}
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid />
                              </Grid>
                            </Grid>
                            <Grid item xs={6} className={graphTwoContainer}>
                              <Grid
                                container
                                xs={12}
                                className={graphTwoContainerStyle}
                                style={{}}
                              >
                                <Grid
                                  item
                                  xs={12}
                                  style={{
                                    height: "3vh",
                                    display: "flex",
                                    alignItems: "center",
                                    fontSize: "0.8vw",
                                  }}
                                >
                                  {gridView.incidents}
                                </Grid>

                                <Grid item xs={12}>
                                  <Grid
                                    container
                                    xs={12}
                                    style={{ height: "90%" }}
                                  >
                                    <Grid
                                      item
                                      xs={12}
                                      style={{ height: "21vh", width: "80vw" }}
                                    >
                                      {!loaderAssetTrackingAnalyticsResponse &&
                                      !loaderExtAnalytics ? (
                                        <Chart
                                          containerProps={{
                                            style: {
                                              height: "100%",
                                              width: "100%",
                                            },
                                          }}
                                          pageName={"assetTracking"}
                                          tickInterval={
                                            selectedGraphFormat?.tickInterval
                                          }
                                          xAxisArray={
                                            incidentsAnalyticsDataXaxisData
                                          }
                                          graphType={"areaspline"}
                                          isVisible={true}
                                          units={""}
                                          isCrosshair={true}
                                          crossHairLineColor={"#EE3E35"}
                                          is4kDevice={selectedWidth?.is4kDevice}
                                          selectedValue={selectedValue}
                                          dataPoints={[
                                            {
                                              data: incidentsAnalyticsData,

                                              marker: {
                                                enabled: false,
                                              },
                                              lineColor: "#EE3E35",
                                              color: "#EE3E35",
                                              lineWidth:
                                                selectedWidth?.is4kDevice ||
                                                selectedWidth?.is3KDevice
                                                  ? 4
                                                  : 2,
                                              fillColor: {
                                                linearGradient: [0, 0, 0, 200],
                                                stops: [
                                                  [
                                                    0,
                                                    Highcharts.color("#C3362F")
                                                      .setOpacity(0.5)
                                                      .get("rgba"),
                                                  ],
                                                  [
                                                    0.5,
                                                    Highcharts.color("#C3362F")
                                                      .setOpacity(
                                                        selectedWidth?.is4kDevice ||
                                                          selectedWidth?.is3KDevice
                                                          ? selectedTheme ===
                                                            "light"
                                                            ? 0.4
                                                            : 0.3
                                                          : 0.3
                                                      )
                                                      .get("rgba"),
                                                  ],
                                                  [
                                                    1,
                                                    Highcharts.color("#C3362F")
                                                      .setOpacity(
                                                        selectedWidth?.is4kDevice ||
                                                          selectedWidth?.is3KDevice
                                                          ? selectedTheme ===
                                                            "light"
                                                            ? 0.14
                                                            : 0.06
                                                          : selectedTheme ===
                                                            "light"
                                                          ? 0.01
                                                          : 0.02
                                                      )
                                                      .get("rgba"),
                                                  ],
                                                ],
                                              },
                                            },
                                          ]}
                                        />
                                      ) : (
                                        <Loader isHundredVh={false} />
                                      )}
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      className={bodyLeftTopPanelMapContainer}
                      style={{ height: "57.5%" }}
                    >
                      <img
                        src={GeofenceIcon}
                        className={geofenceIconStyle}
                        alt="GeofenceIcon"
                        onClick={handleAssetInfoWindow}
                      />
                      <img
                        src={GlobeIconActive}
                        alt="GlobeIcon Icon"
                        onClick={onHandleDefaultView}
                        className={globeIconSection}
                      />
                      <AssetMap
                        googleMapsApiKeyResponse={googleMapApiKeyData}
                        mapType={mapType}
                        setMapType={setMapType}
                        markers={mapMarkerArrayList}
                        setNotificationPanelActive={setNotificationPanelActive}
                        setSelectedNotification={setSelectedNotification}
                        marker={selectedNotification}
                        setTabIndex={setTabIndex}
                        currentMarker={currentMarker}
                        setCurrentMarker={setCurrentMarker}
                        setIsMarkerClicked={setIsMarkerClicked}
                        isMarkerClicked={isMarkerClicked}
                        handleAssetViewDetails={handleAssetViewDetails}
                        mapPageName={"asset"}
                        selectedTheme={selectedTheme}
                        setMap={setMap}
                        map={map}
                        assetLiveData={assetLiveData}
                        assetLiveMarker={assetLiveMarker}
                        setAssetLiveMarker={setAssetLiveMarker}
                        liveMarkerList={liveMarkerList}
                        listSelectedMarker={listSelectedMarker}
                        setListSelectedMarker={setListSelectedMarker}
                        selectedNotificationItem={selectedNotificationItem}
                        setSelectedNotificationItem={
                          setSelectedNotificationItem
                        }
                        selectedNotification={selectedNotification}
                        mapDefaultView={mapDefaultView}
                        setMapDefaultView={setMapDefaultView}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3} className={notificationPanelGrid}>
                  <NotificationPanel
                    setNotificationPanelActive={setNotificationPanelActive}
                    dashboardData={dashboardData}
                    tabIndex={tabIndex}
                    setTabIndex={setTabIndex}
                    notificationCount={totalRecords}
                    selectedNotification={selectedNotification}
                    setSelectedNotification={setSelectedNotification}
                    searchOpen={searchOpen}
                    setSearchOpen={setSearchOpen}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    setCurrentMarker={setCurrentMarker}
                    handleAssetViewDetails={handleAssetViewDetails}
                    isMarkerClicked={isMarkerClicked}
                    setIsMarkerClicked={setIsMarkerClicked}
                    selectedTheme={selectedTheme}
                    handleExpandListItem={() => {}}
                    setAssetLiveMarker={setAssetLiveMarker}
                    listSelectedMarker={listSelectedMarker}
                    setListSelectedMarker={setListSelectedMarker}
                    selectedNotificationItem={selectedNotificationItem}
                    setSelectedNotificationItem={setSelectedNotificationItem}
                    notificationPageName={"asset"}
                    setDebounceSearchText={setDebounceSearchText}
                    loaderAssetNotificationResponse={
                      loaderAssetNotificationResponse
                    }
                    page={page}
                    rowsPerPage={rowsPerPage}
                    assetLiveMarker={assetLiveMarker}
                    mapDefaultView={mapDefaultView}
                    setMapDefaultView={setMapDefaultView}
                    setPage={setPage}
                  />
                  {!loaderAssetNotificationResponse && (
                    <div style={{ margin: "-5px 20px 0 20px" }}>
                      <CustomTablePagination
                        rowsPerPageOptions={[50, 100, 200, 500]}
                        count={
                          paginationTotalCount === 0 ? 1 : paginationTotalCount
                        }
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        handleNextChange={handleNextChange}
                        handlePreviousChange={handlePreviousChange}
                        onPageNoChange={handlePageNoChange}
                        value={searchPageNo}
                        pageNumclassName={pageNumSection}
                        reportsPaginationclassName={customPagination}
                      />
                    </div>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Loader isHundredVh={true} />
      )}
      {isInfoWindowActive && (
        <InfoDialogAssetTracking
          setIsInfoWindowActive={setIsInfoWindowActive}
          selectedMarker={selectedMarker}
          selectedTheme={selectedTheme}
          selectedMarkerType={selectedMarkerType}
          mapType={mapType}
          setMapType={setMapType}
        />
      )}
      {isGeofenceInfoWindowActive && (
        <InfoDialogGeofenceAssetTracking
          setIsGeofenceInfoWindowActive={setIsGeofenceInfoWindowActive}
          selectedTheme={selectedTheme}
          mapType={mapType}
          setMapType={setMapType}
        />
      )}
    </>
  );
};

export default AssetTracking;
