import { useState, useEffect } from "react";
import { Box, Drawer, Tooltip } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import theme from "../../theme/theme";
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
    { image: HomeIcon, id: 0, path: "/dashboard", title: "Dashboard" },
    { image: HomeIcon, id: 1, path: "/parking", title: "Parking" },
    { image: HomeIcon, id: 2, path: "/shuttles", title: "Shuttles" },
    { image: HomeIcon, id: 3, path: "/settings", title: "Settings" },
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
      location?.pathname === "/dashboard"
        ? 0
        : location?.pathname === "/parking"
        ? 1
        : location?.pathname === "/shuttles" //location?.pathname === "/settings"
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
        <div className={menuIconSection}>
          {array?.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className={
                  activePage === item.id ? menuIconListActive : menuIconList
                }
                onClick={(event) =>
                  handleClick(event, item.id, item.path, item?.title)
                }
              >
                {/* <img src={item.image} /> */}
                <HomeIcon />
              </div>
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
