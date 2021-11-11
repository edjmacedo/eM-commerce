import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDgm-WotUSeLZYbnG9MRrdMlv5Ofnzf79g",
  authDomain: "crwn-db-ca65c.firebaseapp.com",
  databaseURL:
    "https://crwn-db-ca65c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "crwn-db-ca65c",
  storageBucket: "crwn-db-ca65c.appspot.com",
  messagingSenderId: "886103495997",
  appId: "1:886103495997:web:f84f3604961ec928892154",
  measurementId: "G-WWYR5KYXX1",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
