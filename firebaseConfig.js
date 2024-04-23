import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDtcGreaEfj1LMidiyHQ1M3idIoVTbL7KM",
    authDomain: "projectfirebase-462ec.firebaseapp.com",
    projectId: "projectfirebase-462ec",
    storageBucket: "projectfirebase-462ec.appspot.com",
    messagingSenderId: "182629473826",
    appId: "1:182629473826:web:9e8370287bc188b1c4347b",
    measurementId: "G-6Y7JMP9Z6J"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getAuth(app); //not necessary now

export { app, database }