import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const ChangeForm = ({ submit }) => {
  return (
    <form onSubmit={submit}>
      <TextField />
    </form>
  )
};

const useStyles = makeStyles({
  button: {
    padding: '0'
  }
});

const EditRow = () => {
  const classes = useStyles();
  const [editing, setEditing] = useState(true);

  const formSubmit = (e) => {
    e.preventDefault();
    setEditing(false)
  };

  return (
    <React.Fragment>
      {
        editing ?
          <ChangeForm submit={formSubmit} /> :
          <EditIcon onClick={() => setEditing(true)} />
      }
    </React.Fragment>
  )
};

export default EditRow;