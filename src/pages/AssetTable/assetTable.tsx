/** @format */

import { useState, useEffect, useMemo } from "react";
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
  } = useStyles();

  const assetTableResponse = useSelector((state:any)=>state?.assetTable?.assetTableData)

  useEffect(() => {
    let payload: any = {};
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

  const tooltipOfset = [0, 10];
  const fontSize = [14];
  const padding = [2];

  return (
    <>
      <Grid className={rootContainer}>
        <Grid>
          <h1 style={{ textAlign: "center" }}>Asset Table</h1>
        </Grid>
        <Grid className={assetTableHeader} style={{ margin: "1vw 5vw" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3 style={{ marginRight: "1vw" }}>Search By ID</h3>
            <SearchBox
              searchInput={searchClass}
              placeHolder={"Search"}
              handleSearch={handleSearch}
              borderRadius={2}
              borderColor={`1px solid #1A1919`}
              fontColor={"#1A1919"}
              // handleCloseIcon={handleCloseIcon}
              // searchIsOpen={searchOpen}
              // selectedTheme={selectedTheme}
              notificationPageName={"assetTable"}
            />
          </div>

          <Button variant="contained" onClick={() => {}}>
            Refresh
          </Button>
        </Grid>
        <Grid style={{ margin: "2vw 5vw" }}>
          <TableContainer className={tableLayoutStyle}>
            <div style={{ overflow: "auto" }}>
              <Table>
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
                            <TableCell>{item && item?.deviceId}</TableCell>
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
                                    {item && item?.sensorValues?.temperature}
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
                                    {item && item?.sensorValues?.humidity === "" ? "--" : item?.sensorValues?.humidity}
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
                                    {item && item?.sensorValues?.pressure === "" ? "--" : item?.sensorValues?.pressure}
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
