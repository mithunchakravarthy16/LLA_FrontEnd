/** @format */

import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import theme from "../../theme/theme";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";

const BirdsView: React.FC<any> = (props) => {
  const adminPanelData = useSelector(
    (state: any) => state?.adminPanel?.getConfigData?.data?.body
  );

  const [selectedTheme, setSelectedTheme] = useState<any>();
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  useEffect(() => {
    setSelectedTheme(adminPanelData?.appearance);
  }, [adminPanelData]);

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
