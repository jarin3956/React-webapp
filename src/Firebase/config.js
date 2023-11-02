import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBQu7mvFmsRY-w1LBQA-ZY6wr1fjHVwJdc",
    authDomain: "fir-90930.firebaseapp.com",
    projectId: "fir-90930",
    storageBucket: "fir-90930.appspot.com",
    messagingSenderId: "610449614988",
    appId: "1:610449614988:web:ef8649f89bd62d7f3a33a9",
    measurementId: "G-5CX7LHLKWV"
};

const app = firebase.initializeApp(firebaseConfig);
export default app