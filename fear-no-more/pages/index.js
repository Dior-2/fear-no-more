import Head from 'next/head';
import Layout, { siteTitle } from '../Components/layout';
import Link from 'next/link';
import firebase from '../firebase.js';

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section>
        <div>
          It's a test page. It's a page and it is tiny.
        </div>
        <button>
          <Link href="/login">Login</Link>
        </button>
        <button type="button">
          <Link href="/signup">Sign up</Link>
        </button>
      </section>
    </Layout>
  )
}

export default Home;