import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDaXr88lIYVyNuoXFRPitCBAWh0JwwRaxI',
	authDomain: 'konnely-67d6a.firebaseapp.com',
	projectId: 'konnely-67d6a',
	storageBucket: 'konnely-67d6a.appspot.com',
	messagingSenderId: '168142494376',
	appId: '1:168142494376:web:dc32f5d9ffede5afa4009d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
