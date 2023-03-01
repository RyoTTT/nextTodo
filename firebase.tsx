// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNwOXjEv8FFnF46JXGjZDW3tIOdej7QzY",
  authDomain: "next-todo-1257a.firebaseapp.com",
  projectId: "next-todo-1257a",
  storageBucket: "next-todo-1257a.appspot.com",
  messagingSenderId: "26054452821",
  appId: "1:26054452821:web:26390bc02acfd0358896dc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();