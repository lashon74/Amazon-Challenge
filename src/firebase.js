import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiyf3KrdT3oGyKBy-pOmuiEzONfw-7WoU",
  authDomain: "challenge-34146.firebaseapp.com",
  databaseURL: "https://challenge-34146.firebaseio.com",
  projectId: "challenge-34146",
  storageBucket: "challenge-34146.appspot.com",
  messagingSenderId: "887392117066",
  appId: "1:887392117066:web:4a64fc3b38bd42a12121b3",
  measurementId: "G-3J95NWP3WG",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
