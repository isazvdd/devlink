// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpFTRItn94LRW6pP-Byv_-d3Wwl7d5Axc",
  authDomain: "devlinks-48492.firebaseapp.com",
  projectId: "devlinks-48492",
  storageBucket: "devlinks-48492.appspot.com",
  messagingSenderId: "18855670826",
  appId: "1:18855670826:web:d54e23e5bafe756babbf53",
  measurementId: "G-WPPPYPLT8Q",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Database
const db = getFirestore(firebaseApp);

// Initialize authentication
const auth = getAuth(firebaseApp);

// para poder acessar para manipular o db e auth quando precisar
export { db, auth };
