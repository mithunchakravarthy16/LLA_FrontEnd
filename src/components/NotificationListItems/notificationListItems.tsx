import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import theme from "../../theme/theme";
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
    },
    handleExpandListItem,
    selectedNotification,
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
  } = useStyles(appTheme);

  console.log("data", data);

  return (
    <>
      <div className={rootContainer} onClick={() => handleExpandListItem(id)}>
        {selectedNotification === id ? (
          <div className={expandedListItems}>
            <div className={listItemTitle}>{title}</div>
            <div className={expandedListItemRow2}>
              {category === "parking" ? `Vehicle LPN : ${entity}` : `${entity}`}{" "}
              | {venue}
            </div>
            <div className={expandedListItemRow3}>{area}</div>
            <div className={expandedListItemRow4}>
              <div className={buttonStyle}>Take Action</div>
              <div className={timeStampStyle}>{timeStamp}</div>
            </div>
          </div>
        ) : (
          <div className={collapsedListItems}>
            <div className={listItemTitle}>{title}</div>
            <div className={collapsedlistItemRow2}>
              <div className={listItemSubTitle}>{area}</div>
              <div className={timeStampStyle}>{timeStamp}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NotificationListItems;
