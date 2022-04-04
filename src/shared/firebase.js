import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/database";


const firebaseConfig = {
  apiKey: "AIzaSyCB7DdgVJhfmEdWxeeCQloSoOwbZs_voc8",
  authDomain: "image-community-92db3.firebaseapp.com",
  projectId: "image-community-92db3",
  storageBucket: "image-community-92db3.appspot.com",
  messagingSenderId: "356847283492",
  appId: "1:356847283492:web:a2d86849292b42a3ac57b1",
  measurementId: "G-LBJ3MBYNT4"
}

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();

export{auth, apiKey, firestore, storage, realtime}; 