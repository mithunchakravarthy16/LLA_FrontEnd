// @ts-ignore
import { doc, setDoc, getDoc, onSnapShot } from "firebase/firestore/lite";
// @ts-ignore
import { db } from "services/firebase";
// @ts-ignore
import CryptoJS from "crypto-js";


export const fetchGoogleMapApi = (responsDataCallBack: (message: any) => void)=>{ 


    const manifestCompletedRef = doc(db, "configuration", "googleMapApi");
     getDoc(manifestCompletedRef)
        .then((response: any) => {
          const dbResponse = response.data();
          const secretPass = process.env.REACT_APP_SECRETPASS;
          const bytes = CryptoJS.AES.decrypt(dbResponse?.apiKey, secretPass);
          const dataDecrypt = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
          responsDataCallBack(dataDecrypt);
        })
        .catch((error: any) => console.log(error.message));
  }