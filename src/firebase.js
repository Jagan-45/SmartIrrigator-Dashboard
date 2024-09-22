// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG3yXXSSjtwxCa6RPQbIjlQU51ICGZCMQ",
  authDomain: "sensor-data-26db9.firebaseapp.com",
  databaseURL: "https://sensor-data-26db9-default-rtdb.firebaseio.com",
  projectId: "sensor-data-26db9",
  storageBucket: "sensor-data-26db9.appspot.com",
  messagingSenderId: "496098473150",
  appId: "1:496098473150:web:e43ef5bfbda1b9fdf41aef",
  measurementId: "G-N59W2KD3JV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
const analytics = getAnalytics(app);