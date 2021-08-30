import React from 'react';

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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  table: {
    minWidth: 700,
  }
});

const Profile = ({ user }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="lg" className={ classes.root }>
      <TableContainer component={ Paper }>
        <Table className={ classes.table }>
          <TableHead>
            <h3>
              Account info
            </h3>
          </TableHead>
          <TableBody>
            <ProfileListItem label="Username" text="Spiderman" />
            <ProfileListItem label="Password" text="******" />
            <ProfileListItem label="Full Name" text="Peter Parker" />
            <ProfileListItem label="Address" text="1234 Find Me Way" />
            <ProfileListItem label="Role" text="Offering" />
          </TableBody>
          <TableHead>
            <h3>
              Contact Info
            </h3>
          </TableHead>
          <TableBody>
            <ProfileListItem label="Phone" text="(555) 123-3214" />
            <ProfileListItem label="Email" text="webcrawler@spidey.com" />
            <ProfileListItem label="Contact Method" text="phone" />
            <ProfileListItem label="Address" text="1234 Find Me Way" />
          </TableBody>
        </Table>
      </TableContainer>


    </Container>
  )
};

export default Profile;