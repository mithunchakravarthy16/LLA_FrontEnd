// @ts-ignore
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// @ts-ignore
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_C_7RavzIO9LFg0eg_teYcLMgiuoAUNc",
  authDomain: "lla--api.firebaseapp.com",
  projectId: "lla--api",
  storageBucket: "lla--api.appspot.com",
  messagingSenderId: "348879339633",
  appId: "1:348879339633:web:dfa27318c7f7025a2bdbd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;
