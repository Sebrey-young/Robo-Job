import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABo9c5Xc7Lx2dekicAZ-Z1XyMne2RnbX0",
  authDomain: "robojob-e8963.firebaseapp.com",
  projectId: "robojob-e8963",
  storageBucket: "robojob-e8963.firebasestorage.app",
  messagingSenderId: "169404293261",
  appId: "1:169404293261:web:efcded66de940ba2ed82c4",
  measurementId: "G-H45W42YBX5"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
 
 export const auth = getAuth(app);
 export const db = getFirestore(app)