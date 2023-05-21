import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBILv8zOLn1E8ntJg0i38ADbf_fDsRl-P0",
  authDomain: "businessee-ehluul.firebaseapp.com",
  projectId: "businessee-ehluul",
  storageBucket: "businessee-ehluul.appspot.com",
  messagingSenderId: "834815322809",
  appId: "1:834815322809:web:b4a62c101460c91940c968",
  measurementId: "G-WPNYQB20N2",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
