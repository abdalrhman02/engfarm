import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRYckGqc932nbC8O8Yoj7F41KBejhRttc",
  authDomain: "asdasd-f6a90.firebaseapp.com",
  projectId: "asdasd-f6a90",
  storageBucket: "asdasd-f6a90.firebasestorage.app",
  messagingSenderId: "153632039599",
  appId: "1:153632039599:web:8cb88f400223c24c596a5a",
  measurementId: "G-0BCDHBW5X4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);