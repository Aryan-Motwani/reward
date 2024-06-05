// src/firebase.js
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNSjRR_QiHpxq5nRS71I0cc48wI3Vh09k",
  authDomain: "auth-check-a6fa7.firebaseapp.com",
  projectId: "auth-check-a6fa7",
  storageBucket: "auth-check-a6fa7.appspot.com",
  messagingSenderId: "300882177713",
  appId: "1:300882177713:web:80ab378940e19ca80a3c90",
  measurementId: "G-01V18BB1YB",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
