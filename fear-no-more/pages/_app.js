import React, {useState, useEffect} from 'react';
import AuthContext from './AuthContext.js';
import axios from 'axios';
import '../styles/globals.css'
import firebase from '../firebase.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function MyApp({ Component, pageProps }) {
  const [userProfile, setUserProfile] = useState({});
  const url = 'http://18.222.198.9'
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const userId = user.uid;
        const userEmail = user.email;
        console.log('User email on Load is', userEmail);
        //setUserId(userId);
        axios.get(`${url}/api/profile/`, {
          params: {
            email: userEmail
          }
        })
        .then(response => {
          console.log('NO WHAMMIES!!')
        })
      } else {
        axios.get(`${url}/api/profile/`, {
          params: {
            email: userEmail
          }
        })
        .then(response => {
          console.log('response', response);
        })
      }
    });
  }, []);



  return (
    <AuthContext.Provider value={userProfile}>
        <Component {...pageProps} />
    </AuthContext.Provider>
  )
}

export default MyApp;
