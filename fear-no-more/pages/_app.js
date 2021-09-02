import React, {useState, useEffect} from 'react';
import AuthContext from './AuthContext.js';
import axios from 'axios';
import '../styles/globals.css'
import firebase from '../firebase.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function MyApp({ Component, pageProps }) {
  const [userProfile, setUserProfile] = useState({});
  const [focusPost, setFocusPost] = useState(6);
  const [updateTrigger, setUpdateTrigger] = useState(false);
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
        console.log('UserId on load is', userId);
        //setUserId(userId);
        axios.get(`${url}/api/profile?email=${userEmail}`)
        .then(response => {
          console.log('Response from app', response)
          if (response.data.length > 0) {
            setUserProfile(response.data[0]);
          } else {
            setUserProfile({
              address1: null,
              address2: null,
              city: "Guest City",
              email: "guest@anonymous.com",
              firebase_id: null,
              firstname: "Best",
              homephone: null,
              id: 0,
              lastname: "Guest",
              mobile: null,
              organization: null,
              preferredcontact: 0,
              role: 3,
              state: "GS",
              username: "Guest",
              zip: null
            });
          }
        })
        .catch(err => {
          setUserProfile({
            address1: null,
            address2: null,
            city: "Guest City",
            email: "guest@anonymous.com",
            firebase_id: null,
            firstname: "Best",
            homephone: null,
            id: 0,
            lastname: "Guest",
            mobile: null,
            organization: null,
            preferredcontact: 0,
            role: 3,
            state: "GS",
            username: "Guest",
            zip: null
          });
        });
      } else {
        setUserProfile({
          address1: null,
          address2: null,
          city: "Guest City",
          email: "guest@anonymous.com",
          firebase_id: null,
          firstname: "Best",
          homephone: null,
          id: 0,
          lastname: "Guest",
          mobile: null,
          organization: null,
          preferredcontact: 0,
          role: 3,
          state: "GS",
          username: "Guest",
          zip: null
        });
      }
    });
  }, [updateTrigger]);



  return (
    <AuthContext.Provider value={{userProfile: userProfile, focusPost: focusPost, updateTrigger: updateTrigger, setUpdateTrigger: setUpdateTrigger}}>
        <Component {...pageProps} />
    </AuthContext.Provider>
  )
}

export default MyApp;
