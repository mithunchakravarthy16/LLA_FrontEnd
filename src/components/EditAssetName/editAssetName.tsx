import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import closeIcon from "../../assets/close-icon.svg";
import { TextField } from "@mui/material";
import Select from "elements/Select";
import Drawer from "@mui/material/Drawer";
import { IconButton, Button } from "@mui/material";
import { getAssetName, setAssetName } from "redux/actions/getAssetTableDataAction";
import useStyles from "./styles";

const DrawerWrapper = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    width: "18.6vw",
    zIndex: 1501,
  },
  "& .MuiModal-backdrop": {
    backdropFilter: "blur(2.5px)",
    backgroundColor: "rgba(33, 33, 33, 0.12)",
  },
}));

const EditAssetName = (props: any) => {
  const { open, setOpen, assetName, assetType, deviceId } = props;
  const {
    rootContainer,
    addOperationHeading,
    addOperation,
    addOperationSection,
    addOperationButton,
    fieldTitle,
    customInput,
  } = useStyles();
  const [selectedValue, setselectedValue] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<boolean>(false)
  const dispatch = useDispatch();

  const editResponseName = useSelector(
    (state: any) => state?.assetTable?.assetNameData);

  const handleSubmitButton = () => {

    const result = deviceId.replace('TR#', '');

    const payload = 
      {
    provisionDto: {
      tu_type: assetType,
      trackedId: selectedValue,
      projectId: "",
    },
    deviceId: result
    } 
    dispatch(getAssetName(payload));
  }

  useEffect(()=>{
    
    if(editResponseName?.status === 200 ) {
      setOpen(false);
    } else if(editResponseName?.status === 400) {
      setErrorMessage(true)
    }
  },[editResponseName])


  const assetTableResponse = useSelector(
    (state: any) => state?.assetTable
  );

  // console.log("assetTableResponse", assetTableResponse)

  const handleInputChange = (event:any) =>{
    setselectedValue(event.target.value)
  }

  useEffect(()=>{
    setselectedValue(assetName)
  },[assetName])

  return (
    <>
      <DrawerWrapper
        open={open}
        anchor={"right"}
        onClose={() => setOpen(false)}>
        <Grid container className={rootContainer}>
          <Grid item xs={12} className={addOperationSection}>
            <div className={addOperationHeading}>
              <div className={addOperation}>Edit Asset Name</div>
              <img src={closeIcon} onClick={() => setOpen(false)} />
            </div>
            <div>
              <div className={fieldTitle}>Name</div>
              <div className={customInput}>
                <TextField
                  value={selectedValue}
                  type={"text"}
                  fullWidth
                  // disabled={!isDisabled}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {errorMessage &&  <div style={{color : "red", fontSize : "0.6vw", marginTop : "0.4vh"}}>
                * Please Enter Valid Name
            </div>}
           
            <div style={{ display: "flex", justifyContent: "right" }}>
              <div className={addOperationButton}>
                <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
                <Button variant="contained"  onClick = {handleSubmitButton}>Save</Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </DrawerWrapper>
    </>
  );
};

export default EditAssetName;
