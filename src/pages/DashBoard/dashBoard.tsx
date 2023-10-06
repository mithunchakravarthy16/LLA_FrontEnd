// @ts-nocheck
import { useState } from "react";
import theme from "../../theme/theme";
import useStyles from "./styles";
import DashboardContainer from "components/DashboardContainer";

const DashBoard = (props) => {
  const { setMapType, mapType } = props;
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  const { rootContainer } = useStyles(appTheme);

  return (
    <>
      <div className={rootContainer}>
        <DashboardContainer
          handleviewDetails={() => {}}
          setMapType={setMapType}
          mapType={mapType}
        />
      </div>
    </>
  );
};
export default DashBoard;
