import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Testimony from '../Components/Home/Testimonials'

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section>
        
        <Testimony />
      </section>
    </Layout>
  )
}

export default Home;