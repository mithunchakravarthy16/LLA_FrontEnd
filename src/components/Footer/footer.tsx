/** @format */

import { useState, useEffect } from "react";
import theme from "../../theme/theme";
import FooterIcon from "../../assets/images/footer-logo-1.svg";
import useTranslation from "localization/translations";
import useStyles from "./styles";

const Footer = () => {
  const [selectedTheme, setSelectedTheme] = useState<any>(
    JSON.parse(localStorage.getItem("theme") || "{}")
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
    loaderStyle,
    footerSection,
    footerContent,
    footerIconStyle,
    copyrights,
    allRights,
  } = useStyles(appTheme);

  const { poweredByText, allRightsReservedText, titleText, subTitleText } =
    useTranslation();

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <div className={footerSection}>
      <div className={footerContent}>
        <p>{poweredByText}</p>
        <p className={footerIconStyle}>
          <img src={FooterIcon} />
        </p>
        <p className={copyrights}>© 2023 </p>{" "}
        <p className={allRights}>{allRightsReservedText}</p>
      </div>
    </div>
  );
};
export default Footer;
