import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;