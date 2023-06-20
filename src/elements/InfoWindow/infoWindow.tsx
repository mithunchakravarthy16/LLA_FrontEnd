import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import theme from "../../theme/theme";
import useTranslation from "../../localization/translations";
import useStyles from "./styles";

const InfoWindow: React.FC<any> = (props) => {
  const {} = props;
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  const {} = useTranslation();

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const {
    rootContainer,
    itemTitleStyle,
    itemAreaStyle,
    expandedListClass,
    collapsedListClass,
    displayFlex,
    itemListCount,
    itemListName,
    selectedButtonStyles,
    timeStampStyle,
    markerCloseIcon,
    itemListIconStyle,
    connectedStatusButtonStyle,
    connectedButtonPosition,
    disConnectedStatusButtonStyle,
    expandedListClassViewDetails,
    markerCloseIconDashboard,
    itemListStyle,
    trailerAreaStyle,
    trailerLocationStyle,
    trailerLocationTextStyle,
    trailerLocationIconStyle,
    trailerArrowStyle,
    NotificationInfoWindowContentSection,
  } = useStyles(appTheme);

  return (
    <div className={rootContainer}>
      <div className={expandedListClass}>
        <div className={displayFlex}>
          <div className={itemTitleStyle}>{"title"}</div>
          <div className={markerCloseIcon}>x</div>
        </div>
      </div>
    </div>
  );
};

export default InfoWindow;
