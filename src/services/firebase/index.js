// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeGFf4OvqhNa8GiadyjACVRofdi3nhgeI",
  authDomain: "final-coder-react-e072b.firebaseapp.com",
  projectId: "final-coder-react-e072b",
  storageBucket: "final-coder-react-e072b.firebasestorage.app",
  messagingSenderId: "866146877399",
  appId: "1:866146877399:web:c70335280ebd44d37a1592"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);