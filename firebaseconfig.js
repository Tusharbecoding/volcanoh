import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/database'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCKJDRJA8Qa9m4pPhBE6v0DmxG6ha2iQcc",
    authDomain: "volcanoh-3ca19.firebaseapp.com",
    projectId: "volcanoh-3ca19",
    storageBucket: "volcanoh-3ca19.appspot.com",
    messagingSenderId: "68240448112",
    appId: "1:68240448112:web:0586d185811e4c5bb8b2b5"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export { firebase }