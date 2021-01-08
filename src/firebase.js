import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBGnLiwzDHJOetFbj-CfTsBzKgTViBiSX8",
    authDomain: "clone-2367f.firebaseapp.com",
    databaseURL: "https://clone-2367f.firebaseio.com",
    projectId: "clone-2367f",
    storageBucket: "clone-2367f.appspot.com",
    messagingSenderId: "243148402947",
    appId: "1:243148402947:web:a3a63fc53c37374b177936",
    measurementId: "G-X7P11Z1R1P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };