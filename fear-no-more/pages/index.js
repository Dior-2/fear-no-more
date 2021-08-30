import Head from 'next/head';
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
      </Head>
      <section>
        <Profile />
      </section>
    </Layout>
  )
};

export default Home;