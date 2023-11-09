/** @format */
//@ts-nocheck
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import Tooltip from "elements/Tooltip";
import useTranslation from "localization/translations";

const NotificationListItems = (props: any) => {
  const {
    data,
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
    markerType,
    selectedAssetMainTab,
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
      {data &&
        data?.map((item: any) => {
          if (item?.category === "security" || item?.category === "lighting") {
            return (
              <div
                className={rootContainer}
                onClick={() =>
                  handleExpandListItem(item?.id, item?.markerId, item)
                }
                ref={refs && refs[item?.id]}
                key={item?.id}
              >
                {selectedNotification === item?.id ||
                pageName === "markerCallout" ? (
                  <div className={expandedListItems}>
                    {pageName === "markerCallout" ? (
                      <div className={listItemCallout}>
                        <div
                          className={listItemTitle}
                          style={{ marginBottom: "0 !important" }}
                        >
                          {item?.title}
                        </div>
                        <div
                          className={markerCloseIcon}
                          onClick={handleMarkerClose}
                        >
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
                      <div className={listItemTitle}>{item?.title}</div>
                    )}
                    <div className={expandedListItemRow2}>{item?.area}</div>

                    <div className={expandedListItemRow3}>
                      {item?.equipment && `${item?.equipment} | `}
                      {item?.subTitle
                        ? item?.subTitle
                        : item?.area && item?.area}
                    </div>

                    <div className={expandedListItemRow4}>
                      <div className={buttonStyle}>
                        <Button variant="contained" handleClick={() => null}>
                          {item?.category === "asset"
                            ? viewDetails
                            : takeAction}
                        </Button>
                      </div>
                      <div className={timeStampStyle}>
                        {item?.currentTimeStamp}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={collapsedListItems}>
                    <div className={collapsedListItemTitle}>{item?.title}</div>
                    <div className={collapsedlistItemRow2}>
                      <div className={collapsedListItemSubTitle}>
                        {item?.equipment && `${item?.equipment} | `}
                        {item?.subTitle ? item?.subTitle : item?.area}
                      </div>
                      <div className={collapsedTimeStampStyle}>
                        {item?.currentTimeStamp}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          } else if (item?.category === "fleet") {
            {
              return (
                <div
                  className={rootContainer}
                  onClick={() =>
                    handleExpandListItem(item?.id, item?.markerId, item)
                  }
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
                          <div className={listItemTitle}>{item?.title}</div>
                          <div
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
                      )}
                      <div className={expandedListItemRow2}>
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
                            handleClick={() => handleViewDetails(data)}
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
                        <div className={collapsedListItemTitle}>
                          {item?.title}
                        </div>
                        <div
                          className={markerCloseIcon}
                          onClick={(e: any) => handleVideoDetails(e, data)}
                        >
                          <img
                            src={
                              selectedTheme === "light"
                                ? VideoLightIcon
                                : VideoIcon
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
                          } , Driver-${
                            item?.driverName ? item?.driverName : ""
                          }`}
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
            }
          } else if (
            item?.category === "asset" &&
            selectedAssetMainTab !== "trackers"
          ) {
            const testDateUtc = moment.utc(item?.notificationDate);
            const localDate = testDateUtc.local();
            {
              return (
                <div
                  className={rootContainer}
                  onClick={() =>
                    handleExpandListItem(item?.id, item?.markerId, item)
                  }
                  ref={refs && refs[item?.id]}
                >
                  {selectedNotification === item?.id ||
                  pageName === "markerCallout" ? (
                    <div className={expandedListItems}>
                      {pageName === "markerCallout" ? (
                        <div className={listItemCallout}>
                          <div className={listItemTitle}>{item?.title}</div>
                          <div
                            className={markerCloseIcon}
                            onClick={handleMarkerClose}
                          >
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
                        <div className={listItemTitle}>{item?.title}</div>
                      )}
                      {item?.area && (
                        <div className={expandedListItemRow2}>
                          {item?.area?.length > 47 ? (
                            <>
                              <Tooltip
                                tooltipValue={item?.area}
                                placement={"bottom"}
                                offset={[0, 10]}
                                fontSize={[14]}
                                padding={[2]}
                                pageName={"markerCallout"}
                              >
                                {" "}
                                {truncateString(item?.area, 47)}
                              </Tooltip>
                            </>
                          ) : (
                            item?.area
                          )}
                        </div>
                      )}
                      {markerType === "assetLiveMarker" ? (
                        <>
                          <div className={expandedListItemRow2}>
                            {item?.currentArea?.length > 47 ? (
                              <>
                                <Tooltip
                                  tooltipValue={item?.currentArea}
                                  placement={"bottom"}
                                  offset={[0, 10]}
                                  fontSize={[14]}
                                  padding={[2]}
                                  pageName={"markerCallout"}
                                >
                                  {" "}
                                  {truncateString(item?.currentArea, 47)}
                                </Tooltip>
                              </>
                            ) : (
                              item?.currentArea
                            )}
                          </div>
                          <div className={expandedListItemRow3}>
                            {item?.description?.length > 45 ? (
                              <>
                                <Tooltip
                                  tooltipValue={item?.description}
                                  placement={"bottom"}
                                  offset={[0, 10]}
                                  fontSize={[14]}
                                  padding={[2]}
                                  pageName={"markerCallout"}
                                >
                                  {" "}
                                  {truncateString(item?.description, 45)}
                                </Tooltip>
                              </>
                            ) : (
                              item?.description
                            )}
                          </div>
                        </>
                      ) : (
                        <div className={expandedListItemRow3}>
                          {item?.description?.length > 45 ? (
                            <>
                              <Tooltip
                                tooltipValue={item?.description}
                                placement={"bottom"}
                                offset={[0, 10]}
                                fontSize={[14]}
                                padding={[2]}
                                pageName={"markerCallout"}
                              >
                                {" "}
                                {truncateString(item?.description, 45)}
                              </Tooltip>
                            </>
                          ) : (
                            item?.description
                          )}
                        </div>
                      )}

                      {item?.venue && (
                        <div className={expandedListItemRow3}>
                          {item?.venue}
                        </div>
                      )}

                      <div className={expandedListItemRow4}>
                        <div className={buttonStyle}>
                          <Button
                            variant="contained"
                            handleClick={() =>
                              handleAssetViewDetails(item, markerType)
                            }
                          >
                            {viewDetails}
                          </Button>
                        </div>
                        <div className={timeStampStyle}>
                          {localDate.format("MM-DD-YYYY | HH:mm A")}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={collapsedListItems}>
                      <div className={collapsedListItemTitle}>
                        {item?.title}
                      </div>
                      <div className={collapsedlistItemRow2}>
                        <div className={collapsedListItemSubTitle}>
                          {item?.description?.length > 37 ? (
                            <>
                              <Tooltip
                                tooltipValue={item?.description}
                                placement={"bottom"}
                                offset={[0, 10]}
                                fontSize={[14]}
                                padding={[2]}
                                pageName={"markerCallout"}
                              >
                                {" "}
                                {truncateString(item?.description, 37)}
                              </Tooltip>
                            </>
                          ) : (
                            item?.description
                          )}
                        </div>
                        <div className={collapsedTimeStampStyle}>
                          {localDate.format("MM-DD-YYYY | HH:mm A")}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
          } else if (
            item?.category === "asset" &&
            selectedAssetMainTab === "trackers"
          ) {
            const testDateUtc = moment.utc(item?.lastUpdated);
            const localDate = testDateUtc.local();
            {
              return (
                <div
                  className={rootContainer}
                  onClick={() =>
                    handleExpandListItem(item?.id, item?.markerId, item)
                  }
                  ref={refs && refs[item?.id]}
                >
                  {selectedNotification === item?.id ||
                  pageName === "markerCallout" ? (
                    <div className={expandedListItems}>
                      {pageName === "markerCallout" ? (
                        <div className={listItemCallout}>
                          <div className={listItemTitle}>{item?.title}</div>
                          <div
                            className={markerCloseIcon}
                            onClick={handleMarkerClose}
                          >
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
                        <div className={listItemTitle}>{item?.title}</div>
                      )}

                      {item?.description && (
                        <div className={expandedListItemRow2}>
                          {item?.description?.length > 47 ? (
                            <>
                              <Tooltip
                                tooltipValue={item?.description}
                                placement={"bottom"}
                                offset={[0, 10]}
                                fontSize={[14]}
                                padding={[2]}
                                pageName={"markerCallout"}
                              >
                                {" "}
                                {truncateString(item?.description, 47)}
                              </Tooltip>
                            </>
                          ) : (
                            item?.description
                          )}
                        </div>
                      )}

                      <div className={expandedListItemRow4}>
                        <div className={buttonStyle}>
                          <Button
                            variant="contained"
                            handleClick={() =>
                              handleAssetViewDetails(item, markerType)
                            }
                          >
                            {viewDetails}
                          </Button>
                        </div>
                        <div className={timeStampStyle}>
                          {localDate.format("MM-DD-YYYY | HH:mm A")}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={collapsedListItems}>
                      <div className={collapsedListItemTitle}>
                        {item?.title}
                      </div>
                      <div className={collapsedlistItemRow2}>
                        <div className={collapsedListItemSubTitle}>
                          {item?.description?.length > 47 ? (
                            <>
                              <Tooltip
                                tooltipValue={item?.description}
                                placement={"bottom"}
                                offset={[0, 10]}
                                fontSize={[14]}
                                padding={[2]}
                                // pageName={"markerCallout"}
                              >
                                {" "}
                                {truncateString(item?.description, 47)}
                              </Tooltip>
                            </>
                          ) : (
                            item?.description
                          )}
                        </div>
                        {/* <div className={collapsedTimeStampStyle}>
                          {localDate.format("MM-DD-YYYY | HH:mm A")}
                        </div> */}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
          } else {
            return (
              <div
                className={rootContainer}
                onClick={() =>
                  handleExpandListItem(item?.id, item?.markerId, item)
                }
                ref={refs && refs[item?.id]}
              >
                {selectedNotification === item?.id ||
                pageName === "markerCallout" ? (
                  <div className={expandedListItems}>
                    {pageName === "markerCallout" ? (
                      <div className={listItemCallout}>
                        <div className={listItemTitle}>
                          {item?.title?.length > 30 ? (
                            <>
                              <Tooltip
                                tooltipValue={item?.title}
                                placement={"bottom"}
                                offset={[0, 10]}
                                fontSize={[14]}
                                padding={[2]}
                                pageName={"markerCallout"}
                              >
                                {" "}
                                {truncateString(item?.title, 30)}
                              </Tooltip>
                            </>
                          ) : (
                            item?.title
                          )}
                        </div>
                        <div
                          className={markerCloseIcon}
                          onClick={handleMarkerClose}
                        >
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
                      <div className={listItemTitle}>{item?.title}</div>
                    )}
                    {item?.category !== "fleet" && (
                      <div className={expandedListItemRow2}>
                        {item?.category === "parking"
                          ? `Vehicle  : ${item?.entity}`
                          : `${item?.area}`}{" "}
                      </div>
                    )}

                    <div className={expandedListItemRow3}>
                      {item?.equipment && `${item?.equipment} | `}
                      {item?.subTitle
                        ? item?.subTitle
                        : item?.area && item?.area}
                    </div>
                    {item?.category !== "outdoor" && item?.venue && (
                      <div className={expandedListItemRow3}>{item?.venue}</div>
                    )}

                    <div className={expandedListItemRow4}>
                      <div className={buttonStyle}>
                        <Button variant="contained" handleClick={() => null}>
                          {item?.category === "asset"
                            ? viewDetails
                            : takeAction}
                        </Button>
                      </div>
                      <div className={timeStampStyle}>
                        {item?.currentTimeStamp}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={collapsedListItems}>
                    <div className={collapsedListItemTitle}>{item?.title}</div>
                    <div className={collapsedlistItemRow2}>
                      <div className={collapsedListItemSubTitle}>
                        {item?.equipment && `${item?.equipment} | `}
                        {item?.subTitle ? item?.subTitle : item?.area}
                      </div>
                      <div className={collapsedTimeStampStyle}>
                        {item?.currentTimeStamp}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          }
        })}
    </>
  );
};

export default NotificationListItems;
