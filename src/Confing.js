
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCaW4i-FlVCC4c56HHdcjVjYIGSK5TdMk0",
  authDomain: "project-pro-user.firebaseapp.com",
  projectId: "project-pro-user",
  storageBucket: "project-pro-user.appspot.com",
  messagingSenderId: "949325226967",
  appId: "1:949325226967:web:420718f7a45688f93e2192",
  measurementId: "G-QCRRJY0SEF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const Provider = new GoogleAuthProvider();