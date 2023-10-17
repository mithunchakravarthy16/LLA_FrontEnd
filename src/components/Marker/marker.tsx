//@ts-nocheck
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Marker, InfoWindowF } from "@react-google-maps/api";

import theme from "../../theme/theme";
import NotificationListItems from "components/NotificationListItems";
import useStyles from "./styles";

const MapMarker: React.FC<any> = (props) => {
  const locations = useLocation();
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
    handleAssetViewDetails,
    handleVideoDetails,
    mapPageName,
    selectedTheme,
    assetLiveMarker,
    handleLiveMarkerIcon,
    handleLiveMarkerClose,
    selectedNotification,
    listSelectedMarker,
    isMarkerClicked,
    selectedNotificationItem,
    setAssetLiveMarker,
  } = props;

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const {} = useStyles(appTheme);

  if (mapMarker?.category === "fleet") {
    return (
      <>
        <Marker
          clusterer={clusterer}
          animation={
            focusedCategory === mapMarker?.category &&
            focusedCategory !== "fleet"
              ? window.google.maps.Animation.BOUNCE
              : undefined
          }
          position={
            currentMarker === mapMarker?.id ? location : mapMarker?.location
          }
          onClick={() => {
            toggleInfoWindow(
              mapMarker?.id,
              mapMarker?.notificationType,
              mapMarker?.location,
              mapMarker?.tripId
            );
          }}
          icon={{
            url: getMarkerIcon(
              mapMarker?.category,
              mapMarker?.notificationType,
              mapMarker?.id
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
          key={mapMarker?.id}
          zIndex={currentMarker === mapMarker?.id ? 1000 : 100}
        />

        {currentMarker === mapMarker?.id && (
          <InfoWindowF
            position={location}
            options={{ pixelOffset: new google.maps.Size(0, -20) }}
          >
            <NotificationListItems
              data={[mapMarker]}
              pageName={"markerCallout"}
              handleMarkerClose={handleMarkerClose}
              handleExpandListItem={handleExpandListItem}
              handleAssetViewDetails={handleAssetViewDetails}
              handleViewDetails={handleViewDetails}
              handleVideoDetails={handleVideoDetails}
              notificationPageName={mapPageName}
              selectedTheme={selectedTheme}
            />
          </InfoWindowF>
        )}
      </>
    );
  }

  if (
    location?.pathname === "/assetTracking" ||
    mapMarker?.category === "asset"
  ) {
    return (
      <>
        <Marker
          clusterer={
            listSelectedMarker === "" ||
            selectedNotification === "" ||
            assetLiveMarker === ""
              ? clusterer
              : undefined
          }
          animation={
            focusedCategory === mapMarker?.category &&
            focusedCategory !== "fleet"
              ? window.google.maps.Animation.BOUNCE
              : undefined
          }
          position={mapMarker?.currentLocation}
          onClick={() => {
            handleLiveMarkerIcon(
              mapMarker?.markerId,
              mapMarker?.currentLocation,
              mapMarker
            );
          }}
          icon={{
            url: getMarkerIcon(
              mapMarker?.category,
              mapMarker?.recentMarkerType,
              // mapMarker?.recentMarkerType === "Inactive" ? mapMarker?.recentMarkerType : mapMarker?.notificationType,
              mapMarker?.markerId
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
          key={mapMarker?.markerId}
          zIndex={listSelectedMarker === mapMarker?.markerId ? 1000 : 100}
        />

        {(assetLiveMarker === mapMarker?.markerId ||
          listSelectedMarker === mapMarker?.markerId) && (
          <InfoWindowF
            position={
              mapMarker?.currentLocation
                ? mapMarker?.currentLocation
                : mapMarker?.location
            }
            options={{ pixelOffset: new google.maps.Size(0, -20) }}
          >
            {/* <div>
              {mapMarker?.trackerId}
            </div> */}
            <NotificationListItems
              data={[selectedNotificationItem]}
              pageName={"markerCallout"}
              handleMarkerClose={handleLiveMarkerClose}
              handleExpandListItem={handleExpandListItem}
              handleAssetViewDetails={handleAssetViewDetails}
              mapPageName={mapPageName}
              handleViewDetails={handleViewDetails}
              handleVideoDetails={handleVideoDetails}
              selectedTheme={selectedTheme}
              markerType={
                assetLiveMarker === mapMarker?.markerId && "assetLiveMarker"
              }
              isMarkerClicked={isMarkerClicked}
              setAssetLiveMarker={setAssetLiveMarker}
            />
          </InfoWindowF>
        )}
      </>
    );
  }

  if (location?.pathname === "/parking" || mapMarker?.category === "parking") {
    return (
      <>
        <Marker
          clusterer={
            selectedNotificationItem === "" || assetLiveMarker === ""
              ? clusterer
              : undefined
          }
          animation={
            focusedCategory === mapMarker?.category &&
            focusedCategory !== "fleet"
              ? window.google.maps.Animation.BOUNCE
              : undefined
          }
          position={
            mapMarker?.currentLocation
              ? mapMarker?.currentLocation
              : mapMarker?.location
          }
          onClick={() => {
            handleLiveMarkerIcon(
              mapMarker?.id,
              mapMarker?.currentLocation
                ? mapMarker?.currentLocation
                : mapMarker?.location,
              mapMarker
            );
          }}
          icon={{
            url: getMarkerIcon(
              mapMarker?.category,
              mapMarker?.notificationType,
              mapMarker?.id,
              mapMarker
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
          key={mapMarker?.id}
          zIndex={listSelectedMarker === mapMarker?.id ? 1000 : 100}
        />

        {assetLiveMarker === mapMarker?.id && (
          <InfoWindowF
            position={
              mapMarker?.currentLocation
                ? mapMarker?.currentLocation
                : mapMarker?.location
            }
            options={{ pixelOffset: new google.maps.Size(0, -20) }}
          >
            {/* <div>
              {mapMarker?.trackerId}
            </div> */}
            <NotificationListItems
              data={[mapMarker]}
              pageName={"markerCallout"}
              handleMarkerClose={handleLiveMarkerClose}
              handleExpandListItem={handleExpandListItem}
              handleAssetViewDetails={handleAssetViewDetails}
              mapPageName={mapPageName}
              handleViewDetails={handleViewDetails}
              handleVideoDetails={handleVideoDetails}
              selectedTheme={selectedTheme}
              markerType={
                assetLiveMarker === mapMarker?.markerId && "assetLiveMarker"
              }
              isMarkerClicked={isMarkerClicked}
            />
          </InfoWindowF>
        )}
      </>
    );
  }

  return (
    <>
      <Marker
        clusterer={
          selectedNotificationItem === "" || assetLiveMarker === ""
            ? clusterer
            : undefined
        }
        animation={
          focusedCategory === mapMarker?.category && focusedCategory !== "fleet"
            ? window.google.maps.Animation.BOUNCE
            : undefined
        }
        position={
          mapMarker?.currentLocation
            ? mapMarker?.currentLocation
            : mapMarker?.location
        }
        onClick={() => {
          handleLiveMarkerIcon(
            mapMarker?.id,
            mapMarker?.currentLocation
              ? mapMarker?.currentLocation
              : mapMarker?.location,
            mapMarker
          );
        }}
        icon={{
          url: getMarkerIcon(
            mapMarker?.category,
            mapMarker?.notificationType,
            mapMarker?.id,
            mapMarker
          ),
          scaledSize: new window.google.maps.Size(
            window.innerWidth > 3839 || window.innerWidth > 3071 ? 160.5 : 60.5,
            window.innerWidth > 3839 || window.innerWidth > 3071 ? 160.5 : 60.5
          ),
        }}
        key={mapMarker?.id}
        zIndex={listSelectedMarker === mapMarker?.id ? 1000 : 100}
      />

      {assetLiveMarker === mapMarker?.id && (
        <InfoWindowF
          position={
            mapMarker?.currentLocation
              ? mapMarker?.currentLocation
              : mapMarker?.location
          }
          options={{ pixelOffset: new google.maps.Size(0, -20) }}
        >
          {/* <div>
              {mapMarker?.trackerId}
            </div> */}
          <NotificationListItems
            data={[mapMarker]}
            pageName={"markerCallout"}
            handleMarkerClose={handleLiveMarkerClose}
            handleExpandListItem={handleExpandListItem}
            handleAssetViewDetails={handleAssetViewDetails}
            mapPageName={mapPageName}
            handleViewDetails={handleViewDetails}
            handleVideoDetails={handleVideoDetails}
            selectedTheme={selectedTheme}
            markerType={
              assetLiveMarker === mapMarker?.markerId && "assetLiveMarker"
            }
            isMarkerClicked={isMarkerClicked}
          />
        </InfoWindowF>
      )}
    </>
  );
};

export default MapMarker;
