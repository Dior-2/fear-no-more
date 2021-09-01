import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileItem from '../../Components/User/ProfileItem';
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
    marginBottom:   '3rem'
  },
  table: {
    minWidth: 700,
  }
});

const Profile = ({ /*user*/ }) => {
  const classes = useStyles();
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserData('bear@bear.com');
  }, []);

  const getUserData = async (email) => {
    const params = {email};
    const {data} = await axios.get(`http://18.222.198.9/api/profile`, {params}).catch(err => err);
    setUser(data[0]);
  };

  const updateProfile = async (e, name, userInfo) => {
    e.preventDefault();

    const data = {...user, ogemail: user.email, [name]: userInfo};

    await axios.put(`http://18.222.198.9/api/profile`, data)
      .then(() => getUserData('bearb@bear.com'))
      .catch(err => console.log(err))
  };

  return (
    <Container component="main" maxWidth="lg" className={ classes.root }>
    <h1>EDIT PROFILE</h1>
      <TableContainer component={ Paper } >
        <Table className={ classes.table }>
          <TableHead>
            <TableRow style={{ backgroundColor: 'grey', height: '2.5rem'}}>
              <TableCell>
                Account
              </TableCell>
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            <ProfileItem label="Username"     text={user.username}     name="username" submit={ updateProfile }/>
            <ProfileItem label="Password"     text="******"            name="password" submit={ updateProfile }/>
            <ProfileItem label="First Name"   text={user.firstname}    name="firstname" submit={ updateProfile }/>
            <ProfileItem label="Last Name"    text={user.lastname}     name="lastname" submit={ updateProfile }/>
            <ProfileItem label="Role"         text={user.role}         name="role" submit={ updateProfile }/>
            <ProfileItem label="Organization" text={user.organization} name="organization" submit={ updateProfile }/>
          </TableBody>
          <TableHead>
            <TableRow style={{ backgroundColor: 'grey', height: '2.5rem'}}>
              <TableCell>
                Contact
              </TableCell>
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            <ProfileItem label="Home Phone"     text={user.homephone}        name="homephone" submit={ updateProfile }/>
            <ProfileItem label="Cell Phone"     text={user.mobile}           name="mobile" submit={ updateProfile }/>
            <ProfileItem label="Email"          text={user.email}            name="email" submit={ updateProfile }/>
            <ProfileItem label="Contact Method" text={user.preferredcontact} name="preferredcontact" submit={ updateProfile }/>
          </TableBody>
          <TableHead>
          <TableRow style={{ backgroundColor: 'grey', height: '2.5rem'}}>
              <TableCell>
                Address
              </TableCell>
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            <ProfileItem label="City"      text={user.city}     name="city" submit={ updateProfile }/>
            <ProfileItem label="State"     text={user.state}    name="state" submit={ updateProfile }/>
            <ProfileItem label="Zip"       text={user.zip}      name="zip" submit={ updateProfile }/>
            <ProfileItem label="Address 1" text={user.address1} name="address1" submit={ updateProfile }/>
            <ProfileItem label="Address 2" text={user.address2} name="address2" submit={ updateProfile }/>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
};

export default Profile;