import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Testimony from '../Components/Home/Testimonials'
import Mission from '../Components/Home/Mission'
import Help from '../Components/Home/Help'
// import Profile from './user/profile'

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section>
        <Mission />
      </section>
      <section>
        <Help />
      </section>
      <section>
        <Testimony />
        <h1>
          LISTINGS{' '}
          <Link href='/listings/list'><a>HERE</a></Link>
          <br/>
          <Link href='/user/profile'><a>Edit Profile</a></Link>
        </h1>
      </section>
    </Layout>
  )
};

export default Home;