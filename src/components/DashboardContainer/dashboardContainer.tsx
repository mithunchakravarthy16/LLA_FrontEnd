/** @format */
//@ts-nocheck
import { useState, useEffect, useCallback, useRef  } from "react";
import Map from "components/Map";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getNotificationData } from "redux/actions/getAllAssertNotificationAction";
import {
  getFleetManagementNotificationData,
  setFleetManagementNotificationData,
  getFleetManagementOverAllTripDetails,
} from "redux/actions/fleetManagementNotificationActions";
import theme from "../../theme/theme";
import moment from "moment";
import NotificationPanel from "components/NotificationPanel";
import {
  formatttedAssetAPINotification,
  formatttedDashboardAPINotificaiton,
  formatttedDashboardNotification,
  formatttedDashboardNotificationCount,
  formatttedFleetAPINotification,
  formattedOverallNotificationCount,
} from "../../utils/utils";
import FlippingCard from "components/FlippingCard/FlippingCard";
import NotificationActiveIcon from "../../assets/NotificationActive.svg";
import LightThemeNotificationIcon from "../../assets/lightThemeNotificationIcon.svg";
import LightThemeNotificationIconActive from "../../assets/lightThemeNotificationIconActive.svg";
import NotificationIcon from "../../assets/notificationIcon.svg";
import dashboardList from "mockdata/dashboardNotification";
import { Grid, Alert, Snackbar, Typography, Link } from "@mui/material";
import dashboardNotification from "../../mockdata/dashboardNotificationAPIFormat";
import useStyles from "./styles";
import fleetManagementResponse from "mockdata/fleetManagementAPI";
import assetTrackingResponse from "mockdata/assetTrackingAPI";
import { getAdminPanelConfigData } from "redux/actions/adminPanel";
import InfoDialogFleetVideo from "components/InfoDialogFleetVideo";
import Loader from "elements/Loader";
import { getUserLogout, setUserLogin } from "redux/actions/loginActions";
import { getAssetTrackingGridViewAnalyticsData } from "redux/actions/assetTrackingActiveInActiveAnalyticsAction";
import InfoDialogAssetTracking from "components/InfoDialogAssetTracking";
import { getAssetLiveLocation } from "redux/actions/getAssetTrackerDetailAction";
import CustomTablePagination from "elements/CustomPagination";
import { UseWebSocket } from "websocketServices/useWebsocket";
interface DashboardContainerProps {
  handleviewDetails?: any;
}

