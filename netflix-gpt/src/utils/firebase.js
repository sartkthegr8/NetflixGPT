// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc97psBRP2Pq2axgTfADMJfxpWd6wHyhk",
  authDomain: "netflixgpt-62e26.firebaseapp.com",
  projectId: "netflixgpt-62e26",
  storageBucket: "netflixgpt-62e26.appspot.com",
  messagingSenderId: "823322214807",
  appId: "1:823322214807:web:af873d80886ca1e1cd04d2",
  measurementId: "G-3BNXTTR75K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);