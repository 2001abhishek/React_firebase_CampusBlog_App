// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnz3TwzZpskKDMA9aIu30-cCJdeFovjzs",
  authDomain: "campusblog-webapp.firebaseapp.com",
  projectId: "campusblog-webapp",
  storageBucket: "campusblog-webapp.appspot.com",
  messagingSenderId: "482660979005",
  appId: "1:482660979005:web:02d05d46500c25f2e1f554"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDB, auth, storage, GoogleAuthProvider };