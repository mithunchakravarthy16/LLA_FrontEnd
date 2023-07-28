import React, { useState, useEffect } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";
import Icon from "@material-ui/core/Icon";
import currentLocationIcon from "assets/currentLocation.svg";
import routeSourceIcon from "assets/routeSource.svg";
import routeDestinationIcon from "assets/routeDestination.svg";
import routeStopIcon from "assets/routeStop.svg";
import customTheme from "../../theme/theme";
import useStyles from "./styles";
import moment from "moment";

const Stepper: React.FC<any> = (props) => {
  const { routeDetails, tripStatus, is4kDevice, selectedTheme } = props;
  const [appTheme, setAppTheme] = useState<any>(customTheme?.defaultTheme);
  // const [selectedTheme, setSelectedTheme] = useState(
  //   JSON.parse(localStorage.getItem("theme")!)
  // );

  useEffect(() => {
    switch (selectedTheme) {
      case "light":
        setAppTheme(customTheme?.lightTheme);
        break;
      case "dark":
        setAppTheme(customTheme?.darkTheme);
        break;
      default:
        setAppTheme(customTheme?.defaultTheme);
        break;
    }
  }, [selectedTheme]);

  const {
    stepperContainer,
    routeDetailasContainer,
    routesHeading,
    routeName,
    routeArea,
    routeTimestamp,
    routeNameSpan,
    timeLineConnector,
    timeLineConnectorDashed,
    routeNameSpanNextStop,
  } = useStyles(appTheme);
  return (
    <div className={routeDetailasContainer}>
      <p className={routesHeading}>Route Details</p>
      <div className={stepperContainer}>
        <Timeline>
          {routeDetails?.map((route: any, index: any) => {
            return (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot>
                    {index === 0 ? (
                      <Icon>
                        <img
                          src={routeSourceIcon}
                          width={is4kDevice ? "40px" : "20px"}
                          height={is4kDevice ? "40px" : "20px"}
                        />
                      </Icon>
                    ) : index === routeDetails?.length - 1 ? (
                      <Icon>
                        <img
                          width={is4kDevice ? "40px" : "20px"}
                          height={is4kDevice ? "40px" : "20px"}
                          src={routeDestinationIcon}
                        />
                      </Icon>
                    ) : route?.location === "Current Location" &&
                      index === 3 ? (
                      <Icon>
                        <img
                          width={is4kDevice ? "35px" : "18px"}
                          height={is4kDevice ? "35px" : "18x"}
                          src={currentLocationIcon}
                        />
                      </Icon>
                    ) : (
                      <Icon>
                        <img
                          width={is4kDevice ? "35px" : "18px"}
                          height={is4kDevice ? "35px" : "18px"}
                          src={routeStopIcon}
                        />
                      </Icon>
                    )}
                  </TimelineDot>
                  {index === routeDetails?.length - 1 ? null : (
                    <TimelineConnector
                      className={
                        index === 0
                          ? timeLineConnector
                          : route?.location === "Current Location"
                          ? timeLineConnectorDashed
                          : timeLineConnector
                      }
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent>
                  <p className={routeName}>
                    {index === routeDetails?.length - 1
                      ? "Destination"
                      : "Source"}
                    {route?.location === "Current Location" &&
                      route?.observation && (
                        <span
                          className={
                            index === 2 ? routeNameSpanNextStop : routeNameSpan
                          }
                        >
                          {route?.location === "Current Location" &&
                            route?.observation}
                        </span>
                      )}
                  </p>
                  <p className={routeArea}>{route?.area}</p>
                  <p className={routeTimestamp}>
                    {route?.reachedTime &&
                      moment(route?.reachedTime)
                        .utc()
                        .format("DD-MM-YYYY | HH:mm A")}
                  </p>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
};

export default Stepper;
