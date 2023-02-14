// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFireStore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBW8mZwAmXi6rCNvahy5b_d6qM3goxciWA",
  authDomain: "fir-course-4bc8f.firebaseapp.com",
  projectId: "fir-course-4bc8f",
  storageBucket: "fir-course-4bc8f.appspot.com",
  messagingSenderId: "667359347693",
  appId: "1:667359347693:web:99ab608a32dbbd07b9dde4",
  measurementId: "G-ZR9ZTB2178"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()

export const db  = getFireStore(app)