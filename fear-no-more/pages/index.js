import React, {useState} from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../Components/layout';
import Link from 'next/link';
import firebase from '../firebase.js';
import NavBar from '../Components/Nav/NavBar';
import Testimony from '../Components/Home/Testimonials';
import Mission from '../Components/Home/Mission';
import Help from '../Components/Home/Help';
import Profile from './user/profile'

const Home = () => {
  const [username, setUsername] = useState('Guest');

  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
        <meta name="viewport" content="width=device-width, initial-scale=0.5" />
      </Head>

      <section>
        <Help />
        <Mission />
        <Testimony />
      </section>
    </Layout>
  )
};

export default Home;