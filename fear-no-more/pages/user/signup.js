import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import axios from 'axios';
import firebase from '../../firebase.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Layout, { siteTitle } from '../../Components/layout';
import Head from 'next/head';
import Button from '@material-ui/core/Button';
import NewUserListItem from '../../Components/User/NewUserListItem';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Container, List } from '@material-ui/core';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    marginBottom: '3rem'
  },
  table: {
    minWidth: '500px',
  }
});

const Profile = () => {
  const auth = getAuth();
  const [fireBaseID, setFireBaseID] = useState('Guest');
  //Account Category
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]  = useState('');
  const [role, setRole] = useState('');
  const [organization, setOrganization] = useState('');

  const accountRow = [
    {label: 'Username', setter: setUsername},
    {label: 'Password', setter: setPassword},
    {label: 'First Name', setter: setFirstName},
    {label: 'Last Name', setter: setLastName},
    {label: 'Role', setter: setRole},
    {label: 'Organization', setter: setOrganization}
  ];

  //Contact Category
  const [homePhone, setHomePhone] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [preferredContact, setPreferredContact] = useState('');

  const contactRow = [
    {label: 'Home Phone', setter: setHomePhone},
    {label: 'Cell Phone', setter: setMobile},
    {label: 'Email', setter: setEmail},
    {label: 'Preferred Contact', setter: setPreferredContact}
  ]

  //Address Category
  const [city, setCity] = useState('');
  const [state, updateState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  const addressRow = [
    {label: 'City', setter: setCity},
    {label: 'State', setter: updateState},
    {label: 'Zipcode', setter: setZipcode},
    {label: 'Address 1', setter: setAddress1},
    {label: 'Address 2', setter: setAddress2},
  ];

  const url = 'http://18.222.198.9';

  const classes = useStyles();

  const handleSignUpClick = () => {
    axios.get(`${url}/api/check/${email}`)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log('That ain\'t work none', err));
    if (city !== ''
    && email !== ''
    && firstName !== ''
    && lastName !== ''
    && username !== ''
    && state !== '') {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          console.log(userCredential);
          const uid = userCredential.user.uid;
          setFireBaseID(uid);
          console.log('Reaching this line with firebase_id', fireBaseID);
          if (address1 === '') {
            var convertedAddress1 = null;
          } else {
            var convertedAddress1 = address1;
          }
          if (address2 === '') {
            var convertedAddress2 = null;
          } else {
            var convertedAddress2 = address2;
          }
          if (homePhone === '') {
            var convertedHomePhone = null;
          } else {
            var convertedHomePhone = homePhone;
          }
          if (mobile === '') {
            var convertedMobile = null;
          } else {
            var convertedMobile = mobile;
          }
          if (preferredContact === '') {
            var convertedPreferredContact = 0;
          } else {
            convertedPreferredContact = Number(preferredContact);
          }
          if (role === '') {
            var convertedRole = 0;
          } else {
            var convertedRole = Number(role);
          }
          if (organization === '') {
            var convertedOrganization = null;
          } else {
            var convertedOrganization = organization;
          }
          if (zipcode === '') {
            var convertedZip = null;
          } else {
            var convertedZip = Number(zipcode);
          }
          const newUserData = {
            firebase_id: fireBaseID,
            firstname: firstName,
            lastname: lastName,
            username: username,
            email: email,
            homephone: convertedHomePhone,
            mobile: convertedMobile,
            preferredcontact: convertedPreferredContact,
            city: city,
            state: state,
            zip: convertedZip,
            address1: convertedAddress1,
            address2: convertedAddress2,
            role: convertedRole,
            organization: convertedOrganization
          };
          console.log('Sending newUserData:', newUserData);
          axios.post(`${url}/api/profile/`, newUserData)
          .then((data) => {
            console.log('No whammies?', data);
            Router.push('/');
          })
          .catch(err => console.log('Whammies', err));
          // send newUserData to backend
          // get backend user info and set states
          // take to the appropriate listings
        })
        .catch((error) => {
          console.log('WHAMMIES', error);
          const errorCode = error.code;
          const errorMessage = error.message;
          // ...
        });
    } else {
      console.log('Ask them if they validate!');
    };
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container component="main" maxWidth="lg" className={classes.root}>
        <h1>Create Account</h1>
        <TableContainer component={Paper} >
          <Table className={classes.table}>
            <TableHead>
              <TableRow style={{ backgroundColor: 'grey', height: '2.5rem' }}>
                <TableCell style={{ rowspan: '3' }}>
                  Account
                </TableCell>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <NewUserListItem fields={accountRow} />
            </TableBody>
            <TableHead>
              <TableRow style={{ backgroundColor: 'grey', height: '2.5rem' }}>
                <TableCell style={{ rowspan: '3' }}>
                  Contact
                </TableCell>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <NewUserListItem fields={contactRow} />
            </TableBody>
            <TableHead>
              <TableRow style={{ backgroundColor: 'grey', height: '2.5rem' }}>
                <TableCell style={{ rowspan: '3' }}>
                  Address
                </TableCell>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <NewUserListItem fields={addressRow}/>
            </TableBody>
          </Table>
        </TableContainer>
        <Button onClick={ () => { handleSignUpClick(); }}>Sign Up</Button>
        <Button onClick={() => {Router.push('/')}}>Cancel</Button>
      </Container>
    </Layout>
  )
};

export default Profile;