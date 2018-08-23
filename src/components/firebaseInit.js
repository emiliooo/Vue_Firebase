import firebase from 'firebase';
import 'firebase/firestore';
const firebaseApp = firebase.initializeApp(config);
export default firebaseApp

const config = {
    apiKey: "AIzaSyB60jp-bHh6_NdAcYKaWD1uc2PjC4u3dLA",
    authDomain: "vuefeat.firebaseapp.com",
    databaseURL: "https://vuefeat.firebaseio.com",
    projectId: "vuefeat",
    storageBucket: "vuefeat.appspot.com",
    messagingSenderId: "969234139765"
};
