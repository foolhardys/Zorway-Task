import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAUpjaN1s6qqb1ZOwWm88hQ8u2BS98gr4w",
    authDomain: "manit-scholar-buddy.firebaseapp.com",
    projectId: "manit-scholar-buddy",
    storageBucket: "manit-scholar-buddy.appspot.com",
    messagingSenderId: "339582389945",
    appId: "1:339582389945:web:20df2f83a7e96987cb9568",
    databaseURL: "https://manit-scholar-buddy-default-rtdb.asia-southeast1.firebasedatabase.app",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app)
export default app
