import { useState, useEffect, Fragment } from "react";
import Map from "components/Map";
import Grid from "@mui/material/Grid";
import theme from "../../theme/theme";
import useStyles from "./styles";

import DashboardLeftPanel from "components/DashboardLeftPanel";

interface DashboardContainerProps {
  handleviewDetails?: any;
}

const DashboardContainer: React.FC<DashboardContainerProps> = (
  props: DashboardContainerProps
) => {
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
  const { dashboardMapContainer, dashboardRightPanelStyle } =
    useStyles(appTheme);

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={1} lg={1} xl={1}>
          <DashboardLeftPanel />
        </Grid>
        <Grid item xs={12} sm={12} md={11} lg={11} xl={11}>
          <div className={dashboardRightPanelStyle}>
            <div className={dashboardMapContainer}>
              <Map />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardContainer;
