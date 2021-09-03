import AuthContext from '../../pages/AuthContext.js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    marginTop: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '27ch',
    border: '1px solid black'
  }
}));

export default function PostRequest({ post_id, thread_id, email }) {
  const classes = useStyles();

  const [info, setInfo] = useState({
    post_id,
    thread_id,
    email,
    body: ''
  });

  const handleChange = (e) => {
    const text = e.target.value;
    const newInfo = {...info};
    newInfo.body = text;
    setInfo(newInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  const postComment = async (comment) => {
    await axios.post('', comment).catch(err => err);
  };

  return (
    <AuthContext.Consumer>
      {(value) => {
        return (
          <div className={ classes.container }>
            <form className={ classes.root } noValidate autoComplete="off" onSubmit={ (e) => handleSubmit(e) }>
              <TextField
                id="outlined-multiline-static"
                label="Leave some words"
                multiline
                rows= { 8 }
                columns= { 9 }
                defaultValue= ""
                variant= "outlined"
                onChange={ handleChange }
              />
            <Button type="submit" variant="contained" color="primary">Submit</Button>
            </form>
          </div>
        )
      }}
    </AuthContext.Consumer>
  );
}