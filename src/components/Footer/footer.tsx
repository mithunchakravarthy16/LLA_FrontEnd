/** @format */

import { useState, useEffect } from "react";
import theme from "../../theme/theme";
import FooterIcon from "../../assets/images/footer-logo-1.svg";
import useTranslation from "localization/translations";
import poweredBy from "../../assets/images/powered-by.svg";
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
    loaderStyle,
    footerSection,
    footerContent,
    footerIconStyle,
    copyrights,
    allRights,
    footerSectionDasbhoard,
    poweredByImage,
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
        <p className={poweredByImage}>
          <img src={poweredBy} />
        </p>
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
