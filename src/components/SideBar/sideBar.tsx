/** @format */

import { useState, useEffect } from "react";
import { Box, Drawer } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import theme from "../../theme/theme";
import Tooltip from "elements/Tooltip";
import LogoIcon from "../../assets/logo.svg";
import HomeIcon from "../../assets/Home.svg";
import HomeActiveIcon from "../../assets/HomeActive.svg";
import GridViewIcon from "../../assets/Grid-View_Inactive.svg";
import GridViewActiveIcon from "../../assets/GridViewActive.svg";
import BirdsViewIcon from "../../assets/Bird_View.svg";
import BirdsViewActiveIcon from "../../assets/Birds Eye-ViewActive.svg";
import SettingsIcon from "../../assets/settings.svg";
import SettingsActiveIcon from "../../assets/SettingsActive.svg";
import AvatarIcon from "../../assets/AvatarIcon.svg";
import useTranslation from "localization/translations";
import useStyles from "./styles";

interface SideBarProps {}

const SideBar = (props: SideBarProps) => {
  const location = useLocation();
  const user = useSelector((state: any) => state.login.loginData);
  const {} = props;
  const [selectedTheme, setSelectedTheme] = useState<any>(
    JSON.parse(localStorage.getItem("theme") || "{}")
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [activePage, setActivePage] = useState<number>();

  const { homeText, gridsViewText, birdsViewText, settingsText } =
    useTranslation();

  const array = [
    {
      image:
        activePage === 0 && location?.pathname === "/home"
          ? HomeActiveIcon
          : HomeIcon,
      id: 0,
      path: "/home",
      title: homeText,
    },
    {
      image:
        activePage === 1 &&
        (location?.pathname === "/gridView" ||
          location?.pathname === "/parking" ||
          location?.pathname === "/energyManagement" ||
          location?.pathname === "/security" ||
          location?.pathname === "/lighting" ||
          location?.pathname === "/fleetManagement" ||
          location?.pathname === "/assetTracking"
          )
          ? GridViewActiveIcon
          : GridViewIcon,
      id: 1,
      path: "/gridView",
      title: gridsViewText,
    },
    {
      image:
        activePage === 2 && location?.pathname === "/birdsView"
          ? BirdsViewActiveIcon
          : BirdsViewIcon,
      id: 2,
      path: "/birdsView",
      title: birdsViewText,
    },
    {
      image:
        activePage === 3 && location?.pathname === "/settings"
          ? SettingsActiveIcon
          : SettingsIcon,
      id: 3,
      path: "/settings",
      title: settingsText,
    },
  ];

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
    sideNavigation,
    menuLogoSection,
    menuIconSection,
    menuIconList,
    menuIconListActive,
    customTooltip,
    avatharSection,
    sidebarSection,
  } = useStyles(appTheme);
  const navigate = useNavigate();

  useEffect(() => {
    setActivePage(0);
  }, []);

  useEffect(() => {
    setActivePage(
      location?.pathname === "/home"
        ? 0
        : location?.pathname === "/gridView" ||
          location?.pathname === "/parking" ||
          location?.pathname === "/energyManagement" ||
          location?.pathname === "/security" ||
          location?.pathname === "/lighting" ||
          location?.pathname === "/fleetManagement" ||
          location?.pathname === "/assetTracking"
        ? 1
        : location?.pathname === "/birdsView" //location?.pathname === "/settings"
        ? 2
        : 3
    );
  }, [location]);

  const handleClick = (event: any, id: number, path: string, title: string) => {
    setActivePage(id);
    navigate(path);
    localStorage.setItem("tabIndex", JSON.stringify(id));
  };

  const [screenResolution, setScreenResolution] = useState<any>("2k");

  useEffect(() => {
    if (window.innerWidth > 3839) {
      setScreenResolution("4k");
    } else if (window.innerWidth < 3839) {
      setScreenResolution("2k");
    }
  }, []);

  const tooltipOfset = screenResolution === "2k" ? [0, 10] : [0, 40];
  const fontSize = screenResolution === "2k" ? [14] : [22];
  const padding = [2];

  return (
    <Box component={"nav"} className={sidebarSection}>
      <Drawer open variant="permanent" className={sideNavigation}>
        <div className={menuLogoSection}>
          <img src={LogoIcon} />
        </div>
        <div className={menuIconSection}>
          {array?.map((item: any, index: number) => {
            return (
              <div
                className={
                  activePage === item.id ? menuIconListActive : menuIconList
                }
                onClick={(event) =>
                  handleClick(event, item.id, item.path, item?.title)
                }
                key={index}
              >
                <Tooltip
                  tooltipValue={item?.title}
                  placement={"right"}
                  offset={tooltipOfset}
                  fontSize={fontSize}
                  padding={padding}
                >
                  <img src={item.image} />
                </Tooltip>
              </div>
            );
          })}
        </div>
        <div className={avatharSection}>
          {/* <div>{`${user?.firstName?.charAt(0)}${user?.lastName?.charAt(
            0
          )}`}</div> */}
          <img src={AvatarIcon} alt="AvatarIcon" width={45} />
        </div>
      </Drawer>
    </Box>
  );
};

export default SideBar;
