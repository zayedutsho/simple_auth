// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkgSWTjWLssDuPJBq78iV7VS_SEIwuogI",
  authDomain: "simp-auth-90a1e.firebaseapp.com",
  projectId: "simp-auth-90a1e",
  storageBucket: "simp-auth-90a1e.appspot.com",
  messagingSenderId: "1006523744845",
  appId: "1:1006523744845:web:0a7d395560210e078c5204"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;