import { useState, useEffect, createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import theme from "../../theme/theme";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import { getUserLogout, setUserLogin } from "../../redux/actions/loginActions";

interface DashboardLeftPanelProps {
  handleLogout?: any;
}

const DashboardLeftPanel: React.FC<DashboardLeftPanelProps> = (
  props: DashboardLeftPanelProps
) => {
  const {} = props;

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const dispatch = useDispatch();
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

  const { leftPanel } = useStyles(appTheme);

  const navigate = useNavigate();

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
      <Grid container className={leftPanel}>
        <Grid item xs={12}>
          <p>Left Panel</p>
          <button onClick={handleLogout}>Logout</button>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardLeftPanel;
