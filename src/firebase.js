import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBJqJqqgYP379EIjPy7FWytBpQ8cGFcl38",
  authDomain: "test-c0cc7.firebaseapp.com",
  databaseURL: "https://test-c0cc7.firebaseio.com",
  projectId: "test-c0cc7",
  storageBucket: "test-c0cc7.appspot.com",
  messagingSenderId: "979237332415",
  appId: "1:979237332415:web:0a947ee28cd64257ac2d0a",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
