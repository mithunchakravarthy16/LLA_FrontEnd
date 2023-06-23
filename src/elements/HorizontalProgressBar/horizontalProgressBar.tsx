import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import theme from "../../theme/theme";
import useStyles from "./styles";

const HorizontalProgressBar: React.FC<any> = (props) => {
  const {
    progressBarTitle,
    progressBarTitleFontSize,
    progressBarValue,
    progressBarValueColor,
    progressBarTrackerColor,
    progressBarTrackerRadius,
    progressBarValueBarRadius,
    progressBarTrackerHeight,
  } = props;

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  useEffect(() => {
    switch (selectedTheme) {
      case "light":
        setAppTheme(theme?.defaultTheme);
        break;
      case "dark":
        setAppTheme(theme?.defaultTheme);
        break;
      default:
        setAppTheme(theme?.defaultTheme);
        break;
    }
  }, [selectedTheme]);

  const {
    progressBarContainerStyle,
    progressBarTitleStyle,
    progressBarContainer,
    progressBarTrackerStyle,
    progressBarValueStyle,
  } = useStyles({
    ...appTheme,
    progressBarValueColor: progressBarValueColor,
    progressBarTrackerColor: progressBarTrackerColor,
    progressBarTrackerRadius: progressBarTrackerRadius,
    progressBarValueBarRadius: progressBarValueBarRadius,
    progressBarTrackerHeight: progressBarTrackerHeight,
    progressBarTitleFontSize: progressBarTitleFontSize,
  });

  return (
    <>
      <Grid container xs={12} className={progressBarContainerStyle}>
        <Grid item xs={12} className={progressBarTitleStyle}>
          {progressBarTitle}
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            xs={12}
            justifyContent="space-between"
            alignItems="center"
            display="flex"
          >
            <Grid item xs={10} className={progressBarContainer}>
              <div className={progressBarTrackerStyle}>
                <div className={progressBarValueStyle}></div>
              </div>
            </Grid>
            <Grid
              item
              xs={2}
              justifyContent="center"
              alignItems="center"
              display="flex"
              textAlign="center"
            >
              {progressBarValue}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default HorizontalProgressBar;
