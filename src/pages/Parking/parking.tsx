import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import theme from "../../theme/theme";
import ParkingScreen1 from "components/ParkingScreen1";
import ParkingScreen2 from "components/ParkingScreen2";
import ParkingScreen3 from "components/ParkingScreen3";
import ParkingScreen4 from "components/ParkingScreen4";
import ParkingScreen5 from "components/ParkingScreen5";
import ParkingScreen6 from "components/ParkingScreen6";
import parking from "mockdata/parking";
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
    parkingBottomInnerSection,
  } = useStyles(appTheme);

  return (
    <>
      <Grid container className={rootContainer}>
        <Grid container className={parkingTopMainSection}>
          <Grid item xs={4} className={parkingTopSection}>
            <ParkingScreen1 data={parking} />
          </Grid>
          <Grid item xs={4} className={parkingTopSection}>
            <ParkingScreen2 data={parking} />
          </Grid>
          <Grid item xs={4} className={parkingTopSection}>
            <ParkingScreen3 data={parking} />
          </Grid>
        </Grid>
        <Grid container className={parkingBottomMainSection}>
          <Grid item xs={3} className={parkingBottomSection}>
            <div className={parkingBottomInnerSection}>
              <ParkingScreen4 />
            </div>
          </Grid>
          <Grid item xs={6} className={parkingBottomSection}>
            <div className={parkingBottomInnerSection}>
              <ParkingScreen5 />
            </div>
          </Grid>
          <Grid item xs={3} className={parkingBottomSection}>
            <div className={parkingBottomInnerSection}>
              <ParkingScreen6 />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Parking;