const DashboardContainer = (props: any) => {
  const { setMapType, mapType } = props;
  const navigate = useNavigate();

  const adminPanelData = useSelector(
    (state: any) => state?.adminPanel?.getConfigData?.data?.body
  );

  const loaderAdminGetConfigData = useSelector(
    (state: any) => state?.adminPanel?.loadingGetConfigData
  );

  const adminPanelSaveData = useSelector(
    (state: any) => state?.adminPanel?.configData
  );

  const loaderAdminConfigData = useSelector(
    (state: any) => state?.adminPanel?.loadingConfigData
  );

  const dispatch = useDispatch();

  const [selectedTheme, setSelectedTheme] = useState<any>();

  const fleetManagementNotificationResponse = useSelector(
    (state: any) =>
      state?.fleetManagementNotification?.fleetManagementNotificationData
  );

  const loaderFleetManagementNotification = useSelector(
    (state: any) => state?.fleetManagementNotification?.loadingNotificationData
  );

  // const fleetManagementNotificationResponse  = fleetManagementResponse;

  const assetNotificationResponse = useSelector(
    (state: any) => state?.assetNotification?.assetNotificationData
  );

  const loaderAssetNotificationResponse = useSelector(
    (state: any) => state?.assetNotification?.loadingAssetNotificationData
  );

  const fleetManagementTripDetailsResponse = useSelector(
    (state: any) =>
      state.fleetManagementNotification.fleetManagementOverAllTripDetailsData
  );

  const overAllAnalyticsLoader = useSelector(
    (state: any) => state.fleetManagementNotification?.loadingOverAllAnalytics
  );

  const assetTrackingGridViewAnalyticsDataResponse = useSelector(
    (state: any) =>
      state.assetTrackingActiveInActiveAnalytics
        .assetTrackingGridViewAnalyticsData
  );

  // const assetNotificationResponse = assetTrackingResponse;

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [tabIndex, setTabIndex] = useState<any>(1);
  const [selectedNotification, setSelectedNotification] = useState<any>("");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [notificationPanelActive, setNotificationPanelActive] =
    useState<boolean>(false);
  const [currentMarker, setCurrentMarker] = useState<any>("");
  const [currentOpenedCard, setCurrentOpenedCard] = useState<any>("");
  const [focusedCategory, setFocusedCategory] = useState<any>("");
  const [isMarkerClicked, setIsMarkerClicked] = useState<boolean>(false);
  const [map, setMap] = useState<any>(null);
  const [showInfoDialogueVideo, setShowInfoDialogueVideo] =
    useState<boolean>(false);
  const [selectedMarker, setSelectedMarker] = useState<any>();
  const [success, setSuccess] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [mapMarkerArray, setMapMarkerArray] = useState<any>([]);
  const [assetLiveMarker, setAssetLiveMarker] = useState<any>("");
  //Pagination
  const [page, setPage] = useState<any>(0);
  const [rowsPerPage, setRowsPerPage] = useState<any>(50);
  const [searchPageNo, setSearchPageNo] = useState<any>();
  const [paginationTotalCount, setPaginationTotalCount] = useState<any>();
  const [totalRecords, setTotalRecords] = useState<any>(
    formattedOverallNotificationCount(
      assetNotificationResponse && assetNotificationResponse?.data,
      dashboardNotification?.notifications
    )
  );
  //Pagination End

  useEffect(() => {
    dispatch(getAdminPanelConfigData({ isPreview: "N", isDefault: "N" }));
    dispatch(getAssetTrackingGridViewAnalyticsData("Day"));
  }, []);

  useEffect(() => {
    if (adminPanelSaveData?.body?.isPreview === "Y") {
      dispatch(getAdminPanelConfigData({ isPreview: "Y", isDefault: "N" }));
    }
  }, [adminPanelSaveData]);

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
    dashboardRightPanelStyle,
    notificationIconSection,
    notificationPanelSection,
    pageNumSection,
    customPagination,
  } = useStyles(appTheme);

  const onHandleBellIcon = () => {
    setNotificationPanelActive(!notificationPanelActive);
  };

  useEffect(()=>{
    let assetLiveDataPayload: any = {};
    dispatch(getAssetLiveLocation(assetLiveDataPayload));

    const interval = setInterval(() => {
      dispatch(getAssetLiveLocation(assetLiveDataPayload));
    }, 10 * 1000);

    return () => {
      clearInterval(interval);
    };
  },[])
  const [debounceSearchText, setDebounceSearchText] = useState<any>("");
  
  useEffect(() => {
    const assetPayload: any = {
      filterText: debounceSearchText,
      pageNo: parseInt(page),
      pageSize: parseInt(rowsPerPage),
      notificationType:
        tabIndex === 0 ? "Events" : tabIndex === 1 ? "Incident" : "Alerts",
    };
    if (!debounceSearchText) {
      const fleetPayload: any = {};
      // dispatch(setFleetManagementNotificationData({}));
      // dispatch(getFleetManagementNotificationData(fleetPayload));
      // dispatch(getFleetManagementOverAllTripDetails({ type: "Day" }));
      setSuccess(false);
      let assetPayload: any = {
        filterText: "",
        pageNo: parseInt(page),
        pageSize: parseInt(rowsPerPage),
        notificationType: tabIndex === 0 ? "Events" : tabIndex === 1 ? "Incident" : "Alerts",
      };

      dispatch(
        getNotificationData({ payLoad: assetPayload, isFromSearch: true })
      );

      let assetLiveDataPayload: any = {};
      dispatch(getAssetLiveLocation(assetLiveDataPayload));
    }

    // const intervalTime = setInterval(() => {
    //   dispatch(getNotificationData({ payLoad: assetPayload, isFromSearch: false }));
    // }, 1 * 60 * 1000);

    

    // return () => {
    //   clearInterval(intervalTime);
    // };
  }, [debounceSearchText]);

  const [dashboardNotificationList, setDashboardNotificationList] =
    useState<any>([]);

  const assetLiveData = useSelector(
    (state: any) => state?.assetTracker?.assetLiveData?.data
  );

  const [liveMarkerList, setLiveMarkerList] = useState<any>(
    assetLiveData && [
      ...assetLiveData,
      ...formatttedDashboardAPINotificaiton(
        dashboardNotification?.notifications
      ),
    ]
  );




  //---websocket Implementation starts---

