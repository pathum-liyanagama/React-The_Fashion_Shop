import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC5P-Kn5JqaBFOiLvbOE0AGzL76ZqwVwEc",
    authDomain: "the-fashion-shop.firebaseapp.com",
    databaseURL: "https://the-fashion-shop.firebaseio.com",
    projectId: "the-fashion-shop",
    storageBucket: "the-fashion-shop.appspot.com",
    messagingSenderId: "632465321720",
    appId: "1:632465321720:web:50e93835011baf2baa550d",
    measurementId: "G-QHZ0CL13D2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

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
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;