// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoTzm9ONgvJp8Ti_zzsSeHPQ2pnWY7pbo",
  authDomain: "react-auth-14714.firebaseapp.com",
  projectId: "react-auth-14714",
  storageBucket: "react-auth-14714.appspot.com",
  messagingSenderId: "300178033230",
  appId: "1:300178033230:web:9c334a7c107136ea47111f",
  measurementId: "G-FLW91Q4XN2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
