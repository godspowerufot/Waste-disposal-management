// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Initialize Firebase


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXN7YfrD1XWYTkLC8So96dk-ATl1oyuLc",
  authDomain: "waste-diposal.firebaseapp.com",
  projectId: "waste-diposal",
  storageBucket: "waste-diposal.appspot.com",
  messagingSenderId: "1056171060859",
  appId: "1:1056171060859:web:8a4c44330ad536ff563cde",
  measurementId: "G-VCDT87WR7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);