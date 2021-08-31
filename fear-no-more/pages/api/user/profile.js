import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }
});

const Profile = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="md" className={ classes.root }>
      PROFILE PAGE
    </Container>
  )
};

export default Profile;