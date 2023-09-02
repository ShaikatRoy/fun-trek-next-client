import { initializeApp } from "firebase/app";
import "@firebase/firestore";
import "firebase/auth";
import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: process.env.NEXT_apiKey,
    authDomain: process.env.NEXT_authDomain,
    projectId: process.env.NEXT_projectId,
    storageBucket: process.env.NEXT_storageBucket,
    messagingSenderId: process.env.NEXT_messagingSenderId,
    appId: process.env.NEXT_appId,
  };

  
  if (!firebase.apps.length) {
    initializeApp(firebaseConfig); 
  }

  export default firebase;