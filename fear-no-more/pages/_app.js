import React, {useEffect} from 'react';
import '../styles/globals.css'
import firebase from '../firebase.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function MyApp({ Component, pageProps }) {
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const userId = user.uid;
        console.log('User ID on Load is', userId);
        //setUserId(userId);
        // ...
      } else {
        console.log('User is not logged in');
      }
    });
    // const auth = getAuth();
    // console.log('auth', auth);
    // { auth.currentUser ? console.log('userId', auth.currentUser.uid) : console.log('No user to log') }
    // { auth.currentUser ? setUserId(auth.currentUser.uid) : console.log('No user to set') }
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
