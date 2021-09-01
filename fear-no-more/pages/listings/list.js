import Link from 'next/link';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../../Components/layout';
import List from '../../Components/Listings/List';
import ListingCard from '../../Components/Listings/ListingCard';
const useStyles = makeStyles(() => {
  root: {
    flexGrow: 1
  }
})

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
  const data = allData.allData[0].parsedData.rows;
  const classes = useStyles();

  return (
    <>
      <Layout>
          <Head><title>Listings</title></Head>
        <h1>Listings</h1>
        <Link href='/'><a>Home</a></Link>

        {/* LISTINGS */}
        <div className={classes.root}>
          <Grid container spacing={3}>
              {data.map((item, idx) => {
                let slicedWords = item.words.slice(0, 150);
                return (
                    <ListingCard
                      key={idx}
                      title={item.city}
                      words={`${slicedWords}...`} />
                )
              })}
            </Grid>
        </div>
      </Layout>
    </>
  )
}