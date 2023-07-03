/** @format */

import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import theme from "../../theme/theme";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useStyles from "./styles";

interface tabProps {
  initialIndex?: number;
  tabsList?: any;
  handleTabs?: any;
  dashboardNotificationClassName: any;
  pageName?: any;
  isEquipmentDropdown?: any;
  handleSelectEquipmentWareHouse?: any;
  selectListEquipmentWareHouse?: any;
}
const INF_Tabs: React.FC<tabProps> = (props: tabProps) => {
  const {
    initialIndex,
    tabsList,
    handleTabs,
    dashboardNotificationClassName,
    pageName,
    isEquipmentDropdown,
    handleSelectEquipmentWareHouse,
    selectListEquipmentWareHouse,
  } = props;

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const { listCount, tabLabel, labelCountStyle } = useStyles({
    appTheme,
    pageName: pageName,
  });

  const [value, setValue] = useState<any>();

  const handleChange = (event: any, val: number) => {
    setValue(val);
    handleTabs(val);
  };

  useEffect(() => {
    setValue(initialIndex);
  }, [initialIndex]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={dashboardNotificationClassName}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
          >
            {tabsList.map((item: any, index: number) => (
              <Tab
                key={index}
                value={pageName === "sendConfig" ? item?.val : index}
                label={
                  <div className={tabLabel}>
                    {(item?.count || item?.count === 0) && (
                      <div className={listCount}>
                        <div className="count">{item?.count}</div>
                      </div>
                    )}

                    <div>{item?.name}</div>
                  </div>
                }
              />
            ))}
          </Tabs>
        </div>
      </Grid>
    </Grid>
  );
};
export default INF_Tabs;
