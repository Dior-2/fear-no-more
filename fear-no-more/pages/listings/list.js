import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  },
  fixed: {
  }
}));

export default function Listings() {
  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://18.222.198.9/api/listings/offers`)
        .then((response) => {
          setListData(response.data);
        })
        .catch((error) => {
          console.error(`ERROR :!:!:! ${error}`);
        });
    }
    fetchData();
  }, []);
  const [listData, setListData] = useState([]);


  // ~~~~~~~ STATE VARIABLES ~~~~~~~ //
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
  const [limit] = useState(parseInt(listData.length / 6));

  // THIS IS A CHUNK OF THE DATA THAT CHANGES ON
  // EACH CLICK OF EITHER INC OR DEC
  let projectList = listData.slice(nextPage, nextPage + 6);

  function incrementPage() {
    // SET PAGE NUMBER
    setPageNumber(pageNumber + 1);

    // SLICE NEW LIST FOR PAGE
    setPage(nextPage + 6);

    // WHEN FIRST CLICKING NEXT
    // SET listBegin TO FALSE
    setListBegin(false);

    // I ADDED A CONSTANT NUMBER (3)
    // BECAUSE limit STAYS AT 0
    // THIS HAS TO DO WITH useEffect AND
    // I AM NOT SURE HOW TO FIX IT
    if (pageNumber >= 3) {
      // SET LIST END TO true
      // THIS WILL DISABLE THE NEXT
      // PAGE BUTTON
      setListEnd(true);
    }
  }

  function decrementPage() {
    // SET nextPage SO PREVIOUS SLICE
    // IS DISPLAYED
    setPage(nextPage - 6);

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
        <Head>
          <title>Listings</title>
          <meta name="viewport" content="width=device-width, initial-scale=0.5" />
        </Head>

        <h1>Listings</h1>
        <Link href='/'><a>Home</a></Link>
        <div className={classes.root}>
          <Grid
            container
            alignItems='center'
            justifyContent='center'
            spacing={0}>
            {projectList.map((item, idx) => {
              let slicedWords = item.body.slice(0, 150);
              return (
                <ListingCard
                  key={idx}
                  title={item.title}
                  category={item.category.toUpperCase()}
                  body={`${slicedWords}...`} />

              )
            })}
          </Grid>
          <Grid
            container
            justifyContent='center'>

            <ButtonGroup
              className={classes.fixed}
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