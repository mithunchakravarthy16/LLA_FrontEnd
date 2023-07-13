/** @format */

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
  const {
    violationListContainer,
    violationHeading,
    listItemTitle,
    listItemDescription,
  } = useStyles(appTheme);
  const { violationListItems } = props;

  return (
    <>
      <Grid container xs={12} style={{ height: "100%" }}>
        <Grid item xs={12} className={violationHeading}>
          VIOLATIONS
        </Grid>
        <Grid item xs={12} className={violationListContainer}>
          <Grid container xs={12} rowGap={1.5} style={{paddingRight : "2%"}}>
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
                    border: "1px solid #808080",
                    borderRadius: "5px",
                    background:
                      appTheme?.palette?.fleetManagementPage?.violationListBg,
                  }}
                >
                  <div className={listItemTitle}>{item?.title}</div>
                  <div className={listItemDescription}>{item?.details}</div>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default FleetInfoDialogueViolationContainer;
