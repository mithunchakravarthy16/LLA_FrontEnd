import React, { Fragment, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import theme from "../../theme/theme";
import useStyles from "./styles";

const FleetInfoDialogueViolationContainer: React.FC<any> = (props) => {
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
  const { violationListContainer } = useStyles(appTheme);
  const { violationListItems } = props;

  return (
    <>
      <Grid container xs={12} style={{ height: "100%" }}>
        <Grid item xs={12} style={{ height: "5%", fontSize: "0.9vw" }}>
          VIOLATIONS
        </Grid>
        <Grid item xs={12} className={violationListContainer}>
          <Grid container xs={12} rowGap={1.5}>
            {violationListItems &&
              violationListItems?.length > 0 &&
              violationListItems?.map((item: any) => (
                <Grid
                  item
                  xs={12}
                  display="flex"
                  direction="column"
                  rowGap={2}
                  style={{
                    padding: "5% 4%",
                    border: "1px solid #333333",
                    borderRadius: "5px",
                    background: "#131313",
                  }}
                >
                  <div style={{ fontSize: "0.9vw" }}>{item?.title}</div>
                  <div style={{ fontSize: "0.7vw", fontStyle: "italic", fontWeight: 100 }}>
                  {item?.details}
                  </div>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default FleetInfoDialogueViolationContainer;
