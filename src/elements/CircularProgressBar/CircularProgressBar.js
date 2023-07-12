import {useState, useEffect} from 'react';
import {
  RootContainer,
  LabelText,
  LabelContainer,
  ValueContainer,
  ProgressBarStroke,
  IconBackDrop,
} from './styles'
import { VerticalSpace } from 'elements/Space';
import theme from "../../theme/theme";
import circularProgressMask from 'assets/circular-progress-mask.svg';
import ProgressBar from 'react-customizable-progressbar';
import CustomIcon from 'elements/Icon';
import useWindowDimensions from "hooks/useWindowDimensions";

const SpeedoMeter = (props) => {
  const {
    totalValue,
    currentValue,
    icon,
    label,
    thumbType,
    color,
    iconColor,
    iconSize,
    radius,
    cut,
    rotate,
    strokeWidth,
    trackStrokeColor,
    trackStrokeWidth,
    textValue,
  } = props;
  
  const {width, height} = useWindowDimensions();
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  const getPointerThumb = () => {
    switch(thumbType) {
      case 'point':
        return {
          pointerFillColor: "#FFFFFF",
          pointerRadius: 1,
          pointerStrokeWidth: 0,
          pointerStrokeColor: 'transparent'
        }
      
      case 'thumb':
        return {
          pointerFillColor: "#2E8F1E",
          pointerRadius: 12,
          pointerStrokeWidth: 2,
          pointerStrokeColor: '#FFF'
        }
      default:
        return {}
    }
  }

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
    <RootContainer>
      <ProgressBar
        radius={radius}
        progress={currentValue}
        steps={totalValue}
        cut={cut}
        rotate={rotate}
        strokeWidth={strokeWidth}
        strokeColor={color}
        trackStrokeWidth={trackStrokeWidth}
        trackStrokeColor={trackStrokeColor}
        {...getPointerThumb()}
      >
        <ProgressBarStroke radius={radius} color={color} />
        <ValueContainer color={color} textValue={textValue} >{textValue || currentValue}</ValueContainer>
      </ProgressBar>
      <LabelContainer>
        <IconBackDrop size={iconSize} color={appTheme?.palette?.fleetManagementPage?.circularProgressBar?.background} >
          <CustomIcon icon={icon} size={iconSize} color={iconColor} />
        </IconBackDrop>
        <LabelText>{label}</LabelText>
      </LabelContainer>
    </RootContainer>
  )
};

export default SpeedoMeter;