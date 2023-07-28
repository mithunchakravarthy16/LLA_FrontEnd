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
} from "@react-google-maps/api";
import MapMarker from "components/Marker";
import TripDetailsMarker from "components/Marker/tripDetailsMarker";
import customMapStyles from "./customMapStyles";
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
import FleetAlertIcon from "../../assets/markers/BusOrange.svg";
import FleetHoverIcon from "../../assets/markers/fleetHover.gif";
import useStyles from "./styles";
import customLightThemeMapStyles from "./customLightThemeMapStyles";

const defaultCenter = {
  lat: 39.75525065792099,
  lng: -105.00248276374698,
};

const center = {
  lat: 39.75576345655451,
  lng: -105.00357749556102,
};

const libraries = ["places", "drawing"];

const TripDetailsMap: React.FC<any> = (props) => {
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
    handleVideoDetails,
    selectedTheme,
  } = props;

  // const [selectedTheme, setSelectedTheme] = useState(
  //   JSON.parse(localStorage.getItem("theme")!)
  // );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const { googleMapStyle, footerSection } = useStyles(appTheme);

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
  const velocity: any = 50;
  const initialDate: any = new Date();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: appData?.googleApiKey, //"AIzaSyCmwqbYb48dfmPqYiWWU0A2kRr54I2L3wE",
    libraries: libraries,
  });

  useEffect(() => {
    if (currentMarker) {
      const index = markers.findIndex(
        (marker) => marker.id === currentMarker?.id
      );
      map?.setZoom(
        selectedContainerStyle?.is4kDevice
          ? 16.2
          : selectedContainerStyle?.is4kDevice && location?.pathname !== "/home"
          ? 15
          : 14
      );
      map?.panTo(currentMarker?.location);
      setSelectedListItemSource(currentMarker?.source);
      setSelectedListItemDestination(currentMarker?.destination);
    } else {
      setProgress([]);
      setPoints([]);
      setData([]);
      setSelectedMarker("");
      setSelectedListItemSource("");
      setSelectedListItemDestination("");
      map?.panTo(currentMarker?.location);
      map?.setZoom(
        selectedContainerStyle?.is4kDevice
          ? 16.2
          : selectedContainerStyle?.is4kDevice && location?.pathname !== "/home"
          ? 15
          : 15
      );
    }
  }, [marker, currentMarker]);

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
      case "Events": {
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
            // return focusedCategory === "fleet" ? FleetHoverIcon :  currentMarker === id ? FleetIncidentIcon : FleetIncidentIcon;
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
    // const actualAngle = angle - 90;

    // const marker = document.querySelector(`[src="${FleetEventIcon}"]`);

    // if (marker) {
    //   // when it hasn't loaded, it's null
    //   marker.style.transform = `rotate(${actualAngle}deg)`;
    // }
    progress = progress.concat(position);

    setProgress(progress);
  };

  const fetchDirection = async () => {
    if (currentMarker?.source?.lat) {
      const directionService = new window.google.maps.DirectionsService();

      const results = await directionService.route({
        origin: currentMarker?.source,
        destination: currentMarker?.destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      });

      setPoints(JSON.parse(JSON.stringify(results?.routes[0]?.overview_path)));
    }
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
    if (currentMarker) {
      fetchDirection();
    }
  }, [currentMarker]);

  let lineSymbol = {
    path: "M 0,-1 0,1",
    strokeOpacity: 10,
    scale: 4,
  };

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          center={currentMarker?.location}
          zoom={
            selectedContainerStyle?.is4kDevice
              ? 16.2
              : selectedContainerStyle?.is3kDevice
              ? 16.4
              : selectedContainerStyle?.is4kDevice &&
                location?.pathname !== "/home"
              ? 15
              : 14
          }
          onLoad={setMap}
          options={getMapTypeControls()}
          mapContainerClassName={googleMapStyle}
        >
          <MarkerClustererF>
            {(clusterer: any) => (
              <div>
                {points && points.length > 0 && (
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

                {(points &&
                  points?.length > 0 &&
                  progress &&
                  progress?.length > 0) ||
                  (currentMarker?.location && (
                    <>
                      <PolylineF
                        path={progress}
                        options={{
                          strokeColor: "#73B35A",
                          strokeOpacity: 10,
                          strokeWeight: 4,
                        }}
                      />
                      {
                        <TripDetailsMarker
                          mapMarker={currentMarker}
                          toggleInfoWindow={toggleInfoWindow}
                          handleMarkerClose={handleMarkerClose}
                          handleExpandListItem={handleExpandListItem}
                          getMarkerIcon={getMarkerIcon}
                          currentMarker={currentMarker}
                          focusedCategory={focusedCategory}
                          location={progress[progress.length - 1]}
                          direction={"NE"}
                          pageName={""}
                          handleViewDetails={handleViewDetails}
                          handleVideoDetails={handleVideoDetails}
                        />
                      }
                    </>
                  ))}
              </div>
            )}
          </MarkerClustererF>
        </GoogleMap>
      )}
    </>
  );
};

export default TripDetailsMap;
