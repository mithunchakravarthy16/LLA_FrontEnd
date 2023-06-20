import { useState, useEffect, Fragment } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  OverlayViewF,
  InfoWindowF,
} from "@react-google-maps/api";

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

  const getMarkerIcon = (category: string, notificationCategory: string) => {
    switch (notificationCategory) {
      case "event": {
        switch (category) {
          case "parking":
            return ParkingEventIcon;
          case "energy":
            return EnergyManagemnetEventIcon;
          case "security":
            return SecurityEventIcon;
          case "lighting":
            return LighteningEventIcon;
          case "asset":
            return AssetTrackingEventIcon;
          default:
            return ParkingEventIcon;
        }
      }
      case "oprAlert": {
        switch (category) {
          case "parking":
            return ParkingAlertIcon;
          case "energy":
            return EnergyManagementAlertIcon;
          case "security":
            return SecutiryAlertIcon;
          case "lighting":
            return LighteningAlertIcon;
          case "asset":
            return AssetTrackingAlertIcon;
          default:
            return ParkingAlertIcon;
        }
        break;
      }
      case "incident": {
        switch (category) {
          case "parking":
            return ParkingIncidentIcon;
          case "energy":
            return EnergyManagementIncidentIcon;
          case "security":
            return SecurityIncidentIcon;
          case "lighting":
            return LighteningIncidentIcon;
          case "asset":
            return AssetTrackingIncidentIcon;
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
                <Marker
                  position={singleMarker?.location}
                  onClick={() => {
                    toggleInfoWindow(
                      singleMarker.id,
                      singleMarker.notificationCategory,
                      singleMarker?.location
                    );
                  }}
                  icon={{
                    url: getMarkerIcon(
                      singleMarker.category,
                      singleMarker.notificationCategory
                    ),
                    scaledSize: new window.google.maps.Size(60.5, 60.5),
                  }}
                  key={singleMarker.id}
                  zIndex={1}
                />

                {currentMarker === singleMarker.id && (
                  <InfoWindowF
                    position={singleMarker?.location}
                    options={{ pixelOffset: new google.maps.Size(0, -20) }}
                  >
                    <NotificationListItems
                      data={singleMarker}
                      pageName={"markerCallout"}
                      handleMarkerClose={handleMarkerClose}
                      handleExpandListItem={handleExpandListItem}
                    />
                  </InfoWindowF>
                )}
              </>
            );
          })}
        </GoogleMap>
      )}
    </>
  );
};

export default Map;
