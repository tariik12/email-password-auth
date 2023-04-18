// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt633P2EeSm3NmnglOm1CAOLZNF7eAZkQ",
  authDomain: "email-password-auth-f2a48.firebaseapp.com",
  projectId: "email-password-auth-f2a48",
  storageBucket: "email-password-auth-f2a48.appspot.com",
  messagingSenderId: "687235348843",
  appId: "1:687235348843:web:5990a6c79b1f2bb7db342e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app