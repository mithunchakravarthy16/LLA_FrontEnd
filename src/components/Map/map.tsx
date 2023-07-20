/** @format */

// @ts-nocheck
import { useState, useEffect, Fragment } from "react";
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
import useStyles from "./styles";

const defaultCenter = {
  lat: 39.75525065792099,
  lng: -105.00248276374698,
};

const center = {
  lat: 39.75576345655451,
  lng: -105.00357749556102,
};

const libraries = ["places", "drawing"];

const Map: React.FC<any> = (props) => {
  const location = useLocation();

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

  const [map, setMap] = useState<any>(null);
  const [zoomValue, setZoomValue] = useState<number>();
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

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: appData?.googleApiKey, //"AIzaSyCmwqbYb48dfmPqYiWWU0A2kRr54I2L3wE",
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
            : "calc(100vh - 531px)",
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
            : "calc(100vh - 416px)",
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
            : "calc(100vh - 406px)",
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
            : "calc(100vh - 324px)",
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

  useEffect(() => {
    setCurrentMarker(marker);
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
          ? 15
          : 15
      );
      map?.panTo(markers[index]?.location);
    } else {
      map?.panTo(location?.pathname === "/home" ? defaultCenter : center);
      map?.setZoom(
        selectedContainerStyle?.is4kDevice || selectedContainerStyle?.is3kDevice
          ? 16.2
          : (selectedContainerStyle?.is4kDevice ||
              selectedContainerStyle?.is3kDevice) &&
            location?.pathname !== "/home"
          ? 15
          : 15
      );
    }
  }, [currentMarker]);

  const getMapTypeControls = () => {
    const defaultMapOptions = {
      styles:
        selectedTheme === "light" ? customLightThemeMapStyles : customMapStyles,
    };
    return {
      ...defaultMapOptions,
      mapTypeControl: false,
      rotateControl: false,
      fullscreenControl: false,
      zoomControl: false,
      streetViewControl: false,
      disableDefaultUI: false,
    };
  };

  const getMarkerIcon = (
    category: string,
    notificationCategory: string,
    id: string
  ) => {
    switch (notificationCategory) {
      case "event": {
        switch (category) {
          case "parking":
            return currentMarker === id
              ? ParkingEventActiveIcon
              : ParkingEventIcon;
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
            return currentMarker === id
              ? AssetTrackingEventActiveIcon
              : AssetTrackingEventIcon;
          case "fleet":
            // return focusedCategory === "fleet" ? FleetHoverIcon : currentMarker === id ? FleetEventIcon : FleetEventIcon;
            return currentMarker === id ? FleetEventIcon : FleetEventIcon;
          default:
            return ParkingEventIcon;
        }
      }
      case "oprAlert": {
        switch (category) {
          case "parking":
            return currentMarker === id
              ? ParkingAlertActiveIcon
              : ParkingAlertIcon;
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
            return currentMarker === id
              ? AssetTrackingAlertActiveIcon
              : AssetTrackingAlertIcon;
          case "fleet":
            // return focusedCategory === "fleet" ? FleetHoverIcon : currentMarker === id ? FleetAlertIcon : FleetAlertIcon;
            return currentMarker === id ? FleetAlertIcon : FleetAlertIcon;
          default:
            return ParkingAlertIcon;
        }
        break;
      }
      case "incident": {
        switch (category) {
          case "parking":
            return currentMarker === id
              ? ParkingIncidentActiveIcon
              : ParkingIncidentIcon;
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
            return currentMarker === id
              ? AssetTrackingIncidentActiveIcon
              : AssetTrackingIncidentIcon;
          case "fleet":
            //return focusedCategory === "fleet" ? FleetHoverIcon :  currentMarker === id ? FleetIncidentIcon : FleetIncidentIcon;
            return currentMarker === id ? FleetIncidentIcon : FleetIncidentIcon;
          default:
            return ParkingIncidentIcon;
        }
      }
      default:
        return ParkingIncidentIcon;
    }
  };

  const getTabIndex = (type: string) => {
    switch (type) {
      case "event":
        return 0;
      case "incident":
        return 1;
      case "oprAlert":
        return 2;
    }
  };

  const toggleInfoWindow = (markerId: string, type: string, location: any) => {
    setIsMarkerClicked(true);
    setNotificationPanelActive(true);
    setTabIndex(getTabIndex(type));
    setCurrentMarker((prev: any) => {
      if (prev && prev === markerId) {
        map?.panTo(location?.pathname === "/home" ? defaultCenter : center);
        return "";
      } else {
        map?.panTo(location);
        return markerId;
      }
    });
    setSelectedNotification((prev: any) => {
      return prev && prev == markerId ? "" : markerId;
    });
  };

  const handleMarkerClose = () => {
    setSelectedNotification("");
    setIsMarkerClicked(false);
    map?.panTo(location?.pathname === "/home" ? defaultCenter : center);
    map?.setZoom(selectedContainerStyle?.is4kDevice ? 16.2 : 15);
    setProgress([]);
    setPoints([]);
    setData([]);
    setSelectedMarker("");
    setSelectedListItemSource("");
    setSelectedListItemDestination("");
  };

  const handleExpandListItem = () => {
    setSelectedNotification("");
  };

  useEffect(() => {
    setProgress([]);
    setPoints([]);
    setData([]);
    setSelectedMarker("");
    setSelectedListItemSource("");
    setSelectedListItemDestination("");
  }, [tabIndex]);

  // Moving Marker code

  const calculatePath = () => {
    data = points.map((coordinates: any, i: any, array: any) => {
      if (i === 0) {
        return { ...coordinates, distance: 0 }; // it begins here!
      }
      const { lat: lat1, lng: lng1 } = coordinates;
      const latLong1 = new window.google.maps.LatLng(lat1, lng1);

      const { lat: lat2, lng: lng2 } = array[0];
      const latLong2 = new window.google.maps.LatLng(lat2, lng2);

      // in meters:
      const distance =
        window.google.maps.geometry.spherical.computeDistanceBetween(
          latLong1,
          latLong2
        );
      return { ...coordinates, distance };
    });
    setData(data);
  };

  const getDistance = () => {
    const date: any = new Date();
    const differentInTime = (date - initialDate) / 1000; // pass to seconds
    return differentInTime * velocity; // d = v*t -- thanks Newton!
  };

  const moveObject = () => {
    const distance = getDistance();
    if (!distance) {
      return;
    }
    let progress = data.filter(
      (coordinates: any) => coordinates.distance < distance
    );

    const nextLine = data.find(
      (coordinates: any) => coordinates.distance > distance
    );

    if (!nextLine) {
      setProgress(progress);
      // window.clearInterval(interval);
      return; // it's the end!
    }
    const lastLine = progress[progress.length - 1];

    const lastLineLatLng = new window.google.maps.LatLng(
      lastLine.lat,
      lastLine.lng
    );

    const nextLineLatLng = new window.google.maps.LatLng(
      nextLine.lat,
      nextLine.lng
    );

    // distance of this line
    const totalDistance = nextLine.distance - lastLine.distance;
    const percentage = (distance - lastLine.distance) / totalDistance;

    const position = window.google.maps.geometry.spherical.interpolate(
      lastLineLatLng,
      nextLineLatLng,
      percentage
    );

    const angle = window.google.maps.geometry.spherical.computeHeading(
      lastLineLatLng,
      nextLineLatLng
    );
    const actualAngle = angle - 90;

    // const marker = document.querySelector(`[src="${FleetEventIcon}"]`);

    // if (marker) {
    //   // when it hasn't loaded, it's null
    //   marker.style.transform = `rotate(${actualAngle}deg)`;
    // }
    progress = progress.concat(position);

    setProgress(progress);
  };

  const fetchDirection = async () => {
    const directionService = new window.google.maps.DirectionsService();

    const results = await directionService.route({
      origin: selectedListItemSource,
      destination: selectedListItemDestination,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });

    setPoints(JSON.parse(JSON.stringify(results?.routes[0]?.overview_path)));
  };

  useEffect(() => {
    if (points?.length > 0) {
      calculatePath();
    }
  }, [points]);

  useEffect(() => {
    if (points?.length > 0) {
      const timer = setInterval(() => {
        moveObject();
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [data]);

  useEffect(() => {
    if (selectedListItemSource && selectedListItemDestination) {
      fetchDirection();
    }
  }, [selectedListItemSource, selectedListItemDestination]);

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
          center={location?.pathname === "/home" ? defaultCenter : center}
          zoom={
            selectedContainerStyle?.is4kDevice
              ? 16.2
              : selectedContainerStyle?.is3kDevice
              ? 16.2
              : selectedContainerStyle?.is4kDevice &&
                location?.pathname !== "/home"
              ? 15
              : 15
          }
          onLoad={setMap}
          options={getMapTypeControls()}
          mapContainerClassName={googleMapStyle}
          onZoomChanged={handleZoomChanged}
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
          {circleRadiusUnits !== null && (
            <Circle
              radius={circleRadiusUnits}
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
          <MarkerClustererF>
            {(clusterer: any) => (
              <div>
                {markers?.map((singleMarker: any) => {
                  // if (!window.google) return null;
                  if (
                    currentMarker !== singleMarker?.id &&
                    location?.pathname === "/fleetManagement"
                  ) {
                    return (
                      <>
                        <MapMarker
                          mapMarker={singleMarker}
                          toggleInfoWindow={toggleInfoWindow}
                          handleMarkerClose={handleMarkerClose}
                          handleExpandListItem={handleExpandListItem}
                          getMarkerIcon={getMarkerIcon}
                          currentMarker={currentMarker}
                          focusedCategory={focusedCategory}
                          clusterer={clusterer}
                          location={singleMarker?.location}
                          handleAssetViewDetails={handleAssetViewDetails}
                          mapPageName={mapPageName}
                          selectedTheme={selectedTheme}
                        />
                      </>
                    );
                  } else if (location?.pathname !== "/fleetManagement") {
                    return (
                      <>
                        <MapMarker
                          mapMarker={singleMarker}
                          toggleInfoWindow={toggleInfoWindow}
                          handleMarkerClose={handleMarkerClose}
                          handleExpandListItem={handleExpandListItem}
                          getMarkerIcon={getMarkerIcon}
                          currentMarker={currentMarker}
                          focusedCategory={focusedCategory}
                          clusterer={clusterer}
                          location={singleMarker?.location}
                          handleAssetViewDetails={handleAssetViewDetails}
                          mapPageName={mapPageName}
                          handleViewDetails={handleViewDetails}
                          handleVideoDetails={handleVideoDetails}
                          selectedTheme={selectedTheme}
                        />
                      </>
                    );
                  }
                })}

                {location?.pathname === "/fleetManagement" &&
                  points &&
                  points.length > 0 && (
                    <PolylineF
                      path={points}
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
                  points &&
                  points?.length > 0 &&
                  progress &&
                  progress?.length > 0 && (
                    <>
                      <PolylineF
                        path={progress}
                        options={{
                          strokeColor: "#73B35A",
                          strokeOpacity: 10,
                          strokeWeight: 4,
                        }}
                      />
                      {selectedMarker && (
                        <MapMarker
                          mapMarker={selectedMarker}
                          toggleInfoWindow={toggleInfoWindow}
                          handleMarkerClose={handleMarkerClose}
                          handleExpandListItem={handleExpandListItem}
                          getMarkerIcon={getMarkerIcon}
                          currentMarker={selectedMarker}
                          focusedCategory={focusedCategory}
                          location={progress[progress.length - 1]}
                          direction={"NE"}
                          pageName={"FleetManagement"}
                          handleViewDetails={handleViewDetails}
                          handleVideoDetails={handleVideoDetails}
                          mapPageName={mapPageName} // === "dashboard"
                          selectedTheme={selectedTheme}
                        />
                      )}
                      {/* <Marker icon={icon1} position={progress[progress.length - 1]} /> */}
                    </>
                  )}
              </div>
            )}
          </MarkerClustererF>
        </GoogleMap>
      )}
    </>
  );
};

export default Map;
