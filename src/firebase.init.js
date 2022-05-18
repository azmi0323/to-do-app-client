
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBWgdi1n1C38t0k2V6Fz4kh17Ewn_5LuT4",
  authDomain: "to-do-app-b723e.firebaseapp.com",
  projectId: "to-do-app-b723e",
  storageBucket: "to-do-app-b723e.appspot.com",
  messagingSenderId: "948446194849",
  appId: "1:948446194849:web:a71db574ad010ac46bd4e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;