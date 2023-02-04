import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyDEkudVm0yVDUoxjahRNWTDOVBumd1CJvQ',
    authDomain: 'konnely-e4041.firebaseapp.com',
    projectId: 'konnely-e4041',
    storageBucket: 'konnely-e4041.appspot.com',
    messagingSenderId: '1041352313579',
    appId: '1:1041352313579:web:6c0541ab544a5bd3b38cae',
    measurementId: 'G-7S34NTVHPL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
