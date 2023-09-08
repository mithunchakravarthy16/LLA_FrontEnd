import React, { useEffect, useState, useMemo } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { createTheme, ThemeProvider } from "@mui/material";
import theme from "../../theme/theme";
import useStyles from "./styles";
const INF_Select: React.FC<any> = (props) => {





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
    selectedTheme
  } = props;

  const [appTheme, setAppTheme] = useState(selectedTheme);


  const {
    customSelect,
    tableSelect,
    // selectOptions,
  } = useStyles({...appTheme, selectedTheme : selectedTheme});

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
                    boxShadow : "0px 5px 5px -3px rgb(0 0 0 / 0%), 0px 8px 10px 1px rgb(0 0 0 / 0%), 0px 3px 14px 2px rgb(0 0 0 / 9%) !important"
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
                      fontSize : "0.8vw",
                      fontWeight : 500,
                      margin : "0.3vw",
                      marginTop : "0",
                      borderRadius : "2px"
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
              right : "-1.5vw",
              // top : "-1vh"
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
