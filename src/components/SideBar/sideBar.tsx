/** @format */

import { useState, useEffect } from "react";
import { Box, Drawer } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { getUserLogout, setUserLogin } from "../../redux/actions/loginActions";
import Logout from "../../assets/logout.svg";
import {
  LightHomeNormal,
  LightHomeActive,
  LightGridNormal,
  LightGridActive,
  LightBirdNormal,
  LightBirdActive,
  LightSettingNormal,
  LightSettingActive,
  LightAvatarIcon,
  DefaultAvatarIcon,
  LibertyLatinAmericalogo,
} from "../../assets/sideBarIcons";
import useStyles from "./styles";

interface SideBarProps {}

const SideBar = (props: SideBarProps) => {
  const adminPanelData = useSelector(
    (state: any) => state?.adminPanel?.getConfigData?.body
  );

  const location = useLocation();
  const user = useSelector((state: any) => state.login.loginData);
  const {} = props;
  const [selectedTheme, setSelectedTheme] = useState<any>();
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [activePage, setActivePage] = useState<number>();

  const { homeText, gridsViewText, birdsViewText, settingsText } =
    useTranslation();

  const array = [
    {
      image:
        activePage === 0 && location?.pathname === "/home"
          ? selectedTheme === "light"
            ? LightHomeActive
            : HomeActiveIcon
          : selectedTheme === "light"
          ? LightHomeNormal
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
          location?.pathname === "/assetTracking")
          ? selectedTheme === "light"
            ? LightGridActive
            : GridViewActiveIcon
          : selectedTheme === "light"
          ? LightGridNormal
          : GridViewIcon,
      id: 1,
      path: "/gridView",
      title: gridsViewText,
    },
    {
      image:
        activePage === 2 && location?.pathname === "/birdsView"
          ? selectedTheme === "light"
            ? LightBirdActive
            : BirdsViewActiveIcon
          : selectedTheme === "light"
          ? LightBirdNormal
          : BirdsViewIcon,
      id: 2,
      path: "/birdsView",
      title: birdsViewText,
    },
    {
      image:
        activePage === 3 && location?.pathname === "/settings"
          ? selectedTheme === "light"
            ? LightSettingActive
            : SettingsActiveIcon
          : selectedTheme === "light"
          ? LightSettingNormal
          : SettingsIcon,
      id: 3,
      path: "/settings",
      title: settingsText,
    },
  ];

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

  const {
    sideNavigation,
    menuLogoSection,
    menuIconSection,
    menuIconList,
    menuIconListActive,
    customTooltip,
    avatharSection,
    sidebarSection,
    avatharIconStyle,
    customMenu,
    logoutSection,
    logoutImg,
    logoutText,
    menuLogoLightThemeSection,
  } = useStyles({ ...appTheme, selectedTheme: selectedTheme });
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

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [notification, setNotification] = useState(null);

  const menuOptions = ["Logout"];
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const dispatch = useDispatch();

  const handleCloseUserMenu = (menuOptions: string) => {
    if (menuOptions === "Logout") {
      localStorage.removeItem("user");
      localStorage.clear();
      dispatch(getUserLogout());
      dispatch(setUserLogin({}));
      navigate("/login");
    }
    setAnchorElUser(null);
  };

  return (
    <Box component={"nav"} className={sidebarSection}>
      <Drawer open variant="permanent" className={sideNavigation}>
        {/* {selectedTheme === "light" ? (
          <div className={menuLogoLightThemeSection}>
            <img width={"100%"} height={"100%"} src={LibertyLatinAmericalogo} />
          </div>
        ) : (
          <div className={menuLogoSection}>
            <img src={LogoIcon} />
          </div>
        )} */}
        <div className={menuLogoLightThemeSection}>
          <img width={"100%"} height={"100%"} src={LibertyLatinAmericalogo} />
          {/* <img
            width={"100%"}
            height={"100%"}
            src={`data:image/jpeg;base64,${adminPanelData?.header}`}
          /> */}
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
          <img
            width={"100%"}
            height={"100%"}
            src={
              selectedTheme === "light" ? LightAvatarIcon : DefaultAvatarIcon
            }
            alt="AvatarIcon"
            className={avatharIconStyle}
            onClick={handleOpenUserMenu}
          />
          <Menu
            className={customMenu}
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {menuOptions &&
              menuOptions.length > 0 &&
              menuOptions.map((menuOptions) => (
                <MenuItem
                  id="demo-customized-menu"
                  key={menuOptions}
                  onClick={() => handleCloseUserMenu(menuOptions)}
                >
                  <div className={logoutSection}>
                    {menuOptions && menuOptions === "Logout" ? (
                      <img className={logoutImg} src={Logout} alt="Logout" />
                    ) : (
                      <img className={logoutImg} src={user} alt="Logout" />
                    )}

                    <Typography className={logoutText} textAlign="center">
                      {menuOptions}
                    </Typography>
                  </div>
                </MenuItem>
              ))}
          </Menu>
        </div>
      </Drawer>
    </Box>
  );
};

export default SideBar;
