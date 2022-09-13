import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJotGabHzKkVuILGMcx8ObnhF-Uopv-5k",
  authDomain: "music-application-d7c4c.firebaseapp.com",
  projectId: "music-application-d7c4c",
  storageBucket: "music-application-d7c4c.appspot.com",
  //   messagingSenderId: "409830795",
  appId: "1:409830795:web:ef8fe280c425f976421b8e",
};

export default firebase.initializeApp(firebaseConfig);
