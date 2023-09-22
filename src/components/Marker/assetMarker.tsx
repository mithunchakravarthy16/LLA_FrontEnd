//@ts-nocheck
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Marker, InfoWindowF } from "@react-google-maps/api";

import theme from "../../theme/theme";
import NotificationListItems from "components/NotificationListItems";
import useStyles from "./styles";

const AssetMarker: React.FC<any> = (props) => {
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
    selectedNotificationItem
  } = props;

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const {} = useStyles(appTheme);

    return (
      <>
        <Marker
          clusterer={(listSelectedMarker === "" && selectedNotification !== "" ) ? clusterer : undefined}

          position={mapMarker?.currentLocation}
          onClick={() =>{ handleLiveMarkerIcon(mapMarker?.markerId, mapMarker?.currentLocation, mapMarker)}
          }
          icon={{
            url: getMarkerIcon(
              mapMarker?.category,
              mapMarker?.recentMarkerType,
              // mapMarker?.recentMarkerType === "Inactive" ? mapMarker?.recentMarkerType : mapMarker?.notificationType,
              mapMarker?.markerId,
            ),
            scaledSize: new window.google.maps.Size(
              window.innerWidth > 3839 || window.innerWidth > 3071 ? 160.5 : 60.5,
              window.innerWidth > 3839 || window.innerWidth > 3071 ? 160.5 : 60.5
            ),
          }}
          key={mapMarker?.markerId}
          zIndex={listSelectedMarker === mapMarker?.markerId ? 1000 : 100}
        />
  
        {((assetLiveMarker === mapMarker?.markerId ) || listSelectedMarker === mapMarker?.markerId )  && (
          <InfoWindowF
            position={mapMarker?.currentLocation ? mapMarker?.currentLocation : mapMarker?.location}
            options={{ pixelOffset: new google.maps.Size(0, -20) }}
          >
            {/* <div>
              {mapMarker?.trackerId}
            </div> */}
            <NotificationListItems
              data={ [assetLiveMarker === mapMarker?.markerId ? mapMarker : selectedNotificationItem]}
              pageName={"markerCallout"}
              handleMarkerClose={handleLiveMarkerClose}
              handleExpandListItem={handleExpandListItem}
              handleAssetViewDetails={handleAssetViewDetails}
              mapPageName={mapPageName}
              handleViewDetails={handleViewDetails}
              handleVideoDetails={handleVideoDetails}
              selectedTheme={selectedTheme}
              markerType = {assetLiveMarker === mapMarker?.markerId && "assetLiveMarker" }
              isMarkerClicked = {isMarkerClicked}
            />
          </InfoWindowF>
        )}
      </>
    );


};

export default AssetMarker;
