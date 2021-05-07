import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "rick-and-morty-app-6a534.firebaseapp.com",
  projectId: "rick-and-morty-app-6a534",
  storageBucket: "rick-and-morty-app-6a534.appspot.com",
  messagingSenderId: "595795154616",
  appId: "1:595795154616:web:acd80a32b00171995d464d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
  db,
  googleAuthProvider,
  firebase
}