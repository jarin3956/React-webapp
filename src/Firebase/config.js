import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_Fbse_Api_Key,
    authDomain: process.env.REACT_APP_Fbse_Auth_Domain,
    projectId: process.env.REACT_APP_Fbse_Project_Id,
    storageBucket: process.env.REACT_APP_Fbse_Storage_Bucket,
    messagingSenderId: process.env.REACT_APP_Fbse_Messaging_Sender_Id,
    appId: process.env.REACT_APP_Fbse_App_Id,
    measurementId: process.env.REACT_APP_Fbse_Measurement_Id,
};

const app = firebase.initializeApp(firebaseConfig);
export default app