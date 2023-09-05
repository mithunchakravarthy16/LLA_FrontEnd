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
import routeSourceIcon from "assets/sourceIcon.svg";
import routeDestinationIcon from "assets/destinationIcon.svg";

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
    dataPoints,
    tripStatus,
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
    } else {
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
            return currentMarker?.id === id
              ? ParkingEventActiveIcon
              : ParkingEventIcon;
          case "energy":
            return currentMarker?.id === id
              ? EnergyManagementEventActiveIcon
              : EnergyManagemnetEventIcon;
          case "security":
            return currentMarker?.id === id
              ? SecurityEventActiveIcon
              : SecurityEventIcon;
          case "lighting":
            return currentMarker?.id === id
              ? LightenEventActiveIcon
              : LighteningEventIcon;
          case "asset":
            return currentMarker?.id === id
              ? AssetTrackingEventActiveIcon
              : AssetTrackingEventIcon;
          case "fleet":
            // return focusedCategory === "fleet" ? FleetHoverIcon : currentMarker === id ? FleetEventIcon : FleetEventIcon;
            return currentMarker?.id === id ? FleetEventIcon : FleetEventIcon;
          default:
            return ParkingEventIcon;
        }
      }
      case "Alerts": {
        switch (category) {
          case "parking":
            return currentMarker?.id === id
              ? ParkingAlertActiveIcon
              : ParkingAlertIcon;
          case "energy":
            return currentMarker?.id === id
              ? EnergyManagementAlertActiveIcon
              : EnergyManagementAlertIcon;
          case "security":
            return currentMarker?.id === id
              ? SecurityAlertActiveIcon
              : SecutiryAlertIcon;
          case "lighting":
            return currentMarker?.id === id
              ? LightenAlertActiveIcon
              : LighteningAlertIcon;
          case "asset":
            return currentMarker?.id === id
              ? AssetTrackingAlertActiveIcon
              : AssetTrackingAlertIcon;
          case "fleet":
            // return focusedCategory === "fleet" ? FleetHoverIcon : currentMarker === id ? FleetAlertIcon : FleetAlertIcon;
            return currentMarker?.id === id ? FleetAlertIcon : FleetAlertIcon;
          default:
            return ParkingAlertIcon;
        }
        break;
      }
      case "Incident": {
        switch (category) {
          case "parking":
            return currentMarker?.id === id
              ? ParkingIncidentActiveIcon
              : ParkingIncidentIcon;
          case "energy":
            return currentMarker?.id === id
              ? EnergyManagementIncidentActiveIcon
              : EnergyManagementIncidentIcon;
          case "security":
            return currentMarker?.id === id
              ? SecurityIncidentActiveIcon
              : SecurityIncidentIcon;
          case "lighting":
            return currentMarker?.id === id
              ? LightenIncidentActiveIcon
              : LighteningIncidentIcon;
          case "asset":
            return currentMarker?.id === id
              ? AssetTrackingIncidentActiveIcon
              : AssetTrackingIncidentIcon;
          case "fleet":
            // return focusedCategory === "fleet" ? FleetHoverIcon :  currentMarker === id ? FleetIncidentIcon : FleetIncidentIcon;
            return currentMarker?.id === id
              ? FleetIncidentIcon
              : FleetIncidentIcon;
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
      case "Events":
        return 0;
      case "Incident":
        return 1;
      case "Alerts":
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
              : 24
          }
          onLoad={setMap}
          options={getMapTypeControls()}
          mapContainerClassName={googleMapStyle}
        >
          <MarkerClustererF>
            {(clusterer: any) => (
              <div>
                {(tripStatus === "Finish" || tripStatus === "Live") &&
                  dataPoints &&
                  dataPoints.length > 0 && (
                    <PolylineF
                      path={dataPoints}
                      options={{
                        strokeColor: "#976C9E",
                        strokeOpacity: 10,
                        strokeWeight: 4,
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
                {(tripStatus === "Finish" || tripStatus === "Live") && (
                  <MarkerF
                    key={0}
                    position={{
                      lat: dataPoints && dataPoints[0]?.lat,
                      lng: dataPoints && dataPoints[0]?.lng,
                    }}
                    icon={{
                      url: routeSourceIcon,
                      scaledSize: new window.google.maps.Size(35, 35),
                    }}
                    // title={"S"}
                    // label={`S`}
                  />
                )}
                {tripStatus === "Finish" && (
                  <MarkerF
                    key={1}
                    position={{
                      lat:
                        dataPoints && dataPoints[dataPoints?.length - 1]?.lat,
                      lng:
                        dataPoints && dataPoints[dataPoints?.length - 1]?.lng,
                    }}
                    icon={{
                      url: routeDestinationIcon,
                      scaledSize: new window.google.maps.Size(35, 35),
                    }}
                    // title={"D"}
                    // label={`D`}
                  />
                )}
                {(tripStatus === "Finish" || tripStatus === "Live") &&
                  dataPoints &&
                  dataPoints?.length > 0 && (
                    <>
                      <PolylineF
                        path={dataPoints[dataPoints?.length - 1]}
                        options={{
                          strokeColor: "#73B35A",
                          strokeOpacity: 10,
                          strokeWeight: 4,
                        }}
                      />
                      {tripStatus === "Live" && (
                        <TripDetailsMarker
                          mapMarker={currentMarker}
                          toggleInfoWindow={toggleInfoWindow}
                          handleMarkerClose={handleMarkerClose}
                          handleExpandListItem={handleExpandListItem}
                          getMarkerIcon={getMarkerIcon}
                          currentMarker={currentMarker}
                          focusedCategory={focusedCategory}
                          location={dataPoints[dataPoints?.length - 1]}
                          direction={"NE"}
                          pageName={""}
                          handleViewDetails={handleViewDetails}
                          handleVideoDetails={handleVideoDetails}
                        />
                      )}
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

export default TripDetailsMap;
