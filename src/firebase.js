import firebase from "firebase/app";

import "firebase/auth"; //auth
import "firebase/database"; //database
import "firebase/storage"; //storing images

const firebaseConfig = {
  apiKey: "AIzaSyAJXrSWTII8694twt5iIcjdjvc6Zd_kBTM",
  authDomain: "prime-react-648d4.firebaseapp.com",
  databaseURL: "https://prime-react-648d4.firebaseio.com",
  projectId: "prime-react-648d4",
  storageBucket: "prime-react-648d4.appspot.com",
  messagingSenderId: "664062575322",
  appId: "1:664062575322:web:3edfe6aa5042a444de1be3"
};

firebase.initializeApp(firebaseConfig); //firebase init
export default firebase;
