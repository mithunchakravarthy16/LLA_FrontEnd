import { useState, useEffect } from "react";
import theme from "../../theme/theme";
import Tabs from "elements/Tabs";
import OrangeCircle from "../../assets/OrangeCircle.svg";
import useStyles from "./styles";

const ParkingSlotContainer = (props: any) => {
  const {
    parkingLotSelectionActive,
    parkingLotIndex,
    handleLotSelction,
    selectedParkingLot,
    handleParkingLot,
    tabsList,
    handleLotSelctionCloseIcon,
    selectedTheme,
  } = props;
  // const [selectedTheme, setSelectedTheme] = useState(
  //   JSON.parse(localStorage.getItem("theme")!)
  // );
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
          <img
            src={OrangeCircle}
            alt="OrangeCircle"
            width={"100%"}
            height={"100%"}
          ></img>
          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {selectedParkingLot}
          </div>
        </div>
      ) : (
        <div className={mapFilterStyle}>
          <div style={{ width: "100%" }}>
            <Tabs
              initialIndex={parkingLotIndex}
              tabsList={tabsList}
              handleTabs={handleParkingLot}
              dashboardNotificationClassName={customNotificationTabs}
              pageName={"parking"}
            />
            <div
              className={lotSelectionIconStyleClose}
              onClick={handleLotSelctionCloseIcon}
            >
              <img
                src={OrangeCircle}
                alt="OrangeCircle"
                width={"100%"}
                height={"100%"}
              />
              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                X
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ParkingSlotContainer;
