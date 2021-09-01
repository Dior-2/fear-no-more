import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    padding: '0'
  }
});

const EditCol = ({ submit, name }) => {
  const classes = useStyles();

  const [editing, setEditing] = useState(false);
  const [userInfo, setUserInfo] = useState('');

  const resetForm = (e) => {
    e.preventDefault();
    setEditing(false);
    setUserInfo('');
  };

  const handleChange = (e) => setUserInfo(e.target.value);

  return (
    <>
      {
        editing ?
          <form onSubmit={ (e) => {
            resetForm(e, name)
            submit(e, name, userInfo) }}
          >
            <TextField
              name={ name }
              value={ userInfo }
              onChange={ (e) => handleChange(e) }
            />
          <Button variant="contained" size="small" type="submit">Submit</Button>
          <Button variant="contained" size="small" onClick={ (e) => resetForm(e) }>X</Button>
          </form> :
          <EditIcon onClick={ () => setEditing(true) }/>
      }
    </>
  )
};

export default EditCol;