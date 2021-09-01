import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../../Components/layout';
import List from '../../Components/Listings/List';
import ListingCard from '../../Components/Listings/ListingCard';
import Pagination from '../../Components/Listings/Pagination';

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

function pagination (array, count) {
  let chunk = array.slice(0, count);

}
export default function Listings(allData) {
  const classes = useStyles();
  const data = allData.allData[0].parsedData.rows;
  const [pageCount, setPageCount] = useState(0);

  // 6 ITEMS PER 'PAGE'
  // setPageCount(parseInt(data.length/4));

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
              {data.map((item, idx) => {
                let slicedWords = item.words.slice(0, 150);
                return (
                    <ListingCard
                      key={idx}
                      title={item.city}
                      words={`${slicedWords}...`} />
                )
              })}
              <Pagination
                count={4} />
            </Grid>
        </div>
      </Layout>
    </>
  )
}