import React, { Fragment, useState, useEffect } from "react";
import { Button } from "@mui/material";
import theme from "../../theme/theme";
import useStyles from "./styles";

const INF_Button: React.FC<any> = (props) => {
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

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
  const { viewDetails } = useStyles(appTheme);
  const {
    variant,
    handleClick,
    children,
    disable,
    buttonStyles,
    pageName,
    customButtonStyle,
    disabled,
  } = props;

  const handleButtonClick = () => {
    handleClick(children);
  };
  return (
    <>
      <div className={customButtonStyle}>
        <Button
          variant={variant || "outlined"}
          className={viewDetails}
          onClick={handleButtonClick}
          sx={{ textTransform: "none", opacity: disabled ? 0.5 : 1 }}
        >
          {children}
        </Button>
      </div>
    </>
  );
};
export default INF_Button;
