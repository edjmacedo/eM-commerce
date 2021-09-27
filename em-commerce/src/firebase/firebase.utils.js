import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: 'AIzaSyDgm-WotUSeLZYbnG9MRrdMlv5Ofnzf79g',
    authDomain: 'crwn-db-ca65c.firebaseapp.com',
    projectId: 'crwn-db-ca65c',
    storageBucket: 'crwn-db-ca65c.appspot.com',
    messagingSenderId: '886103495997',
    appId: '1:886103495997:web:f84f3604961ec928892154',
    measurementId: 'G-WWYR5KYXX1',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
