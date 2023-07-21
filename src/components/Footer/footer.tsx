/** @format */

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import theme from "../../theme/theme";
import FooterIcon from "../../assets/images/lla-logo2.png";
import useTranslation from "localization/translations";
import poweredBy from "../../assets/images/powered-by.svg";
import footerText from "../../assets/footerText.svg";
import FooterCopyrights from "../../assets/images/copyrightsImg.svg";
import useStyles from "./styles";

const Footer = (props: any) => {
  const adminPanelData = useSelector(
    (state: any) => state?.adminPanel?.getConfigData?.body
  );

  const [selectedTheme, setSelectedTheme] = useState<any>();
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  useEffect(() => {
    setSelectedTheme(adminPanelData?.appearance);
  }, [adminPanelData]);

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
  } = useStyles({ ...appTheme, footerImage: adminPanelData?.footerImage });

  const { footerText } = useTranslation();

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
      style={{ color: adminPanelData?.footerColor }}
    >
      <div className={footerContent}>
        <div className={footerIconStyle}>
          <img src={pageName !== "dashboard" ? FooterIcon : ""} />
        </div>
        <div>
          {pageName === "dashboard" ? (
            <p>
              {adminPanelData?.footerImage ? (
                <img
                  width={"35%"}
                  height={"35%"}
                  src={`data:image/jpeg;base64,${adminPanelData?.footerImage}`}
                />
              ) : (
                adminPanelData?.footerText
              )}
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
