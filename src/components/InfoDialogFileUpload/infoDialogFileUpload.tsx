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
    height: "40vh",
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
  } = props;

  const {} = useStyles({});

  return (
    <>
      <DialogWrapper open={uploadImage} sx={{ top: "0px" }}>
        <div style={{ color: "#000000" }}>Logo - {uploadImageTitle}</div>
        <div style={{ color: "#4A5568", paddingBottom: "20px" }}>
          Upload Your File
        </div>
        {uploadImageTitle === "Login" && (
          <FileUpload
            handleCancelClick={handleCancelClick}
            handleSaveClick={handleSaveClick}
            handleChange={handleChange}
            dropDrop={dropDrop}
          />
        )}
        {uploadImageTitle === "Header" && (
          <FileUpload
            handleCancelClick={handleHeaderCancelClick}
            handleSaveClick={handleHeaderSaveClick}
            handleChange={handleHeaderChange}
            dropDrop={dropDropHeader}
          />
        )}
        {uploadImageTitle === "Fav Icon" && (
          <FileUpload
            handleCancelClick={handleFavIconCancelClick}
            handleSaveClick={handleFavIconSaveClick}
            handleChange={handleFavIconChange}
            dropDrop={dropDropFavIcon}
          />
        )}
        {uploadImageTitle === "Footer" && (
          <FileUpload
            handleCancelClick={handleFooterCancelClick}
            handleSaveClick={handleFooterSaveClick}
            handleChange={handleFooterChange}
            dropDrop={dropDropFooter}
          />
        )}
      </DialogWrapper>
    </>
  );
};
export default InfoDialogFileUpload;
