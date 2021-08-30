import React from 'react';

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  }
}))(TableRow);

const useStyles = makeStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '4rem',
  },
  cell: {
    minWidth: '8rem'
  }
});

const ProfileListItem = ({ label, text }) => {
  const classes = useStyles();

  return (
    <StyledTableRow>
      <StyledTableCell className={ classes.cell }component="th" scope="row">{ label }</StyledTableCell>
      <StyledTableCell component="th" scope="row">{ text }</StyledTableCell>
    </StyledTableRow>
  )
};

export default ProfileListItem;