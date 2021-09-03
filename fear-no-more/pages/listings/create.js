import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../../Components/layout';
import Request from '../../Components/Post/Request';

export default function Listings() {
  return (
    <Layout>
      <Head>
        <title>Listings</title>
        <meta name="viewport" content="width=device-width, initial-scale=0.5" />
      </Head>
      <Request />
    </Layout>
  )
}