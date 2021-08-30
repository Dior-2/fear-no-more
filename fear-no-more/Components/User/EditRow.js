import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const ChangeForm = ({ submit }) => {
  return (
    <form onSubmit={ submit }>
      <TextField />
      <Button variant="contained" size="small" type="submit">Submit</Button>
    </form>
  )
};

const EditRow = () => {
  const [editing, setEditing] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
    setEditing(false)
  };

  return (
    <React.Fragment>
      {
        editing ?
          <ChangeForm submit={ formSubmit }/> :
          <EditIcon onClick={ () => setEditing(true) }/>
      }
    </React.Fragment>
  )
};

export default EditRow;