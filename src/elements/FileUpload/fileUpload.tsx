import { Grid, Button } from "@mui/material";
import UploadIcon from "../../assets/uploadIcon.svg";
import useStyles from "./styles";

const FileUpload = (props: any) => {
  const { handleCancelClick, handleSaveClick, handleChange, dropDrop } = props;
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
    <Grid container>
      <Grid item xs={12}>
        <div className={container}>
          <div
            className={dropContainer}
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={dropDrop}
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
  );
};

export default FileUpload;
