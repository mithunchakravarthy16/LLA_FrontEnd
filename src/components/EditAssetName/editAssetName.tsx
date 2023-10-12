import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import closeIcon from "../../assets/close-icon.svg";
import TextField from "elements/TextField";
import Select from "elements/Select";
import Drawer from "@mui/material/Drawer";
import { IconButton, Button } from "@mui/material";

import useStyles from "./styles";

const DrawerWrapper = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    width: "18.6vw",
    zIndex: 1501,
  },
  "& .MuiModal-backdrop": {
    backdropFilter: "blur(2.5px)",
    backgroundColor: "rgba(33, 33, 33, 0.65)",
  },
}));

const EditAssetName = (props: any) => {
  const { open, setOpen } = props;
  const {
    addOperationHeading,
    addOperation,
    addOperationSection,
    addOperationButton,
    fieldTitle,
    customInput,
  } = useStyles();
  const [selectedValue, setselectedValue] = useState<string>("");

  const handleSelect = (e: any) => {
    setselectedValue(e.target.value);
  };

  return (
    <>
      <DrawerWrapper
        open={open}
        anchor={"right"}
        onClose={() => setOpen(false)}>
        <Grid container>
          <Grid item xs={12} className={addOperationSection}>
            <div className={addOperationHeading}>
              <div className={addOperation}>Edit Asset Name</div>
              <img src={closeIcon} onClick={() => setOpen(false)} />
            </div>
            <div>
              <div className={fieldTitle}>Name</div>
              <div className={customInput}>
                <TextField
                  value={"Name"}
                  type={"text"}
                  fullWidth
                  // disabled={!isDisabled}
                  // onChange={handleGeofenceNameChange}
                />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "right" }}>
              <div className={addOperationButton}>
                <Button variant="outlined">Cancel</Button>
                <Button variant="contained">Save</Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </DrawerWrapper>
    </>
  );
};

export default EditAssetName;
