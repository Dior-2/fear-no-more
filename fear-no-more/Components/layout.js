import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from './Nav/Header';
import Footer from './Nav/Footer';

export const siteTitle = "Fear No More";

const Layout = ({ children, home }) => {
  return (
    <div>
      <Head>
        <meta
          name="Fear No More"
          content="Helping people in need"
        />
        <meta name="og:title" content={ siteTitle } />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <Header />
      </header>
      <main>
        { children }
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout;