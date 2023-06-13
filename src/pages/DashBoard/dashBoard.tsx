import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import theme from "../../theme/theme";
import useTranslation from "../../localization/translations";
import Grid from "@mui/material/Grid";
import { getUserLogout, setUserLogin } from "../../redux/actions/loginActions";
import Map from "components/Map";
import SideBar from "components/SideBar";
import useStyles from "./styles";

const DashBoard = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const dispatch = useDispatch();
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  // useEffect(() => {
  //   switch (selectedTheme) {
  //     case "red":
  //       setAppTheme(theme?.redTheme);
  //       break;
  //     case "green":
  //       setAppTheme(theme?.greenTheme);
  //       break;
  //     case "yellow":
  //       setAppTheme(theme?.yellowTheme);
  //       break;
  //     case "default":
  //       setAppTheme(theme?.defaultTheme);
  //       break;
  //     default:
  //       setAppTheme(theme?.defaultTheme);
  //       break;
  //   }
  // }, [selectedTheme]);

  const navigate = useNavigate();

  const { rootContainer } = useStyles(appTheme);

  const handleLogout = () => {
    let payload = { logout: true };
    localStorage.removeItem("user");
    localStorage.clear();
    dispatch(getUserLogout(payload));
    dispatch(setUserLogin({}));
    navigate("/login");
  };

  return (
    <>
      <div className={rootContainer}>
        <Map />
      </div>
    </>
  );
};
export default DashBoard;
