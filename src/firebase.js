// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqI9eegJ-Qfs562ofBox-zzVAjSsHMSMY",
  authDomain: "np-manager-fb191.firebaseapp.com",
  projectId: "np-manager-fb191",
  storageBucket: "np-manager-fb191.appspot.com",
  messagingSenderId: "808514082693",
  appId: "1:808514082693:web:0f953fcad5e3645248d6ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
export {app, db, auth};