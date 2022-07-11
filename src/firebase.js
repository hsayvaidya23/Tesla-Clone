// import firebase from 'firebase';
// import 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const  firebaseConfig = {
    apiKey: "AIzaSyAupGXHPimLajo8UscL5TmFgH1DL5HysVI",
    authDomain: "tesla-clone-a1bb7.firebaseapp.com",
    projectId: "tesla-clone-a1bb7",
    storageBucket: "tesla-clone-a1bb7.appspot.com",
    messagingSenderId: "403004841965",
    appId: "1:403004841965:web:a748faf88e22a5fe5191e4",
    measurementId: "G-C9YP2ZQX17"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export  { auth }