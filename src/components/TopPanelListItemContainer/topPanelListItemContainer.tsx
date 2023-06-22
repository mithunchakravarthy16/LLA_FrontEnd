import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import theme from "../../theme/theme";
import useStyles from "./styles";

const TopPanelListItemContainer: React.FC<any> = (props) => {
  const { topPanelListItems } = props;
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
  } = useStyles(appTheme);

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
                <img width={30} height={30} src={item?.icon} />
              </div>
              <div>{item?.value}</div>
            </Grid>
          ))}

        <Grid flex={1.5} item className={progressBarContainer}>
          ProgressBar
        </Grid>
      </Grid>
    </>
  );
};

export default TopPanelListItemContainer;
