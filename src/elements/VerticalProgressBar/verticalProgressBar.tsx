import React from "react";
//@ts-ignore
import { Line } from "rc-progress";

import useStyles from "./styles";

const VerticalProgressBar: React.FC<any> = (props: any) => {
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
    useStyles(props);
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
