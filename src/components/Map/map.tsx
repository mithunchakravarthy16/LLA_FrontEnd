import { useState, useEffect, Fragment } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import customMapStyles from "./customMapStyles";
import theme from "../../theme/theme";
import appData from "../../data/appData";
import useStyles from "./styles";

const containerStyle = {
  width: "100%",
  height: "calc(100vh - 0px)",
};

const defaultCenter = {
  lat: 39.75055380818962,
  lng: -105.00000034678636,
};

const Map: React.FC<any> = (props) => {
  const {} = props;

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const { googleMapStyle, footerSection } = useStyles(appTheme);

  const [map, setMap] = useState<any>(null);
  const [zoomValue, setZoomValue] = useState<number>(15);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: appData?.googleApiKey, //"AIzaSyCmwqbYb48dfmPqYiWWU0A2kRr54I2L3wE",
    libraries: ["places", "drawing"],
  });

  const getMapTypeControls = () => {
    const defaultMapOptions = {
      styles: customMapStyles,
    };
    return {
      ...defaultMapOptions,
      mapTypeControl: false,
      rotateControl: true,
      fullscreenControl: false,
    };
  };

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={map?.panTo(defaultCenter)}
          zoom={zoomValue}
          onLoad={setMap}
          options={getMapTypeControls()}
          mapContainerClassName={googleMapStyle}
        ></GoogleMap>
      )}
      {/* <div className={footerSection}><p>Powered by © Copyright 2023, All Rights Reserved </p></div> */}
    </>
  );
};

export default Map;