const [websocketLatestAssetNotification, setWebsocketLatestAssetNotification] = useState<any>([])

const clientRef = useRef<any>()
useEffect(()=>{
  UseWebSocket((message) => {
    setWebsocketLatestAssetNotification(message)    
  },
  (clintReference)=>{
    clientRef.current = clintReference
  },
  "openWebsocket"  )

  return ()=>{
    UseWebSocket(() => {},
    ()=>{},
    "closeWebsocket",
    clientRef.current)
  }
},[])

// useEffect(()=>{
//   const client = new Client();

//   client.configure({
//     brokerURL: 'wss://apismartlabtech.sensyonsmartspaces.com/notification', //'wss://https://apismartlabtech.sensyonsmartspaces.com/notification' 'wss://apilla.sensyonsmartspaces.com/notification'
//     onConnect: () => {
//       console.log('onConnect');

//       client.subscribe('/asset/notification', message => {
//         console.log("asset Message", JSON.parse(message.body));
//         setWebsocketLatestAssetNotification(JSON.parse(message.body))
//         // this.setState({serverTime: message.body});
//       });
//     },
//     // Helps during debugging, remove in production
//     debug: (str:any) => {
//       console.log(new Date(), str);
//     }
//   });

//   client.activate();

//   return () =>  { console.log("disconnected test"); client.forceDisconnect(); client.deactivate()}
// },[])


