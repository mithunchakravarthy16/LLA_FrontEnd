/** @format */

import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Button,
  Dialog,
  IconButton,
  Alert,
  Snackbar,
  Typography,
  Link,
} from "@mui/material";
import customTheme from "../../theme/theme";
import { CloseIcon } from "../../assets/fleetInfoDialogueIcons";
import useStyles from "./styles";
import Map from "components/Map";
import Geofence from "components/Geofence";
import LightCloseIcon from "../../assets/lightCloseIcon.svg";
import useTranslation from "localization/translations";
import Loader from "elements/Loader";
import {
  getAssetTrackingList,
  getAssetTrackingCreateGeofence,
  setAssetTrackingCreateGeofence,
} from "redux/actions/getAssetTrackerDetailAction";

const DialogWrapper = styled(Dialog)(({ appTheme }: { appTheme: any }) => ({
  "& .MuiDialogContent-root": {
    // padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    // padding: theme.spacing(1),
  },
  "& .MuiBackdrop-root": {
    marginTop: "0px !important",
  },
  "& .MuiPaper-root": {
    height: "80vh",
    minWidth: "75vw",
    maxWidth: "75vw",
    background: `${appTheme?.palette?.assetTrackingPage?.pageBg} !important`,
    color: "#fff",
    padding: "1%",
    "& .MuiIconButton-root:hover": {
      backgroundColor: "unset !important",
    },
  },
  "& .MuiDialog-container": {
    marginTop: "0px !important",
    // background: "rgba(11, 16, 45 / 68%) !important",
    // background: `${appTheme?.palette?.infoDialogue?.dialogueBackDropBg} !important`,
    backdropFilter: "blur(5.5px)",
    height: "100vh !important",
  },
  "& .MuiMenuItem-root": {
    color: appTheme?.palette?.infoDialogue?.headerSubTitleColor,
  },
}));

