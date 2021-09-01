import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Testimony from '../Components/Home/Testimonials'
import Mission from '../Components/Home/Mission'
import Help from '../Components/Home/Help'
import Profile from './user/profile'

const Home = () => {
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