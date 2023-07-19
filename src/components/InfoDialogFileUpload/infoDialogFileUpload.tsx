/** @format */
// @ts-ignore
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Dialog } from "@mui/material";
import FileUpload from "elements/FileUpload";
import useStyles from "./styles";

const DialogWrapper = styled(Dialog)(({}: {}) => ({
  "& .MuiBackdrop-root": {
    marginTop: "0px !important",
  },
  "& .MuiPaper-root": {
    height: "43vh",
    minWidth: "30vw",
    maxWidth: "30vw",
    background: `#FFFFFF !important`,
    padding: "1%",
  },
  "& .MuiDialog-container": {
    marginTop: "0px !important",
    backdropFilter: "blur(5.5px)",
    height: "100vh !important",
  },
}));

const InfoDialogFileUpload: React.FC<any> = (props) => {
  const {
    uploadImage,
    uploadImageTitle,
    handleCancelClick,
    handleSaveClick,
    handleChange,
    dropDrop,
    handleHeaderCancelClick,
    handleHeaderSaveClick,
    handleHeaderChange,
    dropDropHeader,
    handleFavIconCancelClick,
    handleFavIconSaveClick,
    handleFavIconChange,
    dropDropFavIcon,
    handleFooterCancelClick,
    handleFooterSaveClick,
    handleFooterChange,
    dropDropFooter,
    errorMsg,
  } = props;

  const {} = useStyles({});

  return (
    <>
      <DialogWrapper open={uploadImage} sx={{ top: "0px" }}>
        <div
          style={{
            color: "#000000",
            fontSize: "0.8999999999999999vw",
            fontFamily: `'Montserrat', sans-serif`,
            marginBottom: "8%",
            fontWeight: 600,
          }}
        >
          Logo - {uploadImageTitle}
        </div>
        <div
          style={{
            marginBottom: "1%",
            fontSize: "0.6999999999999999vw",
            fontFamily: `'Montserrat', sans-serif`,
            fontWeight: 600,
            color: "rgba(68, 91, 125, 1)",
          }}
        >
          Upload Your File
        </div>
        {uploadImageTitle === "Login" && (
          <FileUpload
            handleCancelClick={handleCancelClick}
            handleSaveClick={handleSaveClick}
            handleChange={handleChange}
            dropDrop={dropDrop}
            errorMsg={errorMsg}
          />
        )}
        {uploadImageTitle === "Header" && (
          <FileUpload
            handleCancelClick={handleHeaderCancelClick}
            handleSaveClick={handleHeaderSaveClick}
            handleChange={handleHeaderChange}
            dropDrop={dropDropHeader}
            errorMsg={errorMsg}
          />
        )}
        {uploadImageTitle === "Fav Icon" && (
          <FileUpload
            handleCancelClick={handleFavIconCancelClick}
            handleSaveClick={handleFavIconSaveClick}
            handleChange={handleFavIconChange}
            dropDrop={dropDropFavIcon}
            errorMsg={errorMsg}
          />
        )}
        {uploadImageTitle === "Footer" && (
          <FileUpload
            handleCancelClick={handleFooterCancelClick}
            handleSaveClick={handleFooterSaveClick}
            handleChange={handleFooterChange}
            dropDrop={dropDropFooter}
            errorMsg={errorMsg}
          />
        )}
      </DialogWrapper>
    </>
  );
};
export default InfoDialogFileUpload;
