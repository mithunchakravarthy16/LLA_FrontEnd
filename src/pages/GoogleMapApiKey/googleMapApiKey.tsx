// @ts-nocheck
import { useState, useRef } from "react";
import theme from "../../theme/theme";
import Grid from "@mui/material/Grid";
// @ts-ignore
import { doc, setDoc, getDoc, onSnapShot } from "firebase/firestore/lite";
// @ts-ignore
import { db } from "services/firebase";
import { toast, ToastContainer } from "react-toastify";
// @ts-ignore
import CryptoJS from "crypto-js";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getGoogleMapPostApi } from "redux/actions/googleMapApiKeyAction";

const GoogleMapApiKey = (props) => {
  const { setMapType, mapType } = props;
  const dispatch = useDispatch();

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [isHideContent, setIsHideContent] = useState<any>({apiKeyText: false, secretPassText: false});

  const { rootContainer, inputStyle } = useStyles(appTheme);

  const inputText = useRef<string>("");
  const secretPassInputText = useRef<string>("");

  const handleInput = (event: any) => {
    inputText.current = event.target.value;
  };

  const handlesecretPassInput = (event: any) => {
    secretPassInputText.current = event.target.value;
  };

  const secretPass = process.env.REACT_APP_SECRETPASS;


  const handleSubmit = () => {

    if (secretPassInputText.current === secretPass) {
      const inputTextBackup = inputText.current
      const dataEncrypt = CryptoJS.AES.encrypt(
        (JSON.stringify({inputTextBackup})),
        secretPass
      ).toString();
      dispatch(getGoogleMapPostApi({dataEncrypt}));

      // const ref = doc(db, "configuration", "googleMapApi");
      // setDoc(ref, { apiKey: dataEncrypt })
      //   .then((success: any) => {
          
      //     toast.success("Changes Saved Successfully");
      //   })
      //   .catch((error) => {
          
      //     toast.error("Oops! Something went wrong");
      //   });
    } else {
      toast.error("Invalid secretPass!");
    }
  };

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
            background: "#05325A",
            padding: "4vw",
            borderRadius: "1vw",
          }}
        >
          <div className="animated-text">Enter Google Map Api Key</div>

          <div
            style={{
              display: "flex",
              columnGap: "2vh",
              width: "30vw",
              height: "4vh",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                right: "0.2vw",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
              onClick={()=>setIsHideContent({...isHideContent, apiKeyText:!isHideContent.apiKeyText})}
            >
              {
              isHideContent.apiKeyText ?
              <VisibilityIcon sx={{ width: "1.5vw", height: "1.5vw" }} />
              :
              <VisibilityOffIcon sx={{ width: "1.5vw", height: "1.5vw" }} />
              
              }
            </span>
            <input
              type={isHideContent.apiKeyText ? "text" : "password"}
              placeholder="Enter Google Map Api Key"
              className={inputStyle}
              onChange={handleInput}
            />
          </div>
          <div
            style={{
              display: "flex",
              columnGap: "2vh",
              width: "30vw",
              height: "4vh",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                right: "0.2vw",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
              onClick={()=>setIsHideContent({...isHideContent, secretPassText:!isHideContent.secretPassText})}
            >
              {
              isHideContent.secretPassText ?
              <VisibilityIcon sx={{ width: "1.5vw", height: "1.5vw" }} />
              :
              <VisibilityOffIcon sx={{ width: "1.5vw", height: "1.5vw" }} />
              
              }
            </span>
            <input
              type={isHideContent.secretPassText ? "text" : "password"}
              placeholder="Enter secretPass"
              className={inputStyle}
              onChange={handlesecretPassInput}
            />
          </div>
          <div style={{ width: "100%", textAlign: "center" }}>
            <button
              style={{ fontSize: "1vw", padding: "0.3vw 2vw", borderRadius: "0.5vw" }}
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
