import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const ChangeForm = ({ submit }) => {
  return (
    <form onSubmit={ submit }>
      <TextField />
      <Button variant="contained" size="small" type="submit">Submit</Button>
    </form>
  )
};

const useStyles = makeStyles({
  button: {
    padding: '0'
  }
});

const EditCol = ({ submit, name }) => {
  const classes = useStyles();

  const [editing, setEditing] = useState(false);
  // const [userInfo, setUserInfo] = useState();

  const formSubmit = (e) => {
    e.preventDefault();
    setEditing(false);

    // submit(e, 'is this making it back?');

    //NEED TO SET THE INPUt FIELD BACK TO EMPTY
  };

  return (
    <React.Fragment>
      {
        editing ?
          <ChangeForm name={ name } submit={ (e) => {
            formSubmit(e, name)
            submit(e, name)
          }}/> :
          <EditIcon onClick={ () => setEditing(true) }/>
      }
    </React.Fragment>
  )
};

export default EditCol;