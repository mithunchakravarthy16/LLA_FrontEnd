import { useState, useEffect } from "react";
import { Marker, InfoWindowF } from "@react-google-maps/api";

import theme from "../../theme/theme";
import NotificationListItems from "components/NotificationListItems";
import useStyles from "./styles";

const MapMarker: React.FC<any> = (props) => {
  const {
    mapMarker,
    currentMarker,
    toggleInfoWindow,
    handleMarkerClose,
    handleExpandListItem,
    getMarkerIcon,
  } = props;

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const {} = useStyles(appTheme);

  const [movingMarker, setMovingMarker] = useState<any>(mapMarker?.location);

  useEffect(() => {
    setInterval(() => {
      setMovingMarker((prev: any) => ({
        lat: prev.lat - 0.00001,
        lng: prev.lng + 0.00001,
      }));
    }, 1000);
  }, [mapMarker?.location]);

  return (
    <>
      <Marker
        position={
          //   mapMarker?.category === "fleet" ? movingMarker : mapMarker?.location
          mapMarker?.location
        }
        onClick={() => {
          toggleInfoWindow(
            mapMarker.id,
            mapMarker.notificationCategory,
            mapMarker?.location
          );
        }}
        icon={{
          url: getMarkerIcon(
            mapMarker.category,
            mapMarker.notificationCategory,
            mapMarker.id
          ),
          scaledSize: new window.google.maps.Size(60.5, 60.5),
        }}
        key={mapMarker.id}
        zIndex={1}
      />

      {currentMarker === mapMarker.id && (
        <InfoWindowF
          position={mapMarker?.location}
          options={{ pixelOffset: new google.maps.Size(0, -20) }}
        >
          <NotificationListItems
            data={mapMarker}
            pageName={"markerCallout"}
            handleMarkerClose={handleMarkerClose}
            handleExpandListItem={handleExpandListItem}
          />
        </InfoWindowF>
      )}
    </>
  );
};

export default MapMarker;
