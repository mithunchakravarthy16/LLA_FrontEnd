/** @format */

import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import theme from "../../theme/theme";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";

const BirdsView: React.FC<any> = (props) => {
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

  const { rootContainer, mainSection, gridStyles } = useStyles(appTheme);

  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <div className={rootContainer}>
        <Grid container className={mainSection}>
          <Grid item xs={4} className={gridStyles}></Grid>
          <Grid item xs={4} className={gridStyles}></Grid>
          <Grid item xs={4} className={gridStyles}></Grid>
          <Grid item xs={4} className={gridStyles}></Grid>
          <Grid item xs={4} className={gridStyles}></Grid>
          <Grid item xs={4} className={gridStyles}></Grid>
        </Grid>
      </div>
    </>
  );
};

export default BirdsView;