const InfoDialogGeofenceAssetTracking: React.FC<any> = (props) => {
  const dispatch = useDispatch();

  const assetsListResponse = useSelector(
    (state: any) => state.assetTracker?.assetTrackingList
  );

  const assetsListLoader = useSelector(
    (state: any) => state.assetTracker?.loadingAssetsList
  );

  const createGeofenceResponse = useSelector(
    (state: any) => state.assetTracker?.assetTrackingCreateGeofenceData
  );

  const { setIsGeofenceInfoWindowActive, selectedTheme, mapType, setMapType } =
    props;

  const [appTheme, setAppTheme] = useState(customTheme?.defaultTheme);
  const { assetsTracking } = useTranslation();

  const {
    headerStyle,
    buttonContainer,
    cancelButtonContainer,
    updateButtonContainer,
  } = useStyles({
    ...appTheme,
  });

  useEffect(() => {
    switch (selectedTheme) {
      case "light":
        setAppTheme(customTheme?.lightTheme);
        break;
      case "dark":
        setAppTheme(customTheme?.darkTheme);
        break;
      default:
        setAppTheme(customTheme?.defaultTheme);
        break;
    }
  }, [selectedTheme]);

  const [open, setOpen] = useState(!false);
  const [selectedWidth, setSelectedWidth] = useState<any>();
  const [isDrawingEnable, setIsDrawingEnable] = useState<boolean>(false);
  const [isCircleDrawing, setIsCircleDrawing] = useState<boolean>(false);
  const [polygonData, setPolygonData] = useState<any>(null);
  const [circleData, setCircleData] = useState<any>(null);
  const [circleRadius, setCircleRadius] = useState<any>(null);
  const [circleCenter, setCircleCenter] = useState<any>(null);
  const [polygonPath, setPolygonPath] = useState<any>(null);
  const [circleRadiusUnits, setCircleRadiusUnits] = useState<any>(null);
  const [isOutsideGeofenceChecked, setIsOutsideGeofenceChecked] =
    useState<boolean>(false);
  const [isBackGeofenceChecked, setIsBackGeofenceChecked] =
    useState<boolean>(false);
  const [geofenceType, setGeofenceType] = useState<string>();
  const [radiusType, setRadiusType] = useState<string>();
  const [checked, setChecked] = useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [selectedAssetValue, setSelectedAssetValue] = useState<any>("");
  const [searchData, setSearchData] = useState<any>([]);
  const [searchSelectedData, setSearchSelectedData] = useState<any>([]);
  const [selectAssetsList, setSelectAssetsList] = useState<any>([]);
  const [selectAssetIds, setSelectAssetIds] = useState<any>([]);
  const [map, setMap] = useState<any>(null);
  const [geofenceName, setGeofenceName] = useState<any>();
  const [isCircleEnbled, setIsCircleEnbled] = useState<boolean>(false);
  const [isPolygonEnbled, setIsPolygonEnbled] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    dispatch(getAssetTrackingList({}));
    dispatch(setAssetTrackingCreateGeofence({}));
  }, []);

  useEffect(() => {
    if (assetsListResponse?.status === 200) {
      const list: any = [];
      assetsListResponse?.data?.map((item: any) => {
        list?.push({
          label: item?.assetName,
          value: item?.assetName,
          assetId: item?.assetId,
          location: item?.location,
        });
      });
      setSelectAssetsList(list);
    }
  }, [assetsListResponse]);

  useEffect(() => {
    if (createGeofenceResponse?.status === 200) {
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        dispatch(setAssetTrackingCreateGeofence({}));
        setIsGeofenceInfoWindowActive(false);
      }, 1000);
    }
  }, [createGeofenceResponse]);

  const handleClose = () => {
    setOpen(!open);
    setIsGeofenceInfoWindowActive(false);
  };

  useEffect(() => {
    if (window.innerWidth > 3839) {
      setSelectedWidth({
        width: 1300,
        height: 500,
        is4kDevice: true,
      });
    } else if (window.innerWidth > 3071) {
      setSelectedWidth({
        width: 900,
        height: 400,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 2047) {
      setSelectedWidth({
        width: 600,
        height: 230,
        is4kDevice: false,
      });
    } else if (window.innerHeight > 936) {
      setSelectedWidth({
        width: 550,
        height: 200,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1791) {
      setSelectedWidth({
        width: 580,
        height: 220,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1535) {
      setSelectedWidth({
        width: 480,
        height: 200,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1359) {
      setSelectedWidth({
        width: 400,
        height: 160,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1343) {
      setSelectedWidth({
        width: 430,
        height: 180,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1279) {
      setSelectedWidth({
        width: 390,
        height: 160,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1151) {
      setSelectedWidth({
        width: 350,
        height: 140,
        is4kDevice: false,
      });
    } else if (window.innerWidth > 1023) {
      setSelectedWidth({
        width: 300,
        height: 90,
        is4kDevice: false,
      });
    }
  }, []);

  const onCircleCompleteLocation = (
    centerCoOrdinates: any,
    drawRadius: any
  ) => {
    const startLatLng = new google.maps.LatLng(centerCoOrdinates);
    // const circle = new window.google.maps.Circle({
    //   center: startLatLng,
    //   radius: drawRadius,
    // })
    //   .getBounds()
    //   ?.contains(selectedViewDetailsData?.location);

    // if (circle) {
    //   setIsGeofenceLocation(true);
    // } else {
    //   setIsGeofenceLocation(false);
    // }
  };

  const onPolygonCompleteLocation = (path: any) => {
    const polygon = new window.google.maps.Polygon({
      paths: path,
    });

    // const contains = window.google.maps.geometry.poly.containsLocation(
    //   new window.google.maps.LatLng(
    //     selectedViewDetailsData?.location?.lat,
    //     selectedViewDetailsData?.location?.lng
    //   ),
    //   polygon
    // );

    // if (contains) {
    //   setIsGeofenceLocation(true);
    // } else {
    //   setIsGeofenceLocation(false);
    // }
  };

  const handleCircleDrag = (centerCoOrdinates: any) => {
    polygonData?.setMap(null);
    circleData?.setMap(null);
    const startLatLng = new google.maps.LatLng(centerCoOrdinates);
    // const circle = new window.google.maps.Circle({
    //   center: startLatLng,
    //   radius: circleRadius,
    // })
    //   .getBounds()
    //   ?.contains(selectedViewDetailsData?.location);

    // if (circle) {
    //   setIsGeofenceLocation(true);
    // } else {
    //   setIsGeofenceLocation(false);
    // }
  };

  const handleCircleLatChange = () => {
    polygonData?.setMap(null);
    circleData?.setMap(null);
  };

  const handleGeofencePolygonClick = () => {
    setIsCircleDrawing(false);
    setIsDisabled(true);
    circleData?.setMap(null);
    polygonData?.setMap(null);
    map?.setZoom(15);
  };

  const handleGeofenceCircleClick = () => {
    setIsCircleDrawing(true);
    setIsDisabled(true);
    circleData?.setMap(null);
    polygonData?.setMap(null);
    map?.setZoom(15);
  };

  // const addressFound = async (LatLng: any) => {
  //   const geocoder: any = new window.google.maps.Geocoder();
  //   const location1: any = new window.google.maps.LatLng(LatLng);
  //   return new Promise(function (resolve, reject) {
  //     geocoder.geocode({ latLng: location1 }, (results: any, status: any) => {
  //       if (status === "OK") {
  //         resolve(results[0].formatted_address);
  //       } else {
  //         reject(new Error("Couldnt't find the address " + status));
  //       }
  //     });
  //   });
  // };

  const handleSaveClick = async () => {
    const payload = {
      assetId: selectAssetIds,
      geofenceType: isCircleEnbled ? "Circular" : "Polygon",
      geofenceName: geofenceName,
      outSideofGeofence: isOutsideGeofenceChecked,
      backToGeofence: isBackGeofenceChecked,
      radius: circleRadius,
      location: isCircleEnbled ? [circleCenter] : polygonPath,
      area: "",
      recipients: ["string"],
    };
    dispatch(getAssetTrackingCreateGeofence(payload));
  };

  const handleSearch = (e: any) => {
    setSelectedAssetValue(e.target.value);
    let searchResult = selectAssetsList?.filter((data: any) => {
      return data?.value
        ?.toString()
        .toLowerCase()
        .includes(e.target.value?.toString().toLowerCase());
    });
    setSearchData(searchResult);
  };

  const handleListItemClick = (e: any, obj: any) => {
    const data: any = {
      value: obj?.value,
      label: obj?.value,
      location: obj?.location,
      assetId: obj?.assetId,
    };
    const selectedData = selectAssetsList.filter(
      (item: any) => item.value !== obj?.value
    );
    const ids: any = [];
    ids.push(obj?.assetId);
    setSelectAssetsList(selectedData);
    setSearchSelectedData([...searchSelectedData, data]);
    setSelectAssetIds([...selectAssetIds, ...ids]);
    setSearchData((prev: any) => {
      return prev.filter((item: any) => item?.value !== obj?.value);
    });
  };

  const handleDelete = (datObj: any) => () => {
    const deletedData = assetsListResponse?.data?.find(
      (item: any) => item?.assetName === datObj?.value
    );
    const data: any = {
      value: deletedData?.assetName,
      label: deletedData?.assetName,
      location: deletedData?.location,
      assetId: deletedData?.assetId,
    };

    const removedData = searchSelectedData?.filter(
      (item: any) => item?.value !== datObj?.value
    );

    const removedIds = selectAssetIds?.filter(
      (id: any) => id !== datObj?.assetId
    );

    setSelectAssetsList([...selectAssetsList, data]);
    setSearchSelectedData(removedData);
    setSelectAssetIds(removedIds);
    setSearchData([...searchData, data]);
  };

  const handleAlertClose = () => {
    setSuccess(false);
  };

  return (
    <>
      {success && createGeofenceResponse?.status && (
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={success}
          onClose={handleAlertClose}
          sx={{ bottom: "7.5vw !important" }}
        >
          <Alert
            onClose={handleAlertClose}
            severity={
              createGeofenceResponse?.status !== 200 ? "error" : "success"
            }
            sx={{ width: "100%" }}
          >
            {createGeofenceResponse?.status === 200 && (
              <div style={{ display: "flex" }}>
                <Typography>Successfully Created Geofence.</Typography>
              </div>
            )}
          </Alert>
        </Snackbar>
      )}

      <DialogWrapper open={open} sx={{ top: "0px" }} appTheme={appTheme}>
        <div>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              padding: "0.5%",
              right: "0.1%",
              top: "1.5%",
              color: "transparent",
              width: "4.2%",
              height: "4.2%",
              transition: "none",
            }}
          >
            <img
              width={"100%"}
              height={"100%"}
              src={selectedTheme === "light" ? LightCloseIcon : CloseIcon}
            />
          </IconButton>
        </div>
        {assetsListLoader ? (
          <Loader isHundredVh={false} />
        ) : (
          <Grid container xs={12} style={{ height: "100%" }}>
            <Grid item xs={12} className={headerStyle}>
              <div>GEOFENCE</div>
            </Grid>
            <Grid item xs={12} style={{ height: "94%", paddingTop: "1%" }}>
              <Grid container>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                  <Geofence
                    is4kDevice={selectedWidth?.is4kDevice}
                    isCircleDrawing={isCircleDrawing}
                    setIsCircleDrawing={setIsCircleDrawing}
                    setIsDrawingEnable={setIsDrawingEnable}
                    circleRadius={circleRadius}
                    circleCenter={circleCenter}
                    setCircleRadius={setCircleRadius}
                    setCircleCenter={setCircleCenter}
                    handleCircleLatChange={handleCircleLatChange}
                    setCircleRadiusUnits={setCircleRadiusUnits}
                    circleRadiusUnits={circleRadiusUnits}
                    isOutsideGeofenceChecked={isOutsideGeofenceChecked}
                    isBackGeofenceChecked={isBackGeofenceChecked}
                    setIsOutsideGeofenceChecked={setIsOutsideGeofenceChecked}
                    setIsBackGeofenceChecked={setIsBackGeofenceChecked}
                    setGeofenceType={setGeofenceType}
                    geofenceType={geofenceType}
                    radiusType={radiusType}
                    setRadiusType={setRadiusType}
                    setPolygonPath={setPolygonPath}
                    checked={checked}
                    isDisabled={isDisabled}
                    setChecked={setChecked}
                    setIsDisabled={setIsDisabled}
                    polygonPath={polygonPath}
                    handleGeofencePolygonClick={handleGeofencePolygonClick}
                    handleGeofenceCircleClick={handleGeofenceCircleClick}
                    isGeofence={true}
                    selectedAssetValue={selectedAssetValue}
                    searchData={searchData}
                    searchSelectedData={searchSelectedData}
                    handleSearch={handleSearch}
                    handleListItemClick={handleListItemClick}
                    handleDelete={handleDelete}
                    selectedTheme={selectedTheme}
                    geofenceName={geofenceName}
                    setGeofenceName={setGeofenceName}
                    isCircleEnbled={isCircleEnbled}
                    setIsCircleEnbled={setIsCircleEnbled}
                    isPolygonEnbled={isPolygonEnbled}
                    setIsPolygonEnbled={setIsPolygonEnbled}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                  <Map
                    mapType={mapType}
                    setMapType={setMapType}
                    markers={searchSelectedData}
                    marker={""}
                    currentMarker={""}
                    setCurrentMarker={() => {}}
                    focusedCategory={""}
                    mapPageName={"Asset Tracking"}
                    setIsMarkerClicked={() => {}}
                    setSelectedNotification={() => {}}
                    setNotificationPanelActive={() => {}}
                    setTabIndex={() => {}}
                    isDrawingEnable={isDrawingEnable}
                    isCircleDrawing={isCircleDrawing}
                    setCircleData={setCircleData}
                    setCircleRadius={setCircleRadius}
                    setCircleCenter={setCircleCenter}
                    setPolygonPath={setPolygonPath}
                    setPolygonData={setPolygonData}
                    setIsCircleDrawing={setIsCircleDrawing}
                    setIsDrawingEnable={setIsDrawingEnable}
                    circleRadius={circleRadius}
                    circleCenter={circleCenter}
                    handleGeofenceCircleDrag={handleCircleDrag}
                    setCircleRadiusUnits={setCircleRadiusUnits}
                    circleRadiusUnits={circleRadiusUnits}
                    polygonPath={polygonPath}
                    // markerArray={[selectedViewDetailsData]}
                    onCircleCompleteLocation={onCircleCompleteLocation}
                    onPolygonCompleteLocation={onPolygonCompleteLocation}
                    selectedTheme={selectedTheme}
                    setMap={setMap}
                    map={map}
                  />
                </Grid>
                <Grid item xs={12}>
                  <div className={buttonContainer}>
                    <div className={cancelButtonContainer}>
                      <Button variant="outlined" onClick={handleClose}>
                        {assetsTracking.cancel}
                      </Button>
                    </div>
                    <div className={updateButtonContainer}>
                      <Button
                        variant="contained"
                        disabled={
                          (isCircleEnbled && circleCenter === null) ||
                          (!isCircleEnbled && polygonPath === null)
                        }
                        onClick={handleSaveClick}
                      >
                        {assetsTracking.save}
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </DialogWrapper>
    </>
  );
};

export default InfoDialogGeofenceAssetTracking;
