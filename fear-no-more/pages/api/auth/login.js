import Head from 'next/head';
import Layout, { siteTitle } from '../../../Components/layout';
import Link from 'next/link';

const Login = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <button type="button">
          <Link href="/">I want to go home :(</Link>
        </button>
      </section>
    </Layout>
  )
}

export default Login;