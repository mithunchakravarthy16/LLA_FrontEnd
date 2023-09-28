/** @format */

// @ts-nocheck
import { useState, useEffect, Fragment, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  GoogleMap,
  useLoadScript,
  MarkerClustererF,
} from "@react-google-maps/api";
import AssetMarker from "components/Marker/assetMarker";
import customMapStyles from "./customMapStyles";
import customLightThemeMapStyles from "./customLightThemeMapStyles";
import theme from "../../theme/theme";
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
import FleetEventIcon from "../../assets/markers/Fleet_event.svg";
import FleetIncidentIcon from "../../assets/markers/Fleet_incident.svg";
import FleetAlertIcon from "../../assets/markers/Fleet_alerts.svg";
import MarkerClusterIcon from "../../assets/markerClusterIcon.png";
import AssetInactiveIcon from "../../assets/markers/Asset_Grey.svg";
import useStyles from "./styles";


const center = { lat: 9.01343438,
lng: -79.47595713 };

const libraries = ["places", "drawing"];

const AssetMap: React.FC<any> = (props) => {
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
    isMarkerClicked,
    selectedTheme,
    setMap,
    map,
    assetLiveMarker,
    setAssetLiveMarker,
    liveMarkerList,
    listSelectedMarker,
    setListSelectedMarker,
    selectedNotificationItem,
    setSelectedNotificationItem,
    mapType,
    setMapType,
    selectedNotification,
    mapDefaultView, 
    setMapDefaultView
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

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: libraries,
  });

  const parkingMapContainerStyle = {
    width: "100%",
    height: "60vh",
  };

  useEffect(() => {
    map?.setMapTypeId(mapType);
  }, [map, mapType]);

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


  // useEffect(() => {
  //   if (listSelectedMarker) {
  //     const index = markers.findIndex(
  //       (marker) => marker?.trackerId === listSelectedMarker
  //     );
  //     map?.setZoom(16);
  //     map?.panTo(markers[index]?.location);
  //   } else {
  //     map?.panTo(assetTrackingCenter);
  //     map?.setZoom(16);
  //   }
  // }, [listSelectedMarker, markers]);

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
      // mapTypeId: window.google.maps.MapTypeId.SATELLITE,
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
            return EnergyManagemnetEventIcon;
          case "security":
            return SecurityEventIcon;
          case "lighting":
            return LighteningEventIcon;
          case "asset":
            // return (currentMarker === id || assetLiveMarker === id)
            //   ? AssetTrackingEventActiveIcon
            //   : AssetTrackingEventIcon;
            return AssetTrackingEventIcon;
          case "fleet":
            // return focusedCategory === "fleet" ? FleetHoverIcon : currentMarker === id ? FleetEventIcon : FleetEventIcon;
            return FleetEventIcon;
          default:
            return ParkingEventIcon;
        }
      }
      case "Alerts": {
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
            // return (currentMarker === id || assetLiveMarker === id)
            //   ? AssetTrackingAlertActiveIcon
            //   : AssetTrackingAlertIcon;
            return AssetTrackingAlertIcon;
          case "fleet":
            // return focusedCategory === "fleet" ? FleetHoverIcon : currentMarker === id ? FleetAlertIcon : FleetAlertIcon;
            return FleetAlertIcon;
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
            return EnergyManagementIncidentIcon;
          case "security":
            return SecurityIncidentIcon;
          case "lighting":
            return LighteningIncidentIcon;
          case "asset":
            // return (currentMarker === id || assetLiveMarker === id)
            //   ? AssetTrackingIncidentActiveIcon
            //   : AssetTrackingIncidentIcon;
            return AssetTrackingIncidentIcon;
          case "fleet":
            //return focusedCategory === "fleet" ? FleetHoverIcon :  currentMarker === id ? FleetIncidentIcon : FleetIncidentIcon;
            return FleetIncidentIcon;
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

  const handleMarkerClose = () => {
    setAssetLiveMarker("");
    setIsMarkerClicked(false);
    setListSelectedMarker("");
    setSelectedNotification("");
    // map?.panTo(center);
    map?.setZoom(
      selectedContainerStyle?.is4kDevice
        ? 16.2
        : 17
    );
    setSelectedMarker("");
  };

  const handleExpandListItem = (id: any, markerId: any, data: any) => {
    // setSelectedNotification(id);
    // // setAssetLiveMarker(markerId);
    // setListSelectedMarker(markerId)
    // // setIsMarkerClicked(true)
  };

  const[currentZoomValue, setCurrentZoomValue] = useState<any>("")


  function handleZoomChanged() {
    setCurrentZoomValue(this.getZoom())
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
      map?.setZoom(21);
      // map?.panTo(center);
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
    // map?.panTo(
    //    center
    // );
    // map?.setZoom(selectedContainerStyle?.is4kDevice ? 16.2 : 17);
    setSelectedMarker("");
  };

  useEffect(() => {
    if (selectedNotification || selectedNotificationItem) {
      map?.panTo(
        selectedNotificationItem?.currentLocation
          ? selectedNotificationItem?.currentLocation
          : selectedNotificationItem?.location
      );
      // map?.setZoom(17)
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

  useEffect(()=>{ 
    if(window?.google?.maps && mapDefaultView) {
      const bounds = new window.google.maps.LatLngBounds();
      liveMarkerList?.forEach((mapMarker:any) => {
        bounds.extend({lat:parseFloat(mapMarker?.location?.lat),lng:parseFloat(mapMarker?.location?.lng)});
      })
      map?.fitBounds(bounds);
    }      
  },[map, mapDefaultView])

  const handleClusterIconClick = () =>{
    setMapDefaultView(false)
  }

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={
            parkingMapContainerStyle
          }
          center={ center
          }
          zoom={zoomValue}
          onLoad={setMap}
          options={getMapTypeControls()}
          mapContainerClassName={googleMapStyle}
          onZoomChanged={handleZoomChanged}
          onMapTypeIdChanged={handleMapTypeChanged}
        >
          <MarkerClustererF
            averageCenter
            enableRetinaIcons
            maxZoom={selectedContainerStyle?.is4kDevice ? 16.2 : (selectedNotification || isMarkerClicked) ? 4 :  17}
            gridSize={selectedContainerStyle?.is4kDevice ? 80 : 40}
            onClick={handleClusterIconClick}
          >
            {(clusterer: any) => (
              <div>
                {liveMarkerList?.map((singleMarker: any) => {
                  return (
                    <>
                      <AssetMarker
                        mapMarker={singleMarker}
                        // toggleInfoWindow={toggleInfoWindow}
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
                        setSelectedNotification={setSelectedNotification}
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
                })}
              </div>
            )}
          </MarkerClustererF>
        </GoogleMap>
      )}
    </>
  );
};

export default AssetMap;
