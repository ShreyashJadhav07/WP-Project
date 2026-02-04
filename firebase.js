// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr1lSZCJXQTioifanFS5SdWv7Vr0BdBUE",
  authDomain: "whatsapp-clone-c2c79.firebaseapp.com",
  projectId: "whatsapp-clone-c2c79",
  storageBucket: "whatsapp-clone-c2c79.appspot.com",
  messagingSenderId: "788900349183",
  appId: "1:788900349183:web:87150ec7e76790dfea38ca",
  measurementId: "G-6S0WFNT5C0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const db=getFirestore(app);
const storage=getStorage(app);
export { auth, db, storage }