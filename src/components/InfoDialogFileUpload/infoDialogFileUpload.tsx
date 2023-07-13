/** @format */
// @ts-ignore
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Dialog, Button, Grid } from "@mui/material";
import UploadIcon from "../../assets/uploadIcon.svg";
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
  //   "& .MuiMenuItem-root": {
  //     color: "#808080",
  //   },
}));

const InfoDialogFileUpload: React.FC<any> = (props) => {
  const {
    uploadImage,
    uploadImageTitle,
    handleCancelClick,
    handleSaveClick,
    handleChange,
    fileDrop,
  } = props;

  const {
    buttonContainer,
    cancelButtonContainer,
    updateButtonContainer,
    dropContainer,
    container,
    uploadIcon,
    dropMessage,
  } = useStyles({});

  const dragOver = (e: any) => {
    e.preventDefault();
  };

  const dragEnter = (e: any) => {
    e.preventDefault();
  };

  const dragLeave = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <DialogWrapper open={uploadImage} sx={{ top: "0px" }}>
        <div style={{ color: "#000000" }}>Logo - {uploadImageTitle}</div>
        <div style={{ color: "#4A5568", paddingBottom: "20px" }}>
          Upload Your File
        </div>
        <Grid container>
          <Grid item xs={12}>
            <div className={container}>
              <div
                className={dropContainer}
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
              >
                <div className={uploadIcon}>
                  <label htmlFor="upload">
                    <img src={UploadIcon} />
                  </label>
                  <input
                    accept="image/*"
                    // accept=".jpg, .jpeg, .png"
                    type="file"
                    name="upload"
                    id="upload"
                    onChange={handleChange}
                    style={{ display: "none" }}
                  />
                </div>
                <div className={dropMessage}>
                  Drag and Drop or Browse to choose a file
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={buttonContainer}>
              <div className={cancelButtonContainer}>
                <Button variant="outlined" onClick={handleCancelClick}>
                  Cancel
                </Button>
              </div>
              <div className={updateButtonContainer}>
                <Button variant="contained" onClick={handleSaveClick}>
                  Save
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </DialogWrapper>
    </>
  );
};
export default InfoDialogFileUpload;
