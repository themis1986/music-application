import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJotGabHzKkVuILGMcx8ObnhF-Uopv-5k",
  authDomain: "music-application-d7c4c.firebaseapp.com",
  projectId: "music-application-d7c4c",
  storageBucket: "music-application-d7c4c.appspot.com",
  //   messagingSenderId: "409830795",
  appId: "1:409830795:web:ef8fe280c425f976421b8e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");

export { auth, db, storage, usersCollection };
