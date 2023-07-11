import { useState, useEffect } from "react";
import theme from "../../theme/theme";
import Tabs from "elements/Tabs";
import useStyles from "./styles";

const ParkingSlotContainer = (props: any) => {
  const {
    parkingLotSelectionActive,
    parkingLotIndex,
    handleLotSelction,
    selectedParkingLot,
    handleParkingLot,
    tabsList,
  } = props;
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
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
    mapFilterStyle,
    customNotificationTabs,
    lotSelectionIconStyle,
    lotImageStyle,

    lotSelectionIconStyleClose,
  } = useStyles({
    ...appTheme,
    parkingLotSelectionActive: parkingLotSelectionActive,
    parkingLotIndex: parkingLotIndex,
  });

  return (
    <>
        {!parkingLotSelectionActive ? (
        <div className={lotSelectionIconStyle} onClick={handleLotSelction}>
          {selectedParkingLot}
        </div>
      ) : (
        <div className={mapFilterStyle}>
          <Tabs
            initialIndex={parkingLotIndex}
            tabsList={tabsList}
            handleTabs={handleParkingLot}
            dashboardNotificationClassName={customNotificationTabs}
            pageName={"parking"}
          />
          <div
            className={lotSelectionIconStyleClose}
            onClick={handleLotSelction}
          >
            X
          </div>
        </div>
      )}
    </>
  );
};

export default ParkingSlotContainer;
