import { put } from "redux-saga/effects";
import {setGoogleMapApi, setGoogleMapPostApi, setShowLoaderGoogleMapApiKey, hideLoaderGoogleMapApiKey} from "../../actions/googleMapApiKeyAction"
import fetchAPIServices from "../../../services/fetchAPIServices";
import { getGoogleMapApi, getGoogleMapPostApi } from "../../../services/endPoints";
import { toast, ToastContainer } from "react-toastify";
// @ts-ignore
import CryptoJS from "crypto-js";

export function* handleGoogleMapApi(): any {
  try {
    
    yield put(setShowLoaderGoogleMapApiKey())
        
    const { fetchData } = fetchAPIServices;
    const response = yield fetchData(getGoogleMapApi);

    if (response) {  
      const secretPass = process.env.REACT_APP_SECRETPASS;
    const bytes = CryptoJS.AES.decrypt(response?.data?.body, secretPass).toString(CryptoJS.enc.Utf8);
    const dataDecrypt = JSON.parse(bytes); 
    const updatedData = dataDecrypt?.inputTextBackup
      yield put(setGoogleMapApi(updatedData));
    } else {
      yield put(setGoogleMapApi({}));
    }
    
    yield put(hideLoaderGoogleMapApiKey())
    
  } catch (error) {
    
    yield put(hideLoaderGoogleMapApiKey())
    
    console.log(error);
  }
}


export function* handleGoogleMapApiPost(action: any): any {
  try {
    
    const { fetchPostData } = fetchAPIServices;
    const encodedDataEncrypt = encodeURIComponent(action?.payload?.dataEncrypt);
    const response = yield fetchPostData(`${getGoogleMapPostApi}?apiKey=${encodedDataEncrypt}`, {}); //`${getAssetOverallTrackerDetailsApi}/${action?.payload}`
    // const response = assetOverallTrackerDetail;
    if (response) {
      toast.success("Changes Saved Successfully");
      yield put(setGoogleMapPostApi(response));
    } else {
      yield put(setGoogleMapPostApi({}));
    }
    
  } catch (error) {
    console.log(error);
  }
}

