// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgVZhvT46emwnX9qb6G97bCNua3mSkGOo",
  authDomain: "hackathon-platform103.firebaseapp.com",
  projectId: "hackathon-platform103",
  storageBucket: "hackathon-platform103.firebasestorage.app",
  messagingSenderId: "527882321028",
  appId: "1:527882321028:web:17dead45bb8647583c16d1",
  measurementId: "G-KSBDJ7JPHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
