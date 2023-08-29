import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCGE-17bsqq03YmATz3lXzckxStnTOVzgk",
    authDomain: "clone-1f8aa.firebaseapp.com",
    projectId: "clone-1f8aa",
    storageBucket: "clone-1f8aa.appspot.com",
    messagingSenderId: "597773413781",
    appId: "1:597773413781:web:f169dd94e160a9a79d1a9c",
    measurementId: "G-RBFG2NEE3B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };