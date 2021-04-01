import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDBDtpiHKhmVZwKEE0mGL6aZWmHUdwg_F0",
  authDomain: "pi-app-416b7.firebaseapp.com",
  projectId: "pi-app-416b7",
  storageBucket: "pi-app-416b7.appspot.com",
  messagingSenderId: "1041335484431",
  appId: "1:1041335484431:web:7bf851cbcd73649538a37a",
  measurementId: "G-8WEK5TVJGP"
};

firebase.initializeApp(firebaseConfig);


// export const database = firebase.database();
// export const { auth } = firebase;
// export const storage = firebase.storage();

// const provider = new auth.GoogleAuthProvider();

// export function login() {
//   return auth().signInWithPopup(provider).then(async (result) => {
//     const { displayName, email, photoURL, uid } = result.user;
//     const authUser = { displayName, email, photoURL, uid };
//     return authUser;
//   })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       const { email } = error;
//       const { credential } = error;
//       console.log(errorCode, errorMessage, email, credential);
//       throw new Error();
//     });
// }
