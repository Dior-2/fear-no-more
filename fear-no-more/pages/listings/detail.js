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

const Detail = (/*{ listing }*/) => {
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

  //NEED TO PASS CONTEXT TO THIS PAGE
  return (
    <Layout>
      <Container maxWidth="lg" className={ classes.root }>
        <header className={ classes.header }>
        {/*
            ADD DETAIL FOR THE CURRENT LISTING
            PHOTO NOT WORKING FOR DETAILCARD
            NOT SURE IF COMMENT SHOULD GO HERE
         */ }
          {/* <DetailCard props={ listing }/> */}
          {/* <CommentPost /> */}
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
          {/* <br/>
          <CommentPost /> */}

      </Container>
    </Layout>
  )
};

export default Detail;