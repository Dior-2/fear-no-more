import React, { useState } from 'react';
import axios from 'axios';
import CommentIcon from '@material-ui/icons/Comment';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  TextField,
  Typography
} from '@material-ui/core';
import DisplayComment from '../../Components/Listings/DisplayComment';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    form: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
}}));

const Thread = ({ thread }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState('');
  const [threadComment, setThreadComment] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const threadCommentChange = (e) => {
    const text = e.target.value;
    setThreadComment(text);
  };

  /////////////////////////////////////////////////////
  //STILL NEED TO TEST THAT THE POST REQUEST IS WORKING
  /////////////////////////////////////////////////////
  const addComment = async (e) => {
    e.preventDefault();
    const comment = {
      ///////////////////////////////////////
      //MOST OF THIS SHOULD COME FROM CONTEXT
      post_id: thread[0].post_id,
      thread_id: thread[0].thread_id,
      email: 'need to get this from context',
      body: threadComment
    }

    if (threadComment !== '') {
      await axios.post(`http://18.222.198.9/api/comments`, comment).catch(err => err);
    }
    setThreadComment('');
  };

  return (
    <div>
      <Accordion sqaure expanded={ expanded === 'panel1' } onChange={ handleChange('panel1') }>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div style={{ width: '100%'}}>
            @{ thread[0].username }<br />
            { thread[0].body }
          </div>
          <CommentIcon />

        </AccordionSummary>
          <AccordionDetails>
            <form onSubmit={(e) => addComment(e)} className={ classes.form }>
              <TextField
                variant="outlined"
                type="text"
                value={ threadComment }
                onChange={ threadCommentChange }/>
              <Button
                variant="contained"
                color="primary"
                type="submit">SUBMIT</Button>
            </form>
          </AccordionDetails>
          {
            thread.slice(1).map((c, i) =>
              <AccordionDetails key={ i } >
                <DisplayComment comment={ c } key={ i }/>
              </AccordionDetails>
          )}
      </Accordion>
    </div>
  )
};

export default Thread;