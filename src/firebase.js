// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseApp = firebase.initializeApp(firebaseConfig);
const dataBase = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default dataBase;