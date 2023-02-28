// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import { Navigate } from 'react-router-dom';
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
firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();

export const signupWithEmailAndPassword = async (email:string,password:string) => {
    try {
        const user = await firebase.auth().createUserWithEmailAndPassword(email,password);
        return user;
    } catch (error) {
        alert("登録できませんでした");
    }
}

export const signinWithEmailAndPassword = async (email:string,password:string) => {
    try {
        const user = await firebase.auth().signInWithEmailAndPassword(email,password);
        return user;
    } catch (error) {
        alert("ログインできませんでした");
    }
}
export const signOut = async () => {
    await firebase.auth().signOut();
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("user is true")
      // ...
    } else {

    }
  });

//googoleサインイン
export const googleSignin =  () => {
     firebase.auth()
    .getRedirectResult()
    .then((result) => {
      if (result.credential) {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
      }
    })}