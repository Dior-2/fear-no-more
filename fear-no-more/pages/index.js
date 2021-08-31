import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Testimony from '../Components/Home/Testimonials'
import Mission from '../Components/Home/Mission'
import Help from '../Components/Home/Help'
import Link from 'next/link';

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
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
        </h1>
      </section>
    </Layout>
  )
}

export default Home;