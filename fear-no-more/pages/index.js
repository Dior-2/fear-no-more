import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section>
        WE ARE WORKING
      </section>
    </Layout>
  )
}

export default Home;