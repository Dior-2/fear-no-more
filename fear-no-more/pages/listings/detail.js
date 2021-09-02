import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Layout from '../../Components/layout';
import Thread from '../../Components/listings/Thread';
import PostListing from '../../Components/listings/PostListing';

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
  const [listing, setListing] = useState();

  useEffect(() => {
    getThreads(6);
    // getListing(6);
  }, []);

  const getListing = async (id = 6) => {
    const { data } = await axios.get(`http://18.222.198.9/api/listings/requests?post_id=${id}`);
  };

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
              <article key={ i } style={{ border: '4px solid blue' }}>
                <Thread key={ i }thread={ thread } />
              </article>
            )
          }
        </section>
          <br/>
          <PostListing />

      </Container>
    </Layout>
  )
};

export default Detail;