/** @format */

import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import VerticalProgressBar from "elements/VerticalProgressBar";

import theme from "../../theme/theme";
import useStyles from "./styles";
import Tooltip from "elements/Tooltip";

const TopPanelListItemContainer: React.FC<any> = (props) => {
  const {
    topPanelListItems,
    percent,
    strokeWidth,
    trailWidth,
    strokeColor,
    trailColor,
    title,
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
    topPanelListItemStyle,
    bodyLeftTopPanelListSubContainer,
    progressBarContainer,
    // progressBarContainerStyle,
    // progressBarTitleStyle,
    itemValueStyle,
    itemUnitStyle,
    itemValueUnitStyle,
    imageWidthStyle,
  } = useStyles(appTheme);

  const [screenResolution, setScreenResolution] = useState<any>("2k");

  useEffect(() => {
    if (window.innerWidth > 3839) {
      setScreenResolution("4k");
    } else if (window.innerWidth < 3839) {
      setScreenResolution("2k");
    }
  }, []);

  console.log("screenResolution", screenResolution);

  const tooltipOfset = [0, 10];
  const fontSize = screenResolution === "2k" ? [14] : [22];
  const padding = [2];

  return (
    <>
      <Grid
        container
        xs={12}
        justifyContent="space-around"
        alignItems="center"
        className={bodyLeftTopPanelListSubContainer}
      >
        {topPanelListItems &&
          topPanelListItems?.length > 0 &&
          topPanelListItems?.map((item: any) => (
            <Grid item flex={1} className={topPanelListItemStyle}>
              <div>
                <Tooltip
                  tooltipValue={item?.name}
                  placement={"bottom"}
                  offset={tooltipOfset}
                  fontSize={fontSize}
                  padding={padding}
                >
                  <img className={imageWidthStyle} src={item?.icon} />
                </Tooltip>
              </div>
              <div className={itemValueUnitStyle}>
                <div className={itemValueStyle}>{item?.value}</div>{" "}
                {item?.unit && (
                  <span className={itemUnitStyle}>{item?.unit}</span>
                )}
              </div>
            </Grid>
          ))}

        <Grid flex={2} item className={progressBarContainer}>
          {/* <HorizontalProgressBar
            progressBarTitle={"Avg. Dimming Level"} //mandatory
            progressBarTitleFontSize={"14px"}
            progressBarValue={"60%"}
            progressBarValueColor={"#FFA626"}
            progressBarTrackerColor={"#484D52"}
            progressBarTrackerRadius={"7px"}
            progressBarValueBarRadius={"7px"}
            progressBarTrackerHeight={"18px"}
          /> */}
          <Grid item xs={10}>
            <VerticalProgressBar
              percent={percent}
              strokeWidth={strokeWidth}
              trailWidth={trailWidth}
              strokeColor={strokeColor}
              trailColor={trailColor}
              title={title}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TopPanelListItemContainer;
