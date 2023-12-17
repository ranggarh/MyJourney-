import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";

firebase.initializeApp({
    apiKey: "AIzaSyBF1VshoaLcYX_6d34EwFSPsP9Y2rgAPag",
    authDomain: "myjourney-a8577.firebaseapp.com",
    projectId: "myjourney-a8577",
    storageBucket: "myjourney-a8577.appspot.com",
    messagingSenderId: "506064702655",
    appId: "1:506064702655:web:6dfb5d2bee65aa8260ca0a"
});

const FIREBASE = firebase;

export default FIREBASE;