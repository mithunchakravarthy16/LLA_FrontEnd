/** @format */

import { useState, useEffect } from "react";
import theme from "../../theme/theme";
import FooterIcon from "../../assets/images/lla-logo2.png";
import useTranslation from "localization/translations";
import poweredBy from "../../assets/images/powered-by.svg";
import footerText from "../../assets/footerText.svg";
import FooterCopyrights from "../../assets/images/copyrightsImg.svg";
import useStyles from "./styles";

const Footer = (props: any) => {
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
  const { pageName } = props;

  const {
    footerSection,
    footerContent,
    footerIconStyle,
    footerSectionDasbhoard,
    footerCopyrightsImg,
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
    <div
      className={
        pageName === "dashboard" ? footerSectionDasbhoard : footerSection
      }
    >
      <div className={footerContent}>
        <div className={footerIconStyle}>
          <img src={FooterIcon} />
        </div>
        <div>
          {pageName === "dashboard" ? (
            <p>
              powered by Liberty Latin America | Sensyon | © 2023 | All Rights
              Reserved
            </p>
          ) : (
            <img className={footerCopyrightsImg} src={FooterCopyrights} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Footer;
