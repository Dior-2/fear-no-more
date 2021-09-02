// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
// import { getAuth, onAuthStateChange } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClTDU3yu-xymllWPU6Z2la3dwesvUuHYM",
  authDomain: "blue-ocean-6a41f.firebaseapp.com",
  projectId: "blue-ocean-6a41f",
  storageBucket: "blue-ocean-6a41f.appspot.com",
  messagingSenderId: "308725367922",
  appId: "1:308725367922:web:a43da15b4afd5507d5eeeb"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

//Detect Auth state
// onAuthStateChanged(auth, user => {
//   if (user != null) {
//     console.log('firebase.js sees user is logged in');
//   } else {
//     console.log('firebase.js does not see a logged in user');
//   }
// })