import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCowuZ2FTbw01zriaXvG1eeD9nPDWOIXiI",
  authDomain: "moneytask-935ed.firebaseapp.com",
  projectId: "moneytask-935ed",
  storageBucket: "moneytask-935ed.appspot.com",
  messagingSenderId: "1048123753940",
  appId: "1:1048123753940:web:eddcbf0324c3768a910241",
  measurementId: "G-GKGHS11ZKY",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
