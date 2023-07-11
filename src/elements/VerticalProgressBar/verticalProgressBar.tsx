import React, { useEffect, useState } from "react";
//@ts-ignore
import { Line } from "rc-progress";
import theme from "../../theme/theme";
import useStyles from "./styles";

const VerticalProgressBar: React.FC<any> = (props: any) => {
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
    percent,
    strokeWidth,
    trailWidth,
    strokeColor,
    trailColor,
    title,
    titlePosition,
    pageName,
  } = props;

  const { label, progressBarTitle, progressBarContainer, progressBarStyle } =
    useStyles(appTheme);
  return (
    <>
      {titlePosition && titlePosition === "down" ? (
        <>
          <div className={progressBarContainer}>
            <Line
              percent={percent}
              strokeWidth={strokeWidth}
              trailWidth={trailWidth}
              strokeColor={strokeColor}
              trailColor={trailColor}
              className={progressBarStyle}
            />
            <div className={label}>{percent}%</div>
          </div>
          <div className={progressBarTitle}>{title}</div>
        </>
      ) : (
        <>
          <div className={progressBarTitle}>{title}</div>
          <div className={progressBarContainer}>
            <Line
              percent={percent}
              strokeWidth={strokeWidth}
              trailWidth={trailWidth}
              strokeColor={strokeColor}
              trailColor={trailColor}
              className={progressBarStyle}
            />
            <div className={label}>{percent}%</div>
          </div>
        </>
      )}
    </>
  );
};

export default VerticalProgressBar;
