// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpqUF83gUzYmDbPIcq3InA3kQYzxPWqVg",
  authDomain: "pro-reader-af42f.firebaseapp.com",
  projectId: "pro-reader-af42f",
  storageBucket: "pro-reader-af42f.appspot.com",
  messagingSenderId: "1053700855457",
  appId: "1:1053700855457:web:aa49d7f27afd7fe1d1c2e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;