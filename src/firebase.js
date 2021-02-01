import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBsGP1DQErOMX8gPpimw4uRDL4YLdRMhaM",
    authDomain: "linkedin-clone-47872.firebaseapp.com",
    projectId: "linkedin-clone-47872",
    storageBucket: "linkedin-clone-47872.appspot.com",
    messagingSenderId: "298952653184",
    appId: "1:298952653184:web:aad9ac17f7dba4fd7fa965",
    measurementId: "G-XWX2H4EPPT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db, auth};

  