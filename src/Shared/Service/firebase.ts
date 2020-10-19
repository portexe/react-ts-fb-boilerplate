import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import * as firebase from 'firebase/app';

try {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  });
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

export const fb = {
  firestore: firebase.firestore(),
  auth: firebase.auth(),
  storage: firebase.storage(),
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  providerIds: {
    google: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    facebook: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  },
};
