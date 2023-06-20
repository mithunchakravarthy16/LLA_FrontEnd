import React, { useEffect, useState } from "react";
import ProgressBar from "react-customizable-progressbar";

const CustomizableProgressBar: React.FC<any> = (props) => {
  const {
    innerHeading,
    innerSubHeading,
    progressValue,
    radius,
    strockColor,
    trackStrokeColor,
    subTitle,
    strokeWidth,
    trackStrokeWidth
  } = props;

  return (
    <>
      <ProgressBar
        progress={progressValue}
        radius={radius}
        strokeColor={strockColor}
        trackStrokeColor={trackStrokeColor}
        strokeWidth={strokeWidth}
        trackStrokeWidth={trackStrokeWidth}
      >
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              position: "absolute",
              top: 0,
              width: "100%",
              height: subTitle ? "85%" : "100%",
              margin: "0 auto",
            }}
          >
            <div style={{ fontSize: "1.8em" }}>{innerHeading}</div>
            {innerSubHeading && (
              <div style={{ fontSize: "1em" }}>{innerSubHeading}</div>
            )}
          </div>
          {subTitle && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                width: "100%",
              }}
            >
              <div>{subTitle}</div>
            </div>
          )}
        </>
      </ProgressBar>
    </>
  );
};
export default CustomizableProgressBar;
