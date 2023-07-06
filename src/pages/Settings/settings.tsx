import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../redux/actions/loginActions";
import theme from "../../theme/theme";
import useTranslation from "../../localization/translations";
import { useLanguageContext } from "../../localization/languageContext";
import useStyles from "./styles";

const Settings = () => {
  const { changeTheme, changeLang, profile } = useTranslation();
  const { language, changeLanguage } = useLanguageContext();

  const [selectedTheme, setSelectedTheme] = useState(JSON.parse(localStorage.getItem('theme')!));
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

  const dispatch = useDispatch();

  const handleLanguage = (lang:any) =>{
    changeLanguage(lang);
    dispatch(setLanguage({lang}));
  }

  return (
    <>
    <div >Settings</div><br />

    <div>Change Theme</div>
    <select value={selectedTheme} onChange={(e) => handleTheme(e.target.value)}>
      <option value="light">Light theme</option>       
      <option value="dark">Dark theme</option>
      <option value="default">Default theme</option>
    </select> <br /><br />

    <div>Change Language</div>
    <select value={language} onChange={(e) => handleLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="it">Italian</option>
      <option value="sp">Spanish</option>
    </select>
  </>
  );
};

export default Settings;
