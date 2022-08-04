// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCg_RZ2cIaBCo2FU7H2xalN69irH_7aVpE",
    authDomain: "signup-auth-test-86a16.firebaseapp.com",
    projectId: "signup-auth-test-86a16",
    storageBucket: "signup-auth-test-86a16.appspot.com",
    messagingSenderId: "570863293166",
    appId: "1:570863293166:web:8955da265f1856d0d219ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
