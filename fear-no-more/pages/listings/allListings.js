import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../Components/layout';

import ListingCard from '../../Components/Listings/ListingCard';

export default function Listings() {
  return (
    <>
      <Layout>
        <Head><title>Listings</title></Head>
        <h1>Listings</h1>
        <Link href='/'><a>Home</a></Link>
        <ListingCard />
      </Layout>
    </>
  )
}