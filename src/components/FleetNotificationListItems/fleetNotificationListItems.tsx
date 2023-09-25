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

const FleetNotificationListItems = (props: any) => {
  const {
    data,
    handleExpandListItem,
    selectedNotification,
    refs,
    pageName,
    handleMarkerClose,
    handleViewDetails,
    handleVideoDetails,
    mapPageName,
    notificationPageName,
    selectedTheme,
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
            onClick={() => handleExpandListItem(item?.id)}
            ref={refs && refs[item?.id]}
          >
            {selectedNotification === item?.id ||
            pageName === "markerCallout" ? (
              <div className={expandedListItems}>
                {pageName === "markerCallout" ? (
                  <>
                    <div
                      className={markerCloseIcon1}
                      onClick={handleMarkerClose}
                    >
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
                      <div
                        className={markerVideoIcon}
                        onClick={(e: any) => handleVideoDetails(e, item)}
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
                    <div className={listItemTitle}>{item?.title}</div>
                    <div onClick={(e: any) => handleVideoDetails(e, item)}>
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
                  {/* {`Lat:${location?.lat}, Lng:${location?.lng}`} */}{" "}
                  {truncateString(item?.area, 45)}
                </div>
                <div className={expandedListItemRow3}>
                  {`Vehicle#${
                    item?.vehicleId ? item?.vehicleId : ""
                  } | Driver-${
                    item?.driverName ? item?.driverName : ""
                  } | Trip#${item?.tripId ? item?.tripId : ""}`}
                </div>
                <div className={expandedListItemRow4}>
                  <div className={buttonStyle}>
                    <Button
                      variant="contained"
                      handleClick={() => handleViewDetails(item)}
                    >
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
                  <div className={collapsedListItemTitle}>{item?.title}</div>
                  <div
                    className={markerCloseIcon}
                    onClick={(e: any) => handleVideoDetails(e, item)}
                  >
                    <img
                      src={
                        selectedTheme === "light" ? VideoLightIcon : VideoIcon
                      }
                      width={selectedWidth?.is4kDevice ? 55 : 20}
                      height={selectedWidth?.is4kDevice ? 55 : 20}
                    />
                  </div>
                </div>
                <div className={collapsedlistItemRow2}>
                  <div className={collapsedListItemSubTitle}>
                    {`Vehicle#${
                      item?.vehicleId ? item?.vehicleId : ""
                    } , Driver-${item?.driverName ? item?.driverName : ""}`}
                  </div>
                  <div className={collapsedTimeStampStyle}>
                    {moment(item?.notificationDate).format(
                      "MM-DD-YYYY | HH:mm A"
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default FleetNotificationListItems;
