import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section>

      </section>
    </Layout>
  )
}

export default Home;