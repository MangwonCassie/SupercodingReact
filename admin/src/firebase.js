// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc5QZQc8HFHMIRaVFs8GUoKvO22b4_w0A",
  authDomain: "shop-4a6a0.firebaseapp.com",
  projectId: "shop-4a6a0",
  storageBucket: "shop-4a6a0.appspot.com",
  messagingSenderId: "411175045570",
  appId: "1:411175045570:web:34d6be0a53a3830a6bae5b",
  measurementId: "G-FZNGCTCLD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

