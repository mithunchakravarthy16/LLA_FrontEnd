import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import theme from "../../theme/theme";
import ParkingScreen1 from "components/ParkingScreen1";
import ParkingScreen2 from "components/ParkingScreen2";
import ParkingScreen3 from "components/ParkingScreen3";
import ParkingScreen4 from "components/ParkingScreen4";
import ParkingScreen5 from "components/ParkingScreen5";
import ParkingScreen6 from "components/ParkingScreen6";
import useStyles from "./styles";

const Parking = () => {
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
    parkingTopMainSection,
    parkingBottomMainSection,
    parkingTopSection,
    parkingBottomSection,
    parkingBottomSection2,
  } = useStyles(appTheme);

  return (
    <>
      <Grid container className={rootContainer}>
        <Grid container className={parkingTopMainSection}>
          <Grid item xs={4} className={parkingTopSection}>
            <ParkingScreen1 />
          </Grid>
          <Grid item xs={4} className={parkingTopSection}>
            <ParkingScreen2 />
          </Grid>
          <Grid item xs={4} className={parkingTopSection}>
            <ParkingScreen3 />
          </Grid>
        </Grid>
        <Grid container className={parkingBottomMainSection}>
          <Grid item xs={2.9} className={parkingBottomSection}>
            <ParkingScreen4 />
          </Grid>
          <Grid item xs={6} className={parkingBottomSection2}>
            <ParkingScreen5 />
          </Grid>
          <Grid item xs={2.9} className={parkingBottomSection}>
            <ParkingScreen6 />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Parking;
