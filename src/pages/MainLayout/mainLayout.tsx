/** @format */

import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import SideBar from "../../components/SideBar";
import theme from "../../theme/theme";
import FooterIcon from "../../assets/images/footer-logo-1.svg";
import useTranslation from "localization/translations";
import useStyles from "./styles";
import Footer from "components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getUserLogout, setUserLogin } from "../../redux/actions/loginActions";
import { useNavigate, useLocation } from "react-router-dom";
//@ts-ignore
import { useIdleTimer } from "react-idle-timer";

const MainLayout = (props: any) => {
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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnIdle = () => {
    localStorage.removeItem("user");
    localStorage.clear();
    dispatch(getUserLogout());
    dispatch(setUserLogin({}));
    navigate("/login");
  };

  useIdleTimer({
    timeout: 600000,
    onIdle: handleOnIdle
  });

  return (
    <div>
      <div
        style={{
          display: "flex",
          minHeight: "100%",
          overflow: "hidden",
        }}
      >
        {isLoaded ? (
          <>
            <SideBar />
            <div
              style={{
                flexGrow: 1,
                overflow: "auto",
                minHeight: "99.99vh",
              }}
            >
              <Outlet />
            </div>
            <Footer pageName={"dashboard"} />
          </>
        ) : (
          <div className={loaderStyle}>
            {/* <img width={60} height={60} src={LoaderGif} /> */}
          </div>
        )}
      </div>
    </div>
  );
};
export default MainLayout;
