// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzQdD5rnoLSkGK7mZC1ePxxQ6xGOWv2GM",
  authDomain: "maine-ultimate-tournament-app.firebaseapp.com",
  projectId: "maine-ultimate-tournament-app",
  storageBucket: "maine-ultimate-tournament-app.appspot.com",
  messagingSenderId: "143718462090",
  appId: "1:143718462090:web:04eef22672e31474793373"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };