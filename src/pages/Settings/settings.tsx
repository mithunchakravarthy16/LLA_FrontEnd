import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../redux/actions/loginActions";
import theme from "../../theme/theme";
import useTranslation from "../../localization/translations";
import { useLanguageContext } from "../../localization/languageContext";
import useStyles from "./styles";
import Grid from "@mui/material/Grid";

const Settings = () => {
  const { changeTheme, changeLang, profile } = useTranslation();
  const { language, changeLanguage } = useLanguageContext();

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

  const handleTheme = (selectedTheme: any) => {
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
    localStorage.setItem("theme", JSON.stringify(selectedTheme));
    setSelectedTheme(selectedTheme);
    window.location.reload();
  };
  localStorage.setItem("theme", JSON.stringify("default"));
  const { rootContainer, mainSection, gridStyles } = useStyles(appTheme);


  const dispatch = useDispatch();

  const handleLanguage = (lang: any) => {
    changeLanguage(lang);
    dispatch(setLanguage({ lang }));
  };

  return (
    <>
     <div className={rootContainer}>
        <Grid container className={mainSection}>
         
        </Grid>
      </div>
      {/* <div>Settings</div>
      <br />
      <div>Change Theme</div>
      <select
        value={selectedTheme}
        onChange={(e) => handleTheme(e.target.value)}
      >
        <option value="default">Default theme</option>
        <option value="light">Light theme</option>
        <option value="dark">Dark theme</option>
      </select>{" "}
      <br />
      <br />
      <div>Change Language</div>
      <select value={language} onChange={(e) => handleLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="it">Italian</option>
      </select> */}
    </>
  );
};

export default Settings;
