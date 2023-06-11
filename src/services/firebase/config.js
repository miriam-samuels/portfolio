// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQD9QLLaTS-xjbi4KyBUcsJABz8o7WLzs",
  authDomain: "mi-portofolio.firebaseapp.com",
  projectId: "mi-portofolio",
  storageBucket: "mi-portofolio.appspot.com",
  messagingSenderId: "659422516137",
  appId: "1:659422516137:web:77c49f6cb23c96061baab8",
  measurementId: "G-798DJ97ZY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)