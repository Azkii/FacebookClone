// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA88t2TEOi20QYzqnN_3aRN7NrkfEKm4sM",
    authDomain: "bookface-9b729.firebaseapp.com",
    projectId: "bookface-9b729",
    storageBucket: "bookface-9b729.appspot.com",
    messagingSenderId: "404898455661",
    appId: "1:404898455661:web:7106a78dfb16e3f5d5df64",
    measurementId: "G-MY3F10SD4W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const dataBase = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();



export {auth,provider};
export default dataBase;