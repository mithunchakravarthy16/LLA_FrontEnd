import { useState, useEffect, Fragment } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  OverlayViewF,
  InfoWindowF,
} from "@react-google-maps/api";
import MapMarker from "components/Marker";
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
import useStyles from "./styles";

const containerStyle = {
  width: "100%",
  height: "calc(100vh - 0px)",
};

const defaultCenter = {
  lat: 39.75055380818962,
  lng: -105.00000034678636,
};

const Map: React.FC<any> = (props) => {
  const {
    markers,
    setNotificationPanelActive,
    setSelectedNotification,
    marker,
    setTabIndex,
    currentMarker,
    setCurrentMarker,
  } = props;

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const { googleMapStyle, footerSection } = useStyles(appTheme);

  const [map, setMap] = useState<any>(null);
  const [zoomValue, setZoomValue] = useState<number>(15);
  const [selectedMarker, setSelectedMarker] = useState<any>("");

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: appData?.googleApiKey, //"AIzaSyCmwqbYb48dfmPqYiWWU0A2kRr54I2L3wE",
    libraries: ["places", "drawing"],
  });

  useEffect(() => {
    setCurrentMarker(marker);
  }, [marker]);

  const getMapTypeControls = () => {
    const defaultMapOptions = {
      styles: customMapStyles,
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
    setNotificationPanelActive(true);
    setTabIndex(getTabIndex(type));
    setCurrentMarker((prev: any) => {
      if (prev && prev === markerId) {
        map?.panTo(defaultCenter);
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
    map?.panTo(defaultCenter);
  };

  const handleExpandListItem = () => {
    setSelectedNotification("");
  };

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={map?.panTo(defaultCenter)}
          zoom={zoomValue}
          onLoad={setMap}
          options={getMapTypeControls()}
          mapContainerClassName={googleMapStyle}
        >
          {markers?.map((singleMarker: any) => {
            if (!window.google) return null;
            return (
              <>
                <MapMarker
                  mapMarker={singleMarker}
                  toggleInfoWindow={toggleInfoWindow}
                  handleMarkerClose={handleMarkerClose}
                  handleExpandListItem={handleExpandListItem}
                  getMarkerIcon={getMarkerIcon}
                  currentMarker={currentMarker}
                />
              </>
            );
          })}
        </GoogleMap>
      )}
    </>
  );
};

export default Map;
