/** @format */

// @ts-nocheck
import { useState, useEffect, Fragment, useRef, useMemo } from "react";
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
import FleetEventIcon from "../../assets/markers/Fleet_event.svg";
import FleetIncidentIcon from "../../assets/markers/Fleet_incident.svg";
import FleetAlertIcon from "../../assets/markers/Fleet_alerts.svg";
import routeSourceIcon from "assets/sourceIcon.svg";
import CompletedTripIcon from "assets/markers/completedTrip.svg";
import useStyles from "./styles";

const fleetManagementCenter = {
  lat: 25.057066876525674,
  lng: 121.36458642272018,
};

const libraries = ["places", "drawing"];

const FleetMap: React.FC<any> = (props) => {
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
    selectedTheme,
    setMap,
    map,
    dataPoints,
    handleMarkerCancel,
    handleMarkerIconClick,
    googleMapsApiKeyResponse,
    mapDefaultView,
    setMapDefaultView,
    mapType,
    setMapType,
    tabMainIndex,
    tripsTabIndex,
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

  const [selectedContainerStyle, setSelectedContainerStyle] = useState<any>();
  const [selectedMarker, setSelectedMarker] = useState<any>();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApiKeyResponse,
    libraries: libraries,
  });

  useEffect(() => {
    map?.setMapTypeId(mapType);
  }, [map, mapType]);

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
      ? 15
      : 15
  );

  useEffect(() => {
    setCurrentMarker(marker);
    const selectMarker = markers?.find((item: any) => item.id === marker);
    setSelectedMarker(selectMarker);
  }, [marker]);

  useEffect(() => {
    if (currentMarker) {
      const index = markers.findIndex((marker) => marker.id === currentMarker);

      if (index > 0) {
        map?.panTo(markers[index]?.location);
        map?.setZoom(
          selectedContainerStyle?.is4kDevice ||
            selectedContainerStyle?.is3kDevice
            ? 16.2
            : 18
        );
      }
    }
    // else {
    //   map?.panTo(fleetManagementCenter);
    //   map?.setZoom(
    //     selectedContainerStyle?.is4kDevice || selectedContainerStyle?.is3kDevice
    //       ? 16.2
    //       : (selectedContainerStyle?.is4kDevice ||
    //           selectedContainerStyle?.is3kDevice) &&
    //         location?.pathname !== "/home"
    //       ? 15
    //       : 15
    //   );
    // }
  }, [currentMarker, markers]);

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
      zoomControl: true,
      streetViewControl: false,
      disableDefaultUI: false,
      mapTypeControlOptions: {
        style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: window.google.maps.ControlPosition.LEFT_BOTTOM,
        mapTypeIds: [
          window.google.maps.MapTypeId.ROADMAP,
          window.google.maps.MapTypeId.SATELLITE,
          window.google.maps.MapTypeId.HYBRID,
        ],
      },
      mapTypeControl: true,
    };
  };

  const getMarkerIcon = (
    category: string,
    notificationCategory: string,
    id: string,
    tripStatus
  ) => {
    switch (notificationCategory) {
      case "Events": {
        switch (category) {
          case "fleet":
            // return focusedCategory === "fleet" ? FleetHoverIcon : currentMarker === id ? FleetEventIcon : FleetEventIcon;
            return tripStatus === "Live"
              ? currentMarker === id
                ? FleetEventIcon
                : FleetEventIcon
              : CompletedTripIcon;
          default:
            return FleetEventIcon;
        }
      }
      case "Alerts": {
        switch (category) {
          case "fleet":
            // return focusedCategory === "fleet" ? FleetHoverIcon : currentMarker === id ? FleetAlertIcon : FleetAlertIcon;
            return tripStatus === "Live"
              ? currentMarker === id
                ? FleetAlertIcon
                : FleetAlertIcon
              : CompletedTripIcon;
          default:
            return FleetAlertIcon;
        }
        break;
      }
      case "Incident": {
        switch (category) {
          case "fleet":
            //return focusedCategory === "fleet" ? FleetHoverIcon :  currentMarker === id ? FleetIncidentIcon : FleetIncidentIcon;
            return tripStatus === "Live"
              ? currentMarker === id
                ? FleetIncidentIcon
                : FleetIncidentIcon
              : CompletedTripIcon;
          default:
            return FleetIncidentIcon;
        }
      }
      default:
        return FleetIncidentIcon;
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

  const toggleInfoWindow = (
    markerId: string,
    type: string,
    location: any,
    tripId: any
  ) => {
    setMapDefaultView(false);
    setIsMarkerClicked(true);
    setNotificationPanelActive(true);
    setTabIndex(getTabIndex(type));
    setCurrentMarker((prev: any) => {
      if (prev && prev === markerId) {
        map?.panTo(fleetManagementCenter);
        return "";
      } else {
        map?.panTo(location);
        return markerId;
      }
    });
    setSelectedNotification((prev: any) => {
      return prev && prev == markerId ? "" : markerId;
    });
    mapPageName === "fleet" && handleMarkerIconClick(tripId);
  };

  const handleMarkerClose = () => {
    setSelectedNotification("");
    setIsMarkerClicked(false);
    map?.panTo(fleetManagementCenter);
    map?.setZoom(selectedContainerStyle?.is4kDevice ? 16.2 : 15);
    setSelectedMarker("");
    mapPageName === "fleet" && handleMarkerCancel();
  };

  const handleExpandListItem = () => {
    setSelectedNotification("");
  };

  useEffect(() => {
    setSelectedMarker("");
    setCurrentMarker("");
    setSelectedNotification("");
  }, [tabIndex, tabMainIndex, tripsTabIndex]);

  let lineSymbol = {
    path: "M 0,-1 0,1",
    strokeOpacity: 10,
    scale: 4,
  };

  function handleZoomChanged() {
    // console.log("handleZoomChanged", this.getZoom()) //this refers to Google Map instance
  }

  const clustererRef = useRef<any>();
  useEffect(() => {
    clustererRef.current?.repaint();
  }, [markers, marker]);

  const liveMarkerMovement = useMemo(() => {
    return (
      <>
        {dataPoints &&
          dataPoints.length > 0 &&
          window.google &&
          window.google.maps && (
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
            />
          )}
        {mapPageName === "fleet" && dataPoints && dataPoints.length > 0 && (
          <PolylineF
            path={dataPoints}
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

        {mapPageName === "fleet" && dataPoints && dataPoints.length > 0 && (
          <>
            <PolylineF
              path={dataPoints}
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
                currentMarker={currentMarker}
                focusedCategory={focusedCategory}
                location={dataPoints[dataPoints.length - 1]}
                direction={"NE"}
                pageName={"FleetManagement"}
                handleViewDetails={handleViewDetails}
                handleVideoDetails={handleVideoDetails}
                mapPageName={mapPageName}
                selectedTheme={selectedTheme}
              />
            )}
            {/* <Marker position={dataPoints[dataPoints.length - 1]} /> */}
          </>
        )}
      </>
    );
  }, [dataPoints, mapPageName, map, googleMapsApiKeyResponse]);

  useEffect(() => {
    if (window?.google?.maps && mapDefaultView) {
      const bounds = new window.google.maps.LatLngBounds();
      markers?.forEach((mapMarker: any) => {
        bounds.extend({
          lat: parseFloat(mapMarker?.location?.lat),
          lng: parseFloat(mapMarker?.location?.lng),
        });
      });
      map?.fitBounds(bounds);
      setCurrentMarker("");
      setSelectedNotification("");
      setSelectedMarker("");
      setIsMarkerClicked(false);
    }
  }, [map, mapDefaultView]);

  const handleMapTypeChanged = () => {
    if (map) {
      const newMapType = map.getMapTypeId();
      setMapType(newMapType);
    }
  };

  // trips code

  const TripsMarker = useMemo(() => {
    return (
      <MarkerClustererF
        averageCenter
        enableRetinaIcons
        maxZoom={
          selectedContainerStyle?.is4kDevice ? 16.2 : currentMarker ? 6 : 17
        }
        gridSize={selectedContainerStyle?.is4kDevice ? 80 : 50}
        onCenterChanged={() => {
          setMapDefaultView(false);
        }}
      >
        {(clusterer: any) => (
          <div>
            {markers?.map((singleMarker: any) => {
              // if (!window.google) return null;
              return (
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
                  handleViewDetails={handleViewDetails}
                  handleVideoDetails={handleVideoDetails}
                  tripsTabIndex={tripsTabIndex}
                />
              );
            })}
          </div>
        )}
      </MarkerClustererF>
    );
  }, [markers, tabMainIndex, tripsTabIndex, currentMarker]);

  return (
    <>
      {useMemo(
        () =>
          isLoaded && (
            <GoogleMap
              mapContainerStyle={parkingMapContainerStyle}
              center={
                dataPoints?.length > 0 &&
                map.panTo(dataPoints && dataPoints[dataPoints.length - 1])
              }
              zoom={dataPoints?.length > 0 && zoomValue}
              onLoad={setMap}
              options={getMapTypeControls()}
              mapContainerClassName={googleMapStyle}
              onZoomChanged={handleZoomChanged}
              onMapTypeIdChanged={handleMapTypeChanged}
              onCenterChanged={() => {
                setMapDefaultView(false);
              }}
            >
              {tabMainIndex === 0 ? (
                TripsMarker
              ) : (
                <MarkerClustererF
                  averageCenter
                  enableRetinaIcons
                  maxZoom={selectedContainerStyle?.is4kDevice ? 16.2 : 15}
                  gridSize={selectedContainerStyle?.is4kDevice ? 80 : 50}
                  onCenterChanged={() => {
                    setMapDefaultView(false);
                  }}
                >
                  {(clusterer: any) => (
                    <div>
                      {markers?.map((singleMarker: any) => {
                        // if (!window.google) return null;
                        if (
                          singleMarker?.tripStatus === "Live" &&
                          singleMarker?.tripId &&
                          singleMarker?.reason &&
                          currentMarker !== singleMarker?.id
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
                                handleViewDetails={handleViewDetails}
                                handleVideoDetails={handleVideoDetails}
                              />
                            </>
                          );
                        } else if (
                          singleMarker?.category !== "fleet" &&
                          location?.pathname !== "/fleetManagement"
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
                                handleViewDetails={handleViewDetails}
                                handleVideoDetails={handleVideoDetails}
                                selectedTheme={selectedTheme}
                              />
                            </>
                          );
                        }
                      })}
                    </div>
                  )}
                </MarkerClustererF>
              )}
              {liveMarkerMovement}
            </GoogleMap>
          ),
        [
          mapPageName,
          markers,
          currentMarker,
          liveMarkerMovement,
          googleMapsApiKeyResponse,
          isLoaded,
          // mapDefaultView,
          map,
          tabMainIndex,
          tripsTabIndex,
          // liveMarkerPosition,
        ]
      )}
    </>
  );
};

export default FleetMap;
