import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDRszcLA2kI7vIDenGH-PZwHId2h4Y0Ol4',
	authDomain: 'saos-72762.firebaseapp.com',
	projectId: 'saos-72762',
	storageBucket: 'saos-72762.appspot.com',
	messagingSenderId: '13873951269',
	appId: '1:13873951269:web:84f7094a3f8a82035945cc',
	measurementId: 'G-2GK6CR9MMC',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
