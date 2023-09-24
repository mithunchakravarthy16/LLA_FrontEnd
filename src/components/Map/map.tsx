/** @format */

// @ts-nocheck
import { useState, useEffect, Fragment, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  PolylineF,
  InfoWindowF,
  MarkerF,
  MarkerClusterer,
  MarkerClustererF,
  DrawingManager,
  Circle,
  Polygon,
} from "@react-google-maps/api";
import MapMarker from "components/Marker";
import customMapStyles from "./customMapStyles";
import customLightThemeMapStyles from "./customLightThemeMapStyles";
import theme from "../../theme/theme";
import appData from "../../data/appData";
import NotificationListItems from "components/NotificationListItems";
import ParkingEventIcon from "../../assets/markers/Parking-green.svg";
import ParkingIncidentIcon from "../../assets/markers/Parking-red.svg";
import ParkingAlertIcon from "../../assets/markers/Parking-orange.svg";
import EnergyManagemnetEventIcon from "../../assets/markers/energyManagementEvent.svg";
import EnergyManagementIncidentIcon from "../../assets/markers/Energy management-red.svg";
import EnergyManagementAlertIcon from "../../assets/markers/Energy management-orange.svg";
import SecurityEventIcon from "../../assets/markers/Security-green.svg";
import SecurityIncidentIcon from "../../assets/markers/Security-red.svg";
import SecutiryAlertIcon from "../../assets/markers/Security-orange.svg";
import LighteningEventIcon from "../../assets/markers/Lighting-green.svg";
import LighteningIncidentIcon from "../../assets/markers/Lighting-red.svg";
import LighteningAlertIcon from "../../assets/markers/Lighting-orange.svg";
import AssetTrackingEventIcon from "../../assets/markers/Assets Tracking-green.svg";
import AssetTrackingIncidentIcon from "../../assets/markers/Assets Tracking-red.svg";
import AssetTrackingAlertIcon from "../../assets/markers/Assets Tracking-orange.svg";
import EnergyManagementEventActiveIcon from "../../assets/selectedMarkers/energyManagementActiveGreen.svg";
import EnergyManagementIncidentActiveIcon from "../../assets/selectedMarkers/Energy management-red.svg";
import EnergyManagementAlertActiveIcon from "../../assets/selectedMarkers/Energy management-orange.svg";
import ParkingEventActiveIcon from "../../assets/selectedMarkers/Parking-green.svg";
import ParkingIncidentActiveIcon from "../../assets/selectedMarkers/Parking-red.svg";
import ParkingAlertActiveIcon from "../../assets/selectedMarkers/Parking-orange.svg";
import AssetTrackingEventActiveIcon from "../../assets/selectedMarkers/Assets Tracking-green.svg";
import AssetTrackingIncidentActiveIcon from "../../assets/selectedMarkers/Assets Tracking-red.svg";
import AssetTrackingAlertActiveIcon from "../../assets/selectedMarkers/Assets Tracking-orange.svg";
import SecurityEventActiveIcon from "../../assets/selectedMarkers/Security-green.svg";
import SecurityIncidentActiveIcon from "../../assets/selectedMarkers/Security-red.svg";
import SecurityAlertActiveIcon from "../../assets/selectedMarkers/Security-orange.svg";
import LightenEventActiveIcon from "../../assets/selectedMarkers/Lighting-green.svg";
import LightenIncidentActiveIcon from "../../assets/selectedMarkers/Lighting-red.svg";
import LightenAlertActiveIcon from "../../assets/selectedMarkers/Lighting-orange.svg";
import FleetEventIcon from "../../assets/markers/Fleet_event.svg";
import FleetIncidentIcon from "../../assets/markers/Fleet_incident.svg";
import FleetAlertIcon from "../../assets/markers/Fleet_alerts.svg";
import FleetHoverIcon from "../../assets/markers/fleetHoverNew.gif";
import MarkerClusterIcon from "../../assets/markerClusterIcon.png";
import AssetInactiveIcon from "../../assets/markers/Asset_Grey.svg";
import useStyles from "./styles";

const defaultCenter = { lat: 9.011771204307172, lng: -79.47691596842526 };

const center = { lat: 9.011771204307172, lng: -79.47691596842526 };

const parkingCenter = { lat: 9.011771204307172, lng: -79.47691596842526 };

const homePageParkingCenter = {
  lat: 9.011771204307172,
  lng: -79.47691596842526,
};

const fleetManagementCenter = {
  lat: 25.057066876525674,
  lng: 121.36458642272018,
};

const assetTrackingCenter = { lat: 9.011771204307172, lng: -79.47691596842526 };

const libraries = ["places", "drawing"];

