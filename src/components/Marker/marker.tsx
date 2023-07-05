//@ts-nocheck
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
    focusedCategory,
    location,
    pageName,
    clusterer,
    handleViewDetails,
  } = props;

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const {} = useStyles(appTheme);

  if (mapMarker?.category === "fleet") {
    return (
      <>
        <Marker
          animation={
            focusedCategory === mapMarker?.category &&
            focusedCategory !== "fleet"
              ? window.google.maps.Animation.BOUNCE
              : undefined
          }
          position={
            currentMarker?.id === mapMarker.id ? location : mapMarker?.location
          }
          onClick={() => {
            toggleInfoWindow(
              mapMarker.id,
              mapMarker.notificationType,
              mapMarker?.location
            );
          }}
          icon={{
            url: getMarkerIcon(
              mapMarker.category,
              mapMarker.notificationType,
              mapMarker.id
            ),
            scaledSize: new window.google.maps.Size(
              window.innerWidth > 3839 || window.innerWidth > 3071
                ? 160.5
                : 60.5,
              window.innerWidth > 3839 || window.innerWidth > 3071
                ? 160.5
                : 60.5
            ),
          }}
          key={mapMarker.id}
          zIndex={currentMarker === mapMarker.id ? 1000 : 1}
        />

        {currentMarker?.id === mapMarker.id && (
          <InfoWindowF
            position={location}
            options={{ pixelOffset: new google.maps.Size(0, -20) }}
          >
            <NotificationListItems
              data={mapMarker}
              pageName={"markerCallout"}
              handleMarkerClose={handleMarkerClose}
              handleExpandListItem={handleExpandListItem}
              handleViewDetails={handleViewDetails}
            />
          </InfoWindowF>
        )}
      </>
    );
  }

  return (
    <>
      <Marker
        // clusterer={clusterer}
        animation={
          focusedCategory === mapMarker?.category && focusedCategory !== "fleet"
            ? window.google.maps.Animation.BOUNCE
            : undefined
        }
        position={mapMarker?.location}
        onClick={() => {
          toggleInfoWindow(
            mapMarker.id,
            mapMarker.notificationType,
            mapMarker?.location
          );
        }}
        icon={{
          url: getMarkerIcon(
            mapMarker.category,
            mapMarker.notificationType,
            mapMarker.id
          ),
          scaledSize: new window.google.maps.Size(
            window.innerWidth > 3839 || window.innerWidth > 3071 ? 160.5 : 60.5,
            window.innerWidth > 3839 || window.innerWidth > 3071 ? 160.5 : 60.5
          ),
        }}
        key={mapMarker.id}
        zIndex={currentMarker === mapMarker.id ? 1000 : 1}
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
