import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAlfBwVFY-CskFifXosMeaVCbdLmNU3-Mc",
    authDomain: "twitter-clone-d5f73.firebaseapp.com",
    databaseURL: "https://twitter-clone-d5f73.firebaseio.com",
    projectId: "twitter-clone-d5f73",
    storageBucket: "twitter-clone-d5f73.appspot.com",
    messagingSenderId: "160396176556",
    appId: "1:160396176556:web:7dcea207016f44bffc0309",
    measurementId: "G-L4SGCZLGQK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;