// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOENrJ0mwfnJlCvjAlOg8bZMqQHNYa3vo",
  authDomain: "pr-12-firebase-firestore-f4154.firebaseapp.com",
  projectId: "pr-12-firebase-firestore-f4154",
  storageBucket: "pr-12-firebase-firestore-f4154.firebasestorage.app",
  messagingSenderId: "429472746031",
  appId: "1:429472746031:web:d32d5274396fa2c11314da",
  measurementId: "G-77N77MN0J7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);