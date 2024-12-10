// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCisusmbRYXvde4ABP4y0jk6gsAFgLt9cw",
  authDomain: "netflix-gpt-5210f.firebaseapp.com",
  projectId: "netflix-gpt-5210f",
  storageBucket: "netflix-gpt-5210f.firebasestorage.app",
  messagingSenderId: "198061330560",
  appId: "1:198061330560:web:2aa993c53145b31a889665",
  measurementId: "G-ZBVW446BLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);