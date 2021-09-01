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
        console.log('UserId on load is', userId);
        //setUserId(userId);
        axios.get(`${url}/api/profile?email=${userEmail}`)
        .then(response => {
          console.log('Response from app', response)
          if (response.data.length > 0) {
            setUserProfile(response.data[0]);
          } else {
            setUserProfile({
              address1: "123 Amalia Bruno",
              address2: "",
              city: "Caleb",
              email: "Darian@edric.games",
              firebase_id: "",
              firstname: "Harold",
              homephone: "4567890123",
              id: 0,
              lastname: "Inspiretron",
              mobile: "3210987654",
              organization: "Joe's Klub",
              preferredcontact: 0,
              role: 3,
              state: "LA",
              username: "To Firebase but not database",
              zip: 12345
            });
          }
        })
        .catch(err => {
          setUserProfile({
            address1: "123 Amalia Bruno",
            address2: "",
            city: "Caleb",
            email: "Darian@edric.games",
            firebase_id: "",
            firstname: "Harold",
            homephone: "4567890123",
            id: 0,
            lastname: "Inspiretron",
            mobile: "3210987654",
            organization: "Joe's Klub",
            preferredcontact: 0,
            role: 3,
            state: "LA",
            username: "Guest",
            zip: 12345
          });
        });
      } else {
        setUserProfile({
          address1: "123 Amalia Bruno",
          address2: "",
          city: "Caleb",
          email: "Darian@edric.games",
          firebase_id: "",
          firstname: "Harold",
          homephone: "4567890123",
          id: 0,
          lastname: "Inspiretron",
          mobile: "3210987654",
          organization: "Joe's Klub",
          preferredcontact: 0,
          role: 3,
          state: "LA",
          username: "Guest",
          zip: 12345
        });
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
