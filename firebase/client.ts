
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore' 


const firebaseConfig = {
  apiKey: "AIzaSyB6rjBwwBE6Lt8OlNtPjmtAqDTEiPxmiws",
  authDomain: "ai-interview-platform-3650b.firebaseapp.com",
  projectId: "ai-interview-platform-3650b",
  storageBucket: "ai-interview-platform-3650b.firebasestorage.app",
  messagingSenderId: "16523113950",
  appId: "1:16523113950:web:1fb9f4b358005fb9a0594f",
  measurementId: "G-13YVBK58YG"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);