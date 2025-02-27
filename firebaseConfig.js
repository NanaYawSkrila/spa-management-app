// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYAwf2hS3Cgw5Qgmls7TIgeeBSCoI0KHc",
  authDomain: "spa-management-app.firebaseapp.com",
  projectId: "spa-management-app",
  storageBucket: "spa-management-app.firebasestorage.app",
  messagingSenderId: "144225604906",
  appId: "1:144225604906:web:71f21a23906512eaf7fa53"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
