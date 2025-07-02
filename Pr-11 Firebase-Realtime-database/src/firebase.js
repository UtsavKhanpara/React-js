// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDekQkJH09yi5nQm6eLO8URRKNgMoFYZUY",
  authDomain: "pr-11-firebase-realtime-data.firebaseapp.com",
  databaseURL: "https://pr-11-firebase-realtime-data-default-rtdb.firebaseio.com",
  projectId: "pr-11-firebase-realtime-data",
  storageBucket: "pr-11-firebase-realtime-data.firebasestorage.app",
  messagingSenderId: "342316126763",
  appId: "1:342316126763:web:1f8593000887c9fefbd06e",
  measurementId: "G-YZXKYJMB1Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);