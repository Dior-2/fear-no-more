import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CommentIcon from '@material-ui/icons/Comment';
import {
Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@material-ui/core';

import Comment from '../../Components/Listings/Comment';

const Thread = ({ thread }) => {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) =>{
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion sqaure expanded={ expanded === 'panel1' } onChange={ handleChange('panel1') }>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
          <div>
            @{ thread[0].username }
            <br />
            { thread[0].body }
          </div>
          <div></div>
          </Typography>
        </AccordionSummary>
          {
            thread.slice(1).map((c, i) =>
              <AccordionDetails key={ i } >
                <Comment comment={ c } key={ i }/>
              </AccordionDetails>
          )}
      </Accordion>
    </div>
  )
};

export default Thread;