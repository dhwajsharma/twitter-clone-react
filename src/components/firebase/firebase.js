import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCZWWVfG1lrpn1kANVSaNZLqkydmFOWXaw",
    authDomain: "twitter-clone-1ea6e.firebaseapp.com",
    projectId: "twitter-clone-1ea6e",
    storageBucket: "twitter-clone-1ea6e.appspot.com",
    messagingSenderId: "1025105005272",
    appId: "1:1025105005272:web:8ac25489fd3cb4f1de65ad",
    measurementId: "G-DCBBBXVL5V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;