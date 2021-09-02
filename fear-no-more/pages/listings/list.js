import React, { useState } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../../Components/layout';
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

  // SETS A VALUE FOR SLICING DATA AND
  // ONLY DISPLAYING 4 PROJECTS/PAGE
  const [nextPage, setPage] = useState(0);

  // SET TO TRUE ONCE THE END OF THE LIST
  // IS REACHED
  const [listEnd, setListEnd] = useState(false);

  // SET TO FALSE AFTER THE FIRST CLICK TO
  // GO TO NEXT PAGE OF PROJECTS
  const [listBegin, setListBegin] = useState(true);

  // DISPLAYS PAGE NUMBER BETWEEN BUTTONS
  // ALSO USED FOR CONDITIONAL TO CHECK IF
  // AT END OF LIST OR BEGINNING
  const [pageNumber, setPageNumber] = useState(1);

  // SETS THE TOTAL NUMBER OF PAGES
  // USED TO TEST IF PAGE NUMBER
  // REACHES END OF LIST
  const [limit] = useState(parseInt(data.length / 4));

  let projectList = data.slice(nextPage, nextPage + 4);

  function incrementPage() {
    // SET PAGE NUMBER
    setPageNumber(pageNumber + 1);
    // SLICE NEW LIST FOR PAGE
    setPage(nextPage + 4);

    // WHEN FIRST CLICKING NEXT
    // SET listBegin TO FALSE
    setListBegin(false);

    if (pageNumber >= limit) {
      // SET LIST END TO true
      // THIS WILL DISABLE THE NEXT
      // PAGE BUTTON
      setListEnd(true);
    }
  }

  function decrementPage() {
    // SET nextPage SO PREVIOUS SLICE
    // IS DISPLAYED
    setPage(nextPage - 4);

    // INCREMENT pageNumber
    setPageNumber(pageNumber - 1);

    // WHENEVER pageNumber IS DECREMENTED
    // SET listEnd TO false
    // THIS WILL RE-ENABLE THE INCREMENT BTN
    setListEnd(false);

    // IF pageNumber lt || eq to 2
    // WE ARE AT THE BEGINNING OF THE LIST
    if (pageNumber <= 2) {
      // THIS DISABLES THE DECREMENT BTN
      setListBegin(true);
    }
  }

  return (
    <>
      <Layout>
        <Head><title>Listings</title></Head>
        <h1>Listings</h1>
        <Link href='/'><a>Home</a></Link>
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
            <ButtonGroup
              variant="contained"
              color="secondary">
              <Button
                disabled={listBegin}
                onClick={() => decrementPage()}>Back</Button>
                <Button
                  color='primary'
                  disableRipple={true}>Page : {pageNumber}</Button>
              <Button
                disabled={listEnd}
                onClick={() => incrementPage()}>Next</Button>
            </ButtonGroup>
          </Grid>
        </div>
      </Layout>
    </>
  )
}