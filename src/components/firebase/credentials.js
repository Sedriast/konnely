import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyDaXr88lIYVyNuoXFRPitCBAWh0JwwRaxI",
	authDomain: "konnely-67d6a.firebaseapp.com",
	projectId: "konnely-67d6a",
	storageBucket: "konnely-67d6a.appspot.com",
	messagingSenderId: "168142494376",
	appId: "1:168142494376:web:dc32f5d9ffede5afa4009d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
