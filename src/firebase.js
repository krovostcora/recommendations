// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDo1hx4dX-IqNr3lNGas-iOzwg2qhkfbtE",
    authDomain: "recommend-u.firebaseapp.com",
    projectId: "recommend-u",
    storageBucket: "recommend-u.firebasestorage.app",
    messagingSenderId: "871928992577",
    appId: "1:871928992577:web:fb67a34cfd836e4c8a47c0"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;