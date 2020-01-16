import  firebase from  'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/storage';

// const config = {
//     apiKey: "AIzaSyCNowFe3sgXme0BfyLChEDlIr0HKaWS6Mg",
//     authDomain: "exemplo-curso.firebaseapp.com",
//     databaseURL: "https://exemplo-curso.firebaseio.com",
//     projectId: "exemplo-curso",
//     storageBucket: "exemplo-curso.appspot.com",
//     messagingSenderId: "567612755555",
//     appId: "1:567612755555:web:4730f9c38a870e2efb3256",
//     measurementId: "G-HYMPQENEZH"
// };

const config = {
    apiKey: "AIzaSyA1eFc9gPrsQVL-hYTESJ8A579eERQjJQg",
    authDomain: "curso-mobile-8c862.firebaseapp.com",
    databaseURL: "https://curso-mobile-8c862.firebaseio.com",
    projectId: "curso-mobile-8c862",
    storageBucket: "curso-mobile-8c862.appspot.com",
    messagingSenderId: "214816596547",
    appId: "1:214816596547:web:e97ef5a4665f6485dfaaf6"
};


const firebaseApp = firebase.initializeApp(config);
const auth =  firebaseApp.auth();
const db =  firebaseApp.firestore();
const storage = firebaseApp.storage();
const imagesRef = id => storage.ref().child(id);


export { db, storage, auth, imagesRef }