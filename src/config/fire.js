import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdRfaVSuEZWBLjTSmA9-gbVYm2zKNW88E",
    authDomain: "todo-app-01-7853c.firebaseapp.com",
    projectId: "todo-app-01-7853c",
    storageBucket: "todo-app-01-7853c.appspot.com",
    messagingSenderId: "840668300177",
    appId: "1:840668300177:web:2ad02a6054989ddf2e1030"
};

const fire = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

export default fire;