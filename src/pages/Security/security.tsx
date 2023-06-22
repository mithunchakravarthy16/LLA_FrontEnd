import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import theme from "../../theme/theme";
import useStyles from "./styles";

const Security : React.FC<any> = (props) => {

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
    rootContainer,
    mainSection,
  } = useStyles(appTheme);

  return (
    <>
      <Grid container className={rootContainer}>
        <Grid container className={mainSection}>
        Security      

        </Grid>
      </Grid>
    </>
  );
};

export default Security;
