import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.NEXT_apiKey,
    authDomain: process.env.NEXT_authDomain,
    projectId: process.env.NEXT_projectId,
    storageBucket: process.env.NEXT_storageBucket,
    messagingSenderId: process.env.NEXT_messagingSenderId,
    appId: process.env.NEXT_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;