// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqvdki5baAZ3EsHyafrwKN36a-9sXNzq8",
  authDomain: "crash-course-eae91.firebaseapp.com",
  projectId: "crash-course-eae91",
  storageBucket: "crash-course-eae91.appspot.com",
  messagingSenderId: "684198759937",
  appId: "1:684198759937:web:a981ddff5ed7860514fa00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app