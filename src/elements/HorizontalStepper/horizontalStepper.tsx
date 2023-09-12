import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import moment from "moment";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Typography } from "@mui/material";
import theme from "../../theme/theme";
import useStyles from "./styles";
import { ColorlibStepIconRoot } from "./styles";

const ColorlibStepIcon: React.FC<any> = (props) => {
  const { active, completed, className } = props;

  //   const icons = {
  //     1: <SettingsIcon />,
  //     2: <GroupAddIcon />,
  //     3: <VideoLabelIcon />
  //   };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
      purpleShades={"#004F9F"}
      colorWhite={"#FFF"}
      greenShade={"#9BF15C"}
    />
  );
};

const CustomizedSteppers: React.FC<any> = (props) => {
  const { dataPoints, selectedTheme } = props;

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  const { stepperSx, typographySx } = useStyles(appTheme);

  // const [selectedTheme, setSelectedTheme] = useState(
  //   JSON.parse(localStorage.getItem("theme")!)
  // );

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

  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={5}
        // connector={<ColorlibConnector />}
        // sx={stepperSx}
        className={stepperSx}
      >
        {dataPoints &&
          dataPoints.length > 0 &&
          dataPoints.map((label: any, index: number) => (
            <Step key={index} style={{ wordBreak: "break-word" }}>
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
                {label?.area}
              </Typography>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {moment(label?.timestamp)?.format("DD-MM-YYYY | HH:mm A")}
              </StepLabel>
            </Step>
          ))}
      </Stepper>
    </Stack>
  );
};

export default CustomizedSteppers;
