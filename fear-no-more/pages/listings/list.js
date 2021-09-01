import React, { useState } from 'react';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../../Components/layout';
import List from '../../Components/Listings/List';
import ListingCard from '../../Components/Listings/ListingCard';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: '70%',
    margin: '0 auto',
  }
}));

import { getData } from '../../lib/data';
export async function getStaticProps() {
  const allData = getData()
  return {
    props: {
      allData
    }
  }
}

export default function Listings(allData) {
  const classes = useStyles();
  const data = allData.allData[0].parsedData.rows;

  const [nextPage, setPageForward] = useState(0);
  const [backPage, setPageBackward] = useState(0);
  let projectList = data.slice(nextPage, nextPage + 4);

  function incrementPage(array) {
    setPageForward(nextPage + 4);
    if (projectList.length <= 3) {
      setPageForward(0);
    }
  }
//  function decrementPage(array) {
//    setPageBackward
//  }

  return (
    <>
      <Layout>
        <Head><title>Listings</title></Head>
        <h1>Listings</h1>
        <Link href='/'><a>Home</a></Link>

        {/* LISTINGS */}
        <div className={classes.root}>
          <Grid
            container
            alignItems='center'
            justifyContent='center'
            spacing={0}>
            {projectList.map((item, idx) => {
              let slicedWords = item.words.slice(0, 150);
              return (
                <ListingCard
                  key={idx}
                  title={item.city}
                  words={`${slicedWords}...`} />
              )
            })}

            <ButtonGroup disableElevation variant="contained" color="secondary">
              <Button
                onClick={() => decrementPage()}>Back</Button>
              <Button
                onClick={() => incrementPage()}>Next Page</Button>
            </ButtonGroup>

          </Grid>
        </div>
      </Layout>
    </>
  )
}