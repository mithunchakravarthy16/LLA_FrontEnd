import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, IconButton, Switch } from "@mui/material";
import CheckBox from "elements/Checkbox";
import TextField from "elements/TextField";
import CircleActiveIcon from "../../assets/Circular_Active.svg";
import CircleInActiveIcon from "../../assets/Circular_InActive.svg";
import PolygonActiveIcon from "../../assets/Polygon_Active.svg";
import PolygonInActiveIcon from "../../assets/Polygon_Inactive.svg";
import useTranslation from "../../localization/translations";
import ExclamationIcon from "../../assets/exclamationIcon.svg";
import customTheme from "../../theme/theme";
import useStyles from "./styles";

const Geofence: React.FC<any> = (props: any) => {
  const {
    is4kDevice,
    setIsCircleDrawing,
    setIsDrawingEnable,
    circleCenter,
    circleRadius,
    setCircleRadius,
    setCircleCenter,
    isCircleDrawing,
    circleRadiusUnits,
    setCircleRadiusUnits,
    isOutsideGeofenceChecked,
    isBackGeofenceChecked,
    setIsOutsideGeofenceChecked,
    setIsBackGeofenceChecked,
    setGeofenceType,
    radiusType,
    setRadiusType,
    setPolygonPath,
    isDisabled,
    checked,
    setChecked,
    setIsDisabled,
    polygonPath,
    handleGeofenceCircleClick,
    handleGeofencePolygonClick,
  } = props;

  const [isCircleEnbled, setIsCircleEnbled] = useState<boolean>(false);
  const [isPolygonEnbled, setIsPolygonEnbled] = useState<boolean>(false);
  const [appTheme, setAppTheme] = useState(customTheme?.defaultTheme);
  const [geofenceName, setGeofenceName] = useState<any>();

  const {
    customCheckbox,
    customTextField,
    mainContainer,
    geofenceContainer,
    geofenceTypes,
    geofenceMainTypes,
    geofenceCircleType,
    circularText,
    polygonContainer,
    polygonImage,
    geofenceTextContainer,
    circleContainer,
    circularRadius,
    notifyContainer,
    polygonTextContainer,
    polygonText,
    geoFenceTitle,
    geofenceSwitch,
    geofenceType,
    customTextFieldLatitude,
    geoFenceTitle1,
  } = useStyles(appTheme);

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [radius, setRadius] = useState<any>();
  const [circleLatLng, setCircleLatLng] = useState<any>();
  const {} = useTranslation();

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

  useEffect(() => {
    setRadius(circleRadius);
    setCircleLatLng(circleCenter);
  }, [circleCenter, circleRadius]);

  const handleOutsideGeofenceCheck = (event: any) => {
    setIsOutsideGeofenceChecked(event.target.checked);
  };

  const handleBacktoGeofenceCheck = (event: any) => {
    setIsBackGeofenceChecked(event.target.checked);
  };

  const handleCircleClick = () => {
    setIsCircleEnbled(true);
    setIsPolygonEnbled(false);
    setPolygonPath(null);
    setIsCircleDrawing(true);
    setIsDrawingEnable(true);
    handleGeofenceCircleClick();
  };

  const handlePolygonClick = () => {
    setIsPolygonEnbled(true);
    setIsCircleEnbled(false);
    setRadius(null);
    setCircleCenter(null);
    setCircleRadius(null);
    setIsCircleDrawing(false);
    setIsDrawingEnable(true);
    handleGeofencePolygonClick();
  };

  const handleRadiusChange = (e: any) => {
    setCircleRadius(Number(e.target.value));
  };

  const handleCircleLatChange = (e: any) => {
    setCircleCenter({ ...circleCenter, lat: Number(e.target.value) });
  };

  const handleCircleLngChange = (e: any) => {
    setCircleCenter({ ...circleCenter, lng: Number(e.target.value) });
  };

  const handleGeofenceNameChange = (e: any) => {
    setGeofenceName(e.target.value);
  };

  const handleChange = (event: any) => {
    setChecked(event.target.checked);
    setIsDisabled(event.target.checked);
    setIsDrawingEnable(event.target.checked);
  };

  // const handleCancelClick = () => {
  //   setCircleRadius(isPreviousRadius);
  //   setGeofenceName(isPreviousName);
  //   if (geoFenceType === "Circular") {
  //     setPolygonPath(null);
  //     setCircleCenter(isPreviousCircleCenter);
  //     setIsCircleEnbled(true);
  //     setIsPolygonEnbled(false);
  //   } else {
  //     setPolygonPath(isPreviousPolygonPaths);
  //     setCircleCenter(null);
  //     setIsCircleEnbled(false);
  //     setIsPolygonEnbled(true);
  //   }
  //   setIsOutsideGeofenceChecked(isPreviousOutsideGeofenceChecked);
  //   setIsBackGeofenceChecked(isPreviousBackGeofenceChecked);
  //   setIsDisabled(true);
  //   props.handleCancelClick();
  // };

  // const handleUpdateClick = () => {
  //   setIsDisabled(true);
  //   setIsPolygonEnbled(false);
  //   props.handleUpdateClick();
  //   let data = JSON.parse(localStorage.getItem("dashboardViewDetails") || "{}");

  //   data?.map((item: any) => {
  //     for (let i = 0; i < item[selectedItem?.type].length; i++) {
  //       if (item[selectedItem?.type][i]["id"] === selectedItem?.id) {
  //         item[selectedItem?.type][i]["geoFence"].backToGeofence =
  //           isBackGeofenceChecked;
  //         item[selectedItem?.type][i]["geoFence"].outsideGeofence =
  //           isOutsideGeofenceChecked;
  //         item[selectedItem?.type][i]["geoFence"].name = geoFenceName;
  //         item[selectedItem?.type][i]["geoFence"].type =
  //           circleRadius !== null ? "Circular" : "Polygon";
  //         item[selectedItem?.type][i]["geoFence"].radius = circleRadius;
  //         if (circleRadius !== null) {
  //           item[selectedItem?.type][i]["geoFence"].coOrdinates = [
  //             circleCenter,
  //           ];
  //         } else {
  //           item[selectedItem?.type][i]["geoFence"].coOrdinates = polygonPath;
  //         }
  //       }
  //     }
  //   });

  //   localStorage.setItem("dashboardViewDetails", JSON.stringify(data));
  // };

  return (
    <>
      <div className={mainContainer}>
        <div className={geofenceContainer}>
          <div className={geoFenceTitle}>{"Enabled Geofence"}</div>
          <div className={geofenceSwitch}>
            <Switch checked={checked} onChange={handleChange} />
          </div>
        </div>
        <div className={geofenceTypes}>
          <div className={geofenceType}>Geofence Type</div>
          <div className={geofenceMainTypes}>
            <div>
              <div
                className={geofenceCircleType}
                onClick={isDisabled ? handleCircleClick : () => null}
              >
                <img
                  src={!isCircleEnbled ? CircleInActiveIcon : CircleActiveIcon}
                  width={!is4kDevice ? "50px" : ""}
                />
              </div>
              <div className={circularText}>Circle</div>
            </div>
            <div className={polygonContainer}>
              <div
                className={polygonImage}
                onClick={isDisabled ? handlePolygonClick : () => null}
              >
                <img
                  src={
                    !isPolygonEnbled ? PolygonInActiveIcon : PolygonActiveIcon
                  }
                  width={!is4kDevice ? "50px" : ""}
                />
              </div>
              <div className={circularText}>Polygon</div>
            </div>
          </div>
          <div className={geofenceTextContainer}>
            <div className={geofenceType}>Geofence Name</div>
            <div className={customTextField}>
              <TextField
                value={geofenceName}
                type={"text"}
                disabled={!isDisabled}
                onChange={handleGeofenceNameChange}
                placeholder={"Enter Geofence Name"}
              />
            </div>
          </div>
        </div>
        {isCircleEnbled && (
          <>
            <div className={geoFenceTitle1}>Center Location</div>
            <div className={circleContainer}>
              <div>
                <div className={geofenceType}>Latitude</div>
                <div className={customTextFieldLatitude}>
                  <TextField
                    value={circleLatLng?.lat}
                    type={"number"}
                    disabled={!isDisabled}
                    onChange={handleCircleLatChange}
                    placeholder={"Latitude"}
                  />
                </div>
              </div>
              <div>
                <div className={geofenceType}>Longitude</div>
                <div className={customTextFieldLatitude}>
                  <TextField
                    value={circleLatLng?.lng}
                    type={"number"}
                    disabled={!isDisabled}
                    onChange={handleCircleLngChange}
                    placeholder={"Longitude"}
                  />
                </div>
              </div>
            </div>
            <div className={circularRadius}>
              <div className={geofenceType}>Geofence Radius</div>
              <div className={customTextField}>
                <TextField
                  value={radius}
                  type={"number"}
                  disabled={!isDisabled}
                  onChange={handleRadiusChange}
                  placeholder={"Geofence Radius"}
                />
              </div>
            </div>
          </>
        )}
        <div className={notifyContainer}>
          <div className={geofenceType}>Notify</div>
          <div>
            <div className={customCheckbox}>
              <CheckBox
                id={"outside-0"}
                name={"outside-0"}
                label={"Outside of Geofence"}
                isChecked={isOutsideGeofenceChecked}
                disabled={!isDisabled}
                handleCheck={(e: any) => handleOutsideGeofenceCheck(e)}
              />
            </div>
            <div className={customCheckbox}>
              <CheckBox
                id={"back-0"}
                name={"back-0"}
                label={"Back to Geofence"}
                isChecked={isBackGeofenceChecked}
                disabled={!isDisabled}
                handleCheck={(e: any) => handleBacktoGeofenceCheck(e)}
              />
            </div>
          </div>
        </div>
        {isPolygonEnbled &&
          (polygonPath === undefined || polygonPath === null) && (
            <div className={polygonTextContainer}>
              <div>
                <img src={ExclamationIcon} width={!is4kDevice ? "20px" : ""} />
              </div>
              <div className={polygonText}>
                {"Click on the map to create polygon geofence"}
              </div>
            </div>
          )}
      </div>
    </>
  );
};

export default Geofence;
