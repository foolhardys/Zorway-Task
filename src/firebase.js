// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUpjaN1s6qqb1ZOwWm88hQ8u2BS98gr4w",
    authDomain: "manit-scholar-buddy.firebaseapp.com",
    projectId: "manit-scholar-buddy",
    storageBucket: "manit-scholar-buddy.appspot.com",
    messagingSenderId: "339582389945",
    appId: "1:339582389945:web:20df2f83a7e96987cb9568"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
