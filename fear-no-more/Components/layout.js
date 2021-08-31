import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from './Nav/Header';
import Footer from './Nav/Footer';
import TopHeader from './Nav/TopHeader';
import BottomFooter from './Nav/BottomFooter';

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
      <TopHeader />
      <Header />
      <main>
        { children }
      </main>
      <Footer />
      <BottomFooter />
    </div>
  )
}

export default Layout;