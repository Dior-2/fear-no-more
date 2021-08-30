import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../Components/layout';

export default function Listings() {
  return (
    <>
      <Layout>
        <Head><title>Listings</title></Head>
        <h1>Listings</h1>
        <Link href='/'><a>Home</a></Link>
      </Layout>
    </>
  )
}