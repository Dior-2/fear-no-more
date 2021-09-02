import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Layout from '../../Components/layout';
import Thread from '../../Components/listings/Thread';

const useStyles = makeStyles({
  root: {
    display:        'flex',
    flexDirection:  'column',
    justifyContent: 'flex-start',
    alignItems:     'center',
    height:         '100vh',
    marginBottom:   '3rem'
  },
  header: {
    margin:   '6rem',
    fontSize: '2rem'
  }
});

const Detail = () => {
  const classes = useStyles();
  const [threads, setThreads] = useState();

  useEffect(() => {
    getThreads(6);
  }, []);

  const getThreads = async (id = 6) => {
    const { data } = await axios.get(`http://18.222.198.9/api/comments?post_id=${id}`);
    setThreads(data);
  };

  return (
    <Layout>
      <Container maxWidth="lg" className={ classes.root }>
        <header className={ classes.header }>
          THIS SHOULD HAVE THE LiSTING INFORMATION
        </header>
        <section>
          {
            threads?.map((thread, i) =>
              <article key={ i } style={{ border: '4px solid pink' }}>
                <Thread key={ i }thread={ thread } />
              </article>
            )
          }
        </section>
      </Container>
    </Layout>
  )
};

export default Detail;