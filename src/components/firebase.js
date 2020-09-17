import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyApKSReUdaCi_7Lmo1dG1aZncVYmFjxy6M",
  authDomain: "jennifer-1197e.firebaseapp.com",
  databaseURL: "https://jennifer-1197e.firebaseio.com",
  projectId: "jennifer-1197e",
  storageBucket: "jennifer-1197e.appspot.com",
  messagingSenderId: "51243032719",
  appId: "1:51243032719:web:478d7f0778e365367b90fa",
  measurementId: "G-SFEMMNY3E0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
