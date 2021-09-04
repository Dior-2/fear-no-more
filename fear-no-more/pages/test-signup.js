import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../Components/layout';
import Link from 'next/link';
import firebase from '../firebase.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";

const FireBaseAPITesting = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [method, setMethod] = useState('');
  const [location, setLocation] = useState('');
  const [userId, setUserId] = useState('Guest');
  const auth = getAuth();

  const handleSignUpClick = () => {
    if (password === passwordConfirmation) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const userId = userCredential.userauth.currentUser.uid;
          setUserId(userId);
          const newUserData = {
            user_id: userId,
            username: username,
            email: email,
            phone_number: phoneNumber,
            method: method,
            location: location
          };
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  }

  const handleSignInClick = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userId = user.auth.currentUser.uid;
        setUserId(userId);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleSignOutClick = () => {
    signOut(auth).then(() => {
      setUserId('Guest');
    }).catch((error) => {
    });
  };

  const handlePasswordChangeClick = () => {
    if (password === passwordConfirmation) {
      var user = auth.currentUser;
      var newPassword = password;
      updatePassword(user, newPassword).then(() => {
      }).catch((error) => {
      });
    }
  }

  const handlePasswordResetClick = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Password reset sent!');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        This is the 3 authentication function test page
      </div>
      <div>----------------------------</div>
      <section>
        <div>
          Signup Testing
        </div>
        <div>
          <label htmlFor="username">What is your username?</label>
          <input type="text" id="signup-username" required
            name="username" placeholder="Enter username..."
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">What is yor email?</label>
          <input type="text" id="signup-email" name="email" placeholder="Enter email..."
            onChange={(e) => { setEmail(e.target.value); }}
          />
        </div>
        <div>
          <label htmlFor="password">What is your password?</label>
          <input type="text" id="signup-password" name="password" placeholder="Enter password..." required
            onChange={(e) => { setPassword(e.target.value) }} />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm password?</label>
          <input type="text" id="confirm-password" name="confirm-password" placeholder="Confirm password..." required
            onChange={(e) => { setPasswordConfirmation(e.target.value) }} />
        </div>
        <div>
          <label htmlFor="phone-number">What is yor phone number?</label>
          <input type="text" id="signup-phone-number" name="phone-number" placeholder="Enter phonenumber..." />
        </div>
        <div>
          <label htmlFor="contact-method">What is your perferred contact method?</label>
          <input type="text" id="signup-contact-method" name="contact-method" placeholder="Enter prefered contact method..." />
        </div>
        <div>
          <label htmlFor="location">What is your location?</label>
          <input type="text" id="signup-location" name="location" placeholder="Enter location..." required />
        </div>
        <div>
          <button type="button" onClick={() => {
            handleSignUpClick();
          }}>
            Sign me up!
          </button>
          <button type="button">
            <Link href="/">I want to go home! :(</Link>
          </button>
        </div>
        <div>
          <a href="#">Already have an account?</a>
        </div>
      </section>
      <div>----------------------------</div>
      <section>
        <div>
          Login Testing
        </div>
        <div>
          <label htmlFor="username">Email</label>
          <input type="text" id="login-username" name="email" placeholder="Enter email..." required
            onChange={(e) => { setEmail(e.target.value); }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="login-password" name="password" placeholder="Enter password..." required
            onChange={(e) => { setPassword(e.target.value); }}
          />
        </div>
        <div>
          <button type="button" onClick={() => {
            handleSignInClick();
          }}>
            Sign in!
          </button>
          <button type="button">
            <Link href="/">I want to go home! :(</Link>
          </button>
        </div>
        <div>
          <a href="#">{`You forgot your password, didn't you?`}</a>
        </div>
      </section>
      <div>----------------------------</div>
      <section>
        <div>Signout Testing</div>
        <button onClick={() => {
          handleSignOutClick();
        }}>
          Sign Out
        </button>
      </section>
      <div>----------------------------</div>
      <section>
        <div>Change Password</div>
        <div>
          <label htmlFor="email">What is yor email?</label>
          <input type="text" id="signup-email" name="email" placeholder="Enter email..."
            onChange={(e) => { setEmail(e.target.value); }}
          />
        </div>
        <div>
          <label htmlFor="password">What is your password?</label>
          <input type="text" id="signup-password" name="password" placeholder="Enter password..." required
            onChange={(e) => { setPassword(e.target.value) }} />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm password?</label>
          <input type="text" id="confirm-password" name="confirm-password" placeholder="Confirm password..." required
            onChange={(e) => { setPasswordConfirmation(e.target.value) }} />
        </div>
        <button onClick={() => {
          handlePasswordChangeClick();
        }}>
          Change Password
        </button>
      </section>
      <div>----------------------------</div>
      <section>
        <div>Reset Password</div>
        <div>
          <label htmlFor="email">What is yor email?</label>
          <input type="text" id="signup-email" name="email" placeholder="Enter email..."
            onChange={(e) => { setEmail(e.target.value); }}
          />
        </div>
        <button onClick={() => {
          handlePasswordResetClick();
        }}>
          Reset Password
        </button>
      </section>
      <div>----------------------------</div>
      <section>
        <div styles={{ color: 'red' }}>The current user ID: {userId}</div>
      </section>
    </Layout>
  )
}
export default FireBaseAPITesting;