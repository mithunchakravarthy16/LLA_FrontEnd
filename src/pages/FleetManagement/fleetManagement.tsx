/** @format */

import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Alert, Snackbar, Typography, Link } from "@mui/material";
import {
  TotalDistanceIcon,
  IdleHoursIcon,
  OverSpeedingIcon,
  HarshAccelerationIcon,
  HarshBreakingIcon,
  LightTotalDistanceIcon,
  LightIdleHoursIcon,
  LightOverSpeedingIcon,
  LightHarshAccelerationIcon,
  LightHarshBreakingIcon,
} from "../../assets/topPanelListIcons";
import llaLoader from "../../assets/loader/llaLoader.gif";
import useTranslation from "localization/translations";
import Highcharts from "highcharts";
import TopPanelListItemContainer from "components/TopPanelListItemContainer";
import FleetMap from "components/Map/fleetMap";
import FleetNotificationPanel from "components/FleetNotificationPanel";
import {
  formatttedDashboardNotification,
  formattedFleetTripsNotification,
  formattedMapFleetTripsNotification,
} from "../../utils/utils";
import { LiveImg } from "assets/gridViewIcons";
import Chart from "elements/Chart";
import theme from "../../theme/theme";
import {
  getFleetManagementNotificationData,
  getFleetManagementOverAllTripDetails,
  getFleetManagementAnalyticsData,
  setFleetManagementNotificationData,
  setFleetManagementOverAllTripDetails,
  setFleetManagementAnalyticsData,
  getFleetManagementTripDetails,
  setFleetManagementTripDetails,
  getFleetManagementLiveTrip,
  setFleetManagementLiveTrip,
  getFleetManagementCompletedTrips,
} from "redux/actions/fleetManagementNotificationActions";
import useStyles from "./styles";
import InfoDialogFleetManagement from "components/InfoDialogFleetManagement";
import InfoDialogFleetVideo from "components/InfoDialogFleetVideo";
import { getUserLogout, setUserLogin } from "redux/actions/loginActions";
import moment from "moment";
import { fetchGoogleMapApi } from "data/googleMapApiFetch";
import GlobeIconActive from "../../assets/globeCircleIcon.svg";
import FleetNotificationPanelNew from "components/FleetNotificationPanelNew";
import CustomTablePagination from "elements/CustomPagination";

