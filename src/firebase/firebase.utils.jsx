import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyDbzLM5A5-Abveio07ZvHCA15NGQrj730s",
    authDomain: "world-clothing-6e7ad.firebaseapp.com",
    databaseURL: "https://world-clothing-6e7ad.firebaseio.com",
    projectId: "world-clothing-6e7ad",
    storageBucket: "world-clothing-6e7ad.appspot.com",
    messagingSenderId: "143371232508",
    appId: "1:143371232508:web:c33417df9e78f0a88b6379",
    measurementId: "G-943BB8VZZH"
  };

  firebase.initializeApp(config)

  export const auth= firebase.auth()
  export const firestore= firebase.firestore()

  const provider= new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account'})
  export const signInWithGoogle=() => auth.signInWithPopup(provider)
  
  export default firebase