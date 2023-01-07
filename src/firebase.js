// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {doc, onSnapshot} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNglCvgWIwy0hZbJkkyuEs3ZESsWdGmlo",
  authDomain: "fincalsy.firebaseapp.com",
  projectId: "fincalsy",
  storageBucket: "fincalsy.appspot.com",
  messagingSenderId: "675313260814",
  appId: "1:675313260814:web:298f1859b27d38b4cd9f5f",
  measurementId: "G-3P97TH094M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db=getFirestore();