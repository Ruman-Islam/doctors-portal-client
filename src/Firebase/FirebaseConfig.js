// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0auTgpsTmX9gnANgRX6zwel3UZNN0Vf0",
    authDomain: "doctors-portal-67683.firebaseapp.com",
    projectId: "doctors-portal-67683",
    storageBucket: "doctors-portal-67683.appspot.com",
    messagingSenderId: "722523885300",
    appId: "1:722523885300:web:ef60ca28c865d4d82098a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;