// import React, { useState } from 'react';

// const CommentPost = ({ post_id, thread_id, email }) => {
//   const [info, setInfo] = useState({
//     post_id,
//     thread_id,
//     email,
//     body: ''
//   });

//   const handleChange = (e) => {
//     const value = e.target.value;
//     const newInfo = info;
//     newInfo[body] = value;
//     setInfo(newInfo);
//   };


import AuthContext from '../../pages/AuthContext.js';
import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import axios from 'axios';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { Formik, Field, Form } from "formik";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

export default function PostRequest({  }) {
  const classes = useStyles();

  const [info, setInfo] = useState()

  const handleChange = (e) => {
    const text = e.target.value;
    console.log(text)
  };

  return (
    <AuthContext.Consumer>
      {(value) => {
        return (
          <div className={ classes.container }>
            <form className={ classes.root } noValidate autoComplete="off" onSubmit={ (e) => handleSubmit(e) }>

                {/* <h3>Leave a comment</h3> */}
                <TextField
                  id="outlined-multiline-static"
                  label="Leave some words"
                  multiline
                  rows={8}
                  columns={9}
                  defaultValue=""
                  variant="outlined"
                  onChange={ handleChange }
                />

            <Button variant="contained" color="primary">Submit</Button>
            </form>
          </div>
        )
      }}
    </AuthContext.Consumer>
  );
}