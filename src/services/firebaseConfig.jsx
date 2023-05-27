import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAW-aFD__W_LukuKjZnJqwsXYTMslmJ534",
  authDomain: "blasantoniozamora-react.firebaseapp.com",
  projectId: "blasantoniozamora-react",
  storageBucket: "blasantoniozamora-react.appspot.com",
  messagingSenderId: "61348048006",
  appId: "1:61348048006:web:eaa6f19b85717da08fb507",
  measurementId: "G-CCV4XGSKJ4"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