const Map: React.FC<any> = (props) => {
  const location = useLocation();
console.log("test map", location.pathname)
  const {
    markers,
    setNotificationPanelActive,
    setSelectedNotification,
    marker,
    setTabIndex,
    currentMarker,
    setCurrentMarker,
    focusedCategory,
    mapPageName,
    setIsMarkerClicked,
    tabIndex,
    handleViewDetails,
    handleAssetViewDetails,
    handleVideoDetails,
    isDrawingEnable,
    isCircleDrawing,
    setCircleData,
    setCircleRadius,
    setCircleCenter,
    setIsCircleDrawing,
    setIsDrawingEnable,
    setPolygonPath,
    setPolygonData,
    circleRadius,
    circleCenter,
    handleGeofenceCircleDrag,
    circleRadiusUnits,
    setCircleRadiusUnits,
    polygonPath,
    onCircleCompleteLocation,
    onPolygonCompleteLocation,
    selectedTheme,
    setMap,
    map,
    dataPoints,
    handleMarkerCancel,
    handleMarkerIconClick,
    selectedNotification,
    liveMarkerList,
    listSelectedMarker,
    setListSelectedMarker,
    selectedNotificationItem,
    setSelectedNotificationItem,
    isMarkerClicked,
    setMapType,
    mapType,
  } = props;

  // const [selectedTheme, setSelectedTheme] = useState(
  //   JSON.parse(localStorage.getItem("theme")!)
  // );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const { googleMapStyle, footerSection } = useStyles({
    ...appTheme,
    mapPageName: mapPageName,
  });

  useEffect(() => {
    map?.setMapTypeId(mapType);
  }, [map, mapType]);

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

  // const [map, setMap] = useState<any>(null);
  // const [zoomValue, setZoomValue] = useState<number>(15);
  const [selectedContainerStyle, setSelectedContainerStyle] = useState<any>();
  const [selectedMarker, setSelectedMarker] = useState<any>();
  const [selectedListItemSource, setSelectedListItemSource] = useState<any>();
  const [selectedListItemDestination, setSelectedListItemDestination] =
    useState<any>();
  const [progress, setProgress] = useState<any>([]);
  let [points, setPoints] = useState<any>([]);
  let [data, setData] = useState<any>(points);
  const velocity: any = 20;
  const initialDate: any = new Date();
  const [assetLiveMarker, setAssetLiveMarker] = useState<any>("");

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: libraries,
  });

  const parkingMapContainerStyle = {
    width: "100%",
    height: "60vh",
  };

  useEffect(() => {
    if (window.innerWidth > 3839) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : mapPageName === "fleetManagement"
            ? "calc(100vh - 800px)"
            : mapPageName === "Asset Tracking"
            ? "calc(100vh - 708px)"
            : "calc(100vh - 924px)",
        is4kDevice: true,
        is3kDevice: false,
      });
    } else if (window.innerWidth > 3071) {
      setSelectedContainerStyle({
        width: "100%",
        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : mapPageName === "Asset Tracking"
            ? "calc(100vh - 750px)"
            : "calc(100vh - 1049px)",
        is4kDevice: false,
        is3kDevice: true,
      });
    } else if (window.innerHeight > 1279) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : mapPageName === "Asset Tracking"
            ? "calc(100vh - 422px)"
            : "calc(100vh - 579px)",
        is4kDevice: false,
        is3kDevice: false,
      });
    } else if (window.innerWidth > 2559) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : "calc(100vh - 364px)",
        is4kDevice: false,
        is3kDevice: false,
      });
    } else if (window.innerWidth > 2047) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : mapPageName === "Asset Tracking"
            ? "calc(100vh - 500px)"
            : "calc(100vh - 1049px)",
      });
    } else if (window.innerHeight > 1119) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : mapPageName === "Asset Tracking"
            ? "calc(100vh - 368px)"
            : "calc(100vh - 469px)",
        is4kDevice: false,
      });
    } else if (window.innerHeight > 1023) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : mapPageName === "Asset Tracking"
            ? "calc(100vh - 362px)"
            : "calc(100vh - 459px)",
        is4kDevice: false,
      });
    } else if (window.innerHeight > 936) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : mapPageName === "Asset Tracking"
            ? "calc(100vh - 360px)"
            : "calc(100vh - 430px)",
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1791) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : "calc(100vh - 499px)",
        is4kDevice: false,
        is3kDevice: false,
      });
    } else if (window.innerWidth > 1679) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : "calc(100vh - 470px)",
        is4kDevice: false,
        is3kDevice: false,
      });
    } else if (window.innerWidth > 1599) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : "calc(100vh - 292px)",
        is4kDevice: false,
        is3kDevice: false,
      });
    } else if (window.innerWidth > 1535) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : "calc(100vh - 431px)",
        is4kDevice: false,
        is3kDevice: false,
      });
    } else if (window.innerWidth > 1439) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : "calc(100vh - 298px)",
        is4kDevice: false,
        is3kDevice: false,
      });
    } else if (window.innerHeight > 1049) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : "calc(100vh - 499px)",
        is4kDevice: false,
        is3kDevice: false,
      });
    } else if (window.innerWidth > 1359) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : "calc(100vh - 356px)",
        is4kDevice: false,
        is3kDevice: false,
      });
    } else if (window.innerWidth > 1343) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : "calc(100vh - 384px)",
        is4kDevice: false,
        is3kDevice: false,
      });
    } else if (window.innerHeight > 959) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : "calc(100vh - 474px)",
        is4kDevice: false,
        is3kDevice: false,
      });
    } else if (window.innerHeight > 863) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : "calc(100vh - 408px)",
        is4kDevice: false,
        is3kDevice: false,
      });
    } else if (window.innerHeight > 799) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : "calc(100vh - 333px)",
        is4kDevice: false,
        is3kDevice: false,
      });
    } else if (window.innerHeight > 767) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : "calc(100vh - 244px)",
        is4kDevice: false,
        is3kDevice: false,
      });
    } else if (window.innerHeight > 719) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : "calc(100vh - 314px)",
        is4kDevice: false,
        is3kDevice: false,
      });
    } else if (window.innerHeight > 1023) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : "calc(100vh - 420px)",
        is4kDevice: false,
        is3kDevice: false,
      });
    } else if (window.innerHeight > 599) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : "calc(100vh - 260px)",
        is4kDevice: false,
        is3kDevice: false,
      });
    } else if (window.innerWidth > 1279) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : "calc(100vh - 358px)",

        is4kDevice: false,
        is3kDevice: false,
      });
    } else if (window.innerWidth > 1151) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : "calc(100vh - 320px)",
        is4kDevice: false,
        is3kDevice: false,
      });
    } else if (window.innerWidth > 1023) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : "calc(100vh - 272px)",

        is4kDevice: false,
        is3kDevice: false,
      });
    } else if (window.innerWidth > 767) {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : "calc(100vh - 353px)",
        is4kDevice: false,
        is3kDevice: false,
      });
    } else {
      setSelectedContainerStyle({
        width: "100%",

        height:
          mapPageName === "dashboard"
            ? "calc(100vh - 0px)"
            : "calc(100vh - 400px)",
        is4kDevice: false,
        is3kDevice: false,
      });
    }
  }, [window.innerWidth, window.innerHeight]);

  const [zoomValue, setZoomValue] = useState(
    selectedContainerStyle?.is4kDevice
      ? 16.2
      : selectedContainerStyle?.is3kDevice
      ? 16.2
      : selectedContainerStyle?.is4kDevice && location?.pathname !== "/home"
      ? 16
      : location?.pathname === "/parking"
      ? 17
      : 17
  );

  useEffect(() => {
    setAssetLiveMarker(marker);
    const selectMarker = markers?.find((item: any) => item.id === marker);
    setSelectedMarker(selectMarker);
  }, [marker]);

  useEffect(() => {
    if (selectedMarker) {
      setSelectedListItemSource(selectedMarker?.source);
      setSelectedListItemDestination(selectedMarker?.destination);
    } else {
      setProgress([]);
      setPoints([]);
      setData([]);
      setSelectedMarker("");
      setSelectedListItemSource("");
      setSelectedListItemDestination("");
    }
  }, [selectedMarker]);

  useEffect(() => {
    if (currentMarker) {
      const index = markers.findIndex((marker) => marker.id === currentMarker);
      map?.setZoom(
        selectedContainerStyle?.is4kDevice || selectedContainerStyle?.is3kDevice
          ? 16.2
          : (selectedContainerStyle?.is4kDevice ||
              selectedContainerStyle?.is3kDevice) &&
            location?.pathname !== "/home"
          ? 16
          : 17
      );
      map?.panTo(markers[index]?.location);
    } else {
      map?.panTo(
        location?.pathname === "/home"
          ? homePageParkingCenter
          : location?.pathname === "/fleetManagement"
          ? fleetManagementCenter
          : location?.pathname === "/assetTracking"
          ? assetTrackingCenter
          : location?.pathname === "/parking"
          ? parkingCenter
          : center
      );
      map?.setZoom(
        selectedContainerStyle?.is4kDevice || selectedContainerStyle?.is3kDevice
          ? 16.2
          : (selectedContainerStyle?.is4kDevice ||
              selectedContainerStyle?.is3kDevice) &&
            location?.pathname !== "/home"
          ? 16
          : location?.pathname === "/parking"
          ? 17
          : 17
      );
    }
  }, [currentMarker, markers]);

  const getMapTypeControls = () => {
    const defaultMapOptions = {
      styles:
        selectedTheme === "light" ? customLightThemeMapStyles : customMapStyles,
    };
    return {
      ...defaultMapOptions,
      mapTypeControl: true,
      rotateControl: false,
      fullscreenControl: false,
      zoomControl: true,
      streetViewControl: false,
      disableDefaultUI: false,
      mapTypeControlOptions: {
        // style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,

        // position: window.google.maps.ControlPosition.LEFT_BOTTOM,

        mapTypeIds: [
          window.google.maps.MapTypeId.ROADMAP,

          window.google.maps.MapTypeId.SATELLITE,

          window.google.maps.MapTypeId.HYBRID,
        ],
      },
    };
  };

  const getMarkerIcon = (
    category: string,
    notificationCategory: string,
    id: string,
    marker: any
  ) => {
    switch (notificationCategory) {
      case "Events": {
        switch (category) {
          case "parking":
            // return currentMarker === id
            //   ? ParkingEventActiveIcon
            //   : ParkingEventIcon;
            return ParkingEventIcon;
          case "energy":
            return currentMarker === id
              ? EnergyManagementEventActiveIcon
              : EnergyManagemnetEventIcon;
          case "security":
            return currentMarker === id
              ? SecurityEventActiveIcon
              : SecurityEventIcon;
          case "lighting":
            return currentMarker === id
              ? LightenEventActiveIcon
              : LighteningEventIcon;
          case "asset":
            // return (currentMarker === id || assetLiveMarker === id)
            //   ? AssetTrackingEventActiveIcon
            //   : AssetTrackingEventIcon;
            return AssetTrackingEventIcon;
          case "fleet":
            // return focusedCategory === "fleet" ? FleetHoverIcon : currentMarker === id ? FleetEventIcon : FleetEventIcon;
            return currentMarker === id ? FleetEventIcon : FleetEventIcon;
          default:
            return ParkingEventIcon;
        }
      }
      case "Alerts": {
        switch (category) {
          case "parking":
            // return currentMarker === id
            //   ? ParkingAlertActiveIcon
            //   : ParkingAlertIcon;
            return ParkingAlertIcon;
          case "energy":
            return currentMarker === id
              ? EnergyManagementAlertActiveIcon
              : EnergyManagementAlertIcon;
          case "security":
            return currentMarker === id
              ? SecurityAlertActiveIcon
              : SecutiryAlertIcon;
          case "lighting":
            return currentMarker === id
              ? LightenAlertActiveIcon
              : LighteningAlertIcon;
          case "asset":
            // return (currentMarker === id || assetLiveMarker === id)
            //   ? AssetTrackingAlertActiveIcon
            //   : AssetTrackingAlertIcon;
            return AssetTrackingAlertIcon;
          case "fleet":
            // return focusedCategory === "fleet" ? FleetHoverIcon : currentMarker === id ? FleetAlertIcon : FleetAlertIcon;
            return currentMarker === id ? FleetAlertIcon : FleetAlertIcon;
          default:
            return ParkingAlertIcon;
        }
        break;
      }
      case "Incident": {
        switch (category) {
          case "parking":
            // return currentMarker === id
            //   ? ParkingIncidentActiveIcon
            //   : ParkingIncidentIcon;
            return ParkingIncidentIcon;
          case "energy":
            return currentMarker === id
              ? EnergyManagementIncidentActiveIcon
              : EnergyManagementIncidentIcon;
          case "security":
            return currentMarker === id
              ? SecurityIncidentActiveIcon
              : SecurityIncidentIcon;
          case "lighting":
            return currentMarker === id
              ? LightenIncidentActiveIcon
              : LighteningIncidentIcon;
          case "asset":
            // return (currentMarker === id || assetLiveMarker === id)
            //   ? AssetTrackingIncidentActiveIcon
            //   : AssetTrackingIncidentIcon;
            return AssetTrackingIncidentIcon;
          case "fleet":
            //return focusedCategory === "fleet" ? FleetHoverIcon :  currentMarker === id ? FleetIncidentIcon : FleetIncidentIcon;
            return currentMarker === id ? FleetIncidentIcon : FleetIncidentIcon;
          default:
            return ParkingIncidentIcon;
        }
      }
      case "Inactive": {
        switch (category) {
          case "asset":
            return AssetInactiveIcon;
          default:
            return ParkingIncidentIcon;
        }
      }
      default:
        return AssetInactiveIcon;
    }
  };

  const getTabIndex = (type: string) => {
    switch (type) {
      case "Events":
        return 0;
      case "Incident":
        return 1;
      case "Alerts":
        return 2;
    }
  };

  const toggleInfoWindow = (
    markerId: string,
    type: string,
    location: any,
    tripId: any,
    category: string
  ) => {
    setIsMarkerClicked(true);

    // setAssetLiveMarker("")
    setNotificationPanelActive(true);
    setTabIndex(getTabIndex(type));
    setAssetLiveMarker((prev: any) => {
      if (prev && prev === markerId) {
        map?.panTo(
          location?.pathname === "/home"
            ? homePageParkingCenter
            : location?.pathname === "/fleetManagement"
            ? fleetManagementCenter
            : location?.pathname === "/assetTracking"
            ? assetTrackingCenter
            : location?.pathname === "/parking"
            ? parkingCenter
            : center
        );
        return "";
      } else {
        map?.panTo(location);
        return markerId;
      }
    });

    setSelectedNotification((prev: any) => {
      return prev && prev == markerId ? "" : markerId;
    });
    location?.pathname === "/fleetManagement" && handleMarkerIconClick(tripId);
  };

  const handleMarkerClose = () => {
    setAssetLiveMarker("");
    setIsMarkerClicked(false);
    setListSelectedMarker("");
    setSelectedNotification("");

    map?.panTo(
      location?.pathname === "/home"
        ? homePageParkingCenter
        : location?.pathname === "/fleetManagement"
        ? fleetManagementCenter
        : location?.pathname === "/assetTracking"
        ? assetTrackingCenter
        : location?.pathname === "/parking"
        ? parkingCenter
        : center
    );
    map?.setZoom(
      selectedContainerStyle?.is4kDevice
        ? 16.2
        : location?.pathname === "/parking"
        ? 17
        : 17
    );
    setProgress([]);
    setPoints([]);
    setData([]);
    setSelectedMarker("");
    setSelectedListItemSource("");
    setSelectedListItemDestination("");
    location?.pathname === "/fleetManagement" && handleMarkerCancel();
  };

  const handleExpandListItem = (id: any, markerId: any, data: any) => {
    // setSelectedNotification(id);
    // // setAssetLiveMarker(markerId);
    // setListSelectedMarker(markerId)
    // // setIsMarkerClicked(true)
  };

  useEffect(() => {
    setProgress([]);
    setPoints([]);
    setData([]);
    setSelectedMarker("");
    setSelectedListItemSource("");
    setSelectedListItemDestination("");
  }, [tabIndex]);

  let lineSymbol = {
    path: "M 0,-1 0,1",
    strokeOpacity: 10,
    scale: 4,
  };

  const icon1 = {
    url: FleetEventIcon,
    scaledSize:
      window.google &&
      window.google.maps &&
      new window.google.maps.Size(60, 60),
    anchor:
      window.google &&
      window.google.maps &&
      new window.google.maps.Point(30, 30),
    scale: 0.7,
  };

  // geofence code -- start

  const options: any = {
    drawingControl: false,
    drawingControlOptions: {
      drawingModes: [
        window &&
          window.google &&
          window.google.maps &&
          window.google.maps.drawing &&
          window.google.maps.drawing.OverlayType.POLYGON,
        window &&
          window.google &&
          window.google.maps &&
          window.google.maps.drawing &&
          window.google.maps.drawing.OverlayType.CIRCLE,
      ],
    },
    polygonOptions: {
      fillColor: "#F26522",
      fillOpacity: 0.1,
      strokeWeight: 2,
      strokeColor: "#F26522",
      clickable: false,
      editable: false,
      geodesic: false,
      visible: true,
      zIndex: 1,
    },
    circleOptions: {
      fillColor: `#F26522`,
      fillOpacity: 0.1,
      strokeWeight: 2,
      strokeColor: "#F26522",
      clickable: false,
      editable: false,
      zIndex: 1,
    },
  };

  const drawModeOptions: any = [
    window &&
      window.google &&
      window.google.maps &&
      window.google.maps.drawing &&
      window.google.maps.drawing.OverlayType.POLYGON,
    window &&
      window.google &&
      window.google.maps &&
      window.google.maps.drawing &&
      window.google.maps.drawing.OverlayType.CIRCLE,
  ];

  const onPolygonComplete = (data: any) => {
    let array: [] = data.getPath().getArray();
    let points: any = [];
    array.forEach((item: any) => {
      points.push({ lat: item.lat(), lng: item.lng() });
    });
    setPolygonData(data);
    setPolygonPath(points);
    onPolygonCompleteLocation(points);
  };

  const onCircleComplete = (data: any) => {
    if (isCircleDrawing) {
      setCircleRadius(data.getRadius());
      setCircleCenter({
        lat: data.getCenter().lat(),
        lng: data.getCenter().lng(),
      });
      setCircleRadiusUnits(data.getRadius());
      setCircleData(data);
    }
    const centerCoOrdinates = {
      lat: data.getCenter().lat(),
      lng: data.getCenter().lng(),
    };
    onCircleCompleteLocation(centerCoOrdinates, data.getRadius());
  };

  const handleOverlayComplete = () => {
    setIsDrawingEnable(false);
    map?.setZoom(13.5);
  };

  const handleCircleDrag = (event: any) => {
    setCircleCenter({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
    const center = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    handleGeofenceCircleDrag(center);
  };

  // geofence code -- end

  function handleZoomChanged() {
    // console.log("handleZoomChanged", this.getZoom()) //this refers to Google Map instance
  }
  useEffect(() => {
    if (
      marker === "" &&
      assetLiveMarker === "" &&
      listSelectedMarker === "" &&
      (selectedNotificationItem === "" ||
      selectedNotification === "")
    ) {
      map?.setZoom(17);
      map?.panTo(parkingCenter);
    }
  }, [
    marker,
    markers,
    assetLiveMarker,
    selectedNotificationItem,
    listSelectedMarker,
    selectedNotification,
  ]);

  const handleLiveMarkerIcon = (id: any, location: any, data: any) => {
    if (data?.category === "parking" || location?.pathname === "/parking") {
      setNotificationPanelActive(true);
      setListSelectedMarker(id);
      setTabIndex(getTabIndex(data?.notificationType));
      setSelectedNotification(id);
    }
    setSelectedNotificationItem(data);
    setIsMarkerClicked(true);

    setAssetLiveMarker(id);
    setListSelectedMarker(id)
    // setAssetLiveMarker(assetLiveMarker === id ? "" : id);
    map?.panTo(location);
  };

  const handleLiveMarkerClose = () => {
    setCurrentMarker("");
    setSelectedNotification("");
    setListSelectedMarker("");
    setIsMarkerClicked(false);
    setAssetLiveMarker("");
    setSelectedNotificationItem("");
    map?.panTo(
      location?.pathname === "/home"
        ? defaultCenter
        : location?.pathname === "/fleetManagement"
        ? fleetManagementCenter
        : location?.pathname === "/assetTracking"
        ? assetTrackingCenter
        : center
    );
    map?.setZoom(selectedContainerStyle?.is4kDevice ? 16.2 : 17);
    setSelectedMarker("");
  };

  useEffect(() => {
    if (selectedNotification || selectedNotificationItem) {
      map?.panTo(
        selectedNotificationItem?.currentLocation
          ? selectedNotificationItem?.currentLocation
          : selectedNotificationItem?.location
      );
    }
    if(selectedNotificationItem && selectedNotificationItem?.category === "asset"){
      if(isMarkerClicked) {
        setSelectedNotification("")
      }
    }

  }, [selectedNotification, selectedNotificationItem]);

  const handleMapTypeChanged = () => {
    if (map) {
      const newMapType = map.getMapTypeId();
      setMapType(newMapType);
    }
  };

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={
            mapPageName === "parking" ||
            mapPageName === "energy" ||
            mapPageName === "security" ||
            mapPageName === "fleet" ||
            mapPageName === "lighting" ||
            mapPageName === "asset"
              ? parkingMapContainerStyle
              : selectedContainerStyle
          }
          center={
            location?.pathname === "/home"
              ? homePageParkingCenter
              : location?.pathname === "/fleetManagement"
              ? fleetManagementCenter
              : location?.pathname === "/assetTracking"
              ? assetTrackingCenter
              : location?.pathname === "/parking"
              ? parkingCenter
              : center
          }
          zoom={zoomValue}
          onLoad={setMap}
          options={getMapTypeControls()}
          mapContainerClassName={googleMapStyle}
          onZoomChanged={handleZoomChanged}
          onMapTypeIdChanged={handleMapTypeChanged}
        >
          <DrawingManager
            drawingMode={
              isDrawingEnable
                ? isCircleDrawing
                  ? drawModeOptions[1]
                  : drawModeOptions[0]
                : null
            }
            onPolygonComplete={onPolygonComplete}
            onCircleComplete={onCircleComplete}
            onOverlayComplete={handleOverlayComplete}
            options={options}
          />
          {circleRadius !== null && (
            <Circle
              radius={circleRadius}
              center={circleCenter}
              visible={true}
              onDragEnd={handleCircleDrag}
              options={{
                fillColor: "#F26522",
                fillOpacity: 0.1,
                strokeWeight: 2,
                strokeColor: "#F26522",
                clickable: tabIndex === 0 ? false : true,
                editable: false,
                draggable: true,
                zIndex: 1,
              }}
            />
          )}
          {polygonPath?.length > 0 && (
            <Polygon
              path={polygonPath}
              options={{
                fillColor: "#F26522",
                fillOpacity: 0.1,
                strokeWeight: 2,
                strokeColor: "#F26522",
                clickable: false,
                editable: false,
                geodesic: false,
                visible: true,
                draggable: false,
                zIndex: 1,
              }}
            />
          )}

          {marker === "" && mapPageName !== "asset" ? (
            <MarkerClustererF
              averageCenter
              enableRetinaIcons
              maxZoom={selectedContainerStyle?.is4kDevice ? 16.2 : 20}
              gridSize={selectedContainerStyle?.is4kDevice ? 80 : 40}
              // styles={[
              //   {
              //     url: MarkerClusterIcon,
              //     height: 45,
              //     width: 45,
              //     textColor : selectedTheme === "light" ? "#000" : "#FFF",
              //     textSize:16,

              //   },
              // ]}
            >
              {(clusterer: any) => (
                <div>
                  {liveMarkerList?.map((singleMarker: any) => {
                    // if (!window.google) return null;
                    if (
                      singleMarker?.tripStatus === "Live" &&
                      singleMarker?.tripId &&
                      singleMarker?.reason
                    ) {
                      return (
                        <>
                          <MapMarker
                            selectedNotification={selectedNotification}
                            mapMarker={singleMarker}
                            toggleInfoWindow={toggleInfoWindow}
                            handleMarkerClose={handleMarkerClose}
                            handleExpandListItem={handleExpandListItem}
                            getMarkerIcon={getMarkerIcon}
                            currentMarker={currentMarker}
                            focusedCategory={focusedCategory}
                            clusterer={clusterer}
                            location={singleMarker?.currentLocation}
                            handleAssetViewDetails={handleAssetViewDetails}
                            mapPageName={mapPageName}
                            selectedTheme={selectedTheme}
                            handleViewDetails={handleViewDetails}
                            handleVideoDetails={handleVideoDetails}
                            setSelectedNotification={setSelectedNotification}
                            setIsMarkerClicked={setIsMarkerClicked}
                            markers={markers}
                            assetLiveMarker={assetLiveMarker}
                            setAssetLiveMarker={setAssetLiveMarker}
                            handleLiveMarkerIcon={handleLiveMarkerIcon}
                            handleLiveMarkerClose={handleLiveMarkerClose}
                            listSelectedMarker={listSelectedMarker}
                            selectedNotificationItem={selectedNotificationItem}
                          />
                        </>
                      );
                    } else if (
                      singleMarker?.category !== "fleet" &&
                      location?.pathname !== "/fleetManagement"
                    ) {
                      return (
                        <>
                          <MapMarker
                            selectedNotification={selectedNotification}
                            mapMarker={singleMarker}
                            toggleInfoWindow={toggleInfoWindow}
                            handleMarkerClose={handleMarkerClose}
                            handleExpandListItem={handleExpandListItem}
                            getMarkerIcon={getMarkerIcon}
                            currentMarker={currentMarker}
                            focusedCategory={focusedCategory}
                            clusterer={clusterer}
                            location={singleMarker?.currentLocation}
                            handleAssetViewDetails={handleAssetViewDetails}
                            mapPageName={mapPageName}
                            handleViewDetails={handleViewDetails}
                            handleVideoDetails={handleVideoDetails}
                            selectedTheme={selectedTheme}
                            setIsMarkerClicked={setIsMarkerClicked}
                            markers={markers}
                            assetLiveMarker={assetLiveMarker}
                            setAssetLiveMarker={setAssetLiveMarker}
                            handleLiveMarkerIcon={handleLiveMarkerIcon}
                            handleLiveMarkerClose={handleLiveMarkerClose}
                            liveMarkerList={liveMarkerList}
                            listSelectedMarker={listSelectedMarker}
                            isMarkerClicked={isMarkerClicked}
                            selectedNotificationItem={selectedNotificationItem}
                          />
                        </>
                      );
                    }
                  })}
                </div>
              )}
            </MarkerClustererF>
          ) : (
            <div>
              {liveMarkerList?.map((singleMarker: any) => {
                // if (!window.google) return null;
                if (
                  singleMarker?.tripStatus === "Live" &&
                  singleMarker?.tripId &&
                  singleMarker?.reason
                ) {
                  return (
                    <>
                      <MapMarker
                        selectedNotification={selectedNotification}
                        mapMarker={singleMarker}
                        toggleInfoWindow={toggleInfoWindow}
                        handleMarkerClose={handleMarkerClose}
                        handleExpandListItem={handleExpandListItem}
                        getMarkerIcon={getMarkerIcon}
                        currentMarker={currentMarker}
                        focusedCategory={focusedCategory}
                        // clusterer={clusterer}
                        location={singleMarker?.currentLocation}
                        handleAssetViewDetails={handleAssetViewDetails}
                        mapPageName={mapPageName}
                        selectedTheme={selectedTheme}
                        handleViewDetails={handleViewDetails}
                        handleVideoDetails={handleVideoDetails}
                        setIsMarkerClicked={setIsMarkerClicked}
                        markers={markers}
                        assetLiveMarker={assetLiveMarker}
                        setAssetLiveMarker={setAssetLiveMarker}
                        handleLiveMarkerIcon={handleLiveMarkerIcon}
                        handleLiveMarkerClose={handleLiveMarkerClose}
                        listSelectedMarker={listSelectedMarker}
                        selectedNotificationItem={selectedNotificationItem}
                      />
                    </>
                  );
                } else if (
                  singleMarker?.category !== "fleet" &&
                  location?.pathname !== "/fleetManagement"
                ) {
                  return (
                    <>
                      <MapMarker
                        selectedNotification={selectedNotification}
                        mapMarker={singleMarker}
                        toggleInfoWindow={toggleInfoWindow}
                        handleMarkerClose={handleMarkerClose}
                        handleExpandListItem={handleExpandListItem}
                        getMarkerIcon={getMarkerIcon}
                        currentMarker={currentMarker}
                        focusedCategory={focusedCategory}
                        // clusterer={clusterer}
                        location={singleMarker?.currentLocation}
                        handleAssetViewDetails={handleAssetViewDetails}
                        mapPageName={mapPageName}
                        handleViewDetails={handleViewDetails}
                        handleVideoDetails={handleVideoDetails}
                        selectedTheme={selectedTheme}
                        setIsMarkerClicked={setIsMarkerClicked}
                        markers={markers}
                        assetLiveMarker={assetLiveMarker}
                        setAssetLiveMarker={setAssetLiveMarker}
                        handleLiveMarkerIcon={handleLiveMarkerIcon}
                        handleLiveMarkerClose={handleLiveMarkerClose}
                        listSelectedMarker={listSelectedMarker}
                        selectedNotificationItem={selectedNotificationItem}
                      />
                    </>
                  );
                }
              })}

              {location?.pathname === "/fleetManagement" &&
                dataPoints &&
                dataPoints.length > 0 && (
                  <PolylineF
                    path={dataPoints}
                    options={{
                      strokeColor: "#976C9E",
                      strokeOpacity: 10,
                      strokeWeight: 0,
                      icons: [
                        {
                          icon: lineSymbol,
                          offset: "0",
                          repeat: "20px",
                        },
                      ],
                    }}
                  />
                )}

              {location?.pathname === "/fleetManagement" &&
                dataPoints &&
                dataPoints?.length > 0 && (
                  <>
                    <PolylineF
                      path={dataPoints}
                      options={{
                        strokeColor: "#73B35A",
                        strokeOpacity: 10,
                        strokeWeight: 4,
                      }}
                    />
                    {selectedMarker && (
                      <MapMarker
                        selectedNotification={selectedNotification}
                        mapMarker={selectedMarker}
                        toggleInfoWindow={toggleInfoWindow}
                        handleMarkerClose={handleMarkerClose}
                        handleExpandListItem={handleExpandListItem}
                        getMarkerIcon={getMarkerIcon}
                        currentMarker={currentMarker}
                        focusedCategory={focusedCategory}
                        location={dataPoints[dataPoints.length - 1]}
                        direction={"NE"}
                        pageName={"FleetManagement"}
                        handleViewDetails={handleViewDetails}
                        handleVideoDetails={handleVideoDetails}
                        mapPageName={mapPageName} // === "dashboard"
                        selectedTheme={selectedTheme}
                        setIsMarkerClicked={setIsMarkerClicked}
                        markers={markers}
                        assetLiveMarker={assetLiveMarker}
                        setAssetLiveMarker={setAssetLiveMarker}
                        handleLiveMarkerIcon={handleLiveMarkerIcon}
                        handleLiveMarkerClose={handleLiveMarkerClose}
                        listSelectedMarker={listSelectedMarker}
                        selectedNotificationItem={selectedNotificationItem}
                      />
                    )}
                    {/* <Marker position={dataPoints[dataPoints.length - 1]} /> */}
                  </>
                )}
            </div>
          )}
        </GoogleMap>
      )}
    </>
  );
};

export default Map;
