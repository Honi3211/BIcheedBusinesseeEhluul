import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyA7eWAMC3xRu2oMMmZoEy48OTFT2WjnVO4",
  authDomain: "businesseeehu.firebaseapp.com",
  projectId: "businesseeehu",
  storageBucket: "businesseeehu.appspot.com",
  messagingSenderId: "76655089495",
  appId: "1:76655089495:web:c3e1205ec425c5cddcd012",
  measurementId: "G-W3B05YP0NE",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
