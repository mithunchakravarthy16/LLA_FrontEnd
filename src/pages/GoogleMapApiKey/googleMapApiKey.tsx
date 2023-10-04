// @ts-nocheck
import { useState, useRef } from "react";
import theme from "../../theme/theme";
import useStyles from "./styles";
import DashboardContainer from "components/DashboardContainer";
import Grid from "@mui/material/Grid";
// @ts-ignore
import { doc, setDoc, getDoc, onSnapShot } from "firebase/firestore/lite";
// @ts-ignore
import { db } from "services/firebase";
import { toast, ToastContainer } from "react-toastify";
// @ts-ignore
import CryptoJS from "crypto-js";

const GoogleMapApiKey = (props) => {
  const { setMapType, mapType } = props;
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [encrptedData, setEncrptedData] = useState("");

  const { rootContainer, inputStyle } = useStyles(appTheme);

  const inputText = useRef<string>("")
  const secretPassInputText = useRef<string>("")

  const handleInput = (event: any)=>{
    inputText.current = event.target.value
  }

  const handlesecretPassInput = (event: any)=>{
    secretPassInputText.current = event.target.value
  }
  const secretPass = process.env.REACT_APP_SECRETPASS;


  const handleSubmit = ()=>{ 
    console.log("secretPass", secretPass)
    console.log("secretPassInputText.current", secretPassInputText.current)
  if(secretPassInputText.current === secretPass){

    const dataEncrypt = CryptoJS.AES.encrypt(
      JSON.stringify(inputText.current),
      secretPass
    ).toString();  


    const ref = doc(db, "configuration", "googleMapApi");
    setDoc(ref, {apiKey: dataEncrypt})
      .then((success: any) => {
        console.log("setDoc successful");
        toast.success("Changes Saved Successfully");
      })
      .catch((error) => {console.log(error);
        toast.error("Oops! Something went wrong");});

  }else{
    toast.error("Invalid secretPass!")
  }
    
  }

  



  return (
    <>
      <Grid container xs={12} className={rootContainer}>
        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "4vh",
            fontSize: "1.5vw",
            alignItems: "center",
            background: "#B6C0C2",
            padding: "4vw"
          }}
        >
          <div>Enter Google Map Api Key</div>
          <div
            style={{
              display: "flex",
              columnGap: "2vh",
              width: "30vw",
              height: "3vh",
            }}
          >
              <input type="text" placeholder="Enter Google Map Api Key" className={inputStyle} onChange={handleInput}/>
            
          </div>
          <div
            style={{
              display: "flex",
              columnGap: "2vh",
              width: "30vw",
              height: "3vh",
            }}
          >
              <input type="password" placeholder="Enter secretPass" className={inputStyle} onChange={handlesecretPassInput}/>
            
          </div>
          <div style={{ width: "100%" }}>
              <button
                style={{ fontSize: "1vw", width: "100%", padding: "0.3vw" }}
                type="button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
        </Grid>
        <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      </Grid>
    </>
  );
};
export default GoogleMapApiKey;
