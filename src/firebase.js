import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA5ePLSkd9A_l62PxPNMu6jzEK7x4qLyRs",
  authDomain: "sweet-burger.firebaseapp.com",
  databaseURL: "https://sweet-burger.firebaseio.com",
  projectId: "sweet-burger",
  storageBucket: "sweet-burger.appspot.com",
  messagingSenderId: "914138347997",
  appId: "1:914138347997:web:3d31d409f433f05b609e34"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;