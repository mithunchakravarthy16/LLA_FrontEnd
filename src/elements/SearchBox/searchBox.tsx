import * as React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
//@ts-ignore
// import SearchIcon from "@mui/icons-material/Search";
import SearchIconImg from "../../assets/searchIcon.svg";
import closeIconBox from "../../assets/closeIconBox.svg";
import SearchIconDark from "../../assets/searchIconDark.svg";
import CloseIconDark from "../../assets/closeIconBoxDark.svg"
//@ts-ignore
import CloseIcon from "@mui/icons-material/Close";
import theme from "../../theme/theme";
import { useState, useEffect } from "react";

const INF_SearchBox: React.FC<any> = (props) => {
  const {
    placeHolder,
    handleSearch,
    borderRadius,
    borderColor,
    searchIsOpen,
    searchResetValue,
    searchInput,
    tabIndex,
    fontColor,
    disabled,
    handleCloseIcon,
    pageName,
    selectedTheme,
    handleSearchtest,
    setDebounceSearchText,
    notificationPageName,
    page,
    rowsPerPage,
    isRefreshClicked,
    setIsRefreshClicked
  } = props;

  const [appTheme, setAppTheme] = useState<any>();

  // const [selectedTheme, setSelectedTheme] = useState(
  //   JSON.parse(localStorage.getItem("theme")!)
  // );

  useEffect(() => {
    switch (selectedTheme) {
      case "light":
        setAppTheme(theme?.defaultTheme);
        break;
      case "dark":
        setAppTheme(theme?.defaultTheme);
        break;
      default:
        setAppTheme(theme?.defaultTheme);
        break;
    }
  }, [selectedTheme]);

  const [searchValue, setSearchValue] = useState<any>();
  const [icon, setIcon] = useState<any>("search");
  const [searchFocus, setSearchFocus] = useState<any>(props.searchIsOpen);

  const textInput = React.createRef<any>();

  const handleClose = () => {
    setSearchValue("");
    notificationPageName === "parking" || notificationPageName === "assetTable" && handleSearch("");
    // handleSearchtest("")
    setIcon("search");
    if (
      notificationPageName === "dashboard" ||
      notificationPageName === "asset"
    ) {
      setDebounceSearchText("");
    }

    handleCloseIcon();

    if (pageName !== "dashboardTracker") {
      handleCloseIcon();
    }
    if (pageName === "dashboardTracker") {
      setSearchFocus(true);
    }
  };

  useEffect(()=>{
    if(isRefreshClicked && notificationPageName === "assetTable") {
      setSearchValue("");
      setIsRefreshClicked(false)
    }
  },[isRefreshClicked])

  const handleInput = (event: any) => {
    setSearchValue(event.target.value);
    if (event.target.value.length > 0) {
      setIcon("cancel");
    }
    notificationPageName === "parking" || notificationPageName === "assetTable" && handleSearch(event.target.value);
    if (
      notificationPageName === "dashboard" ||
      notificationPageName === "asset"
    ) {
      handleSearchtest(event.target.value, tabIndex, page, rowsPerPage);
    }
  };
  const handleSearchFocus = () => {
    setSearchFocus(true);
  };

  useEffect(() => {
    if (searchFocus === true || searchIsOpen === true) {
      textInput.current.focus();
      setSearchFocus(false);
    }
  }, [searchFocus, searchIsOpen]);

  useEffect(() => {
    setSearchValue("");
    if (
      notificationPageName === "dashboard"||
      notificationPageName === "asset"
    ) {
      setDebounceSearchText("");
    }
  }, [searchResetValue]);

  useEffect(() => {
    setSearchValue("");
    setIcon("search");
    notificationPageName === "parking" || notificationPageName === "assetTable" && handleSearch("");
    // handleSearchtest("")
  }, [tabIndex]);

  useEffect(()=>{
    textInput.current.focus();
  },[disabled])

  return (
    <>
      <div className={searchInput}>
        <InputBase
          disabled={disabled ? disabled : false}
          fullWidth
          inputRef={textInput}
          onKeyPress={(ev) => {
            if (ev.key === "Enter") {
              ev.preventDefault();
            }
          }}
          sx={{
            ml: 1,
            flex: 1,
            color: fontColor,
            fontSize: 15,
            fontWeight: 400,
            letterSpacing: 0.5,
          }}
          placeholder={placeHolder}
          onChange={handleInput}
          value={searchValue}
          endAdornment={
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              {icon === "search" ? (
                <img
                  src={notificationPageName === "assetTable" ? SearchIconDark :SearchIconImg}
                  onClick={handleSearchFocus}
                  // onChange={handleInput}
                  // sx={{ color: fontColor }}
                />
              ) : (
                // <SearchIcon></SearchIcon>
                // <CloseIcon onClick={handleClose} sx={{ fill: fontColor }} />
                <img
                  src={notificationPageName === "assetTable" ? CloseIconDark :closeIconBox}
                  onClick={handleClose}
                  style={{ fill: fontColor }}
                />
              )}
            </IconButton>
          }
        />
      </div>
    </>
  );
};
export default INF_SearchBox;
