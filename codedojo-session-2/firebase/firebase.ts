// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXo9dIs9-VoINVA2eK2D9a6TAkX6-EGP8",
  authDomain: "codedojo-session-2.firebaseapp.com",
  projectId: "codedojo-session-2",
  storageBucket: "codedojo-session-2.appspot.com",
  messagingSenderId: "898041141000",
  appId: "1:898041141000:web:993716bf8cddedcbb6bebd",
  measurementId: "G-NV40KNXCGR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);