const FleetManagement: React.FC<any> = (props) => {
  const { mapType, setMapType } = props;

  const navigate = useNavigate();
  const adminPanelData = useSelector(
    (state: any) => state?.adminPanel?.getConfigData?.data?.body
  );

  const { dashboard, gridView, fleetManagement } = useTranslation();
  const [selectedTheme, setSelectedTheme] = useState<any>();
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [selectedValue, setSelectedValue] = useState<any>("Today");

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

    liveContainer,
    liveImgStyle,
    liveContentValue,
    liveContentValueGreen,
    liveContentLabel,
    liveContentLabelGreen,
    liveContentStyle,
    liveContentLeftStyle,
    aqiCircleStyle,
    graphTwoHeader,
    electricity,
    screenFiveGraphTitleStyle,
    graphContainerHeaderOne,
    graphContainerHeaderTwo,
    graphContainerHeaderThree,
    driveDot,
    driveDotOne,
    graphTitle,
    globeIconSection,
    pageNumSection,
    customPagination,
  } = useStyles(appTheme);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fleetPayload = {
  //     filterText: "",
  //     pageNo: 0,
  //     pageSize: parseInt(rowsPerPage),
  //     filterType:
  //       tabIndex === 0 ? "Events" : tabIndex === 1 ? "Incident" : "Alerts",
  //   };
  //   dispatch(getFleetManagementNotificationData({ payLoad: fleetPayload }));
  // }, []);

  const [selectedGraphFormat, setSelectedGraphFormat] = useState<any>({
    format: "hh:mm A",
    tickInterval1: 8,
    tickInterval2: 12,
  });
  useEffect(() => {
    // dispatch(
    //   getFleetManagementOverAllTripDetails({
    //     type:
    //       selectedValue === "Today"
    //         ? "Day"
    //         : selectedValue === "Week"
    //         ? "Weekly"
    //         : selectedValue === "Month"
    //         ? "Monthly"
    //         : "Yearly",
    //   })
    // );
    // dispatch(
    //   getFleetManagementAnalyticsData({
    //     type:
    //       selectedValue === "Today"
    //         ? "Day"
    //         : selectedValue === "Week"
    //         ? "Weekly"
    //         : selectedValue === "Month"
    //         ? "Monthly"
    //         : "Yearly",
    //   })
    // );

    switch (selectedValue) {
      case "Today":
        dispatch(getFleetManagementOverAllTripDetails({ type: "Day" }));
        dispatch(getFleetManagementAnalyticsData({ type: "Day" }));
        setSelectedGraphFormat({
          format: "hh:mm A",
          tickInterval1: 8,
          tickInterval2: 12,
        });
        break;

      case "Week":
        dispatch(getFleetManagementOverAllTripDetails({ type: "Weekly" }));
        dispatch(getFleetManagementAnalyticsData({ type: "Weekly" }));
        setSelectedGraphFormat({
          format: "MM/DD",
          tickInterval1: 1,
          tickInterval2: 2,
        });
        break;

      case "Month":
        dispatch(getFleetManagementOverAllTripDetails({ type: "Monthly" }));
        dispatch(getFleetManagementAnalyticsData({ type: "Monthly" }));
        setSelectedGraphFormat({
          format: "MM/DD",
          tickInterval1: 6,
          tickInterval2: 10,
        });
        break;

      case "Year":
        dispatch(getFleetManagementOverAllTripDetails({ type: "Yearly" }));
        dispatch(getFleetManagementAnalyticsData({ type: "Yearly" }));
        setSelectedGraphFormat({
          format: "MMM/YY",
          tickInterval1: 2,
          tickInterval2: 6,
        });
        break;
      default:
        dispatch(getFleetManagementOverAllTripDetails({ type: "Day" }));
        dispatch(getFleetManagementAnalyticsData({ type: "Day" }));
        setSelectedGraphFormat({
          format: "hh:mm A",
          tickInterval1: 6,
          tickInterval2: 8,
        });
    }
  }, [selectedValue]);

  const fleetManagementCompletedTripsResponse = useSelector(
    (state: any) =>
      state.fleetManagementNotification.fleetManagementCompletedTripsData
  );

  const fleetManagementNotificationResponse = useSelector(
    (state: any) =>
      state.fleetManagementNotification.fleetManagementNotificationData
  );

  const fleetManagementTripDetailsResponse = useSelector(
    (state: any) =>
      state.fleetManagementNotification.fleetManagementOverAllTripDetailsData
  );

  const fleetManagementAnalyticsResponse = useSelector(
    (state: any) =>
      state.fleetManagementNotification.fleetManagementAnalyticsData
  );

  const notificationsLoader = useSelector(
    (state: any) => state.fleetManagementNotification?.loadingNotificationData
  );

  const overAllAnalyticsLoader = useSelector(
    (state: any) => state.fleetManagementNotification?.loadingOverAllAnalytics
  );

  const analyticsLoader = useSelector(
    (state: any) => state.fleetManagementNotification?.loadingAnalytics
  );

  const fleetManagementTripDetailsData = useSelector(
    (state: any) =>
      state.fleetManagementNotification.fleetManagementTripDetailsData
  );

  const fleetManagementLiveTripDetailsData = useSelector(
    (state: any) => state.fleetManagementNotification.fleetManagementLiveTrip
  );

  const loader = useSelector(
    (state: any) => state.fleetManagementNotification?.loadingTripDetails
  );

  const loadingFleetManagementCompletedTripsData = useSelector(
    (state: any) =>
      state?.fleetManagementNotification
        ?.loadingFleetManagementCompletedTripsData
  );

  const [notificationArray, setNotificationArray] = useState<any>([]);
  const [map, setMap] = useState<any>(null);
  const [tripsData, setTripsData] = useState<any>();
  const [tripsDataXaxis, setTripsDataXaxis] = useState<any>();
  const [distanceData, setDistanceData] = useState<any>();
  const [distanceDataXaxis, setDistanceDataXaxis] = useState<any>();
  const [idleData, setIdleData] = useState<any>();
  const [idleHoursXaxisData, setIdleHoursXaxisData] = useState<any>();
  const [hoursData, setHoursData] = useState<any>();
  const [overallHours, setOverallHours] = useState<any>();
  const [success, setSuccess] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [dataP, setDataP] = useState<any>();

  useEffect(() => {
    if (fleetManagementAnalyticsResponse) {
      const data: any = [];
      const tripsDataXaxis: any = [];
      const distanceTravelledData: any = [];
      const distanceTravelledDataXaxis: any = [];
      const idlData: any = [];
      const idlDataXaxis: any = [];
      const hourData: any = [];
      const hourDataXaxi: any = [];
      fleetManagementAnalyticsResponse?.data?.trips?.map((item: any) => {
        // data?.push([new Date(item?.node)?.getTime(), item?.count]);
        data?.push(item?.count);
        tripsDataXaxis?.push(
          moment(item?.node).format(selectedGraphFormat?.format)
        );
      });
      fleetManagementAnalyticsResponse?.data?.distanceTravelled?.map(
        (item: any) => {
          // distanceTravelledData?.push([
          //   new Date(item?.node)?.getTime(),
          //   item?.count,
          // ]);
          distanceTravelledData?.push(item?.count);
          distanceTravelledDataXaxis?.push(
            moment(item?.node).format(selectedGraphFormat?.format)
          );
        }
      );
      fleetManagementAnalyticsResponse?.data?.drivingHours?.map((item: any) => {
        const totalMinutes = item?.count / 60;
        const hours = totalMinutes / 60;
        // hourData?.push([new Date(item?.node)?.getTime(), hours]);
        hourData?.push(hours);
        hourDataXaxi?.push(
          moment(item?.node).format(selectedGraphFormat?.format)
        );
      });
      fleetManagementAnalyticsResponse?.data?.idleHours?.map((item: any) => {
        const totalMinutes = item?.count / 60;
        const hours = totalMinutes / 60;
        // idlData?.push([new Date(item?.node)?.getTime(), hours]);
        idlData?.push(hours);
        idlDataXaxis?.push(
          moment(item?.node).format(selectedGraphFormat?.format)
        );
      });

      if (fleetManagementTripDetailsResponse?.data?.idleHours) {
        const totalMinutes = Math.floor(
          fleetManagementTripDetailsResponse?.data?.idleHours / 60
        );
        const hours = Math.floor(totalMinutes / 60);
        let duration: string = "";
        if (fleetManagementTripDetailsResponse?.data?.idleHours > 3600) {
          duration = `${hours}Hrs`;
        } else if (
          fleetManagementTripDetailsResponse?.data?.idleHours > 60 &&
          fleetManagementTripDetailsResponse?.data?.idleHours < 3600
        ) {
          duration = `${totalMinutes}Mins`;
        } else if (fleetManagementTripDetailsResponse?.data?.idleHours < 59) {
          duration = `${fleetManagementTripDetailsResponse?.data?.idleHours}Secs`;
        }
        setOverallHours(duration);
      }

      setTripsData(data);
      setTripsDataXaxis(tripsDataXaxis);
      setDistanceData(distanceTravelledData);
      setDistanceDataXaxis(distanceTravelledDataXaxis);
      setIdleData(idlData);
      setHoursData(hourData);
      setIdleHoursXaxisData(idlDataXaxis);
    }
  }, [fleetManagementAnalyticsResponse, selectedGraphFormat]);

  useEffect(() => {
    if (
      fleetManagementNotificationResponse?.status === 502 ||
      fleetManagementTripDetailsResponse?.status === 502 ||
      fleetManagementAnalyticsResponse?.status === 502 ||
      fleetManagementTripDetailsData?.status === 502 ||
      fleetManagementLiveTripDetailsData?.status === 502 ||
      fleetManagementNotificationResponse?.status === 500 ||
      fleetManagementTripDetailsResponse?.status === 500 ||
      fleetManagementAnalyticsResponse?.status === 500 ||
      fleetManagementTripDetailsData?.status === 500 ||
      fleetManagementLiveTripDetailsData?.status === 500 ||
      fleetManagementNotificationResponse?.status === 404 ||
      fleetManagementTripDetailsResponse?.status === 404 ||
      fleetManagementAnalyticsResponse?.status === 404 ||
      fleetManagementTripDetailsData?.status === 404 ||
      fleetManagementLiveTripDetailsData?.status === 404 ||
      fleetManagementNotificationResponse?.status === 400 ||
      fleetManagementTripDetailsResponse?.status === 400 ||
      fleetManagementAnalyticsResponse?.status === 400 ||
      fleetManagementTripDetailsData?.status === 400 ||
      fleetManagementLiveTripDetailsData?.status === 400 ||
      fleetManagementNotificationResponse?.status === 409 ||
      fleetManagementTripDetailsResponse?.status === 409 ||
      fleetManagementAnalyticsResponse?.status === 409 ||
      fleetManagementTripDetailsData?.status === 409 ||
      fleetManagementLiveTripDetailsData?.status === 409 ||
      fleetManagementNotificationResponse?.status === 413 ||
      fleetManagementTripDetailsResponse?.status === 413 ||
      fleetManagementAnalyticsResponse?.status === 413 ||
      fleetManagementTripDetailsData?.status === 413 ||
      fleetManagementLiveTripDetailsData?.status === 413 ||
      fleetManagementNotificationResponse?.status === 410 ||
      fleetManagementTripDetailsResponse?.status === 410 ||
      fleetManagementAnalyticsResponse?.status === 410 ||
      fleetManagementTripDetailsData?.status === 410 ||
      fleetManagementLiveTripDetailsData?.status === 410
    ) {
      setSuccess(true);
    } else if (fleetManagementNotificationResponse?.status === 200) {
      const { events, incidents, alerts } =
        fleetManagementNotificationResponse?.data;
      const combinedNotifications: any = [];

      events?.eventsList?.forEach((event: any, index: number) => {
        combinedNotifications.push({
          ...event,
          category: "fleet",
          title: event?.reason,
          id: event?.notificationId,
        });
      });

      incidents?.incidentList?.forEach((incidents: any, index: number) => {
        combinedNotifications.push({
          ...incidents,
          category: "fleet",
          title: incidents?.reason,
          id: incidents?.notificationId,
        });
      });

      alerts?.alertList?.forEach((alerts: any, index: number) => {
        combinedNotifications.push({
          ...alerts,
          category: "fleet",
          title: alerts?.reason,
          id: alerts?.notificationId,
        });
      });

      const dataValue: any = combinedNotifications?.map(
        (value: any, index: number) => {
          return { ...value, index: index + 1 };
        }
      );
      setNotificationArray(dataValue);
    }
  }, [fleetManagementNotificationResponse, fleetManagementTripDetailsData]);

  const topPanelListItems: any[] = [
    {
      icon:
        selectedTheme === "light" ? LightTotalDistanceIcon : TotalDistanceIcon,
      value: fleetManagementTripDetailsResponse?.data?.distanceCovered
        ? `${fleetManagementTripDetailsResponse?.data?.distanceCovered?.toFixed(
            2
          )}Km`
        : "--",
      name: `${gridView.total} ${gridView.distance}`,
    },
    {
      icon: selectedTheme === "light" ? LightIdleHoursIcon : IdleHoursIcon,
      value: `${
        fleetManagementTripDetailsResponse?.data?.idleHours
          ? overallHours
          : "--"
      }`,
      name: `${fleetManagement.idleHrs}`,
    },
    {
      icon:
        selectedTheme === "light" ? LightOverSpeedingIcon : OverSpeedingIcon,
      value: fleetManagementTripDetailsResponse?.data?.overSpeed
        ? fleetManagementTripDetailsResponse?.data?.overSpeed
        : "--",
      name: gridView.overspeeding,
    },
    {
      icon:
        selectedTheme === "light"
          ? LightHarshAccelerationIcon
          : HarshAccelerationIcon,
      value: fleetManagementTripDetailsResponse?.data?.harshAcceleration
        ? fleetManagementTripDetailsResponse?.data?.harshAcceleration
        : "--",
      name: fleetManagement.harshAcceleration,
    },
    {
      icon:
        selectedTheme === "light" ? LightHarshBreakingIcon : HarshBreakingIcon,
      value: fleetManagementTripDetailsResponse?.data?.harshBreaking
        ? fleetManagementTripDetailsResponse?.data?.harshBreaking
        : "--",
      name: gridView.harshBreaking,
    },
  ];

  // Notification Data

  const [tabIndex, setTabIndex] = useState<any>(1);
  const [selectedNotification, setSelectedNotification] = useState<any>("");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [notificationPanelActive, setNotificationPanelActive] =
    useState<boolean>(false);
  const [currentMarker, setCurrentMarker] = useState<any>("");
  const [isMarkerClicked, setIsMarkerClicked] = useState<boolean>(false);
  const [searchNotificationsValue, setSearchNoticationsValue] = useState<any>(
    formatttedDashboardNotification(notificationArray, tabIndex)
  );

  const [dashboardData, setDashboardData] = useState<any>(
    formatttedDashboardNotification(notificationArray, tabIndex)
  );

  const [notificationCount, setNotificationCount] = useState<any>([
    fleetManagementNotificationResponse?.data?.events?.eventsList?.length,
    fleetManagementNotificationResponse?.data?.incidents?.incidentList?.length,
    fleetManagementNotificationResponse?.data?.alerts?.alertList?.length,
  ]);

  const [selectedWidth, setSelectedWidth] = useState<any>();

  const [selectedMarker, setSelectedMarker] = useState<any>();
  const [selectedMarkerLocation, setSelectedMarkerLocation] = useState<any>();

  const [tripId, setTripId] = useState<any>();
  const [tripName, setTripName] = useState<any>();

  useEffect(() => {
    setDashboardData(
      formatttedDashboardNotification(notificationArray, tabIndex)
    );
    setSearchNoticationsValue(
      formatttedDashboardNotification(notificationArray, tabIndex)
    );
  }, [notificationArray, tabIndex]);

  useEffect(() => {
    const dat = dashboardData?.sort(
      (a: any, b: any) => Date.parse(b) - Date.parse(a)
    );
    setDataP(dat);
  }, [dashboardData]);

  useEffect(() => {
    if (window.innerWidth > 3839) {
      setSelectedWidth({
        width: 1200,
        height: 480,
        width1: 650,
        height1: 500,
        is4kDevice: true,
      });
    } else if (window.innerWidth > 3071) {
      setSelectedWidth({
        width: 800,
        height: 500,
        width1: 480,
        height1: 500,
        is4kDevice: false,
        is3KDevice: true,
        is2kDevice: true,
      });
    } else if (window.innerWidth > 2559) {
      setSelectedWidth({
        width: 690,
        height: 230,
        width1: 400,
        height1: 230,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 2047) {
      setSelectedWidth({
        width: 560,
        height: 255,
        width1: 300,
        height1: 255,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1919) {
      setSelectedWidth({
        width: 530,
        height: 230,
        width1: 350,
        height1: 230,
        is4kDevice: false,
        is2kDevice: true,
      });
    } else if (window.innerWidth > 1791) {
      setSelectedWidth({
        width: 500,
        height: 240,
        width1: 250,
        height1: 240,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1599) {
      setSelectedWidth({
        width: 500,
        height: 210,
        width1: 250,
        height1: 210,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1535) {
      setSelectedWidth({
        width: 500,
        height: 230,
        width1: 250,
        height1: 230,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1439) {
      setSelectedWidth({
        width: 450,
        height: 210,
        width1: 225,
        height1: 210,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1359) {
      setSelectedWidth({
        width: 370,
        height: 180,
        width1: 200,
        height1: 180,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1343) {
      setSelectedWidth({
        width: 400,
        height: 190,
        width1: 200,
        height1: 190,
        is4kDevice: false,
      });
    } else if (window.innerHeight > 767) {
      setSelectedWidth({
        width: 300,
        height: 160,
        width1: 150,
        height1: 160,
        is4kDevice: false,
      });
    } else if (window.innerHeight > 599) {
      setSelectedWidth({
        width: 350,
        height: 120,
        width1: 200,
        height1: 120,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1279) {
      setSelectedWidth({
        width: 400,
        height: 190,
        width1: 200,
        height1: 190,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1151) {
      setSelectedWidth({
        width: 350,
        height: 150,
        width1: 175,
        height1: 150,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1023) {
      setSelectedWidth({
        width: 300,
        height: 130,
        width1: 150,
        height1: 130,
        is4kDevice: false,
      });
      // else if (window.innerHeight > 1279) {
      //   setSelectedWidth({
      //     width: 600,
      //     height: 260,
      //     width1: 300,
      //     height1: 260,
      //     is4kDevice: false,
      //   });
      // }
      //  else if (window.innerHeight > 1049) {
      //   setSelectedWidth({
      //     width: 550,
      //     height: 220,
      //     width1: 290,
      //     height1: 220,
      //     is4kDevice: false,
      //   });
      // } else if (window.innerHeight > 959) {
      //   setSelectedWidth({
      //     width: 350,
      //     height: 220,
      //     width1: 200,
      //     height1: 220,
      //     is4kDevice: false,
      //   });
      // } else if (window.innerHeight > 936) {
      //   setSelectedWidth({
      //     width: 500,
      //     height: 180,
      //     width1: 250,
      //     height1: 180,
      //     is4kDevice: false,
      //   });
      // } else if (window.innerHeight > 767) {
      //   setSelectedWidth({
      //     width: 300,
      //     height: 160,
      //     width1: 150,
      //     height1: 160,
      //     is4kDevice: false,
      //   });
      // } else if (window.innerHeight > 599) {
      //   setSelectedWidth({
      //     width: 350,
      //     height: 120,
      //     width1: 200,
      //     height1: 120,
      //     is4kDevice: false,
      //   });
    }
  }, []);

  useEffect(() => {
    if (count > 3) {
      localStorage.removeItem("user");
      localStorage.clear();
      dispatch(getUserLogout());
      dispatch(setUserLogin({}));
      navigate("/login");
    }
  }, [count]);

  useEffect(() => {
    setSuccess(false);
    (fleetManagementNotificationResponse?.status === 502 ||
      fleetManagementNotificationResponse?.status === 500 ||
      fleetManagementNotificationResponse?.status === 404 ||
      fleetManagementNotificationResponse?.status === 400 ||
      fleetManagementNotificationResponse?.status === 409 ||
      fleetManagementNotificationResponse?.status === 413 ||
      fleetManagementNotificationResponse?.status === 410) &&
      dispatch(setFleetManagementNotificationData({}));
    (fleetManagementTripDetailsResponse?.status === 500 ||
      fleetManagementTripDetailsResponse?.status === 502 ||
      fleetManagementTripDetailsResponse?.status === 404 ||
      fleetManagementTripDetailsResponse?.status === 400 ||
      fleetManagementTripDetailsResponse?.status === 409 ||
      fleetManagementTripDetailsResponse?.status === 413 ||
      fleetManagementTripDetailsResponse?.status === 410) &&
      dispatch(setFleetManagementOverAllTripDetails({}));
    (fleetManagementAnalyticsResponse?.status === 500 ||
      fleetManagementAnalyticsResponse?.status === 502 ||
      fleetManagementAnalyticsResponse?.status === 404 ||
      fleetManagementAnalyticsResponse?.status === 400 ||
      fleetManagementAnalyticsResponse?.status === 409 ||
      fleetManagementAnalyticsResponse?.status === 413 ||
      fleetManagementAnalyticsResponse?.status === 410) &&
      dispatch(setFleetManagementAnalyticsData({}));
    (fleetManagementTripDetailsData?.status === 502 ||
      fleetManagementTripDetailsData?.status === 500 ||
      fleetManagementTripDetailsData?.status === 404 ||
      fleetManagementTripDetailsData?.status === 400 ||
      fleetManagementTripDetailsData?.status === 409 ||
      fleetManagementTripDetailsData?.status === 413 ||
      fleetManagementTripDetailsData?.status === 410) &&
      dispatch(setFleetManagementTripDetails({}));
    (fleetManagementLiveTripDetailsData?.status === 502 ||
      fleetManagementLiveTripDetailsData?.status === 500 ||
      fleetManagementLiveTripDetailsData?.status === 404 ||
      fleetManagementLiveTripDetailsData?.status === 400 ||
      fleetManagementLiveTripDetailsData?.status === 409 ||
      fleetManagementLiveTripDetailsData?.status === 413 ||
      fleetManagementLiveTripDetailsData?.status === 410) &&
      dispatch(setFleetManagementLiveTrip({}));
  }, []);

  const [showInfoDialogue, setShowInfoDialogue] = useState<boolean>(false);
  const [showInfoDialogueVideo, setShowInfoDialogueVideo] =
    useState<boolean>(false);

  const handleViewDetails = (data: any) => {
    setSelectedMarker(data?.tripId);
    setSelectedMarkerLocation(data);
    setShowInfoDialogue(true);
  };

  const handleVideoDetails = (event: any, data: any) => {
    event.stopPropagation();
    setShowInfoDialogueVideo(true);
    setSelectedMarker(data);
  };

  const handleSelect = (val: any) => {
    setSelectedValue(val);
  };

  const handleClose = () => {
    setSuccess(false);
  };

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setSuccess(false);
    dispatch(getFleetManagementNotificationData({}));
    dispatch(
      getFleetManagementOverAllTripDetails({
        type:
          selectedValue === "Today"
            ? "Day"
            : selectedValue === "Week"
            ? "Weekly"
            : selectedValue === "Month"
            ? "Monthly"
            : "Yearly",
      })
    );
    dispatch(
      getFleetManagementAnalyticsData({
        type:
          selectedValue === "Today"
            ? "Day"
            : selectedValue === "Week"
            ? "Weekly"
            : selectedValue === "Month"
            ? "Monthly"
            : "Yearly",
      })
    );
  };

  const handleExpandListItem = (id: any) => {
    const obj = dashboardData?.find((item: any) => item.id === id);
    if (id) {
      if (obj?.tripStatus === "Live" && obj?.reason && obj?.tripId) {
        dispatch(getFleetManagementTripDetails({ tripId: obj?.tripId }));
        setTripId(obj?.tripId);
      } else {
        setTripId(null);
      }
    } else {
      dispatch(setFleetManagementLiveTrip({}));
      dispatch(setFleetManagementTripDetails({}));
      setTripId(null);
    }
  };

  const handleMarkerIconClick = (id: any) => {
    if (tabMainIndex === 1) {
      const obj = notificationArray?.find((item: any) => item.tripId === id);
      if (obj?.tripStatus === "Live" && obj?.reason && obj?.tripId) {
        dispatch(getFleetManagementTripDetails({ tripId: obj?.tripId }));
        setTripId(obj?.tripId);
        setTripName(null);
      } else if (
        obj?.tripStatus === "Live" &&
        obj?.reason &&
        obj?.tripId &&
        obj?.tripName === "Dummy_TR#109041"
      ) {
        dispatch(getFleetManagementLiveTrip({ tripId: obj?.tripId }));
        setTripId(obj?.tripId);
        setTripName(obj?.tripName);
      }
    } else if (tabMainIndex === 0) {
      const obj = dashboardTripsData?.find((item: any) => item.tripId === id);
      if (obj?.tripStatus === "Live") {
        dispatch(getFleetManagementTripDetails({ tripId: obj?.tripId }));
        setTripId(obj?.tripId);
      } else if (obj?.tripStatus === "Finish") {
        dispatch(getFleetManagementTripDetails({ tripId: obj?.tripId }));
      }
    } else {
      setTripId(null);
      setTripName(null);
    }
  };

  useEffect(() => {
    if (tripId) {
      const timer = setInterval(() => {
        dispatch(getFleetManagementTripDetails({ tripId: tripId }));
      }, 10000);
      return () => {
        clearInterval(timer);
      };
    } else if (tripId && tripName === "Dummy_TR#109041") {
      const liveTimer = setInterval(() => {
        dispatch(getFleetManagementLiveTrip({ tripId: tripId }));
      }, 10000);
      return () => {
        clearInterval(liveTimer);
      };
    } else {
      dispatch(setFleetManagementTripDetails({}));
      dispatch(setFleetManagementLiveTrip({}));
    }
  }, [tripId, tripName]);

  const handleMarkerCancel = () => {
    dispatch(setFleetManagementTripDetails({}));
    dispatch(setFleetManagementLiveTrip({}));
    setTripId(null);
    setTripName(null);
  };

  const [mapDefaultView, setMapDefaultView] = useState<boolean>(true);

  const onHandleDefaultView = () => {
    setMapDefaultView(true);
    setSearchOpen(false);
  };

  const [googleMapsApiKeyResponse, setGoogleMapsApiKeyResponse] =
    useState<string>("");

  useEffect(() => {
    fetchGoogleMapApi((mapApiResponse: string) => {
      setGoogleMapsApiKeyResponse(mapApiResponse);
    });
  }, []);

  //  Fleet trips
  const [tabMainIndex, setTabMainIndex] = useState<any>(0);
  const [tripsTabIndex, setTripsTabIndex] = useState<any>(0);
  const [dashboardTripsData, setDashboardTripsData] = useState<any>();
  const [tripsNotificationCount, setTripsNotificationCount] = useState<any>();
  const [dashboardMapTripsData, setDashboardMapTripsData] = useState<any>();
  const [tripsSearchValue, setTripsSearchValue] = useState<any>();
  const [page, setPage] = useState<any>(0);
  const [rowsPerPage, setRowsPerPage] = useState<any>(50);
  const [searchPageNo, setSearchPageNo] = useState<any>();
  const [debounceSearchText, setDebounceSearchText] = useState<any>("");

  useEffect(() => {
    setDashboardTripsData(
      formattedFleetTripsNotification(
        fleetManagementCompletedTripsResponse?.data,
        tripsTabIndex
      )
    );
    setDashboardMapTripsData(
      formattedMapFleetTripsNotification(
        fleetManagementCompletedTripsResponse?.data,
        tripsTabIndex
      )
    );
    setTripsNotificationCount([
      fleetManagementCompletedTripsResponse?.data?.liveTrips?.count,
      fleetManagementCompletedTripsResponse?.data?.deviceDTOs?.count,
      fleetManagementCompletedTripsResponse?.data?.completedTrips?.count,
    ]);
    setTripsSearchValue(
      formattedFleetTripsNotification(
        fleetManagementCompletedTripsResponse?.data,
        tripsTabIndex
      )
    );
  }, [fleetManagementCompletedTripsResponse]);

  useEffect(() => {
    setDashboardTripsData(
      formattedFleetTripsNotification(
        fleetManagementCompletedTripsResponse?.data,
        tripsTabIndex
      )
    );
    setDashboardMapTripsData(
      formattedMapFleetTripsNotification(
        fleetManagementCompletedTripsResponse?.data,
        tripsTabIndex
      )
    );
    setTripsNotificationCount([
      fleetManagementCompletedTripsResponse?.data?.liveTrips?.count,
      fleetManagementCompletedTripsResponse?.data?.deviceDTOs?.count,
      fleetManagementCompletedTripsResponse?.data?.completedTrips?.count,
    ]);
    setTripsSearchValue(
      formattedFleetTripsNotification(
        fleetManagementCompletedTripsResponse?.data,
        tripsTabIndex
      )
    );
  }, [fleetManagementCompletedTripsResponse, tripsTabIndex]);

  const handleTripsExpandListItem = (id: any) => {
    const obj = dashboardTripsData?.find((item: any) => item.tripId === id);
    if (id) {
      if (obj?.tripStatus === "Live") {
        dispatch(getFleetManagementTripDetails({ tripId: obj?.tripId }));
        setTripId(obj?.tripId);
      } else if (obj?.tripStatus === "Finish") {
        dispatch(getFleetManagementTripDetails({ tripId: obj?.tripId }));
      }
    } else {
      dispatch(setFleetManagementLiveTrip({}));
      dispatch(setFleetManagementTripDetails({}));
      setTripId(null);
    }
  };

  //Pagination

  useEffect(() => {
    if (!debounceSearchText) {
      let fleetPayload = {
        filterText: "",
        pageNo: parseInt(page),
        pageSize: parseInt(rowsPerPage),
        filterType: "",
      };
      dispatch(
        getFleetManagementCompletedTrips({
          payLoad: fleetPayload,
          isFromSearch: true,
        })
      );
      dispatch(
        getFleetManagementNotificationData({
          payLoad: fleetPayload,
          isFromSearch: true,
        })
      );
    }
  }, []);

  useEffect(() => {
    if (debounceSearchText) {
      let fleetPayload = {
        filterText: "",
        pageNo: parseInt(page),
        pageSize: parseInt(rowsPerPage),
        filterType: "",
      };
      tabMainIndex === 0 &&
        dispatch(
          getFleetManagementCompletedTrips({
            payLoad: fleetPayload,
            isFromSearch: true,
          })
        );
      tabMainIndex === 1 &&
        dispatch(
          getFleetManagementNotificationData({
            payLoad: fleetPayload,
            isFromSearch: true,
          })
        );
      setDebounceSearchText("");
    }
  }, [tripsTabIndex, tabIndex]);

  // PAGINATION

  const handleChangePage = (newPage: any) => {
    // setPage((newPage === NaN || newPage === undefined || newPage === "") ? 0 : (parseInt(newPage) - 1) );
  };

  const handleChangeRowsPerPage = (data: any) => {
    setRowsPerPage(data);
    setSearchPageNo("");
    setPage(0);
    let fleetPayload: any = {
      filterText: debounceSearchText,
      pageNo: parseInt(page),
      pageSize: parseInt(data),
      filterType: debounceSearchText
        ? tripsTabIndex === 0
          ? "Live"
          : tripsTabIndex === 1
          ? "Devices"
          : "Completed"
        : "",
    };
    let fleetNotificationPayload = {
      filterText: debounceSearchText,
      pageNo: parseInt(page),
      pageSize: parseInt(rowsPerPage),
      filterType: debounceSearchText
        ? tabIndex === 0
          ? "Events"
          : tabIndex === 1
          ? "Incident"
          : "Alerts"
        : "",
    };
    tabMainIndex === 0 &&
      dispatch(
        getFleetManagementCompletedTrips({
          payLoad: fleetPayload,
          isFromSearch: true,
        })
      );

    tabMainIndex === 1 &&
      dispatch(
        getFleetManagementNotificationData({
          payLoad: fleetNotificationPayload,
          isFromSearch: true,
        })
      );
  };

  const handleNextChange = () => {
    let fleetPayload: any = {};
    let fleetNotificationPayload: any = {};
    if (page >= 0) {
      fleetPayload = {
        filterText: debounceSearchText,
        pageNo: parseInt(page) + 1,
        pageSize: parseInt(rowsPerPage),
        filterType: debounceSearchText
          ? tripsTabIndex === 0
            ? "Live"
            : tripsTabIndex === 1
            ? "Devices"
            : "Completed"
          : "",
      };
      fleetNotificationPayload = {
        filterText: debounceSearchText,
        pageNo: parseInt(page) + 1,
        pageSize: parseInt(rowsPerPage),
        filterType: debounceSearchText
          ? tabIndex === 0
            ? "Events"
            : tabIndex === 1
            ? "Incident"
            : "Alerts"
          : "",
      };
    }
    tabMainIndex === 0 &&
      dispatch(
        getFleetManagementCompletedTrips({
          payLoad: fleetPayload,
          isFromSearch: true,
        })
      );
    tabMainIndex === 1 &&
      dispatch(
        getFleetManagementNotificationData({
          payLoad: fleetNotificationPayload,
          isFromSearch: true,
        })
      );
    setPage(page + 1);
    setSearchPageNo("");
  };

  const handlePreviousChange = () => {
    let fleetPayload: any = {};
    let fleetNotificationPayload: any = {};
    if (page > 0) {
      fleetPayload = {
        filterText: debounceSearchText,
        pageNo: parseInt(page) - 1,
        pageSize: parseInt(rowsPerPage),
        filterType: debounceSearchText
          ? tripsTabIndex === 0
            ? "Live"
            : tripsTabIndex === 1
            ? "Devices"
            : "Completed"
          : "",
      };
      fleetNotificationPayload = {
        filterText: debounceSearchText,
        pageNo: parseInt(page) - 1,
        pageSize: parseInt(rowsPerPage),
        filterType: debounceSearchText
          ? tabIndex === 0
            ? "Events"
            : tabIndex === 1
            ? "Incident"
            : "Alerts"
          : "",
      };
    }
    tabMainIndex === 0 &&
      dispatch(
        getFleetManagementCompletedTrips({
          payLoad: fleetPayload,
          isFromSearch: true,
        })
      );
    tabMainIndex === 1 &&
      dispatch(
        getFleetManagementNotificationData({
          payLoad: fleetNotificationPayload,
          isFromSearch: true,
        })
      );
    setPage(page - 1);
    setSearchPageNo("");
  };

  const handlePageNoChange = (value: any, keyName: any) => {
    let fleetPayload: any = {};
    let fleetNotificationPayload: any = {};
    if (page >= 0 && value !== "" && keyName === "Enter") {
      setSearchPageNo(parseInt(value));
      setPage(parseInt(value) - 1);
      fleetPayload = {
        filterText: "",
        pageNo: parseInt(value) - 1,
        pageSize: parseInt(rowsPerPage),
        filterType: debounceSearchText
          ? tripsTabIndex === 0
            ? "Live"
            : tripsTabIndex === 1
            ? "Devices"
            : "Completed"
          : "",
      };
      fleetNotificationPayload = {
        filterText: "",
        pageNo: parseInt(page) - 1,
        pageSize: parseInt(rowsPerPage),
        filterType: debounceSearchText
          ? tabIndex === 0
            ? "Events"
            : tabIndex === 1
            ? "Incident"
            : "Alerts"
          : "",
      };
      tabMainIndex === 0 &&
        dispatch(
          getFleetManagementCompletedTrips({
            payLoad: fleetPayload,
            isFromSearch: true,
          })
        );
      tabMainIndex === 1 &&
        dispatch(
          getFleetManagementNotificationData({
            payLoad: fleetNotificationPayload,
            isFromSearch: true,
          })
        );
      // setSearchPageNo("");
    }
  };

  // PAGINATION ENDS

  //debouncing start
  const delayTime = 500;
  const fetchingDataForSearch = (
    searchValue: any,
    tabIndex: number,
    searchBoxPageNo: any,
    searchBoxRowsPerPage: any,
    mainTabIndex: any
  ) => {
    // searchTextRef.current = searchValue;
    let fleetPayload = {};
    let fleetNotificationPayload: any = {};
    if (searchValue) {
      setPage(0);
      fleetPayload = {
        filterText: searchValue,
        pageNo: 0,
        pageSize: parseInt(searchBoxRowsPerPage),
        filterType:
          tabIndex === 0 ? "Live" : tabIndex === 1 ? "Devices" : "Completed",
      };
      fleetNotificationPayload = {
        filterText: searchValue,
        pageNo: 0,
        pageSize: parseInt(searchBoxRowsPerPage),
        filterType:
          tabIndex === 0 ? "Events" : tabIndex === 1 ? "Incident" : "Alerts",
      };
    } else {
      setPage(0);
      fleetPayload = {
        filterText: "",
        pageNo: 0,
        pageSize: parseInt(searchBoxRowsPerPage),
        filterType: "",
      };
      fleetNotificationPayload = {
        filterText: "",
        pageNo: 0,
        pageSize: parseInt(searchBoxRowsPerPage),
        filterType: "",
      };
    }
    mainTabIndex === 0 &&
      dispatch(
        getFleetManagementCompletedTrips({
          payLoad: fleetPayload,
          isFromSearch: true,
        })
      );

    mainTabIndex === 1 &&
      dispatch(
        getFleetManagementNotificationData({
          payLoad: fleetNotificationPayload,
          isFromSearch: true,
        })
      );
    setDebounceSearchText(searchValue);
  };

  const debounce = (func: any, delay: any) => {
    let timeout: any;

    return (...arg: any) => {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(context, arg);
      }, delay);
    };
  };

  const handleSearchtest = useCallback(
    debounce(fetchingDataForSearch, delayTime),
    []
  );

  //debouncing end

  return (
    <>
      {success && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={success}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={
              fleetManagementNotificationResponse?.status === 502 ||
              fleetManagementTripDetailsResponse?.status === 502 ||
              fleetManagementAnalyticsResponse?.status === 502 ||
              fleetManagementTripDetailsData?.status === 502 ||
              fleetManagementLiveTripDetailsData?.status === 502 ||
              fleetManagementNotificationResponse?.status === 500 ||
              fleetManagementTripDetailsResponse?.status === 500 ||
              fleetManagementAnalyticsResponse?.status === 500 ||
              fleetManagementTripDetailsData?.status === 500 ||
              fleetManagementLiveTripDetailsData?.status === 500 ||
              fleetManagementNotificationResponse?.status === 404 ||
              fleetManagementTripDetailsResponse?.status === 404 ||
              fleetManagementAnalyticsResponse?.status === 404 ||
              fleetManagementTripDetailsData?.status === 404 ||
              fleetManagementLiveTripDetailsData?.status === 404 ||
              fleetManagementNotificationResponse?.status === 400 ||
              fleetManagementTripDetailsResponse?.status === 400 ||
              fleetManagementAnalyticsResponse?.status === 400 ||
              fleetManagementTripDetailsData?.status === 400 ||
              fleetManagementLiveTripDetailsData?.status === 400 ||
              fleetManagementNotificationResponse?.status === 409 ||
              fleetManagementTripDetailsResponse?.status === 409 ||
              fleetManagementAnalyticsResponse?.status === 409 ||
              fleetManagementTripDetailsData?.status === 409 ||
              fleetManagementLiveTripDetailsData?.status === 409 ||
              fleetManagementNotificationResponse?.status === 413 ||
              fleetManagementTripDetailsResponse?.status === 413 ||
              fleetManagementAnalyticsResponse?.status === 413 ||
              fleetManagementTripDetailsData?.status === 413 ||
              fleetManagementLiveTripDetailsData?.status === 413 ||
              fleetManagementNotificationResponse?.status === 410 ||
              fleetManagementTripDetailsResponse?.status === 410 ||
              fleetManagementAnalyticsResponse?.status === 410 ||
              fleetManagementTripDetailsData?.status === 410 ||
              fleetManagementLiveTripDetailsData?.status === 410
                ? "error"
                : undefined
            }
            sx={{ width: "100%" }}
          >
            {(fleetManagementNotificationResponse?.status === 502 ||
              fleetManagementTripDetailsResponse?.status === 502 ||
              fleetManagementAnalyticsResponse?.status === 502 ||
              fleetManagementTripDetailsData?.status === 502 ||
              fleetManagementLiveTripDetailsData?.status === 502) && (
              <div style={{ display: "flex" }}>
                <Typography>Bad Gateway</Typography>
              </div>
            )}
            {(fleetManagementNotificationResponse?.status === 500 ||
              fleetManagementTripDetailsResponse?.status === 500 ||
              fleetManagementAnalyticsResponse?.status === 500 ||
              fleetManagementTripDetailsData?.status === 500 ||
              fleetManagementLiveTripDetailsData?.status === 500) && (
              <div style={{ display: "flex" }}>
                <Typography>Something went wrong...</Typography>
                <Link component="button" variant="body2" onClick={handleClick}>
                  Please try again
                </Link>
              </div>
            )}
            {(fleetManagementNotificationResponse?.status === 404 ||
              fleetManagementTripDetailsResponse?.status === 404 ||
              fleetManagementAnalyticsResponse?.status === 404 ||
              fleetManagementTripDetailsData?.status === 404 ||
              fleetManagementLiveTripDetailsData?.status === 404) && (
              <div style={{ display: "flex" }}>
                <Typography>Data Not Available</Typography>
              </div>
            )}
            {(fleetManagementNotificationResponse?.status === 400 ||
              fleetManagementTripDetailsResponse?.status === 400 ||
              fleetManagementAnalyticsResponse?.status === 400 ||
              fleetManagementTripDetailsData?.status === 400 ||
              fleetManagementLiveTripDetailsData?.status === 400) && (
              <div style={{ display: "flex" }}>
                <Typography>Bad Request</Typography>
              </div>
            )}
            {(fleetManagementNotificationResponse?.status === 409 ||
              fleetManagementTripDetailsResponse?.status === 409 ||
              fleetManagementAnalyticsResponse?.status === 409 ||
              fleetManagementTripDetailsData?.status === 409 ||
              fleetManagementLiveTripDetailsData?.status === 409) && (
              <div style={{ display: "flex" }}>
                <Typography>Already data available</Typography>
              </div>
            )}
            {(fleetManagementNotificationResponse?.status === 413 ||
              fleetManagementTripDetailsResponse?.status === 413 ||
              fleetManagementAnalyticsResponse?.status === 413 ||
              fleetManagementTripDetailsData?.status === 413 ||
              fleetManagementLiveTripDetailsData?.status === 413) && (
              <div style={{ display: "flex" }}>
                <Typography>Request too large</Typography>
              </div>
            )}
            {(fleetManagementNotificationResponse?.status === 410 ||
              fleetManagementTripDetailsResponse?.status === 410 ||
              fleetManagementAnalyticsResponse?.status === 410 ||
              fleetManagementTripDetailsData?.status === 410 ||
              fleetManagementLiveTripDetailsData?.status === 410) && (
              <div style={{ display: "flex" }}>
                <Typography>Request not available</Typography>
              </div>
            )}
          </Alert>
        </Snackbar>
      )}
      {(notificationsLoader || overAllAnalyticsLoader || analyticsLoader) &&
      !googleMapsApiKeyResponse ? (
        <div
          style={{
            width: "100%",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={llaLoader} width={"10%"} />
        </div>
      ) : (
        googleMapsApiKeyResponse && (
          <Grid container className={rootContainer}>
            <Grid container className={mainSection}>
              <Grid item xs={12} alignItems="center" className={pageHeading}>
                {dashboard.fleetManagement}
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
                        >
                          <Grid
                            item
                            xs={12}
                            className={bodyLeftTopPanelListContainer}
                          >
                            <TopPanelListItemContainer
                              topPanelListItems={topPanelListItems}
                              percent={
                                fleetManagementTripDetailsResponse?.data
                                  ?.safetyScore
                                  ? Math.floor(
                                      fleetManagementTripDetailsResponse?.data
                                        ?.safetyScore
                                    )
                                  : 0
                              }
                              strokeWidth={10}
                              trailWidth={10}
                              strokeColor="
                          #92C07E"
                              trailColor={
                                appTheme?.palette?.fleetManagementPage
                                  ?.progressBarBg
                              }
                              title={fleetManagement.safetyScore}
                              selectedTheme={selectedTheme}
                              selectedValue={selectedValue}
                              handleSelect={handleSelect}
                              pageName={"fleet"}
                            />
                          </Grid>
                          <Grid item xs={12} style={{ height: "70%" }}>
                            <Grid container xs={12} style={{ height: "25vh" }}>
                              <Grid item xs={6} className={graphOneContainer}>
                                <Grid
                                  container
                                  xs={12}
                                  style={{
                                    height: "100%",
                                    padding: "10px 10px 5px 30px",
                                  }}
                                >
                                  <Grid item xs={12} style={{ height: "10%" }}>
                                    <div className={graphTitle}>
                                      {gridView.trips}
                                    </div>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    className={graphContainerHeaderOne}
                                    style={{ height: "90%" }}
                                  >
                                    <Grid
                                      container
                                      xs={12}
                                      style={{ height: "100%" }}
                                    >
                                      <Grid
                                        item
                                        xs={9}
                                        style={{
                                          height: "21vh",
                                          width: "80vw",
                                        }}
                                      >
                                        <Chart
                                          // width={selectedWidth?.width}
                                          // height={selectedWidth?.height}
                                          containerProps={{
                                            style: {
                                              height: "100%",
                                              width: "100%",
                                            },
                                          }}
                                          graphType={"areaspline"}
                                          isVisible={true}
                                          units={""}
                                          isCrosshair={true}
                                          crossHairLineColor={"#6B70AB90"}
                                          // is4kDevice={selectedWidth?.is4kDevice}
                                          // is2kDevice={selectedWidth?.is2kDevice}
                                          pageName={"FleetManagement"}
                                          tickInterval={
                                            selectedGraphFormat?.tickInterval1
                                          }
                                          xAxisArray={tripsDataXaxis}
                                          // tickInterval={2}
                                          selectedValue={selectedValue}
                                          dataPoints={[
                                            {
                                              marker: {
                                                enabled: false,
                                              },
                                              lineColor: "#6B70AB",
                                              color: "#6B70AB",
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
                                                    Highcharts.color("#6B70AB")
                                                      .setOpacity(
                                                        selectedWidth?.is4kDevice ||
                                                          selectedWidth?.is3KDevice
                                                          ? selectedTheme ===
                                                            "light"
                                                            ? 0.6
                                                            : 0.5
                                                          : 0.5
                                                      )
                                                      .get("rgba"),
                                                  ],
                                                  [
                                                    0.5,
                                                    Highcharts.color("#6B70AB")
                                                      .setOpacity(
                                                        selectedWidth?.is4kDevice ||
                                                          selectedWidth?.is3KDevice
                                                          ? selectedTheme ===
                                                            "light"
                                                            ? 0.5
                                                            : 0.4
                                                          : 0.3
                                                      )
                                                      .get("rgba"),
                                                  ],
                                                  [
                                                    1,
                                                    Highcharts.color("#6B70AB")
                                                      .setOpacity(
                                                        selectedWidth?.is4kDevice ||
                                                          selectedWidth?.is3KDevice
                                                          ? selectedTheme ===
                                                            "light"
                                                            ? 0.15
                                                            : 0.07
                                                          : 0.02
                                                      )
                                                      .get("rgba"),
                                                  ],
                                                ],
                                              },
                                              data: tripsData,
                                            },
                                          ]}
                                        />
                                      </Grid>
                                      <Grid
                                        item
                                        xs={3}
                                        style={{
                                          height: "100%",
                                          padding: "2%",
                                        }}
                                      >
                                        <div className={liveContainer}>
                                          <div className={liveImgStyle}>
                                            <img
                                              // width={
                                              //   selectedWidth?.is4kDevice
                                              //     ? 109
                                              //     : 50
                                              // }
                                              // height={
                                              //   selectedWidth?.is4kDevice
                                              //     ? 49
                                              //     : 30
                                              // }
                                              width={"100%"}
                                              height={"100%"}
                                              src={LiveImg}
                                            />
                                          </div>
                                          <div className={liveContentLeftStyle}>
                                            <div className={liveContentValue}>
                                              {fleetManagementTripDetailsResponse
                                                ?.data?.totalLiveVehicles
                                                ? fleetManagementTripDetailsResponse
                                                    ?.data?.totalLiveVehicles
                                                : 0}
                                            </div>
                                            <div className={liveContentLabel}>
                                              {gridView.vehicles}
                                            </div>
                                          </div>
                                          <div className={liveContentStyle}>
                                            <div className={liveContentValue}>
                                              {fleetManagementTripDetailsResponse
                                                ?.data?.totalCompletedTrip
                                                ? fleetManagementTripDetailsResponse
                                                    ?.data?.totalCompletedTrip
                                                : 0}
                                            </div>
                                            <div className={liveContentLabel}>
                                              {gridView.trips}
                                            </div>
                                          </div>
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item xs={3} className={graphTwoContainer}>
                                <Grid
                                  container
                                  xs={12}
                                  style={{
                                    height: "100%",
                                    padding: "10px 10px 5px 30px",
                                  }}
                                >
                                  <Grid item xs={12} style={{ height: "10%" }}>
                                    <div className={graphTitle}>
                                      {" "}
                                      {fleetManagement.distanceTravelled}
                                    </div>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    className={graphContainerHeaderTwo}
                                    style={{ height: "90%" }}
                                  >
                                    <Grid
                                      container
                                      xs={12}
                                      style={{ height: "100%" }}
                                    >
                                      <Grid
                                        item
                                        xs={12}
                                        style={{
                                          height: "21vh",
                                          width: "80vw",
                                        }}
                                      >
                                        <Chart
                                          // width={selectedWidth?.width1}
                                          // height={selectedWidth?.height1}
                                          containerProps={{
                                            style: {
                                              height: "100%",
                                              width: "100%",
                                            },
                                          }}
                                          graphType={"area"}
                                          isVisible={true}
                                          units={""}
                                          isCrosshair={true}
                                          crossHairLineColor={"#712C7D90"}
                                          // is4kDevice={selectedWidth?.is4kDevice}
                                          // is2kDevice={selectedWidth?.is2kDevice}
                                          pageName={"FleetManagement"}
                                          // tickInterval={0}
                                          selectedValue={selectedValue}
                                          tickInterval={
                                            selectedGraphFormat?.tickInterval2
                                          }
                                          xAxisArray={distanceDataXaxis}
                                          dataPoints={[
                                            {
                                              marker: {
                                                enabled: false,
                                              },
                                              lineColor: "#712C7D",
                                              color: "#712C7D",
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
                                                    Highcharts.color("#712C7D")
                                                      .setOpacity(0.5)
                                                      .get("rgba"),
                                                  ],
                                                  [
                                                    0.5,
                                                    Highcharts.color("#712C7D")
                                                      .setOpacity(
                                                        selectedWidth?.is4kDevice ||
                                                          selectedWidth?.is3KDevice
                                                          ? 0.4
                                                          : 0.3
                                                      )
                                                      .get("rgba"),
                                                  ],
                                                  [
                                                    1,
                                                    Highcharts.color("#712C7D")
                                                      .setOpacity(
                                                        selectedWidth?.is4kDevice ||
                                                          selectedWidth?.is3KDevice
                                                          ? selectedTheme ===
                                                            "light"
                                                            ? 0.16
                                                            : 0.07
                                                          : 0.02
                                                      )
                                                      .get("rgba"),
                                                  ],
                                                ],
                                              },
                                              data: distanceData,
                                            },
                                          ]}
                                        />
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid />
                                </Grid>
                              </Grid>
                              <Grid item xs={3} className={graphTwoContainer}>
                                <Grid
                                  container
                                  xs={12}
                                  style={{
                                    height: "100%",
                                    padding: "10px 10px 5px 10px",
                                  }}
                                >
                                  <Grid
                                    item
                                    xs={12}
                                    className={screenFiveGraphTitleStyle}
                                    style={{ height: "10%" }}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        columnGap: "6px",
                                      }}
                                    >
                                      <div className={driveDot}></div>
                                      <div>{fleetManagement.driveHrs}</div>
                                    </div>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        columnGap: "6px",
                                      }}
                                    >
                                      <div className={driveDotOne}></div>
                                      <div>{fleetManagement.idleHrs}</div>
                                    </div>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    className={graphContainerHeaderThree}
                                    style={{ height: "90%" }}
                                  >
                                    <Grid
                                      container
                                      xs={12}
                                      style={{ height: "100%" }}
                                    >
                                      <Grid
                                        item
                                        xs={12}
                                        style={{
                                          height: "21vh",
                                          width: "80vw",
                                        }}
                                      >
                                        <Chart
                                          // width={selectedWidth?.width1}
                                          // height={selectedWidth?.height1}
                                          containerProps={{
                                            style: {
                                              height: "100%",
                                              width: "100%",
                                            },
                                          }}
                                          isVisible={true}
                                          graphType={"spline"}
                                          units={"Hrs"}
                                          isCrosshair={true}
                                          crossHairLineColor={"#E5FAF6"}
                                          // is4kDevice={selectedWidth?.is4kDevice}
                                          // is2kDevice={selectedWidth?.is2kDevice}
                                          tooltip={"shared"}
                                          pageName={"FleetManagement"}
                                          selectedValue={selectedValue}
                                          tickInterval={
                                            selectedGraphFormat?.tickInterval2
                                          }
                                          xAxisArray={idleHoursXaxisData}
                                          dataPoints={[
                                            {
                                              marker: {
                                                enabled: false,
                                              },
                                              lineColor: "#73B35A",
                                              color: "#73B35A",
                                              lineWidth:
                                                selectedWidth?.is4kDevice ||
                                                selectedWidth?.is3KDevice
                                                  ? 4
                                                  : 2,
                                              data: hoursData,
                                            },
                                            {
                                              marker: {
                                                enabled: false,
                                              },
                                              lineColor: "#6B70AB",
                                              color: "#6B70AB",
                                              lineWidth:
                                                selectedWidth?.is4kDevice ||
                                                selectedWidth?.is3KDevice
                                                  ? 4
                                                  : 2,
                                              data: idleData,
                                            },
                                          ]}
                                        />
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
                        style={{ height: "59%", position: "relative" }}
                      >
                        <img
                          src={GlobeIconActive}
                          alt="GlobeIcon Icon"
                          onClick={onHandleDefaultView}
                          className={globeIconSection}
                        />
                        <FleetMap
                          googleMapsApiKeyResponse={googleMapsApiKeyResponse}
                          mapPageName={"fleet"}
                          markers={
                            tabMainIndex === 0
                              ? dashboardMapTripsData
                              : notificationArray
                          }
                          setNotificationPanelActive={
                            setNotificationPanelActive
                          }
                          setSelectedNotification={setSelectedNotification}
                          marker={selectedNotification}
                          setTabIndex={setTabIndex}
                          currentMarker={currentMarker}
                          setCurrentMarker={setCurrentMarker}
                          setIsMarkerClicked={setIsMarkerClicked}
                          handleViewDetails={handleViewDetails}
                          handleVideoDetails={handleVideoDetails}
                          selectedTheme={selectedTheme}
                          setMap={setMap}
                          map={map}
                          dataPoints={
                            fleetManagementTripDetailsData?.data?.gpsDTOs
                          }
                          handleMarkerIconClick={handleMarkerIconClick}
                          handleMarkerCancel={handleMarkerCancel}
                          mapType={mapType}
                          setMapType={setMapType}
                          mapDefaultView={mapDefaultView}
                          setMapDefaultView={setMapDefaultView}
                          tabMainIndex={tabMainIndex}
                          tripsTabIndex={tripsTabIndex}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={3} className={notificationPanelGrid}>
                    <FleetNotificationPanelNew
                      setNotificationPanelActive={setNotificationPanelActive}
                      dashboardData={
                        tabMainIndex === 0 ? dashboardTripsData : dashboardData
                      }
                      tabIndex={tabIndex}
                      setTabIndex={setTabIndex}
                      notificationCount={notificationCount}
                      selectedNotification={selectedNotification}
                      setSelectedNotification={setSelectedNotification}
                      searchOpen={searchOpen}
                      setSearchOpen={setSearchOpen}
                      // searchNotificationsValue={searchNotificationsValue}
                      setSearchNoticationsValue={setSearchNoticationsValue}
                      setCurrentMarker={setCurrentMarker}
                      handleViewDetails={handleViewDetails}
                      handleVideoDetails={handleVideoDetails}
                      isMarkerClicked={isMarkerClicked}
                      setIsMarkerClicked={setIsMarkerClicked}
                      selectedTheme={selectedTheme}
                      handleExpandListItem={handleExpandListItem}
                      tabMainIndex={tabMainIndex}
                      setTabMainIndex={setTabMainIndex}
                      tripsTabIndex={tripsTabIndex}
                      setTripsTabIndex={setTripsTabIndex}
                      tripsNotificationCount={tripsNotificationCount}
                      handleTripsExpandListItem={handleTripsExpandListItem}
                      tripsSearchValue={
                        tabMainIndex === 0
                          ? tripsSearchValue
                          : searchNotificationsValue
                      }
                      setTripsSearchValue={setTripsSearchValue}
                      handleMarkerCancel={handleMarkerCancel}
                      handleSearchtest={handleSearchtest}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      setDebounceSearchText={setDebounceSearchText}
                      loadingFleetManagementCompletedTripsData={
                        tabMainIndex === 0
                          ? loadingFleetManagementCompletedTripsData
                          : notificationsLoader
                      }
                      apiResponse={
                        tabMainIndex === 0
                          ? fleetManagementCompletedTripsResponse
                          : fleetManagementNotificationResponse
                      }
                    />
                    {(!loadingFleetManagementCompletedTripsData ||
                      !notificationsLoader) && (
                      <div style={{ margin: "-5px 20px 0 20px" }}>
                        <CustomTablePagination
                          rowsPerPageOptions={[50, 100, 200, 500]}
                          count={
                            tabMainIndex === 0
                              ? tripsTabIndex === 0
                                ? fleetManagementCompletedTripsResponse?.data
                                    ?.liveTrips?.count
                                : tripsTabIndex === 1
                                ? fleetManagementCompletedTripsResponse?.data
                                    ?.deviceDTOs?.count
                                : fleetManagementCompletedTripsResponse?.data
                                    ?.completedTrips?.count
                              : tabIndex === 0
                              ? fleetManagementNotificationResponse?.data
                                  ?.events?.totalCount
                              : tabIndex === 1
                              ? fleetManagementNotificationResponse?.data
                                  ?.incidents?.totalCount
                              : fleetManagementNotificationResponse?.data
                                  ?.alerts?.totalCount
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
        )
      )}
      {showInfoDialogue && (
        <InfoDialogFleetManagement
          setShowInfoDialogue={setShowInfoDialogue}
          selectedMarker={selectedMarker}
          is4kDevice={selectedWidth?.is4kDevice}
          selectedTheme={selectedTheme}
          selectedMarkerLocation={selectedMarkerLocation}
          dataPoints={fleetManagementTripDetailsData?.data}
        />
      )}
      {showInfoDialogueVideo && (
        <InfoDialogFleetVideo
          setShowInfoDialogue={setShowInfoDialogueVideo}
          selectedMarker={selectedMarker}
          selectedTheme={selectedTheme}
        />
      )}
    </>
  );
};

export default FleetManagement;
