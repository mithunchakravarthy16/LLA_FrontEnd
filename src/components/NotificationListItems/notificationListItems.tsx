/** @format */

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "elements/Button";
import theme from "../../theme/theme";
import CloseIcon from "../../assets/markers/closeIcon.svg";
import VideoIcon from "../../assets/videoIcon.svg";
import FleetManagementCloseIcon from "../../assets/fleetManagementCloseIcon.svg";
import CalloutCloaseIcon from "../../assets/calloutCloaseIcon.svg";
import FleetCalloutCloseIcon from "../../assets/fleetCalloutCloseIcon.svg";
import VideoLightIcon from "../../assets/videoLightIcon.svg";
import VideoLightListIcon from "../../assets/videoLightList.svg";
import useStyles from "./styles";
import moment from "moment";
import useTranslation from "localization/translations";

const NotificationListItems = (props: any) => {
  const locations = useLocation();
  const {
    data,
    data: {
      title,
      area,
      timeStamp,
      id,
      entity,
      venue,
      category,
      notificationType,
      currentTimeStamp,
      equipment,
      subTitle,
      location,
      assetId,
      trackerId,
      vehicleId,
      tripId,
      driverName,
      notificationDate,
    },
    handleExpandListItem,
    selectedNotification,
    refs,
    pageName,
    handleMarkerClose,
    handleViewDetails,
    handleAssetViewDetails,
    handleVideoDetails,
    mapPageName,
    notificationPageName,
    selectedTheme,
  } = props;

  // const [selectedTheme, setSelectedTheme] = useState(
  //   JSON.parse(localStorage.getItem("theme")!)
  // );
  const [appTheme, setAppTheme] = useState<any>();

  //   useEffect(() => {
  //     switch (selectedTheme) {
  //       case "red":
  //         setAppTheme(theme?.redTheme);
  //         break;
  //       case "green":
  //         setAppTheme(theme?.greenTheme);
  //         break;
  //       case "yellow":
  //         setAppTheme(theme?.yellowTheme);
  //         break;
  //       case "default":
  //         setAppTheme(theme?.defaultTheme);
  //         break;
  //       default:
  //         setAppTheme(theme?.defaultTheme);
  //         break;
  //     }
  //   }, [selectedTheme]);

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

  const {
    rootContainer,
    collapsedListItems,
    expandedListItems,
    listItemTitle,
    collapsedlistItemRow2,
    listItemSubTitle,
    timeStampStyle,
    expandedListItemRow2,
    expandedListItemRow3,
    expandedListItemRow4,
    buttonStyle,
    markerCloseIcon,
    listItemCallout,
    defaultListItem,
    markerCloseIcon1,
    collapsedListItemTitle,
    collapsedListItemSubTitle,
    collapsedTimeStampStyle,
    markerVideoIcon,
  } = useStyles({
    ...appTheme,
    pageName: pageName,
    mapPageName: mapPageName,
    notificationPageName: notificationPageName,
  });

  const [selectedWidth, setSelectedWidth] = useState<any>();

  const { viewDetails, takeAction } = useTranslation();

  useEffect(() => {
    if (window.innerWidth > 3839) {
      setSelectedWidth({
        width: 820,
        height: 160,
        is4kDevice: true,
      });
    } else if (window.innerWidth < 3839) {
      setSelectedWidth({
        width: 360,
        height: 80,
        is4kDevice: false,
      });
    }
  }, []);

  if (category === "asset") {
    return (
      <>
        <div
          className={rootContainer}
          onClick={() => handleExpandListItem(id)}
          ref={refs && refs[id]}
        >
          {selectedNotification === id || pageName === "markerCallout" ? (
            <div className={expandedListItems}>
              {pageName === "markerCallout" ? (
                <div className={listItemCallout}>
                  <div className={listItemTitle}>{title}</div>
                  <div className={markerCloseIcon} onClick={handleMarkerClose}>
                    <img
                      src={
                        selectedTheme === "light"
                          ? CalloutCloaseIcon
                          : CloseIcon
                      }
                      width={selectedWidth?.is4kDevice ? 40 : 20}
                      height={selectedWidth?.is4kDevice ? 40 : 20}
                    />
                  </div>
                </div>
              ) : (
                <div className={listItemTitle}>{title}</div>
              )}
              <div className={expandedListItemRow2}>{area}</div>
              <div className={expandedListItemRow3}>
                {trackerId && trackerId} {assetId && ` | ${assetId}`}
              </div>
              {venue && <div className={expandedListItemRow3}>{venue}</div>}

              <div className={expandedListItemRow4}>
                <div className={buttonStyle}>
                  <Button
                    variant="contained"
                    handleClick={() => handleAssetViewDetails(data)}
                  >
                    {viewDetails}
                  </Button>
                </div>
                <div className={timeStampStyle}>{currentTimeStamp}</div>
              </div>
            </div>
          ) : (
            <div className={collapsedListItems}>
              <div className={collapsedListItemTitle}>{title}</div>
              <div className={collapsedlistItemRow2}>
                <div className={collapsedListItemSubTitle}>
                  {trackerId && trackerId} {assetId && ` | ${assetId}`}
                </div>
                <div className={collapsedTimeStampStyle}>
                  {currentTimeStamp}
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

  if (category === "fleet") {
    return (
      <>
        <div
          className={rootContainer}
          onClick={() => handleExpandListItem(id)}
          ref={refs && refs[id]}
        >
          {selectedNotification === id || pageName === "markerCallout" ? (
            <div className={expandedListItems}>
              {pageName === "markerCallout" ? (
                <>
                  <div className={markerCloseIcon1} onClick={handleMarkerClose}>
                    <img
                      src={
                        selectedTheme === "light"
                          ? FleetCalloutCloseIcon
                          : FleetManagementCloseIcon
                      }
                      width={selectedWidth?.is4kDevice ? 20 : 10}
                      height={selectedWidth?.is4kDevice ? 20 : 10}
                    />
                  </div>
                  <div className={listItemCallout}>
                    <div className={listItemTitle}>{title}</div>
                    <div
                      className={markerVideoIcon}
                      onClick={(e: any) => handleVideoDetails(e, data)}
                    >
                      <img
                        src={
                          selectedTheme === "light"
                            ? VideoLightListIcon
                            : VideoIcon
                        }
                        width={selectedWidth?.is4kDevice ? 55 : 20}
                        height={selectedWidth?.is4kDevice ? 55 : 20}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className={defaultListItem}>
                  <div className={listItemTitle}>{title}</div>
                  <div onClick={(e: any) => handleVideoDetails(e, data)}>
                    <img
                      src={
                        selectedTheme === "light"
                          ? VideoLightListIcon
                          : VideoIcon
                      }
                      width={selectedWidth?.is4kDevice ? 55 : 20}
                      height={selectedWidth?.is4kDevice ? 55 : 20}
                    />
                  </div>
                </div>
              )}
              <div className={expandedListItemRow2}>
                {/* {`Lat:${location?.lat}, Lng:${location?.lng}`} */} {area}
              </div>
              <div className={expandedListItemRow3}>
                {`Vehicle#${vehicleId ? vehicleId : ""} | Driver-${
                  driverName ? driverName : ""
                } | Trip#${tripId ? tripId : ""}`}
              </div>
              <div className={expandedListItemRow4}>
                <div className={buttonStyle}>
                  <Button
                    variant="contained"
                    handleClick={() => handleViewDetails(data)}
                  >
                    {viewDetails}
                  </Button>
                </div>
                <div className={timeStampStyle}>
                  {moment(notificationDate)
                    .utc()
                    .format("DD-MM-YYYY | HH:mm A")}
                </div>
              </div>
            </div>
          ) : (
            <div className={collapsedListItems}>
              <div className={defaultListItem}>
                <div className={collapsedListItemTitle}>{title}</div>
                <div
                  className={markerCloseIcon}
                  onClick={(e: any) => handleVideoDetails(e, data)}
                >
                  <img
                    src={selectedTheme === "light" ? VideoLightIcon : VideoIcon}
                    width={selectedWidth?.is4kDevice ? 55 : 20}
                    height={selectedWidth?.is4kDevice ? 55 : 20}
                  />
                </div>
              </div>
              <div className={collapsedlistItemRow2}>
                <div className={collapsedListItemSubTitle}>
                  {`Vehicle#${vehicleId ? vehicleId : ""} , Driver-${
                    driverName ? driverName : ""
                  }`}
                </div>
                <div className={collapsedTimeStampStyle}>
                  {moment(notificationDate)
                    .utc()
                    .format("DD-MM-YYYY | HH:mm A")}
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

  if (category === "security" || category === "lighting") {
    return (
      <>
        <div
          className={rootContainer}
          onClick={() => handleExpandListItem(id)}
          ref={refs && refs[id]}
        >
          {selectedNotification === id || pageName === "markerCallout" ? (
            <div className={expandedListItems}>
              {pageName === "markerCallout" ? (
                <div className={listItemCallout}>
                  <div
                    className={listItemTitle}
                    style={{ marginBottom: "0 !important" }}
                  >
                    {title}
                  </div>
                  <div className={markerCloseIcon} onClick={handleMarkerClose}>
                    <img
                      src={
                        selectedTheme === "light"
                          ? CalloutCloaseIcon
                          : CloseIcon
                      }
                      width={selectedWidth?.is4kDevice ? 40 : 20}
                      height={selectedWidth?.is4kDevice ? 40 : 20}
                    />
                  </div>
                </div>
              ) : (
                <div className={listItemTitle}>{title}</div>
              )}
              <div className={expandedListItemRow2}>{area}</div>

              <div className={expandedListItemRow3}>
                {equipment && `${equipment} | `}
                {subTitle ? subTitle : area && area}
              </div>
              {/* {(category !== "outdoor" && venue) && <div className={expandedListItemRow3}>{venue}</div>} */}

              <div className={expandedListItemRow4}>
                <div className={buttonStyle}>
                  <Button variant="contained" handleClick={() => null}>
                    {category === "asset" ? viewDetails : takeAction}
                  </Button>
                </div>
                <div className={timeStampStyle}>{currentTimeStamp}</div>
              </div>
            </div>
          ) : (
            <div className={collapsedListItems}>
              <div className={collapsedListItemTitle}>{title}</div>
              <div className={collapsedlistItemRow2}>
                <div className={collapsedListItemSubTitle}>
                  {equipment && `${equipment} | `}
                  {subTitle ? subTitle : area}
                </div>
                <div className={collapsedTimeStampStyle}>
                  {currentTimeStamp}
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className={rootContainer}
        onClick={() => handleExpandListItem(id)}
        ref={refs && refs[id]}
      >
        {selectedNotification === id || pageName === "markerCallout" ? (
          <div className={expandedListItems}>
            {pageName === "markerCallout" ? (
              <div className={listItemCallout}>
                <div className={listItemTitle}>{title}</div>
                <div className={markerCloseIcon} onClick={handleMarkerClose}>
                  <img
                    src={
                      selectedTheme === "light" ? CalloutCloaseIcon : CloseIcon
                    }
                    width={selectedWidth?.is4kDevice ? 40 : 20}
                    height={selectedWidth?.is4kDevice ? 40 : 20}
                  />
                </div>
              </div>
            ) : (
              <div className={listItemTitle}>{title}</div>
            )}
            {category !== "fleet" && (
              <div className={expandedListItemRow2}>
                {category === "parking" ? `Vehicle  : ${entity}` : `${area}`}{" "}
              </div>
            )}

            <div className={expandedListItemRow3}>
              {equipment && `${equipment} | `}
              {subTitle ? subTitle : area && area}
            </div>
            {category !== "outdoor" && venue && (
              <div className={expandedListItemRow3}>{venue}</div>
            )}

            <div className={expandedListItemRow4}>
              <div className={buttonStyle}>
                <Button variant="contained" handleClick={() => null}>
                  {category === "asset" ? viewDetails : takeAction}
                </Button>
              </div>
              <div className={timeStampStyle}>{currentTimeStamp}</div>
            </div>
          </div>
        ) : (
          <div className={collapsedListItems}>
            <div className={collapsedListItemTitle}>{title}</div>
            <div className={collapsedlistItemRow2}>
              <div className={collapsedListItemSubTitle}>
                {equipment && `${equipment} | `}
                {subTitle ? subTitle : area}
              </div>
              <div className={collapsedTimeStampStyle}>{currentTimeStamp}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NotificationListItems;
