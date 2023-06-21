import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "elements/Button";
import theme from "../../theme/theme";
import CloseIcon from "../../assets/markers/closeIcon.svg";
import useStyles from "./styles";

const NotificationListItems = (props: any) => {
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
      notificationCategory,
      currentTimeStamp,
      equipment,
      subTitle,
    },
    handleExpandListItem,
    selectedNotification,
    refs,
    pageName,
    handleMarkerClose,
  } = props;
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

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
  } = useStyles({ ...appTheme, pageName: pageName });

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
                  <img src={CloseIcon} width={"20px"} />
                </div>
              </div>
            ) : (
              <div className={listItemTitle}>{title}</div>
            )}
            <div className={expandedListItemRow2}>
              {category === "parking" ? `Vehicle LPN : ${entity}` : `${entity}`}{" "}
            </div>
            <div className={expandedListItemRow3}>
              {equipment && `${equipment} | `}
              {subTitle ? subTitle : area}
            </div>
            {venue && <div className={expandedListItemRow3}>{venue}</div>}

            <div className={expandedListItemRow4}>
              <div className={buttonStyle}>
                <Button variant="contained" handleClick={() => null}>
                  Take Action
                </Button>
              </div>
              <div className={timeStampStyle}>{currentTimeStamp}</div>
            </div>
          </div>
        ) : (
          <div className={collapsedListItems}>
            <div className={listItemTitle}>{title}</div>
            <div className={collapsedlistItemRow2}>
              <div className={listItemSubTitle}>
                {equipment && `${equipment} | `}
                {subTitle ? subTitle : area}
              </div>
              <div className={timeStampStyle}>{currentTimeStamp}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NotificationListItems;
