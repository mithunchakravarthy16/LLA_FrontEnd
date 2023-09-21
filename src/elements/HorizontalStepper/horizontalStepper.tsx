import React, { useState, useEffect } from "react";
import moment from "moment";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Typography } from "@mui/material";
import theme from "../../theme/theme";
import useStyles from "./styles";
import { ColorlibStepIconRoot } from "./styles";
import Tooltip from "elements/Tooltip";

const ColorlibStepIcon: React.FC<any> = (props) => {
  const { active, completed, className, trackerStatus } = props;

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
      purpleShades={"#004F9F"}
      colorWhite={"#FFF"}
      greenShade={"#9BF15C"}
      trackerStatus={trackerStatus}
    />
  );
};

const CustomizedSteppers: React.FC<any> = (props) => {
  const { dataPoints, selectedTheme, trackerStatus } = props;


  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  const { stepperSx, typographySx } = useStyles({...appTheme, trackerStatus : trackerStatus });

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

  const truncateString = (str: string, num: number) => {
    if (str?.length > num) {
      return str?.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  const getLocaleTimeStamp = (timeStamp:any) =>{
    const testDateUtc = moment.utc(timeStamp);
    const localDate = testDateUtc.local();
    return localDate.format("DD-MM-YYYY | HH:mm A");
  }

  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={dataPoints?.length - 1}
        // connector={<ColorlibConnector />}
        // sx={stepperSx}
        className={stepperSx}
      >
        {dataPoints &&
          dataPoints.length > 0 &&
          dataPoints.map((label: any, index: number) => (
            <Step
              key={index}
              style={{ wordBreak: "break-word", maxWidth: "10vw" }}
            >
              <Typography
                // sx={typographySx} // For solution 2
                align="center"
                className={typographySx}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color:
                    appTheme?.palette?.assetTrackingPage?.topPanelTextColor,
                }}
              >
                {label?.area?.length > 20 ? (
                  <>
                    <Tooltip
                      tooltipValue={label?.area}
                      placement={"bottom"}
                      offset={[0, 10]}
                      fontSize={[14]}
                      padding={[2]}
                    >
                      {" "}
                      {truncateString(label?.area, 20)}
                    </Tooltip>
                  </>
                ) : (
                  label?.area
                )}
                {/* {label?.packageStage} */}
              </Typography>
              <StepLabel  StepIconComponent={(stepProps) => <ColorlibStepIcon {...stepProps} trackerStatus={trackerStatus} />}  >
                {
                  getLocaleTimeStamp(label?.timestamp)

                // moment(label?.timestamp)?.format("DD-MM-YYYY | HH:mm A")
                }
                {/* {label?.timeStamp} */}
              </StepLabel>
            </Step>
          ))}
      </Stepper>
    </Stack>
  );
};

export default CustomizedSteppers;
