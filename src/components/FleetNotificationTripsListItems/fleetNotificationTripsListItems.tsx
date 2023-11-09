/** @format */

import React, { useState, useEffect } from "react";
import Button from "elements/Button";
import theme from "../../theme/theme";
import VideoIcon from "../../assets/videoIcon.svg";
import FleetManagementCloseIcon from "../../assets/fleetManagementCloseIcon.svg";
import FleetCalloutCloseIcon from "../../assets/fleetCalloutCloseIcon.svg";
import VideoLightIcon from "../../assets/videoLightIcon.svg";
import VideoLightListIcon from "../../assets/videoLightList.svg";
import useStyles from "./styles";
import moment from "moment";
import useTranslation from "localization/translations";
import CompletedTripSourceIcon from "assets/markers/completedTripSource.svg";
import CompletedTripDestinationIcon from "assets/markers/completedTripDestination.svg";

const FleetNotificationTripsListItems = (props: any) => {
  const {
    data,
    handleTripsExpandListItem,
    selectedNotification,
    refs,
    pageName,
    handleMarkerClose,
    handleViewDetails,
    handleVideoDetails,
    mapPageName,
    notificationPageName,
    selectedTheme,
    tripsTabIndex,
  } = props;

  const [appTheme, setAppTheme] = useState<any>();

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
    sourceContent,
    sourceContentImg,
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

  const truncateString = (str: string, num: number) => {
    if (str?.length > num) {
      return str?.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      {data?.map((item: any) => {
        return (
          <div
            className={rootContainer}
            onClick={() => handleTripsExpandListItem(item?.id)}
            ref={refs && refs[item?.id]}>
            {tripsTabIndex === 0 &&
              (selectedNotification === item?.id ||
              pageName === "markerCallout" ? (
                <div className={expandedListItems}>
                  {pageName === "markerCallout" ? (
                    <>
                      <div
                        className={markerCloseIcon1}
                        onClick={handleMarkerClose}>
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
                        <div
                          className={
                            listItemTitle
                          }>{`Trip ID - ${item?.tripId}`}</div>
                      </div>
                    </>
                  ) : (
                    <div className={defaultListItem}>
                      <div
                        className={
                          listItemTitle
                        }>{`Trip ID - ${item?.tripId}`}</div>
                    </div>
                  )}
                  <div className={expandedListItemRow3}>
                    {`Vehicle#${
                      item?.vehicleId ? item?.vehicleId : ""
                    } | Driver-${item?.driverName ? item?.driverName : ""}`}
                  </div>
                  <div className={expandedListItemRow2}>
                    {truncateString(item?.source, 45)}
                  </div>
                  <div className={expandedListItemRow4}>
                    <div className={buttonStyle}>
                      <Button
                        variant="contained"
                        handleClick={() => handleViewDetails(item)}>
                        {viewDetails}
                      </Button>
                    </div>
                    <div className={timeStampStyle}>
                      {moment(item?.notificationDate).format(
                        "MM-DD-YYYY | HH:mm A"
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className={collapsedListItems}>
                  <div className={defaultListItem}>
                    <div
                      className={
                        collapsedListItemTitle
                      }>{`Trip ID - ${item?.tripId}`}</div>
                  </div>
                  <div className={collapsedlistItemRow2}>
                    <div className={collapsedListItemSubTitle}>
                      {`Vehicle#${
                        item?.vehicleId ? item?.vehicleId : ""
                      } , Driver-${
                        item?.driverName
                          ? truncateString(item?.driverName, 10)
                          : ""
                      }`}
                    </div>
                    <div className={collapsedTimeStampStyle}>
                      {moment(item?.notificationDate).format(
                        "MM-DD-YYYY | HH:mm A"
                      )}
                    </div>
                  </div>
                </div>
              ))}
            {tripsTabIndex === 1 &&
              (selectedNotification === item?.id ||
              pageName === "markerCallout" ? (
                <div className={expandedListItems}>
                  {pageName === "markerCallout" ? (
                    <>
                      <div
                        className={markerCloseIcon1}
                        onClick={handleMarkerClose}>
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
                        <div className={listItemTitle}>{item?.title}</div>
                      </div>
                    </>
                  ) : (
                    <div className={defaultListItem}>
                      <div
                        className={
                          listItemTitle
                        }>{`Device id - ${item?.deviceName}`}</div>
                    </div>
                  )}
                  <div className={expandedListItemRow3}>
                    {`Status - ${item?.deviceStatus ? item?.deviceStatus : ""}`}
                  </div>
                </div>
              ) : (
                <div className={collapsedListItems}>
                  <div className={defaultListItem}>
                    <div
                      className={
                        collapsedListItemTitle
                      }>{`Device id - ${item?.deviceName}`}</div>
                  </div>
                  <div className={collapsedlistItemRow2}>
                    <div className={collapsedListItemSubTitle}>
                      {`Status - ${
                        item?.deviceStatus ? item?.deviceStatus : ""
                      }`}
                    </div>
                    <div className={collapsedTimeStampStyle}>
                      {moment(item?.notificationDate).format(
                        "MM-DD-YYYY | HH:mm A"
                      )}
                    </div>
                  </div>
                </div>
              ))}
            {tripsTabIndex === 2 &&
              (selectedNotification === item?.id ||
              pageName === "markerCallout" ? (
                <div className={expandedListItems}>
                  {pageName === "markerCallout" ? (
                    <>
                      <div
                        className={markerCloseIcon1}
                        onClick={handleMarkerClose}>
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
                        <div className={listItemTitle}>{item?.title}</div>
                      </div>
                    </>
                  ) : (
                    <div className={defaultListItem}>
                      <div
                        className={
                          listItemTitle
                        }>{`Trip ID - ${item?.tripId}`}</div>
                    </div>
                  )}
                  {/* <div className={expandedListItemRow2}>
                    {truncateString(item?.area, 45)}
                  </div> */}
                  <div className={expandedListItemRow3}>
                    {`Vehicle#${
                      item?.vehicleId ? item?.vehicleId : ""
                    } | Driver-${item?.driverName ? item?.driverName : ""}`}
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "30px",
                      }}>
                      <span className={sourceContentImg}>
                        <img
                          src={CompletedTripSourceIcon}
                          height={selectedWidth?.is4kDevice ? 20 : 20}
                          width={selectedWidth?.is4kDevice ? 20 : 20}
                        />
                      </span>
                      <span className={sourceContent}>
                        {item?.source ? item?.source : ""}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "16px",
                      }}>
                      <span className={sourceContentImg}>
                        <img
                          src={CompletedTripDestinationIcon}
                          height={selectedWidth?.is4kDevice ? 20 : 20}
                          width={selectedWidth?.is4kDevice ? 20 : 20}
                        />
                      </span>
                      <span className={sourceContent}>
                        {item?.destination ? item?.destination : ""}
                      </span>
                    </div>
                  </div>
                  <div className={expandedListItemRow4}>
                    <div className={buttonStyle}>
                      <Button
                        variant="contained"
                        handleClick={() => handleViewDetails(item)}>
                        {viewDetails}
                      </Button>
                    </div>
                    <div className={timeStampStyle}>
                      {moment(item?.notificationDate).format(
                        "MM-DD-YYYY | HH:mm A"
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className={collapsedListItems}>
                  <div className={defaultListItem}>
                    <div
                      className={
                        collapsedListItemTitle
                      }>{`Trip ID - ${item?.tripId}`}</div>
                  </div>
                  <div className={collapsedlistItemRow2}>
                    <div className={collapsedListItemSubTitle}>
                      {`Vehicle#${
                        item?.vehicleId ? item?.vehicleId : ""
                      } , Driver-${
                        item?.driverName
                          ? truncateString(item?.driverName, 10)
                          : ""
                      }`}
                    </div>
                    <div className={collapsedTimeStampStyle}>
                      {moment(item?.notificationDate).format(
                        "MM-DD-YYYY | HH:mm A"
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        );
      })}
    </>
  );
};

export default FleetNotificationTripsListItems;
