import React, { useEffect, useState, useMemo } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { createTheme, ThemeProvider } from "@mui/material";
import theme from "../../theme/theme";
import useStyles from "./styles";
const INF_Select: React.FC<any> = (props) => {
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  useEffect(() => {
    switch (selectedTheme) {
      // case "red":
      //   setAppTheme(theme?.redTheme);
      //   break;
      // case "green":
      //   setAppTheme(theme?.greenTheme);
      //   break;
      // case "yellow":
      //   setAppTheme(theme?.yellowTheme);
      //   break;
      case "default":
        setAppTheme(theme?.defaultTheme);
        break;
      default:
        setAppTheme(theme?.defaultTheme);
        break;
    }
  }, [selectedTheme]);

  const {
    customSelect,
    tableSelect,
    // selectOptions,
  } = useStyles(appTheme);

  const {
    selectList,
    handleSelect,
    customWidth,
    customHeight,
    variant,
    selectLabel,
    disabled,
    graphName,
    pageName,
    tabIndexParkingTabs,
    presetPanelActive,
    selectIndex,
    customSelectCustom,
    isGraphDayDataAvailable,
    drowpDownTextColor,
    dropDownBgColor,
    dropDownSelectedBgColor,
    selectedFormatGraph,
    selectedAnalyticsTitle,
    graphTitle,
    selectedRealTimeGraph,
    selectedDropDownValue,
    placeholder,
    dropDownSelectedTextColor,
  } = props;

  const [selectedValue, setselectedValue] = useState(
    !placeholder ? selectList && selectList[1]?.label : placeholder
  );

  // const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e: any) => {
    setselectedValue(e.target.value);

    let newSelectedIndex = 0;
    if (selectList && selectList.length > 0) {
      for (let i = 0; i <= selectList.length; i++) {
        if (selectList[i]?.value === e?.target?.value) {
          newSelectedIndex = i;
        }
      }
      handleSelect(e.target.value, graphName);
    }
  };

  useEffect(() => {
    // if (selectList && selectList[0] && selectList[0].value !== "Day") {
    //   setselectedValue(selectList && selectList[0]?.value);
    // }
    if (!placeholder) {
      selectedDropDownValue
        ? setselectedValue(selectedDropDownValue)
        : selectList &&
          selectList[0] &&
          selectList[0].value !== "Day" &&
          setselectedValue(selectList && selectList[0]?.value);
    }
  }, [selectedDropDownValue, placeholder]);

  

  return (
    <>
      {/* {variant === "standard" ? (
        <ThemeProvider
        theme={createTheme({
          palette: {
            primary: {
              main: dropDownBgColor ? dropDownBgColor : "#000",
            },
          },

          components: {
            MuiPaper: {
              styleOverrides: {
                root: {
                  // top : "254px !important",
                  marginTop: "5px !important",
                  backgroundColor: dropDownBgColor ? dropDownBgColor : "#000",
                },
              },
            },
            MuiMenuItem: {
              styleOverrides: {
                root: {
                  color: drowpDownTextColor ? drowpDownTextColor : "fff",
                  backgroundColor: dropDownBgColor ? dropDownBgColor : "#000",

                  // fontSize: "10px",

                  "&.MuiMenuItem-root": {
                    margin: "10px",
                  },

                  "&.Mui-selected": {
                    "&.MuiMenuItem-root": {
                      backgroundColor: dropDownSelectedBgColor
                        ? dropDownSelectedBgColor
                        : "#fff", //orange
                      color: dropDownSelectedTextColor
                        ? dropDownSelectedTextColor
                        : "#fff",
                    },

                    // "&.Mui-focusVisible": { background: "orange" },
                  },
                  "&:hover": {
                    backgroundColor: dropDownBgColor
                      ? dropDownBgColor
                      : "#000",
                  },
                },
              },
            },
          },
        })}
      >
        <div className={tableSelect}>
          <FormControl className={customSelectCustom ? customSelectCustom : customSelect}
            style={{
              width: customWidth,
              height: customHeight,
              // marginRight: "10px",
            }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              {selectLabel}
            </InputLabel>
            <Select
              required
              name="select"
              value={selectedValue}
              onChange={handleChange}
              disabled={disabled}
              label={placeholder && placeholder}
              renderValue={() =>
                selectedValue
                  ? pageName === "analyticsTabEquipmentDropdown" &&
                    selectedValue === "ALL"
                    ? "Equipment"
                    : selectedValue
                  : ""
              }
              sx={{
                height: customHeight,
                width: customWidth,
                cursor: "pointer",
              }}
            >
              {selectList &&
                selectList?.length > 0 &&
                selectList?.map((item: any, index: any) => (
                  <MenuItem
                    // className={selectOptions}
                    value={item.label}
                    key={index}
                  >
                    {item.label}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
        </ThemeProvider>
      ) : ( */}
        <ThemeProvider
          theme={createTheme({
            palette: {
              primary: {
                main: dropDownBgColor ? dropDownBgColor : "#000",
              },
            },

            components: {
              MuiPaper: {
                styleOverrides: {
                  root: {
                    // top : "254px !important",
                    marginTop: "5px !important",
                    backgroundColor: dropDownBgColor ? dropDownBgColor : "#000",
                  },
                },
              },
              MuiMenuItem: {
                styleOverrides: {
                  root: {
                    color: drowpDownTextColor ? drowpDownTextColor : "fff",
                    backgroundColor: dropDownBgColor ? dropDownBgColor : "#000",

                    // fontSize: "10px",

                    "&.MuiMenuItem-root": {
                      margin: "5px 0",
                      fontSize : "0.7vw"
                    },

                    "&.Mui-selected": {
                      "&.MuiMenuItem-root": {
                        backgroundColor: dropDownSelectedBgColor
                          ? dropDownSelectedBgColor
                          : "#fff", //orange
                        color: dropDownSelectedTextColor
                          ? dropDownSelectedTextColor
                          : "#fff",
                          fontSize : "0.7vw"
                      },

                      // "&.Mui-focusVisible": { background: "orange" },
                    },
                    "&:hover": {
                      backgroundColor: dropDownBgColor
                        ? dropDownBgColor
                        : "#000",
                    },
                  },
                },
              },
            },
          })}
        >
          <FormControl
            className={customSelectCustom ? customSelectCustom : customSelect}
            style={{
              width: "100%",
              height: customHeight,
              marginRight: "10px",
              display : "flex",
              flexDirection : "row",
              justifyContent : "flex-end",
              position : "absolute",
              right : "-1vw",
              top : "-1vh"
            }}
          >
            <Select
              name="select"
              value={
                selectedValue ? selectedValue : ""
              }
              onChange={handleChange}
              disabled={disabled}
              displayEmpty
              renderValue={() =>
                selectedValue
                  ? pageName === "analyticsTabEquipmentDropdown" &&
                    selectedValue === "ALL"
                    ? "Equipment"
                    : selectedValue
                  : ""
              }
              sx={{
                height: customHeight,
                width: customWidth,
                cursor: "pointer",
                // boxShadow: "none",
                // ".MuiOutlinedInput-notchedOutline": { border: 0 },
                // "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                //   {
                //     border: 0,
                //   },
                // "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                //   {
                //     border: 0,
                //   },
              }}
              // IconComponent={pageName === "security" ? CustomSvgIcon : ""}
            >
              {selectList &&
                selectList?.length > 0 &&
                selectList?.map((item: any, index: any) => (
                  <MenuItem key={index} value={item.label}>
                    {item.label}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </ThemeProvider>
      {/* )} */}
    </>
  );
};
export default INF_Select;
