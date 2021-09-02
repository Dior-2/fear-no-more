import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';

import { Container } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Layout from '../../Components/layout';
import Thread from '../../Components/listings/Thread';
import CommentPost from '../../Components/listings/CommentPost';
import DetailCard from '../../Components/listings/DetailCard';

const useStyles = makeStyles({
  root: {
    display:        'flex',
    flexDirection:  'column',
    justifyContent: 'flex-start',
    alignItems:     'center',
    height:         '100vh',
    marginBottom:   '3rem',
    overflow:       'scroll'
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
    getThreads(3);
    getListing(3);
  }, []);

  const getListing = async (id) => {
    const { data } = await axios.get(`http://18.222.198.9/api/listings/requests?post_id=${id}`);
    setListing(data[0]);
  };

  const getThreads = async (id) => {
    const { data } = await axios.get(`http://18.222.198.9/api/comments?post_id=${id}`);
    setThreads(data);
  };

  return (
    <Layout>
      <Container maxWidth="lg" className={ classes.root }>
        <header className={ classes.header }>
          {/* <DetailCard props={ listing }/> */}
        </header>
        <section>
          {
            threads?.map((thread, i) =>
              <article key={ i } style={{ border: '4px solid blue' }}>
                <Thread key={ i } thread={ thread } />
              </article>
            )
          }
        </section>
          <br/>
          <CommentPost style={{ border: '1px solid' }} />

      </Container>
    </Layout>
  )
};

export default Detail;