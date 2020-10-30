import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpbCcEss31pjysF--BfPyufWIrsvw3n9M",
    authDomain: "slack-clone-95c7d.firebaseapp.com",
    databaseURL: "https://slack-clone-95c7d.firebaseio.com",
    projectId: "slack-clone-95c7d",
    storageBucket: "slack-clone-95c7d.appspot.com",
    messagingSenderId: "614740022157",
    appId: "1:614740022157:web:22f9c73ec356ca518d23c4",
    measurementId: "G-TJSJ9HHEJ1"
  }; 

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider};
  export default db;