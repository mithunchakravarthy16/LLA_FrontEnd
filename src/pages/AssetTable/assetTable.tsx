/** @format */

import { useState, useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Button } from "@mui/material";
import SearchBox from "elements/SearchBox";
import TemperatureIcon from "assets/assetTableIcons/temperature.svg";
import HumidityIcon from "assets/assetTableIcons/humidity.svg";
import LocationIcon from "assets/assetTableIcons/location.svg";
import BatteryIcon from "assets/assetTableIcons/battery.svg";
import BluetoothIcon from "assets/assetTableIcons/bluetooth.png";
import CellularIcon from "assets/assetTableIcons/cellularIcon.png"
import Tooltip from "elements/Tooltip";
import { getAssetTable } from "redux/actions/getAssetTableDataAction";
import useStyles from "./styles";

const AssetTable: React.FC<any> = (props) => {
  const {} = props;
  const dispatch = useDispatch()

  const {
    tableLayoutStyle,
    sensorValues,
    temperatureIcon,
    humidityIcon,
    locationIcon,
    batteryIcon,
    iconValue,
    assetTableHeader,
    searchClass,
    rootContainer,
    iconStyleClass,
    refreshButtonStyle
  } = useStyles();

  const assetTableResponse = useSelector((state:any)=>state?.assetTable?.assetTableData)

  useEffect(() => {
    let payload: any = {
      filterText : ""
    };
    dispatch(getAssetTable(payload));
  }, []);

  const tableHeadData = [
    { title: "Asset", id: 0 },
    { title: "Device", id: 1 },
    { title: "Sensor Values", id: 2 },
    { title: "Last Reported", id: 3 },
    // { title: "Actions", id: 8 },
  ];

  const tableData = [
    {
      assetId: "C00403461",
      deviceId: "08 -11- 2021 11:00 AM - 11:30 AM",
      sensorValues: {
        temperature: 24.1,
        humidity: "",
        pressure: "",
        battery: 92,
      },
      lastReported: "14 hours ago",
    },
    {
      assetId: "C00403461",
      deviceId: "08 -11- 2021 11:00 AM - 11:30 AM",
      sensorValues: {
        temperature: 24.1,
        humidity: "",
        pressure: "",
        battery: 92,
      },
      lastReported: "14 hours ago",
    },
    {
      assetId: "C00403461",
      deviceId: "08 -11- 2021 11:00 AM - 11:30 AM",
      sensorValues: {
        temperature: 24.1,
        humidity: "",
        pressure: "",
        battery: 92,
      },
      lastReported: "14 hours ago",
    },
    {
      assetId: "C00403461",
      deviceId: "08 -11- 2021 11:00 AM - 11:30 AM",
      sensorValues: {
        temperature: 24.1,
        humidity: "",
        pressure: "",
        battery: 92,
      },
      lastReported: "14 hours ago",
    },
    {
      assetId: "C00403461",
      deviceId: "08 -11- 2021 11:00 AM - 11:30 AM",
      sensorValues: {
        temperature: 24.1,
        humidity: "",
        pressure: "",
        battery: 92,
      },
      lastReported: "14 hours ago",
    },
    {
      assetId: "C00403462",
      deviceId: "08 -11- 2021 11:00 AM - 11:30 AM",
      sensorValues: {
        temperature: 24.1,
        humidity: "",
        pressure: "",
        battery: 92,
      },
      lastReported: "14 hours ago",
    },
  ];
  
  const [searchValue, setSearchValue] = useState<any>(assetTableResponse);  

  useEffect(()=>{
    if(assetTableResponse) {
      setSearchValue(assetTableResponse)
    }
  },[assetTableResponse])

  const handleSearch = (searchValue: any) => {
    let searchResult = assetTableResponse?.filter((value: any) => {
      return (
        value?.assetId
          ?.toLowerCase()
          .includes(searchValue?.toString()?.toLowerCase()) ||
        value?.deviceId
          ?.toLowerCase()
          .includes(searchValue?.toString()?.toLowerCase())
      );
    });

    setSearchValue(searchResult);
  };

    //debouncing start
    const [debounceSearchText, setDebounceSearchText] = useState<any>("");
    const searchTextRef = useRef<any>("");

    const delayTime =  1000;
    const fetchingDataForSearch = (searchValue: any) => {
      searchTextRef.current = searchValue;
      let payload = {};
      if (searchValue) {
        payload = {
          filterText: searchValue,
          
        };
      } else {
        payload = {
          filterText: "",
         
        };
      }
      dispatch(
        getAssetTable({ payLoad: payload})
      );
      setDebounceSearchText(searchValue);
    };

    const debounce = (func: any, delay: any) => {
      let timeout: any;
  
      return (...arg: any) => {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          func.apply(context, arg);
        }, delay);
      };
    };
  
    const handleSearchtest = useCallback(
      debounce(fetchingDataForSearch, delayTime),
      []
    );

    const handleCloseIcon = () => {
      if (searchTextRef.current) {
        setSearchValue(assetTableResponse);
      }
      
    };
    //debouncing end


  const handleRefreshButton = () => {
    let payload: any = {
      filterText : ""
    };
    dispatch(getAssetTable(payload));
  }

  // Tooltip Props
  const tooltipOfset = [0, 5];
  const fontSize = [13];
  const padding = [1];

  return (
    <>
      <Grid className={rootContainer}>
        <Grid>
          <h1 style={{ textAlign: "center", color : "#084476" }}>Asset Table</h1>
        </Grid>
        <Grid className={assetTableHeader} style={{ margin: "1vw 5vw" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3 style={{ marginRight: "1vw", color : "#084476"  }}>Search By ID</h3>
            <SearchBox
              searchInput={searchClass}
              placeHolder={"Search"}
              handleSearch={handleSearch}
              borderRadius={2}
              borderColor={`1px solid #1A1919`}
              fontColor={"#1A1919"}
              handleCloseIcon={handleCloseIcon}
              // searchIsOpen={searchOpen}
              // selectedTheme={selectedTheme}
              notificationPageName={"assetTable"}
            />
          </div>
          <div className={refreshButtonStyle}>
          <Button variant="contained" onClick={handleRefreshButton}>
            Refresh
          </Button>
          </div>

        </Grid>
        <Grid style={{ margin: "2vw 5vw", height : "78vh" }}>
          <TableContainer className={tableLayoutStyle} style={{height : "100%"}}>
            <div>
              <Table stickyHeader>
                <TableHead style={{ background: "#084476" }}>
                  <TableRow>
                    {tableHeadData?.length > 0 &&
                      tableHeadData?.map((item: any) => (
                        <TableCell key={item.id}>{item.title}</TableCell>
                      ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {searchValue?.length > 0 ? (
                    searchValue
                      // ?.sort((a, b) => b.index - a.index)
                      .map((item: any, index: number) => {
                        return (
                          <TableRow
                            hover
                            tabIndex={-1}
                            key={index}
                            // onClick={() => {
                            //   handleTableRow(item);
                            // }}
                          >
                            <TableCell>{item && item?.assetId}</TableCell>
                            <TableCell>
                              <div style={{display:"flex"}}>
                                <p style={{width : "1.5vh", height : "1.5vh"}}><img src={item?.deviceType === "BLE_TAG" ? BluetoothIcon : CellularIcon} alt="" width={"100%"} height={"100%"} /></p>
                                <span style={{marginLeft : "0.2vw"}}>{item?.deviceId}</span>
                              </div>
                              </TableCell>
                            <TableCell>
                              <div className={sensorValues}>
                                <div className={temperatureIcon}>
                                  <div className={iconStyleClass}>
                                    <Tooltip
                                      tooltipValue={"Temperature"}
                                      placement={"bottom"}
                                      offset={tooltipOfset}
                                      fontSize={fontSize}
                                      padding={padding}
                                    >
                                      <img
                                        src={TemperatureIcon}
                                        width={"100%"}
                                        height={"100%"}
                                      />
                                    </Tooltip>
                                  </div>
                                  <span className={iconValue}>
                                    {item && item?.sensorValues?.temperature?.toFixed(2)}
                                  </span>
                                </div>
                                <div className={humidityIcon}>
                                  <div className={iconStyleClass}>
                                    <Tooltip
                                      tooltipValue={"Humidity"}
                                      placement={"bottom"}
                                      offset={tooltipOfset}
                                      fontSize={fontSize}
                                      padding={padding}
                                      pageName={"assetTable"}
                                    >
                                      <img
                                        src={HumidityIcon}
                                        width={"100%"}
                                        height={"100%"}
                                      />
                                    </Tooltip>
                                  </div>
                                  <span className={iconValue}>
                                    {item && item?.sensorValues?.humidity === null ? "--" : item?.sensorValues?.humidity?.toFixed(2)}
                                  </span>
                                </div>
                                <div className={locationIcon}>
                                  <div className={iconStyleClass}>
                                    <Tooltip
                                      tooltipValue={"Pressure"}
                                      placement={"bottom"}
                                      offset={tooltipOfset}
                                      fontSize={fontSize}
                                      padding={padding}
                                      pageName={"assetTable"}
                                    >
                                      <img
                                        src={LocationIcon}
                                        width={"100%"}
                                        height={"100%"}
                                      />
                                    </Tooltip>
                                  </div>
                                  <span className={iconValue}>
                                    {item && item?.sensorValues?.pressure === 0 ? "--" : item?.sensorValues?.pressure}
                                  </span>
                                </div>
                                <div className={batteryIcon}>
                                  <div className={iconStyleClass}>
                                    <Tooltip
                                      tooltipValue={"Battery"}
                                      placement={"bottom"}
                                      offset={tooltipOfset}
                                      fontSize={fontSize}
                                      padding={padding}
                                    >
                                      <img
                                        src={BatteryIcon}
                                        width={"100%"}
                                        height={"100%"}
                                      />
                                    </Tooltip>
                                  </div>
                                  <span className={iconValue}>
                                    {item && item?.sensorValues?.battery}%
                                  </span>
                                </div>
                              </div>
                            </TableCell>

                            <TableCell>{item && item?.lastReported}</TableCell>
                          </TableRow>
                        );
                      })
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} style={{ textAlign: "center" }}>
                        No Data Available
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default AssetTable;