//---websocket Implementation ends---



  useEffect(() => {
    setSuccess(false);
    if (
      fleetManagementNotificationResponse?.status === 500 ||
      fleetManagementNotificationResponse?.status === 404 ||
      fleetManagementNotificationResponse?.status === 400 ||
      fleetManagementNotificationResponse?.status === 409 ||
      fleetManagementNotificationResponse?.status === 413 ||
      fleetManagementNotificationResponse?.status === 410 ||
      fleetManagementTripDetailsResponse?.status === 500 ||
      fleetManagementTripDetailsResponse?.status === 404 ||
      fleetManagementTripDetailsResponse?.status === 400 ||
      fleetManagementTripDetailsResponse?.status === 409 ||
      fleetManagementTripDetailsResponse?.status === 413 ||
      fleetManagementTripDetailsResponse?.status === 410
    ) {
      setSuccess(true);
    } else if (
      assetNotificationResponse 
      // &&
      // fleetManagementNotificationResponse?.status === 200
    ) {
     
      console.log("test websocketLatestAssetNotification", websocketLatestAssetNotification)       
      websocketLatestAssetNotification && websocketLatestAssetNotification?.length > 0 &&
       websocketLatestAssetNotification?.map((item:any)=>{
              if(item.notificationType?.toString()?.toLowerCase() === "incident"){
                if(!assetNotificationResponse?.data?.incidents?.incidentList.some((obj) => obj.assetNotificationId === item.assetNotificationId)){
                assetNotificationResponse?.data?.incidents?.incidentList?.unshift(item) 
                }
              }

              if(item.notificationType?.toString()?.toLowerCase() === "events"){
                if(!assetNotificationResponse?.data?.events?.eventsList?.some((obj) => obj.assetNotificationId === item.assetNotificationId)){
                  assetNotificationResponse?.data?.events?.eventsList?.unshift(item) 
                }
              }

              if(item.notificationType?.toString()?.toLowerCase() === "alerts"){
                if(!assetNotificationResponse?.data?.alerts?.alertList?.some((obj) => obj.assetNotificationId === item.assetNotificationId)){
                  assetNotificationResponse?.data?.alerts?.alertList?.unshift(item) 
                }
              }

            })
       
    console.log("test websocket modifineddata", assetNotificationResponse?.data)
      setSuccess(false);
      const assetNotiData: any = formatttedAssetAPINotification(
        assetNotificationResponse?.data
      );
      const dashboardNotiData: any = formatttedDashboardAPINotificaiton(
        dashboardNotification?.notifications
      );
      const fleetNotiData: any = formatttedFleetAPINotification(
        fleetManagementNotificationResponse?.data
      );
      if (
        assetNotiData &&
        assetNotiData?.length > 0
        // fleetNotiData &&
        // fleetNotiData?.length > 0
      ) {
        const consolidatedData = [
          ...assetNotiData,
          ...dashboardNotiData,
          // ...fleetNotiData,
        ];

        const consolidatedDataNextPage = [...assetNotiData];

        // const consolidatedMarkerData = [...consolidatedData];
        setDashboardNotificationList(
          page === 0 && !searchOpen
            ? consolidatedData
            : consolidatedDataNextPage
        );
      }
    }
  }, [assetNotificationResponse, searchOpen, websocketLatestAssetNotification]);

  useEffect(() => {
    if (assetLiveData) {
      const sampleLiveData = [
        {
          trackerId: "740063943838",
          assetId:
            "WkdWMmFXTmxTVzVtYnc9PTNhNmU3M2YwLTNjYWQtMTFlZS1hNzFjLTAxNWQxZjkxMWE2NA==",
          trackerStatus: "Active",
          notificationType: "Incident",
          currentLocation: {
            lat: 9.0155021,
            lng: -79.4759242,
          },
          currentArea: "",
        },
        {
          trackerId: "413051518008",
          assetId:
            "WkdWMmFXTmxTVzVtYnc9PTdjOTkyMDgwLTRjMGQtMTFlZS05MzFhLWM5MTFiMjY5ZmJjNQ==",
          trackerStatus: "Inactive",
          notificationType: "Incident",
          currentLocation: {
            lat: 9.0135021,
            lng: -79.4759242,
          },
          currentArea: "",
        },
        {
          trackerId: "740063943499",
          assetId:
            "WkdWMmFXTmxTVzVtYnc9PThhYjU0YjkwLTNjYWQtMTFlZS04NzYwLTdkYjZhNjJlNzM4ZA==",
          trackerStatus: "Active",
          notificationType: "Events",
          currentLocation: {
            lat: 9.0135021,
            lng: -79.4859242,
          },
          currentArea: "",
        },
      ];

      const updatedLiveData: any = assetLiveData?.map((asset: any) => {
        return {
          ...asset,
          location: asset?.currentLocation,
          category: "asset",
          title: `TR#${asset?.trackerId}`,
          id: asset?.assetId,
          recentMarkerType:
            asset?.trackerStatus === "Inactive"
              ? asset?.trackerStatus
              : asset?.notificationType,
          markerId: asset?.trackerId,
        };
      });

      setLiveMarkerList([
        ...updatedLiveData,
        ...formatttedDashboardAPINotificaiton(
          dashboardNotification?.notifications
        ),
      ]);
    }
  }, [assetLiveData]);

  useEffect(() => {
    if (searchOpen && selectedNotification !== "") {
      setSearchValue(searchValue);
    }
  }, [searchOpen, selectedNotification]);

  // fleetManagementNotificationResponse &&
  const [notificationCount, setNotificationCount] = useState<any>(
    assetNotificationResponse &&
      formatttedDashboardNotificationCount(dashboardNotificationList)
  );

  const [searchValue, setSearchValue] = useState<any>(
    dashboardNotificationList &&
      formatttedDashboardNotification(dashboardNotificationList, tabIndex)
  );

  useEffect(() => {
    setNotificationCount(
      formatttedDashboardNotificationCount(dashboardNotificationList)
    );
  }, [searchValue]);

  const [dashboardData, setDashboardData] = useState<any>(
    dashboardNotificationList &&
      formatttedDashboardNotification(dashboardNotificationList, tabIndex)
  );

  useEffect(() => {
    setDashboardData(
      formatttedDashboardNotification(dashboardNotificationList, tabIndex)
    );

    if (debounceSearchText) {
      const tabData = formatttedDashboardNotification(
        dashboardNotificationList,
        tabIndex
      );
      let searchResult = tabData?.filter((value: any) => {
        return (
          value?.title
            ?.toString()
            ?.toLowerCase()
            .includes(debounceSearchText?.toString()?.toLowerCase()) ||
          value?.area
            ?.toString()
            ?.toLowerCase()
            .includes(debounceSearchText?.toString()?.toLowerCase()) ||
          value?.subTitle
            ?.toString()
            ?.toLowerCase()
            .includes(debounceSearchText?.toString()?.toLowerCase()) ||
          value?.trackerId
            ?.toString()
            ?.toLowerCase()
            .includes(debounceSearchText?.toString()?.toLowerCase()) ||
          value?.assetId
            ?.toString()
            ?.toLowerCase()
            .includes(debounceSearchText?.toString()?.toLowerCase()) ||
          value?.entity
            ?.toString()
            ?.toLowerCase()
            .includes(debounceSearchText?.toString()?.toLowerCase()) ||
          value?.venue
            ?.toString()
            ?.toLowerCase()
            .includes(debounceSearchText?.toString()?.toLowerCase()) ||
          value?.equipment
            ?.toString()
            ?.toLowerCase()
            .includes(debounceSearchText?.toString()?.toLowerCase())
        );
      });
      setSearchValue(searchResult);
    } else {
      setSearchValue(
        formatttedDashboardNotification(dashboardNotificationList, tabIndex)
      );
    }
  }, [dashboardNotificationList, tabIndex, debounceSearchText]);

  useEffect(() => {
    if (!notificationPanelActive) {
      setSearchOpen(false);
      setTabIndex(1);
      setCurrentMarker("");
      setSelectedNotification("");
      setSearchValue(dashboardData);
    }
  }, [notificationPanelActive]);

  useEffect(() => {
    if (count > 3) {
      localStorage.removeItem("user");
      localStorage.clear();
      dispatch(getUserLogout());
      dispatch(setUserLogin({}));
      dispatch(setFleetManagementNotificationData({}));
      setSuccess(false);
      navigate("/login");
    }
  }, [count]);

  const handleVideoDetails = (event: any, data: any) => {
    event.stopPropagation();
    setShowInfoDialogueVideo(true);
    setSelectedMarker(data);
  };

  const handleClose = () => {
    setSuccess(false);
  };

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setSuccess(false);
    dispatch(getFleetManagementNotificationData({}));
  };
  const [isInfoWindowActive, setIsInfoWindowActive] = useState<boolean>(false);
  const handleAssetViewDetails = (data: any) => {
    setIsInfoWindowActive(true);
    setSelectedMarker(data);
  };

  // useEffect(() => {
  //   if (selectedNotification) {
  //     setIsMarkerClicked(false);
  //   }
  // }, [selectedNotification]);

  const [listSelectedMarker, setListSelectedMarker] = useState<any>("");
  const [selectedNotificationItem, setSelectedNotificationItem] =
    useState<any>("");

    useEffect(()=>{
      if(searchPageNo){
        setSearchPageNo("")
        setPage(0);
        const assetPayload = {
          filterText: "",
          pageNo: parseInt(0),
          pageSize: parseInt(rowsPerPage),
          notificationType: tabIndex === 0 ? "Events" : tabIndex === 1 ? "Incident" : "Alerts",
        };
  
        dispatch(
          getNotificationData({ payLoad: assetPayload, isFromSearch: true })
        );
      }
      
    },[tabIndex])

  // PAGINATION
  

  const handleChangePage = (newPage: any) => {
    setPage(newPage);
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
    setSearchPageNo("");
  };

  const handlePageNoChange = (value: any) => {
    setPage(0);
    setSearchPageNo(value !== "" ? parseInt(value) : value);

    let assetPayload: any = {};
    if (page >= 0 && value !== "") {
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
    }
  };

    //Pagination Debounce Starts

    const debounce = (func: any, delay: any) => {
      let timeOut: any;
      return (...arg: any) => {
        const context = this;
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
          func.apply(context, arg);
        }, delay);
      };
    };
  
    const pageSearchCallback = useCallback(
      debounce(handlePageNoChange, 2000),
      []
    );
  
     //Pagination Debounce Ends

  //Total Records

  useEffect(() => {
    if (assetNotificationResponse) {
      setTotalRecords(
        formattedOverallNotificationCount(
          assetNotificationResponse?.data,
          dashboardNotification?.notifications,
          "dashboard",
          searchOpen
        )
      );
      // formattedDashboardTotalRecords(dashboardNotification?.notifications)
      let countArray = formattedOverallNotificationCount(
        assetNotificationResponse?.data,
        dashboardNotification?.notifications,
        "dashboard",
        searchOpen
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
  }, [assetNotificationResponse, tabIndex, searchOpen]);

  useEffect(() => {
    setPage(0);
  }, [tabIndex]);

  // PAGINATION ENDS


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
              fleetManagementNotificationResponse?.status === 500 ||
              fleetManagementNotificationResponse?.status === 404 ||
              fleetManagementNotificationResponse?.status === 400 ||
              fleetManagementNotificationResponse?.status === 409 ||
              fleetManagementNotificationResponse?.status === 413 ||
              fleetManagementNotificationResponse?.status === 410 ||
              fleetManagementTripDetailsResponse?.status === 500 ||
              fleetManagementTripDetailsResponse?.status === 404 ||
              fleetManagementTripDetailsResponse?.status === 400 ||
              fleetManagementTripDetailsResponse?.status === 409 ||
              fleetManagementTripDetailsResponse?.status === 413 ||
              fleetManagementTripDetailsResponse?.status === 410
                ? "error"
                : undefined
            }
            sx={{ width: "100%" }}
          >
            {(fleetManagementNotificationResponse?.status === 500 ||
              fleetManagementTripDetailsResponse?.status === 500) && (
              <div style={{ display: "flex" }}>
                <Typography>Something went wrong...</Typography>
                <Link component="button" variant="body2" onClick={handleClick}>
                  Please try again
                </Link>
              </div>
            )}
            {(fleetManagementNotificationResponse?.status === 404 ||
              fleetManagementTripDetailsResponse?.status === 404) && (
              <div style={{ display: "flex" }}>
                <Typography>Data Not Available</Typography>
              </div>
            )}
            {(fleetManagementNotificationResponse?.status === 400 ||
              fleetManagementTripDetailsResponse?.status === 400) && (
              <div style={{ display: "flex" }}>
                <Typography>Bad Request</Typography>
              </div>
            )}
            {(fleetManagementNotificationResponse?.status === 409 ||
              fleetManagementTripDetailsResponse?.status === 409) && (
              <div style={{ display: "flex" }}>
                <Typography>Already data available</Typography>
              </div>
            )}
            {(fleetManagementNotificationResponse?.status === 413 ||
              fleetManagementTripDetailsResponse?.status === 413) && (
              <div style={{ display: "flex" }}>
                <Typography>Request too large</Typography>
              </div>
            )}
            {(fleetManagementNotificationResponse?.status === 410 ||
              fleetManagementTripDetailsResponse?.status === 410) && (
              <div style={{ display: "flex" }}>
                <Typography>Request not available</Typography>
              </div>
            )}
          </Alert>
        </Snackbar>
      )}
      {Object.keys(assetNotificationResponse).length > 0 &&
      !loaderFleetManagementNotification &&
      // !loaderFleetManagementNotification &&
      // !loaderAdminGetConfigData &&
      // !loaderAdminGetConfigData &&
      !overAllAnalyticsLoader ? (
        <Grid container xs={12}>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <div className={dashboardRightPanelStyle}>
              
              <iframe width="100%" height="900px"  src="https://digitalsky.dgca.gov.in/" frameborder="0" ></iframe>
                
                {/* <Map
                  markers={mapMarkerArray}
                  setNotificationPanelActive={setNotificationPanelActive}
                  setSelectedNotification={setSelectedNotification}
                  marker={selectedNotification}
                  setTabIndex={setTabIndex}
                  currentMarker={currentMarker}
                  setCurrentMarker={setCurrentMarker}
                  focusedCategory={focusedCategory}
                  mapPageName={"dashboard"}
                  setIsMarkerClicked={setIsMarkerClicked}
                  tabIndex={tabIndex}
                  handleVideoDetails={handleVideoDetails}
                  handleViewDetails={() => {}}
                  handleAssetViewDetails={handleAssetViewDetails}
                  selectedTheme={selectedTheme}
                  setMap={setMap}
                  map={map}
                  searchOpen={searchOpen}
                  selectedNotification={selectedNotification}
                  liveMarkerList={liveMarkerList}
                  listSelectedMarker={listSelectedMarker}
                  setListSelectedMarker={setListSelectedMarker}
                  selectedNotificationItem={selectedNotificationItem}
                  setSelectedNotificationItem={setSelectedNotificationItem}
                  isMarkerClicked={isMarkerClicked}
                  setMapType={setMapType}
                  mapType={mapType}
                /> */}
              </div>
            </Grid>
            <Grid item xs={12}>
              <img
                src={
                  notificationPanelActive
                    ? selectedTheme === "light"
                      ? LightThemeNotificationIconActive
                      : NotificationActiveIcon
                    : selectedTheme === "light"
                    ? LightThemeNotificationIcon
                    : NotificationIcon
                }
                alt="Notificaion Icon"
                onClick={onHandleBellIcon}
                className={notificationIconSection}
              />
            </Grid>
            <FlippingCard
              currentOpenedCard={currentOpenedCard}
              setCurrentOpenedCard={setCurrentOpenedCard}
              focusedCategory={focusedCategory}
              setFocusedCategory={setFocusedCategory}
              selectedTheme={selectedTheme}
              fleetManagementTripDetailsResponse={
                fleetManagementTripDetailsResponse
              }
              alertCount={
                assetTrackingGridViewAnalyticsDataResponse?.data?.alertCount
              }
              assetCount={
                assetTrackingGridViewAnalyticsDataResponse?.data
                  ?.assetTrackedCount
              }
              locationChangedCount={
                assetTrackingGridViewAnalyticsDataResponse?.data
                  ?.locationChangeCount
              }
            />
            <Grid item xs={4}>
              {notificationPanelActive && (
                <div
                  className={notificationPanelSection}
                  style={{ width: "24%" }}
                >
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
                    notificationPageName={"dashboard"}
                    isMarkerClicked={isMarkerClicked}
                    setIsMarkerClicked={setIsMarkerClicked}
                    handleVideoDetails={handleVideoDetails}
                    handleViewDetails={() => {}}
                    handleAssetViewDetails={handleAssetViewDetails}
                    selectedTheme={selectedTheme}
                    handleExpandListItem={() => {}}
                    setAssetLiveMarker={setAssetLiveMarker}
                    liveMarkerList={liveMarkerList}
                    listSelectedMarker={listSelectedMarker}
                    setListSelectedMarker={setListSelectedMarker}
                    selectedNotificationItem={selectedNotificationItem}
                    setSelectedNotificationItem={setSelectedNotificationItem}
                    setDebounceSearchText={setDebounceSearchText}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    loaderAssetNotificationResponse={
                      loaderAssetNotificationResponse
                    }
                    assetLiveMarker={assetLiveMarker}
                  />
                  { !loaderAssetNotificationResponse && (
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
                      onPageNoChange={pageSearchCallback}
                      value={searchPageNo}
                      pageNumclassName={pageNumSection}
                      reportsPaginationclassName={customPagination}
                    />
                  </div>
                  )}
                </div>
              )}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Loader isHundredVh={true} />
      )}

      {showInfoDialogueVideo && (
        <InfoDialogFleetVideo
          setShowInfoDialogue={setShowInfoDialogueVideo}
          selectedMarker={selectedMarker}
          selectedTheme={selectedTheme}
        />
      )}

      {isInfoWindowActive && (
        <InfoDialogAssetTracking
          setIsInfoWindowActive={setIsInfoWindowActive}
          // packageData={packageData}
          // infoWindowNotificationListItems={infoWindowNotificationListItems}
          selectedMarker={selectedMarker}
          selectedTheme={selectedTheme}
        />
      )}
    </>
  );
};

export default DashboardContainer;
