import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace with your own Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7USd901HpFMehwTV-ey-U11IMN-b3ZWo",
authDomain: "phai-dawid.firebaseapp.com",
projectId: "phai-dawid",
storageBucket: "phai-dawid.firebasestorage.app",
messagingSenderId: "810576742114",
appId: "1:810576742114:web:b16a8f65c0f376f69800bb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
