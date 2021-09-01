import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import EditRow from './EditRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper
} from '@material-ui/core';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    minWidth: '200px'
    // flexGrow: 1
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // display: 'flex',
  }
}))(TableRow);

const useStyles = makeStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25px',
  },
  cell: {
    minWidth: '500px'
  },
  edit: {
    cursor: 'pointer'
  }
});


const NewUserListItem = ({ fields }) => {
  const classes = useStyles();
  const [editing, setEditing] = useState(true);

  return (
    <StyledTableRow className={classes.root}>
      {
        fields.map((field, i) => {
          return (
            <StyledTableCell key={i}>
              <TextField  label={field.label}
                onChange={(e) => { field.setter(e.target.value); }}
              />
            </StyledTableCell>
          )
        })
      }
    </StyledTableRow>
  )
};

export default NewUserListItem;