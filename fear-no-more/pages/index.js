import React, {useState} from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../Components/layout';
import Link from 'next/link';
import firebase from '../firebase.js';
import NavBar from '../Components/Nav/NavBar';
import Testimony from '../Components/Home/Testimonials';
import Mission from '../Components/Home/Mission';
import Help from '../Components/Home/Help';
import Profile from './api/user/profile';

const Home = () => {
  const [username, setUsername] = useState('Guest');

  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <NavBar username={username} setUsername={setUsername} />
      <section>
        {/* <section>
          <Profile />
        </section> */}
        <section>
          <Mission />
        </section>
        <section>
          <Help />
        </section>
        <section>
          <Testimony />
        </section>
      </section>
    </Layout>
  )
}

export default Home;