import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileListItem from '../../Components/User/ProfileListItem';
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
    display:        'flex',
    flexDirection:  'column',
    justifyContent: 'center',
    alignItems:     'center',
    height:         '100vh',
  },
  table: {
    minWidth: 700,
  }
});

const Profile = ({ /*user*/ }) => {
  const classes = useStyles();


  const [user, setUser] = useState({});


  useEffect(() => {
    getUserData('zgoodlife1');
  }, [])


  const getUserData = async (username) => {
    try {
      const params = {username};
      const {data} = await axios.get(`http://18.222.198.9/api/profile`, {params});
      setUser(data);
    }
    catch(err) {
      return err
    }
  };



  return (
    <Container component="main" maxWidth="lg" className={ classes.root }>
    <h1>EDIT PROFILE</h1>
      <TableContainer component={ Paper }>
        <Table className={ classes.table }>
          <TableHead>
            <TableRow style={{ backgroundColor: 'grey', height: '2.5rem'}}>
              Account

            </TableRow>
          </TableHead>
          <TableBody>
            <ProfileListItem label="Username"     text="Spiderman" name="username"/>
            <ProfileListItem label="Password"     text="******"    name="password"/>
            <ProfileListItem label="First Name"   text="Peter"     name="firstName"/>
            <ProfileListItem label="Last Name"    text="Parker"    name="lastName"/>
            <ProfileListItem label="Role"         text="Offering"  name="role"/>
            <ProfileListItem label="Organization" text="Home"      name="organization"/>
          </TableBody>
          <TableHead>
            Contact
          </TableHead>
          <TableBody>
            <ProfileListItem label="Home Phone"     text=""                      name="homePhone"/>
            <ProfileListItem label="Cell Phone"     text="(555) 123-3214"        name="mobile"/>
            <ProfileListItem label="Email"          text="webcrawler@spidey.com" name="email"/>
            <ProfileListItem label="Contact Method" text="phone"                 name="preferredContact"/>
          </TableBody>
          <TableHead>
            Address
          </TableHead>
          <TableBody>
            <ProfileListItem label="City"      text="Gotham"           name="city"/>
            <ProfileListItem label="State"     text="California"       name="state"/>
            <ProfileListItem label="Zip"       text="98765"            name="zip"/>
            <ProfileListItem label="Address 1" text="1234 Find Me Way" name="address1"/>
            <ProfileListItem label="Address 2" text=""                 name="address2"/>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
};

export default Profile;