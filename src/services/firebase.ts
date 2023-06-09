// @ts-ignore
import { initializeApp } from "firebase/app";
// @ts-ignore
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDyyJGEiEOv3lmVuRzsdlsMC0u50c4j0oI",
  authDomain: "smart-logistics-2a67b.firebaseapp.com",
  projectId: "smart-logistics-2a67b",
  storageBucket: "smart-logistics-2a67b.appspot.com",
  messagingSenderId: "372217265779",
  appId: "1:372217265779:web:4a0c9d5649150bb0687406",
  measurementId: "G-47K85Y78T1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;
