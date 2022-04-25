// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOM_X3eD6m4VyuwLOLKd7lq78NlOQcZNY",
  authDomain: "react-app-ec919.firebaseapp.com",
  projectId: "react-app-ec919",
  storageBucket: "react-app-ec919.appspot.com",
  messagingSenderId: "471742025350",
  appId: "1:471742025350:web:d97187f571f7b96ab24b07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 