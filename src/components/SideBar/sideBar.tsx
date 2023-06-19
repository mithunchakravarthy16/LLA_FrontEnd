import { useState, useEffect } from "react";
import { Box, Drawer } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
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
import useStyles from "./styles";

interface SideBarProps {}

const SideBar = (props: SideBarProps) => {
  const location = useLocation();

  const {} = props;
  const [selectedTheme, setSelectedTheme] = useState<any>(
    JSON.parse(localStorage.getItem("theme") || "{}")
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [activePage, setActivePage] = useState<number>();

  const array = [
    {
      image:
        activePage === 0 && location?.pathname === "/home"
          ? HomeActiveIcon
          : HomeIcon,
      id: 0,
      path: "/home",
      title: "Home",
    },
    {
      image:
        activePage === 1 && location?.pathname === "/parking"
          ? GridViewActiveIcon
          : GridViewIcon,
      id: 1,
      path: "/parking",
      title: "Grid View",
    },
    {
      image:
        activePage === 2 && location?.pathname === "/birdsView"
          ? BirdsViewActiveIcon
          : BirdsViewIcon,
      id: 2,
      path: "/birdsView",
      title: "BirdsView",
    },
    {
      image:
        activePage === 3 && location?.pathname === "/settings"
          ? SettingsActiveIcon
          : SettingsIcon,
      id: 3,
      path: "/settings",
      title: "Settings",
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
  } = useStyles(appTheme);
  const navigate = useNavigate();

  useEffect(() => {
    setActivePage(0);
  }, []);

  useEffect(() => {
    setActivePage(
      location?.pathname === "/home"
        ? 0
        : location?.pathname === "/parking"
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

  const tooltipOfset = [0, 10];
  const fontSize = [14];
  const padding = [2];

  return (
    <Box component={"nav"} sx={{ flexShrink: 0, width: "90px" }}>
      <Drawer
        open
        variant="permanent"
        PaperProps={{ sx: { width: 90, bgcolor: "blue" } }}
        className={sideNavigation}
      >
        <div>
          <img src={LogoIcon} width={"60px"} />
        </div>
        <div className={menuIconSection}>
          {array?.map((item: any) => {
            return (
              <Tooltip
                tooltipValue={item?.title}
                placement={"right"}
                offset={tooltipOfset}
                fontSize={fontSize}
                padding={padding}
              >
                <div
                  className={
                    activePage === item.id ? menuIconListActive : menuIconList
                  }
                  onClick={(event) =>
                    handleClick(event, item.id, item.path, item?.title)
                  }
                >
                  <img src={item.image} width={"35px"} />
                </div>
              </Tooltip>
            );
          })}
        </div>
        <div className={avatharSection}>
          <div>MR</div>
        </div>
      </Drawer>
    </Box>
  );
};

export default SideBar;
