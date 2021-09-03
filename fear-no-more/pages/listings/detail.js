import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';

import { Container } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Layout from '../../Components/layout';
import Thread from '../../Components/listings/Thread';
import CommentPost from '../../Components/listings/CommentPost';
import DetailCard from '../../Components/listings/DetailCard';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display:        'flex',
    flexDirection:  'column',
    justifyContent: 'center',
    width: '800px',
    marginBottom:   '50px',
    alignItems: 'center',
  },
  header: {
    // margin:   '6rem',
    // fontSize: '2rem'
  }
});

const Detail = (/*{ listing }*/) => {
  const classes = useStyles();
  const [threads, setThreads] = useState();
  const [listing, setListing] = useState();
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    getListing(5);
    getThreads(5);
  }, [trigger]);

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

      <Typography gutterBottom variant="h4" component="h2" style={{ display: 'flex', justifyContent: 'center', marginTop: '100px', fontSize: '40px', fontWeight: '500', marginBottom: '60px' }}>
        Comments
      </Typography>

      <Container className={ classes.root }>
        <header className={ classes.header }>
        {/*
            ADD DETAIL FOR THE CURRENT LISTING
            PHOTO NOT WORKING FOR DETAILCARD
            NOT SURE IF COMMENT SHOULD GO HERE
         */ }
          {/* <DetailCard props={ listing }/> */}

        </header>



        <section>
          {
            threads?.map((thread, i) =>
              <article key={ i } style={{ backgroundColor: 'black' }}>
                <Thread
                  key={ i }
                  thread={ thread }
                  setTrigger={ setTrigger }
                  trigger={ trigger }/>
              </article>
            )
          }
        </section>

      </Container>

          <CommentPost
            style={{ display: 'flex', justifyContent: 'center', width: '800px', marginBottom: '500px' }}
            setTrigger={ setTrigger }
            trigger={ trigger }/>
    </Layout>
  )
};

export default Detail;