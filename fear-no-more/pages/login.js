import React, {useState, useEffect} from 'react';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../Components/layout';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import NavBar from '../Components/Nav/NavBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
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

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    display: 'flex',
    flexDirection: 'row',
    align: 'center',
    marginTop: 75,
    marginBottom: 50
  },
  cent: {
    align: 'right',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    letterSpacing: -2,
    justifyContent: 'center',
    // fontWeight: 'Bold'

  },
  snip: {
    align: 'right',
    textAlign: 'center',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 30,
    maxWidth: 600,
    marginTop: 40,
    fontSize: 13,
    lineHeight: 1.2,
    fontStyle: 'italic'
  }

});

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('Guest');
  const [forgotPassword, requestReset] = useState(false);
  const auth = getAuth();
  const classes = useStyles();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/firebase.User
  //       const userId = user.uid;
  //       console.log('User ID on Load is', userId);
  //       setUserId(userId);
  //       // sent send email to server, if email matches firebase id, let user do whatever
  //       // ...
  //     } else {
  //       console.log('You have loaded a page with a user logged out');
  //       // User is signed out
  //       // ...
  //     }
  //   });
  // }, []);

  const handleSignInClick = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const userId = user.auth.currentUser.uid;
        // console.log('user', user);
        // console.log
        setUserId(userId);
        // More stuff here when you think about it
        Router.push('/');
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
      {/* <NavBar username={userId}/> */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card className={classes.root} >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Lorem ipsum"
                height="170"
                image="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2017/05/istock-64215815-medium-1024x679-1493792308.jpg"
                title="Lorem ipsum"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Welcome Back!
                </Typography>
                <div>
                  <Typography htmlFor="username">Email</Typography>
                  <input type="text" id="login-username" name="email" placeholder="Enter email..." required
                    onChange={(e) => { setEmail(e.target.value); }}
                  />
                </div>
                <div>
                  <Typography htmlFor="password">Password</Typography>
                  <input type="text" id="login-password" name="password" type="password" placeholder="Enter password..." required
                    onChange={(e) => { setPassword(e.target.value); }}
                  />
                </div>
                <div>
                  <section>
                    <Button variant="contained" color="primary" onClick={() => {
                      handleSignInClick();
                    }}>
                      Sign in!
                    </Button>
                    <Button variant="contained">
                      <Link href="/">Go Back</Link>
                    </Button>
                  </section>
                  <section>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Whether you're in need of help or have resources to share, we wish you a healthy and productive exchange. We wish you a rewarding experience and a bright future!
                    </Typography>
                  </section>
                </div>
                <div>
                  <a onClick={() => { requestReset(true) }}>Forgot Password?</a>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </section>
    </Layout>
  )
}

export default Login;