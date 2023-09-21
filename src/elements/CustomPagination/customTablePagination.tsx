//@ts-nocheck
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TextField from "../TextField";
import useStyles from "./styles";
const CustomTablePagination = (props:any) => {
  const {
    customPaginationSection,
    totalRecords,
    arrowBox,
    countNum,
    selectItem,
    arrowNumberBox,
    arrowDisableBox,
    pageNumSection,
    countNumRow,
  } = useStyles();
  const {
    rowsPerPageOptions,
    onPageChange,
    page,
    count,
    rowsPerPage,
    onRowsPerPageChange,
    onPageNoChange,
    value,
    pageNumclassName,
    reportsPaginationclassName,
  } = props;
  let totalPageCount = Math.ceil(count / rowsPerPage);
  const [selectedValue, setselectedValue] = useState(rowsPerPage);
  const [totalPage, setTotalPage] = useState(Math.ceil(count / rowsPerPage));
  useEffect(() => {
    setTotalPage(totalPageCount);
  }, [totalPageCount]);
  const [newPage, setNewPage] = useState(page);
  const [tooltip, setTooltip] = useState(false);
  const handleChange = (e) => {
    onRowsPerPageChange(e.target.value);
    setselectedValue(e.target.value);
    setTotalPage(Math.ceil(count / e.target.value));
    setNewPage(0)
  };
  const NextPageChange = () => {
    if (newPage < totalPage - 1) {
      setNewPage(newPage + 1);
    }
    props.handleNextChange();
  };
  const PreviousPageChange = () => {
    if (newPage > 0) {
      setNewPage(newPage - 1);
    }
    props.handlePreviousChange();
  };

  const handleInputPageChange = (e:any) => {
    if (e.target.value > 0 && e.target.value <= totalPage) {
      onPageNoChange(e.target.value);
    } else {
      onPageNoChange("");
      setTooltip(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setTooltip(false);
    }, 2000);
  }, [tooltip]);

  useEffect(() => {
    onPageChange(newPage);
  }, [newPage]);

  useEffect(() => {
    setNewPage(page);
  }, [page]);

  useEffect(() => {
    setselectedValue(rowsPerPage);
  }, [rowsPerPage]);


  const [searchPageNo, setSearchPageNo] = useState<any>()
  useEffect(()=>{
   if (value === "" || value === undefined) {
    setSearchPageNo(newPage + 1)
   } else {
    setSearchPageNo(value)
   }
  },[value, page, newPage])

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <div className={reportsPaginationclassName}>
            <div className={`${countNum} count-num`}>
              <div className={countNumRow}>
                <div class="rowsperpage">Rows Per Page</div>
                <div>
                  <select
                    class="MuiTablePaginationUnstyled-select"
                    style={{
                      marginLeft: "10px",
                      padding: "5px 2px",
                      border: "1px solid #DADAFA",
                      background: "#FBFBFF",
                      borderRadius: "5px",
                      color: "#777777",
                      fontSize: "14px",
                      fontWeight: "400",
                      textAlign: "center",
                      minWidth : "3.2vw"
                    }}
                    name="select"
                    value={selectedValue}
                    onChange={handleChange}
                    displayEmpty
                    renderValue={() => (selectedValue ? selectedValue : "")}
                  >
                    {rowsPerPageOptions.map((data) => (
                      <option class="MuiTablePaginationUnstyled-menuItem">
                        {data}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div
              // className={(newPage !== 0 || value !== "") ? arrowBox : arrowDisableBox}
              className={newPage !== 0  ? arrowBox : value === "" ?  arrowDisableBox : page === 0 ? arrowDisableBox : arrowBox}

              onClick={PreviousPageChange}
            >
              <KeyboardArrowLeftIcon />
            </div>
            <div className={arrowNumberBox}>{searchPageNo}</div>
            {/* <div className={arrowNumberBox}>{ newPage === NaN ? 1 : newPage + 1}</div> */}
            <div className={countNum}>of {totalPage}</div>
            <div
              className={newPage + 1 !== totalPage ? arrowBox : arrowDisableBox}
              onClick={NextPageChange}
            >
              <KeyboardArrowRightIcon />
            </div>
            <div className={pageNumclassName}>
              <TextField
                name={"Page No"}
                type={"number"}
                onChange={handleInputPageChange}
                value={value}
                tooltip={tooltip}
                tooltipText={"Exceeded Total Pages"}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default CustomTablePagination;
